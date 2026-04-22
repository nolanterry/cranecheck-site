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
  title: "Crane Counterweight Inspection: Verification, Mounting & Configuration Requirements",
  description: "Complete guide to crane counterweight inspection covering verification procedures, mounting bolt inspection, configuration charts, aftermarket counterweight risks, transport and installation safety, and ASME B30.5 requirements.",
  alternates: { canonical: "/blog/crane-counterweight-inspection" },
};

export default function CraneCounterweightInspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Counterweight Inspection: Verification, Mounting & Configuration Requirements",
    "description": "Complete guide to crane counterweight inspection covering verification procedures, mounting bolt inspection, configuration charts, aftermarket counterweight risks, transport and installation safety, and ASME B30.5 requirements.",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
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
      "@id": "https://cranecheck.co/blog/crane-counterweight-inspection"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Counterweight Inspection", "item": "https://cranecheck.co/blog/crane-counterweight-inspection" }
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
              <span className="text-xs text-gray-400">April 22, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Counterweight Inspection: Verification, Mounting &amp; Configuration Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to crane counterweight inspection covering weight verification procedures, mounting bolt inspection, configuration charts, aftermarket counterweight risks, transport and installation safety, and ASME B30.5 requirements.
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
                Counterweights are the foundation of crane stability. They balance the moment created by the load, boom, and jib to prevent the crane from tipping forward. Incorrect counterweight configuration &mdash; wrong amount, wrong placement, or improperly secured &mdash; invalidates the load chart and creates a tipping hazard that no operator skill can overcome. Multiple fatal crane tip-overs have been traced directly to missing or misidentified counterweights.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                ASME B30.5 (Mobile and Locomotive Cranes) requires that counterweight amount and configuration match the crane manufacturer&apos;s specifications for the load chart being used. OSHA 1926.1417(e)(1) requires operators to verify counterweight and ballast amounts before operation. Despite these requirements, counterweight errors remain a persistent cause of crane incidents.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Why Counterweight Verification Matters
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Crane load charts are calculated for specific counterweight configurations. A crane&apos;s rated capacity at any given radius assumes the correct counterweight amount is installed. Operating with insufficient counterweight &mdash; even one slab short &mdash; can reduce the crane&apos;s actual tipping capacity below the chart rating, creating an invisible hazard.
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Load chart dependency:</strong> Every load chart page specifies the counterweight configuration it applies to &mdash; changing counterweight changes which chart applies</li>
                <li><strong>Multiple configurations:</strong> Many cranes have several counterweight configurations (e.g., 20,000 lb, 40,000 lb, 60,000 lb) with different load charts for each</li>
                <li><strong>Transport vs. operating configuration:</strong> Counterweights are often removed or reduced for road transport; failure to reinstall all slabs after transport is a common error</li>
                <li><strong>LMI/RCI calibration:</strong> The load moment indicator must be programmed for the actual counterweight configuration &mdash; a mismatch between physical counterweight and LMI setting creates a false sense of security</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Counterweight Verification Procedures
              </h2>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Inspection Item</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">What to Verify</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Common Deficiencies</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">Slab count and weight markings</td>
                    <td className="border px-4 py-3">Each slab has a stamped or cast weight marking matching manufacturer specs</td>
                    <td className="border px-4 py-3">Worn markings, mixed manufacturer slabs, unmarked slabs</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">Total weight verification</td>
                    <td className="border px-4 py-3">Count slabs &times; individual slab weight = required total per load chart</td>
                    <td className="border px-4 py-3">Missing slabs after transport, incorrect count assumed</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">Mounting bolt condition</td>
                    <td className="border px-4 py-3">All mounting bolts present, proper grade, torqued to spec</td>
                    <td className="border px-4 py-3">Missing bolts, wrong grade substitution, loose from vibration</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">Slab stacking order</td>
                    <td className="border px-4 py-3">Slabs stacked in manufacturer-specified order and orientation</td>
                    <td className="border px-4 py-3">Slabs installed upside down or in wrong sequence</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">Counterweight tray/frame</td>
                    <td className="border px-4 py-3">Tray structure, guide pins, and retaining hardware intact</td>
                    <td className="border px-4 py-3">Cracked tray welds, bent guide pins, missing retainers</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">LMI configuration match</td>
                    <td className="border px-4 py-3">LMI/RCI counterweight setting matches actual installed amount</td>
                    <td className="border px-4 py-3">LMI set for full counterweight when partial is installed</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Aftermarket and Non-OEM Counterweight Risks
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Aftermarket counterweights &mdash; slabs manufactured by someone other than the crane OEM &mdash; present significant inspection challenges. While not inherently prohibited, they require careful verification:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Weight accuracy:</strong> Aftermarket slabs may not weigh exactly what they claim &mdash; concrete-filled counterweights can absorb water and change weight, or have voids that reduce weight below stamped values</li>
                <li><strong>Dimensional compatibility:</strong> Non-OEM slabs may not fit the counterweight tray precisely, allowing movement during crane operation that creates dynamic loading not accounted for in the load chart</li>
                <li><strong>Mounting bolt pattern:</strong> Bolt patterns must match exactly &mdash; slabs that require adapter plates or modified mounting hardware may not transfer forces as designed</li>
                <li><strong>Manufacturer position:</strong> Most crane manufacturers do not approve aftermarket counterweights and may void the crane&apos;s certification if non-OEM counterweights are used</li>
                <li><strong>OSHA perspective:</strong> OSHA 1926.1433 requires that crane modifications (which may include non-OEM counterweights) have written approval from the manufacturer or a registered professional engineer</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Transport and Installation Safety
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Counterweight transport:</strong> Slabs must be properly secured on transport vehicles &mdash; unsecured counterweight slabs on flatbed trailers have fallen during transit causing fatal roadway incidents</li>
                <li><strong>Installation sequence:</strong> Follow the manufacturer&apos;s counterweight installation sequence exactly &mdash; installing slabs in the wrong order can create unstable intermediate conditions</li>
                <li><strong>Assist crane requirements:</strong> Large counterweight slabs (5,000&ndash;20,000+ lbs each) require an assist crane for installation &mdash; rigging for counterweight installation must be appropriate for the slab weight and lifting points</li>
                <li><strong>Pinch point hazards:</strong> Counterweight installation creates severe pinch and crush hazards &mdash; personnel must never position themselves between the counterweight slab and the crane structure during installation</li>
                <li><strong>Post-installation verification:</strong> After all counterweights are installed, verify the total count, mounting bolt torque, and LMI configuration before operating the crane</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Configuration Charts and Load Chart Cross-Reference
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Crane manufacturers provide counterweight configuration charts that map counterweight amounts to specific load chart pages. Inspectors must verify that the physical counterweight matches the load chart the operator is using. Common configurations include:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>On-rubber vs. on-outriggers:</strong> Some cranes use different counterweight amounts for pick-and-carry (on-rubber) operations vs. stationary (on-outriggers) operations</li>
                <li><strong>Boom length-dependent:</strong> Certain crane models require different counterweight configurations depending on the boom length being used</li>
                <li><strong>Removable counterweight vs. carbody ballast:</strong> Distinguish between removable upper counterweight slabs and lower carbody ballast &mdash; both must be verified</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Counterweight verification is a critical pre-operation inspection requirement &mdash; incorrect counterweight invalidates the load chart and creates invisible tipping hazards</li>
                <li>Every counterweight slab must be counted, weight markings verified, and mounting bolts inspected for proper torque and grade</li>
                <li>LMI/RCI counterweight settings must match the actual physical counterweight installed &mdash; a mismatch provides false capacity readings</li>
                <li>Aftermarket counterweights require careful weight and dimensional verification and may void manufacturer certification</li>
                <li>Counterweight transport and installation are high-hazard operations with severe pinch/crush risks that require proper rigging and assist crane support</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Track Counterweight Configurations Digitally</h3>
                <p className="text-white/90 mb-6">CraneCheck provides digital counterweight verification checklists with configuration tracking, mounting bolt torque documentation, LMI calibration records, and load chart cross-reference tools for every crane in your fleet.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-counterweight-inspection" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
