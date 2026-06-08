import { createBrowserClient } from "@supabase/ssr";

const SUPABASE_URL = "https://ijvqpcllvjuqghcrqfoz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_RM6a72wALQDNFV5wPoC1Dg_HPAqzEEC";

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
