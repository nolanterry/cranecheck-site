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
  title: "Crane Pre-Erection Planning Guide: Site Surveys, Foundations, Permits & A/D Director Requirements",
  description: "Complete guide to crane pre-erection planning including site surveys, soil bearing capacity testing, foundation design per ASME B30.5-5.1.1, utility locates per 811/OSHA 1926.1408, FAA notification, permits, and A/D director requirements per OSHA 1926.1404.",
  alternates: { canonical: "/blog/crane-pre-erection-planning-guide" },
};

export default function CranePreErectionPlanningGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Pre-Erection Planning Guide: Site Surveys, Foundations, Permits & A/D Director Requirements",
    "description": "Complete guide to crane pre-erection planning including site surveys, soil bearing capacity testing, foundation design per ASME B30.5-5.1.1, utility locates per 811/OSHA 1926.1408, FAA notification, permits, and A/D director requirements per OSHA 1926.1404.",
    "datePublished": "2026-04-04",
    "dateModified": "2026-04-04",
    "author": {
      "@type": "Organization",
      "name": "CraneCheck Team",
      "url": "https://cranecheck.co/blog/authors/cranecheck-team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CraneCheck",
      "url": "https://cranecheck.co"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cranecheck.co/blog/crane-pre-erection-planning-guide"
    }
  };

  const breadcrumbSchema = {
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
        "name": "Blog",
        "item": "https://cranecheck.co/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Crane Pre-Erection Planning Guide",
        "item": "https://cranecheck.co/blog/crane-pre-erection-planning-guide"
      }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Planning</span>
              <span className="text-xs text-gray-400">April 4, 2026</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Pre-Erection Planning Guide: Site Surveys, Foundations, Permits & A/D Director Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to crane pre-erection planning including site surveys, soil bearing capacity testing, foundation design per ASME B30.5-5.1.1, utility locates, FAA notification for tall cranes, permit requirements, and assembly/disassembly director requirements per OSHA 1926.1404.
            </p>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Pre-erection planning is the most critical phase of any crane operation. Ground failures, inadequate foundations,
                utility strikes, and improper assembly account for a disproportionate share of crane incidents — and nearly all
                of them are preventable with proper planning. OSHA 1926.1404 requires a qualified assembly/disassembly (A/D)
                director for every crane assembly, and ASME B30.5-5.1.1 mandates site preparation that ensures stable ground
                conditions for the crane&apos;s full operational envelope.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This guide covers every element of pre-erection planning — from the initial site survey through foundation
                engineering, utility clearance, permitting, FAA notification, and the assembly procedures that bring the crane
                into service safely.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Pre-Erection Site Surveys
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                A thorough site survey is the foundation of every pre-erection plan. The survey must evaluate ground conditions,
                access routes, overhead and underground obstructions, adjacent structures, and environmental factors that will
                affect crane placement and operation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Site Survey Checklist
              </h3>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Ground conditions:</strong> Identify soil type, drainage patterns, recent excavation, fill areas, and underground structures (vaults, tunnels, basements)</li>
                <li><strong>Access routes:</strong> Measure road widths, turning radii, bridge weight limits, overhead clearances, and grade percentages along the delivery and crane travel path</li>
                <li><strong>Overhead obstructions:</strong> Map power lines, communication cables, building overhangs, and any structures within the crane&apos;s swing radius plus a safety margin</li>
                <li><strong>Underground utilities:</strong> Obtain utility locate maps and mark all known underground infrastructure (gas, electric, water, sewer, fiber, steam)</li>
                <li><strong>Adjacent structures:</strong> Document buildings, walls, and structures within the crane&apos;s potential fall zone (minimum 1.5x total crane height)</li>
                <li><strong>Wind exposure:</strong> Assess wind conditions — hilltops, urban canyons, coastal areas, and gaps between buildings create localized wind acceleration</li>
                <li><strong>Environmental restrictions:</strong> Identify noise ordinances, work hour restrictions, wildlife protection zones, and environmental permits</li>
                <li><strong>Emergency access:</strong> Verify fire department access is maintained during crane operations per local fire code requirements</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Soil Bearing Capacity and Foundation Design
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Ground failure is the leading cause of mobile crane tip-overs and a major factor in tower crane collapses. ASME
                B30.5-5.1.1 requires that the crane be placed on a firm surface capable of supporting the crane and its load
                under all operating conditions. For tower cranes, foundation engineering is always required.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Soil Bearing Capacity by Type
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Soil Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Presumptive Bearing (psf)</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Risk Level</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Geotechnical Required?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Bedrock (sound)</td>
                    <td className="border px-4 py-3">10,000–20,000</td>
                    <td className="border px-4 py-3">Low</td>
                    <td className="border px-4 py-3">No (for mobile); Yes (for tower)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Compacted gravel/sand</td>
                    <td className="border px-4 py-3">3,000–6,000</td>
                    <td className="border px-4 py-3">Low–Medium</td>
                    <td className="border px-4 py-3">Recommended for heavy lifts</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Stiff clay</td>
                    <td className="border px-4 py-3">2,000–4,000</td>
                    <td className="border px-4 py-3">Medium</td>
                    <td className="border px-4 py-3">Yes — moisture sensitivity</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Loose/medium sand</td>
                    <td className="border px-4 py-3">1,000–3,000</td>
                    <td className="border px-4 py-3">Medium–High</td>
                    <td className="border px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Soft clay/silt</td>
                    <td className="border px-4 py-3">500–1,500</td>
                    <td className="border px-4 py-3">High</td>
                    <td className="border px-4 py-3">Yes — mandatory</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Fill material (uncontrolled)</td>
                    <td className="border px-4 py-3">Unknown — assume 0</td>
                    <td className="border px-4 py-3">Very High</td>
                    <td className="border px-4 py-3">Yes — mandatory, may require removal</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Foundation and Cribbing Design
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Per ASME B30.5-5.1.1 and manufacturer requirements, the outrigger support system must distribute crane loads
                to the ground without exceeding the soil&apos;s bearing capacity:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Outrigger pad sizing:</strong> Calculate required pad area by dividing maximum outrigger reaction force by allowable soil bearing pressure — pad area (sq ft) = outrigger force (lbs) ÷ soil capacity (psf)</li>
                <li><strong>Timber cribbing:</strong> Must be hardwood (typically oak), minimum 6&quot;×6&quot; timbers, stacked in alternating layers with no more than 3 layers high without engineering approval</li>
                <li><strong>Steel crane mats:</strong> Distribute load over larger areas; typical mats are 4&apos;×8&apos; to 8&apos;×20&apos;; verify mat capacity matches outrigger reaction force</li>
                <li><strong>Tower crane foundations:</strong> Require engineered concrete piers or spread footings designed by a registered PE with site-specific geotechnical data</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Utility Locates and OSHA 1926.1408 Compliance
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1408 establishes requirements for power line clearance during crane operations, and the 811
                &quot;Call Before You Dig&quot; system is the national standard for underground utility locates. Both are
                critical pre-erection planning requirements.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Underground Utility Locate Procedure
              </h3>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Call 811:</strong> Submit a locate request at least 48–72 hours before any ground disturbance (state requirements vary from 2 to 10 business days)</li>
                <li><strong>White-line the dig area:</strong> Mark the proposed crane foundation, outrigger positions, and any excavation areas with white paint</li>
                <li><strong>Wait for markings:</strong> Utility companies will mark their facilities with color-coded paint and flags</li>
                <li><strong>Document markings:</strong> Photograph all utility markings with reference measurements before any work begins</li>
                <li><strong>Hand-dig tolerance zone:</strong> Within 18–24 inches of marked utilities, use hand digging or vacuum excavation only</li>
                <li><strong>Private utilities:</strong> 811 only covers public utilities — engage a private utility locator for on-site piping, electrical, and communication lines</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Overhead Power Line Assessment
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Voltage (kV)</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">OSHA Minimum Clearance</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Standard Reference</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Up to 50 kV</td>
                    <td className="border px-4 py-3">10 feet</td>
                    <td className="border px-4 py-3">OSHA 1926.1408 Table A</td>
                    <td className="border px-4 py-3">Minimum for any energized line</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">50–200 kV</td>
                    <td className="border px-4 py-3">15 feet</td>
                    <td className="border px-4 py-3">OSHA 1926.1408 Table A</td>
                    <td className="border px-4 py-3">Common distribution/subtransmission</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">200–350 kV</td>
                    <td className="border px-4 py-3">20 feet</td>
                    <td className="border px-4 py-3">OSHA 1926.1408 Table A</td>
                    <td className="border px-4 py-3">Transmission lines</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">350–500 kV</td>
                    <td className="border px-4 py-3">25 feet</td>
                    <td className="border px-4 py-3">OSHA 1926.1408 Table A</td>
                    <td className="border px-4 py-3">High-voltage transmission</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">500–750 kV</td>
                    <td className="border px-4 py-3">35 feet</td>
                    <td className="border px-4 py-3">OSHA 1926.1408 Table A</td>
                    <td className="border px-4 py-3">Extra-high voltage transmission</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">750–1,000 kV</td>
                    <td className="border px-4 py-3">45 feet</td>
                    <td className="border px-4 py-3">OSHA 1926.1408 Table A</td>
                    <td className="border px-4 py-3">Ultra-high voltage — rare</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Permits and FAA Notification
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Crane erection typically requires multiple permits depending on the jurisdiction, crane type, and project
                scope. FAA notification is required for any structure (including cranes) exceeding 200 feet AGL or within
                proximity to airports.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Common Permit Requirements
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Crane operating permit:</strong> Many jurisdictions require a crane permit before erection — apply 2–4 weeks in advance</li>
                <li><strong>Street/lane closure permit:</strong> Required if the crane or assembly equipment occupies public right-of-way</li>
                <li><strong>Building department permit:</strong> Tower crane foundations may require a separate building permit and engineering review</li>
                <li><strong>Environmental permits:</strong> Wetland buffers, protected species habitats, and stormwater management may require additional permits</li>
                <li><strong>Utility crossing permits:</strong> Required when crane assembly spans or crosses railroad tracks, pipelines, or utility corridors</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                FAA Notification Requirements (14 CFR Part 77)
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Under 14 CFR Part 77 (Objects Affecting Navigable Airspace), you must file FAA Form 7460-1 (Notice of Proposed
                Construction or Alteration) when:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>The crane exceeds 200 feet above ground level (AGL) at the site</li>
                <li>The crane is within the approach/departure surface of any public-use airport</li>
                <li>Within 20,000 feet (3.8 miles) of an airport with a runway longer than 3,200 feet, if the crane exceeds a 100:1 slope from the runway end</li>
                <li>Within 10,000 feet (1.9 miles) of an airport with a runway 3,200 feet or shorter, if the crane exceeds a 50:1 slope from the runway end</li>
                <li>Within 5,000 feet of a heliport, if the crane exceeds a 25:1 slope from the helipad</li>
              </ul>

              <p className="text-gray-700 mb-4 leading-relaxed">
                FAA Form 7460-1 must be filed at least 45 days before construction begins. The FAA will issue a Determination
                of No Hazard or require obstruction lighting and/or marking. Tower cranes in urban areas frequently trigger
                these requirements — always check before mobilization.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Assembly/Disassembly Director (A/D Director) per OSHA 1926.1404
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 29 CFR 1926.1404 requires that a competent and qualified A/D director supervise every crane assembly
                and disassembly operation. The A/D director has the authority to stop the operation if safety is compromised
                and must be present during all assembly and disassembly activities.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                A/D Director Qualifications
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Competent person:</strong> Must be capable of identifying existing and predictable hazards and authorized to take corrective measures per OSHA 1926.1401</li>
                <li><strong>Qualified person:</strong> Must have knowledge of crane assembly through education, training, or experience — must understand the specific crane model being assembled</li>
                <li><strong>Manufacturer procedures:</strong> Must be familiar with and follow the manufacturer&apos;s assembly and disassembly procedures</li>
                <li><strong>Authority:</strong> Must have the authority to stop assembly operations at any time for safety concerns</li>
                <li><strong>Continuous presence:</strong> Must be present during all assembly and disassembly activities — cannot delegate to an unqualified person</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                A/D Director Responsibilities
              </h3>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Review manufacturer procedures:</strong> Obtain and review the specific assembly/disassembly manual for the crane model before work begins</li>
                <li><strong>Develop the assembly plan:</strong> Create a written plan that addresses site-specific conditions, crew assignments, and rigging requirements</li>
                <li><strong>Crew briefing:</strong> Brief all crew members on the assembly sequence, hazards, communication signals, and emergency procedures</li>
                <li><strong>Ground condition verification:</strong> Confirm that ground conditions and setup areas meet the requirements in the plan</li>
                <li><strong>Component inspection:</strong> Inspect all crane components (boom sections, pins, wire rope, hardware) before assembly begins</li>
                <li><strong>Assist crane staging:</strong> Direct the positioning and connection of crane components per manufacturer sequence</li>
                <li><strong>Pin and bolt verification:</strong> Verify all pins are properly installed and secured, all bolts torqued to specification</li>
                <li><strong>Post-assembly inspection:</strong> Conduct a complete inspection and functional test before releasing the crane for operation</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Pre-Erection Checklist
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Use this comprehensive checklist to verify all pre-erection planning elements are addressed before mobilizing
                a crane to the project site:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Site survey completed</strong> — ground conditions documented, access routes verified, obstructions mapped</li>
                <li><strong>Geotechnical data obtained</strong> — soil bearing capacity confirmed for crane location and outrigger positions</li>
                <li><strong>Foundation/cribbing designed</strong> — engineered to distribute loads within soil capacity with safety factor</li>
                <li><strong>811 utility locate completed</strong> — markings documented, private locates completed if applicable</li>
                <li><strong>Power line assessment done</strong> — OSHA 1926.1408 Table A clearances verified for all crane positions</li>
                <li><strong>Permits obtained</strong> — crane permit, street closure, building permit as required by jurisdiction</li>
                <li><strong>FAA notification filed</strong> — if crane exceeds 200 feet AGL or within airport proximity zone</li>
                <li><strong>A/D director assigned</strong> — qualified person identified, manufacturer procedures reviewed</li>
                <li><strong>Assembly plan written</strong> — sequence, crew assignments, rigging, and emergency procedures documented</li>
                <li><strong>Crane components inspected</strong> — all structural components, pins, wire rope, and hardware verified</li>
                <li><strong>Assist crane arranged</strong> — if required, assist crane capacity verified for heaviest assembly pick</li>
                <li><strong>Weather window confirmed</strong> — assembly scheduled during acceptable wind and weather conditions</li>
                <li><strong>Emergency plan in place</strong> — first aid, rescue equipment, and emergency contacts established</li>
                <li><strong>Crew briefed</strong> — all personnel understand the plan, hazards, signals, and their assigned roles</li>
              </ol>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Streamline Pre-Erection Planning with CraneCheck</h3>
                <p className="text-white/90 mb-6">CraneCheck provides digital pre-erection checklists, permit tracking, A/D director documentation, and site survey templates that keep your planning organized and audit-ready from the first site visit to final assembly sign-off.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-pre-erection-planning-guide" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
