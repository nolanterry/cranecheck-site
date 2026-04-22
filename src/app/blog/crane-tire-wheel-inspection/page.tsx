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
  title: "Crane Tire & Wheel Inspection: Mobile Crane Rubber Tire Assessment Guide",
  description: "Complete guide to tire and wheel inspection for mobile cranes including tread depth requirements, sidewall damage criteria, tire pressure monitoring, wheel hub and lug inspection, inflation safety, and load capacity ratings for RT, AT, and truck cranes.",
  alternates: { canonical: "/blog/crane-tire-wheel-inspection" },
};

export default function CraneTireWheelInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Tire & Wheel Inspection: Mobile Crane Rubber Tire Assessment Guide",
    "description": "Complete guide to tire and wheel inspection for mobile cranes including tread depth requirements, sidewall damage criteria, tire pressure monitoring, wheel hub and lug inspection, inflation safety, and load capacity ratings for RT, AT, and truck cranes.",
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
      "@id": "https://cranecheck.co/blog/crane-tire-wheel-inspection"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Tire & Wheel Inspection", "item": "https://cranecheck.co/blog/crane-tire-wheel-inspection" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Maintenance</span>
              <span className="text-xs text-gray-400">April 22, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Tire &amp; Wheel Inspection: Mobile Crane Rubber Tire Assessment Guide
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to tire and wheel inspection for mobile cranes, covering tread depth requirements, sidewall damage criteria, tire pressure monitoring, wheel hub and lug inspection, inflation safety, and load capacity ratings for RT, AT, and truck cranes.
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
                Mobile crane tires carry some of the highest wheel loads of any rubber-tired vehicle on a construction site. A fully rigged all-terrain crane can have individual axle loads exceeding 40,000 lbs, and tire pressures routinely operate at 100&ndash;130 psi. Tire failure during crane travel &mdash; particularly at highway speeds during mobilization &mdash; has caused fatal rollovers and multi-vehicle collisions. Tire failure during on-rubber crane operations (pick-and-carry) can cause sudden crane instability.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Despite these risks, tire and wheel inspection receives far less attention than boom, wire rope, or hydraulic system inspection on most crane programs. ASME B30.5 includes tire condition in its inspection requirements, and OSHA 1926.1412(d) requires pre-shift visual inspection of &ldquo;tires (when used)&rdquo; before each shift. DOT regulations (49 CFR 393.75) apply when the crane travels on public highways.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Tire Types Used on Mobile Cranes
              </h2>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Crane Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Typical Tire Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Typical Pressure</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Key Inspection Concerns</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Rough Terrain (RT)</td>
                    <td className="border px-4 py-3">Large flotation tires, 4 tires total</td>
                    <td className="border px-4 py-3">30&ndash;60 psi</td>
                    <td className="border px-4 py-3">Sidewall cuts from rough terrain, uneven wear from 4WD/4WS</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">All-Terrain (AT)</td>
                    <td className="border px-4 py-3">Highway-rated radials, 6&ndash;18 tires</td>
                    <td className="border px-4 py-3">100&ndash;130 psi</td>
                    <td className="border px-4 py-3">High-speed highway travel wear, multi-axle alignment, heat buildup</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Truck Crane</td>
                    <td className="border px-4 py-3">Commercial truck tires, 6&ndash;14 tires</td>
                    <td className="border px-4 py-3">100&ndash;120 psi</td>
                    <td className="border px-4 py-3">DOT compliance for highway, dual tire matching, retreads</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Carry Deck / Industrial</td>
                    <td className="border px-4 py-3">Solid or pneumatic industrial tires</td>
                    <td className="border px-4 py-3">Varies / N/A for solid</td>
                    <td className="border px-4 py-3">Chunking (solid), flat spots, mounting hardware</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Tread Depth and Wear Assessment
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Minimum tread depth for highway travel:</strong> DOT 49 CFR 393.75 requires minimum 4/32-inch tread depth on steering axle tires and 2/32-inch on all other axles for vehicles traveling on public highways</li>
                <li><strong>Wear pattern analysis:</strong> Uneven wear indicates alignment problems, suspension issues, or improper inflation &mdash; center wear suggests over-inflation; edge wear suggests under-inflation; one-sided wear indicates misalignment</li>
                <li><strong>Multi-axle alignment wear:</strong> All-terrain cranes with 4&ndash;9 axles are particularly susceptible to accelerated tire wear from axle misalignment &mdash; even slight misalignment multiplied across multiple axles causes rapid tire degradation</li>
                <li><strong>Flat spots:</strong> Extended stationary parking causes flat spots in tires &mdash; check for flat spots on cranes that have been stored for extended periods before returning to service</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Sidewall Damage Criteria
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Cuts exposing cords:</strong> Any sidewall cut deep enough to expose the tire&apos;s cord structure is a removal-from-service condition &mdash; exposed cords will corrode and fail under load</li>
                <li><strong>Bulges and blisters:</strong> Sidewall bulges indicate internal ply separation &mdash; the tire can fail catastrophically without warning at any time; remove from service immediately</li>
                <li><strong>Weathering and ozone cracking:</strong> Cranes stored outdoors develop sidewall cracking from UV and ozone exposure &mdash; minor surface crazing is cosmetic, but cracks extending to the cord layer require tire replacement</li>
                <li><strong>Scuff and abrasion damage:</strong> Sidewall scuffing from contact with curbs, equipment, or construction debris &mdash; assess depth and area of damage relative to remaining sidewall thickness</li>
                <li><strong>Bead area damage:</strong> Damage to the bead area (where the tire seats on the rim) from improper mounting or dismounting can cause air loss under load</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Tire Pressure Monitoring and Inflation Safety
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Tire pressure management on mobile cranes is a critical safety issue. Under-inflated tires reduce load-carrying capacity and generate excessive heat during travel. Over-inflated tires are more susceptible to impact damage and blowout.
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Cold inflation pressure:</strong> Always check and set tire pressure when tires are cold (before travel or operation) &mdash; hot tires read 10&ndash;15% higher than actual cold pressure</li>
                <li><strong>Manufacturer-specified pressure:</strong> Crane tire pressure must match the manufacturer&apos;s specification for the crane&apos;s operating weight; this information is on the tire placard or in the operator&apos;s manual</li>
                <li><strong>Inflation cage requirement:</strong> OSHA 1926.600(a)(1) requires tire inflation to be performed in a safety cage or with a remote inflation device when inflating tires mounted on split rims &mdash; rim separation during inflation has caused fatal injuries</li>
                <li><strong>TPMS (Tire Pressure Monitoring Systems):</strong> Many modern all-terrain cranes include TPMS that alerts the operator to pressure loss &mdash; verify TPMS sensors are functioning during inspection</li>
                <li><strong>Nitrogen inflation:</strong> Some crane operators use nitrogen inflation to reduce pressure variation with temperature changes and slow oxidation-related degradation &mdash; check that all tires on the same crane use the same inflation medium</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Wheel Hub and Lug Inspection
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Lug nut torque:</strong> Verify all lug nuts are present and properly torqued &mdash; re-torque after any wheel removal and after the first 50&ndash;100 miles of travel per manufacturer specifications</li>
                <li><strong>Hub oil seals:</strong> Check for hub oil leaks that indicate seal failure &mdash; oil on brake components from hub seal failure creates braking hazards during highway travel</li>
                <li><strong>Wheel condition:</strong> Inspect rims for cracks, particularly at lug holes and the bead seat area &mdash; cracked rims can fail explosively under tire pressure</li>
                <li><strong>Dual tire spacing:</strong> On truck cranes and AT cranes with dual tires, verify adequate spacing between duals &mdash; debris trapped between duals accelerates sidewall damage and heat buildup</li>
                <li><strong>Wheel bearing condition:</strong> Check for bearing noise, excessive play, and heat during post-travel inspection &mdash; wheel bearing failure at highway speed causes wheel separation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                On-Rubber (Pick-and-Carry) Operations
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                When mobile cranes operate &ldquo;on rubber&rdquo; without outriggers, the tires become part of the crane&apos;s stability system. Tire condition directly affects the crane&apos;s rated capacity for pick-and-carry operations:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Load chart tire pressure requirements:</strong> On-rubber load charts specify required tire pressure &mdash; operating below the specified pressure reduces actual capacity below the chart rating</li>
                <li><strong>Ground conditions:</strong> Soft or uneven ground increases tire deflection and can cause sudden instability &mdash; on-rubber charts assume level, firm ground</li>
                <li><strong>Travel speed limits:</strong> On-rubber load charts specify maximum travel speed with load &mdash; typically 1&ndash;2 mph; higher speeds create dynamic forces not accounted for in the chart</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Mobile crane tires carry extreme loads at high pressures &mdash; tire failure during travel or on-rubber operations can be catastrophic</li>
                <li>DOT 49 CFR 393.75 establishes minimum tread depth requirements for highway travel; ASME B30.5 and OSHA 1926.1412 require pre-shift tire inspection</li>
                <li>Sidewall cuts exposing cords, bulges indicating ply separation, and bead area damage are all removal-from-service conditions</li>
                <li>Tire pressure must be checked cold and set to manufacturer specifications &mdash; under-inflation reduces load capacity and generates dangerous heat buildup</li>
                <li>On-rubber crane operations require tire pressure at the load chart specification &mdash; operating with low pressure invalidates the on-rubber capacity rating</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Track Tire Condition Across Your Fleet</h3>
                <p className="text-white/90 mb-6">CraneCheck provides digital tire inspection checklists with tread depth tracking, pressure logging, sidewall damage documentation, and automated replacement scheduling for every mobile crane in your fleet.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-tire-wheel-inspection" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
