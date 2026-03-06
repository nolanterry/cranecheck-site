import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FeaturesSection } from "@/components/features-section";
import { ComplianceSection } from "@/components/compliance-section";
import { HowItWorks } from "@/components/how-it-works";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — OSHA Crane Inspection Software",
  description: "Mobile inspections, photo evidence, deficiency tracking, PDF compliance reports, team management. Everything crane companies need to stay OSHA-compliant.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-amber-50 to-white py-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Features</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built specifically for crane companies. Every feature maps to real OSHA requirements.
          </p>
        </div>
        <FeaturesSection />
        <ComplianceSection />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
