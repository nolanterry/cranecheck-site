"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FileText, Download, CheckCircle, BookOpen, ClipboardList, FileSpreadsheet } from "lucide-react";

const RESOURCES = [
  {
    title: "OSHA Crane Inspection Checklist",
    description: "Complete pre-use, monthly, and annual inspection checklist covering all OSHA 29 CFR 1926.1412 requirements. Print-ready PDF for field crews.",
    type: "Checklist" as const,
    pages: "4 pages",
    slug: "osha-crane-inspection-checklist",
  },
  {
    title: "29 CFR 1926.1412 Quick Reference Card",
    description: "Pocket-sized reference card summarizing key inspection intervals, documentation requirements, and qualified person criteria under OSHA crane standards.",
    type: "Guide" as const,
    pages: "2 pages",
    slug: "29-cfr-1926-1412-reference",
  },
  {
    title: "Crane Inspection Record Retention Guide",
    description: "How long to keep inspection records, what format is acceptable, and state-by-state requirements beyond federal minimums.",
    type: "Guide" as const,
    pages: "6 pages",
    slug: "record-retention-guide",
  },
  {
    title: "Pre-Shift Crane Inspection Template",
    description: "Fillable daily pre-shift inspection form for mobile, tower, and overhead cranes. Includes operator sign-off and deficiency tracking fields.",
    type: "Template" as const,
    pages: "2 pages",
    slug: "pre-shift-inspection-template",
  },
  {
    title: "OSHA Crane Audit Preparation Playbook",
    description: "Step-by-step guide to preparing for an OSHA crane inspection audit. Covers common citations, document organization, and interview preparation for safety directors.",
    type: "Whitepaper" as const,
    pages: "12 pages",
    slug: "osha-audit-playbook",
  },
  {
    title: "Tower Crane Annual Inspection Checklist",
    description: "Detailed annual inspection checklist specifically for tower cranes, covering structural components, electrical systems, and load-limiting devices per ASME B30.3.",
    type: "Checklist" as const,
    pages: "5 pages",
    slug: "tower-crane-annual-checklist",
  },
  {
    title: "Crane Operator Certification Tracker",
    description: "Spreadsheet template for tracking operator certifications, expiration dates, crane types authorized, and renewal requirements across your fleet.",
    type: "Template" as const,
    pages: "1 sheet",
    slug: "operator-cert-tracker",
  },
  {
    title: "Mobile Crane Setup & Inspection Field Guide",
    description: "Field reference for mobile crane setup inspections including ground conditions, outrigger placement, load chart verification, and pre-lift safety checks.",
    type: "Guide" as const,
    pages: "8 pages",
    slug: "mobile-crane-field-guide",
  },
];

const TYPE_CONFIG = {
  Checklist: { icon: ClipboardList, color: "bg-green-100 text-green-700" },
  Template: { icon: FileSpreadsheet, color: "bg-blue-100 text-blue-700" },
  Guide: { icon: BookOpen, color: "bg-amber-100 text-amber-700" },
  Whitepaper: { icon: FileText, color: "bg-purple-100 text-purple-700" },
};

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());
  const [globalUnlocked, setGlobalUnlocked] = useState(false);

  const handleDownload = async (slug: string) => {
    if (globalUnlocked || submitted.has(slug)) {
      setSubmitted((prev) => new Set(prev).add(slug));
      return;
    }
    setActiveResource(slug);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !activeResource) return;

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `resource-${activeResource}` }),
      });
    } catch {
      // Best-effort
    }

    const newSubmitted = new Set(submitted);
    newSubmitted.add(activeResource);
    setSubmitted(newSubmitted);
    setGlobalUnlocked(true);
    setActiveResource(null);
    localStorage.setItem("cranecheck-resources-email", email);
  };

  return (
    <>
      <Header />
      <main id="main-content">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.co" },
                { "@type": "ListItem", position: 2, name: "Resources", item: "https://cranecheck.co/resources" },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Crane Inspection Resources
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Checklists, templates, and guides built by crane safety professionals. Download what you need to keep your fleet compliant and your crews safe.
          </p>
        </section>

        {/* Resource Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => {
              const config = TYPE_CONFIG[resource.type];
              const Icon = config.icon;
              const isUnlocked = globalUnlocked || submitted.has(resource.slug);

              return (
                <div
                  key={resource.slug}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-brand/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${config.color}`}>
                      <Icon size={14} />
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-400">{resource.pages}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <button
                    onClick={() => handleDownload(resource.slug)}
                    className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                      isUnlocked
                        ? "bg-green-50 text-green-700 hover:bg-green-100"
                        : "bg-brand text-white hover:bg-brand-dark"
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <CheckCircle size={16} />
                        Download PDF
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        Get Free Download
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Email Capture Modal */}
        {activeResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" role="dialog" aria-modal="true" aria-label="Download resource">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Get Your Free Download
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Enter your email to unlock all resources instantly. No spam — just crane safety content.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                  aria-label="Email address"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="w-full bg-brand text-white font-medium py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Unlock All Resources
                </button>
              </form>
              <button
                onClick={() => setActiveResource(null)}
                className="mt-4 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            CraneCheck replaces paper checklists with OSHA-compliant digital inspections. Start your 14-day free trial — no credit card required.
          </p>
          <a
            href="https://app.cranecheck.co/sign-up"
            className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
          >
            Start Free Trial
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
