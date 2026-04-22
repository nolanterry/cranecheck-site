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
  title: "Crane Inspection for Shipyard & Maritime Operations: OSHA 1915 & Longshore Requirements",
  description: "Complete guide to crane inspection for shipyard and maritime operations covering OSHA 1915.115-116 ship repair and shipyard crane requirements, OSHA 1918 longshoring, container handling, corrosion inspection, pedestal cranes, and vessel-mounted crane requirements.",
  alternates: { canonical: "/blog/crane-inspection-shipyard-maritime" },
};

export default function CraneInspectionShipyardMaritimePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Inspection for Shipyard & Maritime Operations: OSHA 1915 & Longshore Requirements",
    "description": "Complete guide to crane inspection for shipyard and maritime operations covering OSHA 1915.115-116 ship repair and shipyard crane requirements, OSHA 1918 longshoring, container handling, corrosion inspection, pedestal cranes, and vessel-mounted crane requirements.",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
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
      "@id": "https://cranecheck.co/blog/crane-inspection-shipyard-maritime"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Inspection for Shipyard & Maritime Operations", "item": "https://cranecheck.co/blog/crane-inspection-shipyard-maritime" }
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
              <span className="text-xs text-gray-400">April 22, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Inspection for Shipyard &amp; Maritime Operations: OSHA 1915 &amp; Longshore Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to crane inspection for shipyard and maritime operations covering OSHA 1915.115&ndash;116 ship repair and shipyard crane requirements, OSHA 1918 longshoring, container handling, corrosion inspection in marine environments, pedestal crane inspection, and vessel-mounted crane requirements.
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
                Maritime and shipyard crane operations exist under a different OSHA regulatory framework than land-based construction or general industry. OSHA 1915 (Shipyard Employment) governs ship repair, shipbreaking, and shipbuilding operations. OSHA 1918 (Safety and Health Regulations for Longshoring) governs cargo handling at marine terminals. These standards have crane inspection requirements that differ significantly from the 1926 Subpart CC construction crane rules most inspectors are familiar with.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The marine environment adds a layer of physical challenge to crane inspection: saltwater corrosion accelerates structural deterioration, vessel motion affects stability calculations, and the combination of heavy lifts and confined spaces creates hazards unique to maritime operations. Understanding both the regulatory framework and the environmental factors is essential for inspecting cranes in shipyard and maritime settings.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Regulatory Framework: OSHA Maritime Standards
              </h2>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Standard</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Applies To</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Key Crane Provisions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">OSHA 1915.115</td>
                    <td className="border px-4 py-3">Hoisting and hauling in shipyard employment</td>
                    <td className="border px-4 py-3">Crane rated capacity, operator qualification, signal requirements, and operational safety</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">OSHA 1915.116</td>
                    <td className="border px-4 py-3">Use of gear for material handling in shipyard</td>
                    <td className="border px-4 py-3">Wire rope, chains, slings, and rigging hardware inspection requirements</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">OSHA 1918.61&ndash;66</td>
                    <td className="border px-4 py-3">Longshoring crane operations at marine terminals</td>
                    <td className="border px-4 py-3">Annual inspection, monthly inspection, rated capacity, operator requirements</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">OSHA 1918.51</td>
                    <td className="border px-4 py-3">Longshoring gear and equipment</td>
                    <td className="border px-4 py-3">Cargo handling gear certification, inspection intervals, record keeping</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">USCG 46 CFR</td>
                    <td className="border px-4 py-3">Vessel-mounted cranes on inspected vessels</td>
                    <td className="border px-4 py-3">Vessel stability with crane loads, vessel crane inspection per classification society rules</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                OSHA 1918 Longshoring Crane Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1918.61 through 1918.66 establish specific crane inspection requirements for longshoring operations at marine terminals. These requirements differ from 1926 Subpart CC in several important ways:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Annual inspection (1918.61):</strong> Cranes used in longshoring must be inspected at least annually by a qualified person, with documented results retained for at least 12 months</li>
                <li><strong>Monthly inspection (1918.61):</strong> Monthly inspections of running ropes, standing ropes, gear, and accessory equipment with documented findings</li>
                <li><strong>Rated capacity marking (1918.62):</strong> Cranes must have the rated capacity clearly marked and visible to the operator; container cranes must have rated capacity for both spreader and hook operations</li>
                <li><strong>Operator qualification (1918.63):</strong> Longshore crane operators must meet specific qualification requirements per 1918.63, which differ from the 1926.1427 construction crane operator certification rules</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Shipyard Crane Types and Inspection Points
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Pedestal Cranes
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Pedestal cranes are the workhorses of shipyard operations &mdash; fixed or revolving cranes mounted on pedestals along the quay wall or on vessels. Pedestal crane inspection must address:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Pedestal foundation:</strong> Inspect the concrete or steel pedestal foundation for cracking, corrosion, anchor bolt condition, and grout integrity &mdash; marine environment corrosion is accelerated by saltwater spray</li>
                <li><strong>Slewing bearing:</strong> The slewing ring is the most critical component &mdash; inspect for tooth wear, raceway pitting, bolt looseness (measure bolt elongation), and lubrication condition</li>
                <li><strong>Boom and structural members:</strong> Inspect for corrosion-related section loss, particularly in the splash zone and areas where standing water accumulates</li>
                <li><strong>Wire rope and sheaves:</strong> Marine environment accelerates wire rope corrosion &mdash; internal corrosion may not be visible externally; consider wire rope magnetic testing for heavy-use shipyard cranes</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Vessel-Mounted Cranes
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Cranes mounted on vessels &mdash; from small ship cranes to heavy-lift derrick barges &mdash; must be inspected with consideration for the vessel motion and dynamic loading:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Vessel stability:</strong> Crane operations must comply with the vessel&apos;s stability book &mdash; load weight, crane radius, and vessel trim/heel affect vessel stability; naval architect review required for heavy lifts</li>
                <li><strong>Pedestal and deck reinforcement:</strong> Inspect the crane pedestal-to-deck connection and the deck structure beneath for corrosion, cracking, and weld integrity</li>
                <li><strong>Dynamic load factors:</strong> Vessel motion (roll, pitch, heave) creates dynamic loads on the crane structure not present on land &mdash; inspection must consider fatigue from these cyclic dynamic loads</li>
                <li><strong>Classification society requirements:</strong> Vessel-mounted cranes on inspected vessels are subject to classification society rules (ABS, DNV, Lloyd&apos;s) in addition to OSHA requirements</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Marine Corrosion Inspection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The marine environment is the single greatest accelerator of crane deterioration. Saltwater spray, high humidity, tidal splash zones, and galvanic corrosion between dissimilar metals create conditions that can reduce a crane&apos;s structural capacity far faster than land-based service:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Section loss measurement:</strong> Use ultrasonic thickness testing (UTT) to measure remaining steel thickness at critical structural locations &mdash; corrosion-related section loss of 10% or more requires engineering evaluation</li>
                <li><strong>Splash zone focus:</strong> The area between high and low tide marks experiences the worst corrosion &mdash; focus inspection on pedestal sections, boom heels, and structural members in this zone</li>
                <li><strong>Coating inspection:</strong> Evaluate protective coating condition (paint, zinc, epoxy) &mdash; coating failure precedes corrosion; catching coating degradation early is more cost-effective than structural repair</li>
                <li><strong>Crevice corrosion:</strong> Inspect lap joints, bolt connections, and faying surfaces where saltwater can penetrate and become trapped &mdash; crevice corrosion is not visible without disassembly</li>
                <li><strong>Wire rope lubrication:</strong> Marine environment demands more frequent wire rope lubrication than land service &mdash; inadequate lubrication allows internal corrosion that can cause sudden failure</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Container Handling Equipment
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Ship-to-shore (STS) gantry cranes:</strong> Inspect trolley mechanisms, wire rope reeving, boom hinge pins, rail and wheel condition, and spreader guide systems</li>
                <li><strong>Spreader inspection:</strong> Container spreaders are high-wear items &mdash; inspect twist lock mechanisms, telescoping cylinders, guide flippers, and electrical/hydraulic connections for wear and corrosion</li>
                <li><strong>Anti-sway systems:</strong> Many STS cranes have electronic anti-sway systems that must be tested for proper function during periodic inspection</li>
                <li><strong>Festoon systems and cable reels:</strong> High-cycle power delivery systems on STS cranes require frequent inspection for cable wear, sheave condition, and slip ring integrity</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Documentation and Record Keeping
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Maritime crane inspection documentation requirements are specified in both OSHA 1918.61 (longshoring) and 1915.115 (shipyard). Key requirements:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Inspection records retention:</strong> OSHA 1918.61 requires annual inspection records to be retained until the next annual inspection; monthly inspection records retained for at least 3 months</li>
                <li><strong>Cargo gear certification:</strong> Longshoring operations require cargo gear certification per OSHA 1918.51, separate from crane annual inspection</li>
                <li><strong>Classification society surveys:</strong> Vessel-mounted cranes require classification society survey records maintained per society rules</li>
                <li><strong>Corrosion thickness records:</strong> UTT measurements should be recorded with location maps for trend analysis over time &mdash; progressive section loss indicates the remaining service life</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Maritime crane operations are governed by OSHA 1915 (shipyard), OSHA 1918 (longshoring), and USCG regulations &mdash; not the 1926 Subpart CC construction crane rules</li>
                <li>OSHA 1918.61 requires annual and monthly crane inspections for longshoring operations with specific documentation retention requirements</li>
                <li>Marine corrosion is the primary structural degradation factor &mdash; ultrasonic thickness testing of critical sections and splash zone inspection are essential</li>
                <li>Vessel-mounted crane inspection must consider vessel stability, dynamic loading from vessel motion, and classification society requirements</li>
                <li>Container handling equipment requires specialized inspection of spreader mechanisms, anti-sway systems, and high-cycle cable delivery systems</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Maritime Crane Inspection Made Simple</h3>
                <p className="text-white/90 mb-6">CraneCheck provides digital inspection checklists aligned with OSHA 1915, OSHA 1918, and classification society requirements, including corrosion thickness tracking, marine-specific deficiency documentation, and automated inspection scheduling for shipyard and port crane fleets.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-shipyard-maritime" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
