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
  title: "Crane Clearance Requirements: OSHA 1926.1408 Power Line Safety & Building Proximity",
  description: "Complete crane clearance requirements guide covering OSHA 1926.1408 power line clearances, building proximity standards, pedestrian safety zones, underground utility clearances, and documentation requirements.",
  alternates: { canonical: "/blog/crane-clearance-requirements-structures" },
};

export default function CraneClearanceRequirementsStructuresPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Clearance Requirements: OSHA 1926.1408 Power Line Safety & Building Proximity",
    "description": "Complete crane clearance requirements guide covering OSHA 1926.1408 power line clearances, building proximity standards, pedestrian safety zones, underground utility clearances, and documentation requirements.",
    "datePublished": "2026-04-04",
    "dateModified": "2026-04-04",
    "author": {
      "@type": "Organization",
      "name": "CraneCheck Team",
      "url": "https://cranecheck.co"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CraneCheck",
      "url": "https://cranecheck.co"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://cranecheck.co/blog/crane-clearance-requirements-structures"
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
        "name": "Crane Clearance Requirements",
        "item": "https://cranecheck.co/blog/crane-clearance-requirements-structures"
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
              <span className="text-xs text-gray-400">April 4, 2026</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Clearance Requirements: OSHA 1926.1408 Power Line Safety & Building Proximity
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete crane clearance requirements guide covering OSHA 1926.1408 power line clearances, building proximity standards, pedestrian safety zones, underground utility clearances, and documentation requirements.
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
                Crane clearance requirements are among the most critical safety considerations in construction operations, 
                with violations regularly appearing among OSHA's top 10 most cited standards. In 2023, power line contact 
                incidents resulted in over 40 fatalities and 200 serious injuries, making clearance compliance essential 
                for worker safety and regulatory compliance.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This comprehensive guide covers OSHA 1926.1408 power line clearance requirements, building proximity 
                standards, pedestrian safety zones, underground utility clearances, and proper documentation procedures 
                to ensure safe crane operations in congested environments.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                OSHA 1926.1408 Power Line Clearance Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1408 establishes minimum clearance distances for cranes operating near energized power lines. 
                These requirements apply to any part of the crane, including boom, boom extensions, load line, load block, 
                and loads, with specific distances based on voltage levels and operational conditions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Minimum Clearance Distances by Voltage
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Voltage (kV)</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Normal Conditions</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Insulated/Proximity Alarms</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Dedicated Spotter Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Up to 50 kV</td>
                    <td className="border px-4 py-3">10 feet (3.05 m)</td>
                    <td className="border px-4 py-3">6 feet (1.8 m)</td>
                    <td className="border px-4 py-3">No</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Over 50 to 200 kV</td>
                    <td className="border px-4 py-3">15 feet (4.6 m)</td>
                    <td className="border px-4 py-3">10 feet (3.05 m)</td>
                    <td className="border px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Over 200 to 350 kV</td>
                    <td className="border px-4 py-3">20 feet (6.1 m)</td>
                    <td className="border px-4 py-3">15 feet (4.6 m)</td>
                    <td className="border px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Over 350 to 500 kV</td>
                    <td className="border px-4 py-3">25 feet (7.6 m)</td>
                    <td className="border px-4 py-3">20 feet (6.1 m)</td>
                    <td className="border px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Over 500 to 750 kV</td>
                    <td className="border px-4 py-3">35 feet (10.7 m)</td>
                    <td className="border px-4 py-3">30 feet (9.1 m)</td>
                    <td className="border px-4 py-3">Yes</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Over 750 to 1000 kV</td>
                    <td className="border px-4 py-3">45 feet (13.7 m)</td>
                    <td className="border px-4 py-3">40 feet (12.2 m)</td>
                    <td className="border px-4 py-3">Yes</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Power Line Voltage Determination Requirements
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1408(a)(2) requires the employer to determine power line voltage before beginning work. 
                Acceptable methods for voltage determination include:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Utility Company Contact:</strong> Direct communication with power line owner/operator</li>
                <li><strong>Engineering Documentation:</strong> Electrical drawings, utility maps, or engineering specifications</li>
                <li><strong>Visual Inspection:</strong> By qualified electrical workers using established criteria</li>
                <li><strong>Qualified Electrical Worker:</strong> Assessment by person trained in electrical hazards</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Exceptions and Special Conditions
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1408 provides specific exceptions that allow reduced clearances under certain conditions:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Power Line De-energization:</strong> Lines confirmed de-energized and grounded</li>
                <li><strong>Insulated Link/Device:</strong> Approved insulating devices in the load line</li>
                <li><strong>Proximity Alarm Systems:</strong> Audible warning devices calibrated for specific voltages</li>
                <li><strong>Dedicated Spotter:</strong> Qualified person monitoring clearance distances continuously</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Building and Structure Proximity Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                While OSHA doesn't specify exact clearance distances for buildings, several regulations and industry 
                standards address crane proximity to structures. Local building codes, fire codes, and insurance 
                requirements often establish minimum clearances based on building height and occupancy.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Industry Standard Building Clearances
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Building Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Minimum Boom Clearance</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Load Swing Clearance</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Special Considerations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Occupied Buildings</td>
                    <td className="border px-4 py-3">20 feet (6.1 m)</td>
                    <td className="border px-4 py-3">50 feet (15.2 m)</td>
                    <td className="border px-4 py-3">Evacuation planning required</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Public Structures</td>
                    <td className="border px-4 py-3">30 feet (9.1 m)</td>
                    <td className="border px-4 py-3">75 feet (22.9 m)</td>
                    <td className="border px-4 py-3">Authority notification required</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Industrial Buildings</td>
                    <td className="border px-4 py-3">15 feet (4.6 m)</td>
                    <td className="border px-4 py-3">30 feet (9.1 m)</td>
                    <td className="border px-4 py-3">Operational coordination</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Emergency Services</td>
                    <td className="border px-4 py-3">50 feet (15.2 m)</td>
                    <td className="border px-4 py-3">100 feet (30.5 m)</td>
                    <td className="border px-4 py-3">Special permits required</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Schools/Hospitals</td>
                    <td className="border px-4 py-3">40 feet (12.2 m)</td>
                    <td className="border px-4 py-3">100 feet (30.5 m)</td>
                    <td className="border px-4 py-3">Enhanced safety protocols</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                NFPA 1901 and Fire Access Requirements
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                NFPA 1901 requires maintaining fire department access to buildings. Crane operations must consider:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Fire Lane Access:</strong> Minimum 20-foot clear width for fire apparatus</li>
                <li><strong>Hydrant Clearance:</strong> 3-foot radius around fire hydrants</li>
                <li><strong>Building Access:</strong> Unobstructed path to building entrances</li>
                <li><strong>Aerial Access:</strong> Clear zones for ladder truck deployment</li>
                <li><strong>Emergency Response:</strong> Rapid crane repositioning procedures</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Structural Impact Considerations
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Crane proximity to buildings requires evaluation of potential structural impacts:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Wind Loading:</strong> Crane presence can alter wind patterns affecting building loads</li>
                <li><strong>Foundation Settlement:</strong> Heavy crane loading may affect adjacent building foundations</li>
                <li><strong>Vibration Transmission:</strong> Crane operations can transmit vibrations to sensitive structures</li>
                <li><strong>Emergency Egress:</strong> Crane failure could block building evacuation routes</li>
                <li><strong>Debris Fall Zones:</strong> Protection from potential falling objects</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Pedestrian and Traffic Safety Zones
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1424 requires establishing and maintaining safe work areas for crane operations, including 
                protection of pedestrians and vehicle traffic. These requirements are critical in urban environments 
                and public construction projects.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Swing Radius Protection Requirements
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1424(a)(1) mandates that the swing radius of the rear of the rotating superstructure must be 
                barricaded to prevent employees from being struck or crushed:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Physical Barriers:</strong> Fencing, cones, or other visible barriers around swing radius</li>
                <li><strong>Warning Signs:</strong> Clear signage indicating crane operation zones</li>
                <li><strong>Access Control:</strong> Designated entry/exit points with supervision</li>
                <li><strong>Emergency Procedures:</strong> Rapid area evacuation protocols</li>
                <li><strong>Spotters:</strong> Personnel to monitor for unauthorized entry</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Load Fall Protection Zones
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                OSHA 1926.1424(a)(2) requires protection from falling objects during lifting operations:
              </p>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Load Weight</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Minimum Fall Zone</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Protection Method</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Public Access</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Under 5,000 lbs</td>
                    <td className="border px-4 py-3">10 feet from load path</td>
                    <td className="border px-4 py-3">Barriers and signage</td>
                    <td className="border px-4 py-3">Restricted</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">5,000 - 25,000 lbs</td>
                    <td className="border px-4 py-3">25 feet from load path</td>
                    <td className="border px-4 py-3">Hard barriers, spotters</td>
                    <td className="border px-4 py-3">Prohibited</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Over 25,000 lbs</td>
                    <td className="border px-4 py-3">50 feet from load path</td>
                    <td className="border px-4 py-3">Exclusion zones</td>
                    <td className="border px-4 py-3">Prohibited</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Critical/Precision Lifts</td>
                    <td className="border px-4 py-3">100 feet from load path</td>
                    <td className="border px-4 py-3">Total evacuation</td>
                    <td className="border px-4 py-3">Prohibited</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Vehicular Traffic Management
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Crane operations near roadways require coordination with traffic authorities and implementation of 
                traffic control measures:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Traffic Control Plans:</strong> Approved plans for lane closures and detours</li>
                <li><strong>Flagging Operations:</strong> Certified traffic control personnel</li>
                <li><strong>Overhead Clearances:</strong> Verification of boom clearance over traffic</li>
                <li><strong>Load Swing Zones:</strong> Prevention of loads swinging over active traffic</li>
                <li><strong>Emergency Access:</strong> Maintained routes for emergency vehicles</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Underground Utility Clearance and Protection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Underground utilities pose significant risks during crane setup and operation. Outrigger loading, 
                counterweight forces, and ground bearing pressures can damage buried infrastructure, while utility 
                strikes can cause service disruptions, explosions, and electrocution hazards.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                811 Call Before You Dig Requirements
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Federal law requires calling 811 before any excavation. For crane operations, this includes:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Initial Utility Locate:</strong> Call 811 at least 2-3 business days before work</li>
                <li><strong>Crane Path Marking:</strong> Mark all crane travel paths and setup locations</li>
                <li><strong>Outrigger Locations:</strong> Identify all outrigger and counterweight positions</li>
                <li><strong>Re-marking Requirements:</strong> Request re-marks if markings fade or are damaged</li>
                <li><strong>Private Utility Locates:</strong> Coordinate with property owners for private utilities</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Safe Clearance Distances from Utilities
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Utility Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Horizontal Clearance</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Loading Restrictions</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Special Precautions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">High Pressure Gas</td>
                    <td className="border px-4 py-3">10 feet (3.05 m)</td>
                    <td className="border px-4 py-3">No outriggers within 25 feet</td>
                    <td className="border px-4 py-3">Gas company supervision</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Electrical (Primary)</td>
                    <td className="border px-4 py-3">5 feet (1.5 m)</td>
                    <td className="border px-4 py-3">Protected crossing only</td>
                    <td className="border px-4 py-3">Utility company notification</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Water/Sewer (Large)</td>
                    <td className="border px-4 py-3">5 feet (1.5 m)</td>
                    <td className="border px-4 py-3">Load distribution required</td>
                    <td className="border px-4 py-3">Avoid heavy loads</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Telecommunications</td>
                    <td className="border px-4 py-3">3 feet (0.9 m)</td>
                    <td className="border px-4 py-3">Standard precautions</td>
                    <td className="border px-4 py-3">Mark and protect</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Cable/Fiber Optic</td>
                    <td className="border px-4 py-3">2 feet (0.6 m)</td>
                    <td className="border px-4 py-3">Avoid direct loading</td>
                    <td className="border px-4 py-3">Hand excavation near lines</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Protective Measures for Utility Crossings
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                When crane operations must occur over or near underground utilities, specific protection methods are required:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Load Distribution Mats:</strong> Spread loads over wide areas to reduce pressure</li>
                <li><strong>Bridge Structures:</strong> Temporary bridges to span utility corridors</li>
                <li><strong>Protective Covering:</strong> Steel plates or reinforced covers over vulnerable utilities</li>
                <li><strong>Alternative Routing:</strong> Redesign crane paths to avoid utility conflicts</li>
                <li><strong>Utility Monitoring:</strong> Real-time monitoring during critical operations</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Documentation and Compliance Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Proper documentation of clearance assessments and safety measures is essential for OSHA compliance 
                and incident prevention. Documentation requirements vary by jurisdiction but typically include 
                pre-operation assessments, ongoing monitoring, and post-incident reporting.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Required Pre-Operation Documentation
              </h3>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Site Survey Report:</strong> Detailed assessment of all clearance hazards</li>
                <li><strong>Power Line Documentation:</strong> Voltage verification and clearance calculations</li>
                <li><strong>Utility Locate Tickets:</strong> Current 811 tickets and private locate confirmations</li>
                <li><strong>Building Clearance Analysis:</strong> Proximity assessments and protection plans</li>
                <li><strong>Traffic Control Plans:</strong> Approved traffic management documentation</li>
                <li><strong>Emergency Response Plans:</strong> Procedures for clearance violations</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Ongoing Monitoring and Verification
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Daily Clearance Checks:</strong> Verification of clearance distances before operations</li>
                <li><strong>Environmental Changes:</strong> Documentation of changes affecting clearances</li>
                <li><strong>Incident Reports:</strong> Any clearance violations or near-miss events</li>
                <li><strong>Corrective Actions:</strong> Measures taken to address clearance issues</li>
                <li><strong>Training Records:</strong> Documentation of clearance awareness training</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Technology Solutions for Clearance Monitoring
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Modern crane technology offers several solutions for automated clearance monitoring:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Anti-Two Block Systems:</strong> Prevent boom contact with structures</li>
                <li><strong>Proximity Warning Systems:</strong> Audible/visual alarms for clearance violations</li>
                <li><strong>Load Moment Indicators:</strong> Real-time calculation of swing clearances</li>
                <li><strong>GPS Tracking:</strong> Precise positioning relative to mapped hazards</li>
                <li><strong>3D Modeling:</strong> Virtual environment modeling for clearance verification</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Automate Clearance Compliance</h3>
                <p className="text-white/90 mb-6">CraneCheck automatically calculates and monitors all clearance requirements including power lines, buildings, and underground utilities. Real-time alerts and complete documentation ensure OSHA compliance.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Get Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-clearance-requirements-structures" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}