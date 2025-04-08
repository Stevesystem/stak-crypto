
import { createClient } from '@supabase/supabase-js'

// Use the project URL and key from the Supabase integration
const supabaseUrl = "https://fopkaqamuezrusuuiepy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvcGthcWFtdWV6cnVzdXVpZXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTU1ODMsImV4cCI6MjA1OTY3MTU4M30.QDEsp1vfOf6CnNYdox3CKEYBm7AtYAesq72cTFkLBak"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})

// Test function to verify connection
export const testConnection = async () => {
  try {
    console.log("Testing Supabase connection to:", supabaseUrl)
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
