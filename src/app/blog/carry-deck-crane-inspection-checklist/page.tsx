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
  title: "Carry Deck Crane Inspection Checklist: ASME B30.5 Requirements for Industrial Pick-and-Carry Operations",
  description: "Complete carry deck crane inspection checklist covering pick-and-carry stability, outrigger-less operation limits, steering and drivetrain checks, deck platform inspection, hydraulic systems, boom inspection, and ASME B30.5 compliance for industrial plant operations.",
  alternates: { canonical: "/blog/carry-deck-crane-inspection-checklist" },
};

export default function CarryDeckCraneInspectionChecklistPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Carry Deck Crane Inspection Checklist: ASME B30.5 Requirements for Industrial Pick-and-Carry Operations",
    "description": "Complete carry deck crane inspection checklist covering pick-and-carry stability, outrigger-less operation limits, steering and drivetrain checks, deck platform inspection, hydraulic systems, boom inspection, and ASME B30.5 compliance for industrial plant operations.",
    "datePublished": "2026-05-09",
    "dateModified": "2026-05-09",
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
      "@id": "https://cranecheck.co/blog/carry-deck-crane-inspection-checklist"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Carry Deck Crane Inspection Checklist", "item": "https://cranecheck.co/blog/carry-deck-crane-inspection-checklist" }
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
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">11 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Carry Deck Crane Inspection Checklist: ASME B30.5 Requirements for Industrial Pick-and-Carry Operations</h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
            <p className="text-lg text-gray-300 leading-relaxed">Carry deck cranes occupy a unique niche in the lifting industry&mdash;compact, self-propelled machines with a 360-degree rotating boom mounted on a flat deck platform, purpose-built for picking up loads, traveling with them suspended, and setting them precisely in tight industrial environments. Their pick-and-carry capability introduces inspection considerations that differ significantly from conventional mobile cranes. This checklist covers the full scope of carry deck crane inspection, from stability during travel with suspended loads and outrigger-less operation limits to steering and drivetrain systems, deck platform integrity, hydraulic systems, boom inspection, and ASME B30.5 compliance.</p>
          </div>
        </section>
        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">What Makes Carry Deck Cranes Unique</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Carry deck cranes&mdash;sometimes called industrial cranes&mdash;are compact, self-propelled lifting machines typically ranging from 8 to 25 tons capacity. Unlike conventional mobile cranes that lift from a stationary position, carry deck cranes are engineered for pick-and-carry operations: the operator picks up a load, drives with it suspended, and places it at a new location without re-rigging or repositioning on outriggers. Their defining features include a 360-degree rotating boom on a low-profile four-wheel carrier, a flat deck platform for transporting materials independent of the hook, separate load chart ratings for stationary and travel modes, multi-mode all-wheel steering for tight plant navigation, and low overall height for operation under pipe racks and inside buildings.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These characteristics make carry deck cranes indispensable in refineries, manufacturing plants, and power generation facilities. They also create inspection demands that a generic mobile crane checklist will miss entirely.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Stability During Pick-and-Carry Operations</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The most critical inspection concern for carry deck cranes is stability during travel with a suspended load. Pick-and-carry operations rely entirely on the crane&apos;s wheelbase, counterweight, and center of gravity management to maintain stability while in motion. Inspectors must verify:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Tire condition and pressure:</strong> Inspect all four tires for tread depth, sidewall damage, proper inflation per manufacturer specs, and matching tread patterns. Uneven wear directly affects center of gravity during travel</li>
              <li><strong>LMI calibration:</strong> Verify the load moment indicator is calibrated for both stationary and travel mode ratings, transitions correctly between charts, and activates warnings at proper thresholds</li>
              <li><strong>Boom position during travel:</strong> The boom must be centered over the front (or per manufacturer spec) during pick-and-carry. Inspect the boom rest, boom lock, and travel position indicators</li>
              <li><strong>Speed limiting systems:</strong> Verify automatic speed limiters engage when a load is on the hook and restrict travel speed per manufacturer specifications</li>
              <li><strong>Swing lock and brake:</strong> The swing brake must hold the boom rigidly in travel position. Any play or drift creates a pendulum effect that can tip the crane</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Outrigger-Less Operation Limits &amp; When Outriggers Are Required</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Most carry deck cranes operate primarily on rubber, but many models include outriggers that extend stationary lifting capacity beyond on-rubber ratings. The inspector must verify the operational boundaries:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>On-rubber capacity ratings:</strong> Verify the on-rubber load chart is legible, current, and matches the crane&apos;s configuration. On-rubber ratings are typically 60&ndash;75% of outrigger-extended ratings</li>
              <li><strong>Outrigger deployment thresholds:</strong> Identify conditions requiring outrigger use&mdash;loads above on-rubber capacity, uneven ground, or boom angles exceeding specified limits</li>
              <li><strong>Outrigger condition:</strong> Inspect beams for cracks, bends, and corrosion. Check cylinders for leaks and rod scoring. Verify pads are present and serviceable</li>
              <li><strong>Level indicators:</strong> Confirm built-in level indicators are functional and accurate. On-rubber operation is sensitive to grade&mdash;even 1&ndash;2% slope significantly reduces capacity</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Industrial Plant Use: Refineries, Manufacturing &amp; Confined Spaces</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Carry deck cranes spend most of their service life inside industrial facilities&mdash;refineries, manufacturing plants, paper mills, and power plants. These environments accelerate wear and introduce hazards absent from typical construction sites.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Chemical exposure:</strong> Inspect structural steel, hydraulic fittings, wire rope, and electrical connections for accelerated corrosion from corrosive atmospheres</li>
              <li><strong>Confined space navigation:</strong> Inspect clearance warning systems, proximity alarms, and camera systems for cranes operating in areas with limited overhead clearance and narrow aisles</li>
              <li><strong>Floor loading:</strong> Verify the crane&apos;s ground bearing pressure&mdash;including the carried load&mdash;is within rated floor capacity</li>
              <li><strong>Classified areas:</strong> Verify required spark arrestors, exhaust scrubbers, or explosion-proof electrical components are present and functional</li>
              <li><strong>Indoor exhaust:</strong> Inspect exhaust scrubbers or catalytic converters on diesel units operating indoors for proper function and mounting integrity</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">ASME B30.5 Requirements for Carry Deck Cranes</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Carry deck cranes fall under ASME B30.5 (Mobile and Locomotive Cranes) as self-propelled mobile cranes. Several provisions apply directly to their unique operating characteristics:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Load rating charts (5-1.1):</strong> Display load charts for all configurations&mdash;on rubber, on outriggers, and pick-and-carry&mdash;accounting for boom length, angle, swing position, and stationary vs. travel</li>
              <li><strong>Frequent &amp; periodic inspections (5-2.1/5-2.2):</strong> Daily pre-shift checks cover mechanisms, controls, and safety devices. Periodic inspections (monthly/quarterly/annual) require detailed examination of structural members, boom, hydraulics, wire rope, hooks, and safety systems</li>
              <li><strong>Operational practices (5-3):</strong> Pick-and-carry requires load kept low during travel, boom positioned per manufacturer spec, speed limited, and clear operator sightline or signal person</li>
              <li><strong>Wire rope (5-2.4):</strong> Inspect for broken wires, abrasion, corrosion, kinking, and diameter reduction. Short boom lengths concentrate wear, requiring close attention to localized damage</li>
              <li><strong>Modifications (5-1.5):</strong> Any change affecting capacity or stability requires manufacturer or engineer written approval with updated load charts</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Steering System &amp; Drivetrain Inspection</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Because carry deck cranes travel with suspended loads, any loss of steering control or drivetrain failure can result in instability, collision, or tip-over. Key inspection points:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Steering modes:</strong> Test front steer, rear steer, crab steer, and coordinated steer for smooth operation and full lock-to-lock travel. Verify the mode selector engages positively with correct indicator lights</li>
              <li><strong>Hydraulic steering:</strong> Check pump pressure and flow. Inspect steering cylinders for leaks and rod condition. Verify emergency steering provides adequate control during hydraulic failure</li>
              <li><strong>Axle and wheel bearings:</strong> Inspect axle assemblies for play, seal leaks, and cracks. Check wheel bearings by rocking tires at 12 and 6 o&apos;clock</li>
              <li><strong>Drivetrain:</strong> Inspect transmission, torque converter, drive shafts, and differentials for leaks, noise, and fluid levels. Verify smooth forward/reverse engagement under load</li>
              <li><strong>Braking system:</strong> Test service brakes, parking brake, and automatic braking. Verify holding ability on grade with and without load. Inspect lines for leaks and corrosion</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Deck Platform &amp; Load Securement Points</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The flat deck platform serves as both a load-carrying surface and a structural chassis element. Its condition directly affects structural integrity and load-carrying capability.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Deck plate condition:</strong> Inspect for cracks, corrosion, deformation, and weld failures, especially around the boom pedestal where stress concentrations are highest</li>
              <li><strong>Tie-down points:</strong> Verify all D-rings, cleats, and tie-downs are intact and properly welded. Field-fabricated tie-downs require engineering approval</li>
              <li><strong>Deck load rating:</strong> Confirm the deck rating is posted and legible. This is separate from lifting capacity&mdash;it represents maximum weight placed directly on the deck</li>
              <li><strong>Non-skid surface:</strong> Inspect coatings, diamond plate, or grip surfaces for wear. Adequate traction prevents loads from shifting during travel</li>
              <li><strong>Deck drainage:</strong> Verify drains are clear to prevent water accumulation, which adds unaccounted weight and conceals corrosion</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Hydraulic System Inspection for Carry Deck Cranes</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Carry deck cranes rely on hydraulic power for boom lift, telescoping, swing, steering, and often propulsion. Compact packaging means components are tightly integrated and a failure in one circuit can affect multiple systems.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Reservoir and fluid:</strong> Check level, color, and clarity. Dark or milky fluid indicates contamination. Verify breather caps and filters are serviceable</li>
              <li><strong>Pumps:</strong> Listen for cavitation or unusual noise. Check mounting bolts and coupling alignment. Verify pressure meets specs with a calibrated gauge</li>
              <li><strong>Cylinders:</strong> Inspect boom lift, telescope, outrigger, and steering cylinders for rod scoring, seal leaks, pin wear, and barrel corrosion</li>
              <li><strong>Hoses and fittings:</strong> Check for abrasion, cracking, bulging, and leaks. Compact carry deck designs route hoses in tight spaces where chafing is common</li>
              <li><strong>Holding valves:</strong> Verify boom hoist and telescope holding valves prevent uncontrolled lowering. Test by raising the boom and observing for drift</li>
              <li><strong>Swing motor and gearbox:</strong> Check for leaks, oil level, unusual noise, and gear tooth condition through the inspection port</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Boom Inspection for Short-Boom Configurations</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Carry deck crane booms are short compared to other mobile cranes&mdash;typically 20 to 60 feet maximum tip height. Short booms operate at steeper angles, concentrating stress differently, and compact telescoping sections are subject to high wear rates.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Wear pads:</strong> Inspect telescope wear pads for thickness, even contact, and adjustment. Worn pads allow lateral shift, causing uneven loading and structural fatigue</li>
              <li><strong>Pin connections:</strong> Check pivot pins, telescope cylinder pins, and extension pins for wear, cracks, and retention. Measure against manufacturer tolerances</li>
              <li><strong>Structural integrity:</strong> Inspect all sections for dents, cracks, corrosion, and weld failures, especially near the pivot and first telescope transition</li>
              <li><strong>Telescope operation:</strong> Extend and retract through full range, checking for jerky motion or noise. Verify length indicators read accurately</li>
              <li><strong>Sheave and reeving:</strong> Inspect tip sheaves for groove wear, bearing condition, and guard integrity. Verify reeving matches the load chart configuration</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Operator Visibility &amp; Blind Spot Management</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The cab is typically positioned at one corner of the machine, with the boom pedestal and deck loads obstructing sightlines. During pick-and-carry, the operator must simultaneously monitor the suspended load, travel path, overhead obstructions, and nearby personnel.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Mirrors:</strong> Inspect all mirrors for condition, mounting security, and adjustment. Both sides and rear mirrors are needed to compensate for the cab&apos;s offset position</li>
              <li><strong>Camera systems:</strong> Verify rearview or surround-view displays are functional, cameras are clean and properly aimed, and image quality is adequate</li>
              <li><strong>Cab glazing:</strong> Inspect windows for cracks, hazing, and cleanliness. Verify wipers and washers work. Damaged glazing severely reduces visibility in low-light plant environments</li>
              <li><strong>Lighting:</strong> Check work lights, travel lights, and warning beacons. Indoor and under-pipe-rack operations demand adequate illumination</li>
              <li><strong>Warning devices:</strong> Verify horn, backup alarm, and proximity warning systems are functional and audible above ambient plant noise</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Load Chart Differences: Stationary vs. Travel Mode</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Unlike conventional mobile cranes that lift only from a stationary position, carry deck cranes have two distinct sets of rated capacities that the operator must understand and the inspector must verify.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li><strong>Stationary on-rubber:</strong> Applies when lifting without traveling on firm, level ground with parking brake set. Capacity varies by boom length, angle, and swing position</li>
              <li><strong>Pick-and-carry (travel):</strong> Applies when traveling with a suspended load. Travel ratings are often 50&ndash;75% of stationary capacity to account for dynamic forces and reduced stability</li>
              <li><strong>On-outrigger (if equipped):</strong> Maximum rated capacity with outriggers fully deployed. Partial extension may have a separate chart or may not be permitted</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Verify all load charts are displayed in the cab, legible, and match the crane&apos;s current configuration. Confirm the LMI is programmed with correct charts and transitions properly between modes. Any discrepancy must be resolved before the crane returns to service.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Carry deck cranes demand specialized inspection practices. A generic checklist will miss the stability concerns unique to pick-and-carry operations, the deck platform requirements, multi-mode steering systems, and dual load chart distinctions. Inspectors who understand these demands&mdash;and follow ASME B30.5 as it applies to carry deck operations&mdash;help ensure these versatile machines operate safely in the demanding industrial environments they were built to serve.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-3">Streamline Carry Deck Crane Inspections</h3>
              <p className="text-white/90 mb-6">CraneCheck provides carry deck crane inspection templates with built-in pick-and-carry checklists, dual load chart verification, deck platform inspection points, and full ASME B30.5 compliance tracking.</p>
              <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
            </div>

          </div>
        </article>
        <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="carry-deck-crane-inspection-checklist" /></div>
        <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
