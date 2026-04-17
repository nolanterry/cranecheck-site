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
  title: "Rough Terrain Crane Inspection Checklist: RT Crane Components, ASME B30.5 & Field Inspection Guide",
  description:
    "Complete rough terrain crane inspection checklist covering RT crane components, ASME B30.5 compliance, field inspection procedures, outrigger-free operation, boom configurations, and terrain assessment considerations for safe RT crane operations.",
  alternates: { canonical: "/blog/rough-terrain-crane-inspection-checklist" },
};

export default function RoughTerrainCraneInspectionChecklistPage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Rough Terrain Crane Inspection Checklist: RT Crane Components, ASME B30.5 & Field Inspection Guide",
  "description": "Complete rough terrain crane inspection checklist covering RT crane components, ASME B30.5 compliance, field inspection procedures, outrigger-free operation, boom configurations, and terrain assessment considerations for safe RT crane operations.",
  "datePublished": "2026-04-17",
  "dateModified": "2026-04-17",
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
    "@id": "https://cranecheck.co/blog/rough-terrain-crane-inspection-checklist"
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
      "name": "Rough Terrain Crane Inspection Checklist",
      "item": "https://cranecheck.co/blog/rough-terrain-crane-inspection-checklist"
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Checklists
              </span>
              <span className="text-xs text-gray-400">April 17, 2026</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Rough Terrain Crane Inspection Checklist: RT Crane Components, ASME B30.5 &amp; Field Inspection Guide
            </h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">
              A comprehensive field inspection guide for rough terrain cranes covering
              RT-specific components, ASME B30.5 compliance requirements, outrigger-free
              operation considerations, boom configurations, drivetrain inspection points,
              and terrain assessment procedures for safe RT crane operations.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>Introduction to Rough Terrain Cranes</h2>
            <p>
              Rough terrain (RT) cranes are purpose-built mobile cranes designed to operate
              on unimproved ground surfaces where conventional truck-mounted cranes cannot
              safely travel. Featuring a single cab that serves as both the operator&apos;s
              station and the driving position, RT cranes combine a hydraulic telescopic boom
              with a four-wheel-drive carrier into one compact, self-propelled unit. Their
              large pneumatic tires, high ground clearance, and crab-steering capability allow
              them to navigate mud, gravel, slopes, and congested job sites that would stop
              other crane types in their tracks.
            </p>
            <p>
              RT cranes are workhorses on construction projects, petrochemical facilities,
              bridge construction, and industrial sites where the work area is unpaved and
              access is limited. Capacities typically range from 15 tons to over 160 tons,
              with boom lengths reaching 170 feet or more on larger models. Because RT cranes
              spend their entire service life in harsh field conditions, they accumulate wear
              and damage faster than highway-driven all-terrain cranes. This makes thorough,
              RT-specific inspection procedures essential.
            </p>
            <p>
              This checklist is designed for qualified and competent persons performing
              pre-operation, frequent, and periodic inspections on rough terrain cranes
              in accordance with OSHA 29 CFR 1926.1412 and ASME B30.5. It covers the
              unique components and operating considerations that distinguish RT crane
              inspection from other mobile crane types.
            </p>

            <h2>RT Crane vs AT Crane: Key Differences for Inspectors</h2>
            <p>
              Understanding the differences between rough terrain and all-terrain cranes is
              critical for inspectors, because each type presents distinct inspection points.
              The table below summarizes the key differences that affect how you approach an
              RT crane inspection compared to an all-terrain (AT) crane inspection.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Rough Terrain (RT) Crane</th>
                    <th>All-Terrain (AT) Crane</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Cab configuration</strong></td>
                    <td>Single cab for driving and crane operation</td>
                    <td>Separate carrier cab and superstructure cab</td>
                  </tr>
                  <tr>
                    <td><strong>Drive system</strong></td>
                    <td>4WD with torque converter or hydrostatic drive</td>
                    <td>Multi-axle highway carrier with separate engine</td>
                  </tr>
                  <tr>
                    <td><strong>Engine count</strong></td>
                    <td>Single engine powers both travel and crane functions</td>
                    <td>Typically two engines (carrier and superstructure)</td>
                  </tr>
                  <tr>
                    <td><strong>Road travel</strong></td>
                    <td>Not highway-legal; must be transported on lowboy trailer</td>
                    <td>Highway-legal; self-propelled to job sites</td>
                  </tr>
                  <tr>
                    <td><strong>Max travel speed</strong></td>
                    <td>Typically 20&ndash;25 mph</td>
                    <td>Up to 55&ndash;60 mph on highway</td>
                  </tr>
                  <tr>
                    <td><strong>Steering modes</strong></td>
                    <td>Front, rear, all-wheel, and crab steering</td>
                    <td>All-wheel steering with multiple axle configurations</td>
                  </tr>
                  <tr>
                    <td><strong>Outrigger dependency</strong></td>
                    <td>Can operate on rubber (tires) at reduced capacity</td>
                    <td>Typically requires outriggers for all lifting operations</td>
                  </tr>
                  <tr>
                    <td><strong>Suspension</strong></td>
                    <td>Rigid axles with no suspension or lockable suspension</td>
                    <td>Active suspension for highway travel, lockout for lifting</td>
                  </tr>
                  <tr>
                    <td><strong>Typical capacity range</strong></td>
                    <td>15&ndash;165 tons</td>
                    <td>30&ndash;1,200 tons</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              For inspectors, the single-engine, single-cab design of RT cranes means fewer
              systems to inspect overall, but those systems bear a heavier workload. The
              drivetrain components, in particular, require careful attention because the same
              engine and hydraulic system that powers crane functions also propels the machine
              through demanding terrain conditions.
            </p>

            <h2>Pre-Operation Inspection Checklist for RT Cranes</h2>
            <p>
              The following checklist covers all items that must be inspected before each
              shift or use of a rough terrain crane. OSHA 29 CFR 1926.1412(d) requires a
              competent person to perform this inspection and document the results. Work
              through each section systematically, beginning with a walk-around visual
              inspection before starting the engine.
            </p>

            <h3>Walk-Around Visual Inspection</h3>
            <ol>
              <li>
                <strong>General condition:</strong> Walk completely around the crane looking
                for visible damage, fluid leaks, loose hardware, or foreign objects that could
                interfere with operation.
              </li>
              <li>
                <strong>Structural members:</strong> Inspect the main frame, turntable mounting,
                and boom rest for cracks, deformation, or corrosion. Pay special attention to
                weld seams and high-stress connection points.
              </li>
              <li>
                <strong>Counterweight:</strong> Verify counterweight is properly installed and
                secured with all mounting bolts torqued. Check for cracked or damaged
                counterweight blocks.
              </li>
              <li>
                <strong>Decals and load charts:</strong> Confirm all load capacity charts,
                warning decals, and safety placards are legible and in place. Missing or
                illegible load charts are an OSHA violation.
              </li>
              <li>
                <strong>Fluid levels:</strong> Check engine oil, hydraulic fluid, coolant,
                transmission fluid, and fuel levels. Top off as needed before starting the engine.
              </li>
              <li>
                <strong>Ground conditions beneath crane:</strong> Inspect the ground surface
                where the crane is positioned for sinkholes, soft spots, underground utilities,
                or slope changes that may have occurred since last operation.
              </li>
            </ol>

            <h3>Cab and Operator Station</h3>
            <ol>
              <li>
                <strong>Cab structure and glass:</strong> Inspect cab structure for damage.
                Check all windows and mirrors for cracks or obstructed visibility. Verify ROPS/FOPS
                certification labels are present.
              </li>
              <li>
                <strong>Seat and restraint:</strong> Verify seat is secure, seat belt functions
                properly, and seat adjustment mechanisms work correctly.
              </li>
              <li>
                <strong>Gauges and indicators:</strong> Start engine and verify all gauges read
                within normal operating ranges. Check warning lights for proper startup
                illumination and automatic shutoff.
              </li>
              <li>
                <strong>Control levers and pedals:</strong> Test all control levers for smooth
                operation and proper return to neutral. Check brake and throttle pedals for
                correct response.
              </li>
              <li>
                <strong>Climate control:</strong> Verify heater, defroster, and air conditioning
                operate. A fogged or iced cab windshield creates serious visibility hazards.
              </li>
            </ol>

            <h3>Safety Systems Check</h3>
            <ol>
              <li>
                <strong>Load moment indicator (LMI):</strong> Power on the LMI system and verify
                display, boom angle, boom length, and capacity readings. Test warning alarms at
                90% and 100% capacity thresholds.
              </li>
              <li>
                <strong>Anti-two-block (A2B) device:</strong> Test the anti-two-block system by
                raising the hook block toward the boom tip. The system must stop the hoist before
                contact occurs.
              </li>
              <li>
                <strong>Swing brake and lock:</strong> Test the swing brake for holding ability
                and the swing lock for positive engagement. The superstructure must not drift when
                locked.
              </li>
              <li>
                <strong>Emergency stop:</strong> Test all emergency stop buttons. Each must
                immediately stop all crane functions when activated.
              </li>
              <li>
                <strong>Backup alarm:</strong> Verify the backup alarm sounds when the crane is
                placed in reverse travel. The alarm must be audible above ambient job site noise.
              </li>
              <li>
                <strong>Horn:</strong> Test the horn for proper operation and adequate volume.
              </li>
            </ol>

            <h2>4WD Drivetrain &amp; Powerplant Inspection Points</h2>
            <p>
              The drivetrain on an RT crane is fundamentally different from the carrier systems
              on all-terrain or truck-mounted cranes. RT cranes use a single diesel engine
              coupled to a torque converter or hydrostatic transmission that powers both the
              crane&apos;s hydraulic functions and the four-wheel-drive travel system. This
              dual-purpose arrangement places unique demands on every drivetrain component.
            </p>

            <h3>Engine and Power System</h3>
            <ul>
              <li>
                <strong>Engine performance:</strong> Monitor engine startup behavior, idle
                quality, and response to throttle input. Rough idle, excessive smoke, or slow
                throttle response may indicate fuel system, injection, or turbocharger problems.
              </li>
              <li>
                <strong>Exhaust system:</strong> Inspect the exhaust manifold, turbocharger
                (if equipped), DPF/DOC system, and exhaust piping for leaks, cracks, or
                damage. Exhaust leaks near hydraulic lines create fire hazards.
              </li>
              <li>
                <strong>Engine mounts:</strong> Check engine mounts for deterioration or
                separation. Excessive engine vibration indicates failed mounts and can damage
                connected hydraulic lines and electrical harnesses.
              </li>
              <li>
                <strong>Air intake system:</strong> Inspect the air cleaner housing, filter
                element, and intake ducting for damage or contamination. RT cranes operating in
                dusty environments require more frequent air filter service.
              </li>
            </ul>

            <h3>Transmission and Drive Axles</h3>
            <ul>
              <li>
                <strong>Transmission operation:</strong> Shift through all gear ranges and
                verify smooth engagement in both forward and reverse. Listen for grinding,
                slipping, or delayed engagement that indicates internal wear.
              </li>
              <li>
                <strong>Torque converter:</strong> If equipped with a torque converter, check
                for overheating during sustained travel. Verify the torque converter stall speed
                is within manufacturer specifications.
              </li>
              <li>
                <strong>Drive axles and differentials:</strong> Inspect axle housings for leaks
                and damage. Check differential fluid levels through the fill plugs. Listen for
                unusual noises during travel that indicate bearing or gear wear.
              </li>
              <li>
                <strong>Transfer case:</strong> Verify the 4WD transfer case engages and
                disengages properly. Check for fluid leaks at seals and gaskets.
              </li>
              <li>
                <strong>Drive shafts and U-joints:</strong> Inspect drive shafts for dents,
                bends, or missing balance weights. Check universal joints for excessive play
                by hand &mdash; worn U-joints vibrate under load and can fail catastrophically.
              </li>
            </ul>

            <h3>Tires, Wheels, and Steering</h3>
            <ul>
              <li>
                <strong>Tire condition:</strong> Inspect all four tires for cuts, bulges,
                embedded objects, and sidewall damage. RT crane tires are subjected to
                puncture hazards from construction debris, rebar, and rocks.
              </li>
              <li>
                <strong>Tire pressure:</strong> Verify tire inflation pressure matches the
                manufacturer&apos;s specification for the planned operation. Tire pressure directly
                affects on-rubber lift capacity &mdash; underinflated tires reduce rated capacity.
              </li>
              <li>
                <strong>Wheel lug nuts:</strong> Confirm all wheel lug nuts are present and
                properly torqued. Check for cracked or elongated lug holes in the wheel disc.
              </li>
              <li>
                <strong>Steering system:</strong> Test all steering modes &mdash; front steer,
                rear steer, all-wheel steer, and crab steer. Each mode must respond correctly
                and without excessive play or drift.
              </li>
              <li>
                <strong>Steering cylinders:</strong> Inspect steering cylinders for leaks, rod
                damage, and secure mounting. Steering cylinder failure can cause loss of
                directional control.
              </li>
            </ul>

            <h2>Boom Configuration Inspection</h2>
            <p>
              Most rough terrain cranes are equipped with a hydraulic telescopic boom, though
              some older or specialty models may use lattice boom configurations. The boom is
              the most critical structural component on the crane, and its condition directly
              determines safe lifting capacity.
            </p>

            <h3>Telescopic Boom Inspection</h3>
            <ul>
              <li>
                <strong>Boom sections:</strong> Visually inspect each boom section for dents,
                cracks, corrosion, or deformation. Even minor dents can reduce the structural
                capacity of thin-walled telescopic boom sections.
              </li>
              <li>
                <strong>Boom wear pads:</strong> Check wear pads (slides) on all boom sections
                for excessive wear, damage, or loosening. Worn pads allow boom sections to shift
                laterally, reducing structural integrity and causing erratic boom movement.
              </li>
              <li>
                <strong>Boom extend/retract cylinders:</strong> Inspect telescoping cylinders
                for leaks, rod scoring, and proper operation. Extend and retract the boom fully
                and listen for unusual noises or hesitation.
              </li>
              <li>
                <strong>Boom pins and keepers:</strong> Verify all boom section pins are in
                place and properly secured with keepers or cotter pins. Missing boom pins have
                caused catastrophic boom collapses.
              </li>
              <li>
                <strong>Boom lift cylinder:</strong> Inspect the boom hoist cylinder for leaks,
                rod condition, and secure pin connections at both ends. Test for cylinder drift
                by raising the boom and monitoring for unintended lowering.
              </li>
              <li>
                <strong>Boom tip and sheaves:</strong> Inspect the boom head sheaves for rope
                groove wear, bearing condition, and proper rotation. Check the boom tip
                structure for cracks or deformation.
              </li>
            </ul>

            <h3>Lattice Boom Configurations (Where Applicable)</h3>
            <ul>
              <li>
                <strong>Chord members:</strong> Inspect main chords for straightness, cracks,
                and corrosion. Any bent chord member requires engineering evaluation before
                continued use.
              </li>
              <li>
                <strong>Lacings and bracing:</strong> Check all diagonal lacings and horizontal
                bracing for damage, loose connections, or missing fasteners.
              </li>
              <li>
                <strong>Splice connections:</strong> Inspect boom section splice pins and
                connections for wear, elongation, and proper engagement. Verify keeper pins
                are in place.
              </li>
              <li>
                <strong>Pendant lines:</strong> Inspect boom pendant lines or rods for damage,
                deformation, or connection wear. Pendant failure results in uncontrolled boom
                lowering.
              </li>
            </ul>

            <p>
              For a deeper dive into boom inspection techniques, see our guide on{" "}
              <Link href="/blog/crane-boom-inspection-guide">
                crane boom inspection
              </Link>.
            </p>

            <h2>Outrigger-Free Operation: Stability Without Outriggers</h2>
            <p>
              One of the defining capabilities of rough terrain cranes is their ability to
              perform lifts while supported entirely on their tires &mdash; commonly called
              &quot;pick and carry&quot; or &quot;on-rubber&quot; operation. This capability
              is essential for job sites where outrigger deployment is impractical due to
              space constraints, frequent repositioning, or ground conditions. However,
              on-rubber operation introduces significant stability considerations that
              inspectors must understand and verify.
            </p>

            <h3>On-Rubber Capacity Considerations</h3>
            <ul>
              <li>
                <strong>Reduced capacity:</strong> On-rubber rated capacities are typically
                40&ndash;60% of the crane&apos;s fully extended outrigger capacity at equivalent
                radii. The load chart must clearly define on-rubber ratings, and the LMI must
                be configured for the correct operating mode.
              </li>
              <li>
                <strong>Tire pressure requirements:</strong> On-rubber load charts assume tires
                are inflated to the manufacturer&apos;s specified pressure. Low tire pressure
                voids the published on-rubber capacity ratings and creates a tipping hazard.
              </li>
              <li>
                <strong>Travel with load:</strong> If the crane will travel with a suspended
                load, verify the load chart provides travel ratings. Travel ratings are
                typically lower than stationary on-rubber ratings and may restrict boom length,
                swing position, and travel speed.
              </li>
              <li>
                <strong>Suspension lockout:</strong> Many RT cranes require the suspension to be
                locked out during on-rubber lifting to prevent the carrier from rocking. Verify
                the suspension lockout engages properly and holds.
              </li>
            </ul>

            <h3>Chart Derating for On-Rubber Work</h3>
            <p>
              When working on rubber without outriggers, the crane&apos;s load chart must be
              consulted for the specific on-rubber section. Key derating factors include:
            </p>
            <ul>
              <li>
                <strong>Boom orientation:</strong> On-rubber capacities vary significantly
                depending on whether the load is over the side, over the front, or over the
                rear. Over-the-side lifts have the lowest rating due to reduced lateral stability.
              </li>
              <li>
                <strong>Ground slope:</strong> Most on-rubber ratings assume level ground (1%
                grade or less). Any slope exceeding this requires additional derating per the
                manufacturer&apos;s guidelines or engineering analysis.
              </li>
              <li>
                <strong>Wind loading:</strong> On-rubber operations are more sensitive to wind
                because the crane has less tipping resistance. Consider reducing working capacity
                in windy conditions even if the load chart does not explicitly require it.
              </li>
            </ul>

            <h3>Outrigger Inspection (When Deployed)</h3>
            <ul>
              <li>
                <strong>Outrigger beams:</strong> Extend all outrigger beams fully and inspect
                for cracks, deformation, or corrosion. Check beam slide surfaces for excessive
                wear or galling.
              </li>
              <li>
                <strong>Outrigger cylinders:</strong> Inspect hydraulic cylinders for leaks,
                rod scoring, and secure mounting. Deploy each outrigger individually and check
                for drift under load.
              </li>
              <li>
                <strong>Outrigger pads and floats:</strong> Verify outrigger pads are in
                acceptable condition and appropriately sized for the ground bearing capacity.
                Inspect float swivels for wear and proper articulation.
              </li>
              <li>
                <strong>Outrigger indicator:</strong> Confirm the outrigger position indicator
                or sensor system correctly reports the outrigger configuration to the LMI. An
                incorrect outrigger reading will load the wrong capacity chart.
              </li>
            </ul>

            <p>
              For detailed outrigger inspection procedures, see our dedicated guide on{" "}
              <Link href="/blog/crane-outrigger-inspection-setup">
                crane outrigger inspection and setup
              </Link>.
            </p>

            <h2>Terrain Assessment &amp; Ground Conditions</h2>
            <p>
              Ground condition assessment is arguably more critical for RT cranes than for any
              other crane type, because RT cranes frequently operate on unimproved surfaces
              without the benefit of prepared foundations. A thorough terrain assessment should
              be performed before every crane setup, and conditions should be re-evaluated
              after rain, thaw, or any event that could alter ground bearing capacity.
            </p>

            <h3>Ground Bearing Capacity Evaluation</h3>
            <ul>
              <li>
                <strong>Soil type identification:</strong> Identify the soil type at the crane&apos;s
                operating location. Clay, sand, gravel, and fill materials all have different
                bearing capacities that affect outrigger and tire loading limits.
              </li>
              <li>
                <strong>Ground compaction:</strong> Assess whether the ground is compacted or
                loose. Recently disturbed, backfilled, or rain-saturated soil can have drastically
                reduced bearing capacity compared to undisturbed soil.
              </li>
              <li>
                <strong>Underground hazards:</strong> Verify that no underground utilities,
                vaults, tunnels, or excavations exist beneath the crane&apos;s footprint. Ground
                collapse over underground voids has caused fatal crane overturn incidents.
              </li>
              <li>
                <strong>Surface drainage:</strong> Evaluate how water drains across and beneath
                the crane&apos;s operating area. Standing water, poor drainage, and erosion channels
                can weaken ground support during prolonged operations.
              </li>
            </ul>

            <h3>Slope and Grade Assessment</h3>
            <ul>
              <li>
                <strong>Measure grade with a clinometer or level:</strong> Do not estimate
                slope by eye. Even a 2&ndash;3% grade that appears level can significantly
                reduce crane stability, especially during on-rubber operations.
              </li>
              <li>
                <strong>Maximum grade for operation:</strong> Consult the manufacturer&apos;s
                operating manual for the maximum allowable grade for both stationary lifting
                and travel with load. Most RT cranes are limited to 1&ndash;5% grade depending
                on the operation.
              </li>
              <li>
                <strong>Slope in relation to swing:</strong> If lifting on any grade, consider
                how the load radius changes as the crane swings uphill versus downhill. The
                effective radius increases when swinging to the downhill side, reducing available
                capacity.
              </li>
            </ul>

            <p>
              For additional guidance on ground condition evaluation and cribbing requirements,
              see our article on{" "}
              <Link href="/blog/crane-ground-conditions-setup">
                crane ground conditions and setup
              </Link>.
            </p>

            <h2>ASME B30.5 Compliance Requirements for RT Cranes</h2>
            <p>
              ASME B30.5 &mdash; &quot;Mobile and Locomotive Cranes&quot; &mdash; is the
              primary consensus standard governing inspection, testing, and maintenance of
              rough terrain cranes. While OSHA establishes the legal requirements for crane
              inspection, ASME B30.5 provides the detailed technical criteria that define
              what constitutes a thorough inspection and when components must be repaired
              or replaced.
            </p>

            <h3>Inspection Frequency Requirements</h3>
            <ul>
              <li>
                <strong>Pre-use inspection (before each shift):</strong> A visual inspection
                by the operator or competent person covering all items that could create a
                hazard during the upcoming work period. This is the daily checklist covered
                earlier in this article.
              </li>
              <li>
                <strong>Frequent inspection (daily to monthly):</strong> Covers items subjected
                to wear, deterioration, or malfunction during regular use. Includes wire rope,
                hooks, hoist chains, sheaves, and all safety devices.
              </li>
              <li>
                <strong>Periodic inspection (1&ndash;12 month intervals):</strong> A
                comprehensive inspection by a qualified person covering structural members,
                bolted connections, hydraulic and pneumatic systems, electrical systems, and
                all load-bearing components. The interval depends on crane usage severity,
                environmental conditions, and manufacturer recommendations.
              </li>
              <li>
                <strong>Annual/comprehensive inspection:</strong> OSHA 29 CFR 1926.1412(f)
                requires a comprehensive inspection by a qualified person at least every
                12 months. This inspection must include all items in the frequent and periodic
                inspection lists, plus additional items specified in the manufacturer&apos;s
                recommendations.
              </li>
            </ul>

            <h3>Wire Rope Replacement Criteria (ASME B30.5)</h3>
            <ul>
              <li>
                Six or more randomly distributed broken wires in one rope lay
              </li>
              <li>
                Three or more broken wires in one strand in one rope lay
              </li>
              <li>
                One broken wire at a dead-end connection (socket, wedge, or clip)
              </li>
              <li>
                Diameter reduction exceeding 7% of nominal diameter from wear
              </li>
              <li>
                Evidence of core failure (basket weave appearance, increased diameter)
              </li>
              <li>
                Heat damage from any source, including arc strikes
              </li>
              <li>
                Kinking, crushing, bird-caging, or other deformation
              </li>
            </ul>

            <p>
              For a complete guide to wire rope inspection and replacement criteria, see our{" "}
              <Link href="/blog/crane-wire-rope-inspection-guide">
                wire rope inspection guide
              </Link>.
            </p>

            <h2>Common RT Crane Deficiencies Found During Inspection</h2>
            <p>
              Based on field inspection data and industry reports, the following table lists
              the most common deficiencies found during rough terrain crane inspections,
              their typical severity classification, and the required corrective action.
            </p>

            <div className="overflow-x-auto">
              <table>
                <thead>
                  <tr>
                    <th>Deficiency</th>
                    <th>Severity</th>
                    <th>Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Hydraulic fluid leaks at boom cylinders</td>
                    <td><strong>Moderate to Severe</strong></td>
                    <td>Repair before operation if leak affects function; minor seepage may be monitored per manufacturer guidance</td>
                  </tr>
                  <tr>
                    <td>Worn or missing boom wear pads</td>
                    <td><strong>Severe</strong></td>
                    <td>Remove from service; replace wear pads before returning to operation</td>
                  </tr>
                  <tr>
                    <td>LMI system inaccuracy or malfunction</td>
                    <td><strong>Critical</strong></td>
                    <td>Immediately remove from service; recalibrate or repair by qualified technician</td>
                  </tr>
                  <tr>
                    <td>Underinflated tires during on-rubber operation</td>
                    <td><strong>Severe</strong></td>
                    <td>Inflate to manufacturer specification before any lifting; re-verify load chart ratings</td>
                  </tr>
                  <tr>
                    <td>Missing or illegible load chart</td>
                    <td><strong>Critical</strong></td>
                    <td>Remove from service until correct load chart is installed (OSHA violation)</td>
                  </tr>
                  <tr>
                    <td>Wire rope broken wires exceeding ASME limits</td>
                    <td><strong>Critical</strong></td>
                    <td>Remove from service; replace wire rope before returning to operation</td>
                  </tr>
                  <tr>
                    <td>Outrigger cylinder drift under load</td>
                    <td><strong>Severe</strong></td>
                    <td>Repair cylinder seals or holding valve; test under load before returning to service</td>
                  </tr>
                  <tr>
                    <td>Steering system excessive play or drift</td>
                    <td><strong>Moderate to Severe</strong></td>
                    <td>Inspect steering cylinder, linkage, and valve; repair before travel operations</td>
                  </tr>
                  <tr>
                    <td>Anti-two-block device non-functional</td>
                    <td><strong>Critical</strong></td>
                    <td>Immediately remove from service; repair A2B system before any lifting</td>
                  </tr>
                  <tr>
                    <td>Cracked or corroded structural members</td>
                    <td><strong>Critical</strong></td>
                    <td>Remove from service; engineering evaluation required before repair or return to service</td>
                  </tr>
                  <tr>
                    <td>4WD system not engaging properly</td>
                    <td><strong>Moderate</strong></td>
                    <td>Repair before operating in rough terrain conditions; may operate on paved surfaces at reduced capability</td>
                  </tr>
                  <tr>
                    <td>Swing brake not holding</td>
                    <td><strong>Severe</strong></td>
                    <td>Remove from service; adjust or repair swing brake before lifting operations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Any deficiency classified as &quot;Critical&quot; requires the crane to be
              immediately removed from service and tagged out until repairs are completed
              by qualified personnel. &quot;Severe&quot; deficiencies require repair before
              the crane can be used for the affected operation. &quot;Moderate&quot;
              deficiencies should be scheduled for repair promptly and may allow limited
              continued operation depending on the specific condition and manufacturer
              guidance.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                RT cranes operate in the harshest field conditions of any mobile crane type,
                making thorough pre-operation inspection essential to prevent equipment failure
                and accidents.
              </li>
              <li>
                The single-engine, 4WD drivetrain unique to RT cranes requires specific
                inspection attention to transmission, drive axles, transfer case, and steering
                systems that other crane types do not share.
              </li>
              <li>
                On-rubber (outrigger-free) operation significantly reduces lift capacity and
                introduces stability considerations that must be verified through tire pressure
                checks, LMI mode configuration, and terrain assessment.
              </li>
              <li>
                Terrain and ground condition assessment is critical for RT crane safety &mdash;
                measure slope with instruments, verify ground bearing capacity, and check for
                underground hazards before every setup.
              </li>
              <li>
                ASME B30.5 provides the technical criteria for inspection frequency, wire rope
                replacement, and component condition assessment that goes beyond minimum OSHA
                requirements.
              </li>
              <li>
                Document every inspection thoroughly with specific findings rather than
                generic checkmarks. Digital inspection tools improve documentation quality,
                consistency, and audit readiness.
              </li>
            </ul>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-3">Streamline Your RT Crane Inspections</h3>
              <p className="text-white/90 mb-6">CraneCheck provides RT crane-specific inspection templates with built-in ASME B30.5 compliance tracking. Capture terrain assessments, outrigger configurations, and boom setup data digitally &mdash; accessible from any job site.</p>
              <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
            </div>

          </div>
        </article>
          <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="rough-terrain-crane-inspection-checklist" /></div>
          <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
