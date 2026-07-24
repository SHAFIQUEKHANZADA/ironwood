import Hero from "@/components/Hero";
import ExploreRentals from "@/components/ExploreRentals";
import TrustedSource from "@/components/TrustedSource";
import Portfolio from "@/components/Portfolio";
import CatalogCta from "@/components/CatalogCta";
import Services from "@/components/Services";
import Inspiration from "@/components/Inspiration";
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  return (
    <>
      <Hero />
      {/* The two rental tracks live on their own pages — this is the chooser. */}
      <ExploreRentals />
      <TrustedSource />
      <Portfolio />
      <CatalogCta />
      <Services />
      <Inspiration />
      <QuoteSection />
    </>
  );
}
