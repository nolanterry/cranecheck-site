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
  title: "Telehandler Used as Crane: When OSHA Crane Rules Apply & ASME B30.22 Requirements",
  description: "Learn when a telehandler becomes a crane under OSHA 1926.1400, ASME B30.22 telescopic boom articulating crane requirements, manufacturer limitations on suspended loads, required accessories, operator certification, and common violations.",
  alternates: { canonical: "/blog/telehandler-crane-inspection-osha" },
};

export default function TelehandlerCraneInspectionOshaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Telehandler Used as Crane: When OSHA Crane Rules Apply & ASME B30.22 Requirements",
    "description": "Learn when a telehandler becomes a crane under OSHA 1926.1400, ASME B30.22 telescopic boom articulating crane requirements, manufacturer limitations on suspended loads, required accessories, operator certification, and common violations.",
    "datePublished": "2026-05-06",
    "dateModified": "2026-05-06",
    "author": {
      "@type": "Person",
      "name": "Nolan Terry",
      "url": "https://cranecheck.co/blog/authors/nolan-terry"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CraneCheck",
      "url": "https://cranecheck.co"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cranecheck.co/blog/telehandler-crane-inspection-osha"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Telehandler Crane Inspection", "item": "https://cranecheck.co/blog/telehandler-crane-inspection-osha" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <ReadingProgressBar />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-brand-light hover:text-brand font-medium mb-6 inline-block">&larr; Back to Blog</Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Compliance</span>
              <span className="text-xs text-gray-400">May 6, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Telehandler Used as Crane: When OSHA Crane Rules Apply &amp; ASME B30.22 Requirements</h1>
            <p className="text-xl text-gray-300 mb-6">When a telehandler suspends a load from a hook, boom tip, or winch attachment, it legally becomes a crane under OSHA &ndash; triggering an entirely different regulatory framework that most contractors don&apos;t plan for.</p>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <TableOfContents />
            <div className="prose prose-lg max-w-none">

              <h2 className="text-2xl font-bold text-gray-900 mb-4">When Does a Telehandler Become a Crane?</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The distinction is deceptively simple: a telehandler becomes a crane the moment it hoists a freely suspended load. OSHA&apos;s Cranes and Derricks in Construction standard (29 CFR 1926.1400) applies to &ldquo;any equipment that can hoist, lower, and horizontally move a suspended load.&rdquo; When a telehandler uses a winch, hook, or other attachment to suspend a load &ndash; rather than carrying it on a fork or in a bucket &ndash; it meets this definition and the full Subpart CC regulatory framework triggers.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA addressed this directly in the preamble to the final rule, clarifying that telehandlers equipped with hook or winch attachments are covered equipment under 1926.1400 when performing hoisting activities. The standard excludes telehandlers only when they carry loads on forks or platforms that are &ldquo;directly supported&rdquo; by the boom or attachment &ndash; not freely suspended.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">ASME B30.22: The Applicable Consensus Standard</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                ASME B30.22 covers &ldquo;Articulating Boom Cranes&rdquo; and is the consensus standard most directly applicable to telehandlers configured for crane service. While telehandlers are not articulating boom cranes in the traditional sense, OSHA references ASME B30.22 and the manufacturer&apos;s specifications as the governing documents when telehandlers perform hoisting operations. Key B30.22 requirements that apply include:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Load rating charts:</strong> The manufacturer must provide load ratings specific to the crane/hoisting configuration &ndash; not the standard telehandler load chart. Fork-mode capacity charts do not apply to suspended load operations</li>
                <li><strong>Inspection requirements:</strong> ASME B30.22-4 requires frequent (daily/monthly) and periodic (1&ndash;12 month) inspections of all hoisting components including the winch, wire rope, hook, and boom structural integrity under crane loading</li>
                <li><strong>Operational limitations:</strong> B30.22 Section 22-3.2 prohibits operations exceeding manufacturer-rated loads at any boom angle and radius, and requires the operator to verify rated capacity for each lift configuration</li>
                <li><strong>Wire rope criteria:</strong> When equipped with a winch, wire rope must meet ASME B30.22-4.2 inspection criteria including broken wire thresholds, diameter reduction limits, and evidence of heat damage or corrosion</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Manufacturer Limitations on Suspended Loads</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This is where most violations originate. The majority of telehandler manufacturers explicitly prohibit suspended loads unless the machine is equipped with a factory-approved winch or hook attachment and configured according to specific instructions. Key manufacturer requirements typically include:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Use of only manufacturer-approved hook/winch attachments &ndash; field-fabricated hooks welded to fork carriages are a serious violation of both OSHA 1926.1401 and manufacturer requirements</li>
                <li>Separate crane-mode load charts provided by the manufacturer, with significantly reduced capacities compared to fork-mode ratings</li>
                <li>Specific outrigger or stabilizer requirements for crane operations that may differ from fork-mode stabilization</li>
                <li>Prohibition on side-loading or traveling with suspended loads unless explicitly rated for carry-and-go crane operations</li>
                <li>Required anti-two-block devices when operating with a winch attachment</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Operator Certification Requirements</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                When a telehandler operates as a crane, the operator must hold crane operator certification per OSHA 1926.1427. A standard telehandler operator qualification under OSHA 1926.602 (material handling equipment) is not sufficient. The operator must be certified by an accredited testing organization recognized under 1926.1427(a) for the applicable crane type.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                NCCCO offers a Telehandler (Fixed Cab) certification specifically for telehandlers used in crane operations. Operators must pass both written and practical exams. Additionally, OSHA 1926.1427(f) requires that the operator be evaluated by the employer for the specific equipment they will operate &ndash; a general crane certification alone does not satisfy the employer evaluation requirement.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Required Accessories &amp; Safety Devices</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                When configured for crane service, telehandlers require safety devices per OSHA 1926.1415 and 1926.1416 that may not be present in standard fork configuration:
              </p>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Safety Device</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">OSHA Requirement</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border px-4 py-3">Anti-two-block device</td><td className="border px-4 py-3">1926.1416(d)(3)</td><td className="border px-4 py-3">Required when equipped with winch/wire rope</td></tr>
                  <tr><td className="border px-4 py-3">Load moment indicator (LMI)</td><td className="border px-4 py-3">1926.1416(d)(2)</td><td className="border px-4 py-3">Required for crane operations; some units have built-in LMI for fork mode that may not be calibrated for crane loads</td></tr>
                  <tr><td className="border px-4 py-3">Boom angle indicator</td><td className="border px-4 py-3">1926.1416(d)(1)</td><td className="border px-4 py-3">Must indicate boom angle to operator at all times</td></tr>
                  <tr><td className="border px-4 py-3">Load hook with safety latch</td><td className="border px-4 py-3">ASME B30.10</td><td className="border px-4 py-3">Must meet hook design and inspection criteria</td></tr>
                  <tr><td className="border px-4 py-3">Level indicator</td><td className="border px-4 py-3">1926.1415(a)(5)</td><td className="border px-4 py-3">Visible to operator during crane operations</td></tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Common Violations &amp; Citation History</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA has issued significant citations related to telehandler crane operations. The most frequent violations include:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Unauthorized hoisting attachments (1926.1401):</strong> Using field-fabricated hook attachments not approved by the telehandler manufacturer &ndash; this is the single most common violation and carries serious/willful citation potential</li>
                <li><strong>Uncertified operators (1926.1427):</strong> Allowing operators with only telehandler qualifications (no crane certification) to perform hoisting operations with suspended loads</li>
                <li><strong>Exceeding rated capacity (1926.1417):</strong> Using fork-mode load charts for crane operations, resulting in overloading because crane-mode capacities are substantially lower</li>
                <li><strong>Missing safety devices (1926.1416):</strong> Operating without required anti-two-block, LMI, or boom angle indicators when performing crane lifts</li>
                <li><strong>No pre-lift inspection (1926.1412):</strong> Failing to perform shift inspection specific to the crane/hoisting configuration before commencing suspended load operations</li>
                <li><strong>Lack of crane-specific training (1926.1430):</strong> Operators and signal persons not trained in crane operations, load charts, and hand signals specific to the hoisting configuration</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Inspection Requirements When Used as a Crane</h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1412 requires shift, monthly, and annual inspections when a telehandler is used as a crane. The inspection scope must cover crane-specific components beyond the standard telehandler pre-operation check:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Shift inspection (1926.1412(d)):</strong> Visual inspection of winch, wire rope, hook, anti-two-block device, LMI function, boom structural condition, and outrigger/stabilizer engagement before each shift of crane operations</li>
                <li><strong>Monthly inspection (1926.1412(f)):</strong> Documented inspection including wire rope measurements, hook throat opening and twist measurements, safety device function tests, hydraulic system inspection, and structural member examination</li>
                <li><strong>Annual/comprehensive inspection (1926.1412(g)):</strong> Must be performed by a qualified person and includes all items from monthly inspection plus structural weld inspection, load test verification, and complete safety device calibration</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Key Takeaways</h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>A telehandler becomes a crane under OSHA 1926.1400 the moment it hoists a freely suspended load &ndash; triggering the full Subpart CC framework</li>
                <li>Only manufacturer-approved winch and hook attachments may be used; field-fabricated hoisting attachments are a serious violation</li>
                <li>Operators must hold crane operator certification per 1926.1427, not just a standard telehandler qualification</li>
                <li>Crane-mode load charts (with significantly reduced capacities) must be used &ndash; never fork-mode charts</li>
                <li>Anti-two-block devices, LMI, and boom angle indicators are required safety devices for crane operations</li>
                <li>Shift, monthly, and annual inspections per 1926.1412 are mandatory when performing crane operations, with crane-specific components in scope</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Track Telehandler Crane Configurations with CraneCheck</h3>
                <p className="text-white/90 mb-6">CraneCheck lets you manage dual-mode telehandler inspections &ndash; fork mode and crane mode &ndash; with separate checklists, load chart tracking, operator certification verification, and safety device documentation in one platform.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="telehandler-crane-inspection-osha" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
