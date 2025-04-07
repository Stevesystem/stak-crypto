import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Add this test function
export const testConnection = async () => {
  try {
    const { data, error } = await supabase.from('user_profiles').select('*').limit(1)
    if (error) {
      console.error('Connection Error:', error)
      return false
    }
    console.log('Connection successful:', data)
    return true
  } catch (error) {
    console.error('Test failed:', error)
    return false
  }
}