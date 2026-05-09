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
  title: "Crane Hoist Brake Inspection & Load Drift Testing Requirements",
  description: "Complete guide to crane hoist brake inspection and load drift testing for qualified inspectors. Covers holding vs. control brake types, visual inspection criteria, ASME B30.2/B30.11 drift rates, torque verification, and OSHA 1910.179/1926.1412 documentation requirements.",
  alternates: { canonical: "/blog/crane-hoist-brake-inspection-testing" },
};

export default function CraneHoistBrakeInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Hoist Brake Inspection & Load Drift Testing Requirements",
    "description": "Complete guide to crane hoist brake inspection and load drift testing for qualified inspectors. Covers holding vs. control brake types, visual inspection criteria, ASME B30.2/B30.11 drift rates, torque verification, and OSHA 1910.179/1926.1412 documentation requirements.",
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
      "@id": "https://cranecheck.co/blog/crane-hoist-brake-inspection-testing"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Hoist Brake Inspection", "item": "https://cranecheck.co/blog/crane-hoist-brake-inspection-testing" }
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
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Hoist Brake Inspection &amp; Load Drift Testing Requirements
            </h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
            <p className="text-lg text-gray-300 leading-relaxed">
              The hoist brake is the last line of defense between a suspended load and a free-fall event. Whether you are inspecting an overhead bridge crane under ASME B30.2, a monorail hoist under B30.11, or a jib crane under B30.16, the brake system demands the same rigorous evaluation: visual inspection of every wear surface, load drift testing under controlled conditions, and documented torque verification. This guide walks through the complete inspection and testing process the way an experienced crane inspector approaches it&mdash;no approximations, no shortcuts.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="not-prose"><TableOfContents /></div>

            <div className="prose prose-gray max-w-none">

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Why Hoist Brakes Are Critical Safety Components</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A hoist brake serves one irreplaceable function: holding a suspended load against gravity when the drive motor is not producing torque. If the brake slips, drags, or fails to apply fully, the load descends&mdash;whether the operator intends it to or not. Load drift events cause dropped loads, rigging failures, and fatalities. They also represent the most commonly cited hoist deficiency during OSHA 1910.179 compliance inspections and ASME B30-series periodic inspections.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Unlike many mechanical systems where gradual degradation is tolerable, brake failures rarely provide warning before a critical event. Lining wear, oil contamination, spring fatigue, and heat-induced glazing can each reduce holding torque to the point of failure while the brake &ldquo;passes&rdquo; a casual visual check. That is why load drift testing&mdash;not just looking at the brake&mdash;is the definitive verification method. Visual inspection identifies what to test and why; the drift test confirms whether the brake actually holds rated load.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1910.179(f)(1) requires that hoist brakes be capable of stopping and holding a rated load at all points of travel. OSHA 1926.1412 applies the same functional requirement to construction cranes. ASME B30.2 (overhead and gantry cranes), B30.11 (monorail systems), B30.16 (overhead hoists&mdash;underhung), and B30.17 (overhead hoists&mdash;electric) all establish specific inspection criteria and testing requirements. Knowing which standard governs your equipment determines exactly what you are required to verify.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Types of Hoist Brakes: Holding Brakes vs. Control Brakes</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hoist brakes fall into two functional categories that are not interchangeable and must be inspected differently. Confusing them leads to incorrect evaluation criteria and missed deficiencies.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Holding brakes</strong> (also called parking brakes or mechanical load brakes) are the primary load-retaining device. They are designed to engage automatically whenever drive power is removed&mdash;at the end of a lift, during a power interruption, or on e-stop. The holding brake must sustain 100% of rated hoist load indefinitely without drifting. On spring-set designs, brake spring force clamps friction surfaces together; the motor or solenoid releases the brake only while hoisting or lowering. On hydraulic-release designs, hydraulic pressure holds the brake open during operation, and spring force or accumulator pressure applies it on power loss. Either way, the fail-safe principle is identical: loss of power equals brake applied.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Control brakes</strong> (dynamic brakes, regenerative braking, mechanical lowering controllers) modulate load speed during lowering. They are not designed to hold a static load indefinitely. A control brake that shows drift under load is not necessarily defective&mdash;it may be operating exactly as designed. The error is expecting a control brake to perform a holding brake&apos;s job. On cranes equipped with both types, each must be inspected and tested against its own performance criteria.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Disc brakes</strong> use friction pads clamping against a rotor mounted on the hoist drum shaft or motor shaft. They offer consistent torque, compact packaging, and predictable wear patterns. Lining condition is inspected through measurement of pad thickness and rotor surface condition. <strong>Shoe brakes</strong> (drum brakes) use curved friction shoes applying force to the outside or inside of a drum. They are common on older and heavy-duty hoists. Shoe-to-drum contact area, spring condition, and lining thickness are the primary inspection points. Both types can be spring-set/hydraulic-release or spring-set/solenoid-release; the actuation mechanism determines how the brake is tested under loss-of-power conditions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Visual Inspection Criteria</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Visual inspection of hoist brakes is required as part of both the frequent (shift-level) inspection under ASME B30.2-3.2.1 and the periodic inspection under B30.2-3.2.2. The frequent inspection is an operational check&mdash;verify the brake applies and releases correctly, listen for unusual sounds during application and release. The periodic inspection requires hands-on examination of all brake components with access panels removed.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Lining thickness:</strong> Measure friction lining (pad or shoe) thickness at the thinnest point. Most manufacturers specify a minimum lining thickness of 1/8&Prime; to 3/16&Prime; remaining; always verify against the OEM service manual. Do not estimate&mdash;use a caliper. Linings worn to the rivets or backing plate must be replaced before any load operation.</li>
                <li><strong>Lining surface condition:</strong> Inspect for oil contamination (dark, glossy, or slick surface), heat glazing (hard, shiny surface that reduces friction coefficient), scoring or grooving from debris, and uneven wear patterns indicating brake misalignment or uneven spring force.</li>
                <li><strong>Rotor or drum condition (disc/shoe brakes):</strong> Measure rotor thickness with a micrometer at multiple points. Compare to manufacturer&apos;s minimum discard thickness. Inspect surfaces for deep scoring, heat discoloration (blue temper marks), warping, and cracking at the center hub or mounting holes. Warped rotors cause cyclic brake application and premature lining wear.</li>
                <li><strong>Spring condition:</strong> On spring-set brakes, inspect actuating springs for corrosion, deformation, cracks at the coil ends, and loss of free length. Weakened springs reduce clamping force and brake torque. Compare free length to manufacturer specs if available.</li>
                <li><strong>Pivot pins and linkage:</strong> Inspect all brake linkage pivot pins for wear, corrosion, and proper retention. Worn pivot pins allow the brake shoes or caliper to shift position, reducing contact area and torque consistency.</li>
                <li><strong>Solenoid or hydraulic actuator:</strong> On electrically released brakes, inspect solenoid coil for proper resistance (use a multimeter), clean plunger travel, and secure mounting. On hydraulic-release brakes, inspect cylinders for external leakage, scored rods, and proper pressure at the brake release port.</li>
                <li><strong>Adjustment condition:</strong> Verify brake air gap (the clearance between friction surfaces when released) is within the manufacturer&apos;s specified range. Excessive air gap delays brake application; insufficient gap causes dragging and heat buildup.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Load Drift Testing Procedures</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Load drift testing is the functional verification that the hoist brake system is actually holding what it is rated to hold. Visual inspection tells you the brake looks serviceable; the drift test confirms it performs. ASME B30.2 and B30.11 both require that hoists demonstrate the ability to hold rated load without drift, but neither specifies a single universal drift rate because acceptable drift depends on brake type, design intent, and application. The following procedures represent the industry-standard approach used by qualified inspectors.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Pre-test setup:</strong> Select a test load of 100% of the hoist&apos;s rated load capacity. Do not use less; undertesting is not conservative&mdash;it provides false assurance. Ensure the test load is properly rigged with rated rigging equipment. Confirm the lift area is clear of personnel and non-essential equipment. Designate a signal person with a clear view of both the load and the inspector.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Test procedure:</strong> Hoist the rated load to a height of approximately 2&ndash;3 feet above the floor (high enough to observe drift clearly, low enough to minimize consequences if the brake fails). Come to a complete stop with power removed from the hoist motor. Observe the load position for a minimum of 5 minutes. Mark the hook block or load position reference before the test begins using a reference mark on the load line or a measurement from the floor. Measure any downward movement from the reference mark. Record the elapsed time and distance drifted. Repeat the test at mid-travel and near the upper limit to verify brake performance throughout the travel range.
              </p>

              <div className="not-prose my-8 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="px-4 py-3 text-left font-semibold">Standard / Application</th>
                      <th className="px-4 py-3 text-left font-semibold">Test Load</th>
                      <th className="px-4 py-3 text-left font-semibold">Observation Period</th>
                      <th className="px-4 py-3 text-left font-semibold">Acceptable Drift</th>
                      <th className="px-4 py-3 text-left font-semibold">Action if Exceeded</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">ASME B30.2 &ndash; Overhead &amp; Gantry Cranes (holding brake)</td>
                      <td className="px-4 py-3">100% rated load</td>
                      <td className="px-4 py-3">5 minutes</td>
                      <td className="px-4 py-3">Zero measurable drift</td>
                      <td className="px-4 py-3">Remove from service; adjust or replace brake</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">ASME B30.11 &ndash; Monorail Systems (holding brake)</td>
                      <td className="px-4 py-3">100% rated load</td>
                      <td className="px-4 py-3">5 minutes</td>
                      <td className="px-4 py-3">Zero measurable drift</td>
                      <td className="px-4 py-3">Remove from service; adjust or replace brake</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">ASME B30.16 &ndash; Overhead Hoists, Underhung (holding brake)</td>
                      <td className="px-4 py-3">100% rated load</td>
                      <td className="px-4 py-3">5 minutes</td>
                      <td className="px-4 py-3">Zero measurable drift</td>
                      <td className="px-4 py-3">Remove from service; adjust or replace brake</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">ASME B30.17 &ndash; Overhead Hoists, Electric (holding brake)</td>
                      <td className="px-4 py-3">100% rated load</td>
                      <td className="px-4 py-3">5 minutes</td>
                      <td className="px-4 py-3">Zero measurable drift</td>
                      <td className="px-4 py-3">Remove from service; adjust or replace brake</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">OSHA 1910.179 &ndash; General Industry Overhead Cranes</td>
                      <td className="px-4 py-3">Rated load</td>
                      <td className="px-4 py-3">Functional stop test</td>
                      <td className="px-4 py-3">Must stop and hold rated load at all points of travel</td>
                      <td className="px-4 py-3">Tag out; repair before return to service</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">OSHA 1926.1412 &ndash; Construction Cranes (hoist)</td>
                      <td className="px-4 py-3">Rated load</td>
                      <td className="px-4 py-3">Per manufacturer / ASME reference</td>
                      <td className="px-4 py-3">Must hold rated load without drift</td>
                      <td className="px-4 py-3">Tag out; repair before return to service</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Control brake (dynamic / regenerative &ndash; not holding)</td>
                      <td className="px-4 py-3">N/A for static hold</td>
                      <td className="px-4 py-3">Dynamic lowering test</td>
                      <td className="px-4 py-3">Controlled speed per manufacturer spec</td>
                      <td className="px-4 py-3">Adjust or repair if speed exceeds rated lowering speed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Note that &ldquo;zero measurable drift&rdquo; does not mean the load literally cannot move at all&mdash;thermal expansion of the rope, hook block settling into a centered position, and initial brake engagement all produce negligible movement within the first few seconds. Zero measurable drift means no continuous downward travel after the initial static application of the brake. If the load is still moving after 30 seconds, the brake is not holding.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Brake Torque Verification and Adjustment</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Load drift testing tells you whether the brake holds; torque verification tells you by how much margin. Knowing the actual brake torque relative to the required holding torque is essential for condition-based maintenance decisions&mdash;it tells you whether the brake is marginally compliant (replace at next interval) or has significant remaining service life.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The required holding torque for a hoist brake is calculated from the rated hoist load, the drum radius, the gear ratio between the drum and the brake shaft, and any mechanical advantage in the reeving system. Most manufacturers publish the required brake torque directly in the hoist service manual. If you are working from a formula: T = (W &times; r) / (GR &times; &eta;), where W is rated load, r is drum radius, GR is gear ratio at the brake shaft, and &eta; is drivetrain efficiency. Required brake torque is then the result multiplied by a safety factor (typically 1.5 per ASME B30.2 requirements for the brake to hold 150% of rated hoist torque under motor failure conditions).
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Brake torque measurement</strong> in the field is accomplished with a brake torque wrench or by back-calculating from the drift test with a calibrated load. Some modern hoist controllers include integrated brake torque monitoring. For older equipment, a practical field check is to verify the brake adjustment gap is within specification, spring compression is correct per the service manual, and then perform the 100% rated load drift test. Adjustment procedures vary by brake type:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Spring-set disc brakes:</strong> Adjust the air gap per manufacturer specification (typically 0.010&Prime;&ndash;0.030&Prime; per side) by turning the adjustment nut on the brake actuating bolt. Verify spring compression with a depth gauge after adjustment.</li>
                <li><strong>Spring-set shoe brakes:</strong> Adjust shoe-to-drum clearance at the adjustment bolt or eccentric cam on each shoe pivot. Both shoes must contact the drum evenly; uneven adjustment produces reduced torque and uneven wear.</li>
                <li><strong>Hydraulic-release brakes:</strong> Verify hydraulic release pressure at the brake port with a calibrated gauge. Verify spring pre-load at the manufacturer&apos;s specified torque with power off. Any hydraulic leak in the release circuit reduces effective spring pre-load and holding torque.</li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                After any brake adjustment, a full 100% rated load drift test must be performed before the crane is returned to service. Do not adjust the brake, visually confirm the gap looks right, and call it done&mdash;the drift test is the verification.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Environmental Factors Affecting Brake Performance</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hoist brakes do not fail in a vacuum. Environmental conditions are among the most common root causes of brake degradation, and ignoring them during inspection means you will be back performing the same repairs in three months instead of three years.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Oil and grease contamination:</strong> The most destructive single factor for friction brake performance. A thin film of gear oil or lubricant on a brake lining can reduce friction coefficient by 60&ndash;80%. Contamination comes from overfilled gearboxes, failed gearbox seals, over-lubricated bearings adjacent to the brake, or grease migration from drum bearings. During inspection, look for oil staining, dark lining color, and slick surfaces. If contamination is found, replace the linings&mdash;cleaning a contaminated lining with solvent does not reliably restore friction performance to the original specification.</li>
                <li><strong>Heat accumulation:</strong> Repeated high-duty-cycle lowering operations generate heat in the friction surfaces. Heat glazes brake linings (reducing friction coefficient), thermally fatigues actuating springs (reducing clamping force), and can warp brake rotors and drums. Signs of heat damage include blue or purple discoloration on the rotor or drum, glazed or cracked lining surfaces, reduced brake spring free length, and increased drift under load compared to previous test intervals.</li>
                <li><strong>Moisture and corrosion:</strong> Cranes operating in outdoor or high-humidity environments are susceptible to rust accumulation on brake rotors and drums. Light surface rust is normal after a crane sits idle overnight and typically wipes off during the first few brake applications. Heavy scale rust reduces effective friction surface area and can mechanically prevent brake engagement or release. Inspect brakes on cranes returning from extended layup or outdoor storage especially carefully&mdash;the brake may be seized open or closed without applying any load.</li>
                <li><strong>Dust and abrasive contamination:</strong> Sand, concrete dust, and metal filings embedded in brake linings act as abrasives, accelerating rotor and drum wear. Inspect lining surfaces for embedded particles and scoring patterns consistent with abrasive contamination.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Documentation and Testing Frequency Requirements</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Both OSHA and ASME establish minimum inspection and testing frequencies for hoist brakes. These are minimums&mdash;operational conditions, history of deficiencies, and manufacturer recommendations may all require more frequent testing.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>OSHA 1910.179</strong> requires a functional brake inspection as part of the daily pre-shift inspection for all overhead crane hoists. The operator must verify that the hoist brake operates correctly before any load lifts. This is a functional check&mdash;hoist a no-load test, verify brake engages cleanly on stop. Monthly inspections under 1910.179 must include a more detailed examination of brake components. Annual comprehensive inspections must include all brake components and must be documented and retained. OSHA does not specify a retention period for inspection records in 1910.179, but the general recordkeeping requirement under 1910.1020 suggests a minimum of three years.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>OSHA 1926.1412</strong> establishes a three-tier inspection frequency for construction cranes: shift, monthly, and annual. Hoist brake functional verification is required at each shift inspection. The annual inspection under 1926.1412(f) must include a documented examination of all brake components by a qualified person, with records retained for one year after the inspection date.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>ASME B30.2</strong> establishes frequent inspections (daily to monthly depending on service) and periodic inspections (monthly to annually depending on service severity). B30.2-3.2.1 requires that holding brakes be included in frequent inspections with functional testing. B30.2-3.2.2 requires that periodic inspections include examination of brake components for wear, adjustment, and condition. Records of periodic inspections must be maintained and available to authorized personnel.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Every load drift test must be documented</strong> with the following minimum information: crane identification (make, model, serial number, unit ID), hoist identification (manufacturer, model, capacity, serial number), test date and inspector name and qualification, test load used (weight and rigging description), observation period, measured drift distance and direction, environmental conditions during the test, brake adjustment performed (if any) and post-adjustment retest results, and the inspector&apos;s pass/fail determination with signature. Photographs of the brake components before and after adjustment and of the drift test setup are best practice. For related documentation guidance, see our <Link href="/blog/crane-maintenance-log-requirements">crane maintenance log requirements</Link> article.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Key Takeaways</h2>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Holding brakes and control brakes are not the same thing.</strong> Evaluate each against its own performance criteria. Expecting a dynamic control brake to hold static load&mdash;or evaluating a holding brake only on dynamic performance&mdash;produces incorrect disposition decisions.</li>
                <li><strong>Visual inspection alone is insufficient.</strong> Oil-contaminated linings can look dark but serviceable and fail completely under load. The 100% rated load drift test at 5-minute observation is the definitive verification method for holding brake function under ASME B30.2, B30.11, B30.16, and B30.17.</li>
                <li><strong>Measure lining thickness with a caliper.</strong> Estimating by eye will cause you to miss linings at minimum and allow cranes to operate with degraded brake margin.</li>
                <li><strong>Oil contamination means replace, not clean.</strong> Solvent-cleaned linings do not reliably return to original friction coefficients. Any lining with confirmed oil or grease contamination should be replaced.</li>
                <li><strong>Environmental conditions matter.</strong> Heat cycling, moisture, and abrasive contamination all accelerate brake degradation. Increase inspection frequency when any of these conditions are present in the operating environment.</li>
                <li><strong>Adjust, then retest.</strong> No brake adjustment is complete without a post-adjustment 100% rated load drift test. The adjustment establishes the mechanical condition; the test confirms the functional result.</li>
                <li><strong>Document every test.</strong> OSHA 1910.179, 1926.1412, and ASME B30.2 all require documented inspection records. A drift test that is not documented did not happen from a regulatory standpoint&mdash;and provides no defensible record in the event of an incident investigation.</li>
              </ul>

              {/* CTA */}
              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h2 className="text-2xl font-bold text-white mb-3">Streamline Your Hoist Brake Inspection Records</h2>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  CraneCheck gives inspectors a structured digital workflow for hoist brake visual inspection, load drift test documentation, torque verification records, and adjustment history&mdash;all linked to the specific hoist and retained for OSHA compliance. Stop tracking brake tests on paper and start building a defensible inspection record.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/pricing"
                    className="inline-block bg-white text-brand font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-lg"
                  >
                    View Pricing
                  </a>
                  <a
                    href="/demo"
                    className="inline-block border border-white text-white font-semibold px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-lg"
                  >
                    Request Demo
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        <RelatedPosts currentSlug="crane-hoist-brake-inspection-testing" />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
