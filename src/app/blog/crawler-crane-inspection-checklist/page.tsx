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
  title: "Crawler Crane Inspection Checklist: Complete Guide for Compliance",
  description:
    "A comprehensive crawler crane inspection checklist covering tracks, undercarriage, boom sections, hydraulics, electrical, and operator cab — aligned with OSHA and ANSI/ASME B30.5 requirements.",
  alternates: { canonical: "/blog/crawler-crane-inspection-checklist" },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crawler Crane Inspection Checklist: Complete Guide for Compliance",
    "description": "A comprehensive crawler crane inspection checklist covering tracks, undercarriage, boom sections, hydraulics, electrical, and operator cab — aligned with OSHA and ANSI/ASME B30.5 requirements.",
    "datePublished": "2026-04-19",
    "dateModified": "2026-04-19",
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
      "@id": "https://cranecheck.co/blog/crawler-crane-inspection-checklist"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crawler Crane Inspection Checklist", "item": "https://cranecheck.co/blog/crawler-crane-inspection-checklist" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Inspection</span>
              <span className="text-xs text-gray-400">April 19, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Crawler Crane Inspection Checklist: Complete Guide for Compliance
            </h1>
            <AuthorByline name="Nolan Terry" slug="nolan-terry" role="Founder & CEO" />
            <p className="text-lg text-gray-300 max-w-3xl">
              Crawler cranes have unique inspection requirements driven by their undercarriage, travel systems, and lattice boom configurations. This checklist covers everything from track shoes to boom tip sheaves.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              Crawler cranes are among the most complex pieces of lifting equipment to inspect. Unlike mobile hydraulic cranes that sit on outriggers during operation, crawlers operate on continuous tracks, have lattice boom systems with dozens of individual pins and connections, and often work in demanding conditions for extended periods without returning to a shop.
            </p>

            <p>
              This guide provides a systematic inspection checklist aligned with OSHA 29 CFR 1926.1412 (shift inspections), 29 CFR 1926.1413 (periodic/annual inspections), and ASME B30.5 (Mobile and Locomotive Cranes). Whether you&apos;re performing a pre-shift walk-around or an annual comprehensive inspection, this checklist ensures nothing gets missed.
            </p>

            <h2>Track and Undercarriage Inspection</h2>

            <p>
              The undercarriage is where crawler crane inspections diverge most significantly from other crane types. Track system condition directly affects stability, travel safety, and levelness during lifting operations.
            </p>

            <h3>Track Shoes and Pads</h3>
            <ul>
              <li>Inspect track shoes for cracks, bending, or excessive wear</li>
              <li>Check track pad bolts for tightness — missing or loose bolts are a common finding</li>
              <li>Look for worn or missing grousers (the raised ridges on track shoes that provide traction)</li>
              <li>Verify track shoe width matches manufacturer specifications for the ground conditions</li>
            </ul>

            <h3>Track Chain and Links</h3>
            <ul>
              <li>Check track chain tension — excessively loose tracks can jump sprockets during travel</li>
              <li>Inspect chain link pins for wear, elongation, and proper retention</li>
              <li>Look for cracked or broken track links</li>
              <li>Check for excessive chain stretch (measured by comparing pin-to-pin distance against manufacturer specs)</li>
            </ul>

            <h3>Idlers, Rollers, and Sprockets</h3>
            <ul>
              <li>Inspect front idlers for wear, cracking, and proper alignment</li>
              <li>Check track rollers (top and bottom) for seizure, leaks, and excessive wear</li>
              <li>Inspect drive sprockets for tooth wear and cracking</li>
              <li>Verify sprocket guard condition and attachment</li>
            </ul>

            <h3>Track Frame</h3>
            <ul>
              <li>Inspect track frames for cracks, particularly at weld joints and high-stress areas</li>
              <li>Check track frame-to-carbody connection bolts and pins</li>
              <li>Verify track frame alignment — misaligned frames cause uneven wear and tracking issues</li>
              <li>Inspect track adjustment mechanisms (hydraulic cylinders or grease-type tensioners)</li>
            </ul>

            <h2>Carbody and Upper Structure</h2>

            <h3>Swing System</h3>
            <ul>
              <li>Inspect the swing bearing (turntable) for excessive play, unusual noise, and gear tooth wear</li>
              <li>Check swing bearing bolts for tightness — follow manufacturer torque specifications</li>
              <li>Inspect swing gear teeth for wear, pitting, and cracking</li>
              <li>Verify swing brake function — the crane must hold position when the swing brake is engaged</li>
              <li>Check swing motor and reduction gear for leaks and unusual noise</li>
            </ul>

            <h3>Counterweight</h3>
            <ul>
              <li>Verify correct counterweight configuration matches the load chart being used</li>
              <li>Inspect counterweight mounting hardware — pins, bolts, and retaining devices</li>
              <li>Check for cracks in counterweight blocks, particularly cast iron blocks</li>
              <li>Verify counterweight tray or support structure integrity</li>
            </ul>

            <h2>Boom System Inspection</h2>

            <p>
              Crawler cranes typically use lattice boom systems that are assembled from individual sections. Each section, pin, and connection point requires inspection.
            </p>

            <h3>Boom Sections</h3>
            <ul>
              <li>Inspect all boom chord members for straightness — any bowing or deformation is cause for removal from service</li>
              <li>Check lacings (diagonal and horizontal bracing members) for cracks, bends, or missing members</li>
              <li>Inspect welds at lacing-to-chord connections for cracking</li>
              <li>Look for corrosion, particularly at the base section and any sections frequently stored outdoors</li>
              <li>Verify boom section identification markings are legible and match the crane&apos;s boom configuration records</li>
            </ul>

            <h3>Boom Pins and Connections</h3>
            <ul>
              <li>Inspect section connection pins for wear, elongation of pin holes, and proper retention (keepers, cotter pins, or snap rings)</li>
              <li>Check boom foot pins at the boom-to-carbody connection</li>
              <li>Verify all pin retaining devices are in place and secure</li>
              <li>Inspect boom pendants (suspension ropes) for wire breaks, corrosion, and proper termination</li>
            </ul>

            <h3>Boom Tip and Sheaves</h3>
            <ul>
              <li>Inspect boom tip sheaves for groove wear, cracking, and bearing condition</li>
              <li>Check sheave guards and rope keepers</li>
              <li>Verify anti-two-block device installation and function</li>
              <li>Inspect boom tip structural members and welds</li>
            </ul>

            <h2>Wire Rope Inspection</h2>

            <p>
              Crawler cranes use multiple wire ropes — hoist ropes, boom hoist ropes, and pendants. Each has specific inspection criteria per ASME B30.5 Chapter 5-2.4:
            </p>

            <ul>
              <li><strong>Broken wires:</strong> Count broken wires per lay length and per rope diameter. Removal criteria differ based on rope construction — refer to ASME B30.5 tables</li>
              <li><strong>Diameter reduction:</strong> Measure rope diameter and compare to original (nominal) diameter. Reduction exceeding manufacturer limits requires rope replacement</li>
              <li><strong>Corrosion:</strong> Both external and internal. Pitting on outer wires may indicate more severe internal corrosion</li>
              <li><strong>Distortion:</strong> Kinking, birdcaging, core protrusion, crushing, or flattening</li>
              <li><strong>Heat damage:</strong> Discoloration from exposure to heat or electrical contact</li>
              <li><strong>End connections:</strong> Inspect wedge sockets, spelter sockets, and swaged fittings for proper installation and wear</li>
            </ul>

            <h2>Hydraulic System</h2>

            <ul>
              <li>Check hydraulic fluid levels in all reservoirs</li>
              <li>Inspect hoses, fittings, and hard lines for leaks, abrasion, and damage</li>
              <li>Check hydraulic cylinders (boom hoist, outrigger, etc.) for seal leaks and rod scoring</li>
              <li>Inspect hydraulic filters — note last change date and condition indicators</li>
              <li>Verify hydraulic pressure gauges are functional</li>
              <li>Check for contamination — cloudy or discolored fluid indicates water or particulate contamination</li>
            </ul>

            <h2>Electrical System</h2>

            <ul>
              <li>Inspect main power cables and connections</li>
              <li>Check control system wiring for damage, exposure, and proper routing</li>
              <li>Verify all indicator lights and warning systems function</li>
              <li>Inspect slip rings and collector assemblies (if equipped)</li>
              <li>Check lighting — cab lights, boom lights, and obstruction lighting</li>
              <li>Verify load moment indicator (LMI) / rated capacity indicator (RCI) calibration and function</li>
              <li>Test anti-two-block warning and lockout systems</li>
            </ul>

            <h2>Operator Cab</h2>

            <ul>
              <li>Verify all controls are labeled and function correctly</li>
              <li>Check seat, seat belt, and ROPS/FOPS structure</li>
              <li>Inspect windows and mirrors — must provide adequate visibility</li>
              <li>Verify fire extinguisher is present, accessible, charged, and within inspection date</li>
              <li>Check cab mounting — loose cab mounts affect control precision and operator fatigue</li>
              <li>Verify the load chart is present, legible, and matches the crane&apos;s current configuration</li>
              <li>Check operator manual/handbook availability</li>
              <li>Inspect HVAC system — operator comfort directly impacts alertness and safety</li>
            </ul>

            <h2>Travel System</h2>

            <ul>
              <li>Test travel controls in both forward and reverse</li>
              <li>Verify travel brakes hold on grade</li>
              <li>Check travel alarm (backup alarm) function</li>
              <li>Inspect travel motors and final drives for leaks and unusual noise</li>
              <li>Verify travel speed controls function properly</li>
              <li>Test independent track operation (counter-rotation for turning)</li>
            </ul>

            <h2>OSHA and ANSI Requirements Specific to Crawlers</h2>

            <p>
              While general crane inspection requirements under{" "}
              <Link href="/blog/29-cfr-1926-1412-explained">29 CFR 1926.1412</Link>{" "}
              apply to all crane types, crawler cranes have additional considerations:
            </p>

            <ul>
              <li><strong>Ground conditions:</strong> Per OSHA 29 CFR 1926.1402, the crane must be on a firm, adequately drained surface that can support the crane and load. For crawlers, this means assessing ground bearing pressure across the entire track footprint, not just at outrigger points</li>
              <li><strong>Assembly/disassembly:</strong> Crawler crane boom assembly and disassembly must follow manufacturer procedures per 29 CFR 1926.1403-1406. Inspection of boom sections before assembly is critical</li>
              <li><strong>ASME B30.5:</strong> This is the primary consensus standard for crawler cranes, covering inspection criteria, maintenance requirements, and operational practices</li>
              <li><strong>Frequent vs. periodic inspections:</strong> ASME B30.5 distinguishes between frequent inspections (daily to monthly) and periodic inspections (1-12 months based on service). Annual inspections by a qualified inspector are the minimum for most operations</li>
            </ul>

            <h2>Documentation and Record-Keeping</h2>

            <p>
              Every inspection must be documented. For crawler cranes, documentation should include:
            </p>

            <ul>
              <li>Crane identification (make, model, serial number, owner/fleet number)</li>
              <li>Date, time, and type of inspection (shift, monthly, annual)</li>
              <li>Inspector name and qualifications</li>
              <li>Boom configuration at time of inspection</li>
              <li>Specific findings by system/component</li>
              <li>Deficiency severity ratings and recommended corrective actions</li>
              <li>Follow-up timeline for deficiency correction</li>
              <li>Photographic documentation of significant findings</li>
            </ul>

            <p>
              OSHA requires that annual/comprehensive inspection records be maintained for the life of the crane. Shift inspection records should be retained per company policy but at minimum until the next annual inspection. CraneCheck digitizes this entire process — every checklist item, photo, and deficiency is captured in a searchable, audit-ready format.
            </p>

            <div className="bg-brand-light border border-brand/20 rounded-xl p-8 mt-12 not-prose">
              <h3 className="text-xl font-bold text-navy mb-2">Ready to modernize your crane inspections?</h3>
              <p className="text-gray-600 mb-4">CraneCheck helps crane companies digitize inspections, track compliance, and pass audits with confidence.</p>
              <Link href="/demo" className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors">Book a Demo →</Link>
            </div>
          </div>
        </article>
        <RelatedPosts currentSlug="crawler-crane-inspection-checklist" />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
