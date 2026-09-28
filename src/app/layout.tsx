import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1077825438384495');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
