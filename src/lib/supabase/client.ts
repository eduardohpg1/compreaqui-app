import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zalrkbxpofetrqyrdrbs.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbHJrYnhwb2ZldHJxeXJkcmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2NTUzNTYsImV4cCI6MjA5NDIzMTM1Nn0.zkkt9RCF3zau_-Xw2NqOlXEbWZ37OS0RTHlZyVyF9gc";

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
