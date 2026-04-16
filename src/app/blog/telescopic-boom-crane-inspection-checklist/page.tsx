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
  title: "Telescopic Boom Crane Inspection Checklist: Hydraulic Cylinder, Wear Pad & Alignment Guide",
  description: "Complete telescopic boom crane inspection guide covering section-by-section procedures, wear pad assessment, boom alignment verification, hydraulic cylinder inspection, and pin/bushing evaluation per ASME B30.5.",
  alternates: { canonical: "/blog/telescopic-boom-crane-inspection-checklist" },
};

export default function TelescopicBoomCraneInspectionChecklistPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Telescopic Boom Crane Inspection Checklist: Hydraulic Cylinder, Wear Pad & Alignment Guide",
    "description": "Complete telescopic boom crane inspection guide covering section-by-section procedures, wear pad assessment, boom alignment verification, hydraulic cylinder inspection, and pin/bushing evaluation per ASME B30.5.",
    "datePublished": "2026-04-04",
    "dateModified": "2026-04-04",
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
      "@id": "https://cranecheck.co/blog/telescopic-boom-crane-inspection-checklist"
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
        "name": "Telescopic Boom Crane Inspection",
        "item": "https://cranecheck.co/blog/telescopic-boom-crane-inspection-checklist"
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Inspection</span>
              <span className="text-xs text-gray-400">April 4, 2026</span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Telescopic Boom Crane Inspection Checklist: Hydraulic Cylinder, Wear Pad & Alignment Guide
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete telescopic boom crane inspection guide covering section-by-section procedures, wear pad assessment, boom alignment verification, hydraulic cylinder inspection, and pin/bushing evaluation per ASME B30.5.
            </p>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; CEO" />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <TableOfContents />

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Telescopic boom cranes represent the most common mobile crane configuration in North America, with their 
                multi-section extending booms offering versatility in reach and capacity. However, the complex hydraulic 
                extension system, multiple boom sections, and sliding wear components require specialized inspection 
                procedures beyond standard lattice boom cranes.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                This comprehensive inspection guide addresses ASME B30.5 requirements for telescopic boom inspection, 
                including section-by-section evaluation, wear pad assessment, boom alignment verification, hydraulic 
                cylinder inspection, and critical pin/bushing checks essential for safe operation.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                ASME B30.5 Telescopic Boom Inspection Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                ASME B30.5 Section 5-2.1 establishes specific inspection requirements for telescopic boom cranes, 
                recognizing the unique hazards associated with extending boom sections and complex hydraulic systems. 
                These requirements mandate both frequent (daily/shift) and periodic (monthly/annual) inspections 
                with detailed documentation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Inspection Frequency Requirements
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Inspection Type</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Frequency</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">ASME Reference</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Key Focus Areas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Frequent Inspection</td>
                    <td className="border px-4 py-3">Daily/Per Shift</td>
                    <td className="border px-4 py-3">B30.5-5.2.1.3</td>
                    <td className="border px-4 py-3">Operational safety, basic function</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Periodic Inspection</td>
                    <td className="border px-4 py-3">Monthly</td>
                    <td className="border px-4 py-3">B30.5-5.2.2.1</td>
                    <td className="border px-4 py-3">Wear patterns, detailed assessment</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Complete Inspection</td>
                    <td className="border px-4 py-3">Annually</td>
                    <td className="border px-4 py-3">B30.5-5.2.3</td>
                    <td className="border px-4 py-3">Comprehensive structural evaluation</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Post-Incident</td>
                    <td className="border px-4 py-3">As Required</td>
                    <td className="border px-4 py-3">B30.5-5.2.1.2</td>
                    <td className="border px-4 py-3">Damage assessment, safety verification</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Qualified Inspector Requirements
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                ASME B30.5 Section 5-2.1.1 requires that inspections be performed by qualified persons with specific 
                knowledge of telescopic boom systems:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Technical Knowledge:</strong> Understanding of hydraulic systems, boom mechanics, and load paths</li>
                <li><strong>Experience Requirements:</strong> Minimum 2 years experience with telescopic boom cranes</li>
                <li><strong>Training Certification:</strong> Completion of manufacturer-specific training programs</li>
                <li><strong>Ongoing Education:</strong> Annual updates on inspection techniques and standards</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Section-by-Section Boom Inspection Procedures
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Telescopic booms typically consist of 3-5 sections that slide within each other, each requiring 
                specific inspection procedures. The base section (first section) carries the highest loads, while 
                fly sections experience unique stresses from extension and retraction cycles.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Base Section (First Section) Inspection
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The base section connects to the upper works and carries all boom loads. Critical inspection points include:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Boom Heel Pins:</strong> Check for wear, proper lubrication, and secure retention</li>
                <li><strong>Structural Welds:</strong> Inspect all longitudinal and circumferential welds for cracks</li>
                <li><strong>Boom Head Assembly:</strong> Verify load block sheaves, guards, and mounting hardware</li>
                <li><strong>Extension Cylinder Mounts:</strong> Check cylinder mounting brackets and pivot pins</li>
                <li><strong>Wear Pad Guides:</strong> Inspect wear pad mounting and adjustment mechanisms</li>
                <li><strong>Load Chart Sensor Mounts:</strong> Verify boom angle and length sensor attachments</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Intermediate Section Inspection
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Intermediate sections experience both internal and external loading and require careful evaluation 
                of wear patterns:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Sliding Surfaces:</strong> Check wear on top, bottom, and side surfaces</li>
                <li><strong>Extension Chain/Cable:</strong> Inspect extension chains for wear, lubrication, and adjustment</li>
                <li><strong>Section Joints:</strong> Verify weld integrity at section transitions</li>
                <li><strong>Bearing Surfaces:</strong> Check wear pads and bearing strips for excessive wear</li>
                <li><strong>Internal Hardware:</strong> Inspect internal brackets and reinforcement plates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Fly Section (Final Section) Inspection
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The fly section extends the furthest and experiences the highest bending moments. Key inspection areas include:
              </p>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Component</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Critical Checks</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Acceptance Criteria</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Boom Head Structure</td>
                    <td className="border px-4 py-3">Weld integrity, load path verification</td>
                    <td className="border px-4 py-3">No visible cracks or deformation</td>
                    <td className="border px-4 py-3">NDT if cracks suspected</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Extension Stops</td>
                    <td className="border px-4 py-3">Contact surfaces, adjustment</td>
                    <td className="border px-4 py-3">Even contact, no damage</td>
                    <td className="border px-4 py-3">Replace if worn beyond limits</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Wear Pads</td>
                    <td className="border px-4 py-3">Thickness, adjustment, contact</td>
                    <td className="border px-4 py-3">Min thickness per manufacturer</td>
                    <td className="border px-4 py-3">Replace when at wear limits</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Side Frames</td>
                    <td className="border px-4 py-3">Structural integrity, wear patterns</td>
                    <td className="border px-4 py-3">No buckling or excessive wear</td>
                    <td className="border px-4 py-3">Repair or replace as needed</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Wear Pad Assessment and Replacement Criteria
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Wear pads are sacrificial components that protect the boom sections from metal-to-metal contact during 
                extension and retraction. Proper wear pad maintenance is critical for boom longevity and operational safety.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Wear Pad Types and Locations
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Top Wear Pads:</strong> Prevent metal contact on boom top surfaces during extension</li>
                <li><strong>Bottom Wear Pads:</strong> Support boom weight and prevent wear on bottom surfaces</li>
                <li><strong>Side Wear Pads:</strong> Guide boom sections and prevent lateral movement</li>
                <li><strong>Extension Stop Pads:</strong> Cushion impact when boom reaches full extension</li>
                <li><strong>Retraction Stop Pads:</strong> Prevent metal contact when boom retracts fully</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Wear Pad Inspection Measurements
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Measurement</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">New Pad</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Service Limit</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Replacement Threshold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Pad Thickness</td>
                    <td className="border px-4 py-3">0.125" (3.2mm)</td>
                    <td className="border px-4 py-3">0.060" (1.5mm)</td>
                    <td className="border px-4 py-3">0.040" (1.0mm)</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Contact Width</td>
                    <td className="border px-4 py-3">100% contact</td>
                    <td className="border px-4 py-3">75% contact</td>
                    <td className="border px-4 py-3">50% contact</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Edge Wear</td>
                    <td className="border px-4 py-3">Sharp edges</td>
                    <td className="border px-4 py-3">0.030" (0.8mm) radius</td>
                    <td className="border px-4 py-3">0.060" (1.5mm) radius</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Surface Condition</td>
                    <td className="border px-4 py-3">Smooth</td>
                    <td className="border px-4 py-3">Minor scoring</td>
                    <td className="border px-4 py-3">Deep grooves/tears</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Wear Pad Adjustment Procedures
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Proper wear pad adjustment ensures even contact and optimal boom operation:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Initial Setup:</strong> Retract boom fully and verify all sections are properly seated</li>
                <li><strong>Gap Measurement:</strong> Use feeler gauges to measure gaps between pads and boom sections</li>
                <li><strong>Adjustment Sequence:</strong> Adjust pads starting from base section to fly section</li>
                <li><strong>Contact Verification:</strong> Use marking compound to verify full contact patterns</li>
                <li><strong>Function Testing:</strong> Extend and retract boom to verify smooth operation</li>
                <li><strong>Final Documentation:</strong> Record all measurements and adjustments made</li>
              </ol>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Boom Alignment and Geometry Verification
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Proper boom alignment is essential for even load distribution and preventing premature wear. 
                Misalignment can cause binding, uneven wear pad contact, and potentially dangerous operational 
                conditions that affect load capacity and crane stability.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Alignment Measurement Procedures
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Boom alignment should be checked with the boom in various positions to identify any binding 
                or misalignment issues:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Baseline Measurements:</strong> Record boom geometry when fully retracted and level</li>
                <li><strong>Extension Tracking:</strong> Monitor alignment during extension and retraction cycles</li>
                <li><strong>Load Testing:</strong> Check alignment under various load conditions</li>
                <li><strong>Angular Positioning:</strong> Verify alignment at different boom angles</li>
                <li><strong>Temperature Effects:</strong> Consider thermal expansion effects on alignment</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Common Alignment Issues and Causes
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Symptom</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Likely Cause</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Inspection Points</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Correction Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Binding During Extension</td>
                    <td className="border px-4 py-3">Wear pad misalignment</td>
                    <td className="border px-4 py-3">Pad contact patterns</td>
                    <td className="border px-4 py-3">Adjust wear pad positions</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Uneven Wear Patterns</td>
                    <td className="border px-4 py-3">Boom section twist</td>
                    <td className="border px-4 py-3">Section straightness</td>
                    <td className="border px-4 py-3">Structural repair/replacement</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Excessive Extension Force</td>
                    <td className="border px-4 py-3">Tight wear pad adjustment</td>
                    <td className="border px-4 py-3">Hydraulic pressure</td>
                    <td className="border px-4 py-3">Loosen pad adjustments</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Load Block Drift</td>
                    <td className="border px-4 py-3">Boom head misalignment</td>
                    <td className="border px-4 py-3">Boom head geometry</td>
                    <td className="border px-4 py-3">Boom head realignment</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Precision Alignment Tools and Techniques
              </h3>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Laser Alignment Systems:</strong> Provide precise measurements for large booms</li>
                <li><strong>Dial Indicators:</strong> Measure small deflections and movements</li>
                <li><strong>String Line Methods:</strong> Traditional but effective for basic alignment checks</li>
                <li><strong>Digital Inclinometers:</strong> Verify boom section angles and relationships</li>
                <li><strong>3D Measurement Systems:</strong> Comprehensive geometry verification</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Hydraulic Extension Cylinder Inspection
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Extension cylinders provide the force to extend and retract boom sections, operating under high 
                pressure and experiencing significant side loads during crane operation. These cylinders require 
                specialized inspection procedures to ensure safe and reliable operation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Cylinder Structural Inspection Points
              </h3>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Cylinder Body:</strong> Check for dents, scratches, or corrosion that could damage seals</li>
                <li><strong>Rod Surface:</strong> Inspect chrome plating for wear, scratches, or pitting</li>
                <li><strong>Mounting Hardware:</strong> Verify pin conditions and bushing wear</li>
                <li><strong>Seal Areas:</strong> Check for external leakage and contamination</li>
                <li><strong>Pressure Ports:</strong> Inspect hydraulic connections and fittings</li>
                <li><strong>Rod End Threads:</strong> Verify thread condition and proper engagement</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Hydraulic Performance Testing
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Extension cylinders should be tested for both performance and leakage under load conditions:
              </p>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Test Parameter</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Specification</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Test Procedure</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Acceptance Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Extension Speed</td>
                    <td className="border px-4 py-3">Per manufacturer spec</td>
                    <td className="border px-4 py-3">Time full extension cycle</td>
                    <td className="border px-4 py-3">±15% of specification</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Holding Capacity</td>
                    <td className="border px-4 py-3">No drift under load</td>
                    <td className="border px-4 py-3">Hold extended position 5 minutes</td>
                    <td className="border px-4 py-3">No visible movement</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Internal Leakage</td>
                    <td className="border px-4 py-3">Minimal bypass</td>
                    <td className="border px-4 py-3">Pressure decay test</td>
                    <td className="border px-4 py-3">&lt;5% pressure loss/minute</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">External Leakage</td>
                    <td className="border px-4 py-3">No visible leaks</td>
                    <td className="border px-4 py-3">Visual inspection under pressure</td>
                    <td className="border px-4 py-3">No dripping or seepage</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Extension Chain and Cable System Inspection
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Extension chains or cables synchronize boom section movement and provide positive retraction force. 
                These components require regular inspection for wear and proper adjustment:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Chain Wear:</strong> Measure chain pitch elongation (replace if &gt;3% elongation)</li>
                <li><strong>Pin and Bushing Wear:</strong> Check for excessive side play in chain joints</li>
                <li><strong>Sprocket Wear:</strong> Inspect sprocket teeth for hooking or excessive wear</li>
                <li><strong>Chain Tension:</strong> Verify proper chain tension per manufacturer specifications</li>
                <li><strong>Lubrication:</strong> Ensure adequate lubrication of all chain components</li>
                <li><strong>Adjustment Mechanisms:</strong> Check chain tensioning hardware operation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Critical Pin and Bushing Evaluation
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Boom pins and bushings are critical load-bearing components that require careful inspection and 
                measurement. These components transfer all boom loads and must be maintained within strict 
                tolerances to ensure safe operation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Boom Heel Pin Inspection
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                The boom heel pins connect the boom to the upper works and carry the highest loads. Critical 
                measurements include:
              </p>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Pin Diameter:</strong> Measure at multiple points for wear and ovality</li>
                <li><strong>Bushing Internal Diameter:</strong> Check for enlargement or irregular wear</li>
                <li><strong>Clearance Calculation:</strong> Verify pin-to-bushing clearance within specifications</li>
                <li><strong>Surface Condition:</strong> Inspect for scoring, galling, or heat damage</li>
                <li><strong>Lubrication System:</strong> Verify grease fitting operation and lubrication flow</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Pin and Bushing Wear Limits
              </h3>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Component</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">New Dimension</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Service Limit</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Maximum Clearance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3">Boom Heel Pin (4")</td>
                    <td className="border px-4 py-3">4.000" ±0.002"</td>
                    <td className="border px-4 py-3">3.980" minimum</td>
                    <td className="border px-4 py-3">0.030" total</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Boom Heel Bushing</td>
                    <td className="border px-4 py-3">4.005" ±0.003"</td>
                    <td className="border px-4 py-3">4.020" maximum</td>
                    <td className="border px-4 py-3">0.030" total</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Extension Pin (3")</td>
                    <td className="border px-4 py-3">3.000" ±0.002"</td>
                    <td className="border px-4 py-3">2.985" minimum</td>
                    <td className="border px-4 py-3">0.020" total</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3">Extension Bushing</td>
                    <td className="border px-4 py-3">3.004" ±0.003"</td>
                    <td className="border px-4 py-3">3.015" maximum</td>
                    <td className="border px-4 py-3">0.020" total</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Extension Cylinder Pin Inspection
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Extension cylinder mounting pins experience high side loads and require frequent inspection:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Base End Pins:</strong> Check cylinder-to-boom attachment pins for wear</li>
                <li><strong>Rod End Pins:</strong> Inspect rod end mounting pins and bushings</li>
                <li><strong>Side Loading Effects:</strong> Look for evidence of bending or deflection</li>
                <li><strong>Retention Hardware:</strong> Verify proper installation of retaining hardware</li>
                <li><strong>Grease System:</strong> Test automatic lubrication system operation</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Documentation and Compliance Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Proper documentation of telescopic boom inspections is essential for regulatory compliance and 
                trend analysis. ASME B30.5 requires specific record-keeping that enables tracking of wear patterns 
                and prediction of maintenance needs.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Required Documentation Elements
              </h3>

              <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Inspector Qualification:</strong> Name, certification, and signature of qualified inspector</li>
                <li><strong>Inspection Date/Time:</strong> Complete date and time of inspection</li>
                <li><strong>Crane Identification:</strong> Serial number, model, and current location</li>
                <li><strong>Inspection Results:</strong> Detailed findings for each component inspected</li>
                <li><strong>Measurements:</strong> All dimensional measurements and wear assessments</li>
                <li><strong>Corrective Actions:</strong> Any repairs or adjustments performed</li>
                <li><strong>Next Inspection Due:</strong> Date for next required inspection</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Trending and Analysis
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Effective maintenance programs track inspection results over time to predict component replacement 
                needs and optimize maintenance schedules:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Wear Rate Calculation:</strong> Track component wear rates over time</li>
                <li><strong>Predictive Maintenance:</strong> Schedule replacements before failure occurs</li>
                <li><strong>Cost Optimization:</strong> Group related maintenance tasks to reduce downtime</li>
                <li><strong>Performance Monitoring:</strong> Track crane performance metrics and efficiency</li>
                <li><strong>Safety Trending:</strong> Identify patterns that could lead to safety issues</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Digitize Telescopic Boom Inspections</h3>
                <p className="text-white/90 mb-6">CraneCheck provides guided inspection workflows for telescopic boom cranes with automatic wear tracking, predictive maintenance alerts, and complete ASME B30.5 documentation.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Start Free Trial</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="telescopic-boom-crane-inspection-checklist" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}