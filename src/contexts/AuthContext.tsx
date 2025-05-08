
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

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log("Auth state changed:", event, newSession?.user?.email);
        
        // Update session and user synchronously
        setSession(newSession);
        setUser(newSession?.user ?? null);
        
        // If user is logged in, fetch their profile
        if (newSession?.user) {
          // Use setTimeout to avoid deadlock with Supabase auth
          setTimeout(() => {
            fetchUserProfile(newSession.user.id);
          }, 0);
        } else {
          setProfile(null);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      console.log("Initial session check:", initialSession?.user?.email);
      
      setSession(initialSession);
      setUser(initialSession?.user ?? null);
      
      if (initialSession?.user) {
        fetchUserProfile(initialSession.user.id);
      }
      setLoading(false);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      console.log("Fetching profile for user:", userId);
      
      // Use maybeSingle instead of single to handle potential missing profiles
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();
      
      if (error) {
        console.error("Error fetching user profile:", error);
        return;
      }
      
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

  return (
    <AuthContext.Provider value={{ user, session, profile, loading, signOut }}>
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
