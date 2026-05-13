"use client";

import { useState, useEffect } from "react";
import { Search, Loader2, Zap, Tag } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import ProductCard from "./ProductCard";

interface DBProduct {
  id: number;
  name: string;
  description: string;
  price: string | null;
  original_price: string | null;
  image: string;
  affiliate_link: string;
  badge: string | null;
  is_highlight: boolean;
}

export default function CatalogSection() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setProducts(data || []);
        setLoading(false);
      });
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  const toCardProduct = (p: DBProduct) => ({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price ?? undefined,
    originalPrice: p.original_price ?? undefined,
    image: p.image,
    affiliateLink: p.affiliate_link,
    badge: p.badge ?? undefined,
    isHighlight: p.is_highlight,
  });

  return (
    <section id="catalogo" className="py-24 relative overflow-hidden">
      {/* Fundo com gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fef0f6] via-white to-[#f0f0ff]" />

      {/* Faixa decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6c00ff] via-[#ff2d78] to-[#ffd600]" />

      {/* Blob decorativo */}
      <div className="absolute top-20 -right-20 w-80 h-80 blob-pink opacity-15" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 blob-blue opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white text-xs font-black px-5 py-2 rounded-full mb-5 shadow-lg shadow-pink-200 uppercase tracking-wider">
            <Tag className="w-3.5 h-3.5" />
            Catálogo de Produtos
            <Zap className="w-3.5 h-3.5 text-[#ffd600]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a2e] mb-4 leading-tight">
            Ofertas selecionadas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#6c00ff]">
              para você
            </span>
          </h2>
          <p className="text-[#1a1a2e]/60 text-lg max-w-xl mx-auto font-medium">
            Cada produto foi cuidadosamente avaliado. Clique em &quot;Ver Oferta&quot; para acessar.
          </p>
        </div>

        {/* Busca */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ff2d78]" />
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 bg-white border-2 border-pink-200 rounded-2xl text-sm text-[#1a1a2e] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#ff2d78]/30 focus:border-[#ff2d78] transition font-medium shadow-sm"
            />
          </div>
        </div>

        {/* Grid de produtos */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ff2d78] to-[#6c00ff] rounded-2xl flex items-center justify-center shadow-xl shadow-pink-200">
              <Loader2 className="w-7 h-7 text-white animate-spin" />
            </div>
            <p className="text-[#1a1a2e]/50 font-medium text-sm">Carregando ofertas...</p>
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={toCardProduct(product)} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ff2d78]/20 to-[#6c00ff]/20 rounded-2xl flex items-center justify-center mb-4 border-2 border-pink-200">
              <Search className="w-7 h-7 text-[#ff2d78]" />
            </div>
            <h3 className="text-[#1a1a2e] font-black text-xl mb-2">
              {products.length === 0 ? "Nenhum produto cadastrado ainda" : "Nenhum produto encontrado"}
            </h3>
            <p className="text-[#1a1a2e]/50 text-sm font-medium">
              {products.length === 0 ? "Acesse o painel admin para adicionar produtos" : "Tente outro termo de busca"}
            </p>
          </div>
        )}

        {!loading && filtered.length > 0 && (
          <div className="text-center mt-8">
            <span className="inline-flex items-center gap-2 bg-white border-2 border-pink-100 text-[#1a1a2e]/60 text-sm font-bold px-5 py-2 rounded-full shadow-sm">
              Mostrando{" "}
              <span className="text-[#ff2d78] font-black">{filtered.length}</span>{" "}
              produto{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
