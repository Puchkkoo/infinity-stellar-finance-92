
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { MissionSection } from "@/components/mission-section";
import { NewsSection } from "@/components/news-section";
import { MarketsOverview } from "@/components/markets-overview";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <FeaturesSection />
        <MarketsOverview />
        <RoadmapSection />
        <MissionSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
