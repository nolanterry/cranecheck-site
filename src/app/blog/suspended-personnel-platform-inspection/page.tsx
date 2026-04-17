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
  title: "Suspended Personnel Platform Inspection: Man Basket Safety, OSHA 1926.1431 & ASME B30.23 Requirements",
  description: "Complete guide to suspended personnel platform (man basket) inspection requirements including OSHA 1926.1431 compliance, ASME B30.23 standards, trial lift procedures, 50% capacity derating, communication systems, and platform construction inspection.",
  alternates: { canonical: "/blog/suspended-personnel-platform-inspection" },
};

export default function SuspendedPersonnelPlatformInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Suspended Personnel Platform Inspection: Man Basket Safety, OSHA 1926.1431 & ASME B30.23 Requirements",
    "description": "Complete guide to suspended personnel platform (man basket) inspection requirements including OSHA 1926.1431 compliance, ASME B30.23 standards, trial lift procedures, 50% capacity derating, communication systems, and platform construction inspection.",
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
      "@id": "https://cranecheck.co/blog/suspended-personnel-platform-inspection"
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
        "name": "Suspended Personnel Platform Inspection",
        "item": "https://cranecheck.co/blog/suspended-personnel-platform-inspection"
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Safety</span>
              <span className="text-xs text-gray-400">April 17, 2026</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Suspended Personnel Platform Inspection: Man Basket Safety, OSHA 1926.1431 &amp; ASME B30.23 Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to suspended personnel platform (man basket) inspection requirements including OSHA 1926.1431 compliance, ASME B30.23 standards, trial lift procedures, 50% capacity derating, communication systems, and platform construction inspection.
            </p>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hoisting workers in a suspended personnel platform — commonly called a man basket — is the single highest-risk
                crane operation recognized by OSHA. Unlike material lifts where a dropped load causes property damage, a
                personnel platform failure puts human lives in immediate danger. For this reason, OSHA 29 CFR 1926.1431
                imposes the most stringent requirements in the entire crane standard, and violations carry the steepest penalties.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This guide covers every inspection requirement for suspended personnel platform operations — from the platform
                construction standards and 50% capacity derating calculations to the trial lift procedures, communication systems,
                and documentation that must be in place before any worker leaves the ground. Whether you&apos;re a crane operator,
                lift director, safety manager, or inspector, understanding these requirements is non-negotiable.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                OSHA 1926.1431 Requirements Overview
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 29 CFR 1926.1431 governs all personnel hoisting operations with cranes and derricks in construction.
                The standard establishes a clear prohibition hierarchy: personnel platforms are only permitted when conventional
                means of reaching the work area — such as scaffolding, aerial lifts, or stairways — are more hazardous or
                not feasible. This is not a convenience decision; it must be documented and justified before any personnel
                hoisting operation begins.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The key provisions of 1926.1431 include:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Prohibition hierarchy (1926.1431(a)):</strong> Personnel platforms shall not be used unless the employer demonstrates that erecting or using other access methods would expose workers to greater hazards or is infeasible</li>
                <li><strong>Platform design requirements (1926.1431(c)):</strong> Specific construction standards for the platform itself including guardrails, toe boards, flooring, attachment points, and overhead protection</li>
                <li><strong>50% capacity derating (1926.1431(d)):</strong> The total load (platform weight + rigging weight + personnel + tools) must not exceed 50% of the crane&apos;s rated capacity at the maximum intended radius</li>
                <li><strong>Trial lift requirements (1926.1431(e)):</strong> A trial lift with the unoccupied platform loaded to the anticipated lift weight must be performed at each new work location</li>
                <li><strong>Proof test (1926.1431(f)):</strong> A proof test at 125% of the platform&apos;s rated capacity must be conducted before initial use and after any repair or modification</li>
                <li><strong>Operational requirements (1926.1431(g)-(k)):</strong> Restrictions on travel, boom retraction, crane functions while occupied, and weather conditions</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                ASME B30.23 Personnel Platform Standards
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                ASME B30.23 &quot;Personnel Lifting Systems&quot; provides the consensus standard that complements OSHA&apos;s regulatory
                requirements. While OSHA 1926.1431 is enforceable law, ASME B30.23 provides additional technical detail
                and represents industry best practice. Where ASME requirements exceed OSHA minimums, following the more
                stringent standard is considered the professional standard of care.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Key ASME B30.23 provisions beyond OSHA minimums include:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Design factor of 5:1</strong> for structural members of the personnel platform, meaning the platform must withstand five times its rated load before failure</li>
                <li><strong>Welding requirements:</strong> All structural welds must be performed by AWS-certified welders and meet AWS D1.1 or D14.1 standards</li>
                <li><strong>Non-destructive examination:</strong> Critical welds on the platform and attachment hardware require NDE inspection per ASME standards</li>
                <li><strong>Marking and identification:</strong> Each platform must have a permanently affixed plate showing rated capacity, platform weight, manufacturer, serial number, and date of manufacture</li>
                <li><strong>Periodic inspection intervals:</strong> ASME B30.23 defines frequent (daily/each use) and periodic (annual) inspection requirements with specific acceptance criteria</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Platform Construction Inspection Checklist
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Before any personnel hoisting operation, the platform itself must be thoroughly inspected. OSHA 1926.1431(c) and
                ASME B30.23 establish the construction standards that inspectors must verify. A deficient platform must be removed
                from service immediately — there is no &quot;monitor and continue&quot; option when workers&apos; lives are at stake.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Component</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Requirement</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Inspection Criteria</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-4 py-3 text-gray-700">Top rail height</td><td className="px-4 py-3 text-gray-700">42 inches minimum (± 3 inches)</td><td className="px-4 py-3 text-gray-700">Measure from platform floor; verify no deformation reducing height</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Mid rail</td><td className="px-4 py-3 text-gray-700">Required at approximately mid-height</td><td className="px-4 py-3 text-gray-700">Check attachment welds, verify spacing, no bending or damage</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Toe boards</td><td className="px-4 py-3 text-gray-700">4 inches minimum height on all open sides</td><td className="px-4 py-3 text-gray-700">Verify secure attachment, no gaps exceeding 1 inch at floor level</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Floor integrity</td><td className="px-4 py-3 text-gray-700">Solid floor, slip-resistant surface, drainage</td><td className="px-4 py-3 text-gray-700">No holes, tears, or excessive corrosion; verify drain holes are clear</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Access gate</td><td className="px-4 py-3 text-gray-700">Self-closing, positive latch, inward-opening</td><td className="px-4 py-3 text-gray-700">Operate gate multiple times; verify latch engages automatically</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Overhead protection</td><td className="px-4 py-3 text-gray-700">Required when exposed to falling objects</td><td className="px-4 py-3 text-gray-700">Verify screen/mesh integrity, no larger than 1/2-inch openings</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Data plate</td><td className="px-4 py-3 text-gray-700">Permanently affixed, legible</td><td className="px-4 py-3 text-gray-700">Confirm rated capacity, weight, manufacturer, serial number visible</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Personal fall arrest anchors</td><td className="px-4 py-3 text-gray-700">Anchor points rated for 5,000 lbs per person</td><td className="px-4 py-3 text-gray-700">Verify anchor points, inspect for cracks or deformation at weld points</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                50% Capacity Derating: Load Limit Calculations
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The 50% derating rule under OSHA 1926.1431(d) is the most significant capacity restriction in crane operations.
                When hoisting personnel, the total suspended load — including platform weight, rigging weight, personnel weight
                (calculated at a minimum of 250 lbs per person), and tools/materials — must not exceed 50% of the crane&apos;s
                rated capacity at the maximum radius the load will reach during the operation, including the radius at which
                the trial lift is performed.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Radius (ft)</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Rated Capacity (lbs)</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">50% Personnel Platform Capacity (lbs)</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Example Max Personnel (with 800 lb platform + rigging)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-4 py-3 text-gray-700">20</td><td className="px-4 py-3 text-gray-700">30,000</td><td className="px-4 py-3 text-gray-700">15,000</td><td className="px-4 py-3 text-gray-700">56 persons (theoretical — platform size governs)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">30</td><td className="px-4 py-3 text-gray-700">20,000</td><td className="px-4 py-3 text-gray-700">10,000</td><td className="px-4 py-3 text-gray-700">36 persons (theoretical — platform size governs)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">40</td><td className="px-4 py-3 text-gray-700">12,000</td><td className="px-4 py-3 text-gray-700">6,000</td><td className="px-4 py-3 text-gray-700">20 persons (theoretical — platform size governs)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">50</td><td className="px-4 py-3 text-gray-700">7,500</td><td className="px-4 py-3 text-gray-700">3,750</td><td className="px-4 py-3 text-gray-700">11 persons (theoretical)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">60</td><td className="px-4 py-3 text-gray-700">5,200</td><td className="px-4 py-3 text-gray-700">2,600</td><td className="px-4 py-3 text-gray-700">7 persons</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">70</td><td className="px-4 py-3 text-gray-700">3,800</td><td className="px-4 py-3 text-gray-700">1,900</td><td className="px-4 py-3 text-gray-700">4 persons</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">80</td><td className="px-4 py-3 text-gray-700">2,600</td><td className="px-4 py-3 text-gray-700">1,300</td><td className="px-4 py-3 text-gray-700">2 persons</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Critical calculation note:</strong> The radius used must be the maximum radius that will be reached during
                the entire operation, not just the starting radius. If the boom can swing to a greater radius during the lift,
                the capacity at that greater radius must be used. Always use the crane&apos;s load chart for the specific
                configuration (boom length, counterweight, outrigger extension) being used.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Trial Lift &amp; Proof Test Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1431(e) requires a trial lift before each personnel hoisting operation and whenever the crane or
                platform is moved to a new location. The trial lift is a rehearsal of the actual lift — performed with the
                platform unoccupied but loaded to the anticipated total lift weight — to verify crane stability, clearances,
                and proper crane function. A separate proof test at 125% of the platform&apos;s rated capacity must be
                completed before initial use and after modifications.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Trial Lift Procedure (Step-by-Step)</h3>

              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Load the platform:</strong> Place test weights in the platform equal to the anticipated personnel weight (minimum 250 lbs per person planned), plus the weight of all tools and materials to be used</li>
                <li><strong>Position the crane:</strong> Set the crane at the location and configuration (boom length, radius, outrigger position) that will be used for the actual personnel lift</li>
                <li><strong>Verify capacity:</strong> Confirm the total load (platform + rigging + test weight) does not exceed 50% of rated capacity at the maximum intended radius</li>
                <li><strong>Hoist the platform:</strong> Raise the loaded platform to the maximum height that will be used during the actual operation</li>
                <li><strong>Cycle all functions:</strong> Swing the crane through the full range of motion planned for the operation, extend/retract the boom if applicable, and verify all operational limits</li>
                <li><strong>Check clearances:</strong> Verify minimum clearance from structures, power lines (20-foot minimum for up to 350 kV), and other obstructions at all points of travel</li>
                <li><strong>Inspect after trial:</strong> Lower the platform and inspect all rigging connections, the platform structure, and the crane for any signs of distress, unusual deflection, or mechanical issues</li>
                <li><strong>Document results:</strong> Record the trial lift details including date, time, weights, radius, boom length, and any observations</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">125% Proof Test</h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The proof test is distinct from the trial lift. Under OSHA 1926.1431(f), a proof test at 125% of the platform&apos;s
                rated capacity must be conducted before initial use, after any repair or modification to the platform, and at
                intervals specified by ASME B30.23. The proof test weight is held suspended for a minimum of 5 minutes while the
                platform and rigging are inspected for deformation, cracking, or failure. The crane must not be swung, traveled,
                or otherwise moved during the proof test hold period.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Attachment Point Inspection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The connection between the crane and the personnel platform is the most critical single point of failure in the
                entire system. OSHA 1926.1431(c)(14) requires that the platform be attached to the headache ball or hook using
                a method that prevents unintentional disconnection. ASME B30.23 further specifies approved attachment configurations.
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Headache ball connection:</strong> The platform bridle must connect directly to the headache ball or overhaul ball — never to the hook block sheaves or load line directly. The connection must be a closed system (shackles with cotter pins or bolted connections, not hook latches alone)</li>
                <li><strong>Bridle sling configuration:</strong> Multi-leg bridle slings must be symmetrical and meet a minimum design factor of 5:1. All legs must bear load equally when the platform is level. Inspect bridle legs for wire rope damage, fitting cracks, and proper swaging/splicing</li>
                <li><strong>Anti-rotation device:</strong> A device or rigging configuration that prevents the platform from rotating uncontrollably is required. This is typically achieved through a tagline system, anti-rotation line, or bridle geometry. Inspect the anti-rotation system for wear, proper attachment, and functionality</li>
                <li><strong>Secondary safety connection:</strong> Though not explicitly required by OSHA, ASME B30.23 recommends a secondary retention wire rope or chain between the platform and the crane&apos;s load block as an additional safeguard against headache ball failure</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Communication Systems Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1431(g)(1) requires that a system of communication be established between the personnel in the
                platform, the operator, and the signal person (if used) before hoisting begins. Communication failure during
                a personnel lift is a serious safety event that requires immediate cessation of crane functions.
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                <li><strong>Hand signals:</strong> Standard ASME/OSHA crane hand signals may be used only when the operator has direct, unobstructed visual contact with the signal person. Hand signals must be reviewed and agreed upon during the pre-lift meeting</li>
                <li><strong>Two-way radio:</strong> Radio communication is required when direct visual contact cannot be maintained throughout the entire operation. Radios must be tested before the lift, and backup radios should be available on site</li>
                <li><strong>Visual contact:</strong> The operator must maintain visual contact with the platform at all times, or rely on a signal person who maintains visual contact. If visual contact is lost and radio communication fails simultaneously, all crane operations must stop immediately</li>
                <li><strong>Emergency stop signal:</strong> An agreed-upon emergency stop signal must be established. Any person on the site — not just the signal person — can give an emergency stop, and the operator must honor it immediately</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Pre-Lift Meeting &amp; Operational Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1431(j) requires a pre-lift meeting before each personnel hoisting operation. This is not optional
                and not a generic toolbox talk — it must be specific to the personnel lift being conducted and include all
                personnel involved in the operation.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The pre-lift meeting must address:
              </p>

              <ol className="list-decimal pl-6 mb-6 text-gray-700 space-y-2">
                <li>The crane&apos;s rated capacity at the maximum intended radius and the calculated total load</li>
                <li>The 50% derating calculation and resulting capacity limit</li>
                <li>Trial lift results and any issues identified</li>
                <li>Communication method and signals, including the emergency stop signal</li>
                <li>Personal fall arrest requirements — all personnel in the platform must wear full-body harnesses connected to platform anchor points</li>
                <li>Prohibited actions: no standing on guardrails, no wrapping the hoist line around the body, no leaving the platform at elevation except at a pre-approved landing zone</li>
                <li>Environmental restrictions: maximum wind speed (typically 20 mph, but follow manufacturer and site-specific limits), lightning protocol, and visibility requirements</li>
                <li>Emergency procedures: what to do if the crane malfunctions, if communication is lost, or if a medical emergency occurs in the platform</li>
              </ol>

              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>Operational restrictions during personnel hoisting:</strong> The crane must not travel with the platform
                occupied unless the crane is specifically designed for travel under load and the travel path is firm, level,
                and free of obstructions. Boom telescoping under load with personnel is prohibited unless the crane manufacturer
                has specifically approved it for that configuration. The operator must not leave the controls while personnel
                are suspended, and no other hoisting operations may be conducted with other crane equipment in the area that
                could create a collision hazard.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Common Personnel Platform Violations
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Personnel platform violations consistently rank among the highest-penalty OSHA citations in crane operations.
                Because these violations involve direct risk to human life, they are frequently classified as &quot;willful&quot; or
                &quot;repeat&quot; violations, carrying penalties up to the statutory maximum. The following table summarizes
                the most common citations:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Violation</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">OSHA Standard</th>
                      <th className="px-4 py-3 text-left font-semibold text-gray-900 border-b">Typical Penalty</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-4 py-3 text-gray-700">Using personnel platform without demonstrating infeasibility of alternatives</td><td className="px-4 py-3 text-gray-700">1926.1431(a)</td><td className="px-4 py-3 text-gray-700">$16,131 (serious)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Exceeding 50% rated capacity during personnel hoist</td><td className="px-4 py-3 text-gray-700">1926.1431(d)</td><td className="px-4 py-3 text-gray-700">$161,323 (willful)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Failure to perform trial lift</td><td className="px-4 py-3 text-gray-700">1926.1431(e)</td><td className="px-4 py-3 text-gray-700">$16,131 – $161,323</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Platform construction deficiencies (guardrails, toe boards)</td><td className="px-4 py-3 text-gray-700">1926.1431(c)</td><td className="px-4 py-3 text-gray-700">$16,131 (serious)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">No pre-lift meeting conducted</td><td className="px-4 py-3 text-gray-700">1926.1431(j)</td><td className="px-4 py-3 text-gray-700">$16,131 (serious)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Inadequate communication system</td><td className="px-4 py-3 text-gray-700">1926.1431(g)</td><td className="px-4 py-3 text-gray-700">$16,131 (serious)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Personnel not wearing fall protection in platform</td><td className="px-4 py-3 text-gray-700">1926.1431(k)(5)</td><td className="px-4 py-3 text-gray-700">$16,131 (serious)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Crane travel with occupied platform (unauthorized)</td><td className="px-4 py-3 text-gray-700">1926.1431(g)(5)</td><td className="px-4 py-3 text-gray-700">$161,323 (willful)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Missing or illegible platform data plate</td><td className="px-4 py-3 text-gray-700">1926.1431(c)(15)</td><td className="px-4 py-3 text-gray-700">$16,131 (serious)</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Failure to conduct proof test after platform modification</td><td className="px-4 py-3 text-gray-700">1926.1431(f)</td><td className="px-4 py-3 text-gray-700">$16,131 – $161,323</td></tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Note: Penalty amounts reflect the 2026 adjusted maximums. Willful violations can reach $161,323 per instance.
                Repeat violations within five years are subject to the same maximum as willful citations. When a personnel
                platform violation results in a fatality, criminal prosecution under Section 17(e) of the OSH Act becomes
                a realistic possibility, carrying fines up to $500,000 for organizations and imprisonment for responsible individuals.
              </p>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Document Personnel Platform Inspections Digitally</h3>
                <p className="text-white/90 mb-6">CraneCheck includes dedicated personnel platform inspection checklists with built-in OSHA 1926.1431 compliance tracking, trial lift documentation, and 50% capacity calculation tools. Protect your workers and your compliance record.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="suspended-personnel-platform-inspection" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
