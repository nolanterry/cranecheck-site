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
  title: "Lattice Boom Crane Inspection: Complete Guide for Crawler and Truck Cranes",
  description: "Master lattice boom crane inspection for crawler and truck cranes. OSHA requirements, ANSI B30.5 standards, inspection checklists, and maintenance procedures.",
  alternates: { canonical: "/blog/lattice-boom-crane-inspection" },
};

export default function LatticeBoomCraneInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lattice Boom Crane Inspection: Complete Guide for Crawler and Truck Cranes",
    "description": "Master lattice boom crane inspection for crawler and truck cranes. OSHA requirements, ANSI B30.5 standards, inspection checklists, and maintenance procedures.",
    "datePublished": "2026-03-26",
    "dateModified": "2026-03-26",
    "author": { "@type": "Person", "name": "Nolan Terry", "url": "https://cranecheck.co" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/lattice-boom-crane-inspection" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Lattice Boom Crane Inspection: Complete Guide for Crawler and Truck Cranes", "item": "https://cranecheck.co/blog/lattice-boom-crane-inspection" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Inspection</span>
              <span className="text-xs text-gray-400">March 26, 2026</span>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Lattice Boom Crane Inspection: Complete Guide for Crawler and Truck Cranes</h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder, CraneCheck" />
            <p className="text-lg text-gray-300 leading-relaxed">Master the critical inspection points for lattice boom cranes, from structural integrity to pin connections, ensuring safe operation and regulatory compliance.</p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>
            
            <p>Lattice boom cranes represent some of the most powerful and versatile lifting equipment in construction, with crawler and truck-mounted configurations capable of lifting hundreds of tons. However, their complex lattice boom structure and numerous connection points require thorough inspection protocols to prevent catastrophic failures. Under OSHA 29 CFR 1926.1412 and ANSI B30.5 standards, proper inspection of these critical components is both a legal requirement and an essential safety practice.</p>

            <h2>Understanding Lattice Boom Construction</h2>

            <h3>Structural Components Overview</h3>
            <p>Lattice boom cranes feature distinctive truss-like boom construction consisting of:</p>

            <ul>
              <li><strong>Main boom chords:</strong> Primary load-bearing members (top and bottom)</li>
              <li><strong>Lacing bars:</strong> Diagonal and horizontal bracing elements</li>
              <li><strong>Pin connections:</strong> High-strength pins at boom sections and hinge points</li>
              <li><strong>Insert sections:</strong> Telescoping boom extensions (on some models)</li>
              <li><strong>Boom head:</strong> Load block attachment point with multiple sheaves</li>
            </ul>

            <h3>Critical Load Paths</h3>
            <p>Understanding load distribution is essential for effective inspection:</p>

            <ul>
              <li><strong>Compression loads:</strong> Primary forces through main chords</li>
              <li><strong>Tension forces:</strong> Secondary loads through lacing and guy systems</li>
              <li><strong>Lateral forces:</strong> Side loading from wind and boom deflection</li>
              <li><strong>Dynamic loads:</strong> Impact forces during lifting operations</li>
            </ul>

            <h2>Regulatory Requirements for Lattice Boom Cranes</h2>

            <h3>OSHA Inspection Standards</h3>
            <p>Under 29 CFR 1926.1412, lattice boom cranes must undergo comprehensive inspections:</p>

            <p><strong>Daily Inspections (29 CFR 1926.1412(d)):</strong></p>
            <ul>
              <li>Visual inspection of boom structure for obvious defects</li>
              <li>Pin condition and security at boom connections</li>
              <li>Lacing member integrity and alignment</li>
              <li>Boom angle and positioning system function</li>
            </ul>

            <p><strong>Monthly Inspections (29 CFR 1926.1412(e)):</strong></p>
            <ul>
              <li>Detailed examination of all boom connections</li>
              <li>Pin wear and fit tolerances</li>
              <li>Structural member condition assessment</li>
              <li>Load block and hook inspection</li>
            </ul>

            <p><strong>Annual Inspections (29 CFR 1926.1412(f)):</strong></p>
            <ul>
              <li>Complete structural analysis and NDT testing</li>
              <li>Pin diameter measurements and replacement criteria</li>
              <li>Boom deflection and alignment verification</li>
              <li>Load testing at maximum configuration</li>
            </ul>

            <h3>ANSI B30.5 Standards</h3>
            <p>ANSI B30.5-2.1 provides detailed inspection criteria for mobile cranes with lattice booms:</p>

            <ul>
              <li><strong>Section 2.1.1:</strong> Frequent inspection requirements (daily/weekly)</li>
              <li><strong>Section 2.1.2:</strong> Periodic inspection procedures (monthly/quarterly)</li>
              <li><strong>Section 2.1.3:</strong> Annual inspection and testing requirements</li>
              <li><strong>Section 2.4:</strong> Wire rope inspection for lattice boom configurations</li>
            </ul>

            <h2>Lattice Boom Structural Inspection</h2>

            <h3>Main Chord Inspection</h3>
            <p>The main boom chords carry primary compression and tension loads:</p>

            <p><strong>Visual Inspection Points:</strong></p>
            <ul>
              <li>Chord straightness and alignment</li>
              <li>Surface cracking or deformation</li>
              <li>Connection point integrity</li>
              <li>Corrosion assessment</li>
            </ul>

            <p><strong>Measurement Criteria:</strong></p>
            <ul>
              <li>Chord bow limits: Generally not exceeding 1/4" per 10 feet of length</li>
              <li>Local buckling or denting beyond manufacturer specifications</li>
              <li>Cross-sectional area reduction due to wear or corrosion</li>
            </ul>

            <h3>Lacing Member Assessment</h3>
            <p>Diagonal and horizontal lacing provides boom stability:</p>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Lacing Type</th>
                  <th className="border border-gray-300 p-3 text-left">Primary Function</th>
                  <th className="border border-gray-300 p-3 text-left">Inspection Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Diagonal Lacing</td>
                  <td className="border border-gray-300 p-3">Shear resistance and stability</td>
                  <td className="border border-gray-300 p-3">Connection tightness, member straightness</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Horizontal Lacing</td>
                  <td className="border border-gray-300 p-3">Lateral support and spacing</td>
                  <td className="border border-gray-300 p-3">Bolt tension, alignment, wear</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">End Lacing</td>
                  <td className="border border-gray-300 p-3">Load distribution at connections</td>
                  <td className="border border-gray-300 p-3">Stress concentration, connection integrity</td>
                </tr>
              </tbody>
            </table>

            <h3>Pin Connection Inspection</h3>
            <p>Pin connections are critical failure points requiring detailed inspection:</p>

            <p><strong>Pin Condition Assessment:</strong></p>
            <ul>
              <li>Visual inspection for scoring, galling, or wear patterns</li>
              <li>Diameter measurements at multiple points</li>
              <li>Straightness verification (bow limits typically 0.005" per inch of length)</li>
              <li>Surface hardness testing if wear is suspected</li>
            </ul>

            <p><strong>Bushing and Pin Hole Inspection:</strong></p>
            <ul>
              <li>Hole elongation or out-of-round conditions</li>
              <li>Bushing wear and replacement criteria</li>
              <li>Lubrication adequacy and contamination</li>
              <li>Pin retention system integrity</li>
            </ul>

            <h2>Crawler vs. Truck Crane Differences</h2>

            <h3>Crawler Crane Specific Considerations</h3>
            <p>Crawler-mounted lattice boom cranes present unique inspection requirements:</p>

            <p><strong>Carbody and Boom Mounting:</strong></p>
            <ul>
              <li>Turntable bearing inspection for wear and lubrication</li>
              <li>Boom pivot pin condition and fit</li>
              <li>Carbody structural integrity, especially around boom attachment</li>
              <li>Track system condition affecting stability</li>
            </ul>

            <p><strong>Guy Line Systems:</strong></p>
            <p>Many crawler lattice boom cranes use guy lines for boom support:</p>
            <ul>
              <li>Wire rope condition per ANSI B30.5-2.4.1 criteria</li>
              <li>Guy line tensioning and equalization</li>
              <li>Attachment point condition on boom and carbody</li>
              <li>Load block and equalizer beam inspection</li>
            </ul>

            <h3>Truck Crane Specific Requirements</h3>
            <p>Truck-mounted lattice boom cranes have additional considerations:</p>

            <p><strong>Carrier Integration:</strong></p>
            <ul>
              <li>Boom mounting to truck chassis integrity</li>
              <li>Outrigger system operation and structural condition</li>
              <li>Turntable mounting and support structure</li>
              <li>Highway transport configuration compliance</li>
            </ul>

            <p><strong>Load Chart Considerations:</strong></p>
            <p>29 CFR 1926.1417 requires accessible load charts reflecting actual configuration:</p>
            <ul>
              <li>Charts for all boom lengths and configurations</li>
              <li>Working radius calculations for lattice boom geometry</li>
              <li>Derating for out-of-level conditions</li>
              <li>Special lifting device derations</li>
            </ul>

            <h2>Wire Rope Systems in Lattice Boom Cranes</h2>

            <h3>Multiple Rope System Inspection</h3>
            <p>Lattice boom cranes typically use multiple wire rope systems:</p>

            <p><strong>Boom Hoist System:</strong></p>
            <ul>
              <li>Load line routing through boom head sheaves</li>
              <li>Multiple part line inspection and equalization</li>
              <li>Boom hoist drum and rope termination</li>
              <li>Load block bearing and sheave condition</li>
            </ul>

            <p><strong>Load Line Inspection:</strong></p>
            <p>Following 29 CFR 1926.1413(a) and ANSI B30.5-2.4.1:</p>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Rope Construction</th>
                  <th className="border border-gray-300 p-3 text-left">Broken Wire Limits</th>
                  <th className="border border-gray-300 p-3 text-left">Diameter Reduction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3">6x19 Classification</td>
                  <td className="border border-gray-300 p-3">6 wires in one strand in one lay</td>
                  <td className="border border-gray-300 p-3">5% reduction from nominal</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">6x37 Classification</td>
                  <td className="border border-gray-300 p-3">12 wires in one strand in one lay</td>
                  <td className="border border-gray-300 p-3">5% reduction from nominal</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3">8x19 Classification</td>
                  <td className="border border-gray-300 p-3">4 wires in one strand in one lay</td>
                  <td className="border border-gray-300 p-3">5% reduction from nominal</td>
                </tr>
              </tbody>
            </table>

            <h3>Sheave and Block Inspection</h3>
            <p>Lattice boom cranes often have complex block and tackle arrangements:</p>

            <ul>
              <li><strong>Sheave groove wear:</strong> Depth and profile measurements</li>
              <li><strong>Bearing condition:</strong> Smooth rotation and lubrication</li>
              <li><strong>Block frame integrity:</strong> Structural condition and alignment</li>
              <li><strong>Load equalization:</strong> Proper rope tensioning in multi-part lines</li>
            </ul>

            <h2>Boom Configuration and Assembly</h2>

            <h3>Insert Section Inspection</h3>
            <p>Many lattice boom cranes use telescoping insert sections:</p>

            <p><strong>Extension Mechanisms:</strong></p>
            <ul>
              <li>Cylinder operation and seal integrity</li>
              <li>Extension cable or chain condition</li>
              <li>Insert section alignment and straightness</li>
              <li>Connection pin condition at extension points</li>
            </ul>

            <p><strong>Load Path Verification:</strong></p>
            <ul>
              <li>Proper insert section engagement</li>
              <li>Pin insertion depth and security</li>
              <li>Load transfer member alignment</li>
              <li>Safety devices and lock mechanisms</li>
            </ul>

            <h3>Boom Length Configuration</h3>
            <p>Proper boom assembly affects load capacity and safety:</p>

            <ul>
              <li><strong>Section identification:</strong> Verification of correct boom sections</li>
              <li><strong>Assembly sequence:</strong> Proper section arrangement per manufacturer</li>
              <li><strong>Connection verification:</strong> All pins properly installed and secured</li>
              <li><strong>Load chart confirmation:</strong> Capacity verification for actual configuration</li>
            </ul>

            <h2>Load Testing for Lattice Boom Cranes</h2>

            <h3>OSHA Load Testing Requirements</h3>
            <p>29 CFR 1926.1406(b) mandates load testing in specific scenarios:</p>

            <ul>
              <li>After initial assembly of boom configuration</li>
              <li>After repair or replacement of structural components</li>
              <li>After modification affecting capacity or operation</li>
              <li>Following manufacturer's recommended intervals</li>
            </ul>

            <p><strong>Test Load Requirements:</strong></p>
            <ul>
              <li>Test load at 100% of maximum rated capacity</li>
              <li>Testing at maximum radius for boom configuration</li>
              <li>Hold time as specified by manufacturer (typically 5-10 minutes)</li>
              <li>Qualified person conducting and witnessing test</li>
            </ul>

            <h3>ANSI B30.5 Load Testing Procedures</h3>
            <p>ANSI B30.5-2.2.1 provides detailed load testing guidance:</p>

            <p><strong>Test Preparation:</strong></p>
            <ul>
              <li>Boom configuration documentation</li>
              <li>Test weight certification and rigging</li>
              <li>Deflection measurement point establishment</li>
              <li>Personnel clearance and safety procedures</li>
            </ul>

            <p><strong>Test Execution:</strong></p>
            <ul>
              <li>Gradual load application to test weight</li>
              <li>Multiple position testing (boom angle variations)</li>
              <li>Deflection measurements and recording</li>
              <li>Visual inspection during and after testing</li>
            </ul>

            <h2>Common Lattice Boom Defects and Failures</h2>

            <h3>Structural Failure Modes</h3>
            <p>Understanding common failure modes helps focus inspection efforts:</p>

            <p><strong>Pin Failure:</strong></p>
            <ul>
              <li><strong>Cause:</strong> Wear, overload, improper fit, or material defects</li>
              <li><strong>Detection:</strong> Diameter measurements, visual scoring, alignment checks</li>
              <li><strong>Prevention:</strong> Regular inspection, proper lubrication, load management</li>
              <li><strong>OSHA citations:</strong> Often result in serious violations ($16,550)</li>
            </ul>

            <p><strong>Chord Buckling:</strong></p>
            <ul>
              <li><strong>Cause:</strong> Overload, side loading, or local instability</li>
              <li><strong>Detection:</strong> Straightness measurements, visual deformation</li>
              <li><strong>Prevention:</strong> Load chart compliance, proper rigging practices</li>
              <li><strong>Consequences:</strong> Can lead to catastrophic boom collapse</li>
            </ul>

            <p><strong>Lacing Failure:</strong></p>
            <ul>
              <li><strong>Cause:</strong> Loose connections, overload, or fatigue</li>
              <li><strong>Detection:</strong> Connection tightness, member alignment</li>
              <li><strong>Prevention:</strong> Regular torque verification, proper maintenance</li>
            </ul>

            <h3>Case Study: Pin Connection Failure</h3>
            <p>A crawler crane boom collapse in 2019 resulted from worn boom connection pins that had lost 0.125" of diameter—exceeding manufacturer limits. The accident resulted in:</p>
            <ul>
              <li>$165,514 willful violation fine for inadequate inspection</li>
              <li>Two fatalities and multiple injuries</li>
              <li>Criminal charges for the crane owner</li>
              <li>$2.3 million OSHA settlement</li>
            </ul>

            <p>This case highlights the critical importance of proper pin inspection and measurement protocols.</p>

            <h2>Maintenance and Inspection Intervals</h2>

            <h3>Preventive Maintenance Schedule</h3>
            <p>Develop comprehensive maintenance intervals based on usage:</p>

            <table className="w-full border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 p-3 text-left">Interval</th>
                  <th className="border border-gray-300 p-3 text-left">Components</th>
                  <th className="border border-gray-300 p-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Daily</td>
                  <td className="border border-gray-300 p-3">Pins, structure, wire rope</td>
                  <td className="border border-gray-300 p-3">Visual inspection, lubrication check</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Weekly</td>
                  <td className="border border-gray-300 p-3">Connections, lacing, blocks</td>
                  <td className="border border-gray-300 p-3">Detailed visual, torque verification</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Monthly</td>
                  <td className="border border-gray-300 p-3">All structural components</td>
                  <td className="border border-gray-300 p-3">Comprehensive inspection, measurements</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold">Annually</td>
                  <td className="border border-gray-300 p-3">Complete boom assembly</td>
                  <td className="border border-gray-300 p-3">NDT testing, load testing, certification</td>
                </tr>
              </tbody>
            </table>

            <h3>Usage-Based Inspection</h3>
            <p>Heavy-use cranes may require more frequent inspection:</p>

            <ul>
              <li><strong>High-cycle operations:</strong> Increase monthly inspection frequency</li>
              <li><strong>Heavy lifting:</strong> Pin measurement after maximum loads</li>
              <li><strong>Harsh environments:</strong> Enhanced corrosion assessment</li>
              <li><strong>Multiple shifts:</strong> Fatigue assessment protocols</li>
            </ul>

            <h2>Documentation and Record Keeping</h2>

            <h3>OSHA Documentation Requirements</h3>
            <p>29 CFR 1926.1412(g) requires comprehensive inspection records:</p>

            <ul>
              <li>Date and time of inspection</li>
              <li>Signature of qualified person</li>
              <li>Crane identification and configuration</li>
              <li>Components inspected and methods used</li>
              <li>Results and any defects found</li>
              <li>Corrective actions taken</li>
            </ul>

            <h3>Pin Inspection Records</h3>
            <p>Maintain detailed pin condition records including:</p>

            <ul>
              <li>Pin location and identification number</li>
              <li>Diameter measurements at multiple points</li>
              <li>Straightness measurements</li>
              <li>Visual condition assessment</li>
              <li>Replacement criteria and history</li>
            </ul>

            <h2>Technology Integration</h2>

            <h3>Digital Inspection Tools</h3>
            <p>Modern inspection technology enhances lattice boom crane safety:</p>

            <ul>
              <li><strong>Digital calipers:</strong> Precise pin diameter measurement</li>
              <li><strong>Laser alignment tools:</strong> Boom straightness verification</li>
              <li><strong>Ultrasonic testing:</strong> Pin condition assessment</li>
              <li><strong>Load monitoring systems:</strong> Real-time capacity monitoring</li>
            </ul>

            <h3>Inspection Software Benefits</h3>
            <p>Digital platforms provide comprehensive management:</p>

            <ul>
              <li>Standardized inspection checklists</li>
              <li>Photo documentation of defects</li>
              <li>Automatic scheduling and reminders</li>
              <li>Trend analysis and predictive maintenance</li>
              <li>Compliance reporting and audit trails</li>
            </ul>

            <h2>Training and Competency</h2>

            <h3>Inspector Qualifications</h3>
            <p>Lattice boom crane inspection requires specialized knowledge:</p>

            <ul>
              <li><strong>Structural analysis:</strong> Understanding load paths and stress points</li>
              <li><strong>Connection systems:</strong> Pin fit tolerances and wear patterns</li>
              <li><strong>Wire rope systems:</strong> Multi-part line inspection and maintenance</li>
              <li><strong>Load testing:</strong> Proper procedures and safety protocols</li>
            </ul>

            <h3>Ongoing Training Requirements</h3>
            <p>Maintain inspector competency through:</p>

            <ul>
              <li>Manufacturer-specific training programs</li>
              <li>NCCCO crane inspector certification</li>
              <li>ANSI/ASME standard updates and revisions</li>
              <li>Field experience with various crane configurations</li>
            </ul>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Lattice boom cranes require specialized inspection focusing on pins, structural members, and wire rope systems</li>
              <li>Pin connection inspection and measurement is critical—failures often result in serious OSHA violations ($16,550) or willful violations ($165,514)</li>
              <li>ANSI B30.5 provides detailed technical guidance that exceeds OSHA minimum requirements</li>
              <li>Load testing must be conducted by qualified persons following specific procedures after assembly or major repairs</li>
              <li>Documentation must be comprehensive and include measurements, photos, and corrective actions</li>
              <li>Regular training and competency verification ensures qualified personnel conduct proper inspections</li>
            </ul>

            <div className="not-prose mt-12 bg-gradient-to-br from-navy via-navy-light to-navy rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Streamline Lattice Boom Crane Inspections</h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">CraneCheck's specialized lattice boom inspection modules guide you through critical checkpoints, pin measurements, and documentation requirements to ensure safety and compliance.</p>
              <a href="/pricing" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg mr-4">See Pricing</a>
              <a href="/demo" className="inline-block border border-brand text-brand hover:bg-brand hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg">Request Demo</a>
            </div>

            <div className="not-prose mt-12 border-t border-gray-200 pt-10">
              <h2 className="text-xl font-bold text-navy mb-6">Related Articles</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="/blog/mobile-crane-inspection-checklist" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Mobile Crane Inspection Checklist: Daily, Monthly & Annual</h3>
                  <p className="text-gray-600 text-sm">Complete inspection checklist for all types of mobile cranes including lattice boom models.</p>
                </Link>
                <Link href="/blog/crane-wire-rope-inspection-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Complete Crane Wire Rope Inspection Guide: OSHA & ANSI Standards</h3>
                  <p className="text-gray-600 text-sm">Master wire rope inspection techniques for complex lattice boom crane systems.</p>
                </Link>
                <Link href="/blog/daily-crane-inspection-checklist" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Daily Crane Inspection Checklist: OSHA Compliance Made Simple</h3>
                  <p className="text-gray-600 text-sm">Essential daily inspection procedures for lattice boom and all crane types.</p>
                </Link>
                <Link href="/blog/crane-maintenance-log-requirements" className="block p-4 border border-gray-200 rounded-lg hover:border-brand transition-colors">
                  <h3 className="font-semibold text-navy mb-2">Crane Maintenance Log Requirements: OSHA Documentation Guide</h3>
                  <p className="text-gray-600 text-sm">Proper documentation procedures for lattice boom crane maintenance and inspections.</p>
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="not-prose max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="lattice-boom-crane-inspection" /><NewsletterSignup /></div>
      </main>
      <Footer />
    </>
  );
}