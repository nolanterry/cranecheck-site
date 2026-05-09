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
  title: "Crane Load Block, Headache Ball & Swivel Inspection Criteria",
  description:
    "In-depth inspection guide for crane load blocks, headache balls, and swivels. Covers sheave wear, side plate cracks, swivel bearing types, hook integration, wire rope terminations, and anti-two-block device requirements per ASME B30.10, B30.5, and OSHA 1926.1412.",
  alternates: { canonical: "/blog/crane-load-block-headache-ball-inspection" },
};

export default function CraneLoadBlockHeadacheBallInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Load Block, Headache Ball & Swivel Inspection Criteria",
    "description":
      "In-depth inspection guide for crane load blocks, headache balls, and swivels. Covers sheave wear, side plate cracks, swivel bearing types, hook integration, wire rope terminations, and anti-two-block device requirements per ASME B30.10, B30.5, and OSHA 1926.1412.",
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
      "@id": "https://cranecheck.co/blog/crane-load-block-headache-ball-inspection"
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
        "name": "Load Block &amp; Headache Ball Inspection",
        "item": "https://cranecheck.co/blog/crane-load-block-headache-ball-inspection"
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
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Load Block, Headache Ball &amp; Swivel Inspection Criteria
            </h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
            <p className="text-lg text-gray-300 leading-relaxed">
              The load block, headache ball, and swivel are the last mechanical
              assemblies between the crane&apos;s wire rope and the load being
              lifted. Every pound of every pick passes through these components.
              This guide breaks down the inspection criteria for each
              sub-component &ndash; from sheave groove gauging and side plate
              crack evaluation to swivel bearing play and anti-two-block device
              integration &ndash; referencing ASME B30.10, B30.5, B30.2, and
              OSHA 1926.1412.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              When a load block fails, there is no secondary system to catch
              the load. The wire rope runs through the sheaves, the hook hangs
              below, and the assembly is held together by side plates, a center
              pin, and bearing hardware that may have seen years of service in
              abrasive, wet, and shock-load conditions. The headache ball &ndash;
              the single-sheave or solid weighted hook assembly used for single-
              part-line picks &ndash; faces the same structural demands in a
              simpler package. The swivel, whether integrated into the hook or
              standing alone between the rope termination and the block, must
              rotate freely without bearing seizure and must carry the full load
              without play or structural compromise.
            </p>
            <p>
              Despite being among the most frequently used components on a
              crane, load blocks and headache balls are often among the least
              systematically inspected. Operators perform pre-shift walkarounds,
              but few programs mandate periodic teardown inspection of the block
              internals. ASME B30.5 (mobile cranes), B30.2 (overhead and
              gantry cranes), and B30.10 (hooks) all touch on block and hook
              inspection requirements. OSHA 1926.1412 mandates inspection
              criteria and frequencies for construction cranes. Together, these
              standards define what a competent or qualified person must evaluate.
              For broader context on rigging hardware attached below the block,
              see our{" "}
              <Link href="/blog/rigging-hardware-inspection-shackles-turnbuckles">
                rigging hardware inspection guide
              </Link>
              .
            </p>

            <h2>Load Block Components and Inspection Points</h2>
            <p>
              A multi-sheave load block is a precision mechanical assembly. Its
              inspection requires the inspector to examine each sub-component
              individually &ndash; not just the assembly as a whole. Inspecting
              a painted exterior and calling it done is not acceptable under any
              of the applicable standards.
            </p>

            <h3>Sheaves</h3>
            <p>
              Sheaves are the grooved wheels over which the wire rope runs.
              They are typically cast or forged steel and are subject to both
              groove wear and radial loading from the rope. Key inspection
              points:
            </p>
            <ul>
              <li>
                <strong>Groove profile:</strong> Use a sheave groove gauge to
                verify the groove radius matches the rope diameter being used.
                ASME B30.5 specifies that sheave grooves must be gauged. A groove
                that is too narrow (&ldquo;tight&rdquo;) pinches the rope and
                accelerates wire break; a groove that is too wide (&ldquo;wide&rdquo;)
                allows the rope to flatten and reduces its fatigue life. Replace
                or re-groove when groove radius deviation exceeds manufacturer
                limits &ndash; typically &plusmn;1/64&Prime; for smaller ropes.
              </li>
              <li>
                <strong>Groove wear depth:</strong> Measure groove depth at the
                12 o&apos;clock position and compare to original. When groove
                wear reduces the flange height to less than the rope diameter,
                the rope can jump the sheave under slack conditions.
              </li>
              <li>
                <strong>Cracks in sheave body:</strong> Inspect the web,
                hub, and flange for cracks using visual examination and MPI
                on critical sheaves. Cracks in the hub bore area around the
                bearing seat are particularly serious because they can lead to
                catastrophic sheave fracture.
              </li>
              <li>
                <strong>Sheave bearing condition:</strong> Rotate the sheave
                by hand with the block unloaded. Any roughness, binding, or
                audible grinding indicates bearing wear or contamination.
                Excessive radial play (typically more than 1/32&Prime; depending
                on sheave diameter) requires bearing replacement before the
                block returns to service.
              </li>
              <li>
                <strong>Sheave alignment:</strong> Misaligned sheaves cause
                the rope to run at an angle through the groove, accelerating
                flange and rope wear. Check sheave alignment visually and by
                running the block through its reeving under no load.
              </li>
            </ul>

            <h3>Side Plates</h3>
            <p>
              The side plates (also called cheek plates or frame plates) form
              the structural backbone of the load block. They carry the load
              from the center pin through to the hook shank or becket bail.
              Side plate failures are among the most catastrophic load block
              defects because they can release the entire assembly.
            </p>
            <ul>
              <li>
                <strong>Cracks:</strong> Inspect all four edges of each side
                plate and the areas around pin holes and bolt holes using visual
                examination. For overhead crane load blocks (ASME B30.2), MPI
                of side plates is recommended during periodic inspections.
                Any crack is cause for immediate removal from service.
              </li>
              <li>
                <strong>Corrosion:</strong> Surface corrosion is common on
                outdoor mobile crane blocks. Evaluate pitting depth relative
                to plate thickness. Pitting exceeding 10% of the original plate
                thickness requires engineering evaluation. Heavy plate corrosion
                that cannot be accurately measured requires replacement.
              </li>
              <li>
                <strong>Deformation:</strong> Bent or bowed side plates indicate
                the block has been side-loaded or has encountered an obstruction
                during operation. Even slight deformation can indicate internal
                pin or sheave damage. Deformed plates require thorough internal
                inspection before the block returns to service.
              </li>
              <li>
                <strong>Pin hole elongation:</strong> Elongated pin holes
                indicate wear from center pin movement. Use a caliper to
                measure pin hole diameter and compare to the pin diameter.
                Clearance exceeding manufacturer&apos;s wear limit (often
                1/32&Prime;&ndash;1/16&Prime; total clearance) requires
                replacement of the side plate, pin, or both.
              </li>
            </ul>

            <h3>Center Pin</h3>
            <p>
              The center pin (or becket pin) is the transverse shaft that
              carries the compressive load from both side plates and supports
              the sheave assembly. It is a fracture-critical component.
            </p>
            <ul>
              <li>
                <strong>Wear at bearing surfaces:</strong> Measure pin diameter
                at the bearing contact zones and at mid-span. Diameter reduction
                exceeding 5% of the original nominal dimension is cause for
                replacement.
              </li>
              <li>
                <strong>Cracks:</strong> Center pins in high-cycle service
                should receive periodic MPI at the retaining pin holes and at
                the transitions between the pin body and end journals. Any
                crack requires immediate pin replacement.
              </li>
              <li>
                <strong>Retention hardware:</strong> Verify that cotter pins,
                retaining rings, or keeper plates are in place and undamaged.
                Missing or damaged retention hardware allows the center pin to
                walk out of the side plates under dynamic load conditions &ndash;
                a failure mode that releases all sheaves simultaneously.
              </li>
              <li>
                <strong>Corrosion at pin-to-plate interface:</strong> The
                interface between the pin and the side plate bore is a crevice
                that traps moisture. Carefully inspect for corrosion-induced
                seizure or material loss in this zone. A seized pin that cannot
                be removed for inspection must be evaluated by a qualified person.
              </li>
            </ul>

            <h3>Becket and Dead-End Connection</h3>
            <p>
              The becket is the fitting at the top of the load block where the
              standing part (dead end) of the wire rope is anchored. The
              dead-end connection transmits the standing-part rope load directly
              into the block frame.
            </p>
            <ul>
              <li>
                <strong>Becket pin condition:</strong> Inspect the becket pin
                for wear and cracks identically to the center pin. The becket
                pin carries the dead-end load, which equals the tension in one
                part of the reeving.
              </li>
              <li>
                <strong>Wire rope termination at becket:</strong> The rope
                end termination at the becket is typically a wedge socket or a
                swaged or poured spelter socket. Inspect per the wire rope
                termination criteria described later in this article.
              </li>
              <li>
                <strong>Becket wear:</strong> Evaluate the groove or bearing
                surface of the becket where the rope termination hardware seats.
                Wear that creates sharp edges can damage the rope or termination
                fitting under load.
              </li>
            </ul>

            <h2>Headache Ball Inspection</h2>
            <p>
              The headache ball &ndash; also called a hook ball, ball hook, or
              overhaul ball &ndash; combines a weight, a swivel, and a hook
              into a compact assembly used for single-part-line lifts. Because
              there are no sheaves to inspect, the inspection is focused on the
              structural integrity of the ball body, the hook attachment, and
              the anti-rotation features.
            </p>

            <h3>Weight Verification</h3>
            <p>
              The headache ball&apos;s weight serves the functional purpose of
              providing the overhaul force needed to lower the hook when there
              is no load. If the ball is too light for the reeving configuration,
              the rope will not pay out properly under gravity. Verify:
            </p>
            <ul>
              <li>
                The rated weight of the ball matches the crane manufacturer&apos;s
                minimum overhaul weight specification for the configured reeving.
              </li>
              <li>
                The weight marking (typically stamped or cast into the ball body)
                is legible and corresponds to the crane&apos;s load chart
                documentation.
              </li>
              <li>
                No material has been removed from the ball body that would reduce
                its weight below the rated value.
              </li>
            </ul>

            <h3>Hook Attachment to Ball Body</h3>
            <p>
              The hook is attached to the ball body through a shank-and-nut
              arrangement or a pinned connection. The attachment transfers the
              full lifted load from the hook through the ball body to the wire
              rope. Inspect:
            </p>
            <ul>
              <li>
                <strong>Hook shank nut:</strong> Verify the nut is fully
                threaded and that the cotter pin, lock wire, or other retention
                device is intact. A loose or missing nut allows the hook to
                separate from the ball body under dynamic loading.
              </li>
              <li>
                <strong>Bearing between hook and ball body:</strong> Headache
                balls incorporate a thrust bearing between the hook shank
                collar and the ball body to allow the hook to rotate
                independently of the ball. Check that this bearing rotates
                smoothly. Seized bearings transmit load-induced rotation to
                the wire rope, accelerating rope degradation.
              </li>
              <li>
                <strong>Ball body cracks:</strong> Inspect the ball body
                casting or forging for cracks, particularly at the neck (the
                reduced section between the rope attachment point and the
                main body), at the hook bore, and at any casting parting lines.
                Parting line cracks in cast balls can propagate rapidly under
                repeated loading.
              </li>
              <li>
                <strong>Rope attachment hardware:</strong> The wire rope
                attaches to the top of the headache ball through a spelter
                socket, swaged socket, or wedge socket. Inspect the attachment
                fitting using the criteria described in the wire rope termination
                section of this article.
              </li>
            </ul>

            <h3>Anti-Rotation Features</h3>
            <p>
              Many headache balls incorporate anti-rotation devices to prevent
              the ball body from spinning relative to the wire rope when the
              hook rotates under load. These may be guide rollers, rope-
              gripping collars, or swivel-limiting mechanisms:
            </p>
            <ul>
              <li>
                Verify that guide rollers (if present) rotate freely and are
                not worn flat. Worn rollers can seize against the rope and
                induce rope rotation.
              </li>
              <li>
                Check that any anti-rotation hardware is intact and that
                fasteners are tight. Loose anti-rotation hardware can foul the
                wire rope and cause an uncontrolled spin.
              </li>
            </ul>

            <h2>Swivel Inspection</h2>
            <p>
              Swivels allow the hook or load to rotate without transmitting
              that rotation to the wire rope. They are safety-critical
              components that must carry the full lifted load while permitting
              rotation under that load. Three swivel designs are common in
              crane service, each with different inspection considerations.
            </p>

            <div className="not-prose my-8 overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left font-semibold">Swivel Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Load Path</th>
                    <th className="px-4 py-3 text-left font-semibold">Rotation Mechanism</th>
                    <th className="px-4 py-3 text-left font-semibold">Key Inspection Points</th>
                    <th className="px-4 py-3 text-left font-semibold">Common Failure Mode</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Hook Swivel (integral)</td>
                    <td className="px-4 py-3">Hook shank through swivel body to block/bail</td>
                    <td className="px-4 py-3">Plain bore with shank shoulder bearing on swivel</td>
                    <td className="px-4 py-3">Shank nut retention; bore wear; cracks at shank transition</td>
                    <td className="px-4 py-3">Bore elongation from repetitive dynamic loading</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Ball-Bearing Swivel</td>
                    <td className="px-4 py-3">Axial load through ball bearing races; shear through inner race</td>
                    <td className="px-4 py-3">Radial ball bearing between inner and outer race</td>
                    <td className="px-4 py-3">Bearing play (radial &amp; axial); race pitting; seal condition; lubrication</td>
                    <td className="px-4 py-3">Race pitting from shock loads; seal failure leading to corrosion</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Thrust Bearing Swivel</td>
                    <td className="px-4 py-3">Axial load through thrust bearing; tension through body</td>
                    <td className="px-4 py-3">Needle or roller thrust bearing between mating faces</td>
                    <td className="px-4 py-3">Axial play; roller/needle condition; retention pin; body cracks</td>
                    <td className="px-4 py-3">Thrust bearing seizure; corrosion-induced binding under load</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Universal Swivel Inspection Criteria</h3>
            <p>
              Regardless of swivel type, the following criteria apply to all
              swivel inspections:
            </p>
            <ul>
              <li>
                <strong>Free rotation test:</strong> With no load applied,
                rotate the swivel through its full travel by hand. Rotation
                should be smooth and continuous with no binding, notching, or
                high spots. A swivel that binds under no load will seize under
                the load, transmitting torque to the wire rope.
              </li>
              <li>
                <strong>Axial play:</strong> Measure axial play (movement
                along the load axis) with a dial indicator. Axial play exceeding
                manufacturer specification (typically 0.010&Prime;&ndash;0.030&Prime;
                depending on swivel rated capacity) indicates bearing wear
                or body deformation.
              </li>
              <li>
                <strong>Body cracks:</strong> Inspect the swivel body at all
                cross-section transitions, pin holes, and at the mating face
                between rotating halves. MPI is recommended for swivels in
                critical or high-cycle service.
              </li>
              <li>
                <strong>Lubrication:</strong> Swivels with grease fittings
                must be lubricated per the manufacturer&apos;s schedule.
                Inspect for grease purging from seals (indicating over-
                lubrication) or dry, absent grease (indicating maintenance
                neglect). Sealed bearing swivels should be inspected for
                seal integrity and replaced when seals are damaged.
              </li>
              <li>
                <strong>Retention hardware:</strong> Verify all pins, rings,
                and fasteners that maintain swivel assembly integrity are
                present and undamaged. A swivel that separates under load
                releases the entire load.
              </li>
            </ul>

            <h2>Hook Inspection Integration</h2>
            <p>
              The hook attached to a load block or headache ball is subject to
              the same inspection criteria established by ASME B30.10, regardless
              of whether it is a permanently installed hook or a removable hook.
              For a complete treatment of hook inspection methodology, see our{" "}
              <Link href="/blog/crane-hook-inspection-criteria">
                crane hook inspection criteria guide
              </Link>
              . The following elements require particular attention in the
              context of load block and headache ball inspection.
            </p>

            <h3>Throat Opening and Twist</h3>
            <p>
              ASME B30.10 establishes two absolute removal-from-service
              thresholds for crane hooks:
            </p>
            <ul>
              <li>
                <strong>Throat opening increase &ge;15%:</strong> The throat
                opening (measured from the inside of the tip to the nearest
                point on the hook body across the opening) must not have
                increased by 15% or more over the original manufactured
                dimension. A throat opening increase indicates plastic
                deformation from overload or repeated shock loading. For a
                hook with an original throat opening of 4.000&Prime;, removal
                is required at 4.600&Prime; or greater.
              </li>
              <li>
                <strong>Hook twist &ge;10&deg;:</strong> Angular twist of the
                hook body from its original plane must not exceed 10&deg;.
                Twist indicates the hook has been subjected to torsional
                loading from off-center picks or side pulls. A twisted hook
                concentrates stress on one side of its cross-section, reducing
                effective load-carrying area.
              </li>
            </ul>

            <h3>Latch Condition</h3>
            <p>
              OSHA 1926.1412(d) and ASME B30.10 both require that hook safety
              latches be functional. A non-functional latch does not reduce the
              hook&apos;s rated capacity, but it eliminates the retention
              device that prevents slings and shackles from jumping off the
              hook tip. Inspect:
            </p>
            <ul>
              <li>
                Latch closes fully against the hook tip with no gap when
                released from the open position.
              </li>
              <li>
                Spring tension is sufficient to keep the latch closed against
                incidental sling contact during rigging operations.
              </li>
              <li>
                Latch body is not bent, cracked, or deformed. A bent latch
                has been loaded in bending &ndash; a condition it was not
                designed for &ndash; and the spring tension and alignment
                cannot be trusted.
              </li>
              <li>
                Pivot pin and retaining clip are present and functional.
              </li>
            </ul>

            <h2>Wire Rope Termination at the Load Block</h2>
            <p>
              The wire rope terminations at the load block &ndash; specifically
              the dead-end termination at the becket and the running-end
              termination at the drum &ndash; are load path connections that must
              be inspected as part of any load block inspection program. OSHA
              1926.1412 requires inspection of wire rope end connections.
            </p>

            <h3>Wedge Socket Inspection</h3>
            <p>
              Wedge sockets are the most common wire rope termination at crane
              beckets and headache ball rope attachments because they can be
              field-installed and re-terminated. Inspection criteria:
            </p>
            <ul>
              <li>
                <strong>Wedge engagement:</strong> Verify the wedge is fully
                seated in the socket body and that the dead-end tail of the
                rope (the &ldquo;pigtail&rdquo;) extends a minimum of 6 rope
                diameters beyond the socket for smaller ropes and per
                manufacturer specification for larger ropes. A tail that is too
                short may allow the wedge to pull through under load.
              </li>
              <li>
                <strong>Pigtail restraint:</strong> The pigtail must be secured
                with a wire rope clip or other approved device to prevent it
                from fouling in the sheaves. The clip must be properly installed
                with the U-bolt on the dead end (pigtail), not on the live end.
              </li>
              <li>
                <strong>Socket body condition:</strong> Inspect the socket body
                for cracks at the pin holes and at the rope entry point.
                Elongated pin holes indicate the socket has been loaded beyond
                its capacity or has experienced fatigue.
              </li>
              <li>
                <strong>Wedge condition:</strong> Inspect the wedge for cracks
                and for wear on the bearing face. A cracked or excessively worn
                wedge must be replaced before the termination is reused.
              </li>
              <li>
                <strong>Rope condition at socket entry:</strong> The wire rope
                at the point where it exits the wedge socket is subject to
                bending fatigue and contact pressure. Inspect for broken wires,
                kinking, and bird-caging within one rope diameter of the socket
                mouth. Wire breaks in this zone require evaluation per ASME
                B30.5 wire rope retirement criteria.
              </li>
            </ul>

            <h3>Spelter Socket Inspection</h3>
            <p>
              Spelter (poured zinc or resin) sockets achieve 100% of wire rope
              breaking strength when properly installed and are common on large
              capacity load blocks. They cannot be field-installed or re-poured
              without special equipment. Inspect:
            </p>
            <ul>
              <li>
                <strong>Socket body:</strong> Inspect for cracks at the rope
                entry taper, at pin holes, and along the body length. MPI is
                recommended for spelter sockets in critical or high-cycle service.
              </li>
              <li>
                <strong>Poured termination integrity:</strong> The zinc or resin
                pour must be flush with or slightly below the socket opening.
                A sunken or porous pour surface indicates incomplete fill during
                installation, compromising the termination strength.
              </li>
              <li>
                <strong>Rope exit zone:</strong> As with wedge sockets, inspect
                the rope within two rope diameters of the socket mouth for broken
                wires, kinking, and corrosion. This zone is subjected to high
                bending stresses as the rope enters the socket taper.
              </li>
              <li>
                <strong>Pin and keeper hardware:</strong> Verify the connection
                pin through the socket is the correct size and grade, and that
                all retention hardware (cotter pins, keeper plates) is in place.
              </li>
            </ul>

            <h2>Anti-Two-Block Device Integration with the Load Block</h2>
            <p>
              Two-blocking occurs when the load block is raised until it
              contacts the boom tip or upper sheave assembly, at which point
              the full rope tension is applied to the boom tip structure and
              the wire rope simultaneously. The rope will typically fail first,
              dropping the load. OSHA 1926.1415 requires anti-two-block (ATB)
              devices on cranes covered by 29 CFR 1926 Subpart CC. ASME B30.5
              has required ATB devices on mobile cranes since the 2004 edition.
            </p>
            <p>
              For a complete guide to ATB device inspection and testing, see our{" "}
              <Link href="/blog/crane-anti-two-block-safety">
                anti-two-block safety guide
              </Link>
              . The following covers ATB inspection points specific to the load
              block assembly:
            </p>
            <ul>
              <li>
                <strong>ATB weight and hanger mounting:</strong> Most load block
                ATB systems use a weighted switch mounted on the block that
                contacts a striker on the boom tip structure when two-blocking
                distance is approached. Inspect the weight hanger for cracks,
                deformation, and secure attachment to the load block side plate.
                Verify the weight itself is the correct size and is retained
                by the appropriate cotter pin or snap ring.
              </li>
              <li>
                <strong>ATB electrical connections:</strong> Inspect the cable
                or slip-ring connection between the ATB switch on the load block
                and the control system. Look for frayed insulation, loose
                connectors, and evidence of moisture intrusion into connectors.
                A damaged ATB cable that causes a false circuit-open condition
                may be misdiagnosed as a functional ATB, masking a disabled
                safety system.
              </li>
              <li>
                <strong>Functional test at every shift:</strong> OSHA 1926.1412
                requires that ATB devices be tested for proper function before
                each shift. The test should verify that the ATB activates the
                control cutout before the block contacts the boom tip. Document
                the test result in the pre-shift inspection record.
              </li>
              <li>
                <strong>ATB bypass status:</strong> Some cranes allow the ATB to
                be bypassed for specific operations. Verify that any ATB bypass
                is used only under qualified person supervision per the
                manufacturer&apos;s procedure and that the bypass is removed
                immediately after the operation requiring it is complete.
              </li>
            </ul>

            <h2>Key Takeaways</h2>
            <ul>
              <li>
                Load blocks, headache balls, and swivels are load-path
                components with no redundancy. Every inspection finding must
                be evaluated against published removal criteria &ndash; there
                is no safe &ldquo;keep an eye on it&rdquo; posture for cracks
                or severely worn bearing surfaces.
              </li>
              <li>
                Sheave groove gauging is a required inspection task per ASME
                B30.5, not an optional best practice. Running an undersized
                rope in an oversized groove or an oversized rope in a
                tight groove accelerates wire rope failure and reduces
                the crane&apos;s effective rated capacity.
              </li>
              <li>
                Center pin retention hardware failures are a common field
                finding. A missing cotter pin on the center pin allows the
                pin to walk out under dynamic loading, releasing the sheave
                assembly inside the block frame.
              </li>
              <li>
                Swivel inspection must include a rotation test under no load.
                A swivel that binds without load will seize under load,
                transmitting hook rotation into the wire rope and inducing
                rope rotation damage.
              </li>
              <li>
                ASME B30.10 removal thresholds for hooks &ndash; 15% throat
                opening increase and 10&deg; twist &ndash; are absolute
                criteria, not guidelines. These measurements must be taken
                with calibrated tools and documented in the inspection record.
              </li>
              <li>
                Wedge socket pigtail tail length and pigtail clip installation
                are among the most commonly found deficiencies in the field.
                Both can be corrected during the inspection, but the finding
                must be documented and the correction verified before the crane
                returns to service.
              </li>
              <li>
                The ATB device mounted on the load block must be functionally
                tested every shift per OSHA 1926.1412. A weight hanger crack
                or a frayed ATB cable found during load block inspection
                renders the ATB non-functional and requires crane shutdown
                until the device is repaired and retested.
              </li>
            </ul>

            {/* CTA */}
            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Document Load Block Inspections Digitally
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                CraneCheck includes dedicated load block, headache ball, and
                swivel inspection checklists aligned to ASME B30.5, B30.10,
                and OSHA 1926.1412 &ndash; with measurement fields for throat
                opening, hook twist, sheave groove wear, and ATB functional
                test results. Replace paper forms with a digital record your
                team can access in the field.
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
                  href="/blog/crane-hook-inspection-criteria"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Crane Hook Inspection: Deformation Limits &amp; Replacement Criteria
                  </h3>
                </Link>
                <Link
                  href="/blog/crane-wire-rope-inspection-guide"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Crane Wire Rope Inspection Guide
                  </h3>
                </Link>
                <Link
                  href="/blog/rigging-hardware-inspection-shackles-turnbuckles"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Inspection</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Rigging Hardware Inspection: Shackles &amp; Turnbuckles
                  </h3>
                </Link>
                <Link
                  href="/blog/crane-anti-two-block-safety"
                  className="block border border-gray-100 rounded-lg p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-brand">Safety</span>
                  <h3 className="font-semibold text-navy mt-1">
                    Anti-Two-Block Device Safety &amp; Inspection
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-load-block-headache-ball-inspection" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
