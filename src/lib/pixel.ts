type Fbq = (...args: unknown[]) => void;

function fbq(): Fbq | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { fbq?: Fbq }).fbq;
}

export function trackViewContent(productId: number, name: string) {
  fbq()?.("track", "ViewContent", {
    content_ids: [String(productId)],
    content_name: name,
    content_type: "product",
  });
}

// Clique no botão "Ver na Shopee": evento padrão Lead (otimizável no Meta) + evento custom para relatórios.
export function trackShopeeClick(productId: number, name: string) {
  const params = { content_ids: [String(productId)], content_name: name };
  fbq()?.("track", "Lead", params);
  fbq()?.("trackCustom", "ClickShopee", params);
}
