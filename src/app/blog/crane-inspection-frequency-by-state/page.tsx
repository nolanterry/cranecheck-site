import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { ReadingProgressBar } from "@/components/reading-progress";
import { TableOfContents } from "@/components/table-of-contents";
import { RelatedPosts } from "@/components/related-posts";
import Link from "next/link";
import type { Metadata } from "next";
import { AuthorByline } from "@/components/author-byline";

export const metadata: Metadata = {
  title: "Crane Inspection Frequency Requirements by State: 50-State Regulatory Guide (2026)",
  description:
    "State-by-state crane inspection frequency requirements for 2026. Covers federal OSHA baseline, Cal/OSHA, New York, New Jersey, Illinois, Washington, Florida, Texas, plus municipal overlays like NYC DOB and Chicago.",
  alternates: { canonical: "/blog/crane-inspection-frequency-by-state" },
};

export default function CraneInspectionFrequencyByStatePage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Crane Inspection Frequency Requirements by State: 50-State Regulatory Guide (2026)",
  "description": "State-by-state crane inspection frequency requirements for 2026. Covers federal OSHA baseline, Cal/OSHA, New York, New Jersey, Illinois, Washington, Florida, Texas, plus municipal overlays like NYC DOB and Chicago.",
  "datePublished": "2026-05-09",
  "dateModified": "2026-05-09",
  "author": { "@type": "Person", "name": "Nolan Terry", "url": "https://cranecheck.co/blog/authors/nolan-terry" },
  "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/crane-inspection-frequency-by-state" }
};

  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
    { "@type": "ListItem", "position": 3, "name": "Crane Inspection Frequency by State", "item": "https://cranecheck.co/blog/crane-inspection-frequency-by-state" }
  ]
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <ReadingProgressBar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Compliance</span>
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <Link href="/blog" className="text-brand hover:text-brand-dark text-sm mb-4 inline-block">&larr; Back to Blog</Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Crane Inspection Frequency Requirements by State: 50-State Regulatory Guide (2026)</h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">Federal OSHA sets the floor for crane inspection requirements, but state plan states, municipal codes, and licensing overlays can impose significantly stricter frequencies. This guide covers the key regulatory differences so you know exactly which inspection obligations apply.</p>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Federal OSHA Baseline: 29 CFR 1926.1412</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Federal OSHA establishes three inspection tiers under 29 CFR 1926.1412 that apply in all 28 federal OSHA states. <strong>Shift inspections</strong> (1926.1412(d)) require a competent person to visually check controls, safety devices, wire rope, and hooks before each shift &mdash; no written record is federally mandated. <strong>Monthly inspections</strong> (1926.1412(f)) require written documentation retained for three months covering all structural and mechanical systems. <strong>Annual inspections</strong> (1926.1412(f)(7)) require a qualified person to perform a comprehensive evaluation including disassembly and NDT as needed, with records retained until the next annual cycle. For a full breakdown, see our article on <Link href="/blog/29-cfr-1926-1412-explained">29 CFR 1926.1412 explained</Link>.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">State Plan States vs. Federal OSHA States</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Twenty-two states and territories run OSHA-approved state plans that must be &ldquo;at least as effective as&rdquo; federal standards but can exceed them. The remaining 28 states fall under direct federal OSHA jurisdiction &mdash; 29 CFR 1926.1412 is the enforceable standard unless a municipality has adopted additional requirements through local building codes or crane permitting ordinances.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">California, Washington &amp; Western State Plans</h2>
            <p className="text-gray-700 mb-4 leading-relaxed"><strong>California</strong> (Cal/OSHA) requires written documentation of every shift inspection under T8 CCR 5006.1, third-party annual certification by an accredited certifier, Cal/OSHA permits for tower cranes before erection, and employer verification of operator credentials. Cal/OSHA&rsquo;s willful violation maximum reached $178,685 in 2026 &mdash; above the federal $165,514 cap. <strong>Washington</strong> (L&amp;I, WAC 296&ndash;155 Part L) requires state-accredited annual crane certification with a physical inspection, written shift inspection records with inspector signatures, 12-month monthly record retention (vs. federal three months), and a national certification plus state endorsement for operators.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">New York &amp; NYC DOB Overlay</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">New York&rsquo;s state plan covers public sector only &mdash; private construction follows federal OSHA. However, NYC DOB imposes some of the nation&rsquo;s strictest municipal crane rules: permits for all cranes, a Certificate of On-Site Inspection (C of C) for mobile cranes over 75 tons and all tower cranes, a <strong>14-day inspection cycle</strong> for active tower cranes, city-specific Hoisting Machine Operator (HMO) licenses, licensed riggers and signal persons, and DOB-approved Special Inspectors for critical lifts. Fines reach $25,000 per violation plus potential stop-work orders and criminal penalties.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">New Jersey, Illinois &amp; Chicago</h2>
            <p className="text-gray-700 mb-4 leading-relaxed"><strong>New Jersey</strong> is a federal OSHA state but requires crane registration with the NJ Department of Labor, a biennial state inspection on top of the federal annual, state-issued operator licenses, and enhanced accident reporting. <strong>Illinois</strong> is also federal OSHA, but Chicago&rsquo;s Building Code (Title 14) adds substantial requirements: Department of Buildings crane permits, a city Hoisting Engineer License with its own exams, annual city-verified inspections, and specific wind-speed shutdown thresholds for tower cranes.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Florida &amp; Texas</h2>
            <p className="text-gray-700 mb-4 leading-relaxed"><strong>Florida</strong> follows federal OSHA inspection frequencies with no state overlay, but requires operator certification (NCCCO, NCCER, or OECP) under Florida Statute 489.113. Many coastal municipalities require tower crane permits with wind-load reviews, and post-storm inspections are effectively mandatory after named storms. <strong>Texas</strong> is the simplest major state for compliance &mdash; federal OSHA applies directly with no state crane registration, no operator licensing, and no additional inspection requirements. Some municipalities like Houston and Dallas require tower crane permits focused on site planning rather than ongoing inspection frequency.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">State-by-State Comparison</h2>
            <div className="overflow-x-auto not-prose my-8">
              <table className="w-full border-collapse border mb-6 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-3 py-2 text-left">State</th>
                    <th className="border px-3 py-2 text-left">Type</th>
                    <th className="border px-3 py-2 text-left">Shift Record</th>
                    <th className="border px-3 py-2 text-left">Monthly Retention</th>
                    <th className="border px-3 py-2 text-left">Annual</th>
                    <th className="border px-3 py-2 text-left">Operator License</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-3 py-2 font-semibold">Federal OSHA</td><td className="border px-3 py-2">Federal (28 states)</td><td className="border px-3 py-2">Not required</td><td className="border px-3 py-2">3 months</td><td className="border px-3 py-2">Qualified person</td><td className="border px-3 py-2">National cert</td></tr>
                  <tr className="bg-gray-50"><td className="border px-3 py-2 font-semibold">California</td><td className="border px-3 py-2">State plan</td><td className="border px-3 py-2">Required</td><td className="border px-3 py-2">Per Cal/OSHA</td><td className="border px-3 py-2">Third-party cert</td><td className="border px-3 py-2">National + employer verify</td></tr>
                  <tr><td className="border px-3 py-2 font-semibold">New York (NYC)</td><td className="border px-3 py-2">Federal + municipal</td><td className="border px-3 py-2">DOB docs</td><td className="border px-3 py-2">14-day cycle (tower)</td><td className="border px-3 py-2">Annual + DOB C of C</td><td className="border px-3 py-2">City HMO license</td></tr>
                  <tr className="bg-gray-50"><td className="border px-3 py-2 font-semibold">New Jersey</td><td className="border px-3 py-2">Federal + state reg</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Annual + biennial state</td><td className="border px-3 py-2">State license</td></tr>
                  <tr><td className="border px-3 py-2 font-semibold">Washington</td><td className="border px-3 py-2">State plan</td><td className="border px-3 py-2">Required</td><td className="border px-3 py-2">12 months</td><td className="border px-3 py-2">State-accredited cert</td><td className="border px-3 py-2">National + state endorse</td></tr>
                  <tr className="bg-gray-50"><td className="border px-3 py-2 font-semibold">Illinois (Chicago)</td><td className="border px-3 py-2">Federal + municipal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Annual + city verify</td><td className="border px-3 py-2">City Hoisting Engineer</td></tr>
                  <tr><td className="border px-3 py-2 font-semibold">Florida</td><td className="border px-3 py-2">Federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">National cert (state req)</td></tr>
                  <tr className="bg-gray-50"><td className="border px-3 py-2 font-semibold">Texas</td><td className="border px-3 py-2">Federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">Per federal</td><td className="border px-3 py-2">None</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Penalties &amp; Enforcement</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Federal OSHA&rsquo;s 2026 serious violation maximum is $16,550, with willful violations capped at $165,514. State plan states can exceed these &mdash; California&rsquo;s willful maximum is $178,685, and Washington L&amp;I adds administrative penalties for missing crane certifications. Municipal penalties stack on top: NYC DOB fines reach $25,000 per violation, and Chicago building code violations carry similar ranges. Critically, federal, state, and municipal penalties can all be assessed simultaneously for the same incident.</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">How to Determine Which Requirements Apply</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Identify jurisdiction type:</strong> Determine whether you operate in a federal OSHA state or state plan state using the federal OSHA website&rsquo;s current list.</li>
              <li><strong>Check state-specific regulations:</strong> For state plan states, review construction safety orders for crane requirements exceeding federal standards.</li>
              <li><strong>Verify municipal requirements:</strong> Contact the local building department for crane permits, licenses, or additional inspection frequencies.</li>
              <li><strong>Confirm registration &amp; licensing:</strong> Determine whether the state or city requires crane registration, operator licensing, or both.</li>
              <li><strong>Apply the strictest standard:</strong> Federal, state, and municipal requirements are cumulative &mdash; always comply with the most stringent at each level.</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">For more on federal penalty structures, see our guide to <Link href="/blog/crane-inspection-penalties-fines">crane inspection penalties and fines</Link>.</p>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-r from-brand to-brand-dark rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Compliant in Every State</h2>
              <p className="text-gray-100 mb-8 max-w-xl mx-auto">CraneCheck helps multi-state operators track inspection frequencies, operator credentials, and documentation requirements across every jurisdiction.</p>
              <a href="/pricing" className="inline-block bg-white hover:bg-gray-100 text-brand font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4">See Pricing</a>
              <a href="/demo" className="inline-block border border-white text-white hover:bg-white hover:text-brand font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg">Request Demo</a>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-frequency-by-state" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
