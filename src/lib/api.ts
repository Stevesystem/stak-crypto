import { supabase } from './supabase'
import type { UserProfile, TransactionHistory } from '../types/database'

// User Profile Functions
export const getUserProfile = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')

  const { data, error } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', user.id)
    .single()
  
  if (error) throw error
  return data as UserProfile
}

export const createUserProfile = async (profile: Omit<UserProfile, 'id' | 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase
    .from('user_profiles')
    .insert(profile)
    .select()
    .single()
  
  if (error) throw error
  return data as UserProfile
}

// Transaction History Functions
export const createTransaction = async (transaction: Omit<TransactionHistory, 'id' | 'created_at'>) => {
  const { data, error } = await supabase
    .from('transaction_history')
    .insert(transaction)
    .select()
    .single()
  
  if (error) throw error
  return data as TransactionHistory
}

export const getUserTransactions = async (userId: string) => {
  const { data, error } = await supabase
    .from('transaction_history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  
  if (error) throw error
  return data as TransactionHistory[]
}

// Auth Functions
export const signUp = async (email: string, password: string, username: string, wallet_address: string) => {
  try {
    // Sign up the user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    })
    
    if (authError) {
      console.error('Auth Error:', authError)
      throw authError
    }

    console.log('Auth Success:', authData)

    // Create user profile
    if (authData.user) {
      const { data: profileData, error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: authData.user.id,
          email,
          username,
          wallet_address
        })
        .select()
        .single()
      
      if (profileError) {
        console.error('Profile Error:', profileError)
        throw profileError
      }

      console.log('Profile Created:', profileData)
      return profileData
    }
  } catch (error) {
    console.error('Signup Error:', error)
    throw error
  }
}