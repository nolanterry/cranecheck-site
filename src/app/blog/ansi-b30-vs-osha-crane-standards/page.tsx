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
  title: "ANSI B30 vs OSHA: Understanding Crane Inspection Standard Differences",
  description: "Compare ANSI B30 and OSHA crane standards. Learn key differences in inspection requirements, compliance obligations, and how both standards work together for safety.",
  alternates: { canonical: "/blog/ansi-b30-vs-osha-crane-standards" },
};

export default function AnsiB30VsOshaCraneStandardsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "ANSI B30 vs OSHA: Understanding Crane Inspection Standard Differences",
    "description": "Compare ANSI B30 and OSHA crane standards. Learn key differences in inspection requirements, compliance obligations, and how both standards work together for safety.",
    "datePublished": "2026-03-26",
    "dateModified": "2026-03-26",
    "author": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/ansi-b30-vs-osha-crane-standards" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "ANSI B30 vs OSHA: Understanding Crane Inspection Standard Differences", "item": "https://cranecheck.co/blog/ansi-b30-vs-osha-crane-standards" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Regulations</span>
              <span className="text-xs text-gray-400">March 26, 2026</span>
              <span className="text-xs text-gray-400">22 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">ANSI B30 vs OSHA: Understanding Crane Inspection Standard Differences</h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">Navigate the complex relationship between voluntary ANSI B30 standards and mandatory OSHA regulations to ensure comprehensive crane inspection compliance.</p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>
            
            <p>Understanding the relationship between ANSI B30 standards and OSHA regulations is critical for crane safety professionals. While OSHA provides legally enforceable minimum requirements under 29 CFR 1926 Subpart CC, ANSI B30 standards offer detailed technical guidance that often exceeds these minimums. This comprehensive comparison will help you navigate both frameworks to achieve optimal crane safety and compliance.</p>

            <p>The distinction matters more than most operators realize. In 2024, OSHA issued over $28 million in crane-related penalties. Many of those citations referenced industry consensus standards&mdash;including ANSI B30&mdash;as evidence that employers knew or should have known about recognized hazards. Whether you&rsquo;re a crane operator, safety director, or fleet manager, understanding both frameworks is not optional&mdash;it&rsquo;s essential to protecting your workers and your business.</p>

            <h2>Understanding the Standards Framework</h2>

            <h3>A Brief History of OSHA Crane Regulations</h3>
            <p>OSHA&rsquo;s journey to modern crane standards was long and contentious. For nearly four decades, the agency relied on a patchwork of regulations dating to the early 1970s. The original construction crane rules under 29 CFR 1926.550 were adopted in 1971 and incorporated by reference the 1968 edition of ANSI B30.5&mdash;standards that were already outdated when they became law.</p>

            <p>The limitations of the old framework became tragically apparent over the decades. Crane fatalities in construction averaged 22 per year through the 1990s and 2000s, with collapsed tower cranes and overloaded mobile cranes making national headlines. The C-DAC (Cranes and Derricks Advisory Committee) was formed in 2003 to advise OSHA on new rulemaking, bringing together crane owners, operators, manufacturers, labor unions, and safety professionals to develop practical, enforceable standards.</p>

            <p>By the early 2000s, the gap between field practice and the regulations was enormous. Crane technology had advanced dramatically&mdash;telescopic boom cranes, computerized load moment indicators, synthetic slings, anti-two-block devices&mdash;but the rules hadn&rsquo;t kept pace. The rulemaking process that eventually produced Subpart CC (29 CFR 1926.1400-1442) began in 1998 and wasn&rsquo;t finalized until August 9, 2010. It took effect on November 8, 2010, with phased implementation dates extending through 2018 for operator certification requirements.</p>

            <p>Subpart CC was a landmark overhaul. It replaced the outdated 1926.550 with a comprehensive framework covering assembly/disassembly (1926.1404), inspections (1926.1412-1413), operator qualifications (1926.1427), signal person requirements (1926.1428), and ground conditions (1926.1402). For the first time, OSHA had crane rules that reflected how the industry actually operated.</p>

            <p>However, even Subpart CC has gaps. OSHA intentionally wrote performance-based rules rather than prescriptive requirements, leaving the &ldquo;how&rdquo; of compliance to employers. This is precisely where ANSI B30 standards fill the void&mdash;providing the detailed, prescriptive guidance that OSHA deliberately omitted to maintain regulatory flexibility.</p>

            <h3>How the ASME/ANSI Consensus Process Works</h3>
            <p>ANSI B30 standards are developed through a fundamentally different process. The American Society of Mechanical Engineers (ASME) convenes committees of industry experts&mdash;manufacturers, end users, insurers, labor representatives, and government officials&mdash;to develop consensus standards. This process follows the American National Standards Institute (ANSI) accreditation requirements, which mandate balanced representation, public comment periods, and due process for resolving objections.</p>

            <p>Each B30 standard is maintained by a dedicated subcommittee. B30.5 (Mobile and Locomotive Cranes), for example, is maintained by the B30.5 Subcommittee under the B30 Standards Committee. The standards operate on a five-year revision cycle, though supplements and interpretations can be issued between editions. The current edition of B30.5 was published in 2021, with the next revision expected in 2026.</p>

            <p>This consensus process produces standards that are technically rigorous and reflect current industry practice. Because they&rsquo;re updated more frequently than OSHA regulations&mdash;which require formal rulemaking under the Administrative Procedure Act&mdash;ANSI B30 standards typically represent the most current thinking on crane safety.</p>

            <h2>Fundamental Framework Differences</h2>

            <h3>OSHA: Legal Minimums with Enforcement Power</h3>
            <p>OSHA&rsquo;s crane standards, primarily found in 29 CFR 1926.1400-1442, establish legally enforceable minimum safety requirements. These regulations carry significant penalties that are adjusted annually for inflation:</p>

            <ul>
              <li><strong>Serious violations:</strong> Up to $16,550 per violation</li>
              <li><strong>Other-than-serious violations:</strong> Up to $16,550 per violation</li>
              <li><strong>Willful or repeated violations:</strong> Up to $165,514 per violation</li>
              <li><strong>Failure to abate:</strong> $16,550 per day beyond the abatement date</li>
              <li><strong>Posting requirements:</strong> Up to $16,550 for failure to post citations</li>
            </ul>

            <p>OSHA takes a performance-based approach, often stating what must be achieved without prescribing specific methods. For example, 29 CFR 1926.1412(d) requires daily inspections but doesn&rsquo;t detail every component to check. This gives employers flexibility but also creates ambiguity about what constitutes adequate compliance.</p>

            <h3>ANSI B30: Technical Excellence Standards</h3>
            <p>The American Society of Mechanical Engineers (ASME) publishes ANSI B30 standards as voluntary consensus standards. These provide detailed technical specifications that often exceed OSHA minimums. Unlike OSHA&rsquo;s performance-based approach, ANSI B30 standards are prescriptive&mdash;they tell you exactly what to inspect, how to inspect it, and what criteria to apply when evaluating results.</p>

            <p>Key ANSI B30 volumes relevant to crane operations include:</p>

            <ul>
              <li><strong>B30.2:</strong> Overhead and gantry cranes (top running bridge, multiple girder)</li>
              <li><strong>B30.3:</strong> Tower cranes</li>
              <li><strong>B30.5:</strong> Mobile and locomotive cranes</li>
              <li><strong>B30.17:</strong> Overhead and gantry cranes (top running bridge, single girder, underhung hoist)</li>
              <li><strong>B30.22:</strong> Articulating boom cranes</li>
              <li><strong>B30.26:</strong> Rigging hardware</li>
            </ul>

            <h2>Specific ANSI B30 Standards Every Crane Professional Must Know</h2>

            <h3>B30.2 &mdash; Overhead and Gantry Cranes (Top Running Bridge, Multiple Girder)</h3>
            <p>B30.2 is the foundational standard for overhead cranes in manufacturing, steel service centers, power plants, and warehouses. It covers construction, installation, inspection, testing, maintenance, and operation of top-running bridge cranes with multiple girders. Key provisions include detailed inspection intervals (frequent vs. periodic), load testing requirements at 125% of rated load, and specific runway alignment tolerances. If you operate overhead cranes in a general industry setting, B30.2 is your primary technical reference&mdash;and OSHA&rsquo;s general industry standard 29 CFR 1910.179 explicitly incorporates earlier editions by reference.</p>

            <h3>B30.3 &mdash; Tower Cranes</h3>
            <p>B30.3 addresses the unique challenges of tower crane operations: erection sequences, climbing procedures, foundation requirements, and out-of-service weather criteria. It specifies wind speed limits for climbing operations (typically 20 mph maximum), requirements for independent safety devices like trolley travel limit switches, and detailed procedures for telescoping and luffing operations. In urban construction, where tower cranes operate near occupied buildings and over public streets, B30.3 provides the level of specificity that OSHA&rsquo;s general provisions in Subpart CC cannot match.</p>

            <h3>B30.5 &mdash; Mobile and Locomotive Cranes</h3>
            <p>B30.5 is arguably the most widely used B30 standard, covering hydraulic truck cranes, lattice boom crawler cranes, rough terrain cranes, and all-terrain cranes. It provides the detailed inspection criteria that OSHA&rsquo;s 29 CFR 1926.1412 references only broadly. B30.5 specifies wire rope replacement criteria (e.g., six randomly distributed broken wires in one rope lay, or three broken wires in one strand in one lay), boom inspection procedures, hydraulic system testing, and outrigger/stabilizer requirements. For construction crane operations, this is the standard that fills in the gaps left by Subpart CC.</p>

            <h3>B30.17 &mdash; Overhead and Gantry Cranes (Top Running Bridge, Single Girder, Underhung Hoist)</h3>
            <p>B30.17 covers single-girder overhead cranes and underhung hoists&mdash;equipment commonly found in lighter manufacturing, maintenance shops, and assembly operations. While often overshadowed by B30.2, this standard addresses the specific engineering and inspection concerns of single-girder designs, including girder deflection limits, end truck wear patterns, and hoist trolley clearance requirements. Many facilities incorrectly apply B30.2 criteria to single-girder cranes; B30.17 provides the correct technical framework.</p>

            <h3>B30.22 &mdash; Articulating Boom Cranes</h3>
            <p>Articulating boom cranes (knuckle boom cranes) are increasingly common in construction, utility, and delivery applications. B30.22 provides standards for their construction, inspection, and operation, including hydraulic cylinder inspection criteria, boom pin wear limits, and stability requirements. Because these cranes have fundamentally different load charts and operating characteristics than telescopic boom cranes, applying B30.5 criteria can be inappropriate or dangerous. B30.22 provides the right framework for these machines.</p>

            <h3>B30.26 &mdash; Rigging Hardware</h3>
            <p>B30.26 covers shackles, eyebolts, turnbuckles, swivels, and other rigging hardware. While often overlooked, rigging hardware failures are a leading cause of crane-related incidents. This standard provides inspection criteria including dimensional wear limits (e.g., shackle pins worn more than 10% of original diameter must be removed from service), proper application guidelines, and proof testing requirements. Every crane operation relies on rigging hardware, making B30.26 relevant to virtually every crane professional.</p>

            <h2>Inspection Requirements Comparison</h2>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Inspection Type</th>
                  <th className="border border-gray-300 p-3 text-left">OSHA Requirements</th>
                  <th className="border border-gray-300 p-3 text-left">ANSI B30 Standards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Pre-Shift / Daily</td>
                  <td className="border border-gray-300 p-3">29 CFR 1926.1412(d) &mdash; Visual inspection before use each shift; operator must confirm no deficiencies</td>
                  <td className="border border-gray-300 p-3">B30.5-2.1.1 &mdash; Detailed shift checklist: control mechanisms, safety devices, air/hydraulic systems, hooks, wire rope reeving</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Monthly</td>
                  <td className="border border-gray-300 p-3">29 CFR 1926.1412(e) &mdash; Monthly inspections covering items not in shift inspection</td>
                  <td className="border border-gray-300 p-3">B30.5-2.1.2 &mdash; Comprehensive monthly procedures: deformed/cracked members, loose bolts, worn sheaves, drum condition, electrical apparatus</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Annual / Periodic</td>
                  <td className="border border-gray-300 p-3">29 CFR 1926.1412(f) &mdash; Annual comprehensive inspection by qualified person; documented</td>
                  <td className="border border-gray-300 p-3">B30.5-2.1.3 &mdash; Complete structural, mechanical, and electrical inspection with specific accept/reject criteria for every component</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Post-Assembly</td>
                  <td className="border border-gray-300 p-3">29 CFR 1926.1406(a) &mdash; After each assembly; test per manufacturer procedures</td>
                  <td className="border border-gray-300 p-3">B30.5-2.1.4 &mdash; Initial and post-erection inspection with function testing of all systems</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Post-Repair / Modification</td>
                  <td className="border border-gray-300 p-3">29 CFR 1926.1412(a) &mdash; Modified equipment must be inspected; capacity may require revalidation</td>
                  <td className="border border-gray-300 p-3">B30.5-2.2.3 &mdash; Post-repair inspection and testing, including load test at 100% when structural repairs are made</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Severe Weather</td>
                  <td className="border border-gray-300 p-3">29 CFR 1926.1412(d)(1) &mdash; Inspection required after exposure to conditions that could affect safety</td>
                  <td className="border border-gray-300 p-3">B30.5-2.1.1 &mdash; Post-event inspection after lightning strike, high wind (&gt;60 mph), seismic event; includes structural and electrical checks</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Standby / Return to Service</td>
                  <td className="border border-gray-300 p-3">29 CFR 1926.1412(c) &mdash; Equipment not in regular use must have current inspection before returning to service</td>
                  <td className="border border-gray-300 p-3">B30.5-2.1.5 &mdash; Standby cranes (idle &gt;1 month) require periodic inspection before return; idle &gt;6 months requires annual-level inspection</td>
                </tr>
              </tbody>
            </table>

            <h3>Component-Level Inspection Criteria</h3>
            <p>The real difference between OSHA and ANSI B30 becomes clear at the component level. OSHA tells you <em>what</em> to inspect; ANSI B30 tells you <em>how</em> to evaluate what you find:</p>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Component</th>
                  <th className="border border-gray-300 p-3 text-left">OSHA Criteria</th>
                  <th className="border border-gray-300 p-3 text-left">ANSI B30 Criteria</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Hooks</td>
                  <td className="border border-gray-300 p-3">1926.1412(d) &mdash; Check for deformation; no specific measurements</td>
                  <td className="border border-gray-300 p-3">B30.10-2.1 &mdash; Remove if throat opening exceeds 15% of original; twist exceeds 10°; wear exceeds 10% of original section</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Wire Rope</td>
                  <td className="border border-gray-300 p-3">1926.1413(a) &mdash; Inspect for defects; shift and monthly categories listed</td>
                  <td className="border border-gray-300 p-3">B30.5-2.4.1 &mdash; Replace at 6 broken wires in one lay or 3 in one strand in one lay; diameter reduction &gt;1/64&quot; per 1/32&quot; nominal; core protrusion; heat damage</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Brakes</td>
                  <td className="border border-gray-300 p-3">1926.1412(d) &mdash; Verify proper function; no wear specs</td>
                  <td className="border border-gray-300 p-3">B30.5-2.2.1 &mdash; Lining thickness limits, drum scoring criteria, spring tension specs, drift testing under rated load (must hold within 6&quot; in 5 minutes)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Load Indicators / LMI</td>
                  <td className="border border-gray-300 p-3">1926.1416(d) &mdash; Must be operational; operator must understand readings</td>
                  <td className="border border-gray-300 p-3">B30.5-2.2.4 &mdash; Calibration verification at multiple boom lengths/angles; accuracy within ±3% of rated capacity; sensor inspection procedures</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Structural Members</td>
                  <td className="border border-gray-300 p-3">1926.1412(f) &mdash; Annual inspection for cracks, corrosion, distortion</td>
                  <td className="border border-gray-300 p-3">B30.5-2.3 &mdash; NDT methods specified (MT, UT, RT); fatigue crack locations mapped by crane type; weld inspection criteria per AWS D14.1; corrosion allowance calculations</td>
                </tr>
              </tbody>
            </table>

            <h3>Wire Rope Inspection Standards</h3>
            <p>Wire rope inspection demonstrates the complementary relationship between OSHA and ANSI B30:</p>

            <p><strong>OSHA 29 CFR 1926.1413(a):</strong> Requires inspection for defects but provides limited detail on specific criteria. The regulation lists categories of things to look for (broken wires, kinking, crushing, bird caging, corrosion, heat damage) but does not provide specific numerical thresholds for removal from service in most cases.</p>

            <p><strong>ANSI B30.5-2.4.1:</strong> Provides comprehensive wire rope inspection criteria including:</p>
            <ul>
              <li>Broken wire limits by rope construction (6 randomly distributed in one rope lay, 3 in one strand in one lay for running ropes)</li>
              <li>Wear and abrasion measurement techniques (outer wire wear exceeding 1/3 of original diameter)</li>
              <li>Core protrusion and rope diameter reduction limits (more than 5% reduction from nominal for standing ropes)</li>
              <li>Kinking, crushing, and bird caging identification with visual reference standards</li>
              <li>End connection inspection criteria (wedge sockets, swaged fittings, clips)</li>
              <li>Documentation requirements for tracking rope condition over time</li>
            </ul>

            <h2>Competent Person Requirements</h2>

            <h3>OSHA Competent Person Definition</h3>
            <p>Under 29 CFR 1926.1401, OSHA defines a competent person as one who:</p>
            <ul>
              <li>Is capable of identifying existing and predictable hazards</li>
              <li>Has authorization to take prompt corrective measures</li>
              <li>Has the knowledge, training, and experience necessary</li>
            </ul>

            <p>However, OSHA provides limited guidance on specific qualifications or training requirements. The agency has historically left it to employers to determine what constitutes adequate knowledge and experience&mdash;a flexibility that can also be a liability when a competent person designation is challenged in court or during an investigation.</p>

            <h3>ANSI B30 Qualified Person Standards</h3>
            <p>ANSI B30.5-2.1.1 defines qualified persons with more specific requirements:</p>
            <ul>
              <li>Knowledge of applicable standards and regulations</li>
              <li>Understanding of crane operating characteristics and limitations</li>
              <li>Experience with similar equipment and operations</li>
              <li>Ability to detect defects and assess their significance against defined criteria</li>
              <li>Familiarity with manufacturer recommendations for the specific equipment being inspected</li>
            </ul>

            <h2>Documentation Requirements</h2>

            <h3>OSHA Documentation Standards</h3>
            <p>OSHA requires documentation under several sections:</p>
            
            <p><strong>29 CFR 1926.1412(g):</strong> Inspection records must include:</p>
            <ul>
              <li>Date of inspection</li>
              <li>Signature of person conducting inspection</li>
              <li>Serial number or other identifier</li>
              <li>Items inspected</li>
              <li>Results of inspection (acceptable/unacceptable)</li>
            </ul>

            <p><strong>29 CFR 1926.1413(c):</strong> Wire rope inspection documentation must specify:</p>
            <ul>
              <li>Date of inspection</li>
              <li>Signature of qualified person</li>
              <li>Crane identification</li>
              <li>Wire rope location (boom hoist, load line, etc.)</li>
            </ul>

            <h3>ANSI B30 Record Keeping</h3>
            <p>ANSI B30.5-2.2.2 recommends more comprehensive documentation:</p>
            <ul>
              <li>Detailed inspection forms with specific checkpoints for each component</li>
              <li>Photographic documentation of defects and deterioration trends</li>
              <li>Load test certificates and records with specific configurations tested</li>
              <li>Complete maintenance and repair history with parts used</li>
              <li>Configuration change documentation</li>
              <li>Wire rope installation dates and reeving records</li>
              <li>Operator-reported deficiency logs</li>
            </ul>

            <h3>Documentation Comparison</h3>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Document Type</th>
                  <th className="border border-gray-300 p-3 text-left">OSHA Requirement</th>
                  <th className="border border-gray-300 p-3 text-left">ANSI B30 Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Shift Inspection Record</td>
                  <td className="border border-gray-300 p-3">Not explicitly required to be written; operator must confirm no deficiencies</td>
                  <td className="border border-gray-300 p-3">Written checklist recommended; documented pass/fail for each item</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Monthly Inspection Record</td>
                  <td className="border border-gray-300 p-3">Must be documented; retain for 3 months</td>
                  <td className="border border-gray-300 p-3">Detailed form with component conditions rated; retain for equipment life</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Annual Inspection Record</td>
                  <td className="border border-gray-300 p-3">Must be documented; retain until next annual or equipment disposal</td>
                  <td className="border border-gray-300 p-3">Comprehensive report with measurements, photos, NDT results; retain for equipment life</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Wire Rope Records</td>
                  <td className="border border-gray-300 p-3">Shift and monthly inspection records; deficiency documentation</td>
                  <td className="border border-gray-300 p-3">Installation date, reeving diagram, periodic diameter measurements, broken wire counts by location</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Repair / Modification Records</td>
                  <td className="border border-gray-300 p-3">Post-repair inspection documented; capacity revalidation if structural</td>
                  <td className="border border-gray-300 p-3">Detailed repair procedures, welder qualifications, material certifications, load test results, PE stamp where applicable</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Operator Training Records</td>
                  <td className="border border-gray-300 p-3">Certification records per 1926.1427; must have valid certification</td>
                  <td className="border border-gray-300 p-3">Training content, evaluation results, competency assessments, recertification schedule, equipment-specific qualifications</td>
                </tr>
              </tbody>
            </table>

            <h2>Real-World Enforcement: When ANSI B30 Becomes Legally Required</h2>

            <h3>The General Duty Clause Connection</h3>
            <p>Section 5(a)(1) of the OSH Act&mdash;the &ldquo;general duty clause&rdquo;&mdash;requires employers to provide a workplace &ldquo;free from recognized hazards that are causing or are likely to cause death or serious physical harm.&rdquo; When OSHA issues citations under this provision, it must demonstrate that the hazard was &ldquo;recognized&rdquo; and that feasible means existed to abate it.</p>

            <p>This is where ANSI B30 becomes critical. OSHA routinely cites ANSI B30 standards as evidence that a hazard was recognized by the industry and that accepted abatement methods exist. If ANSI B30.5 specifies that wire rope with six broken wires in one lay must be removed, and an employer continues to use rope exceeding that threshold, OSHA can cite the general duty clause even though its own regulations don&rsquo;t specify that exact criterion.</p>

            <h3>Court Precedents and Civil Litigation</h3>
            <p>In negligence lawsuits following crane accidents, plaintiff attorneys almost always introduce ANSI B30 standards as evidence of the &ldquo;standard of care.&rdquo; The argument is straightforward: if the industry has published detailed safety standards and your company failed to follow them, that failure constitutes negligence.</p>

            <p>Several landmark cases illustrate this pattern:</p>
            <ul>
              <li><strong>Crane collapse civil cases:</strong> Juries have awarded multi-million dollar verdicts where employers failed to follow ANSI B30.5 inspection criteria, even when the employer could demonstrate compliance with OSHA&rsquo;s less specific requirements</li>
              <li><strong>Worker injury claims:</strong> In states with comparative negligence, failure to follow ANSI B30 standards can shift a significant percentage of fault to the employer</li>
              <li><strong>Wrongful death actions:</strong> Expert witnesses routinely testify that ANSI B30 represents the minimum standard of care for crane operations, and that compliance with OSHA alone is insufficient</li>
            </ul>

            <h3>Insurance Implications</h3>
            <p>Insurance carriers have increasingly incorporated ANSI B30 compliance into their underwriting and claims processes:</p>
            <ul>
              <li><strong>Policy requirements:</strong> Many crane liability policies now require compliance with &ldquo;applicable industry standards,&rdquo; which insurers interpret to include ANSI B30</li>
              <li><strong>Claims investigations:</strong> Following a loss, insurers routinely evaluate whether the insured followed ANSI B30 inspection and maintenance procedures. Failure to do so can support a coverage denial or a subrogation claim</li>
              <li><strong>Premium adjustments:</strong> Contractors with documented ANSI B30 compliance programs often receive more favorable rates, while those with histories of non-compliance face surcharges or non-renewal</li>
              <li><strong>Audit requirements:</strong> Excess and umbrella carriers increasingly require annual crane fleet audits against ANSI B30 criteria as a condition of coverage</li>
            </ul>

            <h2>Load Testing Requirements</h2>

            <h3>OSHA Load Testing Standards</h3>
            <p>29 CFR 1926.1406(b) requires load testing in specific scenarios:</p>
            <ul>
              <li>After initial assembly</li>
              <li>After modifications affecting capacity</li>
              <li>After major repairs to structural components</li>
            </ul>

            <p>Test loads must be at least 100% of maximum rated capacity, with testing conducted by a qualified person.</p>

            <h3>ANSI B30.5 Load Testing Procedures</h3>
            <p>ANSI B30.5-2.2.1 provides detailed load testing procedures:</p>
            <ul>
              <li>Test load calculations based on specific configuration (boom length, radius, counterweight)</li>
              <li>Testing sequence and hold times (minimum 10 minutes at each test position)</li>
              <li>Deflection measurements and acceptance criteria</li>
              <li>Post-test inspection requirements (structural, mechanical, and electrical)</li>
              <li>Documentation and certification procedures including engineer&rsquo;s sign-off</li>
              <li>Proof load testing at 125% of rated capacity for new or significantly repaired equipment</li>
            </ul>

            <h2>State-Level Crane Regulations</h2>

            <p>Federal OSHA sets the floor, not the ceiling. Several states operate their own OSHA-approved state plans with crane regulations that exceed federal requirements&mdash;and many of these explicitly reference or incorporate ANSI B30 standards.</p>

            <h3>New York &mdash; Local Law 81/17 and NYC Crane Rules</h3>
            <p>New York City has some of the most stringent crane regulations in the country. The NYC Department of Buildings requires crane operating licenses specific to equipment type, mandatory insurance certificates with the city named as additional insured, and detailed site-specific safety plans. Local Law 81 of 2017 imposed additional requirements following several high-profile crane collapses, including mandatory wind action plans, enhanced operator training, and real-time reporting of crane incidents. NYC crane regulations effectively make ANSI B30 compliance mandatory by requiring inspections that meet or exceed the B30 standards.</p>

            <h3>California &mdash; Cal/OSHA</h3>
            <p>Cal/OSHA operates its own crane standards under Title 8, California Code of Regulations. In many areas, Cal/OSHA exceeds federal requirements. California requires specific crane operator licenses administered by the state, mandatory pre-lift meetings for all critical picks, and crane inspection requirements that reference ANSI B30 standards for technical criteria. Cal/OSHA also requires a permit for crane operations near powerlines and has specific requirements for crane use in seismic zones that have no federal equivalent.</p>

            <h3>Washington State</h3>
            <p>Washington&rsquo;s Division of Occupational Safety and Health (DOSH) operates a state plan that includes enhanced crane regulations under WAC 296-155. Washington was among the first states to require crane operator certification and maintains requirements for crane inspectors that go beyond federal OSHA. The state has adopted specific ANSI B30 references into its administrative code, making compliance with these standards a legal requirement rather than a best practice.</p>

            <h3>New Jersey</h3>
            <p>New Jersey requires crane operator licensing through the NJ Department of Labor and Workforce Development. The state&rsquo;s crane regulations under N.J.A.C. 12:100-14 impose specific inspection, maintenance, and operator training requirements that incorporate ANSI B30 standards by reference. New Jersey also requires annual crane certifications performed by licensed inspectors, creating a regulatory framework where ANSI B30 compliance is effectively mandatory.</p>

            <h3>Other Notable State Programs</h3>
            <p>Several other states have enacted crane regulations that exceed federal OSHA requirements:</p>
            <ul>
              <li><strong>Oregon:</strong> Oregon OSHA maintains specific crane operator licensing requirements and references ANSI B30 in its Division 3 construction safety code</li>
              <li><strong>Minnesota:</strong> Requires crane operator permits and imposes state-specific inspection frequency requirements that exceed federal minimums</li>
              <li><strong>Hawaii:</strong> Operates a state OSHA plan with enhanced crane requirements, particularly for tower crane operations in high-wind zones</li>
              <li><strong>Nevada:</strong> The Las Vegas metro area has local crane ordinances driven by the volume of high-rise construction, requiring crane safety plans that reference ANSI B30 criteria</li>
            </ul>

            <p>The trend is clear: state and local jurisdictions are increasingly moving toward mandatory ANSI B30 compliance, whether through direct incorporation by reference or through inspection requirements that functionally require B30-level rigor. Crane operators working across state lines must track these varying requirements&mdash;compliance in one state does not guarantee compliance in another.</p>

            <h2>Cost of Compliance: OSHA Minimums vs. ANSI Best Practices</h2>

            <h3>The True Cost of OSHA Violations</h3>
            <p>The direct penalty costs are only the beginning. When you factor in the full cost of non-compliance, the numbers are sobering:</p>

            <ul>
              <li><strong>Serious violation penalty:</strong> Up to $16,550 per instance (2026 rate)</li>
              <li><strong>Willful violation penalty:</strong> Up to $165,514 per instance (2026 rate)</li>
              <li><strong>Average crane accident cost:</strong> $1.2 million including medical, legal, and downtime costs</li>
              <li><strong>Crane fatality average total cost:</strong> $8.6 million including wrongful death settlements, legal fees, OSHA penalties, and project delays</li>
              <li><strong>EMR impact:</strong> A single serious crane incident can increase your Experience Modification Rate for 3 years, adding $50,000-$500,000+ in annual premium increases depending on fleet size</li>
            </ul>

            <h3>Investment in ANSI B30 Compliance</h3>
            <p>Implementing a comprehensive ANSI B30-level inspection program costs more than bare OSHA minimums, but the investment is modest compared to the exposure:</p>

            <ul>
              <li><strong>Annual third-party inspection (per crane):</strong> $800-$2,500 for a thorough ANSI B30-level inspection vs. $400-$1,200 for OSHA-minimum compliance</li>
              <li><strong>Inspector training:</strong> $2,000-$5,000 per person for ANSI B30 certification courses</li>
              <li><strong>Documentation systems:</strong> $100-$500/month for digital inspection platforms that track ANSI B30 criteria</li>
              <li><strong>Wire rope management program:</strong> $500-$1,500 per crane annually for proper tracking and scheduled replacement vs. run-to-failure approach</li>
            </ul>

            <p>For a fleet of 20 cranes, the incremental cost of ANSI B30-level compliance over bare OSHA minimums is roughly $30,000-$60,000 per year&mdash;a fraction of the cost of a single serious incident. Insurance premium reductions alone often offset the entire investment.</p>

            <h3>The ROI of Comprehensive Compliance</h3>
            <p>Companies that implement ANSI B30-level programs consistently report measurable benefits beyond incident prevention:</p>

            <ul>
              <li><strong>Reduced unplanned downtime:</strong> Catching defects early through detailed ANSI B30 inspections prevents costly emergency repairs. Companies report 30-40% reductions in unplanned crane downtime</li>
              <li><strong>Extended equipment life:</strong> Systematic maintenance programs aligned with ANSI B30 recommendations extend crane service life by 5-10 years compared to minimum-maintenance approaches</li>
              <li><strong>Competitive advantage:</strong> Documented ANSI B30 compliance is increasingly a prerequisite for bidding on large commercial, industrial, and infrastructure projects. General contractors and project owners view it as a proxy for overall safety culture</li>
              <li><strong>Insurance benefits:</strong> Crane liability premiums can be 15-25% lower for companies with documented ANSI B30 inspection programs and clean incident histories</li>
              <li><strong>Litigation defense:</strong> In the event of an incident, documented ANSI B30 compliance provides a strong defense against negligence claims, potentially saving millions in settlements or judgments</li>
            </ul>

            <h2>Compliance Strategy: Using Both Standards</h2>

            <h3>Why OSHA Alone Isn&rsquo;t Enough</h3>
            <p>Relying solely on OSHA minimums can create compliance and safety gaps:</p>

            <ul>
              <li><strong>Legal liability:</strong> Courts routinely reference industry standards like ANSI B30 when determining negligence, even when OSHA compliance is demonstrated</li>
              <li><strong>Insurance requirements:</strong> Many insurers require compliance with applicable industry standards as a condition of coverage</li>
              <li><strong>Due diligence:</strong> Following recognized industry practices demonstrates commitment to safety that can be the deciding factor in litigation</li>
              <li><strong>Technical guidance:</strong> ANSI B30 provides the &ldquo;how-to&rdquo; that OSHA regulations often lack, giving inspectors clear criteria for accept/reject decisions</li>
              <li><strong>Client requirements:</strong> Major construction managers, general contractors, and project owners increasingly require ANSI B30 compliance in their subcontract specifications</li>
            </ul>

            <h3>Integration Best Practices</h3>

            <p><strong>1. Use OSHA as Your Legal Foundation</strong></p>
            <p>Ensure all OSHA requirements under 29 CFR 1926 Subpart CC are met as your minimum standard. This includes:</p>
            <ul>
              <li>Ground condition assessments (1926.1402)</li>
              <li>Assembly/disassembly procedures (1926.1404)</li>
              <li>Pre-lift planning requirements (1926.1417)</li>
              <li>Operator certification (1926.1427)</li>
              <li>Signal person qualification (1926.1428)</li>
              <li>Inspection and maintenance programs (1926.1412-1413)</li>
            </ul>

            <p><strong>2. Implement ANSI B30 for Technical Excellence</strong></p>
            <p>Use applicable ANSI B30 standards to exceed OSHA minimums:</p>
            <ul>
              <li>Detailed inspection checklists with accept/reject criteria</li>
              <li>Specific defect criteria with numerical thresholds</li>
              <li>Maintenance procedures aligned with manufacturer recommendations</li>
              <li>Load testing protocols with documented results</li>
            </ul>

            <p><strong>3. Create Comprehensive Procedures</strong></p>
            <p>Develop written procedures that reference both OSHA and ANSI B30:</p>
            <ul>
              <li>&ldquo;This procedure meets or exceeds OSHA requirements and follows ANSI B30.5 recommendations&rdquo;</li>
              <li>Include specific regulation and standard citations for each requirement</li>
              <li>Update procedures when standards are revised (B30 on 5-year cycles, OSHA as amended)</li>
              <li>Train all personnel on the integrated requirements</li>
            </ul>

            <h2>Common Misconceptions</h2>

            <h3>Myth: ANSI B30 Standards Are Optional</h3>
            <p>While technically voluntary, ANSI B30 standards can become legally binding through:</p>
            <ul>
              <li><strong>Contract specifications:</strong> Many projects require compliance with specific standards as a condition of the contract</li>
              <li><strong>State regulations:</strong> States like New York, California, Washington, and New Jersey adopt ANSI standards by reference, making them enforceable law</li>
              <li><strong>General duty clause:</strong> OSHA&rsquo;s Section 5(a)(1) general duty clause references industry standards as evidence of recognized hazards</li>
              <li><strong>Negligence claims:</strong> Failure to follow industry standards creates a presumption of negligence in most jurisdictions</li>
            </ul>

            <h3>Myth: OSHA Inspectors Don&rsquo;t Consider ANSI B30</h3>
            <p>OSHA compliance officers routinely reference industry standards when evaluating workplace safety. Citations under the general duty clause often reference ANSI B30 standards as evidence of recognized hazards and accepted prevention methods. OSHA&rsquo;s own compliance directives and letters of interpretation frequently cite ANSI B30 standards when explaining how employers should implement OSHA requirements.</p>

            <h3>Myth: Following ANSI B30 Guarantees OSHA Compliance</h3>
            <p>While ANSI B30 standards generally exceed OSHA requirements, employers must still ensure specific OSHA obligations are met, including:</p>
            <ul>
              <li>Operator certification under 29 CFR 1926.1427 (ANSI B30 does not address OSHA&rsquo;s specific certification requirements)</li>
              <li>Signal person requirements under 29 CFR 1926.1428</li>
              <li>Specific hazard assessments and controls required by Subpart CC</li>
              <li>Multi-employer worksite obligations under OSHA&rsquo;s enforcement framework</li>
            </ul>

            <h3>Myth: Small Operations Don&rsquo;t Need ANSI B30 Compliance</h3>
            <p>Some small crane operators assume that ANSI B30 compliance is only for large contractors. In reality, cranes don&rsquo;t know the size of the company operating them&mdash;a 60-ton mobile crane presents the same hazards whether it&rsquo;s owned by a 5-person company or a 5,000-person company. Small operators face the same liability exposure, and a single incident can be financially devastating. Moreover, the cost of implementing ANSI B30-level inspection programs is modest relative to the risk, and it often provides a competitive advantage when bidding on projects that require documented safety programs.</p>

            <h3>Myth: Digital Inspections Aren&rsquo;t Accepted Under Either Standard</h3>
            <p>Neither OSHA nor ANSI B30 requires paper-based documentation. Both standards focus on the content and completeness of records, not the medium. Digital inspection systems that capture the required data elements&mdash;dates, inspector identification, equipment identification, inspection results, deficiency descriptions&mdash;are fully compliant with both frameworks. In fact, digital systems often produce more consistent, complete, and retrievable records than paper forms, which can be an advantage during OSHA inspections or litigation discovery.</p>

            <h2>Industry-Specific Applications</h2>

            <h3>Construction vs. General Industry</h3>
            <p>OSHA&rsquo;s crane standards differ between construction (29 CFR 1926) and general industry (29 CFR 1910):</p>

            <p><strong>Construction Industry (29 CFR 1926 Subpart CC):</strong></p>
            <ul>
              <li>Comprehensive crane standards covering all aspects of crane use on construction sites</li>
              <li>Specific requirements for assembly/disassembly, ground conditions, and power line proximity</li>
              <li>Detailed operator certification requirements with accredited testing</li>
              <li>Signal person qualification standards</li>
            </ul>

            <p><strong>General Industry (29 CFR 1910.179):</strong></p>
            <ul>
              <li>Primarily covers overhead and gantry cranes in manufacturing and warehouse settings</li>
              <li>References older ANSI standards for technical requirements (some dating to the 1960s)</li>
              <li>Less prescriptive than construction standards but subject to general duty clause enforcement</li>
              <li>No formal operator certification requirement equivalent to Subpart CC</li>
            </ul>

            <h3>Mobile Crane Applications</h3>
            <p>For mobile cranes, the relationship is particularly important:</p>

            <p><strong>OSHA 29 CFR 1926.1412-1413:</strong> Requires inspections but provides limited technical detail on specific criteria and thresholds</p>
            <p><strong>ANSI B30.5:</strong> Provides comprehensive mobile crane inspection, testing, and maintenance requirements with specific accept/reject criteria for every major component</p>

            <h2>Future Considerations</h2>

            <h3>Standards Evolution</h3>
            <p>Both OSHA and ANSI B30 standards continue to evolve:</p>

            <ul>
              <li><strong>Technology integration:</strong> Digital inspection systems, telematics, IoT sensors, and AI-powered defect detection are being incorporated into updated standards</li>
              <li><strong>Risk-based approaches:</strong> More sophisticated hazard assessment methods that consider equipment age, duty cycle, and environmental factors</li>
              <li><strong>Global harmonization:</strong> Increasing alignment with international standards like ISO 4309 (wire rope inspection) and EN 13001 (crane design)</li>
              <li><strong>Remote inspection technologies:</strong> Drone-based structural inspection and remote monitoring capabilities being addressed in new standard revisions</li>
            </ul>

            <h3>Regulatory Trends</h3>
            <p>Monitor developments in:</p>
            <ul>
              <li>State-level adoption of enhanced crane standards and mandatory ANSI B30 compliance</li>
              <li>Insurance industry requirements driving de facto mandatory compliance</li>
              <li>Legal precedents establishing industry standard obligations as the minimum standard of care</li>
              <li>OSHA rulemaking activity that may incorporate updated ANSI B30 references</li>
            </ul>

            <h2>Implementation Checklist</h2>

            <p>Use this checklist to ensure comprehensive compliance:</p>

            <h3>Legal Compliance (OSHA)</h3>
            <ul>
              <li>✓ Daily inspections per 29 CFR 1926.1412(d)</li>
              <li>✓ Monthly inspections per 29 CFR 1926.1412(e)</li>
              <li>✓ Annual inspections per 29 CFR 1926.1412(f)</li>
              <li>✓ Post-assembly inspections per 29 CFR 1926.1406</li>
              <li>✓ Operator certification per 29 CFR 1926.1427</li>
              <li>✓ Signal person qualification per 29 CFR 1926.1428</li>
              <li>✓ Ground conditions assessment per 29 CFR 1926.1402</li>
              <li>✓ Power line safety procedures per 29 CFR 1926.1408-1411</li>
            </ul>

            <h3>Technical Excellence (ANSI B30)</h3>
            <ul>
              <li>✓ Detailed inspection checklists from applicable B30 standards</li>
              <li>✓ Specific defect criteria and numerical limits for each component</li>
              <li>✓ Comprehensive documentation systems with equipment-life retention</li>
              <li>✓ Load testing procedures and records per B30.5-2.2.1</li>
              <li>✓ Qualified person training programs with documented competency</li>
              <li>✓ Maintenance program alignment with manufacturer and B30 requirements</li>
              <li>✓ Wire rope management program per B30.5-2.4</li>
              <li>✓ Rigging hardware inspection per B30.26</li>
            </ul>

            <h2>Key Takeaways</h2>
            <ul>
              <li>OSHA provides legally enforceable minimums with penalties up to $165,514 for willful violations (2026 rates)</li>
              <li>ANSI B30 standards offer technical excellence that often exceeds OSHA requirements with specific, measurable criteria</li>
              <li>Using both standards together provides comprehensive safety and legal protection&mdash;compliance with one does not guarantee compliance with the other</li>
              <li>Industry standards like ANSI B30 can become legally binding through state regulations, contracts, general duty clause enforcement, and negligence law</li>
              <li>The incremental cost of ANSI B30 compliance over OSHA minimums is modest compared to the cost of incidents, litigation, and insurance impacts</li>
              <li>Proper documentation following both OSHA and ANSI B30 requirements is essential for compliance, litigation defense, and insurance claims</li>
              <li>Regular training on both standards ensures qualified personnel make proper assessments using current criteria</li>
              <li>State-level regulations in jurisdictions like New York, California, and Washington may make ANSI B30 compliance a legal requirement regardless of federal OSHA positions</li>
            </ul>

            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Master Both OSHA and ANSI B30 Standards</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">CraneCheck&rsquo;s digital platform tracks compliance with both OSHA requirements and ANSI B30 standards, ensuring your inspections meet legal minimums while achieving technical excellence.</p>
              <a href="/pricing" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4">See Pricing</a>
              <a href="/demo" className="inline-block border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg">Request Demo</a>
            </div>

            <div className="not-prose mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-navy mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/osha-crane-inspection-requirements" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">OSHA Crane Inspection Requirements: Complete Compliance Guide</h3>
                  <p className="text-gray-600 text-sm">Master OSHA&rsquo;s crane inspection requirements under 29 CFR 1926 Subpart CC.</p>
                </Link>
                <Link href="/blog/29-cfr-1926-1412-explained" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">29 CFR 1926.1412 Explained: OSHA Crane Inspection Standards</h3>
                  <p className="text-gray-600 text-sm">Detailed breakdown of OSHA&rsquo;s primary crane inspection regulation.</p>
                </Link>
                <Link href="/blog/crane-inspection-penalties-fines" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">OSHA Crane Inspection Penalties and Fines: What You Need to Know</h3>
                  <p className="text-gray-600 text-sm">Understanding OSHA penalties and how to avoid costly violations.</p>
                </Link>
                <Link href="/blog/qualified-vs-competent-person-crane" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Qualified vs Competent Person for Crane Inspections</h3>
                  <p className="text-gray-600 text-sm">Key differences between qualified and competent person requirements.</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="ansi-b30-vs-osha-crane-standards" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}
