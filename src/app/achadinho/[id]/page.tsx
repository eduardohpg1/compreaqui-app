import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import ProductActions from "./ProductActions";

interface DBProduct {
  id: number;
  name: string;
  description: string;
  price: string | null;
  original_price: string | null;
  image: string;
  media: string[] | null;
  affiliate_link: string;
  badge: string | null;
}

async function getProduct(idParam: string): Promise<DBProduct | null> {
  const id = Number(idParam);
  if (!Number.isInteger(id) || id <= 0) return null;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("id,name,description,price,original_price,image,media,affiliate_link,badge")
    .eq("id", id)
    .maybeSingle();

  if (error) console.error("Erro ao carregar produto:", error.message);
  return data ?? null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: "Produto não encontrado | Alexia CompreAqui" };

  return {
    title: `${product.name} | Alexia CompreAqui`,
    description: product.description,
    robots: { index: false }, // páginas de anúncio: não precisam aparecer no Google
  };
}

export default async function AchadinhoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  const media = product.media && product.media.length > 0 ? product.media : product.image ? [product.image] : [];
  const isVideo = (src: string) =>
    src.startsWith("data:video/") || /\.(mp4|mov|webm|m4v|ogv)(\?.*)?$/i.test(src);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#fef0f6] via-white to-[#f0f0ff]">
      <div className="max-w-xl mx-auto px-4 py-6 sm:py-10">
        <Link href="/" className="block text-center text-sm font-black text-[#ff2d78] mb-5">
          💜 Alexia CompreAqui
        </Link>

        <div className="bg-white rounded-3xl overflow-hidden border-2 border-neutral-100 shadow-xl">
          {media.map((src, i) =>
            isVideo(src) ? (
              <video key={i} src={src} className="w-full" controls playsInline preload="metadata" />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt={product.name} className="w-full" />
            )
          )}

          <div className="p-5 sm:p-6">
            {product.badge && (
              <span className="inline-block bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-wide mb-3">
                {product.badge}
              </span>
            )}
            <h1 className="font-black text-[#1a1a2e] text-2xl leading-snug mb-2">{product.name}</h1>
            {product.description && (
              <p className="text-[#1a1a2e]/70 font-medium mb-4 whitespace-pre-line">{product.description}</p>
            )}
            {product.price && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-black text-[#ff2d78]">{product.price}</span>
                {product.original_price && (
                  <span className="text-sm text-[#1a1a2e]/30 line-through font-medium">
                    {product.original_price}
                  </span>
                )}
              </div>
            )}

            <ProductActions
              productId={product.id}
              name={product.name}
              affiliateLink={product.affiliate_link}
            />
            <p className="text-center text-xs text-[#1a1a2e]/40 mt-3">
              Você será direcionado para a Shopee. Preço e frete podem variar.
            </p>
          </div>
        </div>

        <a
          href="https://chat.whatsapp.com/HNaq2DgOVmVD2trSGpHEQu?mode=gi_t"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mt-6 bg-[#25d366] text-white font-black py-3.5 rounded-2xl shadow-md"
        >
          📲 Receber mais achadinhos no Grupo VIP
        </a>
      </div>
    </main>
  );
}
