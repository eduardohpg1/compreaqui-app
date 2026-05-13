"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Plus, Pencil, Trash2, LogOut, ShoppingBag, Loader2, X, Save, ExternalLink, Package, ImageUp,
} from "lucide-react";
interface Product {
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

const emptyForm = {
  name: "",
  price: "",
  original_price: "",
  image: "",
  affiliate_link: "",
  badge: "",
  is_highlight: false,
};

export default function AdminPage() {
  const router = useRouter();
  const supabase = createClient();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  function maskCurrency(value: string) {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "";
    const num = parseInt(digits, 10) / 100;
    return "R$ " + num.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase.from("products").select("*").order("created_at", { ascending: false });
    setProducts(data || []);
    setLoading(false);
  }, [supabase]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/admin/login");
  }

  function openNew() {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  }

  function openEdit(p: Product) {
    setForm({
      name: p.name,
      price: p.price || "",
      original_price: p.original_price || "",
      image: p.image,
      affiliate_link: p.affiliate_link,
      badge: p.badge || "",
      is_highlight: p.is_highlight,
    });
    setEditingId(p.id);
    setShowForm(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      name: form.name,
      description: "",
      price: form.price || null,
      original_price: form.original_price || null,
      image: form.image,
      affiliate_link: form.affiliate_link,
      badge: form.badge || null,
      is_highlight: form.is_highlight,
    };

    let error;
    if (editingId) {
      ({ error } = await supabase.from("products").update(payload).eq("id", editingId));
    } else {
      ({ error } = await supabase.from("products").insert([payload]));
    }

    setSaving(false);
    if (error) { showToast("Erro ao salvar produto.", "error"); return; }

    showToast(editingId ? "Produto atualizado!" : "Produto adicionado!");
    setShowForm(false);
    fetchProducts();
  }

  async function handleImageUpload(file: File) {
    setUploadingImage(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = e.target?.result as string;
      setForm((f) => ({ ...f, image: base64 }));
      setUploadingImage(false);
    };
    reader.onerror = () => {
      showToast("Erro ao ler a imagem.", "error");
      setUploadingImage(false);
    };
    reader.readAsDataURL(file);
  }

