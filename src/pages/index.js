import HeroSection from "@/components/HeroSection";
import HeroBrandContainer from "@/components/HeroBrandContainer";
import HomeCouter from "@/components/HomeCouter";
import ServiceSection from "@/components/ServiceSection";
import HomeCarousel from "@/components/HomeCarousel";
import TrueIntelligence from "@/components/TrueIntelligence";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroBrandContainer />
      <TrueIntelligence />
      <HomeCarousel />
      <HomeCouter />
      <ServiceSection />
    </>
  );
}
