"use client";

import { siteConfig } from "@/config/site";

const socials = [
  {
    name: "Instagram",
    href: siteConfig.instagram,
    color: "bg-gradient-to-br from-[#f09433] via-[#e6683c] via-30% via-[#dc2743] via-60% to-[#bc1888]",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: siteConfig.tiktok,
    color: "bg-black",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7.1a8.16 8.16 0 0 0 4.77 1.52V6.3a4.85 4.85 0 0 1-1-.61z" />
      </svg>
    ),
  },
  {
    name: "Kwai",
    href: siteConfig.kwai,
    color: "bg-[#ff6900]",
    icon: <span className="font-black text-sm italic">Kw</span>,
  },
  {
    name: "Facebook",
    href: siteConfig.facebook,
    color: "bg-[#1877f2]",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function FollowSection() {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-br from-[#fff0f6] via-white to-[#f5f0ff]">
      {/* Bolinhas decorativas */}
      <div className="absolute top-6 left-10 w-4 h-4 bg-[#ff2d78] rounded-full opacity-40" />
      <div className="absolute top-12 right-20 w-3 h-3 bg-[#ffd600] rounded-full opacity-60" />
      <div className="absolute bottom-8 left-1/4 w-3 h-3 bg-[#6c00ff] rounded-full opacity-40" />
      <div className="absolute bottom-6 right-10 w-5 h-5 bg-[#ff2d78] rounded-full opacity-30" />
      <div className="absolute top-1/2 left-6 w-2 h-2 bg-[#ffd600] rounded-full opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

          {/* Sticker central */}
          <div className="relative flex-shrink-0">
            {/* Sombra do sticker */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2.5rem] bg-[#ff2d78]/20 blur-sm" />

            {/* Card estilo sticker */}
            <div
              className="relative bg-white rounded-[2.5rem] border-4 border-[#1a1a2e] px-8 py-6 text-center shadow-2xl"
              style={{ transform: "rotate(-2deg)" }}
            >
              {/* Coraçõezinhos decorativos */}
              <span className="absolute -top-3 -right-3 text-2xl">💜</span>
              <span className="absolute -bottom-3 -left-3 text-xl">🛍️</span>

              {/* Texto estilo sticker */}
              <p className="text-2xl font-black text-[#1a1a2e] leading-tight mb-1 uppercase"
                style={{ WebkitTextStroke: "1px #1a1a2e" }}>
                ME
              </p>
              <p className="text-2xl font-black text-[#1a1a2e] leading-tight uppercase">
                SEGUE
              </p>

              {/* "e" pequeno */}
              <p className="text-sm font-black text-[#1a1a2e]/60 uppercase tracking-widest my-1">e</p>

              {/* CONFERE — amarelo */}
              <div className="bg-[#ffd600] rounded-xl px-4 py-1 mb-1 border-2 border-[#1a1a2e]">
                <p className="text-xl font-black text-[#1a1a2e] uppercase">CONFERE</p>
              </div>

              <p className="text-sm font-black text-[#1a1a2e]/60 uppercase tracking-widest my-1">as</p>

              {/* NOVIDADES — pink */}
              <p className="text-2xl font-black uppercase"
                style={{ color: "#ff2d78", WebkitTextStroke: "1.5px #1a1a2e" }}>
                NOVIDADES!
              </p>

              {/* Seta */}
              <div className="mt-3 flex justify-center">
                <span className="text-2xl animate-bounce">👇</span>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <p className="text-[#1a1a2e] font-black text-lg text-center lg:text-left">
              Me siga nas redes e fique por dentro de{" "}
              <span className="text-[#ff2d78]">todas as ofertas!</span> 🔥
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.color} text-white flex items-center gap-2.5 px-4 py-3 rounded-2xl font-black text-sm hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-md hover:shadow-lg`}
                >
                  {s.icon}
                  {s.name}
                </a>
              ))}
            </div>

            {/* WhatsApp em destaque */}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-black px-6 py-3.5 rounded-2xl hover:opacity-90 hover:-translate-y-0.5 transition-all shadow-lg text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Grupo VIP WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
