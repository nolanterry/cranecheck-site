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
  title: "Crane Boom Inspection Guide: Telescopic & Lattice Boom Procedures, Cracks & ASME B30.5",
  description: "Complete guide to crane boom inspection procedures for telescopic and lattice booms. Learn crack detection, pin wear assessment, structural integrity checks, and ASME B30.5 compliance requirements.",
  alternates: { canonical: "/blog/crane-boom-inspection-guide" },
};

export default function CraneBoomInspectionGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Boom Inspection Guide: Telescopic & Lattice Boom Procedures, Cracks & ASME B30.5",
    "description": "Complete guide to crane boom inspection procedures for telescopic and lattice booms. Learn crack detection, pin wear assessment, structural integrity checks, and ASME B30.5 compliance requirements.",
    "datePublished": "2026-04-04",
    "dateModified": "2026-04-04",
    "author": {
      "@type": "Organization",
      "name": "CraneCheck",
      "url": "https://cranecheck.co"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CraneCheck",
      "url": "https://cranecheck.co"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cranecheck.co/blog/crane-boom-inspection-guide"
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
        "name": "Crane Boom Inspection Guide",
        "item": "https://cranecheck.co/blog/crane-boom-inspection-guide"
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
                Inspection
              </span>
              <span className="text-xs text-gray-400">April 4, 2026</span>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Boom Inspection Guide: Telescopic &amp; Lattice Boom Procedures, Cracks &amp; ASME B30.5
            </h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">
              A comprehensive guide to crane boom inspection procedures covering
              telescopic and lattice boom configurations. Learn how to identify
              cracks, assess pin wear, evaluate structural integrity, and meet
              ASME B30.5 compliance requirements for safe crane operations.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              The crane boom is arguably the most critical structural component on any mobile or crawler crane.
              Whether it is a telescopic boom on a hydraulic crane or a lattice boom on a crawler, the boom
              bears the full suspended load plus its own weight, creating enormous stresses at every connection
              point, weld joint, and bearing surface. A failure in the boom structure can result in catastrophic
              collapse, fatalities, and millions of dollars in damages &ndash; making thorough boom inspection
              one of the most important responsibilities for any crane inspector or operator.
            </p>

            <p>
              ASME B30.5 &ndash; Mobile and Locomotive Cranes &ndash; establishes the baseline requirements
              for boom inspection as part of overall crane inspection programs. Combined with OSHA 29 CFR
              1926.1412, these standards define what must be inspected, how often, and what constitutes a
              removal-from-service deficiency. This guide walks through the complete boom inspection process
              for both telescopic and lattice configurations, covering crack detection methods, pin wear
              assessment, structural integrity evaluation, and documentation requirements. For a broader
              look at daily pre-operation checks, see our{" "}
              <Link href="/blog/daily-crane-inspection-checklist">daily crane inspection checklist</Link>.
              For lattice-specific deep dives, refer to our{" "}
              <Link href="/blog/lattice-boom-crane-inspection">lattice boom crane inspection guide</Link>.
            </p>

            <p>
              Whether you are a qualified inspector performing an annual comprehensive inspection or an
              operator conducting a pre-shift walk-around, this guide provides the technical detail you
              need to evaluate boom condition accurately and make sound disposition decisions.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Boom Types and Their Inspection Considerations</h2>

            <p>
              Before diving into specific procedures, it is essential to understand the fundamental differences
              between boom types, as each presents unique inspection challenges and failure modes. The
              construction, materials, and load paths vary significantly between telescopic, lattice, and
              extension/jib configurations.
            </p>

            <h3>Telescopic Booms</h3>
            <p>
              Telescopic booms consist of nested box-section or trapezoidal-section members that telescope
              in and out using hydraulic cylinders. Common on hydraulic truck cranes, rough-terrain cranes,
              and all-terrain cranes, telescopic booms typically feature:
            </p>
            <ul>
              <li>
                <strong>Base section:</strong> The outermost, heaviest section permanently attached to
                the crane superstructure at the boom pivot pin.
              </li>
              <li>
                <strong>Fly sections:</strong> Multiple inner sections (typically 3&ndash;6) that extend
                sequentially, guided by wear pads and supported by telescope cylinders.
              </li>
              <li>
                <strong>Wear pads:</strong> Replaceable bearing surfaces (UHMW polyethylene, bronze, or
                composite) that maintain alignment between boom sections during extension and retraction.
              </li>
              <li>
                <strong>Telescope cylinders:</strong> Single- or multi-stage hydraulic cylinders that drive
                section extension, with pin connections at each stage.
              </li>
              <li>
                <strong>Boom head:</strong> The tip section containing sheaves for hoist rope reeving and
                attachment points for jibs or extensions.
              </li>
            </ul>
            <p>
              Key inspection concerns for telescopic booms include wear pad condition, internal corrosion
              (hidden inside nested sections), section alignment, and telescope cylinder integrity. For
              more on hydraulic system inspection, see our{" "}
              <Link href="/blog/hydraulic-crane-inspection-guide">hydraulic crane inspection guide</Link>.
            </p>

            <h3>Lattice Booms</h3>
            <p>
              Lattice booms use an open truss structure made of tubular or angle-iron members welded or
              bolted into sections that are pinned together during assembly. Common on crawler cranes and
              large truck cranes, lattice booms offer superior strength-to-weight ratios at long lengths.
              Key components include:
            </p>
            <ul>
              <li>
                <strong>Chord members:</strong> The four primary longitudinal members (top chords and
                bottom chords) that carry compression and tension loads.
              </li>
              <li>
                <strong>Lacing and bracing:</strong> Diagonal and horizontal tubular members welded
                between chords that resist shear forces and maintain section geometry.
              </li>
              <li>
                <strong>Pin connections:</strong> High-strength pins at section splice points, boom foot,
                and boom head that transfer loads between sections.
              </li>
              <li>
                <strong>Pendants:</strong> Wire rope or structural members connecting the boom head to
                the boom hoist system, transferring lifting loads to the crane structure.
              </li>
              <li>
                <strong>Boom stops:</strong> Mechanical devices that prevent the boom from going over
                backward (boom over cab).
              </li>
            </ul>
            <p>
              Lattice boom inspection focuses heavily on weld joints, lacing member integrity, pin wear,
              and chord straightness. Environmental exposure makes corrosion a constant concern. Our{" "}
              <Link href="/blog/lattice-boom-crane-inspection">lattice boom crane inspection guide</Link>{" "}
              provides additional depth on these topics.
            </p>

            <h3>Boom Extensions and Jibs</h3>
            <p>
              Both telescopic and lattice cranes frequently use boom extensions or jibs to increase
              reach. These attachments present their own inspection requirements:
            </p>
            <ul>
              <li><strong>Fixed jibs:</strong> Single-angle extensions bolted or pinned to the boom head, requiring inspection of connection hardware and structural members.</li>
              <li><strong>Luffing jibs:</strong> Adjustable-angle extensions with their own pendant and hoist systems, requiring comprehensive inspection of all additional components.</li>
              <li><strong>Fly extensions:</strong> Lightweight lattice or tubular sections that mount on the telescopic boom head, requiring inspection of connection pins and structural integrity.</li>
              <li><strong>Offsettable jibs:</strong> Extensions that can be positioned at various angles relative to the main boom, requiring inspection of the offset mechanism and locking devices.</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>ASME B30.5 Boom Inspection Requirements</h2>

            <p>
              ASME B30.5 establishes two categories of inspection for crane booms: frequent inspections
              (daily or per-shift) and periodic inspections (monthly to annual intervals depending on
              service conditions). Understanding these categories and their requirements is fundamental
              to any compliant inspection program. For the broader annual inspection framework, see our{" "}
              <Link href="/blog/annual-crane-inspection-requirements">annual crane inspection requirements</Link>{" "}
              guide.
            </p>

            <h3>Frequent (Shift) Inspections</h3>
            <p>
              ASME B30.5 requires the following boom-related checks before each shift or at the beginning
              of each work period:
            </p>
            <ul>
              <li><strong>Visual examination:</strong> General observation of boom structure for obvious damage, deformation, or missing components visible from ground level.</li>
              <li><strong>Boom hoist operation:</strong> Functional check of boom raise/lower controls to verify smooth, controlled operation without unusual noises or vibrations.</li>
              <li><strong>Telescope operation:</strong> For telescopic booms, verify smooth extension and retraction without binding, jerking, or unusual sounds.</li>
              <li><strong>Anti-two-block device:</strong> Verify function of the boom head anti-two-block warning and limit system.</li>
              <li><strong>Boom angle indicator:</strong> Confirm the boom angle or radius indicator is functioning and readable from the operator&apos;s station.</li>
              <li><strong>Boom stops:</strong> Visual verification that boom stops or boom hoist disconnect devices are in place and appear functional.</li>
            </ul>

            <h3>Periodic Inspections</h3>
            <p>
              Periodic boom inspections are more comprehensive and are performed at intervals determined
              by the severity of service conditions, but not less than annually. ASME B30.5 periodic
              boom inspection items include:
            </p>
            <ul>
              <li><strong>Structural members:</strong> Detailed examination of all boom structural members for cracks, corrosion, deformation, and section loss.</li>
              <li><strong>Welds:</strong> Close visual inspection of all accessible weld joints for cracking, porosity, incomplete fusion, and corrosion.</li>
              <li><strong>Pin connections:</strong> Measurement of pin wear, bore elongation, and condition of keeper hardware at all boom connection points.</li>
              <li><strong>Wear pads:</strong> Measurement of wear pad thickness and condition on telescopic booms, including gap measurements between sections.</li>
              <li><strong>Cylinder connections:</strong> Inspection of telescope and boom hoist cylinder pin connections, seals, and mounting hardware.</li>
              <li><strong>Pendants and connections:</strong> Examination of boom pendants (wire rope or structural) for wear, corrosion, broken wires, and connection hardware condition.</li>
              <li><strong>Boom head sheaves:</strong> Inspection of sheave condition, bearing play, rope groove wear, and guard condition at the boom head.</li>
              <li><strong>Corrosion protection:</strong> Assessment of paint condition, surface coatings, and any areas of active corrosion requiring treatment.</li>
            </ul>

            <h3>Inspection Intervals</h3>
            <p>
              ASME B30.5 does not prescribe a single fixed interval for periodic inspections. Instead,
              the interval is determined based on service severity:
            </p>
            <ol>
              <li><strong>Normal service:</strong> Annual periodic inspection is typically sufficient for cranes operating under normal conditions with moderate duty cycles.</li>
              <li><strong>Heavy service:</strong> Semi-annual or quarterly inspections may be required for cranes in high-utilization applications such as steel erection, refinery maintenance, or continuous production environments.</li>
              <li><strong>Severe service:</strong> Monthly periodic inspections may be necessary for cranes operating in corrosive environments, extreme temperatures, or at consistently high percentages of rated capacity.</li>
              <li><strong>After incidents:</strong> A thorough periodic-level inspection is required after any incident involving overloading, contact with obstructions, structural damage, or any event that could have affected boom integrity.</li>
            </ol>

            {/* ------------------------------------------------------------ */}
            <h2>Telescopic Boom Inspection Procedures</h2>

            <p>
              Telescopic boom inspection requires a systematic approach that addresses both external
              and internal conditions. The nested construction of telescopic booms means that significant
              deficiencies can be hidden from casual observation. A thorough inspection requires the
              boom to be fully extended and, where possible, individual sections examined internally.
            </p>

            <h3>Boom Section Wear Pads</h3>
            <p>
              Wear pads are among the most critical and frequently overlooked inspection points on
              telescopic booms. These replaceable bearing surfaces maintain proper alignment between
              nested boom sections and prevent metal-to-metal contact during extension and retraction.
            </p>
            <ul>
              <li>
                <strong>Thickness measurement:</strong> Measure wear pad thickness at multiple points
                and compare to manufacturer&apos;s minimum specifications. Pads worn below minimum
                thickness must be replaced before further operation.
              </li>
              <li>
                <strong>Gap measurement:</strong> With the boom fully extended and unloaded, measure
                the gap between adjacent boom sections at the top, bottom, and sides. Excessive gaps
                indicate worn pads or structural deformation.
              </li>
              <li>
                <strong>Surface condition:</strong> Inspect pad surfaces for scoring, gouging, uneven
                wear, melting, or contamination with debris. Uneven wear patterns may indicate
                structural misalignment.
              </li>
              <li>
                <strong>Retention hardware:</strong> Verify that all pad retention bolts, clips, and
                brackets are in place and secure. Missing or loose retention hardware can allow pads
                to shift or fall out during operation.
              </li>
              <li>
                <strong>Material compatibility:</strong> Confirm that replacement pads match the OEM
                specification for material type and dimensions. Using incorrect pad material can
                accelerate boom section wear.
              </li>
            </ul>

            <h3>Telescope Cylinder Inspection</h3>
            <p>
              The telescope cylinder drives boom section extension and retraction. Cylinder failure
              during operation can cause uncontrolled boom retraction under load &ndash; a potentially
              catastrophic event.
            </p>
            <ul>
              <li>
                <strong>Cylinder rod condition:</strong> Inspect the exposed portion of the cylinder rod
                for scoring, pitting, corrosion, or chrome flaking. Any rod surface damage can destroy
                seals and cause hydraulic leaks.
              </li>
              <li>
                <strong>Seal condition:</strong> Look for evidence of hydraulic fluid leakage at rod
                seals, piston seals, and port connections. Even minor weeping indicates seal
                degradation that will worsen under load.
              </li>
              <li>
                <strong>Pin connections:</strong> Inspect cylinder mounting pins and clevises for wear,
                elongation, and cracking. Measure pin diameters and bore dimensions against manufacturer
                tolerances.
              </li>
              <li>
                <strong>Cylinder barrel:</strong> Examine the cylinder barrel for dents, corrosion, and
                external damage. Barrel damage can cause internal scoring and premature seal failure.
              </li>
              <li>
                <strong>Hydraulic lines:</strong> Trace all hydraulic supply and return lines for the
                telescope circuit, inspecting for chafing, kinking, leaking fittings, and corrosion.
              </li>
              <li>
                <strong>Holding valves:</strong> Verify that counterbalance or pilot-operated check
                valves on the telescope circuit are functional. These valves prevent uncontrolled boom
                retraction in the event of a hose failure.
              </li>
            </ul>

            <h3>Boom Section Alignment</h3>
            <p>
              Proper alignment of telescopic boom sections is essential for safe operation and accurate
              load chart ratings. Misalignment creates uneven loading, accelerated wear, and reduced
              structural capacity.
            </p>
            <ul>
              <li><strong>Visual straightness check:</strong> With the boom fully extended at a low angle, sight along the boom length from the base to the head. Any visible bowing, twisting, or lateral deviation indicates structural damage or severe wear pad deterioration.</li>
              <li><strong>Section tracking:</strong> Extend and retract the boom while observing section movement. Sections should extend and retract smoothly without binding, rocking, or lateral shifting.</li>
              <li><strong>Deflection under load:</strong> With a known test load, observe boom deflection and compare to manufacturer specifications. Excessive deflection may indicate section damage, wear pad deterioration, or reduced structural capacity.</li>
              <li><strong>Section twist:</strong> Inspect for any rotational misalignment between boom sections. Twist can result from side-loading events, contact with structures, or improper transport securing.</li>
            </ul>

            <h3>Internal Corrosion</h3>
            <p>
              Internal corrosion is one of the most insidious threats to telescopic boom integrity
              because it develops out of sight inside nested boom sections. Water enters through worn
              seals, drain holes, and cap gaps, then becomes trapped inside boom sections where it
              promotes corrosion.
            </p>
            <ul>
              <li>
                <strong>Drain hole inspection:</strong> Verify that all boom section drain holes are
                open and unobstructed. Blocked drains allow water to accumulate inside boom sections.
              </li>
              <li>
                <strong>Internal visual inspection:</strong> Where access permits, use a borescope or
                inspection camera to examine internal boom section surfaces for corrosion, pitting,
                and section loss.
              </li>
              <li>
                <strong>Ultrasonic thickness testing:</strong> For booms with suspected internal
                corrosion, ultrasonic thickness measurements can determine remaining wall thickness
                at critical load-bearing areas.
              </li>
              <li>
                <strong>Water drainage test:</strong> Tilt the boom to various angles and observe
                whether water drains from the sections. Significant water presence indicates blocked
                drains or compromised seals.
              </li>
              <li>
                <strong>Section end caps:</strong> Inspect end caps and section closures for damage,
                missing seals, and proper fitment. Damaged end caps are a primary entry point for
                water and debris.
              </li>
            </ul>

            <h3>Boom Pin Connections</h3>
            <p>
              The boom pivot pin, telescope cylinder pins, and jib connection pins on telescopic booms
              are all critical load-transfer points that require careful inspection:
            </p>
            <ul>
              <li>
                <strong>Boom foot pin:</strong> The connection between the boom base section and the
                crane superstructure carries the full boom load. Inspect for wear, cracking, and
                proper lubrication.
              </li>
              <li>
                <strong>Cylinder pins:</strong> Telescope and boom hoist cylinder pins transfer massive
                forces. Measure for diameter reduction and inspect bores for elongation.
              </li>
              <li>
                <strong>Extension pins:</strong> On manually pinned boom extensions, verify correct pin
                size, material, and retention hardware. Using incorrect pins is a leading cause of
                boom extension separation.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Lattice Boom Inspection Procedures</h2>

            <p>
              Lattice boom inspection requires methodical examination of hundreds of individual
              structural members and connections. The open construction makes most components accessible
              for inspection, but the sheer number of potential failure points demands a systematic
              approach. For a comprehensive treatment of lattice-specific inspection, see our{" "}
              <Link href="/blog/lattice-boom-crane-inspection">lattice boom crane inspection guide</Link>.
            </p>

            <h3>Chord Members</h3>
            <p>
              The main chord members are the primary load-carrying elements of a lattice boom. Any
              deficiency in a chord member directly reduces the boom&apos;s structural capacity:
            </p>
            <ul>
              <li>
                <strong>Straightness:</strong> Sight along each chord member for any bowing, kinking,
                or lateral displacement. Even minor chord deformation (&gt;1/4 inch per 10 feet)
                can significantly reduce compressive load capacity.
              </li>
              <li>
                <strong>Surface condition:</strong> Examine chord surfaces for dents, gouges, arc
                strikes, and corrosion pitting. Surface damage creates stress concentration points
                where cracks can initiate.
              </li>
              <li>
                <strong>Wall thickness:</strong> For tubular chord members, use ultrasonic thickness
                gauges to verify adequate wall thickness at areas of suspected corrosion or wear.
              </li>
              <li>
                <strong>Weld joints:</strong> Closely inspect all weld joints where chord members
                connect to gusset plates, splice plates, and lacing members. Look for crack initiation,
                undercut, porosity, and corrosion at weld toes.
              </li>
            </ul>

            <h3>Lacing and Bracing Members</h3>
            <p>
              Lacing members resist shear forces and maintain the geometric shape of the boom cross
              section. Although individual lacing members carry less load than chords, failure of
              lacing members compromises the entire boom&apos;s stability:
            </p>
            <ul>
              <li>
                <strong>Member straightness:</strong> Each lacing member must be straight and free from
                bowing or buckling. Even slight deformation indicates the member has been overloaded.
              </li>
              <li>
                <strong>Connection welds:</strong> Lacing-to-chord connection welds are high-stress
                points. Inspect each weld for cracking, particularly at the weld toe where fatigue
                cracks typically initiate.
              </li>
              <li>
                <strong>Missing members:</strong> Count all lacing members in each section and compare
                to the manufacturer&apos;s configuration. Missing lacing members (broken and fallen off)
                require immediate removal from service.
              </li>
              <li>
                <strong>Field repairs:</strong> Look for evidence of unauthorized field welding or
                repair. Boom structural repairs must be performed by the manufacturer or under the
                direction of a qualified structural engineer.
              </li>
            </ul>

            <h3>Pin Connections</h3>
            <p>
              Lattice boom section pins transfer the full boom load through each section splice point.
              Pin failure causes immediate boom separation and collapse:
            </p>
            <ul>
              <li>
                <strong>Pin wear measurement:</strong> Using a micrometer, measure pin diameter at
                multiple points. Compare to OEM specifications. Wear exceeding 5% of original
                diameter typically requires replacement.
              </li>
              <li>
                <strong>Pin surface condition:</strong> Inspect pin surfaces for scoring, galling,
                corrosion, and heat discoloration. Surface damage accelerates wear and can indicate
                lubrication deficiencies.
              </li>
              <li>
                <strong>Keeper hardware:</strong> Verify that all cotter pins, lock pins, retaining
                rings, or keeper plates are in place and in serviceable condition. Missing keepers
                allow pins to walk out during operation.
              </li>
              <li>
                <strong>Bore condition:</strong> Inspect pin bores (ears) in boom section end fittings
                for elongation, cracking, and corrosion. Bore elongation reduces contact area and
                increases stress concentration.
              </li>
            </ul>

            <h3>Boom Sections and Splices</h3>
            <p>
              The connection points where lattice boom sections join together are among the most
              critical inspection areas:
            </p>
            <ul>
              <li>
                <strong>Section fit-up:</strong> Sections must align properly when pinned together.
                Gaps, misalignment, or forced fit conditions indicate damaged connection fittings.
              </li>
              <li>
                <strong>Gusset plates:</strong> Inspect gusset plates at section ends for cracking,
                deformation, and corrosion. These plates distribute pin loads to the chord members.
              </li>
              <li>
                <strong>Section identification:</strong> Verify that sections are installed in the
                correct order and orientation per the manufacturer&apos;s boom configuration chart.
                Incorrect section order changes the boom&apos;s structural properties.
              </li>
              <li>
                <strong>Splice bolts:</strong> On bolted boom connections, verify bolt torque, grade,
                and condition. Replace any bolts showing corrosion, thread damage, or head deformation.
              </li>
            </ul>

            <h3>Pendants and Pendant Connections</h3>
            <p>
              Boom pendants connect the boom head to the boom hoist system and are critical
              load-transfer components. For detailed wire rope inspection criteria, see our{" "}
              <Link href="/blog/crane-wire-rope-inspection-guide">crane wire rope inspection guide</Link>.
            </p>
            <ul>
              <li>
                <strong>Wire rope pendants:</strong> Inspect for broken wires, corrosion, kinks,
                bird-caging, and diameter reduction per ASME B30.5 wire rope criteria.
              </li>
              <li>
                <strong>Structural pendants:</strong> Examine tubular or bar-type pendants for bending,
                cracking, corrosion, and connection pin wear.
              </li>
              <li>
                <strong>Socket connections:</strong> Open-type and closed-type sockets must be inspected
                for cracking, wear, and proper seating of the wire rope termination.
              </li>
              <li>
                <strong>Equalizer bars:</strong> Inspect pendant equalizer bars or plates for cracking,
                wear at pin holes, and proper alignment.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Crack Detection Methods for Booms</h2>

            <p>
              Crack detection is one of the most important aspects of boom inspection, as cracks in
              structural members can propagate rapidly under cyclic loading and lead to catastrophic
              failure. Several non-destructive examination (NDE) methods are available, each with
              distinct advantages and limitations.
            </p>

            <h3>Visual Examination (VT)</h3>
            <p>
              Visual examination is the first-line crack detection method and is required as part of
              every boom inspection:
            </p>
            <ul>
              <li>
                <strong>Surface preparation:</strong> Clean the inspection area of dirt, grease, paint
                flaking, and scale to expose the base metal and weld surfaces.
              </li>
              <li>
                <strong>Lighting:</strong> Use a minimum of 100 foot-candles (1,000 lux) of illumination
                at the inspection surface. A flashlight held at a low angle highlights surface
                irregularities.
              </li>
              <li>
                <strong>Magnification:</strong> Use a 10x magnifying loupe to examine suspect areas,
                weld toes, and stress concentration points.
              </li>
              <li>
                <strong>Limitations:</strong> VT can only detect surface-breaking cracks and is
                limited by inspector experience and surface condition. Cracks under paint or inside
                members cannot be detected by visual examination alone.
              </li>
            </ul>

            <h3>Magnetic Particle Inspection (MPI)</h3>
            <p>
              MPI is the most commonly used NDE method for crane boom crack detection on ferromagnetic
              (steel) materials:
            </p>
            <ul>
              <li>
                <strong>Principle:</strong> A magnetic field is induced in the test piece. Surface and
                near-surface cracks disrupt the field, attracting magnetic particles (dry or wet) that
                form visible indications.
              </li>
              <li>
                <strong>Sensitivity:</strong> MPI can detect surface cracks as small as 0.001 inches
                wide and near-surface defects up to approximately 1/4 inch below the surface.
              </li>
              <li>
                <strong>Application:</strong> MPI is particularly effective for weld joint inspection,
                pin bore examination, and high-stress areas on boom structural members.
              </li>
              <li>
                <strong>Limitations:</strong> Requires ferromagnetic material (not applicable to
                aluminum booms), requires surface preparation, and the area must be demagnetized
                after testing.
              </li>
            </ul>

            <h3>Dye Penetrant Inspection (PT)</h3>
            <p>
              Dye penetrant testing is useful for detecting surface-breaking cracks on both ferromagnetic
              and non-ferromagnetic materials:
            </p>
            <ul>
              <li>
                <strong>Principle:</strong> A liquid penetrant is applied to a clean surface, allowed
                to dwell (soak into cracks), then removed. A developer draws penetrant from any
                cracks back to the surface, creating visible indications.
              </li>
              <li>
                <strong>Application:</strong> PT is effective on all metallic boom materials including
                aluminum alloy booms where MPI cannot be used.
              </li>
              <li>
                <strong>Fluorescent vs. visible:</strong> Fluorescent penetrant (viewed under UV light)
                provides higher sensitivity than visible-dye (red) penetrant.
              </li>
              <li>
                <strong>Limitations:</strong> Only detects surface-breaking cracks (no subsurface
                capability). Requires thorough surface preparation and cleaning. Temperature-sensitive
                &ndash; most penetrants require surfaces between 40&deg;F and 125&deg;F.
              </li>
            </ul>

            <h3>Ultrasonic Testing (UT)</h3>
            <p>
              Ultrasonic testing provides the ability to detect subsurface defects and measure material
              thickness:
            </p>
            <ul>
              <li>
                <strong>Principle:</strong> High-frequency sound waves are transmitted into the material.
                Internal defects reflect sound waves back to the transducer, allowing detection and
                sizing of internal cracks, voids, and inclusions.
              </li>
              <li>
                <strong>Thickness measurement:</strong> UT is the standard method for determining
                remaining wall thickness on boom sections affected by corrosion.
              </li>
              <li>
                <strong>Weld inspection:</strong> UT can detect internal weld defects including lack
                of fusion, porosity, and subsurface cracking that cannot be found by surface methods.
              </li>
              <li>
                <strong>Limitations:</strong> Requires skilled technicians, surface preparation, and
                couplant application. Not effective on very thin materials (&lt;1/4 inch) or
                complex geometries.
              </li>
            </ul>

            {/* NDE Comparison Table */}
            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left font-semibold">Method</th>
                    <th className="px-4 py-3 text-left font-semibold">Defect Types</th>
                    <th className="px-4 py-3 text-left font-semibold">Materials</th>
                    <th className="px-4 py-3 text-left font-semibold">Sensitivity</th>
                    <th className="px-4 py-3 text-left font-semibold">Field Practicality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Visual (VT)</td>
                    <td className="px-4 py-3">Surface only</td>
                    <td className="px-4 py-3">All</td>
                    <td className="px-4 py-3">Low &ndash; depends on inspector</td>
                    <td className="px-4 py-3">Excellent &ndash; minimal equipment</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">MPI</td>
                    <td className="px-4 py-3">Surface &amp; near-surface</td>
                    <td className="px-4 py-3">Ferromagnetic only</td>
                    <td className="px-4 py-3">High &ndash; 0.001&Prime; cracks</td>
                    <td className="px-4 py-3">Good &ndash; portable equipment</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Dye Penetrant (PT)</td>
                    <td className="px-4 py-3">Surface only</td>
                    <td className="px-4 py-3">All metals</td>
                    <td className="px-4 py-3">Moderate &ndash; surface-breaking</td>
                    <td className="px-4 py-3">Good &ndash; aerosol kits available</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Ultrasonic (UT)</td>
                    <td className="px-4 py-3">Surface &amp; subsurface</td>
                    <td className="px-4 py-3">Most metals</td>
                    <td className="px-4 py-3">Very high &ndash; internal defects</td>
                    <td className="px-4 py-3">Moderate &ndash; skilled technician</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ------------------------------------------------------------ */}
            <h2>Boom Structural Integrity Assessment</h2>

            <p>
              Beyond crack detection, a comprehensive boom inspection must evaluate overall structural
              integrity including deformation, buckling, corrosion, and weld condition. These factors
              collectively determine whether the boom retains its original design capacity.
            </p>

            <h3>Deformation Assessment</h3>
            <p>
              Boom deformation can result from overloading, side-loading, contact with structures,
              improper transport, or assembly/disassembly incidents:
            </p>
            <ul>
              <li><strong>Gross deformation:</strong> Any visible bending, twisting, or crushing of boom sections requires immediate removal from service. Straightening or field repair of deformed boom members without engineering authorization is prohibited.</li>
              <li><strong>Subtle deformation:</strong> Use a straightedge, string line, or laser alignment tool to detect minor deformation that may not be visible to the naked eye. Measure against manufacturer&apos;s straightness tolerances.</li>
              <li><strong>Permanent set:</strong> After high-load events, measure boom deflection at known loads and compare to baseline values. Increased deflection under the same load indicates permanent structural deformation.</li>
              <li><strong>Heat damage indicators:</strong> Discoloration, paint blistering, or warping near fire exposure areas indicates potential metallurgical changes that reduce material strength.</li>
            </ul>

            <h3>Buckling Assessment</h3>
            <p>
              Buckling is a critical failure mode for boom members under compressive loading.
              Buckling can occur globally (entire boom section) or locally (individual chord or
              lacing members):
            </p>
            <ul>
              <li><strong>Global buckling indicators:</strong> Lateral bowing or deviation of the entire boom section from its intended axis. Most critical in the mid-span area of long booms at high angles.</li>
              <li><strong>Local buckling:</strong> Visible waviness, rippling, or crinkling of plate material on box-section booms, or bowing of individual chord/lacing members on lattice booms.</li>
              <li><strong>Contributing factors:</strong> Dents, gouges, corrosion pitting, and unauthorized weld repairs all reduce a member&apos;s resistance to buckling by creating stress concentrations and reducing cross-sectional area.</li>
              <li><strong>Assessment criteria:</strong> Any member showing signs of buckling must be evaluated by a qualified structural engineer before the crane is returned to service.</li>
            </ul>

            <h3>Corrosion Assessment</h3>
            <p>
              Corrosion reduces the effective cross section of structural members, directly decreasing
              load-carrying capacity:
            </p>
            <ul>
              <li>
                <strong>Surface corrosion:</strong> Light surface rust (SSPC-SP 6 scale) that has not
                resulted in measurable section loss is typically acceptable after cleaning and
                recoating.
              </li>
              <li>
                <strong>Pitting corrosion:</strong> Localized deep pitting creates stress concentration
                points and can significantly reduce fatigue life. Measure pit depth and density to
                assess severity.
              </li>
              <li>
                <strong>Section loss:</strong> When corrosion has resulted in measurable wall thickness
                reduction, remaining wall thickness must be compared to minimum design requirements.
                UT thickness measurement is the standard method.
              </li>
              <li>
                <strong>Crevice corrosion:</strong> Accelerated corrosion occurring in tight gaps
                between overlapping surfaces, at fastener interfaces, and inside boom sections where
                water accumulates.
              </li>
              <li>
                <strong>Environmental factors:</strong> Coastal, industrial, and chemical environments
                accelerate corrosion and may require increased inspection frequencies and more
                aggressive corrosion protection programs.
              </li>
            </ul>

            <h3>Weld Inspection</h3>
            <p>
              Weld joints are inherently stress concentration points and are the most common location
              for fatigue crack initiation on crane booms:
            </p>
            <ul>
              <li>
                <strong>Weld toe cracks:</strong> The most common boom weld defect. Inspect the
                transition zone between the weld metal and base metal for fine cracks using VT with
                magnification, MPI, or PT.
              </li>
              <li>
                <strong>Weld root defects:</strong> Incomplete penetration or root cracking on
                single-side welds. May require UT for detection on inaccessible joints.
              </li>
              <li>
                <strong>Crater cracks:</strong> Star-shaped cracks at weld stops and starts. These
                are common on field repairs and may propagate into the base metal.
              </li>
              <li>
                <strong>Corrosion at welds:</strong> Dissimilar metal corrosion can occur at weld
                interfaces, particularly if filler metal composition differs significantly from
                base metal.
              </li>
              <li>
                <strong>Unauthorized repairs:</strong> Evidence of field welding on boom structural
                members (burn marks, irregular bead profiles, different metal color) requires
                investigation and engineering assessment.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Boom Pin Wear and Connection Inspection</h2>

            <p>
              Pin connections are the primary load-transfer points on both telescopic and lattice booms.
              Pin and bore wear creates looseness, redistributes loads, and introduces dynamic impact
              forces that accelerate further deterioration. For related hook connection inspection, see
              our <Link href="/blog/crane-hook-inspection-criteria">crane hook inspection criteria</Link>{" "}
              guide.
            </p>

            <h3>Pin Wear Measurement</h3>
            <p>
              Accurate pin wear measurement requires proper tools and technique:
            </p>
            <ul>
              <li>
                <strong>Measurement tool:</strong> Use an outside micrometer (not a caliper) for pin
                diameter measurement. Micrometers provide the accuracy needed (&plusmn;0.001 inch)
                for meaningful wear assessment.
              </li>
              <li>
                <strong>Measurement locations:</strong> Measure pin diameter at the primary bearing
                area (where the pin contacts the bore under load), at 90&deg; to the load axis, and
                at the pin center and both ends. Record the minimum diameter.
              </li>
              <li>
                <strong>Wear patterns:</strong> Pins typically wear into an oval or hourglass shape.
                The difference between the maximum and minimum measured diameter indicates the
                degree of wear.
              </li>
              <li>
                <strong>Replacement criteria:</strong> Most manufacturers specify a maximum allowable
                wear of 3&ndash;5% of original pin diameter. Pins worn beyond this limit must be
                replaced. Always reference the specific manufacturer&apos;s service manual.
              </li>
              <li>
                <strong>Surface hardness:</strong> Use a portable hardness tester to verify that pin
                surface hardness has not been reduced by wear through the case-hardened layer.
              </li>
            </ul>

            <h3>Keeper and Retention Hardware</h3>
            <p>
              Pin retention hardware prevents pins from migrating out of bores during operation.
              Failure of retention hardware can lead to pin loss and structural separation:
            </p>
            <ul>
              <li>
                <strong>Cotter pins:</strong> Must be new (not reused) and properly installed with
                legs spread to prevent accidental removal. Inspect for corrosion, fatigue cracks,
                and proper sizing.
              </li>
              <li>
                <strong>Lock pins and clips:</strong> Spring-loaded lock pins and snap rings must
                engage fully and retain spring tension. Replace any lock pin that can be pulled
                out without compressing the spring mechanism.
              </li>
              <li>
                <strong>Keeper plates:</strong> Bolted keeper plates must be inspected for cracking,
                deformation, and bolt security. Verify bolt torque meets manufacturer specifications.
              </li>
              <li>
                <strong>Thread condition:</strong> On threaded pin retention hardware, inspect threads
                for stripping, cross-threading, and corrosion. Replace any hardware with damaged threads.
              </li>
            </ul>

            <h3>Bore Wear Assessment</h3>
            <p>
              Pin bore wear in boom connection fittings is equally important as pin wear but is
              more difficult and expensive to repair:
            </p>
            <ul>
              <li>
                <strong>Measurement method:</strong> Use a telescoping gauge and micrometer or a bore
                gauge to measure bore diameter at the primary load-bearing area and at 90&deg; to
                the load axis.
              </li>
              <li>
                <strong>Elongation criteria:</strong> Bore elongation (oval wear pattern) exceeding
                3&ndash;5% of original bore diameter typically requires repair or component
                replacement.
              </li>
              <li>
                <strong>Bore surface condition:</strong> Inspect bore surfaces for scoring, galling,
                spalling, and corrosion. Rough bore surfaces accelerate pin wear and reduce the
                effective contact area.
              </li>
              <li>
                <strong>Repair options:</strong> Bore wear repair options include bushing installation,
                bore welding and re-machining, and component replacement. All repairs must be
                performed per manufacturer specifications or under engineering authorization.
              </li>
              <li>
                <strong>Combined clearance:</strong> The total pin-to-bore clearance (considering both
                pin wear and bore wear) is the critical measurement. Even if individual wear is
                within tolerance, combined clearance may exceed allowable limits.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Common Boom Deficiencies</h2>

            <p>
              The following table summarizes the most frequently encountered boom deficiencies,
              their severity classifications, and required corrective actions:
            </p>

            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left font-semibold">Deficiency</th>
                    <th className="px-4 py-3 text-left font-semibold">Severity</th>
                    <th className="px-4 py-3 text-left font-semibold">Detection Method</th>
                    <th className="px-4 py-3 text-left font-semibold">Corrective Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Chord member crack</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">Critical</td>
                    <td className="px-4 py-3">VT, MPI, PT</td>
                    <td className="px-4 py-3">Immediate removal from service; engineering evaluation required</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Boom section deformation</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">Critical</td>
                    <td className="px-4 py-3">VT, straightedge</td>
                    <td className="px-4 py-3">Immediate removal; manufacturer repair or replacement</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Missing lacing member</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">Critical</td>
                    <td className="px-4 py-3">VT, count verification</td>
                    <td className="px-4 py-3">Immediate removal; replace per manufacturer specs</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pin wear &gt;5%</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">Critical</td>
                    <td className="px-4 py-3">Micrometer measurement</td>
                    <td className="px-4 py-3">Replace pin before further operation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Weld toe crack</td>
                    <td className="px-4 py-3 text-orange-600 font-semibold">Major</td>
                    <td className="px-4 py-3">VT, MPI, PT</td>
                    <td className="px-4 py-3">Remove from service; grind and re-inspect or repair weld</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Wear pads below minimum</td>
                    <td className="px-4 py-3 text-orange-600 font-semibold">Major</td>
                    <td className="px-4 py-3">Measurement, gap check</td>
                    <td className="px-4 py-3">Replace wear pads before continued operation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Wall thickness below minimum</td>
                    <td className="px-4 py-3 text-orange-600 font-semibold">Major</td>
                    <td className="px-4 py-3">UT thickness</td>
                    <td className="px-4 py-3">Engineering evaluation for continued service or replacement</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Missing keeper hardware</td>
                    <td className="px-4 py-3 text-orange-600 font-semibold">Major</td>
                    <td className="px-4 py-3">VT</td>
                    <td className="px-4 py-3">Install correct keeper hardware before operation</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Surface corrosion</td>
                    <td className="px-4 py-3 text-yellow-600 font-semibold">Minor</td>
                    <td className="px-4 py-3">VT</td>
                    <td className="px-4 py-3">Clean and recoat; monitor at next inspection</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Cylinder rod scoring</td>
                    <td className="px-4 py-3 text-orange-600 font-semibold">Major</td>
                    <td className="px-4 py-3">VT</td>
                    <td className="px-4 py-3">Evaluate depth; re-chrome or replace rod</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Blocked drain holes</td>
                    <td className="px-4 py-3 text-yellow-600 font-semibold">Minor</td>
                    <td className="px-4 py-3">VT, water test</td>
                    <td className="px-4 py-3">Clear drains; inspect internally for trapped moisture</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Pendant wire breaks</td>
                    <td className="px-4 py-3 text-red-600 font-semibold">Critical</td>
                    <td className="px-4 py-3">VT per ASME B30.5</td>
                    <td className="px-4 py-3">Evaluate per wire rope removal criteria; replace if exceeded</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ------------------------------------------------------------ */}
            <h2>Documentation Requirements</h2>

            <p>
              Thorough documentation of boom inspection findings is essential for regulatory compliance,
              trend monitoring, and liability protection. Both OSHA and ASME B30.5 require that
              inspection records be maintained and available for review. For detailed guidance on
              inspection record management, see our{" "}
              <Link href="/blog/crane-maintenance-log-requirements">crane maintenance log requirements</Link>{" "}
              article.
            </p>

            <h3>Required Documentation</h3>
            <p>
              Every boom inspection record should include the following elements at a minimum:
            </p>
            <ul>
              <li><strong>Crane identification:</strong> Make, model, serial number, and unit number of the crane inspected.</li>
              <li><strong>Boom configuration:</strong> Boom type, length, number of sections extended (for telescopic), and any jib or extension attachments in use.</li>
              <li><strong>Inspector identification:</strong> Name, qualifications, and employer of the person performing the inspection. Include certification numbers where applicable.</li>
              <li><strong>Inspection date and type:</strong> Date performed and whether it is a frequent (shift), periodic, or comprehensive inspection.</li>
              <li><strong>Inspection findings:</strong> Detailed description of each deficiency found, including location, severity, and dimensions (measurements, crack lengths, wear amounts).</li>
              <li><strong>NDE results:</strong> If non-destructive examination was performed, document the method used, areas tested, and results including any indications found.</li>
              <li><strong>Disposition:</strong> Clear statement of whether the boom is approved for continued service, requires repairs, requires monitoring at specified intervals, or is removed from service.</li>
              <li><strong>Photographs:</strong> Photo documentation of deficiencies, overall boom condition, and identification plates. Include a reference scale in close-up photos of defects.</li>
              <li><strong>Corrective actions:</strong> Description of any repairs performed, parts replaced, or operational restrictions imposed as a result of inspection findings.</li>
            </ul>

            <h3>Digital Documentation</h3>
            <p>
              Digital inspection platforms offer significant advantages over traditional paper-based
              documentation for boom inspections:
            </p>
            <ul>
              <li><strong>Photo integration:</strong> Digital systems allow photos to be embedded directly in the inspection record, tied to specific boom locations and deficiency descriptions.</li>
              <li><strong>Measurement trending:</strong> Pin wear, bore elongation, wear pad thickness, and wall thickness measurements can be tracked over time to identify deterioration trends before they reach critical levels.</li>
              <li><strong>Automated alerts:</strong> Digital platforms can trigger notifications when measured values approach replacement thresholds, ensuring timely maintenance actions.</li>
              <li><strong>Standardized reporting:</strong> Digital inspection forms ensure that all required data points are captured consistently, reducing the risk of incomplete documentation.</li>
              <li><strong>Instant accessibility:</strong> Cloud-based records are immediately available to all stakeholders including maintenance managers, safety directors, and regulatory auditors without searching through filing cabinets.</li>
              <li><strong>Regulatory compliance:</strong> Digital records with timestamps, GPS coordinates, and electronic signatures provide strong evidence of compliance during OSHA audits.</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Key Takeaways</h2>

            <ul>
              <li>
                <strong>Boom inspection is non-negotiable:</strong> The crane boom is the primary
                load-bearing structural element, and ASME B30.5 requires both frequent (shift-level)
                and periodic (interval-based) inspection of all boom types.
              </li>
              <li>
                <strong>Telescopic booms hide problems:</strong> Internal corrosion, hidden wear pad
                deterioration, and telescope cylinder deficiencies can develop out of sight inside
                nested boom sections &ndash; systematic inspection with borescopes and UT thickness
                testing is essential.
              </li>
              <li>
                <strong>Lattice booms demand member-by-member inspection:</strong> Every chord, lacing
                member, and weld joint on a lattice boom must be individually examined for cracks,
                deformation, and corrosion.
              </li>
              <li>
                <strong>Multiple NDE methods are available:</strong> Visual examination is the baseline,
                but MPI, dye penetrant, and ultrasonic testing provide increased sensitivity for
                crack detection and wall thickness measurement.
              </li>
              <li>
                <strong>Pin wear requires precise measurement:</strong> Use micrometers (not calipers)
                to measure pin diameter and bore gauges for bore wear. Combined pin-to-bore clearance
                is the critical metric.
              </li>
              <li>
                <strong>Any structural crack is serious:</strong> Cracks in boom structural members
                propagate rapidly under cyclic loading. Any confirmed crack requires immediate removal
                from service and engineering evaluation.
              </li>
              <li>
                <strong>Documentation enables trend monitoring:</strong> Thorough documentation of
                measurements and findings allows tracking of deterioration trends, supporting
                predictive maintenance and timely component replacement.
              </li>
              <li>
                <strong>Digital inspection tools improve accuracy:</strong> Digital platforms with
                photo integration, measurement trending, and automated alerts help ensure consistent,
                complete boom inspection documentation.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Streamline Your Boom Inspection Program
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                CraneCheck provides comprehensive boom inspection checklists with
                built-in measurement tracking, photo documentation, NDE result
                recording, and automated alerts when components approach replacement
                thresholds. Ensure every boom inspection is thorough, consistent,
                and fully documented.
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
                  href="/blog/lattice-boom-crane-inspection"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Lattice Boom Crane Inspection Guide
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
                  href="/blog/crane-hook-inspection-criteria"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Crane Hook Inspection Criteria
                  </h3>
                </Link>
                <Link
                  href="/blog/annual-crane-inspection-requirements"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Compliance</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Annual Crane Inspection Requirements
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
          <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-boom-inspection-guide" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
