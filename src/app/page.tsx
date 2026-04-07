import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { AreasSection } from "@/components/sections/AreasSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <AreasSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
