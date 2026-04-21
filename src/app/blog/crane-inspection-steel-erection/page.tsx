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
  title: "Crane Inspection for Steel Erection: OSHA Subpart R & Multi-Lift Requirements",
  description: "Complete guide to crane inspection for steel erection covering OSHA 1926.750-761 (Subpart R), steel erection-specific crane requirements, multiple lift rigging, critical lift plans, column splicing, connector crew safety, and competent person duties.",
  alternates: { canonical: "/blog/crane-inspection-steel-erection" },
};

export default function CraneInspectionSteelErectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Inspection for Steel Erection: OSHA Subpart R & Multi-Lift Requirements",
    "description": "Complete guide to crane inspection for steel erection covering OSHA 1926.750-761 (Subpart R), steel erection-specific crane requirements, multiple lift rigging, critical lift plans, column splicing, connector crew safety, and competent person duties.",
    "datePublished": "2026-04-21",
    "dateModified": "2026-04-21",
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
      "@id": "https://cranecheck.co/blog/crane-inspection-steel-erection"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Inspection for Steel Erection", "item": "https://cranecheck.co/blog/crane-inspection-steel-erection" }
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
              <span className="text-xs text-gray-400">April 21, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Inspection for Steel Erection: OSHA Subpart R &amp; Multi-Lift Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to crane inspection for steel erection covering OSHA 1926.750&ndash;761 (Subpart R), steel erection-specific crane requirements, multiple lift rigging, critical lift plans, and competent person duties.
            </p>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Steel erection is one of the most dangerous phases of construction, and cranes are at the center of virtually every operation. OSHA recognized the unique hazards of steel erection by dedicating an entire subpart &mdash; 29 CFR 1926, Subpart R (§1926.750&ndash;761) &mdash; to steel erection safety requirements. These standards impose crane-specific obligations that go beyond the general crane requirements in Subpart CC, including unique provisions for multiple lift rigging, column stability, connector positioning, and competent person oversight.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Understanding where Subpart R requirements intersect with &mdash; and add to &mdash; Subpart CC crane requirements is critical for steel erection contractors, crane operators, and inspectors. Non-compliance exposes companies to both OSHA citations and catastrophic incident liability.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Subpart R Crane-Specific Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                While Subpart CC (29 CFR 1926.1400&ndash;1442) governs crane operations generally on construction sites, Subpart R adds specific requirements for cranes used in steel erection:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Pre-Shift Visual Inspection &mdash; 1926.753(c)
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Cranes used in steel erection must be visually inspected before each shift by a competent person</li>
                <li>This pre-shift inspection must verify that the crane, rigging, and associated equipment are in compliance with manufacturer specifications and OSHA requirements</li>
                <li>Inspection records must be maintained and available on-site &mdash; verbal sign-offs are not sufficient</li>
                <li>The competent person conducting the pre-shift inspection must be specifically knowledgeable about the crane type and steel erection hazards</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Site Layout and Crane Access &mdash; 1926.752
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Site layout plan:</strong> Before steel erection begins, a site-specific erection plan must address crane placement, access roads, material staging, and swing radius clearances</li>
                <li><strong>Adequate access roads:</strong> Crane access routes must support the gross vehicle weight and provide stable, level surfaces for setup &mdash; inadequate ground conditions under mobile cranes during steel erection is a leading cause of tip-overs</li>
                <li><strong>Pre-planning for multiple crane operations:</strong> When two or more cranes will operate simultaneously during steel erection, the erection plan must address swing radius conflicts, communication protocols, and sequencing</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Multiple Lift Rigging (Christmas Treeing)
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.753(e) permits &quot;multiple lift rigging&quot; (commonly called &quot;Christmas treeing&quot;) &mdash; hoisting multiple structural members on a single pick &mdash; but imposes strict requirements that directly affect crane inspection and capacity verification:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Maximum members per lift:</strong> No more than 5 structural members may be rigged on a single hoist line at one time</li>
                <li><strong>Capacity verification:</strong> The crane must have a rated capacity at the intended radius that accommodates the total load of all members, all rigging hardware, and a minimum capacity utilization factor &mdash; the total load must not exceed 75% of the crane&apos;s rated capacity at the working radius</li>
                <li><strong>Rigging requirements:</strong> Only certified rigging hardware rated for the total load may be used. Rigging must be designed by a qualified rigger to distribute load among all attachment points</li>
                <li><strong>Tag lines:</strong> Each member must have a tag line for controlled placement</li>
                <li><strong>Qualified rigger oversight:</strong> A qualified rigger must supervise the rigging of every multiple lift</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Multiple Lift Crane Inspection Points
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Load moment indicator (LMI):</strong> Must be functional and properly calibrated &mdash; multiple lift loads approach maximum capacity more frequently than single-piece picks</li>
                <li><strong>Wire rope condition:</strong> Inspect for accelerated wear from repeated heavy lifts &mdash; multiple lift operations increase duty cycle severity</li>
                <li><strong>Hoist brake capacity:</strong> Verify hoist brake can hold the combined weight of all members at any point during the lift sequence, including the moment when upper members are detached and the dynamic load shifts</li>
                <li><strong>Boom structural condition:</strong> Multiple lifts at high capacity utilization increase boom stress &mdash; inspect for fatigue indicators including paint cracking at stress concentrations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Column Stability and Crane Operations &mdash; 1926.756
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.756 establishes column stability requirements during steel erection that directly affect crane operations:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Four-bolt minimum:</strong> Each column splice must be connected with at least four anchor bolts before the crane load line is released &mdash; this means the crane must hold the column until bolting is complete</li>
                <li><strong>Column plumbing:</strong> Columns must be evaluated for stability before releasing the crane &mdash; the competent person must verify that the column is adequately secured against collapse</li>
                <li><strong>Impact on crane productivity:</strong> Hold times while columns are bolted and plumbed reduce crane cycles per hour &mdash; lift plans must account for realistic hold times, not ideal conditions</li>
                <li><strong>Connector crew safety:</strong> The crane must maintain control of the steel member while connectors are making the initial bolted connections &mdash; this requires the operator to maintain load control (not set brakes and walk away)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Critical Lift Plans for Steel Erection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                While OSHA doesn&apos;t use the term &quot;critical lift&quot; in Subpart R, steel erection frequently involves lifts that meet critical lift criteria under industry practice &mdash; typically defined as lifts exceeding 75% of rated capacity, lifts over personnel, tandem lifts, or lifts with unusual rigging configurations.
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Engineered lift plan:</strong> Document crane selection, configuration, rated capacity at all working radii, ground bearing pressure, load weight verification, rigging design, and sequence of operations</li>
                <li><strong>Crane inspection before critical lifts:</strong> Conduct a dedicated pre-lift inspection beyond the routine pre-shift check &mdash; verify LMI calibration, hoist brake function, boom condition, and all safety devices</li>
                <li><strong>Ground conditions:</strong> Verify outrigger pad/cribbing adequacy for the maximum ground bearing pressure during the lift &mdash; steel erection sites often have disturbed soils with reduced bearing capacity</li>
                <li><strong>Wind monitoring:</strong> Steel members present large wind sail areas &mdash; establish wind speed limits specific to the member being lifted (long beams and open-web joists are particularly wind-sensitive)</li>
                <li><strong>Communication plan:</strong> Document signal person position, radio channels, emergency stop protocol, and line of sight requirements for every phase of the critical lift</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Connector Crew Safety and Crane Coordination
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Connectors &mdash; the ironworkers who make initial connections at height &mdash; work in the most hazardous positions during steel erection. Their safety depends directly on crane operation quality:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Controlled load placement:</strong> The crane operator must place steel members close enough for connectors to reach without overextending, but not so aggressively that the member swings and strikes the connector</li>
                <li><strong>Headache ball clearance:</strong> The hook block must be positioned to avoid striking connectors when loads are released &mdash; verify anti-two-block device function before steel erection operations</li>
                <li><strong>Load line management:</strong> Slack load line during connector work creates snap-load hazards if the member shifts &mdash; maintain slight tension until all initial connections are made</li>
                <li><strong>Fall protection integration:</strong> Per 1926.760, connectors may work without conventional fall protection up to two stories or 30 feet when certain conditions are met &mdash; crane operations must not create additional fall hazards through sudden movements or uncontrolled loads</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Competent Person Duties Under Subpart R
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Subpart R assigns specific competent person responsibilities for crane-related activities during steel erection:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Pre-shift crane inspection:</strong> A competent person must inspect the crane before each shift during steel erection operations (1926.753(c))</li>
                <li><strong>Rigging inspection:</strong> Rigging must be inspected before each shift by a competent person (1926.753(c)(1))</li>
                <li><strong>Site condition assessment:</strong> A competent person must evaluate ground conditions, overhead hazards, and environmental conditions before crane setup</li>
                <li><strong>Column stability determination:</strong> A competent person determines when columns are stable enough to release the crane load line (1926.756)</li>
                <li><strong>Qualification:</strong> The competent person must have training and experience specific to steel erection crane operations &mdash; a general construction competent person designation is not sufficient</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>OSHA Subpart R (1926.750&ndash;761) adds steel erection-specific crane requirements beyond the general crane standards in Subpart CC</li>
                <li>Multiple lift rigging is limited to 5 members per pick and 75% of rated capacity &mdash; LMI calibration and boom condition are critical inspection points</li>
                <li>Column splice connections require at least four bolts before the crane load line may be released, directly impacting crane cycle times and lift planning</li>
                <li>Pre-shift crane and rigging inspection by a competent person knowledgeable in steel erection is mandatory under 1926.753(c)</li>
                <li>Connector crew safety depends on precise crane load control &mdash; anti-two-block function, controlled placement, and load line tension management are critical</li>
                <li>Critical lift plans for steel erection must account for high wind sensitivity of structural members, disturbed soil conditions, and extended hold times during bolting</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Steel Erection Crane Inspections Made Simple</h3>
                <p className="text-white/90 mb-6">CraneCheck provides Subpart R-compliant pre-shift inspection checklists, multiple lift documentation templates, and critical lift planning tools &mdash; ensuring your steel erection crane operations meet every OSHA requirement.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-steel-erection" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
