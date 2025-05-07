
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

// Update user's wallet balance
export const updateWalletBalance = async (userId: string, amount: number, isDeposit: boolean) => {
  try {
    // Get the current user profile
    const { data: userProfile, error: fetchError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();
    
    if (fetchError) throw fetchError;
    
    // Calculate the new balance
    const currentBalance = userProfile?.wallet_balance || 0;
    const newBalance = isDeposit ? currentBalance + amount : currentBalance - amount;
    
    // Update the user's wallet balance
    const { data, error } = await supabase
      .from('user_profiles')
      .update({ wallet_balance: newBalance, updated_at: new Date().toISOString() })
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data as UserProfile;
  } catch (err) {
    console.error('Failed to update wallet balance:', err);
    throw err;
  }
};

// Transaction History Functions
export const createTransaction = async (transaction: Omit<TransactionHistory, 'id' | 'created_at'>) => {
  try {
    // Get the current session to ensure we're authenticated
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      throw new Error('Not authenticated');
    }
    
    console.log('Creating transaction with session:', session);
    
    // Make sure the user_id matches the current authenticated user
    // This is crucial for RLS policies to work correctly
    if (transaction.user_id !== session.user.id) {
      console.warn('Transaction user_id does not match authenticated user, correcting...');
      transaction.user_id = session.user.id;
    }
    
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
    
    // If transaction status is completed and it's a deposit, update the wallet balance
    if (transaction.status === 'completed' && transaction.transaction_type === 'deposit') {
      await updateWalletBalance(transaction.user_id, transaction.amount, true);
    } else if (transaction.status === 'completed' && transaction.transaction_type === 'withdrawal') {
      await updateWalletBalance(transaction.user_id, transaction.amount, false);
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

// Update a transaction's status
export const updateTransactionStatus = async (transactionId: string, status: 'pending' | 'completed' | 'failed') => {
  try {
    // First get the transaction details
    const { data: transactionData, error: fetchError } = await supabase
      .from('transaction_history')
      .select('*')
      .eq('id', transactionId)
      .single();
    
    if (fetchError) throw fetchError;
    
    // Update the transaction status
    const { data, error } = await supabase
      .from('transaction_history')
      .update({ status })
      .eq('id', transactionId)
      .select()
      .single();
    
    if (error) throw error;
    
    // If status changed to completed, update wallet balance
    if (status === 'completed' && transactionData) {
      if (transactionData.transaction_type === 'deposit') {
        await updateWalletBalance(transactionData.user_id, transactionData.amount, true);
      } else if (transactionData.transaction_type === 'withdrawal') {
        await updateWalletBalance(transactionData.user_id, transactionData.amount, false);
      }
    }
    
    return data as TransactionHistory;
  } catch (err) {
    console.error('Failed to update transaction status:', err);
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
