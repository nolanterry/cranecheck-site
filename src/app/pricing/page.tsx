import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PricingPreview } from "@/components/pricing-preview";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — CraneCheck",
  description: "Simple fleet pricing: $199/mo + $29 per crane. Unlimited inspections, all features included. 14-day free trial.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-amber-50 to-white py-16 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            One plan. Everything included. Cheaper than one OSHA fine.
          </p>
        </div>
        <PricingPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
