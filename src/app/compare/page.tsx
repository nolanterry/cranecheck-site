import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Construction, FileText, ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare CraneCheck — See How We Stack Up",
  description: "Compare CraneCheck with alternatives like InspectAll, paper logs, and spreadsheets. See why crane companies choose our OSHA-compliant inspection software.",
  alternates: { canonical: "/compare" },
};

const COMPARISONS = [
  {
    name: "InspectAll",
    href: "/compare/inspectall",
    icon: Construction,
    description: "Purpose-built crane software vs. multi-industry platform",
    tagline: "CraneCheck covers all crane types — InspectAll focuses only on overhead cranes"
  },
  {
    name: "Paper Logs",
    href: "/compare/paper",
    icon: FileText,
    description: "Digital inspection software vs. traditional paper checklists",
    tagline: "Replace clipboards and filing cabinets with mobile inspections"
  }
];

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "Complete OSHA Coverage",
    description: "All crane types supported: mobile (1926.1412), tower (1926.1435), and overhead (1910.179). Each template maps directly to OSHA requirements."
  },
  {
    icon: Clock,
    title: "14-Day Free Trial",
    description: "Start inspecting today. No credit card required, no sales calls. Download the app and begin with pre-built OSHA-compliant templates."
  },
  {
    icon: Users,
    title: "Purpose-Built for Cranes",
    description: "Not a generic inspection platform. Every feature exists because OSHA requires it or crane companies requested it. Built by crane operators, for crane operators."
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "Simple, predictable pricing at $149/month per company. No per-inspector fees, no hidden costs, no enterprise sales process required."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cranecheck.co"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Compare",
      "item": "https://cranecheck.co/compare"
    }
  ]
};

const comparisonStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "CraneCheck Comparisons",
  "description": "Compare CraneCheck with other crane inspection solutions",
  "itemListElement": COMPARISONS.map((comparison, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `CraneCheck vs ${comparison.name}`,
    "description": comparison.tagline,
    "url": `https://cranecheck.co${comparison.href}`
  }))
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonStructuredData) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Compare CraneCheck.<br />
            <span className="text-brand">See How We Stack Up.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Honest comparisons with alternatives. See why crane companies choose CraneCheck 
            for OSHA-compliant inspections across all crane types.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Head-to-Head Comparisons</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've compared CraneCheck with the most common alternatives crane companies consider. 
                See the honest breakdown of features, pricing, and capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {COMPARISONS.map((comparison) => (
                <Link
                  key={comparison.name}
                  href={comparison.href}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-brand hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand/10 rounded-lg group-hover:bg-brand/20 transition-colors">
                      <comparison.icon className="text-brand" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">CraneCheck</h3>
                        <span className="text-gray-400 font-bold">vs</span>
                        <h3 className="font-semibold text-lg text-gray-700">{comparison.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{comparison.description}</p>
                      <p className="text-brand font-medium text-sm">{comparison.tagline}</p>
                      <div className="flex items-center gap-2 mt-4 text-brand font-medium text-sm group-hover:gap-3 transition-all">
                        See full comparison <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose CraneCheck Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose CraneCheck?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Purpose-built for crane companies who need OSHA compliance without the complexity 
                of generic inspection platforms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {DIFFERENTIATORS.map((diff) => (
                <div key={diff.title} className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <diff.icon className="text-brand" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required. 
              See why crane companies choose CraneCheck for OSHA compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://app.cranecheck.co/sign-up"
                className="bg-brand text-navy font-semibold px-8 py-4 rounded-lg hover:bg-brand-light transition-colors text-lg"
              >
                Start Free Trial
              </a>
              <a 
                href="/demo"
                className="border border-brand text-brand font-semibold px-8 py-4 rounded-lg hover:bg-brand hover:text-navy transition-colors text-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}