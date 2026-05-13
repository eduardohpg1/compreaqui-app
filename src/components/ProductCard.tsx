"use client";

import Image from "next/image";
import { ExternalLink, Zap } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border-2 border-neutral-100 hover:border-[#ff2d78]/30 shadow-md hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col relative">
      {/* Barra de destaque no topo */}
      {product.isHighlight && (
        <div className="h-1 bg-gradient-to-r from-[#ff2d78] via-[#ffd600] to-[#6c00ff]" />
      )}

      {/* Image */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
              {product.badge}
            </span>
          </div>
        )}

        {/* Ícone de destaque */}
        {product.isHighlight && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-[#ffd600] rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-4 h-4 text-[#1a1a2e]" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-black text-[#1a1a2e] text-base leading-snug mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        {product.price && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black text-[#ff2d78]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#1a1a2e]/30 line-through font-medium">{product.originalPrice}</span>
            )}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] hover:from-[#6c00ff] hover:to-[#ff2d78] text-white font-black text-sm py-3.5 rounded-2xl transition-all hover:shadow-xl hover:shadow-pink-200 group/btn"
        >
          🔥 Ver Oferta
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
