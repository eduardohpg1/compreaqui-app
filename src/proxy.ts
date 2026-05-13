import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  // Deixa a página de login passar sem verificar autenticação
  if (request.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }
  return await updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*"],
};
