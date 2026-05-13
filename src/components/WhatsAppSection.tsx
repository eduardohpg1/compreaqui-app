import { Bell, Gift, Star, Zap, Crown, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppSection() {
  const benefits = [
    {
      icon: <Zap className="w-5 h-5 text-[#ffd600]" />,
      title: "Alertas de promoção",
      desc: "Saiba na hora quando um produto entrar em oferta",
      bg: "from-[#6c00ff] to-[#0066ff]",
    },
    {
      icon: <Gift className="w-5 h-5 text-[#ffd600]" />,
      title: "Ofertas exclusivas",
      desc: "Cupons e descontos que não aparecem em nenhum outro lugar",
      bg: "from-[#ff2d78] to-[#c2006b]",
    },
    {
      icon: <Crown className="w-5 h-5 text-[#ffd600]" />,
      title: "Curadoria VIP",
      desc: "Somente os melhores produtos, selecionados com carinho",
      bg: "from-[#ff9500] to-[#ff2d78]",
    },
    {
      icon: <Bell className="w-5 h-5 text-[#ffd600]" />,
      title: "Novidades em primeira mão",
      desc: "Seja o primeiro a saber dos lançamentos mais quentes",
      bg: "from-[#0066ff] to-[#6c00ff]",
    },
  ];

  return (
    <section id="whatsapp" className="py-24 relative overflow-hidden">
      {/* Fundo vibrante */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

      {/* Blobs de cor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 blob-pink opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 blob-blue opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blob-yellow opacity-10" />

      {/* Padrão de pontos */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge VIP animado */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffd600] to-[#ff9500] text-[#1a1a2e] text-xs font-black px-5 py-2.5 rounded-full mb-8 shadow-xl shadow-yellow-500/30 uppercase tracking-widest neon-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          Grupo VIP — Vagas limitadas
          <span className="w-2 h-2 rounded-full bg-[#ff2d78] animate-pulse" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 leading-tight">
          Entre no grupo e receba{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffd600] to-[#ff9500]">
            ofertas exclusivas
          </span>
          <br className="hidden sm:block" />
          no WhatsApp 📲
        </h2>

        <p className="text-white/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
          {siteConfig.whatsappMessage} Mais de{" "}
          <span className="text-[#ffd600] font-black">mil pessoas</span> já estão aproveitando!
        </p>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 text-left">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-11 h-11 bg-gradient-to-br ${b.bg} rounded-2xl flex items-center justify-center shrink-0 shadow-lg`}>
                {b.icon}
              </div>
              <div>
                <h3 className="text-white font-black text-sm mb-1">{b.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA principal */}
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#128c7e] hover:to-[#25d366] text-white font-black text-xl px-12 py-6 rounded-2xl transition-all hover:shadow-2xl hover:shadow-green-500/40 hover:-translate-y-1 active:translate-y-0 shadow-xl"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Quero entrar no grupo VIP!
        </a>

        {/* Micro-texto de confiança */}
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          {["🆓 Gratuito", "🚫 Sem spam", "✅ Saia quando quiser"].map((item, i) => (
            <span key={i} className="text-white/40 text-xs font-bold">
              {item}
            </span>
          ))}
        </div>

        {/* Contador fictício de membros */}
        <div className="mt-8 inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl px-6 py-3">
          <div className="flex -space-x-2">
            {["🧑", "👩", "🧔", "👱"].map((emoji, i) => (
              <div key={i} className="w-8 h-8 bg-gradient-to-br from-[#ff2d78] to-[#6c00ff] rounded-full flex items-center justify-center text-sm border-2 border-[#1a1a2e]">
                {emoji}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-white font-black text-sm">+1.000 membros</p>
            <p className="text-white/50 text-xs">já estão no grupo VIP</p>
          </div>
          <Star className="w-4 h-4 text-[#ffd600]" />
        </div>
      </div>
    </section>
  );
}
