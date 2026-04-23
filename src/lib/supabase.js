import { createClient } from "@supabase/supabase-js";

let supabase = null;
try {
  const url = process.env.REACT_APP_SUPABASE_URL;
  const key = process.env.REACT_APP_SUPABASE_ANON_KEY;
  if (url && key) supabase = createClient(url, key);
} catch {
  // invalid credentials — app will use static fallback data
}

export default supabase;
