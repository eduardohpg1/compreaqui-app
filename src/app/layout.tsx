import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexia CompreAqui | Os melhores produtos selecionados para você",
  description:
    "Descubra produtos incríveis com os melhores preços. Curadoria especial de ofertas em tecnologia, casa, escritório e muito mais. Entre no grupo VIP do WhatsApp!",
  keywords: [
    "produtos afiliados",
    "ofertas",
    "promoções",
    "tecnologia",
    "casa",
    "melhor preço",
    "curadoria",
  ],
  openGraph: {
    title: "Alexia CompreAqui | Os melhores produtos selecionados para você",
    description:
      "Curadoria especial de produtos com qualidade garantida e os melhores preços do mercado.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexia CompreAqui",
    description: "Os melhores produtos selecionados para você.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
