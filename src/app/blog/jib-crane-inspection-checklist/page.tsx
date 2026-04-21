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
  title: "Jib Crane Inspection Checklist: Wall-Mounted, Freestanding & Mast-Type Requirements",
  description: "Complete jib crane inspection checklist covering wall-mounted, freestanding, and mast-type jib cranes, ASME B30.11, OSHA 1910.179, rotation bearings, foundation bolts, boom stops, and annual vs frequent inspections.",
  alternates: { canonical: "/blog/jib-crane-inspection-checklist" },
};

export default function JibCraneInspectionChecklistPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Jib Crane Inspection Checklist: Wall-Mounted, Freestanding & Mast-Type Requirements",
    "description": "Complete jib crane inspection checklist covering wall-mounted, freestanding, and mast-type jib cranes, ASME B30.11, OSHA 1910.179, rotation bearings, foundation bolts, boom stops, and annual vs frequent inspections.",
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
      "@id": "https://cranecheck.co/blog/jib-crane-inspection-checklist"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Jib Crane Inspection Checklist", "item": "https://cranecheck.co/blog/jib-crane-inspection-checklist" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Checklists</span>
              <span className="text-xs text-gray-400">April 21, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Jib Crane Inspection Checklist: Wall-Mounted, Freestanding &amp; Mast-Type Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete jib crane inspection checklist covering wall-mounted, freestanding, and mast-type jib cranes under ASME B30.11 and OSHA 1910.179, including rotation bearings, foundation bolts, boom stops, and inspection frequency requirements.
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
                Jib cranes are among the most widely used &mdash; and most frequently under-inspected &mdash; lifting devices in industrial facilities. Their apparent simplicity disguises real structural and mechanical risks. A failed rotation bearing, cracked boom weld, or loose wall mount bracket can cause a catastrophic collapse with little warning.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                ASME B30.11 (Monorails and Underhung Cranes) and ASME B30.17 govern jib crane inspection requirements, while OSHA 1910.179 applies to overhead and gantry cranes in general industry &mdash; jib cranes in manufacturing facilities fall under OSHA&apos;s general duty clause (Section 5(a)(1)) when no specific standard directly addresses them. Understanding the applicable standards and inspection intervals is essential for compliance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Jib Crane Types and Configuration-Specific Risks
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Wall-Mounted Jib Cranes
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Wall-mounted jib cranes transfer both vertical loads and horizontal rotational forces into the building structure. The connection between the crane and the supporting column or wall is the most critical inspection point. Failures at this connection have caused complete boom collapses.
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Mounting brackets and bolts:</strong> Inspect all fasteners for proper torque &mdash; vibration from crane operation loosens bolts over time. Check for elongated bolt holes in both the bracket and the supporting structure</li>
                <li><strong>Supporting structure adequacy:</strong> Verify that the column or wall can handle the applied loads &mdash; look for concrete cracking around anchor bolts, steel column web buckling, or weld cracking at bracket connections</li>
                <li><strong>Upper and lower pivot bearings:</strong> Check bearing condition, lubrication, and free rotation &mdash; binding in pivot bearings increases lateral loads on the mounting structure</li>
                <li><strong>Rotation arc limits:</strong> Verify boom stop bolts or bumpers prevent over-rotation that could damage supply lines, building components, or adjacent equipment</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Freestanding Jib Cranes
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Freestanding (pillar-mounted) jib cranes rely entirely on their foundation for stability. The foundation design must resist overturning moments from the maximum rated load at full boom extension, plus dynamic effects from swing and hoisting.
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Foundation and anchor bolts:</strong> Inspect concrete foundation for cracking, spalling, or settlement &mdash; check anchor bolt torque and condition. Foundation bolts are the single point of failure for freestanding jib cranes</li>
                <li><strong>Base plate and grout pad:</strong> Verify base plate is fully seated on grout with no voids &mdash; gaps allow rocking that accelerates bolt fatigue and foundation deterioration</li>
                <li><strong>Mast plumbness:</strong> Check mast vertical alignment &mdash; out-of-plumb conditions (greater than L/200) indicate foundation settlement or structural distortion</li>
                <li><strong>Rotation bearing assembly:</strong> Inspect the main slewing bearing or pivot bearing for wear, contamination, and proper lubrication per manufacturer specifications</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Mast-Type Jib Cranes
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Mast-type jib cranes use a full-height mast supported at the floor and the building structure (typically a roof truss or column cap). The upper support connection is critical &mdash; it must restrain the mast laterally while allowing vertical thermal expansion.
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Upper tie connection:</strong> Inspect the building connection for bolt tightness, structural adequacy, and proper clearance for thermal movement</li>
                <li><strong>Mast condition:</strong> Check for plumbness, weld cracking, and corrosion &mdash; particularly at the floor connection and upper tie point where stress concentrations occur</li>
                <li><strong>Floor socket or base:</strong> Inspect the floor-level pivot socket for wear, contamination, and adequate lubrication</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Universal Jib Crane Inspection Points
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Regardless of jib crane type, the following components require inspection at every interval:
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Boom and Structural Components
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Boom straightness:</strong> Check for lateral or vertical bowing &mdash; a bent boom indicates overloading or impact damage</li>
                <li><strong>Weld connections:</strong> Inspect all boom-to-mast, boom-to-pivot, and brace-to-boom weld connections for cracking, particularly at stress risers and weld terminations</li>
                <li><strong>Boom stops:</strong> Verify both CW and CCW rotation stops are intact and properly positioned &mdash; missing or damaged boom stops are among the most common jib crane deficiencies</li>
                <li><strong>Tie rods and bracing:</strong> Inspect tension rods, turnbuckles, and diagonal bracing for proper tension, corrosion, and thread damage</li>
                <li><strong>Capacity plate:</strong> Confirm rated capacity is clearly posted and legible at the operator&apos;s position per ASME B30.11-2.1.1</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Hoist and Trolley Systems
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Electric chain hoist:</strong> Inspect load chain for stretch, twist, wear (replace at 10% reduction per ASME B30.16), and proper lubrication</li>
                <li><strong>Hoist upper limit switch:</strong> Test functionality before each shift &mdash; the upper limit must stop the hoist before two-blocking</li>
                <li><strong>Trolley wheels and beam:</strong> Check trolley wheel condition, axle bearings, and I-beam flange wear where the trolley rides</li>
                <li><strong>Electrical supply:</strong> Inspect festoon cable, C-track conductor bars, or slip ring assemblies for wear, damage, and proper support</li>
                <li><strong>Pendant or remote control:</strong> Verify all control functions, E-stop operation, and cord/cable condition</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Inspection Frequency: Annual vs. Frequent
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                ASME B30.11 and B30.16 establish two inspection tiers for jib cranes:
              </p>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Inspection Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Frequency</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Scope</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Performed By</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Frequent</td>
                    <td className="border px-4 py-3">Daily to monthly (based on service)</td>
                    <td className="border px-4 py-3">Operating mechanisms, control functions, limit switches, hoist chain/rope, hook latch</td>
                    <td className="border px-4 py-3">Operator or designated person</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Periodic</td>
                    <td className="border px-4 py-3">Monthly to annually (based on service)</td>
                    <td className="border px-4 py-3">All frequent items plus structural, bearings, foundation, electrical, bolted connections</td>
                    <td className="border px-4 py-3">Qualified inspector</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Annual comprehensive</td>
                    <td className="border px-4 py-3">Every 12 months minimum</td>
                    <td className="border px-4 py-3">Complete crane inspection, documented report, load test if required</td>
                    <td className="border px-4 py-3">Qualified inspector</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Service classification determines where within these ranges a specific jib crane falls. A jib crane used intermittently in a tool crib (Class A &mdash; Standby) has different inspection frequency needs than one cycling continuously on a production line (Class D &mdash; Heavy). ASME B30.11 Table 2.2-1 provides the classification criteria.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Common Jib Crane Deficiencies
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Missing or non-functional boom stops:</strong> Found on approximately 30% of jib cranes during audits &mdash; allows over-rotation that damages electrical supply systems and creates struck-by hazards</li>
                <li><strong>Loose foundation bolts:</strong> Vibration from crane operation loosens anchor bolts, particularly in concrete that was not properly cured or sized for the crane loads</li>
                <li><strong>No capacity plate:</strong> Surprising how many jib cranes in service have no visible capacity rating &mdash; a direct violation of ASME B30.11 and OSHA requirements</li>
                <li><strong>Worn rotation bearings:</strong> Neglected lubrication causes bearing failure, manifesting as jerky rotation, excessive play, or grinding sounds during swing</li>
                <li><strong>Overloaded hoists:</strong> Jib cranes in manufacturing often get used beyond their rated capacity &mdash; inspect chain hoists for stretch (1% elongation mandates replacement under ASME B30.16)</li>
                <li><strong>Electrical supply damage:</strong> Festoon cables or conductor bars worn by years of boom rotation without maintenance</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Jib crane inspection must be configuration-specific &mdash; wall-mounted, freestanding, and mast-type cranes have different critical failure points</li>
                <li>Foundation bolts and mounting connections are the most critical inspection points for freestanding and wall-mounted jib cranes respectively</li>
                <li>ASME B30.11 requires both frequent (operator-level) and periodic (qualified inspector) inspections at intervals determined by service classification</li>
                <li>Boom stops, capacity plates, and hoist upper limits are the most commonly found deficiencies on jib cranes</li>
                <li>Rotation bearing condition directly affects structural loading &mdash; binding bearings transfer excessive forces to mounting structures</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Streamline Your Jib Crane Inspections</h3>
                <p className="text-white/90 mb-6">CraneCheck provides digital inspection checklists tailored for wall-mounted, freestanding, and mast-type jib cranes with built-in ASME B30.11 compliance tracking, deficiency photo documentation, and automated inspection scheduling.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="jib-crane-inspection-checklist" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
