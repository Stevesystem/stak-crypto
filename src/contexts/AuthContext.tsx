
import { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import type { UserProfile } from "@/types/database";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper function to add delay for retries with exponential backoff
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [lastFetchTime, setLastFetchTime] = useState(0);
  const MAX_RETRIES = 3;
  const MIN_FETCH_INTERVAL = 10000; // Minimum 10 seconds between profile fetches

  useEffect(() => {
    // Set up auth state listener FIRST with proper error handling
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        console.log("Auth state changed:", event);
        
        // Update session and user synchronously to prevent race conditions
        setSession(newSession);
        setUser(newSession?.user ?? null);
        
        // If user is logged in, fetch their profile with throttling
        if (newSession?.user) {
          const now = Date.now();
          if (now - lastFetchTime > MIN_FETCH_INTERVAL) {
            setLastFetchTime(now);
            // Use setTimeout to avoid deadlock with Supabase auth
            setTimeout(() => {
              fetchUserProfile(newSession.user.id);
            }, 100);
          }
        } else {
          setProfile(null);
        }
      }
    );

    // THEN check for existing session with proper error handling
    const initializeAuth = async () => {
      try {
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        
        console.log("Initial session check:", initialSession?.user?.email);
        
        setSession(initialSession);
        setUser(initialSession?.user ?? null);
        
        if (initialSession?.user) {
          await fetchUserProfile(initialSession.user.id);
        }
      } catch (err) {
        console.error("Error in auth initialization:", err);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log("Fetching profile for user:", userId);
      
      // Only attempt to fetch profile if we have a valid user ID
      if (!userId) {
        console.error("No user ID provided for profile fetch");
        return;
      }
      
      // Use maybeSingle instead of single to handle potential missing profiles
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      if (error) {
        console.error("Error fetching user profile:", error);
        
        // If we've hit the retry limit, stop trying to avoid infinite loops
        if (retryCount >= MAX_RETRIES) {
          console.error("Max retries reached for profile fetch");
          return;
        }
        
        // Handle rate limiting with exponential backoff
        if (error.message?.includes("rate limit")) {
          const backoffTime = Math.min(Math.pow(2, retryCount) * 1000, 30000); // Max 30 second delay
          console.log(`Rate limited, retrying in ${backoffTime}ms`);
          setRetryCount(prev => prev + 1);
          await delay(backoffTime);
          fetchUserProfile(userId);
          return;
        }
        
        return;
      }
      
      // Reset retry count on successful fetch
      setRetryCount(0);
      console.log("Profile data:", data);
      
      // If we don't have a profile yet, create one
      if (!data) {
        console.log("No profile found, creating one for user:", userId);
        try {
          const userData = await supabase.auth.getUser();
          const userMetadata = userData.data.user?.user_metadata;
          
          const { data: newProfile, error: insertError } = await supabase
            .from('user_profiles')
            .insert({
              id: userId,
              email: userData.data.user?.email,
              username: userMetadata?.username || userData.data.user?.email?.split('@')[0] || '',
              wallet_address: userMetadata?.wallet_address || ''
            })
            .select()
            .single();
            
          if (insertError) {
            console.error("Error creating user profile:", insertError);
            return;
          }
          
          console.log("New profile created:", newProfile);
          setProfile(newProfile as UserProfile);
        } catch (err) {
          console.error("Error in profile creation:", err);
        }
      } else {
        setProfile(data as UserProfile);
      }
    } catch (error) {
      console.error("Error in fetchUserProfile:", error);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Error signing out:", error.message);
      } else {
        setUser(null);
        setSession(null);
        setProfile(null);
      }
    } catch (error) {
      console.error("Error in signOut:", error);
    }
  };

  const contextValue: AuthContextType = {
    user, 
    session, 
    profile, 
    loading, 
    signOut
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
