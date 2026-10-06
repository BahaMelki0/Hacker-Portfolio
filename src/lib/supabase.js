import { createClient } from "@supabase/supabase-js";

let supabase = null;
try {
  const url = import.meta.env.VITE_SUPABASE_URL || import.meta.env.REACT_APP_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.REACT_APP_SUPABASE_ANON_KEY;
  if (url && key) supabase = createClient(url, key);
} catch {
  // invalid credentials — app will use static fallback data
}

export default supabase;
