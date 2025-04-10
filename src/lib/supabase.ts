
// This file is being kept as a compatibility layer
// Please use the standardized client from @/integrations/supabase/client
import { supabase } from "@/integrations/supabase/client";

// Re-export the client to maintain backward compatibility
export { supabase };

// Test function to verify connection
export const testConnection = async () => {
  try {
    console.log("Testing Supabase connection...");
    const { data, error } = await supabase.from('user_profiles').select('*').limit(1);
    if (error) {
      console.error('Connection Error:', error);
      return false;
    }
    console.log('Connection successful:', data);
    return true;
  } catch (error) {
    console.error('Test failed:', error);
    return false;
  }
};
