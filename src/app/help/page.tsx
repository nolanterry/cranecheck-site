import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { HelpCenter } from "./help-center";

export const metadata: Metadata = {
  title: "Help Center — CraneCheck Knowledge Base",
  description:
    "Get answers to common questions about CraneCheck crane inspection software. Setup guides, inspection workflows, OSHA compliance tips, team management, and troubleshooting.",
  openGraph: {
    title: "CraneCheck Help Center",
    description: "Everything you need to get the most out of CraneCheck crane inspection software.",
  },
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Help Center
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to run compliant crane inspections with CraneCheck.
            Can&apos;t find what you need? Email{" "}
            <a href="mailto:support@cranecheck.com" className="text-brand hover:underline">
              support@cranecheck.com
            </a>
          </p>
        </div>
        <HelpCenter />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
