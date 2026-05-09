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
  title: "Crane Rope Drum & Winch Inspection: Groove Wear, Clutch & Brake Criteria per ASME B30",
  description: "Complete guide to crane rope drum and winch inspection covering groove wear measurement, fleet angle limits, drum lagging, clutch engagement criteria, brake holding tests, and ASME B30.5-5.2.3 requirements.",
  alternates: { canonical: "/blog/crane-rope-drum-winch-inspection" },
};

export default function CraneRopeDrumWinchInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Rope Drum & Winch Inspection: Groove Wear, Clutch & Brake Criteria per ASME B30",
    "description": "Complete guide to crane rope drum and winch inspection covering groove wear measurement, fleet angle limits, drum lagging, clutch engagement criteria, brake holding tests, and ASME B30.5-5.2.3 requirements.",
    "datePublished": "2026-05-09",
    "dateModified": "2026-05-09",
    "author": { "@type": "Person", "name": "Nolan Terry", "url": "https://cranecheck.co/blog/authors/nolan-terry" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/crane-rope-drum-winch-inspection" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Rope Drum & Winch Inspection", "item": "https://cranecheck.co/blog/crane-rope-drum-winch-inspection" }
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
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Maintenance</span>
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">10 min read</span>
            </div>
            <Link href="/blog" className="text-brand hover:text-brand-dark text-sm font-medium mb-4 inline-block">&larr; Back to Blog</Link>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Crane Rope Drum &amp; Winch Inspection: Groove Wear, Clutch &amp; Brake Criteria per ASME B30</h1>
            <p className="text-lg text-gray-300 mb-6">Inspection guide for crane rope drums and winch assemblies &mdash; groove wear measurement, fleet angle verification, drum lagging condition, clutch engagement testing, brake holding criteria, and ASME B30.5&ndash;5.2.3 specific requirements.</p>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">The rope drum and winch assembly is the mechanical heart of every crane hoisting system. It stores, pays out, and retrieves wire rope under enormous loads &mdash; often exceeding tens of thousands of pounds of line pull. When drum grooves wear beyond tolerance, fleet angles drift out of specification, or brake holding capacity degrades, the consequences range from accelerated wire rope damage to catastrophic uncontrolled load descent. ASME B30.5 Section 5.2.3 specifically addresses periodic inspection requirements for hoisting machinery, including drums, brakes, clutches, and all associated components. Every inspector working on mobile or tower cranes should understand these criteria in detail.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Drum Groove Wear Patterns &amp; Measurement</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Rope drum grooves guide wire rope into orderly wraps and support it under load to prevent crushing. ASME B30.5&ndash;5.2.3(b)(1) requires inspection of drums for cracks, wear, and proper rope winding. Original groove depth is typically 30&ndash;40% of rope diameter; wear below 25% diminishes lateral support and requires corrective action. The groove pitch &mdash; center-to-center distance &mdash; must match rope diameter plus 2&ndash;5% clearance, since uneven pitch causes destructive rope-on-rope contact during spooling.</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Profile gauge check:</strong> A groove gauge matched to rope diameter should seat fully &mdash; gaps indicate excessive wear or incorrect geometry requiring regrooving</li>
                <li><strong>Surface condition:</strong> Inspect for cracks, spalling, corrosion pitting, and scoring. Longitudinal cracks along groove bottoms indicate drum shell fatigue</li>
                <li><strong>Wear pattern analysis:</strong> Uneven wear across the drum width typically points to fleet angle problems or lead sheave misalignment that must be corrected upstream</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Fleet Angle Measurement &amp; Maximum Limits</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Fleet angle is the angle between the rope&apos;s centerline approaching the drum and a line perpendicular to the drum axis. Excessive fleet angle causes rope to climb out of grooves, ride over adjacent wraps, and wear unevenly. For grooved drums, the maximum is 1.5 degrees from drum centerline to the first fixed sheave &mdash; some manufacturers allow up to 2 degrees, but exceeding 1.5 degrees measurably increases rope wear. Smooth drums are restricted to 0.5&ndash;1.5 degrees depending on rope layers. Always check with rope at both extreme drum positions &mdash; full wrap and minimum wrap &mdash; and on mobile cranes verify the worst-case angle across the full boom operating range.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Drum Lagging Condition</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Many crane drums use lagging &mdash; polyurethane, nylon, bronze, or composite material bonded to the drum shell &mdash; to increase friction, protect the shell, and provide grooves. Tap lagging with a hammer during inspection; hollow sounds indicate debonding that can cause rope snagging or groove jumping. Check the material for cracking, chipping, delamination, heat discoloration, and chemical degradation. Polyurethane is particularly susceptible to UV and certain lubricant chemicals. Lagging grooves wear faster than machined steel grooves and typically require replacement sooner. For mechanically attached lagging, inspect all retaining hardware and ensure lifted or curled edges at drum flanges are corrected before they catch and damage wire rope.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Clutch Engagement Criteria</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Free-fall capable cranes use clutches to engage and disengage the hoist drum from the gear train. ASME B30.5&ndash;5.2.3(b)(4) requires inspection of clutches for proper operation and adjustment. The clutch must fully engage without slipping under rated load &mdash; any slippage requires immediate adjustment or repair. Inspect plates or bands for wear, glazing, oil contamination on friction surfaces, and heat damage. Control linkage must move through full travel without binding or excessive play, and the clutch must release cleanly since dragging plates create heat and reduce free-fall control. For hydraulic or pneumatic clutches, check cylinder seals for leaks and verify actuating pressure meets specifications.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Winch Brake Holding Tests</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Hoist brakes are the last defense against uncontrolled load descent. ASME B30.5&ndash;5.2.3(b)(3) requires brakes to hold rated load without drift and control speed during lowering. Both static and dynamic tests are essential for a thorough evaluation.</p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Static holding test:</strong> With the brake set, suspend a test load at 100% rated capacity for a minimum of 5 minutes &mdash; any measurable load descent indicates insufficient holding capacity</li>
                <li><strong>Dynamic braking test:</strong> Lower a test load and release the hoist control; the brake must stop the load within the manufacturer&apos;s specified distance</li>
                <li><strong>Pad &amp; lining inspection:</strong> Measure thickness against manufacturer minimums &mdash; glazed, contaminated, or unevenly worn linings must be replaced</li>
                <li><strong>Spring condition:</strong> Spring-set brakes rely on springs for braking force; inspect for corrosion, fatigue cracks, and loss of free length</li>
                <li><strong>Automatic engagement:</strong> Verify the brake engages automatically when the control is moved to neutral or power is lost</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">ASME B30.5&ndash;5.2.3 Requirements</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Section 5.2.3 outlines periodic inspection requirements for mobile crane hoisting machinery at intervals defined by service classification &mdash; typically monthly to annually depending on severity. Inspections must be performed by a designated qualified person with findings documented per the employer&apos;s record retention program. Key subsections include: 5.2.3(b)(1) covering drums for cracks, wear, and proper winding; 5.2.3(b)(2) covering sheaves and drums for worn, cracked, or chipped flanges and groove wear; 5.2.3(b)(3) covering brake adjustment and operation including rated-load holding; and 5.2.3(b)(4) covering clutch operation, adjustment, and holding capacity under rated load.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Drum Flanges &amp; Rope Anchoring</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Drum flanges prevent wire rope from spilling off the drum ends. ASME B30.5 requires flanges to extend a minimum of two rope diameters above the top layer of rope. Measure clearance and inspect for cracks, deformation, and impact damage &mdash; cracked flanges require repair or drum replacement. A minimum of two full &ldquo;dead wraps&rdquo; must remain on the drum at maximum payout to anchor the rope and prevent the load from being supported solely by the termination. Verify the lower limit switch stops the hoist before minimum wrap count is reached.</p>
              <p className="text-gray-700 mb-4 leading-relaxed">The dead-end rope attachment is a critical structural connection often inaccessible during normal operation. During periodic inspections, pay out sufficient rope to expose the anchor for direct examination. Inspect wedge sockets, clamp assemblies, or through-bolt terminations for corrosion, wear, and mechanical integrity. Check the drum shell at the anchor point for cracking, deformation, or elongated bolt holes from repeated loading. Any broken wires within 8 rope diameters of the termination require rope replacement per ASME B30.5.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Level Wind Mechanisms &amp; Rotation Indicators</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">Level wind mechanisms guide the rope across the drum face for even winding, while rotation indicators show the operator drum direction and speed. Inspect level wind guide rollers, carriage, lead screw, and drive components for wear, binding, and proper synchronization with drum rotation. The traverse rate must match drum groove pitch &mdash; out-of-sync level wind causes rope piling or cross-winding that accelerates rope fatigue. Verify synchronization during slow hoisting operations. For rotation indicators, confirm correct directional display for both hoisting and lowering and check for slipping or binding in the indicator mechanism.</p>

              <p className="text-gray-700 mb-4 leading-relaxed">For related inspection criteria, see our guide on <Link href="/blog/crane-wire-rope-inspection-guide">crane wire rope inspection</Link> and our article on <Link href="/blog/crane-fleet-management-preventive-maintenance">crane fleet management and preventive maintenance</Link>.</p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Key Takeaways</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Drum groove wear below 25% of nominal rope diameter prevents full rope seating and accelerates wire fatigue</li>
                <li>Fleet angle must stay below 1.5&ndash;2 degrees for grooved drums; verify at both extreme drum positions</li>
                <li>Drum lagging requires adhesion, material condition, and groove wear checks at each periodic inspection</li>
                <li>Free-fall clutches must engage fully without slipping under rated load per ASME B30.5&ndash;5.2.3(b)(4)</li>
                <li>Winch brakes require static holding tests with no drift for 5 minutes and dynamic stopping verification</li>
                <li>Minimum two dead wraps on the drum at all times; flanges must extend two rope diameters above the top layer</li>
                <li>Level wind synchronization and rope anchoring integrity are frequently missed periodic inspection items</li>
              </ul>

              <div className="not-prose mt-12 bg-gradient-to-r from-brand to-brand-dark rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Standardize Your Drum &amp; Winch Inspections</h2>
                <p className="text-gray-100 mb-8 max-w-xl mx-auto">CraneCheck includes drum and winch inspection checklists with groove measurement tracking, brake test documentation, and clutch wear trending &mdash; all aligned to ASME B30.5 periodic inspection requirements.</p>
                <a href="/pricing" className="inline-block bg-white text-brand font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4 hover:bg-gray-100">View Pricing</a>
                <a href="/demo" className="inline-block border border-white text-white hover:bg-white hover:text-brand font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg">Request Demo</a>
              </div>
            </div>
          </div>
        </section>

        <div className="not-prose max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="crane-rope-drum-winch-inspection" />
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
