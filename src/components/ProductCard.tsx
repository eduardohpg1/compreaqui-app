"use client";

import { useState } from "react";
import { ExternalLink, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const mediaList = (product.media && product.media.length > 0)
    ? product.media
    : product.image ? [product.image] : [];

  const [current, setCurrent] = useState(0);

  function prev(e: React.MouseEvent) {
    e.preventDefault();
    setCurrent((c) => (c - 1 + mediaList.length) % mediaList.length);
  }

  function next(e: React.MouseEvent) {
    e.preventDefault();
    setCurrent((c) => (c + 1) % mediaList.length);
  }

  const currentSrc = mediaList[current] ?? "";
  const isVideo = currentSrc.startsWith("data:video/") || /\.(mp4|mov|avi|webm|mkv|flv|wmv|m4v|3gp|ogv)(\?.*)?$/i.test(currentSrc);

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border-2 border-neutral-100 hover:border-[#ff2d78]/30 shadow-md hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300 hover:-translate-y-1.5 flex flex-col relative">
      {product.isHighlight && (
        <div className="h-1 bg-gradient-to-r from-[#ff2d78] via-[#ffd600] to-[#6c00ff]" />
      )}

      {/* Mídia principal */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 aspect-square">
        {isVideo ? (
          <video
            src={currentSrc}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
        ) : currentSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={currentSrc}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : null}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
              {product.badge}
            </span>
          </div>
        )}

        {product.isHighlight && (
          <div className="absolute top-3 right-3 w-8 h-8 bg-[#ffd600] rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-4 h-4 text-[#1a1a2e]" />
          </div>
        )}

        {/* Navegação do carrossel */}
        {mediaList.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {mediaList.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${i === current ? "bg-white w-3" : "bg-white/50"}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Miniaturas */}
      {mediaList.length > 1 && (
        <div className="flex gap-1.5 px-3 pt-2 overflow-x-auto">
          {mediaList.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${i === current ? "border-[#ff2d78]" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              {src.startsWith("data:video/") || /\.(mp4|mov|avi|webm|mkv|flv|wmv|m4v|3gp|ogv)(\?.*)?$/i.test(src) ? (
                <video src={src} className="w-full h-full object-cover" muted playsInline />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt="" className="w-full h-full object-cover" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-black text-[#1a1a2e] text-base leading-snug mb-1.5 line-clamp-2">
          {product.name}
        </h3>

        {product.price && (
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl font-black text-[#ff2d78]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-[#1a1a2e]/30 line-through font-medium">{product.originalPrice}</span>
            )}
          </div>
        )}

        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] hover:from-[#6c00ff] hover:to-[#ff2d78] text-white font-black text-sm py-3.5 rounded-2xl transition-all hover:shadow-xl hover:shadow-pink-200 group/btn mt-auto"
        >
          🔥 Ver Oferta
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
