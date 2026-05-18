"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#catalogo", label: "Catálogo" },
    { href: "#whatsapp", label: "Grupo VIP" },
  ];

  return (
    <>
      {/* Top bar de promoção */}
      <div className="bg-gradient-to-r from-[#6c00ff] via-[#ff2d78] to-[#ffd600] text-white text-center py-1.5 text-xs font-bold tracking-wide z-50 relative">
        <Zap className="inline w-3 h-3 mr-1 text-yellow-300" />
        OFERTAS IMPERDÍVEIS • ATUALIZADO HOJE •
        <Zap className="inline w-3 h-3 ml-1 text-yellow-300" />
      </div>

      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg shadow-pink-100 border-b-2 border-[#ff2d78]"
            : "bg-white shadow-md border-b-2 border-[#ff2d78]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/#" scroll={false} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#ff2d78] to-[#6c00ff] flex items-center justify-center shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform rotate-3 group-hover:rotate-0">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-xl tracking-tight text-[#1a1a2e]">
                  Alexia
                </span>
                <span className="font-black text-sm text-[#ff2d78] tracking-widest uppercase">
                  CompreAqui
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold text-[#1a1a2e] px-4 py-2 rounded-xl hover:bg-pink-50 hover:text-[#ff2d78] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white text-sm font-black px-6 py-2.5 rounded-2xl hover:opacity-90 transition-all hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-0.5 active:translate-y-0 neon-pulse"
              >
                🔥 Entrar no Grupo VIP
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-pink-50 text-[#ff2d78] hover:bg-pink-100 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t-2 border-pink-100 ${
            menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#1a1a2e] font-bold py-3 px-4 rounded-xl hover:bg-pink-50 hover:text-[#ff2d78] transition-colors border border-transparent hover:border-pink-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white text-center font-black px-5 py-3.5 rounded-2xl mt-1 text-sm"
            >
              🔥 Entrar no Grupo VIP
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
