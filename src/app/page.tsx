import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import UnitsSection from "@/components/UnitsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import TelemedicinaSection from "@/components/TelemedicinaSection";
import ProgramsSection from "@/components/ProgramsSection";
import CartaoSection from "@/components/CartaoSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <InstitutionalSection />
      <HowItWorksSection />
      <ServicesSection />
      <TelemedicinaSection />
      <ProgramsSection />
      <CartaoSection />
      <SpecialtiesSection />
      <UnitsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
