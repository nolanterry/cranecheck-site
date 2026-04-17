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
  title: "All-Terrain Crane Inspection Guide: Multi-Axle Systems, Road Travel & ASME B30.5 Compliance",
  description: "Comprehensive guide to all-terrain crane inspection covering multi-axle steering systems, carrier cab vs operator cab inspection, road travel requirements, suspension lockout, counterweight configurations, and ASME B30.5 compliance.",
  alternates: { canonical: "/blog/all-terrain-crane-inspection-guide" },
};

export default function AllTerrainCraneInspectionGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "All-Terrain Crane Inspection Guide: Multi-Axle Systems, Road Travel & ASME B30.5 Compliance",
    "description": "Comprehensive guide to all-terrain crane inspection covering multi-axle steering systems, carrier cab vs operator cab inspection, road travel requirements, suspension lockout, counterweight configurations, and ASME B30.5 compliance.",
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
      "@id": "https://cranecheck.co/blog/all-terrain-crane-inspection-guide"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "All-Terrain Crane Inspection Guide", "item": "https://cranecheck.co/blog/all-terrain-crane-inspection-guide" }
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
              <span className="text-xs text-gray-400">April 17, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">All-Terrain Crane Inspection Guide: Multi-Axle Systems, Road Travel &amp; ASME B30.5 Compliance</h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">All-terrain (AT) cranes combine the road mobility of a truck crane with the off-road capability and lifting capacity of a rough-terrain crane, making them among the most versatile&mdash;and complex&mdash;mobile cranes in service. Their multi-axle steering systems, dual-cab configurations, independent suspension with lockout mechanisms, and removable counterweight packages introduce inspection requirements that go well beyond standard mobile crane checklists. This guide covers the full scope of AT crane inspection, from multi-axle steering verification and carrier/operator cab dual-system checks to DOT road travel compliance, suspension lockout validation, counterweight tracking, and ASME B30.5 regulatory alignment.</p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>What Defines an All-Terrain Crane?</h2>

            <p>
              All-terrain cranes are self-propelled, rubber-tired mobile cranes engineered to travel on public roads at highway speeds and operate on unprepared jobsite surfaces. Unlike truck cranes, which use a commercial truck chassis with a rear-mounted superstructure, AT cranes are purpose-built from the ground up with integrated carrier and superstructure designs. Unlike rough-terrain cranes, which are limited to jobsite travel and typically feature two axles with a single cab, AT cranes feature three to nine axles, two independent operator stations (carrier cab and superstructure cab), and sophisticated hydropneumatic suspension systems that allow both road travel compliance and stable lifting operations.
            </p>

            <p>
              The key characteristics that define AT cranes and drive their unique inspection requirements include:
            </p>

            <ul>
              <li><strong>Multi-axle carrier:</strong> Typically 3 to 9 axles with all-wheel drive and multiple steering modes, enabling tight turning radii despite vehicle lengths exceeding 60 feet</li>
              <li><strong>Dual cabs:</strong> A carrier cab for road travel and a separate operator cab on the superstructure for crane operations, each with independent controls, instrumentation, and safety systems</li>
              <li><strong>Hydropneumatic suspension:</strong> Active suspension for road travel that must be locked out during lifting operations to maintain structural stability</li>
              <li><strong>Removable counterweight:</strong> Modular counterweight packages that are installed for lifting operations and partially or fully removed for road travel to meet axle weight limits</li>
              <li><strong>Telescopic boom:</strong> Multi-section hydraulic booms ranging from 130 to over 300 feet, often supplemented by lattice fly jibs and luffing attachments</li>
              <li><strong>Capacities:</strong> Modern AT cranes range from 60 tons to over 1,200 tons, with the largest models (Liebherr LTM 11200-9.1, Tadano AC 7.450-1) representing the highest-capacity mobile cranes in existence</li>
            </ul>

            <p>
              Because AT cranes must meet both highway vehicle regulations and crane safety standards simultaneously, inspectors must be fluent in DOT/FMCSA requirements for the carrier and ASME B30.5/OSHA 1926 Subpart CC requirements for the crane. A deficiency in either domain can remove the equipment from service.
            </p>

            <h2>Multi-Axle Steering Systems Inspection</h2>

            <p>
              The multi-axle steering system is the defining mechanical feature of an all-terrain crane. AT cranes use multiple steering modes to achieve maneuverability that would otherwise be impossible given their length and weight. A nine-axle AT crane may weigh over 200,000 pounds and measure 65 feet in length, yet achieve a turning radius comparable to a standard passenger vehicle when all steering modes are functioning correctly.
            </p>

            <h3>Steering Modes and Their Functions</h3>

            <p>
              Most AT cranes support three to five steering modes, selected by the carrier cab operator via a mode selector switch. Each mode engages different axle combinations and requires specific hydraulic circuits, sensors, and mechanical linkages to function correctly.
            </p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Steering Mode</th>
                    <th className="px-4 py-3 text-left font-semibold">Axles Engaged</th>
                    <th className="px-4 py-3 text-left font-semibold">Use Case</th>
                    <th className="px-4 py-3 text-left font-semibold">Inspection Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">All-Wheel Steer</td>
                    <td className="px-4 py-3">All axles steer in coordination</td>
                    <td className="px-4 py-3">Tight jobsite maneuvering, minimum turning radius</td>
                    <td className="px-4 py-3">Verify all axle steering cylinders respond; check synchronization timing</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Crab Steering</td>
                    <td className="px-4 py-3">All axles steer in same direction</td>
                    <td className="px-4 py-3">Lateral repositioning without turning the crane</td>
                    <td className="px-4 py-3">Confirm parallel alignment of all axles; check for drift or uneven response</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Front-Axle Only</td>
                    <td className="px-4 py-3">Front 1&ndash;2 axles only</td>
                    <td className="px-4 py-3">Highway travel at speed</td>
                    <td className="px-4 py-3">Verify rear axle lockout engages; check front steering geometry</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Rear-Axle Steer</td>
                    <td className="px-4 py-3">Rear axles only</td>
                    <td className="px-4 py-3">Low-speed maneuvering around obstacles</td>
                    <td className="px-4 py-3">Confirm front axle lock; test rear cylinder response and return-to-center</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Independent Axle</td>
                    <td className="px-4 py-3">Operator selects individual axles</td>
                    <td className="px-4 py-3">Specialized positioning on confined sites</td>
                    <td className="px-4 py-3">Test each axle independently; verify selector switch accuracy and feedback</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Steering System Inspection Points</h3>

            <ul>
              <li><strong>Hydraulic steering cylinders:</strong> Inspect all cylinders on every axle for rod seal leaks, chrome pitting on cylinder rods, and proper stroke length. A cylinder that does not achieve full stroke will cause uneven tire wear and unpredictable steering response.</li>
              <li><strong>Steering mode selector:</strong> Cycle through every available mode and confirm the correct axles engage. Verify that the mode indicator on the carrier cab display matches the actual axle configuration.</li>
              <li><strong>Axle synchronization:</strong> In all-wheel steer and crab modes, all axles must turn at coordinated rates. Measure turning angles at each axle; variation exceeding 1.5 degrees from the commanded angle indicates hydraulic flow imbalance or sensor calibration drift.</li>
              <li><strong>Return-to-center:</strong> When the steering wheel is released, all engaged axles should return to the straight-ahead position. Incomplete return-to-center often indicates a failed centering spring, sticky proportional valve, or low accumulator precharge.</li>
              <li><strong>Tie rod ends and king pins:</strong> Inspect for excessive play. Maximum allowable play varies by manufacturer, but movement exceeding 1/8 inch at the tie rod end is generally cause for further evaluation.</li>
              <li><strong>Tire condition:</strong> Multi-axle AT cranes are extremely sensitive to tire condition. Uneven wear patterns across axles often indicate steering misalignment or a stuck axle that is not responding to steering commands.</li>
            </ul>

            <h2>Carrier Cab vs Operator Cab: Dual-Cab Inspection Requirements</h2>

            <p>
              All-terrain cranes are unique among mobile cranes in that they feature two completely independent operator stations. The carrier cab, located at the front of the vehicle, controls all road travel functions: engine, transmission, steering, braking, suspension, and road lighting. The operator cab (also called the superstructure cab or crane cab), mounted on the rotating superstructure, controls all crane functions: boom extension and elevation, hoist operations, swing, outrigger deployment, and load moment indication.
            </p>

            <h3>Carrier Cab Inspection</h3>

            <ul>
              <li><strong>Engine instrumentation:</strong> Verify all gauges&mdash;coolant temperature, oil pressure, transmission temperature, air pressure (for air brake systems), and fuel level&mdash;are functional and reading within normal ranges</li>
              <li><strong>Steering controls:</strong> Test the steering wheel for excessive free play; check power steering pump operation and fluid level</li>
              <li><strong>Brake system:</strong> Inspect service brakes, parking brake, and engine/exhaust brake. For air brake systems, verify governor cut-in/cut-out pressures, drain air tanks, and test low-air warning devices</li>
              <li><strong>Mirrors and cameras:</strong> AT cranes have limited visibility; verify all mirrors are intact and properly adjusted, and that any camera systems (rear-view, side-view) are operational</li>
              <li><strong>Lighting:</strong> Headlights, tail lights, brake lights, turn signals, hazard flashers, clearance lights, and any required convoy/escort lighting</li>
              <li><strong>Windshield and wipers:</strong> Check for cracks, delamination, and wiper function; AT crane carrier cabs often suffer stone chip damage due to low cab position relative to tire spray</li>
              <li><strong>Seat belt and ROPS/FOPS:</strong> Confirm seat belt function and attachment points; inspect cab structure for damage that could compromise rollover or falling object protection</li>
            </ul>

            <h3>Operator (Superstructure) Cab Inspection</h3>

            <ul>
              <li><strong>Load moment indicator (LMI):</strong> Verify the LMI system powers on, displays correct crane configuration (boom length, counterweight installed, outrigger position), and provides accurate capacity information. The LMI is the single most critical safety system on the crane.</li>
              <li><strong>Hoist controls:</strong> Test all hoist drums for smooth operation, proper line speed, and drum rotation indicators. Verify anti-two-block (A2B) devices are functional.</li>
              <li><strong>Boom controls:</strong> Test telescope, elevation, and (if equipped) luffing jib controls for smooth, proportional response</li>
              <li><strong>Swing system:</strong> Verify swing brake engagement and release, swing speed control, and swing lock pin operation</li>
              <li><strong>Outrigger controls:</strong> Many AT cranes allow outrigger deployment from the operator cab. Verify that outrigger position indicators are accurate and that interlocks prevent crane operation with outriggers improperly set.</li>
              <li><strong>Emergency systems:</strong> Test emergency stop buttons, emergency lowering valves, and any backup power systems</li>
              <li><strong>Cab leveling:</strong> Many AT crane operator cabs feature hydraulic leveling to maintain a level operating position when the superstructure is on uneven ground. Verify function and confirm level indication accuracy.</li>
            </ul>

            <h2>Road Travel Inspection Requirements</h2>

            <p>
              All-terrain cranes are designed for highway travel between jobsites, which means they must comply with DOT and FMCSA regulations in addition to crane-specific standards. Road travel inspection is effectively a commercial motor vehicle (CMV) pre-trip inspection combined with crane-specific transport configuration checks.
            </p>

            <h3>DOT Compliance Checks</h3>

            <ul>
              <li><strong>Vehicle registration and permits:</strong> AT cranes typically require oversize/overweight permits. Verify that current permits match the crane&apos;s actual travel configuration (axle weights, overall dimensions, route).</li>
              <li><strong>Lighting and reflectors:</strong> Federal Motor Vehicle Safety Standard (FMVSS) 108 requires specific lighting configurations for vehicles over 80 inches wide. Verify all clearance lights, side marker lights, and reflective markings are present and functional.</li>
              <li><strong>Braking system:</strong> FMCSA 49 CFR 393 requires that all axle brakes are operational. For AT cranes with air brakes, perform a full air brake check including governor operation, air tank drainage, brake adjustment measurement, and low-pressure warning verification.</li>
              <li><strong>Axle weight distribution:</strong> AT cranes must distribute weight across axles to meet bridge formula requirements. Counterweight removal and boom position directly affect axle loading. Verify that the travel configuration matches the permitted axle weights.</li>
              <li><strong>Tire condition and inflation:</strong> All tires must meet FMCSA 49 CFR 393.75 requirements: minimum 4/32-inch tread depth on steer axles, no exposed cords or belt material, no cuts exposing ply cord, and proper inflation per manufacturer specifications.</li>
            </ul>

            <h3>Travel Configuration Verification</h3>

            <p>
              Before road travel, the inspector must verify the crane is properly configured for transport:
            </p>

            <ul>
              <li>Boom fully retracted and secured in the boom rest</li>
              <li>Superstructure locked in the travel position (typically over the rear of the carrier)</li>
              <li>Counterweight reduced to travel configuration per manufacturer&apos;s specifications</li>
              <li>Outriggers fully retracted and travel pins installed</li>
              <li>Hook block secured to prevent swinging</li>
              <li>Suspension system set to road travel mode (unlocked)</li>
              <li>All loose equipment and rigging secured</li>
              <li>Escort/pilot vehicle arrangements confirmed if required by permit</li>
            </ul>

            <h2>Suspension Lockout Inspection</h2>

            <p>
              The hydropneumatic suspension system on an all-terrain crane serves a dual purpose that creates one of the most important inspection checkpoints on the machine. During road travel, the suspension must be active (unlocked) to absorb road irregularities, protect the structural frame from fatigue loading, and maintain tire contact for safe braking and steering. During lifting operations, the suspension must be completely locked out to prevent the crane from shifting, settling, or rocking under load.
            </p>

            <h3>Why Suspension Lockout Is Critical</h3>

            <p>
              When an AT crane lifts a load, the forces generated by the boom, counterweight, and suspended load are transferred through the superstructure, turntable bearing, and carrier frame to the outriggers or tires. If the suspension is not locked out, these forces can compress the suspension on one side of the carrier while extending it on the other, effectively creating a rocking motion that changes the crane&apos;s geometry. Even small geometry changes&mdash;as little as 0.5 degrees of carrier tilt&mdash;can increase the effective load radius and reduce the crane&apos;s rated capacity below the actual load being lifted.
            </p>

            <h3>Suspension Lockout Inspection Points</h3>

            <ul>
              <li><strong>Lockout activation:</strong> Verify that the suspension lockout system engages on all axles simultaneously when activated. On most AT cranes, lockout is controlled from the carrier cab via a switch or from the operator cab&apos;s outrigger control panel.</li>
              <li><strong>Indicator verification:</strong> Confirm that the suspension lockout indicator (typically a dashboard light or display message in both cabs) accurately reflects the actual lockout state. Compare the indicator to a physical inspection of the lockout cylinders or valves.</li>
              <li><strong>Hydraulic integrity:</strong> Inspect lockout cylinders and associated valving for leaks. A slow leak in a lockout cylinder can allow gradual suspension movement during a lift that may not be immediately apparent to the operator.</li>
              <li><strong>Interlock function:</strong> Many modern AT cranes include an interlock that prevents crane operation if the suspension is not locked out. Verify this interlock is functional and has not been bypassed.</li>
              <li><strong>Accumulator precharge:</strong> Hydropneumatic suspension systems use nitrogen-charged accumulators. Low precharge pressure can prevent full lockout engagement. Check accumulator pressures against manufacturer specifications.</li>
              <li><strong>Level verification:</strong> After lockout engagement, verify the carrier is level (or within manufacturer-specified tolerances) using an inclinometer or the crane&apos;s onboard leveling system.</li>
            </ul>

            <h2>Counterweight Configuration &amp; Inspection</h2>

            <p>
              All-terrain cranes use removable counterweight systems that allow the crane to operate at full rated capacity on the jobsite while meeting road weight limits during transport. A large AT crane may carry 100,000 to 250,000 pounds of counterweight during lifting operations but must reduce to 30,000&ndash;50,000 pounds (or remove counterweight entirely) for highway travel. This constant installation and removal cycle creates inspection requirements that do not exist on cranes with fixed counterweight.
            </p>

            <h3>Counterweight Installation Checks</h3>

            <ul>
              <li><strong>Mounting hardware:</strong> Inspect all counterweight mounting bolts, pins, and locking mechanisms. Torque values must meet manufacturer specifications. Missing or loose mounting hardware is a critical deficiency&mdash;counterweight separation during operation or travel is catastrophic.</li>
              <li><strong>Counterweight identification:</strong> Verify that each counterweight slab is clearly marked with its weight value and that the total installed counterweight matches the crane&apos;s LMI configuration. Incorrect counterweight input to the LMI will produce inaccurate capacity readings.</li>
              <li><strong>Stacking order:</strong> Counterweight slabs must be installed in the manufacturer-specified sequence. Incorrect stacking can alter the center of gravity and reduce structural pin engagement depth.</li>
              <li><strong>Contact surfaces:</strong> Inspect mating surfaces between counterweight slabs and between the lowest slab and the superstructure tray for corrosion, debris, or deformation that could prevent full seating.</li>
              <li><strong>Transport configuration documentation:</strong> Verify that the counterweight removal plan for road travel is documented and that the remaining travel counterweight matches the transport permit requirements.</li>
            </ul>

            <h3>Transport vs Lifting Configurations</h3>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                    <th className="px-4 py-3 text-left font-semibold">Transport Configuration</th>
                    <th className="px-4 py-3 text-left font-semibold">Lifting Configuration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Counterweight</td>
                    <td className="px-4 py-3">Reduced or removed per permit</td>
                    <td className="px-4 py-3">Full counterweight installed per load chart</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Suspension</td>
                    <td className="px-4 py-3">Active (unlocked) for road travel</td>
                    <td className="px-4 py-3">Locked out for stability</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Boom</td>
                    <td className="px-4 py-3">Fully retracted, cradled in boom rest</td>
                    <td className="px-4 py-3">Extended and elevated per lift plan</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Outriggers</td>
                    <td className="px-4 py-3">Retracted with travel pins</td>
                    <td className="px-4 py-3">Extended and set on pads/mats</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Superstructure</td>
                    <td className="px-4 py-3">Locked over rear carrier</td>
                    <td className="px-4 py-3">Free to swing 360 degrees</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Steering Mode</td>
                    <td className="px-4 py-3">Front-axle only (highway)</td>
                    <td className="px-4 py-3">All-wheel or crab as needed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>ASME B30.5 Compliance for AT Cranes</h2>

            <p>
              ASME B30.5 &quot;Mobile and Locomotive Cranes&quot; is the primary consensus standard governing all-terrain crane inspection, maintenance, and operation in the United States. While OSHA 29 CFR 1926 Subpart CC establishes the legal requirements for crane use on construction sites, Subpart CC directly incorporates ASME B30.5 by reference for inspection criteria, and most third-party inspection firms use B30.5 as the baseline for their inspection protocols.
            </p>

            <h3>Key ASME B30.5 Requirements for AT Cranes</h3>

            <ul>
              <li><strong>Frequent inspection (daily/monthly):</strong> B30.5-5-2.1.2 requires daily visual inspection of items such as control mechanisms, safety devices, air/hydraulic systems for leaks, hooks, wire rope reeving, and tire pressure. Monthly inspections add running rope condition evaluation and functional testing of brakes and clutches.</li>
              <li><strong>Periodic inspection (annual/comprehensive):</strong> B30.5-5-2.1.3 requires thorough inspection at intervals defined by severity of service, but not less than annually. This includes structural members for deformation, cracks, and corrosion; boom sections for wear at slide pads and telescope cylinder attachment points; turntable bearing for excessive play; and all safety devices for proper calibration and function.</li>
              <li><strong>Load testing:</strong> B30.5-5-2.2.2 addresses load testing after repairs or modifications to load-sustaining components. AT cranes that have undergone boom repairs, turntable bearing replacement, or structural modifications to the carrier frame require load testing before return to service.</li>
              <li><strong>Wire rope inspection and replacement:</strong> B30.5-5-2.4 provides detailed wire rope inspection criteria including broken wire thresholds, diameter reduction limits, and evidence of heat damage or corrosion. AT crane hoist ropes, boom telescope ropes, and pendant lines all fall under these requirements.</li>
              <li><strong>Documentation:</strong> B30.5-5-2.1.5 requires that periodic inspection records be maintained and available for review. Records must include the date of inspection, identification of the crane, items inspected, results of the inspection, and the name and signature of the inspector.</li>
            </ul>

            <h3>AT Crane-Specific B30.5 Considerations</h3>

            <p>
              While B30.5 applies broadly to all mobile cranes, several provisions are particularly relevant to AT cranes:
            </p>

            <ul>
              <li>Multi-section telescopic boom inspection requires checking each section&apos;s wear pads, internal guide shoes, telescope cylinder pins, and section interlock mechanisms</li>
              <li>Outrigger inspection must include beam extension cylinders, jack cylinders, float pads, and all outrigger position sensors that feed the LMI system</li>
              <li>The turntable bearing on large AT cranes is a single point of structural connection between the superstructure and carrier; bolt torque, raceway wear, and bearing clearance measurements are critical periodic inspection items</li>
              <li>Counterweight attachment hardware must be inspected per B30.5 structural requirements, with particular attention to pin wear and tray mounting bolt torque</li>
            </ul>

            <h2>AT Crane-Specific Deficiency Table</h2>

            <p>
              The following table summarizes common deficiencies found during all-terrain crane inspections, their associated risk levels, and the recommended corrective actions.
            </p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Deficiency</th>
                    <th className="px-4 py-3 text-left font-semibold">Risk Level</th>
                    <th className="px-4 py-3 text-left font-semibold">Corrective Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Steering axle not responding in all-wheel steer mode</td>
                    <td className="px-4 py-3"><span className="text-red-600 font-semibold">Critical</span></td>
                    <td className="px-4 py-3">Remove from service; diagnose hydraulic circuit and steering cylinder; repair and retest all modes before return to service</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Suspension lockout fails to engage on one or more axles</td>
                    <td className="px-4 py-3"><span className="text-red-600 font-semibold">Critical</span></td>
                    <td className="px-4 py-3">Do not perform lifts; inspect lockout cylinders, valves, and accumulator precharge; repair and verify interlock function</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Counterweight mounting bolt torque below specification</td>
                    <td className="px-4 py-3"><span className="text-red-600 font-semibold">Critical</span></td>
                    <td className="px-4 py-3">Re-torque all mounting hardware to manufacturer specification; inspect bolt threads and tray contact surfaces for damage</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">LMI counterweight input does not match installed counterweight</td>
                    <td className="px-4 py-3"><span className="text-red-600 font-semibold">Critical</span></td>
                    <td className="px-4 py-3">Correct LMI configuration immediately; verify total counterweight by slab count and markings; recalibrate LMI if persistent</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Carrier cab brake warning light active</td>
                    <td className="px-4 py-3"><span className="text-orange-600 font-semibold">High</span></td>
                    <td className="px-4 py-3">Do not travel on public roads; diagnose brake system (air pressure, pad wear, ABS faults); repair before highway operation</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Excessive play in turntable bearing (measured &gt; manufacturer limit)</td>
                    <td className="px-4 py-3"><span className="text-orange-600 font-semibold">High</span></td>
                    <td className="px-4 py-3">Reduce rated capacity per manufacturer guidance; schedule bearing replacement; monitor and document progression</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Boom telescope wear pads worn beyond replacement threshold</td>
                    <td className="px-4 py-3"><span className="text-orange-600 font-semibold">High</span></td>
                    <td className="px-4 py-3">Replace wear pads; inspect boom section interior for scoring or galling; verify telescope cylinder alignment after pad replacement</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">DOT lighting deficiencies (clearance lights, markers inoperative)</td>
                    <td className="px-4 py-3"><span className="text-yellow-600 font-semibold">Moderate</span></td>
                    <td className="px-4 py-3">Repair or replace inoperative lights before highway travel; lifting operations may continue if lighting is not a crane safety issue</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Uneven tire wear pattern across axles</td>
                    <td className="px-4 py-3"><span className="text-yellow-600 font-semibold">Moderate</span></td>
                    <td className="px-4 py-3">Investigate root cause (steering misalignment, stuck axle, tire pressure); correct alignment and replace tires below tread minimums</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3">Operator cab leveling system slow to respond</td>
                    <td className="px-4 py-3"><span className="text-yellow-600 font-semibold">Moderate</span></td>
                    <td className="px-4 py-3">Check hydraulic fluid level and leveling cylinder condition; service or repair; verify level accuracy with external inclinometer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-3">Simplify AT Crane Inspections</h3>
              <p className="text-white/90 mb-6">CraneCheck offers all-terrain crane inspection templates covering dual-cab systems, multi-axle steering, suspension lockout verification, and counterweight tracking — all with built-in ASME B30.5 compliance.</p>
              <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
            </div>

          </div>
        </article>
        <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="all-terrain-crane-inspection-guide" /></div>
        <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
