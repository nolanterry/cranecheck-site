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
  title: "Bridge & Gantry Crane Inspection Checklist: ASME B30.2, B30.11 & OSHA 1910.179 Compliance",
  description: "Complete bridge and gantry crane inspection checklist covering bridge girders, trolley mechanisms, drive systems, hoist assemblies, brakes, and electrical controls with ASME B30.2, B30.11 and OSHA 1910.179 compliance.",
  alternates: { canonical: "/blog/bridge-gantry-crane-inspection-checklist" },
};

export default function BridgeGantryCraneInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bridge & Gantry Crane Inspection Checklist: ASME B30.2, B30.11 & OSHA 1910.179 Compliance",
    "description": "Complete bridge and gantry crane inspection checklist covering bridge girders, trolley mechanisms, drive systems, hoist assemblies, brakes, and electrical controls with ASME B30.2, B30.11 and OSHA 1910.179 compliance.",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/bridge-gantry-crane-inspection-checklist" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Bridge & Gantry Crane Inspection Checklist", "item": "https://cranecheck.co/blog/bridge-gantry-crane-inspection-checklist" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Checklists</span>
              <span className="text-xs text-gray-400">April 15, 2026</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Bridge &amp; Gantry Crane Inspection Checklist: ASME B30.2, B30.11 &amp; OSHA 1910.179
            </h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Bridge and gantry cranes are the workhorses of manufacturing, steel fabrication, shipyards,
              and heavy industry. Their inspection requirements are distinct from mobile cranes and demand
              attention to structural, mechanical, and electrical systems unique to fixed-rail crane configurations.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              Bridge cranes (also called overhead traveling cranes) and gantry cranes share the same
              fundamental design &mdash; a bridge girder spanning two runways with a trolley-mounted
              hoist that travels along the bridge. The difference is in the support structure: bridge
              cranes run on elevated runway beams supported by building columns, while gantry cranes
              carry their own support legs that run on rails at floor level or on the ground. Semi-gantry
              cranes have one elevated runway rail and one floor-level rail.
            </p>

            <p>
              The primary inspection standards for these cranes are ASME B30.2 (Overhead and Gantry
              Cranes &mdash; Top Running Bridge, Single or Multiple Girder) and ASME B30.11 (Monorails
              and Underhung Cranes). OSHA 29 CFR 1910.179 provides the regulatory requirements for
              overhead and gantry cranes in general industry. For construction sites, 29 CFR 1926 Subpart
              CC applies. For baseline overhead crane inspection frequency guidance, see our{" "}
              <Link href="/blog/overhead-crane-inspection-frequency">overhead crane inspection frequency guide</Link>.
            </p>

            <p>
              This checklist covers every system and component that must be inspected during frequent
              (daily/monthly) and periodic (monthly/annual) inspections for bridge and gantry cranes.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Bridge Girder and Structural Inspection</h2>

            <p>
              The bridge girder is the primary structural member and carries the trolley, hoist, and
              the full rated load. Structural integrity is paramount.
            </p>

            <h3>Single Girder Cranes</h3>
            <ul>
              <li><strong>Girder deflection:</strong> Under rated load, deflection should not exceed span/888 (CMAA 70). Measure at midspan with a calibrated measuring device or optical instruments.</li>
              <li><strong>Lateral bow:</strong> The girder should not deflect laterally more than span/400 under normal operating loads.</li>
              <li><strong>Bottom flange condition:</strong> On underhung monorail and single-girder cranes, the bottom flange carries the trolley wheels. Inspect for wear, flange bowing, and fatigue cracks at stiffener connections.</li>
              <li><strong>Web-to-flange welds:</strong> Inspect for fatigue cracks, especially at midspan and near trolley stops where cyclic loading is concentrated.</li>
            </ul>

            <h3>Double Girder Cranes</h3>
            <ul>
              <li><strong>Both girders:</strong> Inspect each girder independently for deflection, lateral bow, and weld condition.</li>
              <li><strong>Cross-members:</strong> Diaphragm plates or cross-bracing between girders must be intact and connections must be tight.</li>
              <li><strong>Walkway structure:</strong> If the crane has operator walkways, inspect the walkway deck, handrails, and toe boards for structural integrity and loose connections.</li>
              <li><strong>Cab support structure:</strong> If the crane has an operator cab, inspect the cab support brackets, platform, and access ladder/stairway.</li>
            </ul>

            <h3>Gantry Leg Structures</h3>
            <ul>
              <li><strong>Leg plumbness:</strong> Gantry legs must remain vertical. Out-of-plumb legs create eccentric loading on the bridge girder and wheel assemblies.</li>
              <li><strong>Leg-to-bridge connections:</strong> These are high-stress connections subject to fatigue. Inspect welds and bolts for cracks and looseness.</li>
              <li><strong>Equalizer beams:</strong> On gantry cranes with four-wheel end trucks, the equalizer beam distributes load between wheel sets. Inspect pivot pins, bearings, and structural welds.</li>
              <li><strong>Cross-travel tie members:</strong> Horizontal members connecting the gantry legs at the base must be intact to maintain geometry.</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>End Truck and Wheel Assembly Inspection</h2>

            <p>
              End trucks (also called end carriages) are the assemblies at each end of the bridge that
              carry the bridge wheels and connect the bridge girder to the runway:
            </p>

            <ul>
              <li>
                <strong>Bridge wheels:</strong> Inspect wheel tread for wear, spalling, flat spots,
                and heat discoloration. Measure wheel diameter &mdash; wheels in a matched pair should
                be within 0.010 inch of each other. Worn wheels cause skewing.
              </li>
              <li>
                <strong>Wheel flanges:</strong> Measure flange thickness and check for cracks. Flanged
                wheels should have flange contact with the rail only when the crane is being guided &mdash;
                constant flange riding indicates rail or alignment problems.
              </li>
              <li>
                <strong>Bearings:</strong> Listen for bearing noise during crane travel. Anti-friction
                bearings should run quietly. Grinding, rumbling, or clicking sounds indicate bearing
                distress. Check bearing housing seals for leakage and contamination.
              </li>
              <li>
                <strong>Axle condition:</strong> Inspect for cracks at wheel seats and keyway areas.
                Check axle end play (should be minimal &mdash; manufacturer specs vary).
              </li>
              <li>
                <strong>End truck frame:</strong> Inspect for cracks at wheel bearing housings, bridge
                girder connection points, and drive motor mounting areas.
              </li>
              <li>
                <strong>Wheel alignment:</strong> All bridge wheels should be parallel to each other
                and perpendicular to the bridge girder. Misaligned wheels cause skewing, rail wear,
                and increased power consumption.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Trolley and Hoist Inspection</h2>

            <p>
              The trolley carries the hoist mechanism and travels along the bridge girder:
            </p>

            <h3>Trolley Structure and Wheels</h3>
            <ul>
              <li>Trolley frame for cracks, corrosion, and deformation</li>
              <li>Trolley wheel tread wear and flange condition (same criteria as bridge wheels)</li>
              <li>Trolley rail or track wear (for top-running configurations)</li>
              <li>Trolley bumpers at each end of travel</li>
              <li>Trolley drive mechanism (motor, gearbox, couplings)</li>
            </ul>

            <h3>Hoist Assembly</h3>
            <ul>
              <li>
                <strong>Wire rope:</strong> Inspect per ASME B30.2-2.6.3 criteria &mdash; broken wires,
                diameter reduction, corrosion, kinking, bird-caging. See our{" "}
                <Link href="/blog/crane-wire-rope-inspection-guide">wire rope inspection guide</Link>{" "}
                for detailed criteria.
              </li>
              <li>
                <strong>Drum:</strong> Rope grooves for wear, drum flanges for deformation, drum shaft
                bearings, and rope anchor. Rope must have minimum 2 dead wraps on the drum at lowest
                hook position.
              </li>
              <li>
                <strong>Sheaves:</strong> Groove wear (rope should sit on the bottom of the groove, not
                ride up the sides), bearing condition, and guard presence.
              </li>
              <li>
                <strong>Hook:</strong> Throat opening, twist, wear, cracks (NDT if warranted). See our{" "}
                <Link href="/blog/crane-hook-inspection-criteria">hook inspection criteria guide</Link>.
              </li>
              <li>
                <strong>Hook latch:</strong> Must close fully and operate freely under spring tension.
              </li>
              <li>
                <strong>Reeving:</strong> Correct number of parts of line, no crossed or twisted ropes.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Brake Systems</h2>

            <p>
              Bridge and gantry cranes have multiple brake systems that serve different functions:
            </p>

            <h3>Hoist Brake</h3>
            <ul>
              <li><strong>Holding brake:</strong> Spring-set, electrically or hydraulically released. Must hold 125% of rated load per ASME B30.2. Test by lifting a test load slightly and verifying the brake holds with the hoist motor de-energized.</li>
              <li><strong>Control brake:</strong> Mechanical load brake or eddy-current brake that controls lowering speed. Must not allow the load to accelerate during lowering.</li>
              <li><strong>Brake lining:</strong> Measure lining thickness and check for contamination (oil, grease). Replace when lining reaches manufacturer minimum thickness.</li>
              <li><strong>Brake adjustment:</strong> Verify correct air gap, spring compression, and torque setting per manufacturer specifications.</li>
            </ul>

            <h3>Bridge and Trolley Brakes</h3>
            <ul>
              <li>Bridge drive brakes must stop and hold the crane within a reasonable distance under full-speed travel with no load.</li>
              <li>Trolley brakes (if equipped) same criteria.</li>
              <li>Brake discs or drums for wear, glazing, heat discoloration, and cracking.</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Drive Systems</h2>

            <p>
              Bridge, trolley, and hoist drive systems include motors, gearboxes, couplings, and
              shafts:
            </p>

            <ul>
              <li>
                <strong>Motors:</strong> Listen for abnormal noise. Check motor mounting bolt tightness.
                Feel for excessive heat (infrared thermometer recommended). Check ventilation openings
                for blockage. Inspect motor leads and connections.
              </li>
              <li>
                <strong>Gearboxes:</strong> Check oil level and condition. Listen for gear noise (clicking,
                grinding, whining). Check for leaks at seals, gaskets, and vent plugs. Oil analysis is
                recommended for annual inspections.
              </li>
              <li>
                <strong>Couplings:</strong> Check alignment, coupling guard condition, and coupling element
                wear (gear teeth, rubber elements, grid spring condition depending on coupling type).
              </li>
              <li>
                <strong>Open gearing:</strong> If the crane uses open gear drives (common on older cranes),
                inspect gear tooth profiles for wear, pitting, and proper lubrication.
              </li>
              <li>
                <strong>Drive shafts:</strong> Check for straightness, bearing condition, and keyway wear.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Electrical Controls and Safety Devices</h2>

            <p>
              The electrical control system on a bridge or gantry crane is complex and includes multiple
              safety-critical components:
            </p>

            <h3>Control Systems</h3>
            <ul>
              <li><strong>Pendant control:</strong> Inspect all pushbuttons for function (each direction, each motion), cord/cable condition, strain relief, and dead man&rsquo;s feature (all motions must stop when operator releases buttons).</li>
              <li><strong>Radio remote control:</strong> Function test all buttons and joysticks. Verify E-stop function. Check battery condition. Verify frequency pairing (remote should only operate its assigned crane).</li>
              <li><strong>Cab controls:</strong> Master switches, joysticks, foot pedals &mdash; smooth operation through full range, return to neutral when released.</li>
              <li><strong>Main disconnect:</strong> Must be lockable in the OFF position. Test function.</li>
            </ul>

            <h3>Limit Switches and Safety Devices</h3>
            <ul>
              <li><strong>Upper hoist limit switch:</strong> OSHA 1910.179(n)(4)(i) requires a functioning upper limit switch. Test by slowly raising the empty hook to the trip point. The hoist must stop before block-to-block contact.</li>
              <li><strong>Lower hoist limit switch:</strong> If equipped, test at the lowest hook position.</li>
              <li><strong>Bridge travel limits:</strong> Must stop the crane before contact with end stops during normal operation.</li>
              <li><strong>Trolley travel limits:</strong> Must stop the trolley before contact with bridge end stops.</li>
              <li><strong>Overload protection:</strong> If equipped, test function at the rated trip point.</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Gantry Crane-Specific Items</h2>

            <p>
              In addition to all items above, gantry cranes require inspection of components unique to
              their free-standing configuration:
            </p>

            <ul>
              <li>
                <strong>Ground-level rails:</strong> Rail alignment, fasteners, and condition (same criteria
                as overhead runway rails but at ground level where they are exposed to vehicle traffic,
                debris, and weather). See our{" "}
                <Link href="/blog/overhead-crane-runway-rail-inspection">runway rail inspection guide</Link>{" "}
                for detailed criteria.
              </li>
              <li>
                <strong>Wheel sweep devices:</strong> Gantry cranes operating at ground level must have
                wheel sweep devices or guards to push debris off the rail ahead of the wheels.
              </li>
              <li>
                <strong>Travel alarm:</strong> Audible alarm that sounds during gantry travel to warn
                workers at ground level. Test function and audibility.
              </li>
              <li>
                <strong>Wind anchors:</strong> Outdoor gantry cranes must have wind anchor or storm pin
                systems to prevent wind-driven travel when the crane is unattended. Inspect anchor
                condition, pin engagement, and locking mechanisms.
              </li>
              <li>
                <strong>Anemometer:</strong> Outdoor gantry cranes should have wind speed monitoring.
                Verify function and calibration.
              </li>
              <li>
                <strong>Festoon or cable reel power system:</strong> Exposed to weather on outdoor gantry
                cranes &mdash; inspect for UV damage, moisture intrusion, and ice damage.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Inspection Documentation Requirements</h2>

            <p>
              OSHA 1910.179(j)(2)(ii) and (j)(3)(ii) require that bridge and gantry crane inspections
              be documented. At minimum, records must include:
            </p>

            <ul>
              <li>Date of inspection</li>
              <li>Inspector name and qualifications</li>
              <li>Crane identification (make, model, serial, location)</li>
              <li>Type of inspection (daily, monthly, annual)</li>
              <li>All items inspected with pass/fail/findings</li>
              <li>Deficiency descriptions with severity (critical, major, minor)</li>
              <li>Corrective actions required with responsible party and deadline</li>
              <li>Load test results (if performed)</li>
              <li>Inspector signature</li>
            </ul>

            <p>
              ASME B30.2 requires that deficiencies affecting safe operation result in the crane being
              taken out of service until repairs are completed. CraneCheck provides purpose-built
              digital inspection templates for bridge and gantry cranes that guide inspectors through
              every required item and automatically generate deficiency tracking with close-out workflows.
            </p>

            <div className="bg-brand-light border border-brand rounded-xl p-6 my-8">
              <p className="font-semibold text-navy mb-2">
                Streamline your bridge and gantry crane inspections
              </p>
              <p className="text-gray-600 mb-4">
                CraneCheck&rsquo;s digital inspection templates cover overhead, bridge, gantry, and
                mobile crane types with ASME B30.2 and OSHA 1910.179 compliance built in.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition no-underline"
              >
                Start Your Free Trial &rarr;
              </Link>
            </div>
          </div>
        </article>

        <div className="max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="bridge-gantry-crane-inspection-checklist" />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
