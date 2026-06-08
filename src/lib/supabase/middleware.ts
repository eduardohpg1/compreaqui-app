import { NextResponse, type NextRequest } from "next/server";

const SUPABASE_URL = "https://ijvqpcllvjuqghcrqfoz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_RM6a72wALQDNFV5wPoC1Dg_HPAqzEEC";

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
