export interface Product {
  id: number;
  name: string;
  description: string;
  price?: string;
  originalPrice?: string;
  image: string;
  affiliateLink: string;
  badge?: string;
  isHighlight?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Fone Bluetooth Premium",
    description: "Som envolvente com cancelamento de ruído ativo. Até 30h de bateria.",
    price: "R$ 189,90",
    originalPrice: "R$ 299,90",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    affiliateLink: "#",
    badge: "37% OFF",
    isHighlight: true,
  },
  {
    id: 2,
    name: "Smartwatch Fitness",
    description: "Monitor cardíaco, GPS integrado, resistente à água. Seu parceiro de treino.",
    price: "R$ 249,00",
    originalPrice: "R$ 399,00",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    affiliateLink: "#",
    badge: "Mais Vendido",
  },
  {
    id: 3,
    name: "Luminária LED de Mesa",
    description: "Design minimalista, luz ajustável em 3 temperaturas. Perfeita para home office.",
    price: "R$ 79,90",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    affiliateLink: "#",
  },
  {
    id: 4,
    name: "Purificador de Ar",
    description: "Filtro HEPA H13, elimina 99,97% das partículas. Silencioso e eficiente.",
    price: "R$ 349,00",
    originalPrice: "R$ 499,00",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
    affiliateLink: "#",
    badge: "Promoção",
  },
  {
    id: 5,
    name: "Câmera de Segurança Wi-Fi",
    description: "Full HD 1080p, visão noturna, detecção de movimento e acesso pelo celular.",
    price: "R$ 129,90",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=500&q=80",
    affiliateLink: "#",
  },
  {
    id: 6,
    name: "Teclado Mecânico RGB",
    description: "Switches silenciosos, retroiluminação RGB programável. Layout compacto TKL.",
    price: "R$ 219,90",
    originalPrice: "R$ 319,90",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    affiliateLink: "#",
    badge: "Hot",
    isHighlight: true,
  },
  {
    id: 7,
    name: "Mini Projetor Portátil",
    description: "200 lumens, conexão HDMI e Wi-Fi, bateria integrada. Cinema em qualquer lugar.",
    price: "R$ 399,00",
    image: "https://images.unsplash.com/photo-1626379616459-8d0c2d15e43a?w=500&q=80",
    affiliateLink: "#",
  },
  {
    id: 8,
    name: "Kit Organizador de Mesa",
    description: "Bambu sustentável, inclui porta-canetas, bandeja e suporte para celular.",
    price: "R$ 89,90",
    originalPrice: "R$ 129,90",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80",
    affiliateLink: "#",
    badge: "30% OFF",
  },
  {
    id: 9,
    name: "Carregador Sem Fio 15W",
    description: "Compatível com todos os celulares Qi. Design slim e indicador LED.",
    price: "R$ 59,90",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=500&q=80",
    affiliateLink: "#",
  },
  {
    id: 10,
    name: "Fritadeira Air Fryer 4L",
    description: "Frite com até 80% menos gordura. Capacidade para família com até 4 pessoas.",
    price: "R$ 279,90",
    originalPrice: "R$ 399,90",
    image: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500&q=80",
    affiliateLink: "#",
    badge: "Super Oferta",
    isHighlight: true,
  },
  {
    id: 11,
    name: "Mouse Ergonômico Sem Fio",
    description: "Design vertical, reduz fadiga nos pulsos. Bateria recarregável via USB-C.",
    price: "R$ 149,90",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    affiliateLink: "#",
  },
  {
    id: 12,
    name: "Caixa de Som Portátil",
    description: "À prova d'água IPX7, 24h de bateria, som 360° potente e cristalino.",
    price: "R$ 169,90",
    originalPrice: "R$ 249,90",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    affiliateLink: "#",
    badge: "32% OFF",
  },
];
