import { createClient } from '@supabase/supabase-js'

// We create a singleton client per request or global if needed.
// For the API route, we can just instantiate it here.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
