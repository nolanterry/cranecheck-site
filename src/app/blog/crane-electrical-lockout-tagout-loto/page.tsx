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
  title:
    "Crane Lockout/Tagout (LOTO) Procedures for Safe Inspection & Maintenance per OSHA 29 CFR 1910.147",
  description:
    "Complete guide to crane lockout/tagout (LOTO) procedures under OSHA 29 CFR 1910.147 and 1926.1417 — covering authorized employees, energy isolation, step-by-step shutdown sequences, group lockout, crane-specific challenges, and annual training requirements.",
  alternates: {
    canonical: "/blog/crane-electrical-lockout-tagout-loto",
  },
};

export default function CraneLockoutTagoutPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Crane Lockout/Tagout (LOTO) Procedures for Safe Inspection & Maintenance per OSHA 29 CFR 1910.147",
    description:
      "Complete guide to crane lockout/tagout (LOTO) procedures under OSHA 29 CFR 1910.147 and 1926.1417 — covering authorized employees, energy isolation, step-by-step shutdown sequences, group lockout, crane-specific challenges, and annual training requirements.",
    datePublished: "2026-05-09",
    dateModified: "2026-05-09",
    author: {
      "@type": "Person",
      name: "Nolan Terry",
      url: "https://cranecheck.co/blog/authors/nolan-terry",
    },
    publisher: {
      "@type": "Organization",
      name: "CraneCheck",
      url: "https://cranecheck.co",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://cranecheck.co/blog/crane-electrical-lockout-tagout-loto",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cranecheck.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://cranecheck.co/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Crane Lockout/Tagout Procedures",
        item: "https://cranecheck.co/blog/crane-electrical-lockout-tagout-loto",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <ReadingProgressBar />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Compliance
              </span>
              <span className="text-xs text-gray-400">May 9, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Lockout/Tagout (LOTO) Procedures for Safe Inspection &amp;
              Maintenance per OSHA 29 CFR 1910.147
            </h1>
            <AuthorByline
              name="Nolan Terry"
              slug="nolan-terry"
              role="Founder &amp; Lead Inspector"
            />
            <p className="text-lg text-gray-300 max-w-2xl">
              Every year, maintenance workers are killed or seriously injured
              because crane energy was not properly isolated before work began.
              A proper lockout/tagout program under OSHA 29 CFR 1910.147 is
              the difference between a safe maintenance task and a fatality.
              This guide walks through every element of an effective crane LOTO
              program.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />

            <div className="prose prose-gray max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Why LOTO Is Critical for Crane Inspection and Maintenance
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cranes are among the most energy-dense machines on any
                construction site or industrial facility. A single overhead
                bridge crane can carry hundreds of horsepower in hoist motors,
                operate at 460 volts three-phase, store thousands of
                pound-feet of hydraulic pressure in accumulator circuits, and
                hold multi-ton suspended loads that possess enormous
                gravitational potential energy. When a maintenance technician
                or inspector begins work on any part of that system without
                first controlling every source of hazardous energy, the
                consequences can be catastrophic and instant.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA&apos;s Bureau of Labor Statistics data consistently shows
                that contact with machinery and equipment &mdash; the category
                that includes unexpected crane energization &mdash; accounts
                for a significant share of construction and manufacturing
                fatalities each year. OSHA estimates that proper lockout/tagout
                programs could prevent approximately 120 deaths and 50,000
                injuries annually across all industries. In the crane and
                rigging sector specifically, incidents where equipment was
                inadvertently energized during maintenance are among the most
                preventable fatalities in the OSHA fatality database. Many of
                these incidents share the same root cause: no written LOTO
                procedure, no locks applied, or an assumption that the crane
                was safe because the operator stepped away from the controls.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Whether you are a{" "}
                <Link href="/blog/how-to-become-crane-inspector">
                  crane inspector
                </Link>{" "}
                conducting an{" "}
                <Link href="/blog/annual-crane-inspection-requirements">
                  annual inspection
                </Link>
                , a maintenance technician replacing a brake assembly, or an
                electrician troubleshooting a limit switch fault, LOTO is not
                optional. It is the regulatory floor, not the ceiling, and
                every crane maintenance operation should be built around a
                machine-specific, written LOTO procedure.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                OSHA 29 CFR 1910.147 Requirements as Applied to Cranes
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The Control of Hazardous Energy standard, 29 CFR 1910.147,
                applies to the servicing and maintenance of machines and
                equipment in general industry where the unexpected energization,
                start-up, or release of stored energy could harm employees.
                For construction operations, the parallel requirement appears
                in 29 CFR 1926.1417(p), which explicitly references 1910.147
                for LOTO requirements when crane maintenance occurs. NFPA 70E,
                the standard for electrical safety in the workplace, provides
                the detailed electrical isolation and arc-flash requirements
                that complement the OSHA framework.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The standard distinguishes between two categories of employees
                who interact with LOTO:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  <strong>Authorized employees</strong> are trained workers
                  who implement the lockout or tagout procedure &mdash;
                  meaning they physically apply locks and verify energy
                  isolation before performing maintenance. On crane jobs, this
                  is typically the mechanic, electrician, or qualified inspector
                  performing the work.
                </li>
                <li>
                  <strong>Affected employees</strong> are workers who operate
                  the crane in the normal course of their work and who must be
                  notified that the crane is locked out and must not be
                  operated. Operators, riggers, and signal persons all fall
                  into this category during maintenance periods.
                </li>
                <li>
                  <strong>Other employees</strong> are any personnel whose
                  work area overlaps with the locked-out crane and who must
                  understand that they must not attempt to restart or
                  re-energize the equipment.
                </li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The standard requires that employers develop, document, and
                implement an energy control program that includes: written
                machine-specific procedures for each piece of equipment with
                more than one energy source, training for all authorized and
                affected employees, and periodic inspections of each energy
                control procedure at least annually. The energy control
                procedure must be specific enough that an authorized employee
                can follow it without ambiguity &mdash; generic procedures
                that say &ldquo;shut off power and lock out&rdquo; do not
                satisfy the standard.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                For overhead cranes, the additional electrical safety standard
                at 29 CFR 1910.333 applies whenever workers perform electrical
                work on crane circuits. This standard requires that energized
                electrical work be avoided unless de-energization introduces
                additional hazards, and that electrical LOTO comply with NFPA
                70E procedures including arc-flash risk assessment and
                appropriate personal protective equipment.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Types of Hazardous Energy on Cranes
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cranes present a wider variety of hazardous energy types than
                most industrial equipment. An effective LOTO procedure must
                identify and address every energy source present on the
                specific crane model being serviced. Failing to recognize a
                single energy source &mdash; such as a charged hydraulic
                accumulator or a spring-loaded counterbalance valve &mdash;
                can be fatal even if all other sources are properly isolated.
              </p>

              <div className="not-prose my-8 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-navy text-white text-left">
                      <th className="px-4 py-3 font-semibold">Energy Type</th>
                      <th className="px-4 py-3 font-semibold">
                        Crane Examples
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Isolation Method
                      </th>
                      <th className="px-4 py-3 font-semibold">
                        Verification Method
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Electrical</td>
                      <td className="px-4 py-3">
                        Hoist motors, control circuits, lighting, LMI systems,
                        festoon bus bars, pendant controls
                      </td>
                      <td className="px-4 py-3">
                        Main disconnect switch, circuit breaker lockout, plug
                        lockout
                      </td>
                      <td className="px-4 py-3">
                        Test with calibrated meter; test-before-touch per
                        NFPA 70E
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Hydraulic</td>
                      <td className="px-4 py-3">
                        Boom hoist cylinders, outrigger cylinders, counterweight
                        cylinders, jib cylinders, swing motors
                      </td>
                      <td className="px-4 py-3">
                        Shut off hydraulic pump, relieve accumulator pressure,
                        block cylinders mechanically
                      </td>
                      <td className="px-4 py-3">
                        Verify zero pressure on gauge at work point; check
                        accumulator bleed valve
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">Pneumatic</td>
                      <td className="px-4 py-3">
                        Air-over-hydraulic systems, pneumatic brakes, air
                        horns, air-actuated clutches
                      </td>
                      <td className="px-4 py-3">
                        Close supply valve, bleed downstream pressure, block
                        open valve in safe position
                      </td>
                      <td className="px-4 py-3">
                        Verify gauge reads zero; listen for residual air
                        release; actuate controls to confirm no movement
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">
                        Mechanical / Gravity
                      </td>
                      <td className="px-4 py-3">
                        Suspended boom sections, raised jib, loaded hook block,
                        counterweights, elevated trolleys
                      </td>
                      <td className="px-4 py-3">
                        Lower load to ground, block boom in lowest safe
                        position, install boom prop or mechanical stop
                      </td>
                      <td className="px-4 py-3">
                        Visual confirmation that load is grounded; physical
                        check of mechanical block or prop
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-medium">
                        Stored Spring Energy
                      </td>
                      <td className="px-4 py-3">
                        Drum brake springs, spring-applied hydraulic release
                        brakes, spring-loaded counterbalance valves, tension
                        spring assemblies
                      </td>
                      <td className="px-4 py-3">
                        Follow manufacturer procedure to safely compress or
                        extend spring to neutral; use proper restraints
                      </td>
                      <td className="px-4 py-3">
                        Verify no spring tension exists before removal;
                        inspect per manufacturer service manual
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Thermal energy (heat from recently operated engines, exhaust
                systems, and hydraulic oil) and chemical energy (battery
                electrolyte, fuel) are additional hazards that require
                consideration, though they are less likely to produce sudden
                unexpected motion. The LOTO procedure must address all energy
                forms present, not just the most obvious electrical source.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Step-by-Step LOTO Procedure for Crane Maintenance
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1910.147(d) specifies eight steps for implementing an
                energy control procedure. For cranes, these steps must be
                adapted to the specific equipment and all energy sources
                present. The following sequence applies to a typical mobile
                hydraulic crane or overhead bridge crane, and should be
                modified based on your machine-specific written procedure.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 1 &mdash; Prepare for shutdown.</strong> Review
                the written machine-specific LOTO procedure before beginning.
                Identify all energy sources, isolation points, and the location
                of all lockout devices and locks. Notify all affected
                employees &mdash; operators, riggers, signal persons, and any
                other personnel in the work area &mdash; that the crane is
                being taken out of service for maintenance. Do not begin the
                shutdown until all affected personnel are aware and clear of
                the crane&apos;s operating radius.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 2 &mdash; Shut down the equipment.</strong>{" "}
                Follow the normal shutdown procedure: lower all suspended loads
                to the ground, position the boom at its lowest safe working
                angle or in the travel position, retract all outriggers if safe
                to do so, and shut off the engine or disconnect the main power
                supply. Do not proceed to the lockout step until the crane is
                in a completely stable and de-loaded condition.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 3 &mdash; Isolate all energy sources.</strong>{" "}
                Open the main electrical disconnect, close all hydraulic supply
                valves, shut the pneumatic supply valve, and position any
                mechanical interlocks to the safe position. On overhead cranes,
                this means opening the main runway disconnect switch, not
                merely turning off the bridge crane pendant. On mobile cranes,
                this means shutting off the engine and turning the ignition key
                to the off position &mdash; and then removing the key.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 4 &mdash; Apply lockout devices.</strong> Each
                authorized employee applying their own lock to each energy
                isolation point is the fundamental principle of 1910.147.
                Apply a hasp at the main electrical disconnect to accommodate
                multiple locks. Apply locks to hydraulic valve handles using
                valve lockout covers. Apply a lockout to the ignition or
                starter circuit on engine-powered cranes. Each lock must be
                personally applied by the authorized employee who will perform
                the work, with their own personal lock keyed uniquely to them.
                Attach a lockout tag at each lock point identifying the
                employee name, date, and work description.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 5 &mdash; Release or restrain stored energy.</strong>{" "}
                This is the most commonly overlooked step and the one that
                kills people. After locks are applied, all stored energy must
                be dissipated or mechanically restrained before work begins.
                Operate all hydraulic control functions to relieve cylinder
                pressure. Open accumulator bleed valves and verify pressure
                gauges read zero. Block the boom mechanically if work requires
                the boom to remain elevated. Block the hook block against
                lowering if it must remain elevated during the work. Relieve
                air pressure from pneumatic circuits. Any spring-loaded
                assembly that will be disassembled must be restrained per the
                manufacturer&apos;s service manual before fasteners are removed.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 6 &mdash; Verify energy isolation (the try-out).</strong>{" "}
                Before touching any component, verify that all energy is at
                zero. Test the electrical isolation with a calibrated
                non-contact voltage tester or digital multimeter, confirming
                zero volts at the work point &mdash; not just at the
                disconnect. Attempt to operate the crane from the normal
                control position (operator cab or pendant) while standing
                clear, verifying that no motion occurs. Check hydraulic
                pressure gauges at the point of work. Physically check that
                blocked components cannot move. Only after completing this
                verification step may work begin.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 7 &mdash; Perform the maintenance work.</strong>{" "}
                Work within the scope of the LOTO procedure. If the scope of
                work changes or additional energy sources are discovered,
                stop work and address the new energy sources before continuing.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Step 8 &mdash; Restore equipment to service.</strong>{" "}
                Ensure all tools, test equipment, and personnel are clear of
                the crane. Remove all mechanical restraints and blocking.
                Reconnect any components that were disconnected. Notify all
                affected employees that LOTO is being removed and the crane
                will be re-energized. Each authorized employee removes only
                their own lock. Re-energize in the reverse order of isolation.
                Conduct a post-maintenance operational test before returning
                the crane to production service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Multi-Employer and Group Lockout Considerations
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Crane maintenance on construction sites frequently involves
                multiple employers &mdash; the crane owner, the general
                contractor, an electrical subcontractor, and potentially a
                crane manufacturer&apos;s service technician all working on
                the same piece of equipment. OSHA 1910.147(f)(3) requires
                that when multiple authorized employees work simultaneously
                on the same equipment, a group lockout procedure must be
                implemented that affords each employee the same level of
                protection as individual lockout.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The most common and OSHA-compliant group lockout method uses
                a lockout hasp and a group lockout box. The authorized employee
                responsible for coordinating the LOTO (often called the
                primary authorized employee) applies their lock to each
                energy isolation point, then places the keys to those locks
                inside a lockout box, which is then secured with the lockout
                hasp. Each person working on the crane places their own
                personal lock on the hasp. No one can retrieve the energy
                isolation keys until every worker has removed their personal
                lock from the hasp. This structure ensures that the crane
                cannot be re-energized while any worker&apos;s lock remains on
                the box.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Under OSHA&apos;s{" "}
                <Link href="/blog/osha-multi-employer-crane-liability">
                  multi-employer liability rules
                </Link>
                , the controlling employer on a construction site has
                responsibility for ensuring that all employers and their
                employees comply with LOTO requirements on the site. If a
                subcontractor&apos;s technician bypasses LOTO, the general
                contractor can be cited for failing to enforce compliance.
                Written coordination procedures between employers &mdash;
                addressed in the site safety plan &mdash; are essential.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Crane-Specific LOTO Challenges
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Cranes present several energy isolation challenges that are
                not typical in other industrial equipment LOTO programs. These
                crane-specific challenges must be explicitly addressed in the
                machine-specific written procedure.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  <strong>Suspended loads:</strong> OSHA 1910.147 and
                  1926.1417 both prohibit work under suspended loads. Before
                  any maintenance LOTO, all loads must be lowered to the
                  ground or a stable support. If the work task requires the
                  hook block to remain elevated (for example, replacing a
                  load sheave on the hook block), mechanical supports must
                  be installed under the load block and the hoist rope must
                  be blocked against movement. This must be documented in
                  the LOTO procedure.
                </li>
                <li>
                  <strong>Boom position and gravity energy:</strong> A crane
                  boom at operating angle contains enormous gravitational
                  potential energy. For most maintenance tasks, the boom
                  must be fully lowered and resting on its transport support
                  before LOTO is applied. When boom maintenance requires
                  the boom to remain elevated, a boom prop, blocking, or
                  the crane&apos;s own hoist system (separately isolated)
                  must be used to mechanically support the boom. Simply
                  applying hydraulic holding-load valves is not adequate
                  &mdash; those valves are not a substitute for mechanical
                  blocking under LOTO.
                </li>
                <li>
                  <strong>Hydraulic accumulator pressure:</strong> Many
                  mobile cranes use nitrogen-charged hydraulic accumulators
                  to maintain boom hoist pressure, smooth counterweight
                  cylinder operation, or store emergency energy for brake
                  release. These accumulators remain pressurized after the
                  engine is shut down and the main hydraulic pump stops.
                  Failing to bleed accumulators before disconnecting
                  hydraulic lines can result in sudden, violent cylinder
                  movement or high-pressure hydraulic injection injuries.
                  The LOTO procedure must include the specific bleed valve
                  location and procedure for each accumulator on the crane.
                </li>
                <li>
                  <strong>Overhead crane disconnect locations:</strong> On
                  overhead bridge cranes, the main power disconnect is
                  typically located at the end of the runway, at floor level
                  or at elevation, remote from the crane itself. Workers
                  must know the exact location of every disconnect for every
                  crane in the facility and verify that the disconnect they
                  are locking out actually controls the crane being serviced
                  &mdash; not an adjacent crane on the same runway. Label
                  all disconnects clearly with the crane identification
                  number, and include disconnect location in the
                  machine-specific LOTO procedure.
                </li>
                <li>
                  <strong>Collector bars and festoon power:</strong> Overhead
                  crane festoon systems and conductor bar (bus bar) systems
                  remain energized even after the crane&apos;s main
                  disconnect is opened, because the energy source is the
                  building&apos;s electrical distribution system. Workers
                  climbing on top of the bridge or working near the collector
                  assemblies must ensure the runway conductor bars are
                  de-energized at the building&apos;s distribution panel,
                  not just at the crane disconnect.
                </li>
                <li>
                  <strong>Engine ignition and starting systems:</strong> On
                  diesel-powered mobile cranes, the engine represents both
                  a mechanical energy source (it can start and power the
                  crane) and an electrical energy source (the starter circuit
                  operates at 12 or 24 VDC). Locking out the ignition key
                  switch alone is not sufficient if other starting pathways
                  exist (jump start terminals, remote start systems). The
                  LOTO procedure must address all starting methods specific
                  to the crane model.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Annual LOTO Procedure Review and Training Requirements
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1910.147(c)(6) requires that the employer conduct a
                periodic inspection of the energy control procedure at least
                annually. This inspection must be performed by an authorized
                employee other than the one who normally applies the LOTO
                for that machine. The purpose is to verify that the procedure
                remains accurate, that it reflects the current crane
                configuration and energy sources, and that authorized employees
                understand and follow it correctly.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The annual procedure inspection must be documented in writing
                and must include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  The machine or equipment being inspected (crane make, model,
                  and serial number)
                </li>
                <li>
                  The date of the inspection
                </li>
                <li>
                  The names of the authorized employees covered by the
                  procedure
                </li>
                <li>
                  The name of the person performing the inspection
                </li>
                <li>
                  Any deficiencies found and corrective actions taken to
                  update the procedure
                </li>
              </ul>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Training requirements under 1910.147(c)(7) mandate that
                authorized employees receive training that covers recognition
                of applicable hazardous energy sources, the type and magnitude
                of energy present, and the methods and means necessary for
                energy isolation and control. Affected employees must be
                trained on the purpose and use of energy control procedures
                and the prohibition against attempting to restart or
                re-energize locked out equipment. Training must be conducted
                when an employee is first assigned work that involves LOTO,
                whenever there is a change in job assignments or energy sources
                that creates a new hazard, and whenever there is reason to
                believe the employee does not understand or is not following
                the procedure correctly.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                As part of your overall{" "}
                <Link href="/blog/crane-safety-meeting-topics-toolbox-talks">
                  crane safety meeting program
                </Link>
                , periodic LOTO toolbox talks keep energy control awareness
                current and provide an opportunity to review changes to
                machine-specific procedures when cranes are modified or when
                new crane types are added to the fleet. Track LOTO training
                records alongside your{" "}
                <Link href="/blog/crane-maintenance-log-requirements">
                  crane maintenance logs
                </Link>{" "}
                to ensure compliance documentation is complete and accessible
                during an OSHA inspection.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>
                  OSHA 29 CFR 1910.147 requires written, machine-specific LOTO
                  procedures for every crane with more than one hazardous energy
                  source. Generic procedures do not satisfy the standard.
                </li>
                <li>
                  Cranes present at least five categories of hazardous energy:
                  electrical, hydraulic, pneumatic, mechanical/gravity, and
                  stored spring energy. Every source must be addressed in the
                  LOTO procedure &mdash; not just the most obvious one.
                </li>
                <li>
                  The stored energy release step (Step 5) is the most commonly
                  missed. Hydraulic accumulators, spring brakes, and elevated
                  booms all retain energy after the main disconnect is locked.
                  Verify zero energy at the point of work, not just at the
                  isolation point.
                </li>
                <li>
                  Group lockout using a hasp and lockout box is required when
                  multiple authorized employees work simultaneously on the
                  same crane. Each worker must apply their own personal lock
                  to the group box.
                </li>
                <li>
                  Crane-specific challenges &mdash; suspended loads, boom
                  gravity energy, hydraulic accumulators, remote disconnect
                  locations, and conductor bar power &mdash; must be explicitly
                  addressed in each machine-specific LOTO procedure.
                </li>
                <li>
                  Annual LOTO procedure inspections are required by
                  1910.147(c)(6) and must be documented in writing. The
                  inspection must be performed by an authorized employee
                  other than the one who routinely uses the procedure.
                </li>
                <li>
                  NFPA 70E and 29 CFR 1910.333 layer additional requirements
                  on top of 1910.147 for electrical work on crane circuits,
                  including arc-flash risk assessment and appropriate PPE.
                  All three regulatory layers apply simultaneously to crane
                  electrical maintenance tasks.
                </li>
              </ul>

              {/* CTA */}
              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Keep Your LOTO Documentation Inspection-Ready
                </h2>
                <p className="text-white/90 mb-8 max-w-xl mx-auto">
                  CraneCheck lets you attach machine-specific LOTO procedures
                  directly to each crane asset, track annual procedure reviews,
                  and generate audit-ready compliance reports in seconds &mdash;
                  so you&apos;re never caught without documentation during an
                  OSHA inspection.
                </p>
                <a
                  href="/pricing"
                  className="inline-block bg-white text-brand hover:bg-gray-100 font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4"
                >
                  View Pricing
                </a>
                <a
                  href="/demo"
                  className="inline-block border border-white text-white hover:bg-white/10 font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
                >
                  Request Demo
                </a>
              </div>
            </div>
          </div>
        </article>
        <RelatedPosts currentSlug="crane-electrical-lockout-tagout-loto" />
        <NewsletterSignup />
        <Footer />
      </main>
    </>
  );
}
