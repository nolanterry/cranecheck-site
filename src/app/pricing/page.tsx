import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import type { Metadata } from "next";
import { PricingTiers } from "./pricing-tiers";
import { ComparisonTable } from "./comparison-table";

export const metadata: Metadata = {
  title: "Pricing",
  description: "CraneCheck pricing: 14-day free trial, then $199/mo for 5 cranes. $29/crane beyond that. All features included. Cheaper than one OSHA fine.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does CraneCheck meet OSHA's 29 CFR 1926.1412 requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CraneCheck's inspection templates are built directly from the requirements in 29 CFR 1926.1412 for construction cranes and 29 CFR 1910.179 for overhead and gantry cranes. Every checkpoint maps to a specific regulatory requirement. Your completed digital inspections meet OSHA's documentation standards.",
      },
    },
    {
      "@type": "Question",
      name: "Can my operators use CraneCheck without cell service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CraneCheck works offline on any smartphone. Operators can complete full inspections, take photos, and flag deficiencies without connectivity. Everything syncs automatically when they're back in range.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to complete an inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most operators complete a full pre-shift inspection in under 3 minutes. That's faster than filling out a paper form — and the result is a timestamped, GPS-tagged, photo-documented digital record instead of a crumpled checklist.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when an operator finds a deficiency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When an operator flags a critical deficiency, CraneCheck automatically locks the crane from further operation until the issue is resolved. The deficiency is logged with photos, assigned for corrective action, and tracked through resolution. Safety directors get instant notifications.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try CraneCheck before committing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer a 14-day free trial with up to 3 cranes. No credit card required. You'll have access to every feature so you can see how CraneCheck works with your actual fleet and crew.",
      },
    },
    {
      "@type": "Question",
      name: "How does pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CraneCheck is $199/month (or $169/month on annual billing) which includes 5 cranes. Additional cranes are $29/crane/month. Every plan includes unlimited inspections, all features, and support. Enterprise pricing is available for fleets of 10+ cranes.",
      },
    },
    {
      "@type": "Question",
      name: "Will OSHA accept digital inspection records?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. OSHA requires that inspection records be maintained and available for review — they do not require paper. Digital records that include the inspector's name, date, equipment identification, and findings satisfy OSHA's documentation requirements. In fact, digital records are often preferred by OSHA inspectors because they're organized and searchable.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get my team started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign up for a free trial, add your cranes to the equipment registry, invite your operators, and they can start inspecting the same day. No training required — if they can use a smartphone, they can use CraneCheck.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
        />
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            One plan. Everything included. Still cheaper than one OSHA fine.
          </p>
        </div>
        <PricingTiers />
        <ComparisonTable />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
