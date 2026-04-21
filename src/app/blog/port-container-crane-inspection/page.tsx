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
  title: "Port & Container Crane Inspection: STS Gantry, RTG & Straddle Carrier Requirements",
  description: "Complete guide to port and container crane inspection covering ship-to-shore gantry cranes, rubber-tired gantry (RTG), straddle carriers, ANSI B30.22, port-specific hazards, and OSHA maritime vs construction standards.",
  alternates: { canonical: "/blog/port-container-crane-inspection" },
};

export default function PortContainerCraneInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Port & Container Crane Inspection: STS Gantry, RTG & Straddle Carrier Requirements",
    "description": "Complete guide to port and container crane inspection covering ship-to-shore gantry cranes, rubber-tired gantry (RTG), straddle carriers, ANSI B30.22, port-specific hazards, and OSHA maritime vs construction standards.",
    "datePublished": "2026-04-21",
    "dateModified": "2026-04-21",
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
      "@id": "https://cranecheck.co/blog/port-container-crane-inspection"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Port & Container Crane Inspection", "item": "https://cranecheck.co/blog/port-container-crane-inspection" }
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
              <span className="text-xs text-gray-400">April 21, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Port &amp; Container Crane Inspection: STS Gantry, RTG &amp; Straddle Carrier Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to port and container crane inspection covering ship-to-shore gantry cranes, rubber-tired gantry (RTG), straddle carriers, ANSI B30.22, port-specific hazards, and OSHA maritime vs construction standards.
            </p>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Port and container terminal cranes operate in some of the most demanding environments in the lifting industry. Ship-to-shore (STS) gantry cranes, rubber-tired gantry cranes (RTGs), and straddle carriers run 24/7 in salt-laden marine atmospheres, subjected to extreme wind loading, constant vibration, and relentless duty cycles that accelerate structural fatigue far beyond what inland cranes experience.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The regulatory landscape for port cranes is uniquely complex. OSHA&apos;s maritime standards (29 CFR 1918 &mdash; Longshoring) govern cranes used to load and unload vessels, while OSHA&apos;s general industry standards (29 CFR 1910.179) or construction standards (29 CFR 1926 Subpart CC) may apply to cranes used for maintenance or construction activities within the port. ANSI/ASME B30.22 covers articulating boom cranes commonly found in port operations, and consensus standards like ASCE 7 address wind loading design criteria. Understanding which standard applies to which crane &mdash; and which activity &mdash; is critical for compliance.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Ship-to-Shore (STS) Gantry Crane Inspection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                STS cranes are the largest cranes in port operations, with boom lengths exceeding 200 feet and lifting capacities of 40&ndash;80 long tons per container. Their inspection requirements reflect the catastrophic consequences of failure &mdash; a collapsed STS crane can shut down an entire berth for months.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Structural Inspection Points
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Portal legs and sill beams:</strong> Inspect for fatigue cracking at weld connections, particularly at leg-to-sill beam joints that absorb dynamic loading during container handling and crane travel</li>
                <li><strong>Boom and boom hinge connections:</strong> Check boom hinge pins, bushings, and connection plates for wear and cracking &mdash; the boom raising mechanism endures enormous cyclic stress</li>
                <li><strong>Trolley girders:</strong> Examine trolley rail alignment, girder deflection, and web plate cracking &mdash; STS cranes may cycle 30&ndash;40 containers per hour, accumulating millions of load cycles annually</li>
                <li><strong>Backstay and forestay connections:</strong> Inspect tension rod connections, gusset plates, and pin connections for fatigue indicators including paint cracking, rust staining from hidden corrosion, and visible deformation</li>
                <li><strong>A-frame and machinery house:</strong> Check structural connections at the A-frame apex and machinery house mounting points for crack propagation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Electrical and Control Systems
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>High-voltage systems:</strong> STS cranes typically operate on 4,160V or 6,600V power &mdash; inspect switchgear, bus bars, cable reels, and collector systems with qualified electrical personnel only</li>
                <li><strong>Drive systems:</strong> Examine hoist, trolley, gantry, and boom hoist motor drives including variable frequency drives (VFDs), regenerative braking systems, and encoder feedback</li>
                <li><strong>Spreader electrical connections:</strong> Inspect the headblock-to-spreader electrical connection, twist-lock actuator wiring, and spreader position sensors</li>
                <li><strong>Anti-collision systems:</strong> Verify proper operation of crane-to-crane proximity detection, boom anti-collision with vessels, and trolley overtravel limits</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Rubber-Tired Gantry (RTG) Crane Inspection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                RTG cranes stack containers in the yard and are subject to unique stresses from frequent travel, stacking loads, and exposure to diesel exhaust (diesel-electric units) or cable reel wear (electric RTGs). ANSI B30.17 (Overhead and Gantry Cranes &mdash; Top Running Bridge, Single Girder) provides applicable guidance, supplemented by manufacturer-specific requirements.
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Gantry travel system:</strong> Inspect tire condition (cuts, uneven wear, proper inflation), wheel bearings, steering linkage, and gantry drive motors &mdash; RTGs travel thousands of miles annually within the container yard</li>
                <li><strong>Sway control systems:</strong> Verify rope guides, tag line tensioners, or electronic anti-sway systems are functional &mdash; uncontrolled spreader sway is a leading cause of RTG container damage and worker injury</li>
                <li><strong>Spreader and twist-lock mechanisms:</strong> Check twist-lock engagement sensors, spreader telescoping mechanisms, and container detection systems for proper calibration</li>
                <li><strong>Structural frame:</strong> Examine cross-ties, diagonal bracing, and leg connections for fatigue cracking, especially at weld terminations and cope holes</li>
                <li><strong>Diesel-electric power plants:</strong> For diesel-powered RTGs, inspect engine, generator, cooling system, exhaust aftertreatment, and fuel system per manufacturer intervals</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Straddle Carrier Inspection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Straddle carriers combine lifting and transport functions, traveling at speeds up to 18 mph while carrying containers. Their inspection requirements include mobile equipment elements (tires, brakes, steering) alongside crane elements (hoisting, structural).
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Lifting frame and spreader:</strong> Inspect wire ropes, sheaves, equalizer beams, and spreader twist-locks &mdash; straddle carriers experience significant shock loading from uneven pavement and container pickup</li>
                <li><strong>Leg structure:</strong> Check for collision damage (one of the most common straddle carrier hazards), fatigue cracking at leg-to-crossbeam connections, and tire splash guard integrity</li>
                <li><strong>Drivetrain and braking:</strong> Inspect hydrostatic or electric drive components, service brakes, parking brakes, and steering systems per manufacturer specifications</li>
                <li><strong>Operator visibility systems:</strong> Verify cameras, radar, and proximity detection systems are operational &mdash; straddle carrier blind spots contribute to the most serious port injuries</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Port-Specific Hazards and Corrosion Management
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Salt air corrosion is the single greatest threat to port crane structural integrity. Chloride-laden marine atmospheres penetrate paint systems and accelerate steel corrosion at rates 5&ndash;10 times faster than inland environments. Inspection must specifically address:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Coating system integrity:</strong> Map and track coating failures, rust bloom, and blistering &mdash; salt corrosion at weld connections and crevice joints progresses fastest</li>
                <li><strong>Section loss measurement:</strong> Use ultrasonic thickness (UT) testing at critical structural members to quantify corrosion-induced section loss against original design thickness</li>
                <li><strong>Fastener corrosion:</strong> High-strength bolts in marine environments are susceptible to hydrogen embrittlement and stress corrosion cracking &mdash; inspect per RCSC Specification for Structural Joints</li>
                <li><strong>Electrical component corrosion:</strong> Marine atmospheres corrode terminal connections, contactors, and printed circuit boards &mdash; inspect electrical enclosure seals and desiccant systems</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Wind Loading and Stowage Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Port cranes face extreme wind exposure. STS cranes present massive wind sail areas, and most port locations experience regular high-wind events. ASCE 7 provides design wind load criteria, but operational wind limits are set by crane manufacturers and are typically far below design limits.
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Storm stowage systems:</strong> Inspect rail clamps (dog and cat clamps), storm pins, and tie-down anchors &mdash; these systems prevent uncontrolled crane travel during storms and must be tested regularly</li>
                <li><strong>Wind speed monitoring:</strong> Verify anemometer calibration and alarm set points &mdash; typical STS operational limits are 45&ndash;55 mph; stowage limits may be 90&ndash;120 mph depending on design</li>
                <li><strong>Boom stowage:</strong> Inspect boom rest pads, boom locks, and backstay locks that secure the boom in the stowed (upright) position for storm conditions</li>
                <li><strong>Gantry travel brakes:</strong> Test service and storm brakes &mdash; in hurricane conditions, storm brakes must hold the crane against design wind loads without rail clamp engagement</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                OSHA Maritime vs. Construction Standards
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                One of the most common compliance errors in port crane inspection is applying the wrong OSHA standard. The jurisdictional boundaries are:
              </p>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Activity</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Applicable Standard</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Key Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Vessel loading/unloading</td>
                    <td className="border px-4 py-3">29 CFR 1918 (Longshoring)</td>
                    <td className="border px-4 py-3">Annual thorough exam by competent person, deficiency correction before use</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Container yard operations</td>
                    <td className="border px-4 py-3">29 CFR 1910.179 (General Industry)</td>
                    <td className="border px-4 py-3">Frequent and periodic inspections, monthly documented inspections for Class D service</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Port construction projects</td>
                    <td className="border px-4 py-3">29 CFR 1926 Subpart CC (Construction)</td>
                    <td className="border px-4 py-3">Pre-shift, monthly, and annual inspections per 1926.1412</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Crane maintenance/repair</td>
                    <td className="border px-4 py-3">29 CFR 1910 (General Industry)</td>
                    <td className="border px-4 py-3">LOTO per 1910.147, fall protection per 1910.28</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Port cranes operate under uniquely harsh conditions &mdash; salt corrosion, extreme wind, and 24/7 duty cycles demand more rigorous inspection frequencies than inland cranes</li>
                <li>OSHA jurisdictional boundaries between maritime (29 CFR 1918), general industry (1910.179), and construction (1926 Subpart CC) must be clearly understood and documented</li>
                <li>STS gantry cranes require structural fatigue assessment focused on weld connections at portal legs, boom hinges, and trolley girders</li>
                <li>Storm stowage systems &mdash; rail clamps, storm pins, boom locks &mdash; must be tested and maintained as life-safety systems</li>
                <li>Ultrasonic thickness testing is essential for quantifying corrosion-induced section loss in marine environments</li>
                <li>RTG anti-sway systems and straddle carrier visibility systems are critical safety items requiring functional testing at every inspection</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Digitize Your Port Crane Inspections</h3>
                <p className="text-white/90 mb-6">CraneCheck provides customizable inspection templates for STS gantry, RTG, and straddle carrier cranes &mdash; complete with corrosion tracking, UT thickness logging, and OSHA maritime compliance documentation.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="port-container-crane-inspection" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
