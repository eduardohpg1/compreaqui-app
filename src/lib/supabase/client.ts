import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ijvqpcllvjuqghcrqfoz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_RM6a72wALQDNFV5wPoC1Dg_HPAqzEEC";

function getStoredToken(): string | undefined {
  if (typeof document === "undefined") return undefined;
  const cookieName = `sb-ijvqpcllvjuqghcrqfoz-auth-token`;
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith(cookieName + "="));
  if (!match) return undefined;
  try {
    const val = decodeURIComponent(match.split("=").slice(1).join("="));
    return JSON.parse(val).access_token;
  } catch {
    return undefined;
  }
}

export function createClient() {
  const accessToken = getStoredToken();
  return createSupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: accessToken
      ? { headers: { Authorization: `Bearer ${accessToken}` } }
      : {},
  });
}
