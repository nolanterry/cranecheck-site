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
  title: "Crane Inspection for Petrochemical & Refinery Operations: Hot Work, Confined Spaces & API Standards",
  description: "Guide to crane inspection requirements for petrochemical and refinery operations covering hazardous area classifications, hot work permits, API standards, turnaround/shutdown crane management, explosion-proof requirements, and confined space lifting.",
  alternates: { canonical: "/blog/crane-inspection-petrochemical-refinery" },
};

export default function CraneInspectionPetrochemicalRefineryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Inspection for Petrochemical & Refinery Operations: Hot Work, Confined Spaces & API Standards",
    "description": "Guide to crane inspection requirements for petrochemical and refinery operations covering hazardous area classifications, hot work permits, API standards, turnaround/shutdown crane management, explosion-proof requirements, and confined space lifting.",
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
      "@id": "https://cranecheck.co/blog/crane-inspection-petrochemical-refinery"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Inspection for Petrochemical & Refinery Operations", "item": "https://cranecheck.co/blog/crane-inspection-petrochemical-refinery" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Industry</span>
              <span className="text-xs text-gray-400">April 17, 2026</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Crane Inspection for Petrochemical &amp; Refinery Operations: Hot Work, Confined Spaces &amp; API Standards</h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">Petrochemical plants and refineries pose some of the most demanding environments for crane operations. The presence of flammable vapors, toxic gases, elevated process equipment, and tightly spaced pipe racks creates a unique risk profile that standard crane inspection protocols do not adequately address. This guide covers hazardous area classifications, hot work permit integration, API compliance standards, turnaround crane coordination, explosion-proof equipment requirements, and the specialized inspection modifications needed to keep cranes operating safely in hydrocarbon processing facilities.</p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>Introduction: Unique Challenges of Crane Operations in Petrochemical Environments</h2>

            <p>
              Refineries and petrochemical complexes routinely operate cranes in environments where a single ignition source can trigger a catastrophic vapor cloud explosion. Unlike general construction or manufacturing settings, every crane lift in a refinery must account for atmospheric hazards that are invisible, continuously changing, and potentially lethal. Hydrocarbon process units generate flammable vapors during normal operations, and these concentrations increase dramatically during turnaround activities when vessels are opened, lines are broken, and residual product is released.
            </p>

            <p>
              The consequences of inadequate crane inspection in petrochemical environments extend far beyond equipment failure. A crane electrical fault in a classified hazardous area can serve as an ignition source. A dropped load on a pressurized pipeline can release hundreds of thousands of pounds of hydrocarbons. A boom contacting overhead pipe racks carrying hydrogen, hydrogen fluoride, or hydrogen sulfide can rupture lines and create a toxic release that endangers an entire plant population. These are not hypothetical scenarios&mdash;OSHA&apos;s Petroleum Refinery Process Safety Management National Emphasis Program (NEP) has documented multiple crane-related incidents in refinery environments where inspection deficiencies contributed directly to the event chain.
            </p>

            <p>
              This guide provides a comprehensive framework for crane inspection professionals, refinery safety managers, and turnaround coordinators who need to understand the intersection of crane safety standards (ASME B30, 29 CFR 1926 Subpart CC) with petrochemical-specific requirements from the American Petroleum Institute (API), the National Fire Protection Association (NFPA), and refinery owner-operator standards.
            </p>

            <h2>Hazardous Area Classifications for Crane Operations</h2>

            <p>
              Before any crane enters a petrochemical facility, the crane operator, rigging crew, and crane inspector must understand the hazardous area classification system that governs electrical equipment requirements in locations where flammable gases or vapors may be present. The National Electrical Code (NEC), NFPA 70, defines two classification systems used in North American refineries: the Division system and the Zone system.
            </p>

            <h3>Class I Hazardous Locations</h3>

            <p>
              All petrochemical crane operations involve Class I locations&mdash;areas where flammable gases or vapors are or may be present in sufficient quantities to produce explosive or ignitable mixtures. The critical distinction for crane inspectors is between Division 1 and Division 2 (or the equivalent Zone designations):
            </p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Classification</th>
                    <th className="px-4 py-3 text-left font-semibold">Definition</th>
                    <th className="px-4 py-3 text-left font-semibold">Crane Equipment Requirements</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Class I, Division 1</td>
                    <td className="px-4 py-3">Ignitable concentrations exist under normal operating conditions, or during repair/maintenance, or due to equipment failure that simultaneously causes electrical failure</td>
                    <td className="px-4 py-3">Explosion-proof or intrinsically safe equipment required; standard cranes generally prohibited without hot work permit and continuous gas monitoring</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Class I, Division 2</td>
                    <td className="px-4 py-3">Ignitable concentrations exist only under abnormal conditions (e.g., vessel rupture, gasket failure, accidental release)</td>
                    <td className="px-4 py-3">Non-sparking or explosion-proof equipment for arcing/sparking components; standard cranes may operate with restrictions and monitoring</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Zone 0</td>
                    <td className="px-4 py-3">Explosive atmosphere present continuously or for long periods</td>
                    <td className="px-4 py-3">Crane operations generally prohibited; only intrinsically safe (Ex ia) equipment permitted</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Zone 1</td>
                    <td className="px-4 py-3">Explosive atmosphere likely during normal operations</td>
                    <td className="px-4 py-3">Flameproof (Ex d) or increased safety (Ex e) equipment required; equivalent to Division 1</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-medium">Zone 2</td>
                    <td className="px-4 py-3">Explosive atmosphere not likely during normal operations; if it occurs, will be infrequent and short duration</td>
                    <td className="px-4 py-3">Non-sparking (Ex n) equipment acceptable; equivalent to Division 2</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Crane inspectors working in petrochemical facilities must verify that the crane&apos;s electrical classification matches or exceeds the area classification where it will operate. This includes verifying the classification of all crane-mounted lights, cameras, radios, load moment indicators (LMIs), anti-two-block devices, and any aftermarket accessories. A single non-rated component&mdash;such as an aftermarket LED work light or a driver&apos;s personal phone charger plugged into the cab&mdash;can invalidate the entire crane&apos;s hazardous area compliance.
            </p>

            <h2>Hot Work Permit Requirements for Crane Operations</h2>

            <p>
              In petrochemical and refinery environments, any crane operation that could produce sparks, arcs, or elevated surface temperatures is classified as hot work under OSHA 29 CFR 1910.119 (Process Safety Management) and NFPA 51B (Standard for Fire Prevention During Welding, Cutting, and Other Hot Work). This classification applies to standard diesel and electric cranes operating in or near classified areas because internal combustion engines, exhaust systems, electrical contactors, and slip ring assemblies all represent potential ignition sources.
            </p>

            <p>
              The hot work permit process for crane operations in a refinery typically requires:
            </p>

            <ul>
              <li><strong>Atmospheric testing</strong> &mdash; Continuous gas monitoring with a calibrated four-gas meter (LEL, O2, H2S, CO) at the crane&apos;s operating location and at the elevation of the lift, not just ground level. Vapors may stratify, and heavier-than-air hydrocarbons (such as propane, butane, and gasoline vapors) can accumulate in low-lying areas around crane outrigger pads and counterweight areas.</li>
              <li><strong>Fire watch</strong> &mdash; A dedicated fire watch with appropriate extinguishing equipment stationed at the crane location for the duration of the lift and for a minimum of 30 minutes after the crane shuts down (to monitor for delayed ignition from hot exhaust components).</li>
              <li><strong>Exhaust spark arrestor verification</strong> &mdash; Inspection of the crane engine&apos;s exhaust spark arrestor to confirm it is installed, in good condition, and appropriate for the fuel type. Carbon buildup, holes in the screen, or missing spark arrestors are common deficiencies found during pre-entry crane inspections.</li>
              <li><strong>Turbocharger and exhaust system inspection</strong> &mdash; Cracked or leaking turbocharger housings and exhaust manifolds can emit surface temperatures exceeding 400&deg;F, well above the autoignition temperature of many refinery hydrocarbons.</li>
              <li><strong>Electrical system integrity</strong> &mdash; Verification that all crane electrical connections are tight, insulation is intact, and no exposed conductors or damaged wiring could create an arc during crane operation.</li>
            </ul>

            <h2>Explosion-Proof &amp; Intrinsically Safe Equipment Requirements</h2>

            <p>
              Cranes designated for routine operations in Division 1 or Zone 1 areas must be equipped with explosion-proof electrical systems that prevent internal arcs or sparks from igniting the surrounding atmosphere. The key standards governing explosion-proof crane equipment are UL 674 (Electric Motors and Generators for Use in Hazardous Locations), UL 698 (Industrial Control Equipment for Use in Hazardous Locations), and UL 1203 (Explosion-Proof and Dust-Ignition-Proof Electrical Equipment).
            </p>

            <p>
              For crane inspectors, the critical explosion-proof verification points include:
            </p>

            <ul>
              <li><strong>Motor enclosures</strong> &mdash; Hoist, trolley, and bridge drive motors must carry the appropriate Class I, Division 1 (or Zone 1) rating. Enclosures must be free of cracks, corrosion, or modifications that compromise the flamepath. All cover bolts must be installed and torqued to specification&mdash;a single missing bolt on an explosion-proof junction box can negate its protection rating.</li>
              <li><strong>Control panels and junction boxes</strong> &mdash; All covers must seat properly with continuous metal-to-metal contact on flamepaths. Gaskets (where used) must be the factory-specified type and material. Field-expedient gaskets cut from generic material are a common and dangerous violation.</li>
              <li><strong>Pendant controls and radio receivers</strong> &mdash; Remote control units must carry appropriate hazardous area ratings. Standard radio remote controls are not rated for classified areas and must be replaced with intrinsically safe versions when operating in Division 1 or Zone 1 locations.</li>
              <li><strong>Lighting</strong> &mdash; All crane-mounted lights, including cab interior lights, boom tip lights, and work area lights, must be rated for the applicable hazardous area classification. Fixture lenses must be intact&mdash;a cracked lens on an explosion-proof light fixture destroys its rating.</li>
              <li><strong>Cable entry and conduit seals</strong> &mdash; Conduit seals (EYS/EYD fittings) must be installed within 18 inches of each enclosure boundary and properly filled with approved sealing compound. Missing or improperly filled conduit seals are among the most frequently cited violations in refinery crane inspections.</li>
            </ul>

            <h2>API Standards Applicable to Crane Operations</h2>

            <p>
              The American Petroleum Institute publishes several standards directly relevant to crane operations in petrochemical and refinery settings. While OSHA&apos;s crane standards (29 CFR 1926 Subpart CC and 29 CFR 1910.179/180) provide the baseline regulatory framework, most refinery owner-operators require compliance with API standards as a condition of site access:
            </p>

            <ul>
              <li><strong>API 2D &mdash; Operation and Maintenance of Offshore Cranes</strong> &mdash; Although written for offshore platforms, API 2D is widely adopted by petrochemical facilities for pedestal-mounted and process-area cranes. It provides detailed inspection intervals, structural examination criteria, and load testing protocols that exceed OSHA minimums. Many Gulf Coast refineries require API 2D compliance for all cranes operating within process unit boundaries.</li>
              <li><strong>API RP 2003 &mdash; Protection Against Ignitions Arising Out of Static, Lightning, and Stray Currents</strong> &mdash; This recommended practice addresses grounding and bonding requirements for equipment operating in flammable atmospheres. For crane operations, it requires static grounding of the crane chassis to the facility grounding grid before any lift in a classified area. Wire rope, slings, and loads being lifted through classified areas must also be bonded to prevent static discharge.</li>
              <li><strong>API RP 2001 &mdash; Fire Protection in Refineries</strong> &mdash; Establishes fire protection requirements for refinery equipment, including fire watch positioning, extinguisher type and placement, and fire suppression system impairment protocols during crane lifts that may temporarily block access to fire protection equipment.</li>
              <li><strong>API 510/570 &mdash; Pressure Vessel and Piping Inspection Codes</strong> &mdash; While not crane-specific, these codes define the inspection requirements for the process equipment being serviced by refinery cranes. Crane inspectors and lift planners must understand that the equipment being lifted or lifted over may be operating at elevated temperatures and pressures, and any contact or impact has consequences far beyond cosmetic damage.</li>
            </ul>

            <h2>Turnaround/Shutdown Crane Management</h2>

            <p>
              Refinery turnarounds (also called shutdowns or outages) represent the highest-risk period for crane operations in petrochemical environments. During a major turnaround, a single refinery unit may have 10 to 30 cranes operating simultaneously within a confined process area, performing reactor head removals, heat exchanger bundle pulls, column tray extractions, and heavy equipment replacements. The density of crane operations during turnarounds creates hazards that do not exist during normal day-to-day crane work.
            </p>

            <h3>High-Density Crane Operations</h3>

            <p>
              Turnaround crane density often reaches levels where multiple cranes are operating within overlapping swing radii. This creates several inspection and operational concerns:
            </p>

            <ul>
              <li><strong>Swing radius conflicts</strong> &mdash; When crane counterweights, booms, or suspended loads can enter another crane&apos;s operating zone, physical barriers or electronic anti-collision systems must be verified. Many refineries now require zone-limiting devices (swing restrictors, boom angle limiters, or GPS-based anti-collision systems) on all cranes operating within turnaround areas. Crane inspectors must verify that these systems are installed, calibrated, and functional before the crane begins turnaround work.</li>
              <li><strong>Multiple crane coordination</strong> &mdash; Tandem lifts and sequential lifts where one crane hands off a load to another require detailed lift plans reviewed and approved by the refinery&apos;s turnaround lifting coordinator. Crane inspectors must verify that each crane&apos;s rated capacity, rigging configuration, and LMI settings match the approved lift plan&mdash;not just for the primary lift, but for every phase of a multi-crane operation.</li>
              <li><strong>Ground bearing pressure</strong> &mdash; Turnaround areas often have underground process piping, electrical conduit, and cable trays running beneath the surface. Crane outrigger pads must be positioned per the facility&apos;s underground utility maps, and ground bearing capacity must account for the subsurface conditions that may be weakened by years of process fluid leaks, thermal cycling, and previous excavation work.</li>
              <li><strong>Simultaneous operations (SIMOPS)</strong> &mdash; Cranes may be operating adjacent to active hydrostatic testing, chemical cleaning, catalyst loading, or hot tapping operations. The crane inspection and lift plan must account for the hazards introduced by these concurrent activities, including vapor releases from open vessels, water hammer from hydrotest lines, and restricted egress routes blocked by scaffolding and temporary equipment.</li>
            </ul>

            <h3>Turnaround Crane Inspection Scheduling</h3>

            <p>
              Cranes mobilized for turnaround work are often brought in from rental fleets and may arrive on-site with inspection certifications that technically satisfy OSHA requirements but do not address refinery-specific hazards. Best practice for turnaround crane management includes a three-tier inspection protocol:
            </p>

            <ul>
              <li><strong>Pre-mobilization inspection</strong> &mdash; Conducted at the crane rental yard before the crane ships to the refinery, verifying that all explosion-proof modifications, spark arrestors, grounding provisions, and site-specific requirements are in place.</li>
              <li><strong>Gate inspection</strong> &mdash; A documented inspection at the refinery gate or staging area, confirming that the crane matches the pre-mobilization inspection report and that no damage occurred during transport.</li>
              <li><strong>Daily turnaround inspections</strong> &mdash; Enhanced daily inspections that include atmospheric monitoring verification, fire extinguisher checks, grounding cable continuity testing, and confirmation that zone-limiting devices remain properly set for the current day&apos;s lift plan.</li>
            </ul>

            <h2>Confined Space Lifting Operations</h2>

            <p>
              Refineries require frequent lifting of materials, equipment, and personnel into and out of permit-required confined spaces such as reactor vessels, distillation columns, heat exchanger shells, and storage tanks. These lifts introduce a unique set of hazards that standard crane inspection does not address:
            </p>

            <ul>
              <li><strong>Atmospheric hazards at the lift point</strong> &mdash; The atmosphere inside the confined space may be oxygen-deficient, oxygen-enriched, or contain toxic/flammable gases. The crane&apos;s load line passes through the confined space entry point, and any material falling from the wire rope (grease, rust, wire fragments) can contaminate the space or compromise the atmospheric monitoring.</li>
              <li><strong>Load control in vertical shafts</strong> &mdash; Lowering loads into tall vessels (catalytic cracking reactors can be 100+ feet tall) requires precise load control to prevent the load from contacting vessel internals, damaging refractory lining, or swinging into tray support rings. Tag line management is critical and must be addressed in the lift plan.</li>
              <li><strong>Emergency retrieval capability</strong> &mdash; The crane used for confined space lifts may also serve as the emergency retrieval system for workers inside the space. The crane must remain manned and operational for the entire duration of confined space entry, and the rescue plan must specify the crane&apos;s role, the retrieval rigging configuration, and the maximum retrieval time.</li>
              <li><strong>Vessel entry/exit rigging</strong> &mdash; Davit arms, gin poles, or boom tips positioned directly over vessel manways must be inspected for secure attachment, proper load rating, and adequate clearance. Temporary lifting devices used for confined space access are frequently improvised in the field and represent a significant inspection concern.</li>
            </ul>

            <h2>Refinery-Specific Pre-Lift Planning Checklist</h2>

            <p>
              The following checklist items supplement the standard pre-lift planning requirements of ASME B30.5 and 29 CFR 1926.1417 with refinery-specific considerations:
            </p>

            <ul>
              <li><strong>Area classification verification</strong> &mdash; Confirm the NEC hazardous area classification for the crane&apos;s operating position, boom sweep area, and load travel path. Obtain the facility&apos;s area classification drawing and verify the crane&apos;s electrical rating matches or exceeds the classification.</li>
              <li><strong>Hot work permit status</strong> &mdash; Verify that a valid hot work permit has been issued for the crane&apos;s operating location and time period. Confirm the permit covers the crane&apos;s ignition sources (engine exhaust, electrical systems) and not just welding or cutting operations.</li>
              <li><strong>Gas monitoring plan</strong> &mdash; Confirm continuous atmospheric monitoring locations, alarm setpoints, and the shutdown/evacuation procedure if LEL readings exceed 10% at any monitoring point.</li>
              <li><strong>Underground utility clearance</strong> &mdash; Verify outrigger and crawler track positions against the facility&apos;s underground piping, electrical, and drainage drawings. In older refineries, as-built drawings may not reflect all subsurface utilities, and ground-penetrating radar or vacuum excavation may be required.</li>
              <li><strong>Overhead obstruction survey</strong> &mdash; Map all overhead pipe racks, electrical cable trays, flare headers, and process piping in the crane&apos;s boom swing path. Determine minimum clearance distances and identify any live (in-service) piping that the boom could contact.</li>
              <li><strong>Emergency response plan</strong> &mdash; Confirm the crane lift does not block emergency access roads, fire hydrant connections, or emergency assembly points. Coordinate with the facility&apos;s emergency response team if the lift requires temporary impairment of fire protection systems.</li>
              <li><strong>Static grounding verification</strong> &mdash; Confirm the crane chassis is bonded to the facility grounding grid per API RP 2003. Measure grounding resistance to verify continuity (typically less than 10 ohms for refinery applications).</li>
            </ul>

            <h2>Crane Inspection Modifications for Hazardous Environments</h2>

            <p>
              Petrochemical environments accelerate crane deterioration through mechanisms that are not present in general construction or manufacturing settings. Crane inspectors working in refineries must adjust their inspection criteria to account for these environment-specific degradation modes:
            </p>

            <h3>Corrosion from H2S and Acid Gases</h3>

            <p>
              Hydrogen sulfide (H2S), a common byproduct of hydrodesulfurization and other refinery processes, causes sulfide stress cracking (SSC) in high-strength steel components. This is particularly dangerous for crane wire rope, because the high-strength steel wires used in crane ropes (typically 180&ndash;240 ksi tensile strength) are in the range most susceptible to SSC. Cranes operating in areas with H2S exposure may show wire rope degradation that is not visible on external inspection&mdash;the cracking initiates at the wire interior and propagates outward, causing sudden brittle failure without the progressive broken wire indicators that inspectors typically rely on for rejection criteria.
            </p>

            <p>
              For cranes with significant H2S exposure, inspection protocols should include shortened wire rope replacement intervals (regardless of visible condition), magnetic rope testing (MRT) at frequencies exceeding ASME B30 minimums, and metallurgical analysis of retired rope samples to establish site-specific degradation rates.
            </p>

            <h3>Chemical Exposure Effects on Wire Rope and Structural Components</h3>

            <p>
              Refinery cranes are routinely exposed to hydrofluoric acid (HF) mist from alkylation units, sulfuric acid aerosol, caustic soda spray from scrubber systems, and amine solution drips from gas treating units. Each of these chemicals attacks crane components through different mechanisms:
            </p>

            <ul>
              <li><strong>Hydrofluoric acid</strong> &mdash; HF attacks carbon steel aggressively, causing pitting and general wall loss on structural members. It also attacks glass and silicone-based sealants, compromising explosion-proof enclosure seals and sight glass integrity on hydraulic systems.</li>
              <li><strong>Sulfuric acid</strong> &mdash; Concentrated sulfuric acid causes intergranular corrosion in carbon steel, which may not be visible on external surfaces but significantly reduces structural capacity. Wire rope sheaves and pins in acid-exposed areas should be inspected for accelerated wear patterns.</li>
              <li><strong>Caustic soda</strong> &mdash; Causes caustic embrittlement (stress corrosion cracking) in carbon steel at elevated temperatures. Crane booms positioned near caustic injection points or above caustic tanks may develop stress cracks at weld toes and high-stress connection points.</li>
              <li><strong>Amine solutions</strong> &mdash; Amine-based corrosion follows a pattern similar to caustic cracking. Crane components exposed to amine drips or spray should be inspected for cracking at stress concentration points, particularly in boom chord welds and lattice member connections.</li>
            </ul>

            <p>
              Crane inspectors should coordinate with the refinery&apos;s corrosion engineer to understand the specific chemical exposures at each crane operating location and adjust inspection frequencies and rejection criteria accordingly. Standard ASME B30 inspection intervals assume a general industrial environment and may be inadequate for cranes with sustained chemical exposure.
            </p>

            {/* CTA */}
            <div className="not-prose">
              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Manage Refinery Crane Inspections Digitally</h3>
                <p className="text-white/90 mb-6">CraneCheck supports petrochemical-specific inspection workflows including hazardous area documentation, hot work permit tracking, and turnaround crane coordination. Keep your refinery crane operations compliant and auditable.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>

          </div>
        </article>
        <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-petrochemical-refinery" /></div>
        <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
