import { siteConfig } from "@/config/site";

export default function LiveSection() {
  const platforms = [
    {
      name: "TikTok",
      href: siteConfig.tiktok,
      color: "hover:bg-black",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7.1a8.16 8.16 0 0 0 4.77 1.52V6.3a4.85 4.85 0 0 1-1-.61z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: siteConfig.instagram,
      color: "hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#e6683c] hover:via-[#dc2743] hover:via-[#cc2366] hover:to-[#bc1888]",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Kwai",
      href: siteConfig.kwai,
      color: "hover:bg-[#ff6900]",
      icon: <span className="font-black text-xs italic">Kw</span>,
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 bg-[#0d0d0d]">
      {/* Faixa vermelha decorativa top/bottom estilo da imagem */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff2d78] via-red-600 to-[#ff2d78]" />
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff2d78] via-red-600 to-[#ff2d78]" />

      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-40 bg-[#ff2d78]/20 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-60 h-40 bg-purple-600/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Texto principal */}
          <div className="text-center lg:text-left">
            {/* Badge AO VIVO */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff2d78] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff2d78]" />
              </span>
              <span className="text-[#ff2d78] text-xs font-black uppercase tracking-widest">Todo dia • Ao Vivo</span>
            </div>

            {/* Headline estilo neon */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-2">
              <span
                className="text-white"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}
              >
                MARATONA
              </span>
              <br />
              <span className="text-sm font-bold text-white/60 tracking-widest uppercase">de</span>
              <br />
              <span
                className="text-[#ff2d78]"
                style={{
                  textShadow: "0 0 30px rgba(255,45,120,0.8), 0 0 60px rgba(255,45,120,0.4)",
                }}
              >
                LIVES
              </span>
            </h2>

            <p className="text-white/50 text-sm font-medium mt-2">
              Ofertas exclusivas • Unboxings • Dicas de compra
            </p>
          </div>

          {/* Horário e plataformas */}
          <div className="flex flex-col items-center gap-5">
            {/* Horário */}
            <div
              className="bg-white/5 border border-[#ff2d78]/40 rounded-2xl px-8 py-5 text-center backdrop-blur-sm"
              style={{ boxShadow: "0 0 30px rgba(255,45,120,0.15)" }}
            >
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Começa às</p>
              <p
                className="text-5xl font-black text-white"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.4)" }}
              >
                21<span className="text-[#ff2d78] animate-pulse">:</span>00
              </p>
              <p className="text-white/40 text-xs mt-1 font-medium">Horário de Brasília</p>
            </div>

            {/* Plataformas */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Assista em</p>
              <div className="flex items-center gap-2">
                {platforms.map((p) => (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-transparent transition-all hover:-translate-y-0.5 ${p.color}`}
                    title={p.name}
                  >
                    {p.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white font-black text-sm px-6 py-3 rounded-2xl hover:opacity-90 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-500/30"
            >
              🔔 Ativar alertas no WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
