import AboutSection from "@/components/_section/AboutSection";
import BlogSection from "@/components/_section/BlogSection";
import HeroSection from "@/components/_section/HeroSection";
import ProcessSection from "@/components/_section/ProcessSection";
import ResultsSection from "@/components/_section/ResultsSection";
import ServicesSection from "@/components/_section/ServicesSection";
import TeamSection from "@/components/_section/TeamSection";
import TestimonialSection from "@/components/_section/TestimonialSection";
import FeatureCards from "@/components/FeatureCards";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeatureCards />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TeamSection />
      <ResultsSection />
      <TestimonialSection />
      <BlogSection />
    </main>
  );
}

