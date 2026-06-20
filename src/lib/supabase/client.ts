import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ijvqpcllvjuqghcrqfoz.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqdnFwY2xsdmp1cWdoY3JxZm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTQ2MzAsImV4cCI6MjA5NjQ5MDYzMH0.e-c7_5OCB_O4nVg7IoR1DbzIQgclzjq8sxhaZFrcGMI";

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
