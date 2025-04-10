
import { supabase } from '@/integrations/supabase/client';
import type { UserProfile, TransactionHistory } from '../types/database';

// User Profile Functions
export const getUserProfile = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error('Not authenticated');

  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single();
  
  if (error) throw error;
  return data as UserProfile;
};

export const createUserProfile = async (profile: Omit<UserProfile, 'created_at' | 'updated_at'>) => {
  // The id is required for the user_profiles table
  if (!profile.id) {
    throw new Error('User ID is required to create a profile');
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .insert(profile)
    .select()
    .single();
  
  if (error) throw error;
  return data as UserProfile;
};

// Transaction History Functions
export const createTransaction = async (transaction: Omit<TransactionHistory, 'id' | 'created_at'>) => {
  try {
    console.log('Creating transaction:', transaction);
    const { data, error } = await supabase
      .from('transaction_history')
      .insert(transaction)
      .select()
      .single();
    
    if (error) {
      console.error('Error creating transaction:', error);
      throw error;
    }
    console.log('Transaction created:', data);
    return data as TransactionHistory;
  } catch (err) {
    console.error('Transaction creation failed:', err);
    throw err;
  }
};

export const getUserTransactions = async (userId: string) => {
  try {
    console.log('Fetching transactions for user:', userId);
    const { data, error } = await supabase
      .from('transaction_history')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
    
    console.log('Transactions fetched:', data);
    return data as TransactionHistory[];
  } catch (err) {
    console.error('Transaction fetch failed:', err);
    throw err;
  }
};

// Auth Functions
export const signUp = async (email: string, password: string, username: string, wallet_address: string) => {
  try {
    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          wallet_address
        },
        emailRedirectTo: window.location.origin + '/dashboard'
      }
    });
    
    if (authError) {
      console.error('Auth Error:', authError);
      throw authError;
    }

    console.log('Auth Success:', authData);
    return authData;
  } catch (error) {
    console.error('Signup Error:', error);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Sign in error:', error);
    throw error;
  }
};
