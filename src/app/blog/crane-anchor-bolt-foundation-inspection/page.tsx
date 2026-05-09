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
  title: "Fixed Crane Anchor Bolt & Foundation Inspection Requirements",
  description: "Comprehensive inspection guide for fixed crane anchor bolts and foundations. Covers bolt condition, torque verification, concrete cracking patterns, embedded plates, drainage, and when a PE assessment is required under ASME B30.3, B30.4, ACI 318, and OSHA standards.",
  alternates: { canonical: "/blog/crane-anchor-bolt-foundation-inspection" },
};

export default function CraneAnchorBoltFoundationInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Fixed Crane Anchor Bolt & Foundation Inspection Requirements",
    "description": "Comprehensive inspection guide for fixed crane anchor bolts and foundations. Covers bolt condition, torque verification, concrete cracking patterns, embedded plates, drainage, and when a PE assessment is required under ASME B30.3, B30.4, ACI 318, and OSHA standards.",
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
      "@id": "https://cranecheck.co/blog/crane-anchor-bolt-foundation-inspection"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Anchor Bolt & Foundation Inspection", "item": "https://cranecheck.co/blog/crane-anchor-bolt-foundation-inspection" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Inspection</span>
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Fixed Crane Anchor Bolt &amp; Foundation Inspection Requirements</h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
            <p className="text-lg text-gray-300 leading-relaxed">The foundation is the most overlooked component in any fixed crane inspection program&mdash;and the most consequential. A missed crack in a grout pad or a single under-torqued anchor bolt can cascade into a catastrophic overturn. This guide walks through every element of a thorough anchor bolt and foundation inspection for tower cranes, overhead cranes, and pedestal cranes, referencing ASME B30.3, B30.4, ACI 318, and OSHA 1926.1402.</p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>Why Foundation and Anchor Bolt Failures Are Catastrophic</h2>

            <p>
              In March 2022, a 200-foot tower crane under construction in Seattle began exhibiting a
              visible lean at the base section. Investigation revealed that three of eight anchor bolts
              had never been properly torqued after erection&mdash;mill scale on the nut bearing faces
              had allowed the bolts to read torque on the wrench without actually developing the required
              clamp force. By the time the lean was noticed, two of those bolts had yielded in fatigue.
              The crane was evacuated, decommissioned, and the project lost 11 weeks while the foundation
              was remediated. No one was injured. They got lucky.
            </p>

            <p>
              Foundation and anchor bolt failures are rare, which is precisely why they are dangerous:
              inspection programs rarely focus on them with the same rigor applied to wire rope, hooks,
              or load moment indicators. Yet a foundation failure eliminates the entire safety margin of
              the machine instantly. Unlike a worn sheave or a frayed wire rope strand that degrades
              gradually, a concrete breakout failure or a bolt fracture is immediate and total.
            </p>

            <p>
              The consequences differ by crane type. For <strong>tower cranes</strong>, foundation failure
              typically means complete collapse of the tower&mdash;a falling mass of steel that can kill
              workers hundreds of feet away. For <strong>overhead (bridge) cranes</strong> governed by
              ASME B30.2 and OSHA 1910.179, runway girder anchor failures can drop the entire runway
              structure into the work area below. For <strong>pedestal cranes</strong> covered under
              ASME B30.3, a corroded or cracked pedestal base ring can fail suddenly under an asymmetric
              load, swinging the entire upper works off the pedestal. In every case, the initiating defect
              was inspectable&mdash;if someone had looked.
            </p>

            <h2>Types of Crane Foundations</h2>

            <p>
              Before describing what to inspect, you need to know what you&apos;re looking at. Fixed crane
              foundations are not all concrete blocks in the ground. The table below summarizes the five
              principal foundation types encountered in crane inspection work, along with the unique
              failure modes inspectors should target for each.
            </p>

            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="border border-gray-300 px-4 py-2 text-left">Foundation Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Application</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Primary Inspection Concerns</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Governing Standard</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Spread Footing</td>
                    <td className="border border-gray-300 px-4 py-2">Tower cranes on competent soil; pedestal cranes</td>
                    <td className="border border-gray-300 px-4 py-2">Corner cracking, differential settlement, anchor bolt elongation, grout pad condition</td>
                    <td className="border border-gray-300 px-4 py-2">ASME B30.3, ACI 318, OSHA 1926.1402</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Mat Foundation</td>
                    <td className="border border-gray-300 px-4 py-2">Tower cranes on marginal soils; large overhead crane runway systems</td>
                    <td className="border border-gray-300 px-4 py-2">Uniform vs. differential settlement, slab cracking pattern, drainage around perimeter</td>
                    <td className="border border-gray-300 px-4 py-2">ASME B30.3, ACI 318, OSHA 1926.1402</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Pier / Caisson</td>
                    <td className="border border-gray-300 px-4 py-2">Tower cranes on deep soft soils or near excavations; marine pedestal cranes</td>
                    <td className="border border-gray-300 px-4 py-2">Cap cracking, pile cap uplift, erosion around pier shafts, anchor bolt zone integrity</td>
                    <td className="border border-gray-300 px-4 py-2">ASME B30.4, ACI 318, OSHA 1926.1402</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Ballasted Base</td>
                    <td className="border border-gray-300 px-4 py-2">Self-erecting tower cranes; temporary fixed cranes where ground anchoring is not feasible</td>
                    <td className="border border-gray-300 px-4 py-2">Ballast weight verification, ballast block cracking, surface bearing condition, moisture infiltration under base frame</td>
                    <td className="border border-gray-300 px-4 py-2">ASME B30.3, manufacturer foundation drawings</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Rail-Mounted</td>
                    <td className="border border-gray-300 px-4 py-2">Traveling tower cranes; overhead/bridge cranes; gantry cranes</td>
                    <td className="border border-gray-300 px-4 py-2">Rail alignment and gauge, rail clip torque, rail base plate anchor bolts, subgrade erosion, end stop integrity</td>
                    <td className="border border-gray-300 px-4 py-2">ASME B30.2, B30.3, OSHA 1910.179, 1926.1402</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Regardless of foundation type, every fixed crane installation must have PE-stamped foundation
              design drawings on site. If those drawings do not exist or cannot be produced, stop the
              inspection and escalate&mdash;operating without them is a direct violation of OSHA 1926.1402
              and removes the baseline you need to assess whether what you&apos;re looking at is acceptable.
            </p>

            <h2>Anchor Bolt Inspection Criteria</h2>

            <p>
              Anchor bolts are the single most critical interface in the entire crane system for fixed
              crane types. ASME B30.3-2.1.3 (fixed cranes) and ASME B30.4-2.1 (portal and pedestal cranes)
              both require that anchor bolt conditions be verified during periodic inspections. OSHA
              1926.1402 mandates that ground conditions&mdash;which include foundation integrity&mdash;be
              assessed by a qualified person prior to erection and at regular intervals during crane use.
              Here is what to examine on every anchor bolt in the pattern.
            </p>

            <h3>Bolt Condition and Corrosion</h3>

            <p>
              Anchor bolts on fixed cranes that have been in service for more than two or three seasons
              will show some surface oxidation. The question is whether the corrosion is cosmetic or
              structural. Use the following criteria:
            </p>

            <ul>
              <li><strong>Acceptable &ndash; surface rust:</strong> Light, uniform reddish-brown oxidation on the exposed shank and threads that wipes off with a rag or wire brush. No measurable diameter loss. Bolt threads still fully defined.</li>
              <li><strong>Monitor &ndash; moderate corrosion:</strong> Pitting to a depth of 1&frasl;32 inch or less. Threads still functional but showing rounding. Nut can be run by hand with light resistance. Flag for follow-up at next inspection interval.</li>
              <li><strong>Remove from service &ndash; deep pitting or section loss:</strong> Pit depth exceeding 1&frasl;32 inch, visible section loss in the shank, or thread profile eroded to the point a nut cannot be engaged by hand. Per ASME B30.3, any bolt with 10% or more cross-sectional area loss must be replaced before the crane is returned to service.</li>
              <li><strong>Remove from service &ndash; crevice corrosion at grout interface:</strong> The zone where the bolt exits the grout pad or enters the sleeve is the most vulnerable location. Corrosion accelerates here due to moisture wicking and differential aeration. If you cannot see 2 inches of clean, unaffected shank above the grout surface, assume the worst and plan for extraction and replacement.</li>
            </ul>

            <p>
              Galvanized or epoxy-coated bolts require the same scrutiny. Coating damage that exposes base metal must be addressed immediately with zinc-rich primer or equivalent; do not allow damaged coatings to &ldquo;weather in&rdquo; on anchor bolts carrying cyclically loaded crane forces.
            </p>

            <h3>Bolt Elongation</h3>

            <p>
              Overloaded or fatigued anchor bolts elongate permanently. This is often impossible to detect
              visually, but there are field indicators. If the nut is bearing on the base plate and there
              is visible thread showing above the nut that exceeds the manufacturer&apos;s specified
              projection by more than &frac12; inch, the bolt may have elongated. Similarly, if the
              crane&apos;s base section can be rocked or shifted laterally by hand, one or more bolts have
              lost preload, which is consistent with elongation or yielding.
            </p>

            <p>
              When elongation is suspected, the engineer of record must be notified. Dimensional measurement
              of bolt projection above the nut&mdash;compared to the as-erected survey record&mdash;is the
              most reliable field method. Bolt replacement is required for any bolt with confirmed permanent
              elongation; re-torquing an elongated bolt does not restore its structural capacity.
            </p>

            <h3>Torque Verification</h3>

            <p>
              Torque verification is the most commonly skipped step in periodic crane foundation inspections,
              and the most consequential when it is skipped. The crane manufacturer specifies re-torque
              intervals in the maintenance manual&mdash;typically every 3 to 6 months, and after any event
              that applies unusual loads to the foundation (storm, emergency stop sequence, seismic event,
              or adjacent blasting). OSHA 1926.1412 requires that monthly inspections of tower cranes
              include verification that foundation connections are within manufacturer&apos;s specifications.
            </p>

            <p>
              The correct procedure: use a calibrated hydraulic or electronic torque wrench (calibration
              traceable to NIST, current within 12 months). Apply torque in the direction of tightening.
              If the nut breaks loose and rotates before reaching the specified value, the bolt was loose&mdash;
              document the as-found condition and torque to specification. If the nut does not move at the
              specified value, the bolt is adequately preloaded&mdash;document as conforming. Never use
              an impact wrench for torque verification. Work in a star pattern: do not torque adjacent
              bolts sequentially, as doing so redistributes load and can mask loose bolts.
            </p>

            <p>
              Typical re-torque specifications for common anchor bolt sizes (ASTM F1554 Grade 55):
            </p>

            <ul>
              <li>1.5-inch diameter: 750&ndash;900 ft-lbs</li>
              <li>2-inch diameter: 1,800&ndash;2,200 ft-lbs</li>
              <li>2.5-inch diameter: 3,200&ndash;3,800 ft-lbs</li>
              <li>3-inch diameter: 5,500&ndash;6,500 ft-lbs</li>
            </ul>

            <p>
              Always use the manufacturer&apos;s specified value as the governing requirement. The numbers
              above are general references only. Document the wrench serial number, calibration date, ambient
              temperature, and as-found vs. as-left torque for every bolt at every inspection.
            </p>

            <h3>Nut and Washer Condition</h3>

            <p>
              Inspect each nut for: thread damage or cross-threading (cannot be engaged smoothly by hand);
              cracks at the flats (indicative of overtorquing or hydrogen embrittlement in high-strength
              grades); missing or deformed hardened washers (a missing washer allows the nut to bear
              directly on a soft base plate, concentrating load and potentially allowing the nut to pull
              through under tension); and corrosion between the nut and base plate bearing surface that
              would compromise the friction required to maintain preload.
            </p>

            <p>
              Double-nut configurations&mdash;where a jam nut is added above the primary nut&mdash;are
              common on tower crane anchor bolts. Verify that the jam nut is snugged against the primary
              nut and that both are at the correct projection height per the erection drawings. A jam nut
              that has backed off indicates that the primary nut is not properly locked.
            </p>

            <h2>Concrete Foundation Inspection</h2>

            <p>
              The concrete foundation is the medium through which anchor bolt forces are distributed into
              the soil. ACI 318 Chapter 17 governs the design of anchorage to concrete, and it is
              unforgiving: concrete breakout capacity is highly sensitive to the condition and geometry
              of the concrete surrounding the bolt group. An inspector&apos;s job is to identify concrete
              distress that compromises that capacity.
            </p>

            <h3>Cracking Patterns: Structural vs. Shrinkage</h3>

            <p>
              Not all cracks in concrete are equal. The first skill in foundation inspection is
              distinguishing cracks that are inherent to the concrete curing process from cracks that
              indicate structural distress.
            </p>

            <p>
              <strong>Shrinkage cracks</strong> form as concrete cures and dries. They are typically:
              hairline width (less than 0.010 inch), randomly distributed across the surface, shallow
              (rarely penetrating more than 25% of the section depth), and non-progressive (they stop
              growing after the concrete reaches equilibrium moisture content). These cracks are generally
              acceptable and do not reduce foundation capacity, but they must be sealed to prevent moisture
              infiltration and rebar corrosion.
            </p>

            <p>
              <strong>Structural cracks</strong> indicate that the concrete is being loaded beyond its
              tensile capacity in one or more load paths. Warning signs include:
            </p>

            <ul>
              <li><strong>Radial cracks emanating from the anchor bolt group:</strong> Classic signature of concrete breakout tension failure beginning to develop. These are immediately reportable deficiencies. The crane must not be operated until the engineer of record evaluates and approves a repair plan or foundation replacement.</li>
              <li><strong>Diagonal cracks in the corners of spread footings:</strong> Indicate flexural overstress in the cantilever portions of the mat. May be caused by differential settlement, overloading, or an undersized original design. Require PE evaluation.</li>
              <li><strong>Horizontal cracks at the construction joint between the foundation and the grout pad:</strong> May indicate that the grout pad is debonding under cyclic shear. This is a critical finding because the grout pad is the primary bearing surface for the crane&apos;s base section compression load.</li>
              <li><strong>Through-cracks visible on opposite faces of the foundation:</strong> Any crack that can be traced from one surface to another indicates a complete section failure. The foundation is compromised. Take the crane out of service immediately.</li>
            </ul>

            <p>
              Measure crack widths with a crack comparator card on every inspection. Record location,
              orientation, width, and length in the inspection report with photographs. Any crack wider than
              0.010 inch in a structural member per ACI 224R should be flagged for PE review.
              Any crack that has grown measurably since the last inspection is active and must be
              reported to the engineer of record regardless of current width.
            </p>

            <h3>Spalling and Surface Erosion</h3>

            <p>
              Spalling&mdash;the breaking away of concrete surface layers&mdash;can be caused by freeze-thaw
              cycling, alkali-silica reactivity (ASR), corrosion of embedded rebar expanding within the
              concrete, and mechanical impact. In crane foundations, pay particular attention to spalling
              around the bolt sleeve or conduit exits, at the top surface where water pools, and along
              the edges of the foundation where freeze-thaw exposure is greatest.
            </p>

            <p>
              If spalling has exposed rebar, measure the rebar diameter and compare to the original design
              drawings. Section loss in rebar of more than 15% requires PE evaluation per ACI 318 service
              life criteria. Any rebar that is completely exposed over a length greater than its development
              length represents a potential failure plane and requires immediate engineering assessment.
            </p>

            <h3>Grout Pad Condition</h3>

            <p>
              The grout pad&mdash;the precision-leveled non-shrink grout layer placed between the concrete
              foundation surface and the crane&apos;s base plate or sole plate&mdash;transfers compressive
              load uniformly across the bearing area. A debonded or deteriorated grout pad concentrates
              load into high spots, reduces the effective bearing area, and can allow the base section to
              rock under cyclic loading, accelerating anchor bolt fatigue.
            </p>

            <p>
              Inspect the grout pad by: listening for a hollow sound when tapping with a hammer (delamination);
              looking for cracking at the grout-to-concrete interface; checking for voids at the perimeter
              where the grout should be flush with the base plate edge; and verifying that the grout is
              not crumbling or showing signs of chemical attack from water, oils, or cleaning solvents.
              Non-shrink grout with a compressive strength below 5,000 PSI (as specified in most crane
              erection manuals) that is showing surface powdering should be tested with a Schmidt hammer
              and the results reviewed by the engineer of record.
            </p>

            <h2>Embedded Plate and Base Ring Inspection</h2>

            <p>
              Pedestal cranes (ASME B30.3, B30.4) and some tower crane configurations use an embedded
              steel plate or base ring cast into the concrete foundation as the primary connection element.
              The crane&apos;s slewing ring or pedestal shell bolts directly to this plate. Failures of
              embedded plates and base rings are particularly insidious because the connection is partly
              hidden within the concrete.
            </p>

            <p>
              Inspect the accessible portions of the embedded plate for: weld cracking between the plate
              and the shear studs or headed anchors welded to its underside (look for rust staining at
              weld toes, which indicates cracking has allowed moisture infiltration); plate edge lifting
              or separation from the surrounding grout or concrete (indicates concrete breakout failure
              or plate curling under cyclic load); corrosion of the plate surface, particularly at the
              perimeter where the plate meets the concrete surface (crevice corrosion here can undercut
              the plate and reduce the effective bearing area); and flatness deviation of the plate
              top surface (any deviation exceeding manufacturer&apos;s tolerance&mdash;typically &frac18;
              inch over the full plate diameter&mdash;must be shimmed or the plate replaced before crane
              operation resumes).
            </p>

            <p>
              For base rings on pedestal cranes, additionally inspect: ring-to-concrete contact continuity
              (there should be no visible gap between the base ring and the grout pad); the condition of
              the anchor bolts that pass through the base ring flange (these are often smaller-diameter
              but more numerous than tower crane bolts and are frequently under-inspected); and the welds
              between the base ring and the pedestal shell, which must be checked for fatigue cracking
              at regular intervals per ASME B30.4-4.4.
            </p>

            <h2>Foundation Drainage and Soil Conditions</h2>

            <p>
              Water is the primary accelerant of every foundation failure mode described in this article.
              Moisture degrades concrete, corrodes steel, softens bearing soils, and promotes the freeze-thaw
              cycling that causes spalling. A foundation inspection is incomplete without assessment of
              drainage conditions.
            </p>

            <p>
              Look for: standing water on the foundation surface or in low areas surrounding the foundation
              perimeter (indicates inadequate surface grading or blocked drains); staining patterns on
              the concrete surface that indicate chronic water infiltration routes (white efflorescence
              follows water paths through cracks; rust staining follows rebar corrosion paths); erosion
              channels in the soil adjacent to the foundation (surface runoff is undermining the bearing
              material); and settlement of the surrounding grade relative to the foundation (if the soil
              surface has dropped more than 2 inches relative to the foundation edge, erosion or
              consolidation of the bearing layer is likely occurring).
            </p>

            <p>
              The area within 10 feet of a crane foundation should be graded to drain away from the
              foundation at a minimum slope of 2% (1&frasl;4 inch per foot). Drain pipes and culverts
              within the foundation footprint should be rodded and flushed annually to prevent blockage.
              If the site has been modified (adjacent excavation, new paving, construction of nearby
              structures) since the crane was erected, the drainage pattern may have changed materially
              and must be re-evaluated. Any adjacent excavation deeper than one-third of the foundation
              embedment depth within a horizontal distance equal to the foundation width requires PE
              review of foundation stability before crane operations continue&mdash;this is a trigger
              condition regardless of whether the foundation shows any visible distress.
            </p>

            <h2>Engineering Review Triggers</h2>

            <p>
              OSHA 1926.1402 requires a qualified person to assess ground conditions, but it also requires
              a registered professional engineer to be involved when conditions fall outside the established
              design basis. ASME B30.3 and B30.4 both state that any condition that affects the structural
              integrity of the crane support structure must be evaluated by a qualified engineer before
              operations resume. The following conditions require PE assessment&mdash;not just a
              re-inspection, not a contractor judgment call, not a verbal clearance from the crane
              manufacturer&apos;s field representative. Written PE evaluation is required.
            </p>

            <ul>
              <li><strong>Radial cracks at any anchor bolt location</strong> in the concrete foundation surface, regardless of width</li>
              <li><strong>Any anchor bolt that cannot be torqued to specification</strong> after three attempts with a calibrated wrench&mdash;the bolt, the nut, or the concrete below may be compromised</li>
              <li><strong>Measurable foundation tilt</strong> exceeding the manufacturer&apos;s specified level tolerance (typically 1:500), confirmed by optical level survey</li>
              <li><strong>Any crack in the concrete foundation that has grown in width or length</strong> since the previous inspection&mdash;active cracking is structural cracking until proven otherwise</li>
              <li><strong>Exposed rebar anywhere on the foundation</strong> resulting from spalling, not just surface staining</li>
              <li><strong>Confirmed differential settlement</strong> between opposite corners of the foundation of more than &frac14; inch based on survey data</li>
              <li><strong>Any modification to the crane configuration</strong> that changes the base reactions from those used in the original foundation design&mdash;longer boom, additional tower height, different counterweight, or addition of tie-in braces that alter the load path</li>
              <li><strong>Adjacent excavation, dewatering, or ground modification</strong> within a horizontal distance equal to the foundation width from the foundation edge</li>
              <li><strong>Any seismic event of magnitude 3.5 or greater</strong> within 25 miles of the site, or any blasting operation within 1,000 feet of the crane foundation</li>
              <li><strong>Grout pad delamination confirmed by hammer sounding</strong> over more than 25% of the bearing area</li>
              <li><strong>Embedded plate or base ring weld cracking</strong> of any length at any location</li>
            </ul>

            <p>
              Document each trigger condition with photographs, measurements, and date/time. The PE&apos;s
              written evaluation must be retained in the crane&apos;s inspection file and must be available
              to OSHA compliance officers on request. Do not allow the crane to resume operations until
              the PE has provided written clearance or a written remediation plan that has been implemented
              and verified.
            </p>

            <h2>Key Takeaways</h2>

            <ul>
              <li><strong>Foundation and anchor bolt failures are rare but catastrophic.</strong> They receive less inspection attention than other crane components precisely because they rarely fail&mdash;but when they do, the consequences are irreversible. Build foundation inspection into every periodic inspection cycle, not just annual inspections.</li>
              <li><strong>Know your foundation type before you inspect.</strong> A spread footing, a pier cap, a ballasted base, and a rail-mounted system each have distinct failure modes. Review the PE-stamped foundation drawings before arriving on site so you know what you&apos;re looking for.</li>
              <li><strong>Torque verification is non-negotiable.</strong> OSHA 1926.1412 requires it. The crane manufacturer specifies the interval. Use a calibrated hydraulic torque wrench, work in a star pattern, and document every bolt&apos;s as-found and as-left condition.</li>
              <li><strong>Distinguish shrinkage cracks from structural cracks.</strong> Hairline random cracks are normal. Radial cracks at anchor bolt locations, through-cracks, and growing cracks are not. Measure, photograph, and report every crack. Refer any growing crack or bolt-zone crack to the engineer of record immediately.</li>
              <li><strong>The grout pad is a structural element.</strong> A hollow-sounding, cracked, or debonded grout pad transfers load into high spots and accelerates anchor bolt fatigue. Inspect it at every periodic inspection using a hammer tap test and visual examination.</li>
              <li><strong>Drainage is a foundation integrity issue.</strong> Inspect drainage around the foundation perimeter on every visit. Chronic standing water near a crane foundation is a leading indicator of bearing soil deterioration.</li>
              <li><strong>The PE trigger list is not optional.</strong> When any of the enumerated trigger conditions are present, crane operations must stop and a licensed professional engineer must provide written clearance before work resumes. This is required by ASME B30.3, B30.4, and OSHA 1926.1402. There is no field judgment exception.</li>
              <li><strong>Documentation protects everyone.</strong> The inspection record for a crane foundation must include bolt-by-bolt torque data, crack maps with measurements, drainage observations, and photographic evidence. A verbal &ldquo;looks good&rdquo; is not an inspection record. Per OSHA 1926.1412, written records must be maintained for the life of the crane installation.</li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Anchor Bolt Torque Logs and Foundation Reports, Done Right</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">CraneCheck&apos;s digital inspection platform includes bolt-by-bolt torque logging with calibration tracking, crack mapping with annotated photos, and one-click PE referral documentation&mdash;all timestamped and audit-ready from day one.</p>
              <a href="/pricing" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4">View Pricing</a>
              <a href="/demo" className="inline-block border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg">Request Demo</a>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="crane-anchor-bolt-foundation-inspection" />
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
