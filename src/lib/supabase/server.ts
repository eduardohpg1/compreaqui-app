import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ijvqpcllvjuqghcrqfoz.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqdnFwY2xsdmp1cWdoY3JxZm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTQ2MzAsImV4cCI6MjA5NjQ5MDYzMH0.e-c7_5OCB_O4nVg7IoR1DbzIQgclzjq8sxhaZFrcGMI";

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
