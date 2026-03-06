import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { ComplianceSection } from "@/components/compliance-section";
import { HowItWorks } from "@/components/how-it-works";
import { PricingPreview } from "@/components/pricing-preview";
import { TestimonialsSection } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ComplianceSection />
        <HowItWorks />
        <TestimonialsSection />
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
