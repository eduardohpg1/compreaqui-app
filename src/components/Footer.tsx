import { ShoppingBag, Heart, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white/60 relative overflow-hidden">
      {/* Faixa decorativa superior */}
      <div className="h-1.5 bg-gradient-to-r from-[#ff2d78] via-[#ffd600] to-[#6c00ff]" />

      {/* Blob decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 blob-pink opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff2d78] to-[#6c00ff] flex items-center justify-center shadow-lg shadow-pink-900/40 rotate-3">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-xl tracking-tight">Alexia</span>
                <span className="text-[#ff2d78] font-black text-sm tracking-widest uppercase">CompreAqui</span>
              </div>
            </div>
            <p className="text-white/30 text-xs font-medium max-w-[200px] text-center md:text-left leading-relaxed">
              Curadoria especial de produtos com os melhores preços do mercado.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {[
              { href: "#sobre", label: "Sobre" },
              { href: "#catalogo", label: "Catálogo" },
              { href: "#whatsapp", label: "Grupo VIP" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-white/40 hover:text-white px-4 py-2 rounded-xl hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877f2] hover:border-transparent transition-all group hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href={siteConfig.kwai}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ff6900] hover:border-transparent transition-all group hover:-translate-y-0.5"
            >
              <span className="text-white/40 group-hover:text-white transition-colors font-black text-sm leading-none" style={{ fontStyle: "italic" }}>Kw</span>
            </a>
            <a
              href={siteConfig.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black hover:border-transparent transition-all group hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.74-1.757-.438-.506-1.098-.777-1.946-.806h-.066c-.657 0-1.749.194-2.405 1.376l-1.795-1.061c.87-1.57 2.355-2.336 4.2-2.336h.108c3.177.106 5.01 2.018 5.01 5.259v.124c0 .08-.003.159-.007.238.817.47 1.503 1.105 2.013 1.897.848 1.313 1.131 2.995.779 4.757-.535 2.682-2.348 4.83-5.268 5.94-.919.344-1.921.548-2.979.548z"/>
              </svg>
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#ff2d78] hover:to-[#6c00ff] hover:border-transparent transition-all group hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={siteConfig.mercadolivre}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#ffe600] hover:border-transparent transition-all group hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 text-white/40 group-hover:text-[#333]  transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm0 2.4c5.302 0 9.6 4.298 9.6 9.6 0 5.303-4.298 9.6-9.6 9.6-5.303 0-9.6-4.297-9.6-9.6 0-5.302 4.297-9.6 9.6-9.6zm0 3.6c-1.26 0-2.4.96-2.4 2.4v3.12c-.72.36-1.2 1.08-1.2 1.92 0 1.2.96 2.16 2.16 2.16s2.16-.96 2.16-2.16c0-.84-.48-1.56-1.2-1.92V8.4c0-.24.12-.36.48-.36s.48.12.48.36v.72h2.4V8.4C14.88 6.96 13.5 6 12 6zm-4.8 3.6v1.2h1.2V9.6H7.2zm9.6 0v1.2h1.2V9.6h-1.2zM6 13.2c0 3.312 2.688 6 6 6s6-2.688 6-6H6z"/>
              </svg>
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#ff2d78] hover:to-[#6c00ff] hover:border-transparent transition-all group hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7.1a8.16 8.16 0 0 0 4.77 1.52V6.3a4.85 4.85 0 0 1-1-.61z" />
              </svg>
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25d366] hover:border-transparent transition-all group hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/20">
          <p className="font-medium">
            © {new Date().getFullYear()} Alexia CompreAqui. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 font-bold">
            <Zap className="w-3 h-3 text-[#ffd600]" />
            Feito com <Heart className="w-3 h-3 text-[#ff2d78] fill-[#ff2d78]" /> para você
            <Zap className="w-3 h-3 text-[#6c00ff]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
