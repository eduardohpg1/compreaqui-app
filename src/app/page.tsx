import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CatalogSection />
        <WhatsAppSection />
      </main>
      <Footer />
    </>
  );
}
