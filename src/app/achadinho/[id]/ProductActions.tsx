"use client";

import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { trackShopeeClick, trackViewContent } from "@/lib/pixel";

interface Props {
  productId: number;
  name: string;
  affiliateLink: string;
}

export default function ProductActions({ productId, name, affiliateLink }: Props) {
  useEffect(() => {
    // Pequeno atraso: o pixel é carregado com strategy "afterInteractive"
    const t = setTimeout(() => trackViewContent(productId, name), 800);
    return () => clearTimeout(t);
  }, [productId, name]);

  return (
    <a
      href={affiliateLink}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => trackShopeeClick(productId, name)}
      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] hover:from-[#6c00ff] hover:to-[#ff2d78] text-white font-black text-lg py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-pink-200"
    >
      🛍️ Ver na Shopee
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}
