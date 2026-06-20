import { NextResponse, type NextRequest } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ijvqpcllvjuqghcrqfoz.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqdnFwY2xsdmp1cWdoY3JxZm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTQ2MzAsImV4cCI6MjA5NjQ5MDYzMH0.e-c7_5OCB_O4nVg7IoR1DbzIQgclzjq8sxhaZFrcGMI";

export async function updateSession(request: NextRequest) {
  // Tenta ler o token do cookie do @supabase/ssr (novo formato)
  const cookieName = `sb-ijvqpcllvjuqghcrqfoz-auth-token`;
  const rawCookie = request.cookies.get(cookieName)?.value;

  if (rawCookie) {
    try {
      const parsed = JSON.parse(rawCookie);
      const accessToken = parsed.access_token;
      if (accessToken) {
        // Verifica o token com a API do Supabase
        const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            apikey: SUPABASE_ANON_KEY,
          },
        });
        if (res.ok) {
          return NextResponse.next({ request });
        }
      }
    } catch {
      // cookie malformado, redireciona
    }
  }

  // Sem token válido → redireciona para login
  const url = request.nextUrl.clone();
  url.pathname = "/admin/login";
  return NextResponse.redirect(url);
}
