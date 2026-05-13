"use client";

import { ArrowDown, Sparkles, Star, TrendingUp, Zap, Gift } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fundo gradiente vibrante tipo marketplace */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff2d78] via-[#c2006b] to-[#6c00ff]" />

      {/* Camada azul no canto direito */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#0066ff]/60 via-transparent to-transparent" />

      {/* Blobs decorativos animados */}
      <div className="absolute top-16 left-8 w-48 h-48 blob-yellow opacity-60 float-anim" />
      <div className="absolute top-1/3 right-12 w-64 h-64 blob-blue opacity-50 float-anim" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-1/4 w-56 h-56 blob-pink opacity-40 float-anim" style={{ animationDelay: "2s" }} />

      {/* Formas geométricas decorativas */}
      <div className="absolute top-12 right-1/4 w-8 h-8 bg-[#ffd600] rounded-lg rotate-45 opacity-80 float-anim" />
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-white/40 rounded-full" />
      <div className="absolute top-1/4 left-16 w-4 h-4 bg-[#00d4ff] rounded-full opacity-80" />
      <div className="absolute bottom-1/4 right-32 w-10 h-10 border-2 border-white/30 rounded-xl rotate-12" />

      {/* Padrão de pontos */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ffd600] text-[#1a1a2e] text-xs font-black px-5 py-2 rounded-full mb-6 shadow-lg shadow-yellow-400/40 uppercase tracking-wider">
          <Zap className="w-3.5 h-3.5" />
          Grupo VIP de Ofertas — Grátis!
          <Zap className="w-3.5 h-3.5" />
        </div>

        {/* Headline principal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight tracking-tight drop-shadow-lg">
          As melhores
          <br />
          <span className="text-[#ffd600] drop-shadow-[0_0_30px_rgba(255,214,0,0.8)]">
            ofertas aqui
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl text-white/90 font-bold mb-3 drop-shadow">
          Curadoria especial da Alexia 💜
        </p>

        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Produtos selecionados com os{" "}
          <span className="text-[#ffd600] font-black">melhores preços</span> do mercado.{" "}
          Entre no grupo VIP e receba ofertas exclusivas no WhatsApp!
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-12">
          {[
            { icon: <Star className="w-4 h-4" />, text: "Produtos verificados", color: "bg-[#ffd600]/20 border-[#ffd600]/40 text-[#ffd600]" },
            { icon: <TrendingUp className="w-4 h-4" />, text: "Melhores preços", color: "bg-white/20 border-white/30 text-white" },
            { icon: <Gift className="w-4 h-4" />, text: "Ofertas exclusivas", color: "bg-[#00d4ff]/20 border-[#00d4ff]/40 text-[#00d4ff]" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl border backdrop-blur-sm font-bold text-sm ${item.color}`}
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#ffd600] text-[#1a1a2e] font-black px-10 py-5 rounded-2xl text-lg hover:bg-white transition-all hover:shadow-2xl hover:shadow-yellow-400/40 hover:-translate-y-1 active:translate-y-0 shadow-xl"
          >
            📲 Entrar no Grupo VIP
          </a>
          <a
            href="#catalogo"
            className="w-full sm:w-auto bg-white/15 backdrop-blur-sm border-2 border-white/30 text-white font-black px-10 py-5 rounded-2xl text-lg hover:bg-white/25 transition-all hover:-translate-y-1 active:translate-y-0"
          >
            🛍️ Ver Catálogo
          </a>
        </div>

        {/* Selos de confiança */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {["🆓 Grupo Gratuito", "🔒 Sem Spam", "⚡ Ofertas Diárias"].map((item, i) => (
            <span
              key={i}
              className="text-white/80 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs font-bold">VER MAIS</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
