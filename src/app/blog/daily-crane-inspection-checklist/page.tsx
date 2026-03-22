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
  title: "Daily Crane Inspection Checklist: What OSHA Actually Requires",
  description:
    "Complete daily crane inspection checklist based on 29 CFR 1926.1412(d). Covers each-shift inspection items, crane-type requirements, qualified inspector criteria, and documentation best practices.",
  alternates: { canonical: "/blog/daily-crane-inspection-checklist" },
};

export default function DailyCraneInspectionChecklistPage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Daily Crane Inspection Checklist: What OSHA Actually Requires",
  "description": "Complete daily crane inspection checklist based on 29 CFR 1926.1412(d). Covers each-shift inspection items, crane-type requirements, qualified inspector criteria, and documentation best practices.",
  "datePublished": "2026-02-22",
  "dateModified": "2026-02-22",
  "author": {
    "@type": "Person",
    "name": "Nolan Terry",
    "url": "https://cranecheck.com/blog/authors/nolan-terry"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CraneCheck",
    "url": "https://cranecheck.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cranecheck.com/blog/daily-crane-inspection-checklist"
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
      "item": "https://cranecheck.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://cranecheck.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Daily Crane Inspection Checklist: What OSHA Actually Requires",
      "item": "https://cranecheck.com/blog/daily-crane-inspection-checklist"
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
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Checklists
              </span>
              <span className="text-xs text-gray-400">February 22, 2026</span>
              <span className="text-xs text-gray-400">10 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Daily Crane Inspection Checklist: What OSHA Actually Requires
            </h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder & CEO" />
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A detailed breakdown of every item your operators must inspect
              before each shift under 29 CFR 1926.1412(d) — and how to document
              it properly.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-navy">
            <div className="not-prose"><TableOfContents /></div>
            <p>
              Every crane operator in the United States is required to perform a
              visual inspection before each shift. It is not optional. It is not
              a suggestion. It is a federal requirement under{" "}
              <Link href="/blog/29-cfr-1926-1412-explained">
                29 CFR 1926.1412
              </Link>
              , and failing to comply can result in citations, fines, and
              — worst of all — preventable injuries or fatalities on your
              jobsite.
            </p>
            <p>
              Yet many operators treat the daily crane inspection checklist as a
              formality. They rush through it, skip items, or rely on memory
              instead of a documented process. This article covers exactly what
              OSHA requires, item by item, so there is no ambiguity about what
              your daily crane inspection checklist needs to include.
            </p>

            <h2>What 29 CFR 1926.1412(d) Requires for Each-Shift Inspections</h2>
            <p>
              OSHA&apos;s crane inspection standards are split into several
              categories. The one that governs daily inspections is{" "}
              <strong>29 CFR 1926.1412(d)</strong>, titled &quot;Each-shift
              inspection.&quot; This section applies to all cranes and derricks
              used in construction and mandates a visual inspection by a
              competent person before each shift the equipment is used.
            </p>
            <p>
              The regulation distinguishes between two types of shift
              inspections:
            </p>
            <ul>
              <li>
                <strong>Items that must be checked by the operator at the
                beginning of each shift.</strong> These are visual and
                functional checks the operator performs before starting work.
              </li>
              <li>
                <strong>Items that require inspection before each shift by a
                competent person.</strong> In many cases the operator is the
                competent person, but the employer must ensure they meet that
                standard.
              </li>
            </ul>
            <p>
              If a deficiency is identified, the equipment must not be used until
              the issue is corrected. There is no exception for deadlines,
              project pressure, or cost. For a broader overview of all inspection
              types and frequencies, see our guide on{" "}
              <Link href="/blog/osha-crane-inspection-requirements">
                OSHA crane inspection requirements
              </Link>
              .
            </p>

            <h2>The Complete Daily Crane Inspection Checklist</h2>
            <p>
              The following checklist consolidates the items specified under 29
              CFR 1926.1412(d) along with manufacturer-recommended checks that
              OSHA expects employers to follow. Every item below should appear on
              your daily crane inspection checklist.
            </p>

            <h3>1. Control Mechanisms</h3>
            <p>
              Before moving the crane, verify that all control mechanisms are
              functioning correctly:
            </p>
            <ul>
              <li>All control levers, switches, and pedals operate smoothly and return to neutral when released</li>
              <li>Emergency stop buttons are accessible and functional</li>
              <li>Swing brake and swing lock engage and release properly</li>
              <li>Travel controls respond correctly in all directions</li>
              <li>Boom hoist and load hoist controls operate without delay or binding</li>
            </ul>

            <h3>2. Wire Rope and Rigging</h3>
            <p>
              Wire rope failures account for a significant percentage of crane
              incidents. Each shift, inspect the following:
            </p>
            <ul>
              <li>Wire rope for visible broken wires, kinks, crushing, birdcaging, or corrosion</li>
              <li>Proper spooling on drums — no overlapping or uneven winding</li>
              <li>Rope end connections and terminations are secure</li>
              <li>Sheaves and pulleys rotate freely without excessive wear or cracks</li>
              <li>Running ropes for signs of heat damage or abrasion</li>
            </ul>

            <h3>3. Hydraulic Systems</h3>
            <ul>
              <li>Hydraulic hoses for leaks, bulges, cuts, or abrasion damage</li>
              <li>Hydraulic fluid levels within manufacturer-specified range</li>
              <li>Cylinder rods for scoring, pitting, or seal leaks</li>
              <li>Hydraulic fittings for tightness — no weeping or drips</li>
              <li>Outrigger cylinders extend and retract fully without drift</li>
            </ul>

            <h3>4. Safety Devices and Operational Aids</h3>
            <p>
              OSHA requires that safety devices installed on the crane be
              operational before use:
            </p>
            <ul>
              <li>Load moment indicator (LMI) or rated capacity indicator (RCI) — powered on and calibrated</li>
              <li>Anti-two-block device is functional and warning system activates correctly</li>
              <li>Boom angle indicator reads accurately</li>
              <li>Horn, alarms, and warning lights are working</li>
              <li>Wind speed indicator, if equipped, is operational</li>
              <li>Cameras and monitoring systems, if installed, display correctly</li>
            </ul>

            <h3>5. Structural Components</h3>
            <ul>
              <li>Boom sections for cracks, dents, bends, or weld failures</li>
              <li>Turntable and slew ring for unusual play, noise, or visible damage</li>
              <li>Outrigger beams and floats for cracks, bends, or missing pins</li>
              <li>Counterweight mounting — secure and all bolts in place</li>
              <li>Hook for cracks, deformation, throat opening beyond 15% of original, or missing safety latch</li>
              <li>Hook block for free swivel rotation</li>
            </ul>

            <h3>6. Electrical Systems</h3>
            <ul>
              <li>All indicator lights and gauges functioning</li>
              <li>Wiring for fraying, exposed conductors, or loose connections</li>
              <li>Batteries charged and terminals clean</li>
              <li>Grounding systems intact</li>
              <li>Pendant control stations, if used, for button function and cable integrity</li>
            </ul>

            <h3>7. Tires, Tracks, and Undercarriage</h3>
            <ul>
              <li>Tires for proper inflation, cuts, and excessive wear (mobile cranes)</li>
              <li>Track tension, pad condition, and roller wear (crawler cranes)</li>
              <li>Axle and suspension components for damage</li>
              <li>No fluid leaks under the crane</li>
            </ul>

            <h3>8. Engine and Power Source</h3>
            <ul>
              <li>Engine oil, coolant, and fuel at proper levels</li>
              <li>Air filter indicators within acceptable range</li>
              <li>Belts and hoses for cracking, wear, or looseness</li>
              <li>Exhaust system for leaks or damage</li>
              <li>Engine starts and runs without abnormal noise or vibration</li>
            </ul>

            <h3>9. Operator Cab and Access</h3>
            <ul>
              <li>Windows clean and unobstructed for visibility</li>
              <li>Mirrors properly positioned</li>
              <li>Seat belt or restraint system in working condition</li>
              <li>Steps, ladders, handrails, and walkways secure and free of grease or ice</li>
              <li>Fire extinguisher present, charged, and within inspection date</li>
            </ul>

            <h2>Requirements by Crane Type</h2>
            <p>
              While the core daily crane inspection checklist applies broadly,
              different crane types have additional or modified inspection
              requirements.
            </p>

            <h3>Mobile Cranes (Hydraulic Truck Cranes, Rough Terrain, All-Terrain)</h3>
            <p>
              Mobile cranes operating under 29 CFR 1926 Subpart CC require
              particular attention to:
            </p>
            <ul>
              <li>Outrigger pad condition and ground bearing capacity at the setup location</li>
              <li>Tire condition and inflation for travel between lifts</li>
              <li>Telescoping boom section pins and locks</li>
              <li>Load charts posted in the cab and matched to the current configuration</li>
              <li>Carrier and upper structure rotation alignment</li>
            </ul>

            <h3>Tower Cranes</h3>
            <p>
              Tower cranes have unique inspection concerns driven by their
              height, exposure to weather, and semi-permanent installation:
            </p>
            <ul>
              <li>Climbing and anchoring systems for any signs of movement or loosening</li>
              <li>Trolley travel along the jib — smooth operation, no obstructions</li>
              <li>Rail clamps and storm locks (for rail-mounted towers)</li>
              <li>Base and mast connections for bolt tightness and alignment</li>
              <li>Aviation warning lights operational</li>
            </ul>

            <h3>Overhead and Gantry Cranes</h3>
            <p>
              Overhead cranes in general industry fall under 29 CFR 1910.179
              rather than Subpart CC, but daily inspection principles are
              similar:
            </p>
            <ul>
              <li>Bridge and trolley travel limits function correctly</li>
              <li>Runway rails for obstructions, misalignment, or excessive wear</li>
              <li>Festoon cables or conductor bars for damage</li>
              <li>Hoist brake holds load at 125% rated capacity</li>
              <li>End stops and bumpers in place and undamaged</li>
            </ul>

            <h2>Who Is Qualified to Perform Daily Crane Inspections?</h2>
            <p>
              Under 29 CFR 1926.1412(d), each-shift inspections must be
              performed by a <strong>competent person</strong>. OSHA defines a
              competent person as someone who:
            </p>
            <ul>
              <li>Is capable of identifying existing and predictable hazards in the surroundings or working conditions</li>
              <li>Is authorized to take prompt corrective measures to eliminate those hazards</li>
            </ul>
            <p>
              In practice, this is usually the crane operator. However, the
              employer is responsible for ensuring that the operator has the
              knowledge and training to identify the specific hazards associated
              with the crane type they are inspecting. A competent person for a
              hydraulic truck crane is not automatically competent for a tower
              crane.
            </p>
            <p>
              Some companies designate a dedicated inspector or maintenance
              technician for daily inspections, especially on larger sites with
              multiple cranes. Regardless of who performs the inspection, the
              results must be documented.
            </p>

            <h2>Documentation Requirements</h2>
            <p>
              OSHA does not prescribe a specific form or format for daily
              inspection records. However, the regulation does require that:
            </p>
            <ul>
              <li>Each-shift inspection results be documented</li>
              <li>Any deficiencies be reported and corrected before the crane is used</li>
              <li>Records of inspections be maintained and available for review</li>
            </ul>
            <p>
              At a minimum, your daily crane inspection checklist documentation
              should include:
            </p>
            <ul>
              <li>Date and time of inspection</li>
              <li>Crane identification (make, model, serial number, or site ID)</li>
              <li>Name and signature of the inspector</li>
              <li>Each inspection item checked with a pass/fail notation</li>
              <li>Description of any deficiencies found</li>
              <li>Corrective actions taken, including who authorized return to service</li>
            </ul>
            <p>
              During an{" "}
              <Link href="/blog/osha-crane-audit-preparation">
                OSHA crane audit
              </Link>
              , inspectors will ask to see these records. If you cannot produce
              them, you have a compliance gap — regardless of whether the
              inspections were actually performed.
            </p>

            <h2>Common Mistakes Operators Make</h2>
            <p>
              After reviewing hundreds of inspection programs, these are the
              errors that show up repeatedly:
            </p>

            <h3>Checking Boxes Without Actually Inspecting</h3>
            <p>
              The most common problem. An operator fills out the checklist at the
              start of the shift by marking every item as &quot;pass&quot;
              without leaving the cab. This defeats the purpose entirely and
              creates legal liability — a signed checklist with no actual
              inspection is worse than no checklist at all, because it creates a
              false record.
            </p>

            <h3>Skipping Items Based on Familiarity</h3>
            <p>
              Operators who use the same crane every day develop blind spots.
              They assume that because the wire rope was fine yesterday, it is
              fine today. Fatigue failures, environmental damage, and gradual
              wear do not announce themselves — they accumulate between shifts.
            </p>

            <h3>Not Reporting Deficiencies</h3>
            <p>
              Some operators notice issues but do not report them because they
              fear the crane will be taken out of service and delay the project.
              This is a cultural problem that must be addressed at the management
              level. Operators need to know that reporting a deficiency is always
              the right call and will never result in blame.
            </p>

            <h3>Using Generic Checklists</h3>
            <p>
              A daily crane inspection checklist for a 300-ton crawler crane is
              not the same as one for a 15-ton overhead bridge crane. Using a
              one-size-fits-all form means critical crane-specific items get
              missed. Your checklists should be tailored to each crane type and
              ideally to each specific unit.
            </p>

            <h3>Inconsistent Record Keeping</h3>
            <p>
              Paper checklists get lost, damaged by weather, or filed
              inconsistently. When an auditor asks for six months of daily
              inspection records for a specific crane, many companies cannot
              produce a complete set. For a detailed comparison of record-keeping
              methods, see{" "}
              <Link href="/blog/crane-inspection-software-vs-paper">
                crane inspection software vs paper logs
              </Link>
              .
            </p>

            <h2>How Digital Checklists Improve Compliance</h2>
            <p>
              Paper-based daily crane inspection checklists have been the
              industry standard for decades, but they introduce compliance risk
              at every step. Digital inspection tools solve the fundamental
              problems:
            </p>

            <h3>Enforced Completeness</h3>
            <p>
              A digital checklist can require every item to be addressed before
              the form can be submitted. Operators cannot skip fields or leave
              items blank. If a section requires a photo, the system will not
              accept the inspection without one.
            </p>

            <h3>Automatic Timestamps and Location Data</h3>
            <p>
              Digital records automatically capture when and where an inspection
              was completed. This eliminates questions about whether the
              inspection was actually performed on-site and at the time claimed.
            </p>

            <h3>Instant Deficiency Routing</h3>
            <p>
              When an operator flags a deficiency on a digital checklist, the
              system can immediately notify the maintenance team, site
              supervisor, and safety manager. No one has to physically hand off a
              paper form or make a phone call. The crane gets locked out of
              service in the system until the issue is resolved and documented.
            </p>

            <h3>Audit-Ready Records</h3>
            <p>
              Every inspection is stored, searchable, and exportable. When OSHA
              requests records for a specific crane over a specific time period,
              you can produce them in minutes rather than digging through filing
              cabinets. This is not a minor convenience — it is the difference
              between a clean audit and a citation.
            </p>

            <h3>Crane-Specific Templates</h3>
            <p>
              Digital platforms allow you to build inspection templates tailored
              to each crane type and configuration. A tower crane checklist
              includes climbing system checks. A mobile crane checklist includes
              outrigger and tire checks. The operator sees only the items
              relevant to their specific equipment.
            </p>

            <h2>Putting It All Together</h2>
            <p>
              A daily crane inspection checklist is not bureaucracy — it is the
              front line of crane safety. OSHA requires it under{" "}
              <Link href="/blog/29-cfr-1926-1412-explained">
                29 CFR 1926.1412
              </Link>{" "}
              because each-shift inspections catch the problems that develop
              between periodic and annual inspections. Wire rope degradation.
              Hydraulic leaks. Control malfunctions. Safety device failures.
              These are the conditions that lead to dropped loads, structural
              collapses, and fatalities.
            </p>
            <p>
              The checklist itself is straightforward. The challenge is
              execution: making sure every operator inspects every item on every
              shift and documents it in a way that holds up under scrutiny. That
              is where process and tooling make the difference.
            </p>
          </div>
        </article>

        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
              Replace Paper Checklists with CraneCheck
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              CraneCheck gives your operators digital daily inspection
              checklists built to OSHA standards — with enforced completeness,
              automatic timestamps, instant deficiency alerts, and audit-ready
              records. Set up your first crane in minutes.
            </p>
            <a
              href="https://app.cranecheck.com/sign-up"
              className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </section>
          <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="daily-crane-inspection-checklist" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