  async function handleDelete(id: number) {
    const { error } = await supabase.from("products").delete().eq("id", id);
    setDeleteConfirm(null);
    if (error) { showToast("Erro ao excluir.", "error"); return; }
    showToast("Produto excluído.");
    fetchProducts();
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Toast */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 px-5 py-3 rounded-2xl text-sm font-medium shadow-xl transition-all ${toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="font-bold text-sm">Painel Admin</span>
              <span className="text-neutral-500 text-xs ml-2">Alexia CompreAqui</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-white transition flex items-center gap-1">
              Ver site <ExternalLink className="w-3 h-3" />
            </a>
            <button onClick={handleLogout} className="flex items-center gap-2 text-xs text-neutral-400 hover:text-red-400 transition px-3 py-2 rounded-lg hover:bg-neutral-800">
              <LogOut className="w-4 h-4" /> Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black">Produtos</h1>
            <p className="text-neutral-500 text-sm mt-0.5">{products.length} produto{products.length !== 1 ? "s" : ""} cadastrado{products.length !== 1 ? "s" : ""}</p>
          </div>
          <button onClick={openNew} className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-pink-500/20">
            <Plus className="w-4 h-4" /> Novo Produto
          </button>
        </div>

        {/* Products grid */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <Loader2 className="w-8 h-8 text-pink-500 animate-spin" />
          </div>
        ) : products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mb-4">
              <Package className="w-7 h-7 text-neutral-600" />
            </div>
            <h3 className="text-neutral-400 font-semibold mb-1">Nenhum produto ainda</h3>
            <p className="text-neutral-600 text-sm mb-4">Adicione seu primeiro produto clicando no botão acima</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((p) => (
              <div key={p.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors">
                <div className="relative aspect-square bg-neutral-800">
                  {p.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  )}
                  {p.badge && (
                    <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-white line-clamp-1 mb-1">{p.name}</h3>
                  {p.price && <p className="text-pink-400 font-bold text-sm mb-3">{p.price}</p>}
                  <div className="flex gap-2">
                    <button onClick={() => openEdit(p)} className="flex-1 flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium py-2 rounded-lg transition">
                      <Pencil className="w-3 h-3" /> Editar
                    </button>
                    <button onClick={() => setDeleteConfirm(p.id)} className="flex items-center justify-center gap-1.5 bg-neutral-800 hover:bg-red-500/20 text-neutral-500 hover:text-red-400 text-xs font-medium px-3 py-2 rounded-lg transition">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-neutral-800">
              <h2 className="font-bold text-lg">{editingId ? "Editar Produto" : "Novo Produto"}</h2>
              <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 flex flex-col gap-4">
              {/* Nome */}
              <div>
                <label className="text-neutral-400 text-xs font-medium mb-1.5 block">Nome do produto *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ex: Fone Bluetooth Premium"
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>

              {/* Link de afiliado */}
              <div>
                <label className="text-neutral-400 text-xs font-medium mb-1.5 block">Link de afiliado *</label>
                <input
                  type="text"
                  value={form.affiliate_link}
                  onChange={(e) => setForm({ ...form, affiliate_link: e.target.value })}
                  placeholder="https://..."
                  required
                  className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>

              {/* Preços */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-neutral-400 text-xs font-medium mb-1.5 block">Preço</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: maskCurrency(e.target.value) })}
                    placeholder="R$ 0,00"
                    className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                  />
                </div>
                <div>
                  <label className="text-neutral-400 text-xs font-medium mb-1.5 block">Preço original (riscado)</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={form.original_price}
                    onChange={(e) => setForm({ ...form, original_price: maskCurrency(e.target.value) })}
                    placeholder="R$ 0,00"
                    className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                  />
                </div>
              </div>

              {/* Badge */}
              <div>
                <label className="text-neutral-400 text-xs font-medium mb-1.5 block">Badge</label>
                <input
                  type="text"
                  value={form.badge}
                  onChange={(e) => setForm({ ...form, badge: e.target.value })}
                  placeholder="Ex: 30% OFF, Hot, Novo"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                />
              </div>

              {/* Upload de imagem */}
              <div>
                <label className="text-neutral-400 text-xs font-medium mb-1.5 block">Imagem do produto *</label>
                <label className={`flex flex-col items-center justify-center w-full border-2 border-dashed rounded-xl cursor-pointer transition-colors ${form.image ? "border-pink-500 bg-pink-500/5" : "border-neutral-700 bg-neutral-800 hover:border-pink-500/50"}`}>
                  {uploadingImage ? (
                    <div className="flex flex-col items-center py-6 gap-2">
                      <Loader2 className="w-6 h-6 text-pink-400 animate-spin" />
                      <span className="text-xs text-neutral-400">Enviando...</span>
                    </div>
                  ) : form.image ? (
                    <div className="relative w-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={form.image} alt="preview" className="w-full h-40 object-cover rounded-xl" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl opacity-0 hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-bold">Clique para trocar</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center py-8 gap-2">
                      <ImageUp className="w-7 h-7 text-neutral-500" />
                      <span className="text-sm text-neutral-400 font-medium">Clique para selecionar imagem</span>
                      <span className="text-xs text-neutral-600">JPG, PNG, WEBP até 5MB</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*,.heic,.heif,.avif,.webp,.jpg,.jpeg,.png,.gif,.bmp,.tiff,.svg"
                    className="hidden"
                    required={!form.image}
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleImageUpload(file);
                      e.target.value = "";
                    }}
                  />
                </label>
              </div>

              {/* Highlight */}
              <label className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => setForm({ ...form, is_highlight: !form.is_highlight })}
                  className={`w-10 h-6 rounded-full transition-colors relative ${form.is_highlight ? "bg-pink-500" : "bg-neutral-700"}`}
                >
                  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all ${form.is_highlight ? "left-5" : "left-1"}`} />
                </div>
                <span className="text-sm text-neutral-300">Destaque</span>
              </label>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold py-3 rounded-xl transition text-sm">
                  Cancelar
                </button>
                <button type="submit" disabled={saving} className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition text-sm">
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                  {saving ? "Salvando..." : "Salvar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 w-full max-w-sm shadow-2xl">
            <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center mb-4">
              <Trash2 className="w-6 h-6 text-red-400" />
            </div>
            <h3 className="font-bold text-lg mb-1">Excluir produto?</h3>
            <p className="text-neutral-500 text-sm mb-6">Esta ação não pode ser desfeita.</p>
            <div className="flex gap-3">
              <button onClick={() => setDeleteConfirm(null)} className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-semibold py-2.5 rounded-xl transition text-sm">
                Cancelar
              </button>
              <button onClick={() => handleDelete(deleteConfirm)} className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2.5 rounded-xl transition text-sm">
                Excluir
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
