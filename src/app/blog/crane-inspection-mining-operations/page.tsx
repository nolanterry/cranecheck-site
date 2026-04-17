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
  title: "Crane Inspection for Mining Operations: MSHA Compliance, Underground Hoists & Surface Crane Requirements",
  description: "Complete guide to crane inspection for mining operations covering MSHA vs OSHA jurisdiction, 30 CFR Part 56/57 requirements, underground hoist inspection, surface crane operations in pit environments, dust and corrosion effects, and dragline inspection.",
  alternates: { canonical: "/blog/crane-inspection-mining-operations" },
};

export default function CraneInspectionMiningOperationsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Inspection for Mining Operations: MSHA Compliance, Underground Hoists & Surface Crane Requirements",
    "description": "Complete guide to crane inspection for mining operations covering MSHA vs OSHA jurisdiction, 30 CFR Part 56/57 requirements, underground hoist inspection, surface crane operations in pit environments, dust and corrosion effects, and dragline inspection.",
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
      "@id": "https://cranecheck.co/blog/crane-inspection-mining-operations"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Inspection for Mining Operations", "item": "https://cranecheck.co/blog/crane-inspection-mining-operations" }
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
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Crane Inspection for Mining Operations: MSHA Compliance, Underground Hoists &amp; Surface Crane Requirements</h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">Mining operations subject cranes and hoisting equipment to some of the harshest conditions in any industry. Abrasive dust, corrosive chemical runoff, extreme vibration from blasting, and constant heavy-cycle loading create accelerated wear patterns that standard industrial inspection intervals cannot adequately address. Add overlapping regulatory jurisdiction between MSHA and OSHA, and the inspection landscape becomes uniquely complex. This guide covers the full scope of crane and hoist inspection for mining&mdash;from surface mobile cranes operating on pit benches to underground shaft hoists, draglines, and the regulatory framework under 30 CFR Part 56 and 57 that governs it all.</p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>Introduction: Mining Environments and Their Unique Demands on Cranes</h2>

            <p>
              Mining operations&mdash;whether open-pit surface mines, underground metal/non-metal operations, or coal extraction facilities&mdash;rely on cranes and hoisting equipment for everything from shaft sinking and material handling to dragline excavation and maintenance support. The operational environment imposes stresses that go far beyond what a crane encounters on a typical construction site. Airborne silica dust infiltrates hydraulic systems and electrical enclosures. Acidic mine water accelerates corrosion on structural steel at rates three to five times faster than normal atmospheric exposure. Blasting operations generate ground vibration and shock loading that can fatigue welds and loosen mechanical connections over surprisingly short service intervals.
            </p>

            <p>
              According to MSHA accident and injury data, hoisting-related incidents account for a significant portion of serious injuries in both surface and underground mining. The combination of heavy loads, harsh environments, and the inherent hazards of working near open pits, shafts, and unstable ground makes rigorous crane and hoist inspection not just a regulatory obligation but a critical safety function. Understanding which regulations apply, what they require, and how to adapt inspection protocols for the realities of a mining environment is essential for every inspector, maintenance supervisor, and mine safety professional.
            </p>

            <h2>MSHA vs OSHA Jurisdiction: Which Applies?</h2>

            <p>
              One of the most common sources of confusion in mining crane inspection is determining whether the Mine Safety and Health Administration (MSHA) or the Occupational Safety and Health Administration (OSHA) has jurisdiction over a specific piece of equipment or operation. The distinction matters because each agency has different inspection standards, documentation requirements, and enforcement mechanisms.
            </p>

            <p>
              The Federal Mine Safety and Health Act of 1977 (Mine Act) grants MSHA jurisdiction over all operations at mines and on mine property. Under Section 4 of the Mine Act, MSHA authority extends to &quot;each coal or other mine, each operator of such mine, and each miner in such mine.&quot; This includes surface facilities that are part of the mining operation, such as processing plants, stockpile areas, and maintenance shops located on mine property. OSHA&apos;s general industry and construction standards apply only to operations that fall outside MSHA&apos;s jurisdiction&mdash;typically contractor work that is not integral to the mining process.
            </p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left font-semibold">Factor</th>
                    <th className="px-4 py-3 text-left font-semibold">MSHA (30 CFR Parts 56/57)</th>
                    <th className="px-4 py-3 text-left font-semibold">OSHA (29 CFR 1926 Subpart CC)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Jurisdiction</td>
                    <td className="px-4 py-3">All mines and mine property</td>
                    <td className="px-4 py-3">Construction and general industry sites</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Crane Standards</td>
                    <td className="px-4 py-3">30 CFR 56/57.14200–14213 (hoisting)</td>
                    <td className="px-4 py-3">29 CFR 1926.1400–1926.1442</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Inspection Frequency</td>
                    <td className="px-4 py-3">Pre-shift and periodic (defined by mine plan)</td>
                    <td className="px-4 py-3">Pre-shift, monthly, annual (per Subpart CC)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Qualified Person Definition</td>
                    <td className="px-4 py-3">Competent person per mine operator training plan</td>
                    <td className="px-4 py-3">Qualified and competent person per 1926.1401</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Wire Rope Criteria</td>
                    <td className="px-4 py-3">30 CFR 56/57.14131 (removal criteria for hoists)</td>
                    <td className="px-4 py-3">1926.1413 (wire rope inspection criteria)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Enforcement</td>
                    <td className="px-4 py-3">MSHA citations, orders of withdrawal, civil penalties</td>
                    <td className="px-4 py-3">OSHA citations, willful/repeat classifications</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Record Retention</td>
                    <td className="px-4 py-3">Until superseded or equipment removed from service</td>
                    <td className="px-4 py-3">Duration of equipment presence on site</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              In practice, many mining sites have both MSHA-regulated areas and OSHA-regulated areas. A construction contractor building a new processing facility on mine property may fall under OSHA jurisdiction for the construction work itself but must still comply with MSHA requirements when working near active mining areas. Inspectors and safety managers must clearly identify the jurisdictional boundary for each crane operation and apply the correct standard.
            </p>

            <h2>30 CFR Part 56/57 Crane Requirements</h2>

            <p>
              The primary MSHA regulations governing cranes and hoisting equipment in mining are found in 30 CFR Part 56 (surface metal/non-metal mines) and Part 57 (underground metal/non-metal mines). Coal mines are governed by 30 CFR Parts 75 and 77, which contain parallel but distinct hoisting requirements. The key regulatory sections include:
            </p>

            <ul>
              <li><strong>56/57.14200 – Hoisting procedures:</strong> Requires that hoisting equipment be operated only by authorized persons trained in safe hoisting practices. Load limits must be posted and not exceeded.</li>
              <li><strong>56/57.14201 – Hoist operators:</strong> Operators must remain at the controls while loads are suspended, and must have an unobstructed view of the load or use a qualified signal person.</li>
              <li><strong>56/57.14205 – Hoist safety devices:</strong> Shaft hoists must be equipped with overwind and underwind protection, overspeed devices, and an emergency braking system independent of the main brake.</li>
              <li><strong>56/57.14207 – Wire rope inspection:</strong> Hoisting ropes must be inspected daily when in use, with a thorough examination at intervals not exceeding 6 months. Records must be maintained.</li>
              <li><strong>56/57.14211 – Crane load ratings:</strong> Cranes must not be loaded beyond rated capacity, and load rating charts must be posted in the operator&apos;s cab.</li>
              <li><strong>56/57.14213 – Crane inspection:</strong> Mobile and overhead cranes must be inspected before initial use and at regular intervals as determined by the mine&apos;s maintenance program.</li>
            </ul>

            <p>
              A critical distinction between MSHA and OSHA requirements is that MSHA does not prescribe a single national inspection interval for all crane types. Instead, 30 CFR 56/57.14100 requires mine operators to develop and implement a maintenance program that includes scheduled inspections based on the manufacturer&apos;s recommendations and the specific hazards of the mine environment. This flexibility places greater responsibility on the mine operator to establish appropriate intervals&mdash;and on MSHA inspectors to evaluate whether those intervals are adequate.
            </p>

            <h2>Underground Hoist Inspection</h2>

            <p>
              Underground shaft hoists represent the most safety-critical hoisting equipment in mining. These systems transport personnel and materials through vertical shafts that can exceed 8,000 feet in depth, operating under extreme conditions of temperature, humidity, and corrosive atmosphere. The consequences of a hoist failure&mdash;whether mechanical, structural, or rope-related&mdash;are catastrophic by definition.
            </p>

            <h3>Wire Rope Inspection for Shaft Hoists</h3>

            <p>
              Hoist ropes are the single most critical component. Under 30 CFR 57.14207, hoist ropes in underground mines must be visually inspected daily when in use and thoroughly examined at intervals not to exceed six months. The thorough examination must include measurement of rope diameter to detect internal core degradation, assessment of broken wire count per lay length, examination for corrosion pitting and valley breaks, and verification that the rope has not elongated beyond allowable limits. Many operations supplement visual inspection with electromagnetic rope testing (MRT), which can detect internal wire breaks and cross-sectional area loss that are invisible to the naked eye. While MSHA does not currently mandate MRT, it is considered best practice for shaft hoist ropes and is required in several other mining jurisdictions internationally.
            </p>

            <h3>Sheave Inspection</h3>

            <p>
              Head sheaves and deflection sheaves must be inspected for groove wear, bearing condition, shaft alignment, and guard integrity. Worn sheave grooves accelerate rope wear by introducing point loading and abrasion at contact surfaces. The groove diameter should match the rope diameter within manufacturer tolerances&mdash;typically a groove that is 5-10% larger than the nominal rope diameter. Bearings must be checked for excessive play, lubrication condition, and operating temperature. Sheave guards must be intact to prevent the rope from jumping the groove during slack rope conditions.
            </p>

            <h3>Braking Systems</h3>

            <p>
              Underground hoists must be equipped with at least two independent braking systems: a service brake used for normal stopping and speed control, and an emergency brake capable of stopping and holding the hoist with its maximum rated load at maximum speed. Under 30 CFR 57.14205, these brakes must be tested at regular intervals&mdash;typically weekly for operational tests and quarterly for full load tests. Brake inspection includes measurement of lining thickness, verification of spring tension or hydraulic pressure, inspection of brake drum or disc surfaces for scoring or heat damage, and functional testing of the emergency engagement mechanism.
            </p>

            <h3>Overwind and Overwinding Protection</h3>

            <p>
              Overwind protection devices prevent the conveyance from being hoisted beyond its intended travel limit into the headframe structure. These systems typically consist of primary limit switches, secondary (backup) limit switches, and a final mechanical overwinding device such as safety dogs or arrest mechanisms. All overwind protection must be tested before each shift in which personnel are transported, and records of each test must be maintained. The consequences of overwind failure include structural collapse of the headframe, rope break, and uncontrolled descent of the conveyance.
            </p>

            <h2>Surface Crane Operations in Pit Environments</h2>

            <p>
              Surface mining operations use mobile cranes extensively for maintenance, equipment assembly, and material handling within active pit areas. These operations introduce hazards that are fundamentally different from typical construction crane use.
            </p>

            <h3>Bench Stability</h3>

            <p>
              Cranes operating on pit benches must be positioned on ground that has been evaluated for bearing capacity and slope stability. Mining benches are dynamic surfaces&mdash;blasting, equipment traffic, and drainage patterns continuously alter ground conditions. The setback distance from the crest of a bench or highwall must account for the crane&apos;s outrigger loading, the bench material&apos;s angle of repose, and any recent blasting that may have fractured the bench crest. A geotechnical assessment should be conducted before positioning a crane within two times the bench height from any crest edge.
            </p>

            <h3>Highwall Proximity</h3>

            <p>
              Operations near highwalls introduce falling rock and rockfall hazards that are not present on conventional construction sites. Crane operators and riggers must be positioned outside the fall zone of the highwall, which is typically defined as a distance equal to the highwall height plus a safety margin. Inspection of the highwall face for loose material, scaling activity, and recent blast damage should be part of the pre-lift assessment. Some operations require a spotter dedicated to monitoring the highwall during crane operations.
            </p>

            <h3>Haul Road Crane Operations</h3>

            <p>
              When cranes must operate on or adjacent to active haul roads, traffic management becomes a critical safety concern. Haul trucks in mining operations can weigh 200 to 400 tons and require stopping distances that exceed 200 feet at moderate speeds. Crane operations on haul roads require positive traffic control&mdash;physical barriers, not just flagging&mdash;along with radio communication with dispatch and all truck operators in the area. Ground conditions on haul roads are typically well-compacted but may be contaminated with spilled material, diesel fuel, or water that affects outrigger pad bearing capacity.
            </p>

            <h2>Dust &amp; Corrosion Effects on Crane Components</h2>

            <p>
              Mining environments impose accelerated wear and degradation on crane components that inspectors must account for when establishing inspection intervals and acceptance criteria.
            </p>

            <h3>Accelerated Wear Patterns</h3>

            <p>
              Airborne dust in mining operations&mdash;particularly silica,iteite,ite, and coal dust&mdash;acts as an abrasive contaminant in virtually every mechanical system. Wire ropes operating in dusty environments experience accelerated external wear as abrasive particles embed in the rope surface and act as cutting agents against sheave grooves and drum surfaces. Hydraulic cylinders develop scoring on rod surfaces when dust bypasses wiper seals, leading to internal seal failure and loss of hydraulic control. Electrical contacts and relay mechanisms can fail prematurely as dust buildup creates insulation barriers or, when combined with moisture, conductive paths that cause short circuits.
            </p>

            <h3>Filtration Requirements</h3>

            <p>
              Cranes operating in mining environments require enhanced filtration on hydraulic systems, engine air intake, and cab pressurization systems. Standard construction-grade filters are often inadequate for the dust loading encountered in surface mining. Hydraulic system filtration should be upgraded to a minimum of 10-micron absolute filtration with contamination monitoring through regular fluid analysis. Engine intake systems should include pre-cleaners and high-capacity primary filters with restriction indicators. Cab pressurization systems must maintain positive pressure to exclude dust from the operator&apos;s environment, and HEPA-grade recirculation filters should be inspected and replaced on an accelerated schedule.
            </p>

            <h3>Cleaning and Maintenance Schedules</h3>

            <p>
              Accumulated dust on crane structures creates several inspection challenges. Thick dust coatings can conceal structural cracks, corrosion, and weld defects during visual inspection. Dust accumulation on cooling system radiators and oil coolers reduces heat dissipation capacity, leading to overheating and premature component failure. Inspection protocols for mining cranes should include a cleaning requirement prior to structural inspection&mdash;particularly for boom sections, turntable connections, and outrigger box structures where cracks typically initiate. Many mine maintenance programs mandate weekly pressure washing of crane structures, with a thorough cleaning required before any periodic or annual inspection.
            </p>

            <h2>Dragline Inspection Fundamentals</h2>

            <p>
              Draglines are among the largest machines in surface mining, with boom lengths exceeding 300 feet and bucket capacities ranging from 40 to 130 cubic yards. These machines operate continuously in demanding conditions, and their inspection requirements reflect both their complexity and the consequences of failure.
            </p>

            <h3>Walking Mechanism</h3>

            <p>
              Draglines move by &quot;walking&quot;&mdash;lifting the tub (base) off the ground using eccentric cam mechanisms or hydraulic walking shoes and shuffling forward in increments. The walking mechanism inspection includes examination of walking shoe pads for wear and cracking, cam bearing condition and lubrication, structural connections between the walking system and the tub, and verification that walking shoe leveling systems are functioning correctly. Walking mechanism failures can strand a dragline in an unstable position, creating both production loss and safety hazards if the machine settles unevenly.
            </p>

            <h3>Boom Structure</h3>

            <p>
              Dragline booms are tubular lattice structures that experience continuous cyclic loading. Boom inspection must cover all main chord members, lacing (diagonal) members, gusset plate connections, and the boom foot pin connection. Fatigue cracking is the primary structural concern, particularly at gusset plate weld toes and at locations where lacing members intersect main chords. Non-destructive examination (NDE) using magnetic particle testing (MT) or ultrasonic testing (UT) should be performed at known fatigue-critical locations on a scheduled basis&mdash;typically every 6 to 12 months depending on operating hours and duty cycle severity. Boom suspension ropes and pendants must be inspected with the same rigor as hoist ropes.
            </p>

            <h3>Bucket Rigging</h3>

            <p>
              The drag and hoist rope systems on a dragline experience extreme service conditions. Drag ropes are pulled through abrasive material with every cycle, and hoist ropes endure continuous high-frequency cycling. Rigging inspection includes examination of drag chains, hitch pins, dump block assemblies, and socket connections. Wire rope inspection must account for the accelerated wear rate inherent in dragline operations&mdash;rope replacement intervals in dragline service are typically 30-50% shorter than equivalent rope sizes in conventional crane applications.
            </p>

            <h3>Fairlead Inspection</h3>

            <p>
              Fairlead rollers guide the drag rope from the drum to the boom point and are subject to severe abrasive wear. Worn fairlead rollers create point loading on the drag rope, dramatically accelerating rope degradation. Inspection must include measurement of roller groove profiles against manufacturer specifications, verification of roller bearing condition and free rotation, and examination of the fairlead frame structure for cracking at mounting points. Frozen (non-rotating) fairlead rollers must be replaced immediately, as they create flat spots on the rope that constitute a rejection criterion.
            </p>

            <h2>Mining-Specific Pre-Shift Inspection Checklist</h2>

            <p>
              Pre-shift inspections for cranes in mining environments must go beyond standard construction crane checklists to address the unique hazards present. The following items should be included in addition to the manufacturer&apos;s standard pre-operation inspection:
            </p>

            <ul>
              <li><strong>Ground conditions:</strong> Verify bench stability, check for recent blasting effects, confirm setback distances from crest edges and highwalls</li>
              <li><strong>Dust accumulation:</strong> Inspect cooling systems, air filters, cab pressurization, and electrical enclosures for excessive dust buildup</li>
              <li><strong>Wire rope condition:</strong> Perform visual inspection with specific attention to abrasive wear patterns, corrosion from mine water exposure, and broken wire count</li>
              <li><strong>Hydraulic system:</strong> Check for contamination indicators, verify filter restriction gauges, inspect cylinder rods for scoring from dust infiltration</li>
              <li><strong>Structural cleaning:</strong> Confirm that critical structural joints are clean enough for meaningful visual inspection; request cleaning if dust obscures weld toes or connection points</li>
              <li><strong>Traffic management:</strong> Verify that positive traffic control measures are in place if operating near haul roads or active pit areas</li>
              <li><strong>Communication:</strong> Confirm mine radio channel assignment, check for active blasting schedules, and verify that the crane operation has been communicated to the mine dispatch</li>
              <li><strong>Electrical grounding:</strong> Verify that the crane is properly grounded, particularly when operating near overhead power lines serving pit lighting or conveyor systems</li>
              <li><strong>Emergency response:</strong> Confirm location of nearest mine refuge area, evacuation routes, and emergency communication procedures specific to the mine site</li>
            </ul>

            <h2>Common Mining Crane Deficiencies</h2>

            <p>
              The following table summarizes the most frequently cited deficiencies found during crane and hoist inspections at mining operations, along with the environmental factors that contribute to each issue and the applicable regulatory references.
            </p>

            <div className="not-prose overflow-x-auto my-8">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-4 py-3 text-left font-semibold">Deficiency</th>
                    <th className="px-4 py-3 text-left font-semibold">Environment Factor</th>
                    <th className="px-4 py-3 text-left font-semibold">Regulatory Reference</th>
                    <th className="px-4 py-3 text-left font-semibold">Corrective Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Excessive wire rope wear</td>
                    <td className="px-4 py-3">Abrasive dust, acidic water exposure</td>
                    <td className="px-4 py-3">30 CFR 56/57.14131</td>
                    <td className="px-4 py-3">Increase inspection frequency; shorten replacement intervals by 30-50%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Hydraulic contamination</td>
                    <td className="px-4 py-3">Airborne silica andite dust infiltration</td>
                    <td className="px-4 py-3">30 CFR 56/57.14100</td>
                    <td className="px-4 py-3">Upgrade to 10-micron absolute filtration; implement regular fluid analysis</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Structural cracks concealed by dust</td>
                    <td className="px-4 py-3">Heavy dust accumulation on boom and turntable</td>
                    <td className="px-4 py-3">30 CFR 56/57.14100</td>
                    <td className="px-4 py-3">Mandatory cleaning prior to structural inspection; add NDE at fatigue-critical joints</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Brake degradation on shaft hoists</td>
                    <td className="px-4 py-3">High humidity, corrosive atmosphere underground</td>
                    <td className="px-4 py-3">30 CFR 57.14205</td>
                    <td className="px-4 py-3">Weekly brake tests; quarterly full-load tests; accelerated lining replacement</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Overwind device malfunction</td>
                    <td className="px-4 py-3">Dust and moisture on limit switch contacts</td>
                    <td className="px-4 py-3">30 CFR 57.14205</td>
                    <td className="px-4 py-3">Pre-shift testing of all overwind devices; sealed enclosure upgrades</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Ground failure under outriggers</td>
                    <td className="px-4 py-3">Blast-fractured bench material, spoil piles</td>
                    <td className="px-4 py-3">30 CFR 56/57.14211</td>
                    <td className="px-4 py-3">Geotechnical assessment before crane placement; increased pad area</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-navy">Cooling system failure</td>
                    <td className="px-4 py-3">Dust clogging radiators and oil coolers</td>
                    <td className="px-4 py-3">30 CFR 56/57.14100</td>
                    <td className="px-4 py-3">Daily radiator inspection; weekly pressure washing; temperature monitoring</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium text-navy">Missing or illegible load charts</td>
                    <td className="px-4 py-3">UV degradation, dust coating, vibration damage</td>
                    <td className="px-4 py-3">30 CFR 56/57.14211</td>
                    <td className="px-4 py-3">Replace with laminated or metal-plate load charts; relocate inside sealed cab</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="not-prose">
              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Streamline Mining Crane Inspections</h3>
                <p className="text-white/90 mb-6">CraneCheck supports MSHA-compliant inspection workflows for surface and underground crane operations. Track dust exposure effects, dragline inspections, and hoist certifications — all in one digital platform.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>

          </div>
        </article>
        <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-mining-operations" /></div>
        <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
        <Footer />
      </main>
    </>
  );
}
