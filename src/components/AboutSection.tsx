import Image from "next/image";
import { CheckCircle, MessageCircle, Shield, Zap, Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function AboutSection() {
  const highlights = [
    { icon: <Shield className="w-4 h-4 text-white" />, text: "Produtos 100% verificados", color: "bg-[#ff2d78]" },
    { icon: <Zap className="w-4 h-4 text-white" />, text: "Ofertas atualizadas diariamente", color: "bg-[#6c00ff]" },
    { icon: <CheckCircle className="w-4 h-4 text-white" />, text: "Só recomendo o que compraria", color: "bg-[#0066ff]" },
    { icon: <MessageCircle className="w-4 h-4 text-white" />, text: "Suporte via WhatsApp", color: "bg-[#00a651]" },
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-white">
      {/* Faixa decorativa superior */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ff2d78] via-[#ffd600] to-[#6c00ff]" />

      {/* Blob decorativo */}
      <div className="absolute -top-20 -right-20 w-80 h-80 blob-pink opacity-10" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 blob-blue opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge de seção */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff2d78] to-[#6c00ff] text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-pink-200">
            <Star className="w-3.5 h-3.5 text-[#ffd600]" />
            Quem sou eu
            <Star className="w-3.5 h-3.5 text-[#ffd600]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Foto */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Anel decorativo com gradiente vibrante */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#ff2d78] via-[#6c00ff] to-[#0066ff] opacity-20 blur-sm" />
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#ffd600] to-[#ff2d78] opacity-30" />

              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image src={siteConfig.profileImage} alt="Alexia" fill className="object-cover" />
              </div>

              {/* Badge flutuante */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[#ffd600] to-[#ff9500] rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border-2 border-white">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <p className="text-[10px] text-[#1a1a2e]/70 font-bold uppercase">Curadoria</p>
                  <p className="text-sm font-black text-[#1a1a2e]">Premium</p>
                </div>
              </div>

              {/* Badge de promoções */}
              <div className="absolute -top-4 -left-4 bg-[#ff2d78] text-white rounded-2xl shadow-xl px-3 py-2 border-2 border-white">
                <p className="text-[10px] font-bold uppercase">Membro</p>
                <p className="text-sm font-black">VIP 👑</p>
              </div>
            </div>
          </div>

          {/* Conteúdo */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-black text-[#1a1a2e] mb-5 leading-tight">
              Olá, sou a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff2d78] to-[#6c00ff]">
                Alexia
              </span>
              ! 👋
            </h2>

            <p className="text-[#1a1a2e]/70 text-lg leading-relaxed mb-4">
              Sou apaixonada por encontrar os{" "}
              <strong className="text-[#ff2d78]">melhores produtos</strong> com os melhores
              preços. Aqui você encontra uma curadoria especial com o que eu{" "}
              <strong className="text-[#6c00ff]">realmente recomendo</strong>.
            </p>

            <p className="text-[#1a1a2e]/60 leading-relaxed mb-8">
              Cada produto que aparece aqui foi cuidadosamente selecionado levando em conta{" "}
              <span className="text-[#0066ff] font-semibold">qualidade, custo-benefício e avaliações reais</span>{" "}
              de clientes. Nada de produto ruim por aqui!
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3.5 shadow-md border border-neutral-100 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className={`w-8 h-8 ${item.color} rounded-xl flex items-center justify-center shrink-0 shadow-sm`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-[#1a1a2e]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#128c7e] hover:to-[#25d366] text-white font-black px-7 py-4 rounded-2xl transition-all hover:shadow-xl hover:shadow-green-200 hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Entrar no Grupo do WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
