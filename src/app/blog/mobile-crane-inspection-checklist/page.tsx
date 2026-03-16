import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Crane Inspection Checklist: Complete Field Guide",
  description:
    "Complete mobile crane pre-operation inspection checklist covering all-terrain, rough-terrain, and truck-mounted cranes. Covers hydraulic systems, outriggers, LMI, wire rope, and OSHA compliance requirements for daily inspections.",
};

export default function MobileCraneInspectionChecklistPage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mobile Crane Inspection Checklist: Complete Field Guide",
  "description": "Complete mobile crane pre-operation inspection checklist covering all-terrain, rough-terrain, and truck-mounted cranes. Covers hydraulic systems, outriggers, LMI, wire rope, and OSHA compliance requirements for daily inspections.",
  "datePublished": "2026-03-07",
  "dateModified": "2026-03-07",
  "author": {
    "@type": "Organization",
    "name": "CraneCheck",
    "url": "https://cranecheck.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CraneCheck",
    "url": "https://cranecheck.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cranecheck.com/blog/mobile-crane-inspection-checklist"
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
      "name": "Mobile Crane Inspection Checklist: Complete Field Guide",
      "item": "https://cranecheck.com/blog/mobile-crane-inspection-checklist"
    }
  ]
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Checklists
              </span>
              <span className="text-xs text-gray-400">March 7, 2026</span>
              <span className="text-xs text-gray-400">11 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Mobile Crane Inspection Checklist: Complete Field Guide
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              A comprehensive pre-operation inspection checklist for all-terrain,
              rough-terrain, and truck-mounted mobile cranes. Covers hydraulic
              systems, outriggers, load moment indicators, wire rope, and all
              OSHA-required inspection items for daily compliance.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <p>
              Mobile cranes — whether all-terrain, rough-terrain, truck-mounted,
              or crawler-mounted — are complex machines with hundreds of
              components that must function correctly before every lift. A
              single overlooked deficiency can result in equipment failure,
              property damage, serious injury, or death. That's why OSHA
              mandates comprehensive pre-shift inspections under 29 CFR
              1926.1412(d).
            </p>
            <p>
              This checklist provides a systematic approach to mobile crane
              pre-operation inspections. It's organized by major system to ensure
              nothing gets missed, whether you're operating a 40-ton
              all-terrain crane on a construction site or a 500-ton rough-terrain
              crane for heavy industrial work. Every item listed here is either
              required by OSHA or represents a critical safety check that
              experienced operators know to perform.
            </p>

            <h2>Pre-Inspection Safety Requirements</h2>
            <p>
              Before beginning the physical inspection, establish proper safety
              protocols:
            </p>
            <ul>
              <li>
                Engine off, parking brake set, and key removed from the ignition
              </li>
              <li>
                All hydraulic systems depressurized according to manufacturer
                procedures
              </li>
              <li>
                Boom lowered to the travel position or adequately supported if
                maintenance requires boom elevation
              </li>
              <li>
                Load block secured or removed to prevent swing during
                inspection
              </li>
              <li>
                Personal protective equipment (hard hat, safety glasses,
                high-visibility vest) worn throughout inspection
              </li>
              <li>
                Adequate lighting provided if inspection occurs before dawn or
                after dusk
              </li>
            </ul>
            <p>
              Never perform an inspection while the crane is running unless the
              specific procedure requires engine operation (such as testing
              hydraulic function). If engine operation is necessary, ensure
              adequate clearance from rotating components and never place body
              parts near pinch points or moving machinery.
            </p>

            <h2>Visual Walk-Around Inspection</h2>
            <p>
              Begin every mobile crane inspection with a complete walk-around of
              the entire machine. This initial survey helps identify obvious
              problems and provides an overview of the equipment's general
              condition before diving into system-specific checks.
            </p>

            <h3>Structural Components</h3>
            <ul>
              <li>
                <strong>Boom sections:</strong> Check all boom sections for
                cracks, dents, corrosion, or deformation. Pay special attention
                to weld seams, boom heel pins, and telescopic sections. Look for
                hydraulic fluid leaks around extension cylinders.
              </li>
              <li>
                <strong>Upper frame:</strong> Inspect the turntable bearing,
                counterweight, and upper frame for structural damage, loose
                bolts, or cracked welds. Check the swing motor and gearbox for
                leaks.
              </li>
              <li>
                <strong>Lower frame:</strong> Examine the carrier frame, axles,
                and suspension components for damage. Look for stress cracks
                near outrigger mounting points, which are high-load areas.
              </li>
              <li>
                <strong>Cab structure:</strong> Verify that the operator's cab
                is securely mounted with no loose bolts or cracked glass. Check
                that doors operate properly and safety glass is intact.
              </li>
            </ul>

            <h3>Ground Conditions and Setup Area</h3>
            <ul>
              <li>
                Ground bearing capacity adequate for crane size and planned
                loads
              </li>
              <li>
                Level setup area within manufacturer's specified grade
                limitations (typically 1% for mobile cranes)
              </li>
              <li>
                No underground utilities, voids, or soft spots in the setup
                area
              </li>
              <li>
                Adequate clearance from power lines, structures, and other
                hazards
              </li>
              <li>
                Proper crane positioning for planned lifts without exceeding
                load chart ratings
              </li>
            </ul>

            <h2>Outrigger and Stabilizer System</h2>
            <p>
              The outrigger system is critical for mobile crane stability. Most
              mobile crane accidents involve tip-overs caused by inadequate
              outrigger setup or outrigger system failure. Inspect each
              outrigger float, beam, and cylinder thoroughly.
            </p>

            <h3>Outrigger Floats and Pads</h3>
            <ul>
              <li>
                <strong>Float condition:</strong> Check each outrigger float for
                cracks, especially around the cylinder attachment point and pad
                edges. Bent or cracked floats must be replaced before operation.
              </li>
              <li>
                <strong>Float size:</strong> Verify that float size matches
                manufacturer specifications for the crane model and ground
                conditions. Oversized floats may be required for soft ground.
              </li>
              <li>
                <strong>Cribbing and blocking:</strong> Ensure adequate cribbing
                is available if required by ground conditions. Cribbing must be
                hardwood, engineered lumber, or manufactured crib blocks rated
                for the load.
              </li>
              <li>
                <strong>Float attachment:</strong> Check that floats are
                properly attached to outrigger beams with all pins and hardware
                secure.
              </li>
            </ul>

            <h3>Outrigger Beams and Cylinders</h3>
            <ul>
              <li>
                <strong>Beam extension:</strong> Inspect outrigger beams for
                straight extension and proper retraction. Bent or binding beams
                indicate internal damage or misalignment.
              </li>
              <li>
                <strong>Cylinder condition:</strong> Check outrigger cylinders
                for fluid leaks, bent rods, or damaged seals. Look for scratches
                or scoring on cylinder rods that can damage seals.
              </li>
              <li>
                <strong>Hydraulic lines:</strong> Inspect all hydraulic lines
                and fittings for leaks, abrasion, or damage. Pay attention to
                lines that flex during outrigger operation.
              </li>
              <li>
                <strong>Relief valves:</strong> Verify that outrigger relief
                valves are set to manufacturer specifications. These prevent
                over-pressurization during setup.
              </li>
            </ul>

            <h3>Outrigger Operation Test</h3>
            <p>
              After visual inspection, test outrigger operation with the engine
              running:
            </p>
            <ul>
              <li>
                Extend each outrigger beam to full extension and verify smooth
                operation without binding or unusual noise
              </li>
              <li>
                Set outrigger floats to full load-carrying position and confirm
                crane lifts evenly off all tires
              </li>
              <li>
                Test outrigger float pressure relief if equipped — floats
                should not sink under load once properly set
              </li>
              <li>
                Verify level bubble indicators show crane is level within
                manufacturer specifications (typically ±1 degree)
              </li>
            </ul>

            <h2>Hydraulic System Inspection</h2>
            <p>
              Mobile cranes rely entirely on hydraulic power for boom operation,
              load handling, and outrigger deployment. Hydraulic system failure
              can cause immediate loss of load control. A thorough hydraulic
              inspection is essential for safe operation.
            </p>

            <h3>Hydraulic Fluid and Reservoir</h3>
            <ul>
              <li>
                <strong>Fluid level:</strong> Check hydraulic fluid level with
                all cylinders retracted and boom lowered. Fluid should be
                between minimum and maximum marks on the sight gauge.
              </li>
              <li>
                <strong>Fluid condition:</strong> Inspect hydraulic fluid for
                contamination, water, or burnt smell. Dark or milky fluid
                indicates contamination that can damage system components.
              </li>
              <li>
                <strong>Filter condition:</strong> Check hydraulic filter
                indicators if equipped. Replace filters when indicator shows red
                or according to manufacturer service intervals.
              </li>
              <li>
                <strong>Reservoir condition:</strong> Inspect the hydraulic
                reservoir for damage, loose fittings, or signs of overheating.
                Check the breather cap for proper operation.
              </li>
            </ul>

            <h3>Hydraulic Pumps and Motors</h3>
            <ul>
              <li>
                <strong>Main hydraulic pump:</strong> Check for unusual noise,
                vibration, or overheating during operation. Pump noise often
                indicates internal wear or contamination.
              </li>
              <li>
                <strong>Auxiliary pumps:</strong> If equipped with pilot
                hydraulics or auxiliary circuits, test all pumps for proper
                operation and pressure.
              </li>
              <li>
                <strong>Hydraulic motors:</strong> Test swing motor, winch
                motors, and any auxiliary hydraulic motors for smooth operation
                and proper speed control.
              </li>
              <li>
                <strong>Cooling system:</strong> Verify hydraulic oil cooler is
                clean and free of debris. Overheating damages hydraulic
                components and reduces system life.
              </li>
            </ul>

            <h3>Hydraulic Cylinders and Lines</h3>
            <ul>
              <li>
                <strong>Boom lift cylinders:</strong> Inspect boom lift
                cylinders for leaks, bent rods, or damaged seals. Test cylinder
                drift with boom raised — excessive drift indicates worn seals.
              </li>
              <li>
                <strong>Boom extend cylinders:</strong> Check telescopic boom
                cylinders for proper extension and retraction. Listen for
                unusual noises that may indicate internal damage.
              </li>
              <li>
                <strong>Hydraulic lines:</strong> Inspect all hydraulic lines
                for abrasion, cuts, or bulging. Pay special attention to lines
                that move during crane operation.
              </li>
              <li>
                <strong>Fittings and connections:</strong> Check all hydraulic
                fittings for leaks or loose connections. Even small leaks can
                lead to system failure and create slip hazards.
              </li>
            </ul>

            <h2>Load Moment Indicator (LMI) System</h2>
            <p>
              The Load Moment Indicator is a critical safety system that
              prevents crane overload by monitoring boom angle, boom length, and
              load weight in real-time. OSHA requires LMI systems on most mobile
              cranes, and proper testing is mandatory during pre-operation
              inspection.
            </p>

            <h3>LMI Display and Controls</h3>
            <ul>
              <li>
                <strong>Display function:</strong> Verify LMI display shows all
                required information clearly — boom angle, boom length, rated
                load, and actual load percentage. Replace cracked or dim
                displays.
              </li>
              <li>
                <strong>Audio alarms:</strong> Test LMI audio warnings at 90%
                and 100% of rated capacity. Alarms must be audible to the
                operator over engine and work noise.
              </li>
              <li>
                <strong>Visual warnings:</strong> Check LMI warning lights for
                proper operation. Most systems use amber warnings at 90%
                capacity and red warnings at 100%.
              </li>
              <li>
                <strong>Function lockouts:</strong> Verify that LMI prevents
                boom lowering, boom extension, and increased load when at 100%
                capacity. The system must allow only load-reducing movements.
              </li>
            </ul>

            <h3>LMI Calibration and Testing</h3>
            <ul>
              <li>
                <strong>Load block test:</strong> With the load block freely
                suspended, verify LMI shows the correct block weight. Most
                systems should read within ±3% of actual block weight.
              </li>
              <li>
                <strong>Boom angle calibration:</strong> Check boom angle
                readings against a physical inclinometer at multiple boom
                positions. Accuracy should be within ±1 degree.
              </li>
              <li>
                <strong>Boom length verification:</strong> For telescopic
                cranes, verify boom length readings match actual extended
                length. Check calibration at minimum, maximum, and intermediate
                lengths.
              </li>
              <li>
                <strong>Load chart verification:</strong> Confirm LMI uses the
                correct load chart for the current crane configuration,
                including boom length, jib installation, and counterweight
                configuration.
              </li>
            </ul>

            <p>
              If the LMI system fails any test, the crane must be removed from
              service until repairs are completed by a qualified technician. Never
              bypass or override LMI safety systems for any reason.
            </p>

            <h2>Wire Rope and Rigging Hardware</h2>
            <p>
              Wire rope failure is a leading cause of crane accidents. OSHA
              requires detailed wire rope inspection before each use, with
              specific criteria for determining when rope must be replaced. This
              inspection must cover the entire length of rope, not just the
              visible portions.
            </p>

            <h3>Main Hoist Wire Rope</h3>
            <ul>
              <li>
                <strong>Broken wires:</strong> Count broken wires in each rope
                lay (one complete wrap around the rope). ASME B30.5 requires
                replacement when more than 6 randomly distributed broken wires
                are found in one lay, or 3 broken wires in one strand in one
                lay.
              </li>
              <li>
                <strong>Rope diameter:</strong> Measure rope diameter at
                multiple points with calipers. Replace rope when diameter
                reduction exceeds 7% of nominal diameter due to wear or
                corrosion.
              </li>
              <li>
                <strong>Corrosion:</strong> Inspect for external and internal
                corrosion. Internal corrosion may not be visible and requires
                opening rope lays for inspection. Pitting corrosion is
                particularly dangerous.
              </li>
              <li>
                <strong>Kinking and crushing:</strong> Look for kinked,
                bird-caged, or crushed areas. These indicate overloading or
                improper handling and require immediate rope replacement.
              </li>
              <li>
                <strong>Lubrication:</strong> Verify rope is properly
                lubricated. Dry rope wears quickly and is more susceptible to
                corrosion. Fresh lubrication should be visible on rope surface.
              </li>
            </ul>

            <h3>Load Block and Hook Inspection</h3>
            <ul>
              <li>
                <strong>Hook condition:</strong> Inspect hook for cracks using
                magnetic particle or dye penetrant testing if required. Check
                for throat opening increase — replace hook if throat opening
                has increased 15% or twist exceeds 10 degrees.
              </li>
              <li>
                <strong>Hook latch operation:</strong> Test hook latch for
                proper operation and spring return. Latch must close completely
                and lock securely.
              </li>
              <li>
                <strong>Load block sheaves:</strong> Check load block sheaves
                for proper rope seating, adequate lubrication, and smooth
                rotation. Look for rope groove wear or damage.
              </li>
              <li>
                <strong>Load block bearing:</strong> Verify load block swivels
                freely on its bearing. Binding or rough rotation indicates
                bearing problems.
              </li>
            </ul>

            <h3>Boom Head and Auxiliary Winch</h3>
            <ul>
              <li>
                <strong>Boom head sheaves:</strong> Inspect boom head sheaves
                for rope groove wear, cracked side plates, or damaged bearings.
                Sheaves must turn freely and maintain proper rope alignment.
              </li>
              <li>
                <strong>Auxiliary winch rope:</strong> If equipped with an
                auxiliary winch, inspect that wire rope using the same criteria
                as main hoist rope. Auxiliary winches often use smaller
                diameter rope that wears faster.
              </li>
              <li>
                <strong>Rope reeving:</strong> Verify wire rope is reeved
                according to manufacturer specifications. Improper reeving
                reduces capacity and can cause rope damage.
              </li>
            </ul>

            <p>
              For a detailed guide on wire rope inspection criteria and
              replacement standards, see our comprehensive article on{" "}
              <Link href="/blog/crane-wire-rope-inspection-guide">
                crane wire rope inspection
              </Link>
              .
            </p>

            <h2>Engine and Power Plant</h2>
            <p>
              Mobile cranes typically use diesel engines to power both the
              carrier and the hydraulic systems. Engine problems can leave a
              crane stranded on site or cause hydraulic system failure during
              critical lifts.
            </p>

            <h3>Engine Operation and Performance</h3>
            <ul>
              <li>
                <strong>Starting system:</strong> Engine should start readily
                without excessive cranking or visible exhaust smoke. Check that
                all warning lights function during startup.
              </li>
              <li>
                <strong>Idle quality:</strong> Engine should idle smoothly
                without irregular operation or stalling. Rough idle may indicate
                fuel system or engine problems.
              </li>
              <li>
                <strong>Operating temperature:</strong> Verify engine reaches
                normal operating temperature and cooling system maintains proper
                temperature under load.
              </li>
              <li>
                <strong>Oil pressure:</strong> Check engine oil pressure at
                idle and operating RPM. Low oil pressure can cause catastrophic
                engine damage.
              </li>
              <li>
                <strong>Exhaust system:</strong> Inspect exhaust system for
                leaks, damage, or excessive smoke production during operation.
              </li>
            </ul>

            <h3>Cooling and Filtration Systems</h3>
            <ul>
              <li>
                <strong>Radiator condition:</strong> Check radiator for leaks,
                damage, or debris accumulation. Clean radiator fins regularly
                to maintain cooling efficiency.
              </li>
              <li>
                <strong>Coolant level:</strong> Verify coolant level in both
                radiator and overflow tank. Check coolant condition —
                contaminated coolant should be replaced.
              </li>
              <li>
                <strong>Air filter:</strong> Inspect air filter for
                contamination or damage. Dirty air filters reduce engine power
                and increase fuel consumption.
              </li>
              <li>
                <strong>Fuel system:</strong> Check fuel level and fuel quality.
                Look for water or contamination in fuel tank. Inspect fuel
                lines for leaks or damage.
              </li>
            </ul>

            <h2>Control Systems and Safety Devices</h2>
            <p>
              Modern mobile cranes incorporate multiple safety systems and
              control mechanisms that must function properly for safe operation.
              Test all controls and safety systems during pre-operation
              inspection.
            </p>

            <h3>Operator Controls</h3>
            <ul>
              <li>
                <strong>Joystick operation:</strong> Test all hydraulic function
                joysticks for smooth operation, proper return to neutral, and
                correct response direction.
              </li>
              <li>
                <strong>Travel controls:</strong> If equipped with operator
                travel controls, test steering, transmission, and brake
                operation from the operator's station.
              </li>
              <li>
                <strong>Winch controls:</strong> Test main winch and auxiliary
                winch controls for proper operation, including load lowering and
                free-fall functions if equipped.
              </li>
              <li>
                <strong>Emergency stops:</strong> Test all emergency stop
                buttons and ensure they immediately stop all crane functions
                when activated.
              </li>
            </ul>

            <h3>Safety and Warning Systems</h3>
            <ul>
              <li>
                <strong>Anti-two-block system:</strong> Test anti-two-block
                protection by raising load block to the boom head. System must
                stop hoist function before contact occurs.
              </li>
              <li>
                <strong>Boom angle indicator:</strong> Verify boom angle
                indicator accuracy against a calibrated inclinometer at multiple
                boom positions.
              </li>
              <li>
                <strong>Warning beepers:</strong> Test travel warning beepers,
                backup alarms, and any other audible warning devices for proper
                operation and adequate volume.
              </li>
              <li>
                <strong>Work lights:</strong> Check all work lights, warning
                lights, and navigation lights for proper operation. Replace
                burned-out bulbs immediately.
              </li>
            </ul>

            <h2>Carrier and Travel Systems</h2>
            <p>
              Mobile cranes must be capable of safe travel to and from job
              sites. Inspect all carrier systems that affect transportation
              safety and on-site mobility.
            </p>

            <h3>Tires and Wheels</h3>
            <ul>
              <li>
                <strong>Tire condition:</strong> Inspect all tires for cuts,
                bulges, uneven wear, or foreign objects. Check tire tread depth
                and sidewall condition.
              </li>
              <li>
                <strong>Tire pressure:</strong> Verify all tires are inflated
                to manufacturer specifications. Under-inflated tires reduce
                crane stability and increase tire wear.
              </li>
              <li>
                <strong>Wheel mounting:</strong> Check that all wheels are
                properly mounted with correct lug nut torque. Look for loose or
                missing lug nuts.
              </li>
              <li>
                <strong>Wheel bearings:</strong> Check for excessive wheel
                bearing play or noise during operation. Worn bearings can cause
                wheel separation.
              </li>
            </ul>

            <h3>Steering and Braking Systems</h3>
            <ul>
              <li>
                <strong>Steering operation:</strong> Test steering for proper
                operation in all steering modes (front, rear, all-wheel, crab).
                Steering should be responsive without excessive play.
              </li>
              <li>
                <strong>Service brakes:</strong> Test service brakes for proper
                operation and adequate stopping power. Brake pedal should be
                firm without excessive travel.
              </li>
              <li>
                <strong>Parking brake:</strong> Verify parking brake holds crane
                securely on maximum grade the crane will encounter. Test
                parking brake warning indicators.
              </li>
              <li>
                <strong>Air brakes:</strong> If equipped with air brakes, check
                air pressure, air dryer operation, and emergency brake function.
                Low air pressure warnings must activate properly.
              </li>
            </ul>

            <h2>Documentation and Record Keeping</h2>
            <p>
              OSHA requires documentation of daily crane inspections under 29
              CFR 1926.1412(d). While the standard does not mandate a specific
              form, written documentation is the only practical way to prove
              compliance during an audit.
            </p>

            <h3>Required Documentation Elements</h3>
            <ul>
              <li>
                Date and time of inspection
              </li>
              <li>
                Crane identification (serial number, fleet number, or other
                unique identifier)
              </li>
              <li>
                Name and signature of competent person performing inspection
              </li>
              <li>
                List of all items inspected with pass/fail status
              </li>
              <li>
                Description of any deficiencies found and corrective action
                taken
              </li>
              <li>
                Confirmation that crane is safe for operation or out-of-service
                status if deficiencies were found
              </li>
            </ul>

            <h3>Digital Inspection Advantages</h3>
            <p>
              Many contractors are moving from paper inspection forms to digital
              inspection software for several compelling reasons:
            </p>
            <ul>
              <li>
                <strong>Standardization:</strong> Digital checklists ensure the
                same inspection items are checked on every crane, every day,
                eliminating the variability that comes with handwritten forms.
              </li>
              <li>
                <strong>Photo documentation:</strong> Digital systems allow
                photos to be attached directly to inspection items, providing
                visual evidence of equipment condition.
              </li>
              <li>
                <strong>Automatic scheduling:</strong> Software can track
                inspection schedules and send reminders for monthly and annual
                inspections, preventing missed deadlines.
              </li>
              <li>
                <strong>Instant reports:</strong> Digital systems generate
                formatted inspection reports instantly, ready for OSHA auditors
                or insurance inspections.
              </li>
              <li>
                <strong>Searchable records:</strong> Digital records can be
                searched by date, crane, inspector, or deficiency type,
                something impossible with paper files.
              </li>
              <li>
                <strong>Weather resistance:</strong> Digital records don't get
                lost in the rain, blown away by wind, or damaged by hydraulic
                fluid spills.
              </li>
            </ul>

            <p>
              For more information on the advantages of digital inspection
              systems, see our comparison of{" "}
              <Link href="/blog/crane-inspection-software-vs-paper">
                crane inspection software vs paper logs
              </Link>
              .
            </p>

            <h2>Common Inspection Mistakes to Avoid</h2>
            <p>
              Even experienced operators and inspectors can fall into common
              traps that compromise inspection effectiveness:
            </p>

            <ul>
              <li>
                <strong>Rushing the inspection:</strong> Pre-operation
                inspections take time. Allow adequate time for a thorough
                inspection rather than rushing to start work.
              </li>
              <li>
                <strong>Skipping difficult-to-reach areas:</strong> Components
                that are hard to access often receive inadequate inspection.
                Use proper lighting and access equipment to inspect all areas.
              </li>
              <li>
                <strong>Ignoring minor deficiencies:</strong> Small problems
                often become major failures. Address minor issues promptly
                before they compromise safety.
              </li>
              <li>
                <strong>Inadequate documentation:</strong> Vague inspection
                records like "OK" or "checked" provide no useful information.
                Document what you actually inspected and what you found.
              </li>
              <li>
                <strong>Operating with known deficiencies:</strong> Never
                operate a crane with known safety-related deficiencies, even if
                they seem minor. Remove the crane from service until repairs
                are completed.
              </li>
            </ul>

            <h2>When to Take Equipment Out of Service</h2>
            <p>
              Any deficiency that affects crane safety must result in
              immediately taking the equipment out of service. This includes:
            </p>

            <ul>
              <li>
                LMI system malfunction or inaccurate readings
              </li>
              <li>
                Wire rope that exceeds replacement criteria
              </li>
              <li>
                Hydraulic system leaks that affect operation
              </li>
              <li>
                Structural damage to boom, frame, or outrigger components
              </li>
              <li>
                Brake system problems that affect stopping ability
              </li>
              <li>
                Any safety system malfunction (anti-two-block, warning alarms,
                etc.)
              </li>
              <li>
                Control system problems that affect operator ability to safely
                control the crane
              </li>
            </ul>

            <p>
              Equipment taken out of service must be clearly tagged and secured
              to prevent unauthorized use. Only a qualified person may return
              equipment to service after verifying that all deficiencies have
              been corrected.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                Mobile crane pre-operation inspections are required by OSHA
                before every shift and must be documented by a competent person.
              </li>
              <li>
                Systematic inspection of outriggers, hydraulics, LMI systems,
                wire rope, and carrier components is essential for safe
                operation.
              </li>
              <li>
                LMI systems must be tested for accuracy and proper alarm
                function — never bypass or override these safety systems.
              </li>
              <li>
                Wire rope inspection requires checking the entire length for
                broken wires, diameter reduction, corrosion, and other damage
                according to ASME B30.5 standards.
              </li>
              <li>
                Digital inspection software provides significant advantages over
                paper forms for documentation, standardization, and audit
                compliance.
              </li>
              <li>
                Any safety-related deficiency must result in immediately taking
                the crane out of service until repairs are completed by
                qualified personnel.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Streamline Your Mobile Crane Inspections
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                CraneCheck provides digital inspection checklists designed
                specifically for mobile cranes. Pre-loaded with all OSHA
                requirements, photo documentation, and instant compliance
                reports. Start your free trial today.
              </p>
              <a
                href="/pricing"
                className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4"
              >
                View Pricing
              </a>
              <a
                href="/demo"
                className="inline-block border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                Request Demo
              </a>
            </div>

            {/* Related Posts */}
            <div className="not-prose mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-navy mb-6">
                Related Articles
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/blog/daily-crane-inspection-checklist"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Checklists</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Daily Crane Inspection Checklist
                  </h3>
                </Link>
                <Link
                  href="/blog/crane-wire-rope-inspection-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Safety</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Crane Wire Rope Inspection Guide
                  </h3>
                </Link>
                <Link
                  href="/blog/osha-crane-inspection-requirements"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">
                    OSHA Crane Inspection Requirements
                  </h3>
                </Link>
                <Link
                  href="/blog/crane-inspection-software-vs-paper"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Technology</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Crane Inspection Software vs Paper Logs
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}