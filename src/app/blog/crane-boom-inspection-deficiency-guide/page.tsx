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
  title: "Crane Boom Inspection: Common Deficiencies & What to Look For",
  description:
    "A detailed guide to crane boom inspection — common deficiencies in lattice and hydraulic booms, visual inspection points, NDT methods, pin wear, sheave inspection, and documentation requirements.",
  alternates: { canonical: "/blog/crane-boom-inspection-deficiency-guide" },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Boom Inspection: Common Deficiencies & What to Look For",
    "description": "A detailed guide to crane boom inspection — common deficiencies in lattice and hydraulic booms, visual inspection points, NDT methods, pin wear, sheave inspection, and documentation requirements.",
    "datePublished": "2026-04-19",
    "dateModified": "2026-04-19",
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
      "@id": "https://cranecheck.co/blog/crane-boom-inspection-deficiency-guide"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Boom Inspection: Common Deficiencies", "item": "https://cranecheck.co/blog/crane-boom-inspection-deficiency-guide" }
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Inspection</span>
              <span className="text-xs text-gray-400">April 19, 2026</span>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Crane Boom Inspection: Common Deficiencies & What to Look For
            </h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder & CEO" />
            <p className="text-lg text-gray-300 max-w-3xl">
              The boom is the most structurally critical component on any crane. Knowing what deficiencies to look for — and how to document them — is essential for every crane inspector.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              Boom failures are among the most catastrophic crane accidents. When a boom buckles, collapses, or separates, there is almost no time to react — the load, boom, and often the entire crane come down. Thorough boom inspection is not optional; it&apos;s the difference between a safe operation and a disaster.
            </p>

            <p>
              This guide covers the specific deficiencies inspectors should look for in both lattice and hydraulic (telescoping) booms, the NDT methods that supplement visual inspection, and how to properly document findings.
            </p>

            <h2>Lattice Boom vs. Hydraulic Boom: Key Differences</h2>

            <p>
              Understanding the construction differences between boom types is fundamental to knowing where to look for problems:
            </p>

            <h3>Lattice Booms</h3>
            <ul>
              <li>Constructed from tubular or angle steel chords connected by diagonal and horizontal lacings</li>
              <li>Assembled from multiple sections pinned together</li>
              <li>Strength depends on the integrity of every chord, lacing, and weld</li>
              <li>Susceptible to impact damage, corrosion, and fatigue cracking at weld connections</li>
              <li>Common on crawler cranes, large mobile cranes, and tower cranes</li>
            </ul>

            <h3>Hydraulic (Telescoping) Booms</h3>
            <ul>
              <li>Constructed from large-diameter steel box or oval sections that slide inside each other</li>
              <li>Extended and retracted by hydraulic cylinders and mechanical pins</li>
              <li>Susceptible to denting, wear pad degradation, and internal corrosion</li>
              <li>Cylinder and pin failures can cause uncontrolled boom retraction or collapse</li>
              <li>Common on all-terrain, rough terrain, and truck-mounted cranes</li>
            </ul>

            <h2>Visual Inspection: Lattice Booms</h2>

            <h3>Chord Members</h3>
            <p>
              The main chords are the primary load-carrying members. Inspect for:
            </p>
            <ul>
              <li><strong>Straightness:</strong> Sight along each chord from end to end. Any visible bow, bend, or kink indicates the section has been overloaded or impacted and must be taken out of service for engineering evaluation</li>
              <li><strong>Dents and deformation:</strong> Dents greater than the chord wall thickness typically require engineering review. Even small dents can significantly reduce buckling resistance</li>
              <li><strong>Cracks:</strong> Look at weld connections, particularly where lacings attach to chords. Fatigue cracks typically start at weld toes</li>
              <li><strong>Corrosion:</strong> Surface rust is cosmetic, but pitting corrosion reduces cross-sectional area and weakens the member. Pay special attention to the bottom chords where water collects</li>
            </ul>

            <h3>Lacing Members</h3>
            <ul>
              <li><strong>Missing lacings:</strong> Even one missing lacing member changes the load path and can reduce the boom&apos;s capacity. Document and flag for immediate repair</li>
              <li><strong>Bent lacings:</strong> Indicates impact damage. Bent lacings cannot carry their designed load</li>
              <li><strong>Weld cracks at connections:</strong> The most common failure mode in lattice booms. Inspect every lacing-to-chord weld joint, using a flashlight and mirror for hard-to-see areas</li>
              <li><strong>Loose or missing hardware:</strong> If lacings are bolted rather than welded, check all bolts for tightness and proper grade</li>
            </ul>

            <h3>Section Connection Points</h3>
            <ul>
              <li>Inspect pin holes for elongation (ovaling) — measure with calipers and compare to manufacturer tolerances</li>
              <li>Check connection pins for wear, scoring, and diameter reduction</li>
              <li>Verify all pin retention devices (keepers, cotter pins, snap rings) are present and in good condition</li>
              <li>Look for cracking at pin hole edges — a stress concentration point where fatigue cracks frequently initiate</li>
            </ul>

            <h2>Visual Inspection: Hydraulic Booms</h2>

            <h3>External Surfaces</h3>
            <ul>
              <li><strong>Dents:</strong> Hydraulic boom sections are large steel shells — dents reduce structural capacity and can interfere with telescoping. Any dent visible without measurement should be documented and assessed</li>
              <li><strong>Cracks:</strong> Check at high-stress areas: boom foot welds, cylinder bracket welds, and pin connection points</li>
              <li><strong>Corrosion:</strong> Internal corrosion between nested boom sections is particularly insidious because it&apos;s hidden when the boom is retracted. Inspect internal surfaces when sections are extended</li>
              <li><strong>Paint and coating condition:</strong> While cosmetic, paint deterioration exposes steel to corrosion. Widespread paint failure may indicate age or environmental exposure concerns</li>
            </ul>

            <h3>Wear Pads and Slides</h3>
            <ul>
              <li>Wear pads (also called slides or gibs) guide boom sections during telescoping. Worn pads allow excessive play between sections</li>
              <li>Check pad thickness against manufacturer minimums — worn pads can cause boom sections to bind or shift under load</li>
              <li>Inspect pad mounting hardware</li>
              <li>Look for scoring or galling on boom section surfaces where wear pads contact</li>
            </ul>

            <h3>Telescoping Cylinder and Mechanism</h3>
            <ul>
              <li>Inspect telescope cylinder rod for scoring, pitting, and seal leaks</li>
              <li>Check cylinder mounting pins and brackets for wear and cracking</li>
              <li>Verify mechanical boom length pins (section locks) engage and disengage properly</li>
              <li>Test telescope function — extend and retract each section and listen for unusual sounds</li>
            </ul>

            <h2>Non-Destructive Testing (NDT) for Booms</h2>

            <p>
              Visual inspection has limitations — some defects are not visible to the naked eye. NDT methods extend inspection capability:
            </p>

            <h3>Magnetic Particle Testing (MT)</h3>
            <p>
              Best for detecting surface and near-surface cracks in ferromagnetic steel. Commonly used on boom chord welds, pin connections, and high-stress areas. Requires surface preparation (cleaning) and a trained Level II MT technician.
            </p>

            <h3>Ultrasonic Testing (UT)</h3>
            <p>
              Used to measure wall thickness of boom sections (detecting internal corrosion or erosion) and to find subsurface flaws. Essential for hydraulic boom sections where internal corrosion between nested sections cannot be seen visually.
            </p>

            <h3>Dye Penetrant Testing (PT)</h3>
            <p>
              Detects surface-breaking cracks in non-ferromagnetic materials or when MT equipment is not available. Applied by spraying penetrant, allowing dwell time, removing excess, and applying developer. Cracks appear as visible indications.
            </p>

            <h3>When to Use NDT</h3>
            <ul>
              <li>During annual/comprehensive inspections per ASME B30.5</li>
              <li>When visual inspection reveals suspicious indications that need confirmation</li>
              <li>After any known overload event or impact</li>
              <li>On cranes with high utilization hours or harsh service conditions</li>
              <li>When required by the crane manufacturer&apos;s maintenance manual</li>
            </ul>

            <h2>Sheave Inspection</h2>

            <p>
              Sheaves at the boom tip and throughout the boom system are critical wear points:
            </p>

            <ul>
              <li><strong>Groove wear:</strong> Measure groove diameter with a sheave gauge. Worn grooves accelerate wire rope wear and can cause rope displacement</li>
              <li><strong>Groove profile:</strong> The groove should support the rope across approximately 150° of contact. Flat-bottomed or excessively wide grooves indicate replacement is needed</li>
              <li><strong>Bearing condition:</strong> Spin each sheave by hand (when safe to do so). Rough or binding rotation indicates bearing failure</li>
              <li><strong>Cracks and chips:</strong> Particularly on cast sheaves, look for radial cracks extending from the hub or groove</li>
              <li><strong>Guards and keepers:</strong> Verify all sheave guards and rope keepers are in place to prevent rope displacement</li>
            </ul>

            <h2>Boom Rest and Stops</h2>

            <ul>
              <li>Inspect boom rest/boom cradle for structural integrity — cracked boom rests can allow the boom to slide off during transport</li>
              <li>Check boom hoist limit switch (boom backstop/anti-boom-over) — this device prevents the boom from going over the top, which can cause catastrophic failure</li>
              <li>Verify boom angle indicator accuracy</li>
              <li>Inspect boom hoist pawl/ratchet device if equipped</li>
            </ul>

            <h2>Documentation Best Practices</h2>

            <p>
              Boom inspection documentation should be detailed enough that another inspector can understand exactly what was found:
            </p>

            <ul>
              <li><strong>Location reference:</strong> Identify deficiency location by boom section number, chord position (top left, bottom right, etc.), and approximate distance from section end</li>
              <li><strong>Measurements:</strong> Record crack lengths, dent dimensions (depth and diameter), pin hole measurements, and wire rope diameter readings</li>
              <li><strong>Photos:</strong> Photograph every significant finding with a reference scale (ruler or coin) in the frame</li>
              <li><strong>Severity rating:</strong> Classify each finding as informational, requiring monitoring, requiring repair before next use, or requiring immediate removal from service</li>
              <li><strong>Comparison to previous inspections:</strong> Note whether deficiencies are new, unchanged, or have progressed since the last inspection</li>
            </ul>

            <p>
              CraneCheck&apos;s digital inspection platform allows inspectors to capture findings with photos, measurements, and location tags in real time — creating a complete boom condition history that tracks changes over the crane&apos;s service life.
            </p>

            <div className="bg-brand-light border border-brand/20 rounded-xl p-8 mt-12 not-prose">
              <h3 className="text-xl font-bold text-navy mb-2">Ready to modernize your crane inspections?</h3>
              <p className="text-gray-600 mb-4">CraneCheck helps crane companies digitize inspections, track compliance, and pass audits with confidence.</p>
              <Link href="/demo" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Book a Demo →</Link>
            </div>
          </div>
        </article>
        <RelatedPosts currentSlug="crane-boom-inspection-deficiency-guide" />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
