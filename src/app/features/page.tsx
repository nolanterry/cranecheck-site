import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { FeatureDeepDive } from "./feature-deep-dive";

export const metadata: Metadata = {
  title: "Features",
  description: "CraneCheck features: mobile inspections, equipment registry, deficiency tracking, PDF audit reports, team management, and NCCCO cert tracking. Built for OSHA compliance.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Built for Crane Companies.<br />
            <span className="text-brand">Every Feature Maps to OSHA.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No bloat, no generic checklists. Every feature in CraneCheck exists because OSHA requires it
            or because crane companies asked for it.
          </p>
        </div>
        <FeatureDeepDive />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
