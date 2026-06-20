"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { ShoppingBag, Eye, EyeOff, Loader2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ijvqpcllvjuqghcrqfoz.supabase.co";
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqdnFwY2xsdmp1cWdoY3JxZm96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5MTQ2MzAsImV4cCI6MjA5NjQ5MDYzMH0.e-c7_5OCB_O4nVg7IoR1DbzIQgclzjq8sxhaZFrcGMI";
      const res = await fetch(
        `${supabaseUrl}/auth/v1/token?grant_type=password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "apikey": supabaseKey,
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.access_token) {
        console.error("Auth error:", res.status, JSON.stringify(data));
        setError(`Erro ${res.status}: ${data.msg || data.error_description || "E-mail ou senha incorretos."}`);
        setLoading(false);
        return;
      }

      // Salva o token em cookie para o proxy conseguir ler
      document.cookie = `sb-ijvqpcllvjuqghcrqfoz-auth-token=${JSON.stringify({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_at: Math.floor(Date.now() / 1000) + data.expires_in,
        token_type: data.token_type,
        user: data.user,
      })}; path=/; max-age=${data.expires_in}; SameSite=Lax`;

      router.push("/admin");
      router.refresh();
    } catch {
      setError("Erro ao conectar. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      {/* Blobs */}
      <div className="absolute top-1/4 -left-32 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-lg mb-3">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white font-bold text-xl">Painel Admin</h1>
            <p className="text-neutral-500 text-sm mt-1">Alexia CompreAqui</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="text-neutral-400 text-xs font-medium mb-1.5 block">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-neutral-400 text-xs font-medium mb-1.5 block">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl px-4 py-3">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-pink-500/20 flex items-center justify-center gap-2 mt-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                "Entrar"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
