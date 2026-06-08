import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const SUPABASE_URL = "https://ijvqpcllvjuqghcrqfoz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_RM6a72wALQDNFV5wPoC1Dg_HPAqzEEC";

export async function createClient() {
  const cookieStore = await cookies();
  const cookieName = `sb-ijvqpcllvjuqghcrqfoz-auth-token`;
  const rawCookie = cookieStore.get(cookieName)?.value;

  let accessToken: string | undefined;
  if (rawCookie) {
    try {
      const parsed = JSON.parse(rawCookie);
      accessToken = parsed.access_token;
    } catch {
      // ignora cookie malformado
    }
  }

  const client = createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: accessToken
      ? { headers: { Authorization: `Bearer ${accessToken}` } }
      : {},
  });

  return client;
}
