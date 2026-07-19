import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedSource from "@/components/TrustedSource";
import CatalogGrid from "@/components/CatalogGrid";
import Services from "@/components/Services";
import Inspiration from "@/components/Inspiration";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedSource />
        <CatalogGrid />
        <Services />
        <Inspiration />
        <QuoteSection />
      </main>
      <Footer />
    </>
  );
}
