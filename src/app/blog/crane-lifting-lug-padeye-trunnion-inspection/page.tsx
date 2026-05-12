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
  title: "Crane Lifting Lug, Padeye & Trunnion Inspection: Engineered Attachment Points",
  description:
    "Complete guide to inspecting engineered lifting attachments — lifting lugs, padeyes, trunnions, and weld-on lifting points. Covers design verification, weld inspection, load rating, NDT requirements, and ASME BTH-1 standards.",
  alternates: { canonical: "/blog/crane-lifting-lug-padeye-trunnion-inspection" },
};

export default function CraneLiftingLugPadeyeInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Lifting Lug, Padeye & Trunnion Inspection: Engineered Attachment Points",
    "description": "Complete guide to inspecting engineered lifting attachments — lifting lugs, padeyes, trunnions, and weld-on lifting points. Covers design verification, weld inspection, load rating, NDT requirements, and ASME BTH-1 standards.",
    "datePublished": "2026-05-12",
    "dateModified": "2026-05-12",
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
      "@id": "https://cranecheck.co/blog/crane-lifting-lug-padeye-trunnion-inspection"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Lifting Lug & Padeye Inspection", "item": "https://cranecheck.co/blog/crane-lifting-lug-padeye-trunnion-inspection" }
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
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Rigging</span>
              <span className="text-xs text-gray-400">May 12, 2026</span>
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Crane Lifting Lug, Padeye &amp; Trunnion Inspection: Engineered Attachment Points
            </h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder &amp; Lead Inspector" />
            <p className="text-lg text-gray-300 max-w-3xl">
              Engineered lifting attachments are the critical link between the crane&#8217;s rigging and the load. This guide covers inspection criteria for lifting lugs, padeyes, trunnions, and weld-on lifting points including design verification, weld quality assessment, NDT requirements, and ASME BTH-1 standards.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <h2>Types of Engineered Lifting Attachments</h2>

            <p>
              Engineered lifting attachments are purpose-designed connection points that transfer crane loads into the item being lifted. Unlike general rigging hardware (shackles, hooks, slings), these are typically fabricated onto or into the load itself and are specific to that load&#8217;s weight, center of gravity, and structural configuration. Getting the attachment wrong means everything downstream &#8212; the rigging, the crane, the lift plan &#8212; is compromised.
            </p>

            <h3>Lifting Lugs</h3>

            <p>
              Lifting lugs are flat plate attachments with a hole for a shackle pin, welded to the load&#8217;s structural members. They are the most common engineered attachment for structural steel, vessels, equipment skids, and prefabricated assemblies. Lugs may be permanently attached (designed to remain on the load after installation) or temporary (removed after placement). Design varies from simple flat-plate tabs to reinforced, gusseted assemblies for heavy loads.
            </p>

            <h3>Padeyes</h3>

            <p>
              Padeyes are similar to lifting lugs but typically refer to heavier, more robust attachment points designed for repeated use &#8212; common on marine structures, offshore equipment, and heavy industrial components. Padeyes are usually thicker plate with larger pin holes and may include cheek plates (doubler plates) for additional bearing area. The distinction between &#8220;lifting lug&#8221; and &#8220;padeye&#8221; is not always clear in practice; the terms are often used interchangeably, though padeyes generally imply a more engineered, higher-capacity design.
            </p>

            <h3>Trunnions</h3>

            <p>
              Trunnions are cylindrical protrusions &#8212; essentially short shafts &#8212; that extend from the load and serve as lifting/rotation points. Vessels, columns, and large pipe sections commonly use trunnions for both lifting and upending operations. The rigging engages the trunnion with a choker hitch, sling cradle, or purpose-built trunnion lifter. Trunnions are welded or bolted to the load structure and must be designed for both the vertical lift load and any rotational forces that occur during upending.
            </p>

            <h3>Weld-On Lifting Points</h3>

            <p>
              Various proprietary weld-on lifting point products are available that provide swiveling or articulating attachment points. These products (from manufacturers like RUD, Codipro, and YOK) offer advantages over simple plate lugs: they accommodate variable sling angles, reduce side loading on the connection, and are typically rated and proof-tested by the manufacturer. However, the weld attaching them to the load is field-installed and must meet the same quality standards as any other structural lift attachment weld.
            </p>

            <h2>ASME BTH-1: Design of Below-the-Hook Lifting Devices</h2>

            <p>
              ASME BTH-1 is the primary standard governing the design of lifting attachments and below-the-hook lifting devices. It establishes design categories based on service life and loading frequency, minimum design factors, material requirements, welding requirements, and proof testing criteria.
            </p>

            <h3>Design Categories</h3>

            <p>
              BTH-1 defines two design categories that affect the required design factor: Design Category A (limited service, less than 20,000 load cycles) and Design Category B (unlimited service, 20,000 to 100,000+ cycles). Most construction lifting attachments fall into Category A; permanent lifting points on equipment that will be lifted repeatedly throughout its service life should be designed to Category B.
            </p>

            <h3>Design Factors</h3>

            <p>
              The minimum design factor for structural members in BTH-1 is 2.0 based on yield strength and 3.0 based on ultimate strength for Design Category A. For Design Category B, the fatigue life must also be evaluated. These factors apply to the lug plate, pin, welds, and the base metal in the heat-affected zone of the weld. The design factor provides margin for dynamic loading, impact, material variability, and fabrication tolerances &#8212; but it does not substitute for proper engineering analysis.
            </p>

            <h2>Pre-Lift Inspection Requirements</h2>

            <p>
              Every lifting attachment should be inspected before each use. This is a pre-lift inspection distinct from periodic detailed inspections, and it should be performed by the rigger attaching the slings to the load. The competent person supervising the lift should verify that the pre-lift inspection was performed.
            </p>

            <h3>Visual Inspection Checklist</h3>

            <p>
              <strong>Identification:</strong> Verify the lifting attachment has a load rating marked or documented. Compare the rated capacity with the actual sling load at the planned sling angle. If no rating is visible, the attachment must be evaluated by a qualified engineer before use.
            </p>

            <p>
              <strong>Weld condition:</strong> Visually inspect all welds for cracks, undercut, porosity, incomplete fusion, and weld profile deficiencies. Pay particular attention to the toe of the weld (the transition between weld metal and base metal) &#8212; this is where fatigue cracks initiate in most lug failures. Look for any evidence that the weld has been ground, repaired, or modified since original fabrication.
            </p>

            <p>
              <strong>Plate condition:</strong> Check lug plates for bending, distortion, elongation of the pin hole, and cracking at the pin hole radius. Bent or distorted lugs indicate previous overloading or side loading and must be evaluated before reuse.
            </p>

            <p>
              <strong>Pin hole condition:</strong> Measure pin hole diameter if wear is suspected. Elongated or wallowed-out pin holes reduce the bearing area between the shackle pin and the lug, concentrating stress and reducing the effective capacity. Maximum pin hole clearance is typically limited to 1/16 inch larger than the pin diameter for most designs.
            </p>

            <p>
              <strong>Corrosion:</strong> Assess surface corrosion on both the lug and the surrounding base metal. Surface rust is generally cosmetic; deep pitting that reduces plate thickness below the minimum design thickness is a structural concern.
            </p>

            <h2>Weld Inspection for Lifting Attachments</h2>

            <p>
              Welds on lifting attachments are structural and must meet the requirements of the applicable code &#8212; typically AWS D1.1 (structural steel welding) or the specific welding requirements called out in the engineering drawings. The consequences of weld failure on a lifting lug are immediate and severe: if the lug separates from the load during a lift, the load falls.
            </p>

            <h3>Critical Weld Areas</h3>

            <p>
              The most failure-prone weld locations on lifting lugs are: the fillet weld at the base of the lug plate where it connects to the load structure, the weld at the transition between the lug plate and any gusset or stiffener plates, and corner wraps where the weld changes direction around the end of the lug plate. These areas experience the highest stress concentrations and are the most susceptible to fatigue cracking.
            </p>

            <h3>Non-Destructive Testing (NDT)</h3>

            <p>
              NDT should be performed on lifting attachment welds based on the load criticality and the design standard requirements. Common NDT methods for lifting lug welds include:
            </p>

            <p>
              <strong>Magnetic Particle Testing (MT):</strong> The most practical method for surface and near-surface crack detection on lug welds. MT can detect cracks that are invisible to the naked eye, including fatigue cracks at the weld toe that may be only a few millimeters long. All critical lifting attachment welds should receive MT at fabrication and periodically in service.
            </p>

            <p>
              <strong>Ultrasonic Testing (UT):</strong> Used for detecting subsurface defects in full-penetration welds and for measuring plate thickness in corroded areas. UT is particularly valuable for evaluating trunnion-to-shell welds on pressure vessels where the weld is a full-penetration joint that cannot be assessed visually from one side.
            </p>

            <p>
              <strong>Dye Penetrant Testing (PT):</strong> An alternative to MT for non-ferromagnetic materials (stainless steel, aluminum) and for use in areas where MT equipment cannot be deployed. Less sensitive than MT for very fine cracks but adequate for most field inspection applications.
            </p>

            <h2>Trunnion-Specific Inspection</h2>

            <p>
              Trunnions present unique inspection challenges because they are typically loaded in combined bending and shear during lifting, and they experience rotational forces during upending operations that simple lifting lugs do not see.
            </p>

            <h3>Trunnion Weld Inspection</h3>

            <p>
              The weld attaching a trunnion to the vessel or structure is almost always a full-penetration weld with a fillet cap. This weld is the most critical element &#8212; it carries the entire load in a relatively small cross-section. UT examination of the weld root should be performed at fabrication and periodically during service. MT of the weld surface and the heat-affected zone should be performed before each critical lift.
            </p>

            <h3>Trunnion Surface Condition</h3>

            <p>
              The trunnion shaft surface where the sling bears should be smooth and free of gouges, weld spatter, and sharp edges that could damage the sling. Deep gouges or score marks from previous sling contact may act as stress risers. Surface hardness should be consistent &#8212; localized hard spots (from arc strikes or localized heating) can initiate fatigue cracks under cyclic loading.
            </p>

            <h3>Trunnion Bending Assessment</h3>

            <p>
              Trunnions that have been used for upending operations should be inspected for permanent bending deformation. Measure straightness along the trunnion length &#8212; any visible bow indicates the trunnion has been loaded beyond its yield capacity at some point and should be evaluated by an engineer before reuse. Even small permanent deformation changes the stress distribution in the trunnion-to-shell weld.
            </p>

            <h2>Load Rating Verification</h2>

            <p>
              Every engineered lifting attachment should have a documented load rating based on engineering analysis. The rating may be stamped on the attachment, documented on the engineering drawings, or listed in a lifting device register. During inspection, verify that:
            </p>

            <p>
              The rated capacity is legible and matches the documented engineering analysis. The load rating accounts for the actual sling angle &#8212; a lug rated for a vertical load may be significantly derated when loaded at an angle. The design factor meets the requirements of the applicable standard (typically BTH-1, the project specification, or the owner&#8217;s lifting standard). The attachment has not been modified, repaired, or re-welded since the original engineering was performed &#8212; any modification invalidates the original rating until re-evaluated.
            </p>

            <h2>Common Failure Modes</h2>

            <p>
              <strong>Weld toe fatigue cracking:</strong> The most common failure mode for welded lifting lugs. Fatigue cracks initiate at the weld toe (the notch between the weld surface and the base metal) and propagate through the base metal or weld throat until the remaining cross-section can no longer support the load. This can occur well below the rated static capacity if the lug has been subjected to cyclic loading.
            </p>

            <p>
              <strong>Lamellar tearing:</strong> Occurs in thick plate when through-thickness stresses from welding cause the plate to separate along internal planes (inclusions, laminations). This is a fabrication defect that may not be visible externally but weakens the attachment significantly. UT of the base plate in the weld zone can detect lamellar tearing.
            </p>

            <p>
              <strong>Pin hole bearing failure:</strong> The pin hole elongates under repeated loading, eventually reducing the bearing area to the point where the pin can pull through the lug. This is a gradual failure mode that should be caught by routine dimensional inspection.
            </p>

            <p>
              <strong>Side loading:</strong> Lifting lugs are designed for loads applied in the plane of the plate. Side loads (perpendicular to the plate) create bending in the lug plate and out-of-plane loading on the welds that can exceed capacity at relatively low forces. This is one of the most common causes of lifting lug failure on construction sites.
            </p>

            <h2>Documentation Requirements</h2>

            <p>
              Lifting attachment inspection records should include: attachment identification (drawing number, piece mark, or serial number), type and location on the load, rated capacity and basis (drawing reference, engineering calculation reference), visual inspection results, NDT results (with NDT technician certification level and procedure reference), dimensional measurements (pin hole diameter, plate thickness, weld size), photographs of any deficiencies found, and disposition (acceptable for use, requires repair, or must be replaced).
            </p>

            <p>
              For reusable lifting attachments (permanent padeyes on equipment, trunnions on vessels), maintain a service history log documenting each lift: date, load lifted, sling configuration, and any observations. This creates a fatigue loading history that an engineer can use to assess remaining life.
            </p>

            <p>
              <Link href="/">CraneCheck</Link> provides standardized inspection templates for engineered lifting attachments with photo documentation, measurement tracking, and deficiency management &#8212; ensuring that every critical lifting point in your inventory is inspected, documented, and traceable.
            </p>
          </div>
        </article>
        <div className="max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="crane-lifting-lug-padeye-trunnion-inspection" />
        </div>
      </main>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
