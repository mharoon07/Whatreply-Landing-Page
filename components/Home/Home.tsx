
import Hero from "./Hero";
import AiShowcaseSection from "./AiShowcaseSection";
import TrustedBrandsSection from "./TrustedBrandsSection";
import FeaturesShowcaseSection from "./FeaturesShowcaseSection";
import GlobalImpactTestimonialsSection from "./GlobalImpactTestimonialsSection";
import IntegrationsHubSection from "./IntegrationsHubSection";
import GrowBetterSection from "./GrowBetterSection";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBrandsSection />
      <AiShowcaseSection />
      <FeaturesShowcaseSection />
      <IntegrationsHubSection />
      <GlobalImpactTestimonialsSection />
      <GrowBetterSection />
      <Footer />
    </>
  );
}
