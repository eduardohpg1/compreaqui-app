"use client";

import { useState, useEffect } from "react";
import { Search, Loader2, Zap, Tag, ChevronLeft, ChevronRight } from "lucide-react";
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

const PER_PAGE = 20;

export default function CatalogSection() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<DBProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const supabase = createClient();
    supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error }) => {
        if (error) console.error("Erro ao carregar produtos:", error.message);
        setProducts(data || []);
        setLoading(false);
      });
  }, []);

  // Volta para página 1 ao buscar
  useEffect(() => { setPage(1); }, [search]);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.description.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

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

  function scrollToCatalog() {
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  }

  function goToPage(p: number) {
    setPage(p);
    scrollToCatalog();
  }

  return (
    <section id="catalogo" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fef0f6] via-white to-[#f0f0ff]" />
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#6c00ff] via-[#ff2d78] to-[#ffd600]" />
      <div className="absolute top-20 -right-20 w-80 h-80 blob-pink opacity-15" />
      <div className="absolute bottom-20 -left-20 w-80 h-80 blob-blue opacity-15" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3">
            <div className="w-14 h-14 bg-gradient-to-br from-[#ff2d78] to-[#6c00ff] rounded-2xl flex items-center justify-center shadow-xl shadow-pink-200">
              <Loader2 className="w-7 h-7 text-white animate-spin" />
            </div>
            <p className="text-[#1a1a2e]/50 font-medium text-sm">Carregando ofertas...</p>
          </div>
        ) : paginated.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginated.map((product) => (
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

        {/* Paginação + contador */}
        {!loading && filtered.length > 0 && (
          <div className="flex flex-col items-center gap-4 mt-10">
            {/* Contador */}
            <span className="text-[#1a1a2e]/50 text-sm font-medium">
              Mostrando{" "}
              <span className="text-[#ff2d78] font-black">{(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)}</span>
              {" "}de{" "}
              <span className="text-[#1a1a2e] font-black">{filtered.length}</span>{" "}
              produto{filtered.length !== 1 ? "s" : ""}
            </span>

            {/* Botões de página */}
            {totalPages > 1 && (
              <div className="flex items-center gap-2">
                {/* Anterior */}
                <button
                  onClick={() => goToPage(page - 1)}
                  disabled={page === 1}
                  className="w-10 h-10 rounded-xl bg-white border-2 border-pink-100 flex items-center justify-center text-[#ff2d78] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-50 hover:border-[#ff2d78] transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Números */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
                  const show = n === 1 || n === totalPages || Math.abs(n - page) <= 1;
                  const isEllipsis = !show && (n === 2 || n === totalPages - 1);
                  if (!show && !isEllipsis) return null;
                  if (isEllipsis) return (
                    <span key={n} className="text-[#1a1a2e]/30 font-bold px-1">…</span>
                  );
                  return (
                    <button
                      key={n}
                      onClick={() => goToPage(n)}
                      className={`w-10 h-10 rounded-xl font-black text-sm transition-all ${
                        page === n
                          ? "bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white shadow-lg shadow-pink-200 scale-110"
                          : "bg-white border-2 border-pink-100 text-[#1a1a2e]/60 hover:border-[#ff2d78] hover:text-[#ff2d78]"
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}

                {/* Próxima */}
                <button
                  onClick={() => goToPage(page + 1)}
                  disabled={page === totalPages}
                  className="w-10 h-10 rounded-xl bg-white border-2 border-pink-100 flex items-center justify-center text-[#ff2d78] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-pink-50 hover:border-[#ff2d78] transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
