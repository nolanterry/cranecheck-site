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
  title: "Crane Inspection for Demolition Projects: Special Requirements You Can't Ignore",
  description: "Learn critical crane inspection requirements for demolition work. OSHA standards, enhanced safety protocols, and specialized inspection checklists for demo operations.",
  alternates: { canonical: "/blog/crane-inspection-demolition-projects" },
};

export default function CraneInspectionDemolitionProjectsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Inspection for Demolition Projects: Special Requirements You Can't Ignore",
    "description": "Learn critical crane inspection requirements for demolition work. OSHA standards, enhanced safety protocols, and specialized inspection checklists for demo operations.",
    "datePublished": "2026-03-26",
    "dateModified": "2026-03-26",
    "author": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/crane-inspection-demolition-projects" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Inspection for Demolition Projects: Special Requirements You Can't Ignore", "item": "https://cranecheck.co/blog/crane-inspection-demolition-projects" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Safety</span>
              <span className="text-xs text-gray-400">March 26, 2026</span>
              <span className="text-xs text-gray-400">10 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Crane Inspection for Demolition Projects: Special Requirements You Can't Ignore</h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">Demolition operations present unique crane inspection challenges requiring enhanced safety protocols, specialized procedures, and rigorous documentation to prevent catastrophic failures.</p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>
            
            <p>Demolition work represents one of the most hazardous environments for crane operations, combining unpredictable loads, debris hazards, and structural instabilities. OSHA statistics show that demolition-related crane accidents result in 40% more fatalities than standard construction operations, making enhanced inspection protocols not just recommended but essential for survival. Understanding the unique requirements under 29 CFR 1926.850-859 (Demolition) combined with standard crane regulations can mean the difference between a successful project and a catastrophic failure.</p>

            <h2>Unique Hazards in Demolition Crane Operations</h2>

            <h3>Environmental Challenges</h3>
            <p>Demolition sites present hazards absent in typical construction:</p>

            <ul>
              <li><strong>Falling debris:</strong> Unpredictable impact loads on equipment</li>
              <li><strong>Structural instability:</strong> Buildings with compromised integrity</li>
              <li><strong>Dust and visibility:</strong> Reduced operator visibility and equipment contamination</li>
              <li><strong>Utility hazards:</strong> Exposed electrical, gas, and water services</li>
              <li><strong>Ground conditions:</strong> Undermined foundations and unstable surfaces</li>
            </ul>

            <h3>Load Characteristics</h3>
            <p>Demolition loads differ significantly from construction materials:</p>

            <ul>
              <li><strong>Variable weights:</strong> Structural elements with unknown actual weights</li>
              <li><strong>Dynamic loading:</strong> Sudden load releases during structural failures</li>
              <li><strong>Unbalanced loads:</strong> Asymmetric debris and partial structural elements</li>
              <li><strong>Impact forces:</strong> Loads subjected to sudden stops and starts</li>
            </ul>

            <h2>Regulatory Framework for Demolition Crane Work</h2>

            <h3>OSHA Demolition Standards</h3>
            <p>29 CFR 1926.850 through 859 establish specific requirements for demolition operations affecting crane inspection:</p>

            <p><strong>29 CFR 1926.851(a) - Engineering Survey:</strong></p>
            <ul>
              <li>Pre-demolition structural assessment required</li>
              <li>Crane access route evaluation</li>
              <li>Load path analysis for crane placement</li>
              <li>Utility location and protection verification</li>
            </ul>

            <p><strong>29 CFR 1926.851(c) - Stairways, Passageways, and Ladders:</strong></p>
            <ul>
              <li>Safe access routes for crane inspection personnel</li>
              <li>Emergency evacuation procedures during crane operations</li>
              <li>Clear communication paths between crane and demolition crews</li>
            </ul>

            <p><strong>29 CFR 1926.859 - Mechanical Demolition:</strong></p>
            <ul>
              <li>Specific requirements when cranes are used for structural demolition</li>
              <li>Enhanced safety clearances and operational procedures</li>
              <li>Inspection requirements after debris impact events</li>
            </ul>

            <h3>Enhanced Crane Standards for Demolition</h3>
            <p>Standard crane regulations under 29 CFR 1926 Subpart CC apply with additional considerations:</p>

            <p><strong>29 CFR 1926.1417 - Operation:</strong></p>
            <ul>
              <li>Enhanced pre-lift planning for unpredictable loads</li>
              <li>Increased safety factors for load calculations</li>
              <li>Special communication protocols in high-noise environments</li>
            </ul>

            <p><strong>29 CFR 1926.1425 - Keeping Clear of the Load:</strong></p>
            <ul>
              <li>Expanded clearance zones due to debris hazards</li>
              <li>Enhanced barricade requirements around crane operations</li>
              <li>Special considerations for falling debris during lifting</li>
            </ul>

            <h2>Enhanced Inspection Requirements</h2>

            <h3>Pre-Project Inspection Protocol</h3>
            <p>Before beginning demolition work, conduct comprehensive inspections beyond standard requirements:</p>

            <p><strong>Structural Assessment Integration:</strong></p>
            <ul>
              <li>Review engineering survey findings affecting crane placement</li>
              <li>Assess ground conditions for crane stability and egress</li>
              <li>Evaluate overhead hazards from partially demolished structures</li>
              <li>Document baseline condition of crane before exposure to demolition environment</li>
            </ul>

            <p><strong>Environmental Protection Measures:</strong></p>
            <ul>
              <li>Debris shields for critical crane components</li>
              <li>Enhanced filtration for hydraulic and lubrication systems</li>
              <li>Operator cab protection from falling debris</li>
              <li>Communication system protection from dust and noise</li>
            </ul>

            <h3>Daily Inspection Modifications</h3>
            <p>Standard daily inspections under 29 CFR 1926.1412(d) require enhancement for demolition work:</p>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Standard Inspection Item</th>
                  <th className="border border-gray-300 p-3 text-left">Demolition Enhancement</th>
                  <th className="border border-gray-300 p-3 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Wire rope condition</td>
                  <td className="border border-gray-300 p-3">Check for debris cutting/abrasion damage</td>
                  <td className="border border-gray-300 p-3">Before each shift + after debris events</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Boom condition</td>
                  <td className="border border-gray-300 p-3">Inspect for impact damage from debris</td>
                  <td className="border border-gray-300 p-3">Before each shift + after impacts</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Operator cab</td>
                  <td className="border border-gray-300 p-3">Check protection systems and visibility</td>
                  <td className="border border-gray-300 p-3">Before each shift</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Load block/hook</td>
                  <td className="border border-gray-300 p-3">Enhanced check for deformation and wear</td>
                  <td className="border border-gray-300 p-3">Before each lift</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Outriggers/stabilizers</td>
                  <td className="border border-gray-300 p-3">Verify ground conditions and float integrity</td>
                  <td className="border border-gray-300 p-3">Before each setup + during operations</td>
                </tr>
              </tbody>
            </table>

            <h3>Post-Impact Inspection Protocol</h3>
            <p>After any debris impact or unusual loading event, conduct immediate inspection:</p>

            <p><strong>Critical Component Assessment:</strong></p>
            <ul>
              <li>Structural members for deformation or cracking</li>
              <li>Pin connections for loosening or damage</li>
              <li>Wire rope for cutting, crushing, or core damage</li>
              <li>Hydraulic lines for rupture or leakage</li>
              <li>Operator protection systems for compromise</li>
            </ul>

            <p><strong>Operational Testing:</strong></p>
            <ul>
              <li>Function test all crane movements</li>
              <li>Load test at reduced capacity if impact suspected</li>
              <li>Communication system verification</li>
              <li>Safety device operation confirmation</li>
            </ul>

            <h2>Specialized Equipment Considerations</h2>

            <h3>Demolition Ball Operations</h3>
            <p>When cranes are used with demolition balls, additional requirements apply:</p>

            <p><strong>Equipment Specifications:</strong></p>
            <ul>
              <li>Ball weight typically 13-50% of crane capacity</li>
              <li>Specialized ball rigging with redundant connections</li>
              <li>Enhanced boom and wire rope ratings</li>
              <li>Operator cab reinforcement and protection</li>
            </ul>

            <p><strong>Inspection Requirements:</strong></p>
            <ul>
              <li>Ball attachment point inspection before each use</li>
              <li>Wire rope inspection for wear from ball weight</li>
              <li>Boom deflection monitoring during operations</li>
              <li>Foundation monitoring for crane stability</li>
            </ul>

            <h3>Hydraulic Shears and Breakers</h3>
            <p>Crane-mounted demolition attachments require specialized inspection:</p>

            <p><strong>Attachment Integration:</strong></p>
            <ul>
              <li>Quick-disconnect systems and safety locks</li>
              <li>Hydraulic line routing and protection</li>
              <li>Attachment weight and crane capacity calculations</li>
              <li>Operator visibility and control systems</li>
            </ul>

            <p><strong>Daily Inspection Protocol:</strong></p>
            <ul>
              <li>Attachment mounting security and alignment</li>
              <li>Hydraulic system pressure and leak check</li>
              <li>Control response and safety shutoff function</li>
              <li>Debris removal from attachment mechanisms</li>
            </ul>

            <h2>Ground Conditions and Site Preparation</h2>

            <h3>Foundation Integrity Assessment</h3>
            <p>29 CFR 1926.1402 requires ground condition assessment, critical in demolition environments:</p>

            <p><strong>Pre-Demolition Assessment:</strong></p>
            <ul>
              <li>Soil bearing capacity verification by qualified engineer</li>
              <li>Underground utility mapping and protection</li>
              <li>Existing foundation assessment for crane support</li>
              <li>Vibration impact analysis from demolition activities</li>
            </ul>

            <p><strong>Ongoing Monitoring:</strong></p>
            <ul>
              <li>Daily ground condition verification during demolition</li>
              <li>Settlement monitoring at crane position</li>
              <li>Drainage and water accumulation assessment</li>
              <li>Access route condition for crane mobility</li>
            </ul>

            <h3>Clearance and Evacuation Zones</h3>
            <p>Establish enhanced clearance zones for demolition crane operations:</p>

            <ul>
              <li><strong>Primary zone:</strong> 1.5x boom length + structure height</li>
              <li><strong>Secondary zone:</strong> Fall zone for largest debris pieces</li>
              <li><strong>Emergency egress:</strong> Unobstructed crane operator escape routes</li>
              <li><strong>Equipment protection:</strong> Areas for crane repositioning during emergencies</li>
            </ul>

            <h2>Load Calculation and Dynamic Forces</h2>

            <h3>Demolition Load Factors</h3>
            <p>Standard load charts require modification for demolition work:</p>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Load Type</th>
                  <th className="border border-gray-300 p-3 text-left">Standard Factor</th>
                  <th className="border border-gray-300 p-3 text-left">Demolition Factor</th>
                  <th className="border border-gray-300 p-3 text-left">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">Static structural lift</td>
                  <td className="border border-gray-300 p-3">100% capacity</td>
                  <td className="border border-gray-300 p-3">75% capacity</td>
                  <td className="border border-gray-300 p-3">Unknown load variations</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Debris removal</td>
                  <td className="border border-gray-300 p-3">100% capacity</td>
                  <td className="border border-gray-300 p-3">65% capacity</td>
                  <td className="border border-gray-300 p-3">Impact and dynamic loading</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Ball demolition</td>
                  <td className="border border-gray-300 p-3">N/A</td>
                  <td className="border border-gray-300 p-3">50% capacity</td>
                  <td className="border border-gray-300 p-3">Severe dynamic forces</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">Precision dismantling</td>
                  <td className="border border-gray-300 p-3">100% capacity</td>
                  <td className="border border-gray-300 p-3">80% capacity</td>
                  <td className="border border-gray-300 p-3">Controlled conditions</td>
                </tr>
              </tbody>
            </table>

            <h3>Dynamic Load Assessment</h3>
            <p>Calculate and account for dynamic forces in demolition work:</p>

            <p><strong>Impact Loading:</strong></p>
            <ul>
              <li>Sudden load pickup from stuck structural elements</li>
              <li>Load release when structural connections fail</li>
              <li>Side loading from asymmetric debris shifts</li>
              <li>Vibration transmission from demolition activities</li>
            </ul>

            <p><strong>Mitigation Strategies:</strong></p>
            <ul>
              <li>Gradual load application with constant monitoring</li>
              <li>Multiple attachment points for load distribution</li>
              <li>Shock-absorbing rigging components when appropriate</li>
              <li>Real-time load monitoring systems</li>
            </ul>

            <h2>Communication and Coordination</h2>

            <h3>Enhanced Communication Protocols</h3>
            <p>29 CFR 1926.1428 signal person requirements are critical in demolition environments:</p>

            <p><strong>Signal Person Positioning:</strong></p>
            <ul>
              <li>Clear line of sight to crane operator and load</li>
              <li>Protected location from falling debris</li>
              <li>Escape route access during emergency conditions</li>
              <li>Alternative positions for different operational phases</li>
            </ul>

            <p><strong>Backup Communication Systems:</strong></p>
            <ul>
              <li>Radio systems with noise-canceling features</li>
              <li>Visual signals for high-noise environments</li>
              <li>Emergency stop capabilities from multiple locations</li>
              <li>Coordination with demolition crew supervisors</li>
            </ul>

            <h3>Multi-Crew Coordination</h3>
            <p>Demolition projects often involve multiple crews requiring coordination:</p>

            <ul>
              <li><strong>Demolition crews:</strong> Structural preparation and debris handling</li>
              <li><strong>Crane operators:</strong> Lifting and positioning operations</li>
              <li><strong>Safety personnel:</strong> Hazard monitoring and evacuation procedures</li>
              <li><strong>Utility crews:</strong> Service disconnection and protection</li>
            </ul>

            <h2>Documentation Requirements</h2>

            <h3>Enhanced Inspection Records</h3>
            <p>Demolition projects require comprehensive documentation beyond standard 29 CFR 1926.1412(g) requirements:</p>

            <p><strong>Pre-Project Documentation:</strong></p>
            <ul>
              <li>Engineering survey findings affecting crane operations</li>
              <li>Ground condition assessment and monitoring plan</li>
              <li>Enhanced safety protocols and procedures</li>
              <li>Equipment modifications for demolition environment</li>
            </ul>

            <p><strong>Daily Operations Records:</strong></p>
            <ul>
              <li>Environmental conditions and visibility assessments</li>
              <li>Debris impact events and post-impact inspections</li>
              <li>Load calculations with demolition factors applied</li>
              <li>Communication protocol effectiveness evaluation</li>
            </ul>

            <h3>Incident Documentation</h3>
            <p>Maintain detailed records of all incidents and near-misses:</p>

            <ul>
              <li>Debris impact incidents with damage assessment</li>
              <li>Structural failure events affecting crane operations</li>
              <li>Communication breakdown incidents</li>
              <li>Emergency evacuation procedures activation</li>
            </ul>

            <h2>Case Studies and Lessons Learned</h2>

            <h3>Case Study: Downtown Building Demolition Collapse</h3>
            <p>A 2018 demolition project resulted in crane boom failure and two fatalities:</p>

            <p><strong>Incident Details:</strong></p>
            <ul>
              <li>Crane lifting heavy structural beam when building partially collapsed</li>
              <li>Dynamic loading exceeded crane capacity by 180%</li>
              <li>Boom buckled under sudden load increase</li>
              <li>Operator and signal person fatalities resulted</li>
            </ul>

            <p><strong>OSHA Citations and Penalties:</strong></p>
            <ul>
              <li><strong>Willful violation (29 CFR 1926.1417):</strong> $165,514 - Inadequate load planning</li>
              <li><strong>Serious violation (29 CFR 1926.851):</strong> $16,550 - Inadequate engineering survey</li>
              <li><strong>Serious violation (29 CFR 1926.1412):</strong> $16,550 - Inadequate inspection procedures</li>
              <li><strong>Total penalties:</strong> $198,614 plus criminal charges</li>
            </ul>

            <p><strong>Lessons Learned:</strong></p>
            <ul>
              <li>Dynamic load factors must account for structural instability</li>
              <li>Real-time load monitoring essential in demolition work</li>
              <li>Emergency evacuation procedures must be practiced</li>
              <li>Engineering survey must specifically address crane operations</li>
            </ul>

            <h3>Best Practice Example: Hospital Demolition Project</h3>
            <p>A successful 2020 hospital demolition demonstrated effective practices:</p>

            <ul>
              <li>50% capacity limitation for all crane operations</li>
              <li>Real-time load monitoring with automatic shutdown</li>
              <li>Daily post-shift detailed inspections</li>
              <li>Dedicated safety observer for each crane</li>
              <li>Zero incidents over 18-month project duration</li>
            </ul>

            <h2>Technology Applications</h2>

            <h3>Load Monitoring Systems</h3>
            <p>Advanced technology enhances safety in demolition environments:</p>

            <ul>
              <li><strong>Real-time load cells:</strong> Continuous weight monitoring with alarms</li>
              <li><strong>Boom stress monitoring:</strong> Strain gauge systems detecting overload</li>
              <li><strong>Angle monitoring:</strong> Boom angle and radius verification</li>
              <li><strong>Ground pressure sensors:</strong> Foundation monitoring during operations</li>
            </ul>

            <h3>Digital Documentation</h3>
            <p>Electronic inspection systems provide comprehensive records:</p>

            <ul>
              <li>Photo documentation of equipment condition changes</li>
              <li>GPS tracking of crane positions and movements</li>
              <li>Automated inspection scheduling with environment-specific checklists</li>
              <li>Integration with project management systems</li>
            </ul>

            <h2>Training and Competency for Demolition Work</h2>

            <h3>Specialized Training Requirements</h3>
            <p>Demolition crane work requires enhanced training beyond standard certification:</p>

            <p><strong>Operator Training:</strong></p>
            <ul>
              <li>Demolition-specific load handling techniques</li>
              <li>Emergency evacuation procedures</li>
              <li>Dynamic load recognition and response</li>
              <li>Environmental hazard assessment</li>
            </ul>

            <p><strong>Inspector Training:</strong></p>
            <ul>
              <li>Post-impact damage assessment techniques</li>
              <li>Demolition environment hazard recognition</li>
              <li>Enhanced documentation requirements</li>
              <li>Coordination with demolition engineering</li>
            </ul>

            <h3>Competency Verification</h3>
            <p>Regular competency assessment ensures qualified personnel:</p>

            <ul>
              <li>Demonstration of demolition-specific procedures</li>
              <li>Emergency response simulation exercises</li>
              <li>Hazard recognition testing in simulated conditions</li>
              <li>Communication protocol proficiency verification</li>
            </ul>

            <h2>Regulatory Compliance Strategies</h2>

            <h3>Multi-Standard Approach</h3>
            <p>Effective compliance requires integration of multiple standards:</p>

            <ul>
              <li><strong>29 CFR 1926.850-859:</strong> Demolition-specific requirements</li>
              <li><strong>29 CFR 1926 Subpart CC:</strong> Crane operation standards</li>
              <li><strong>ANSI B30.5:</strong> Mobile crane technical standards</li>
              <li><strong>Local building codes:</strong> Municipal demolition requirements</li>
            </ul>

            <h3>Inspection Planning</h3>
            <p>Develop comprehensive inspection plans addressing all aspects:</p>

            <ul>
              <li>Pre-project equipment baseline documentation</li>
              <li>Environment-specific daily inspection enhancements</li>
              <li>Post-incident inspection and evaluation procedures</li>
              <li>Project completion equipment assessment</li>
            </ul>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Demolition crane operations require enhanced inspection protocols due to unique environmental hazards and dynamic loading conditions</li>
              <li>OSHA violations in demolition crane work often result in maximum penalties—willful violations up to $165,514 and serious violations up to $16,550</li>
              <li>Load capacity must be reduced by 25-50% depending on demolition operation type to account for dynamic forces</li>
              <li>Post-impact inspections are mandatory after any debris contact or unusual loading event</li>
              <li>Enhanced communication protocols and backup systems are essential in high-noise, low-visibility demolition environments</li>
              <li>Comprehensive documentation including incident records and environmental assessments protects against regulatory violations</li>
            </ul>

            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Protect Your Demolition Operations</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">CraneCheck's demolition-specific inspection modules help you navigate enhanced safety requirements, document critical assessments, and maintain compliance in high-risk environments.</p>
              <a href="/pricing" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4">See Pricing</a>
              <a href="/demo" className="inline-block border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg">Request Demo</a>
            </div>

            <div className="not-prose mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-navy mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/crane-accident-investigation-documentation" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Crane Accident Investigation and Documentation</h3>
                  <p className="text-gray-600 text-sm">Learn proper procedures for investigating and documenting crane incidents in demolition environments.</p>
                </Link>
                <Link href="/blog/daily-crane-inspection-checklist" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Daily Crane Inspection Checklist: OSHA Compliance Made Simple</h3>
                  <p className="text-gray-600 text-sm">Enhanced daily inspection procedures for demolition and high-risk crane operations.</p>
                </Link>
                <Link href="/blog/crane-lift-plan-requirements" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Crane Lift Plan Requirements: OSHA Planning Standards</h3>
                  <p className="text-gray-600 text-sm">Special lift planning considerations for demolition operations and dynamic loading.</p>
                </Link>
                <Link href="/blog/crane-ground-conditions-setup" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Crane Ground Conditions and Site Setup: OSHA Requirements</h3>
                  <p className="text-gray-600 text-sm">Critical ground assessment procedures for demolition site crane operations.</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-demolition-projects" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}