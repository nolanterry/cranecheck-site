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
  title: "Crane Weathervaning & Out-of-Service Procedures: Wind Parking & Securing Protocols",
  description: "Complete guide to crane weathervaning and out-of-service procedures covering tower crane free-slewing, mobile crane securing, boom lowering thresholds, out-of-service wind speeds, storm preparation checklists, and post-storm inspection requirements.",
  alternates: { canonical: "/blog/crane-weathervaning-out-of-service" },
};

export default function CraneWeathervaningOutOfServicePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Weathervaning & Out-of-Service Procedures: Wind Parking & Securing Protocols",
    "description": "Complete guide to crane weathervaning and out-of-service procedures covering tower crane free-slewing, mobile crane securing, boom lowering thresholds, out-of-service wind speeds, storm preparation checklists, and post-storm inspection requirements.",
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
      "@id": "https://cranecheck.co/blog/crane-weathervaning-out-of-service"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Weathervaning & Out-of-Service Procedures", "item": "https://cranecheck.co/blog/crane-weathervaning-out-of-service" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Safety</span>
              <span className="text-xs text-gray-400">April 21, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Weathervaning &amp; Out-of-Service Procedures: Wind Parking &amp; Securing Protocols
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to crane weathervaning and out-of-service procedures covering tower crane free-slewing, mobile crane securing, boom lowering thresholds, storm preparation checklists, and post-storm inspection requirements.
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
                Wind is the most unpredictable and dangerous environmental force acting on cranes. When operations cease &mdash; whether at the end of a shift, during high winds, or ahead of a storm &mdash; proper out-of-service procedures reduce the wind load on the crane structure and prevent uncontrolled movement that can lead to structural failure, collapse, or collision with adjacent structures. The consequences of improper parking are severe: tower crane collapses during storms have caused fatalities, destroyed adjacent buildings, and generated insurance claims exceeding $50 million.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Every crane manufacturer specifies out-of-service wind procedures in their operator&apos;s manual, and these procedures differ significantly between crane types and even between models from the same manufacturer. ASME B30.3 (Tower Cranes), B30.5 (Mobile and Locomotive Cranes), and B30.2 (Overhead and Gantry Cranes) each address out-of-service conditions, but the manufacturer&apos;s manual takes precedence when it imposes more restrictive requirements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Tower Crane Weathervaning (Free-Slewing)
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Weathervaning is the practice of releasing the slew brake on a tower crane so the jib (boom) is free to rotate with the wind, aligning itself downwind like a weather vane. This dramatically reduces the wind moment applied to the tower structure by allowing the jib to present its minimum wind profile to the prevailing wind direction.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                When to Weathervane
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>End of shift:</strong> Most tower crane manufacturers require weathervaning whenever the crane is unattended, regardless of wind conditions</li>
                <li><strong>High wind shutdown:</strong> When wind speeds reach the manufacturer&apos;s out-of-service limit (typically 45&ndash;72 mph depending on crane model), the crane must be placed in weathervane mode</li>
                <li><strong>Storm warning:</strong> Weather forecasts predicting wind speeds approaching the crane&apos;s out-of-service rating require advance preparation &mdash; do not wait until wind speeds are already at the threshold</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Weathervaning Procedure
              </h3>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Remove all loads:</strong> Lower any suspended load to the ground or secure deck &mdash; never leave a load hanging when placing a tower crane in weathervane mode</li>
                <li><strong>Position the trolley:</strong> Move the trolley to the manufacturer&apos;s specified park position &mdash; typically as close to the tower as possible to reduce the wind moment on the jib</li>
                <li><strong>Raise the hook:</strong> Hoist the hook block to a position that prevents snagging on the jib or nearby structures during rotation &mdash; secure the hook and block per manufacturer instructions</li>
                <li><strong>Release slew brake:</strong> Disengage the slew brake mechanism per the manufacturer&apos;s specific procedure &mdash; this varies significantly between manufacturers (mechanical release, electrical release, hydraulic release)</li>
                <li><strong>Verify free rotation:</strong> Confirm the jib rotates freely without obstruction through the full 360&deg; arc &mdash; this is critical and must be verified before the operator descends</li>
                <li><strong>Disconnect power:</strong> Open the main power disconnect at the base per shutdown procedure</li>
                <li><strong>Secure access:</strong> Lock cab access doors and post out-of-service signage</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Weathervaning Clearance Requirements
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The crane must have adequate clearance for full 360&deg; rotation when weathervaning:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Adjacent structures:</strong> The jib tip and counterweight must clear all adjacent buildings, other cranes (also weathervaning), and permanent structures through full rotation</li>
                <li><strong>Property lines:</strong> Many jurisdictions require that the crane&apos;s swing arc, including counterweight, remain within the project property or secured airspace easements</li>
                <li><strong>Other cranes:</strong> On multi-crane sites, weathervaning clearance must account for all cranes rotating simultaneously in potentially different directions</li>
                <li><strong>Temporary structures:</strong> Scaffolding, formwork, and temporary enclosures must not obstruct the weathervaning arc</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Mobile Crane Out-of-Service Procedures
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Mobile cranes cannot weathervane &mdash; their out-of-service procedure focuses on reducing wind sail area and securing the crane against movement:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Boom lowering:</strong> Lower the boom to the lowest practical angle or to the boom rest &mdash; manufacturer manuals specify maximum boom angle for out-of-service parking (typically under 30&deg;)</li>
                <li><strong>Telescopic boom retraction:</strong> Retract all boom sections to minimum length to reduce wind area</li>
                <li><strong>Lattice boom:</strong> If the lattice boom cannot be lowered (common on large crawler cranes with extended boom/jib combinations), orient the boom into the prevailing wind direction and secure all pendants and tag lines</li>
                <li><strong>Swing lock:</strong> Engage the swing lock or swing brake to prevent uncontrolled rotation</li>
                <li><strong>Outriggers:</strong> Keep outriggers fully deployed and pinned during out-of-service parking &mdash; never retract outriggers until the crane is ready to travel</li>
                <li><strong>Travel locks:</strong> Engage all travel locks per manufacturer specifications</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Wind Speed Thresholds by Crane Type
              </h2>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Crane Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Operational Limit</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Out-of-Service (Design)</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Securing Procedure</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Tower crane (hammerhead)</td>
                    <td className="border px-4 py-3">20&ndash;45 mph (per load chart)</td>
                    <td className="border px-4 py-3">90&ndash;120 mph (weathervaning)</td>
                    <td className="border px-4 py-3">Weathervane, trolley in, hook up</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Tower crane (luffing jib)</td>
                    <td className="border px-4 py-3">20&ndash;40 mph</td>
                    <td className="border px-4 py-3">85&ndash;110 mph (jib raised, weathervane)</td>
                    <td className="border px-4 py-3">Luff jib to high angle, weathervane</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Mobile hydraulic crane</td>
                    <td className="border px-4 py-3">Per load chart derating</td>
                    <td className="border px-4 py-3">N/A &mdash; boom must be lowered</td>
                    <td className="border px-4 py-3">Lower/retract boom, swing lock</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Crawler crane (lattice)</td>
                    <td className="border px-4 py-3">Per load chart</td>
                    <td className="border px-4 py-3">N/A &mdash; boom into wind</td>
                    <td className="border px-4 py-3">Orient into wind, secure all lines</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Overhead bridge crane (outdoor)</td>
                    <td className="border px-4 py-3">Per manufacturer</td>
                    <td className="border px-4 py-3">Per design wind load</td>
                    <td className="border px-4 py-3">Rail clamps, bridge anchors</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Storm Preparation Checklist
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                When severe weather is forecast, the following checklist should be completed before the storm arrives:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Monitor forecasts:</strong> Begin tracking 72 hours ahead of predicted severe weather events &mdash; storms can accelerate and arrive earlier than forecast</li>
                <li><strong>Remove suspended loads:</strong> Lower all loads to ground or secure storage; disconnect rigging and slings</li>
                <li><strong>Secure loose materials:</strong> Remove or tie down materials, tarps, and debris within the crane&apos;s swing radius that could become airborne projectiles</li>
                <li><strong>Position crane for storm:</strong> Execute weathervaning (tower) or boom-lowering (mobile) procedures per manufacturer manual</li>
                <li><strong>Inspect securing devices:</strong> Verify rail clamps, storm pins, boom locks, and travel locks are functional before they are needed</li>
                <li><strong>Document pre-storm condition:</strong> Photograph the crane in its stowed/weathervaned position with timestamps &mdash; this documentation is valuable for insurance claims and post-storm damage assessment</li>
                <li><strong>Establish perimeter:</strong> Erect barricades and warning signage around the crane&apos;s potential impact zone</li>
                <li><strong>Communication plan:</strong> Ensure all crane personnel know the storm plan, emergency contacts, and post-storm reporting procedures</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Post-Storm Inspection Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                After any significant weather event (sustained winds exceeding 35 mph, lightning strikes in the vicinity, heavy precipitation, or any event triggering storm securing procedures), a qualified person must inspect the crane before operations resume:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Structural inspection:</strong> Check for visible structural damage, deformation, cracking, or shifted alignment in tower sections, boom, jib, and counterweight connections</li>
                <li><strong>Foundation and rail inspection:</strong> Verify tower crane foundation bolts, base frame, and rail alignment &mdash; check for water undermining of foundations or rail ballast</li>
                <li><strong>Electrical system check:</strong> Inspect for water intrusion in electrical cabinets, switchgear, and motor junction boxes &mdash; moisture-damaged electrical components can cause short circuits and fires</li>
                <li><strong>Wire rope and rigging:</strong> Inspect all wire ropes for damage from whipping, impact, or debris contact during the storm</li>
                <li><strong>Safety devices:</strong> Test LMI/RCI, limit switches, anti-two-block, and anemometer function before resuming operations</li>
                <li><strong>Ground conditions:</strong> Assess soil saturation around outrigger pads, crane mats, and access roads &mdash; rain-saturated soils can reduce bearing capacity by 50% or more</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Tower crane weathervaning (free-slewing) is required whenever the crane is unattended &mdash; the jib must have full 360&deg; clearance including other weathervaning cranes</li>
                <li>Manufacturer out-of-service procedures take precedence &mdash; wind speed thresholds, trolley parking position, and brake release procedures are model-specific</li>
                <li>Mobile cranes must lower and retract booms for out-of-service parking &mdash; lattice boom cranes that cannot lower must be oriented into the prevailing wind</li>
                <li>Storm preparation should begin 72 hours ahead with a documented checklist including load removal, securing, pre-storm photography, and communication plans</li>
                <li>Post-storm inspection by a qualified person must be completed before operations resume, covering structure, electrical, wire rope, safety devices, and ground conditions</li>
                <li>Rail clamps, storm pins, and boom locks are life-safety systems that must be tested regularly &mdash; not just when a storm approaches</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Document Your Storm Preparation and Post-Storm Inspections</h3>
                <p className="text-white/90 mb-6">CraneCheck provides digital storm preparation checklists, post-storm inspection templates with photo documentation, and weather event tracking &mdash; building the compliance record that protects your fleet and your company.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-weathervaning-out-of-service" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
