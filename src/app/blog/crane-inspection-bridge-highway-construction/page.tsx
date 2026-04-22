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
  title: "Crane Inspection for Bridge & Highway Construction: DOT, FHWA & State Requirements",
  description: "Complete guide to crane inspection for bridge and highway construction covering DOT and FHWA requirements, over-water lifts, traffic control during crane operations, state DOT variations, critical picks near traffic, and permit requirements.",
  alternates: { canonical: "/blog/crane-inspection-bridge-highway-construction" },
};

export default function CraneInspectionBridgeHighwayConstructionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Inspection for Bridge & Highway Construction: DOT, FHWA & State Requirements",
    "description": "Complete guide to crane inspection for bridge and highway construction covering DOT and FHWA requirements, over-water lifts, traffic control during crane operations, state DOT variations, critical picks near traffic, and permit requirements.",
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
      "@id": "https://cranecheck.co/blog/crane-inspection-bridge-highway-construction"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Inspection for Bridge & Highway Construction", "item": "https://cranecheck.co/blog/crane-inspection-bridge-highway-construction" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Compliance</span>
              <span className="text-xs text-gray-400">April 22, 2026</span>
              <span className="text-xs text-gray-400">&middot;</span>
              <span className="text-xs text-gray-400">14 min read</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Crane Inspection for Bridge &amp; Highway Construction: DOT, FHWA &amp; State Requirements
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Complete guide to crane inspection requirements for bridge and highway construction projects, including DOT and FHWA crane requirements, over-water lifts, traffic control during crane operations, state DOT variations, and permit requirements.
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
                Bridge and highway construction crane operations face a unique regulatory environment where OSHA requirements intersect with Federal Highway Administration (FHWA) guidelines, state Department of Transportation (DOT) specifications, and the Manual on Uniform Traffic Control Devices (MUTCD). Crane work adjacent to or over live traffic, over navigable waterways, and on active roadways creates hazards not found on typical building construction sites.
              </p>

              <p className="text-gray-700 mb-4 leading-relaxed">
                State DOT contracts frequently impose crane inspection and documentation requirements that exceed OSHA minimums. Understanding which authority has jurisdiction &mdash; and where requirements stack on top of each other &mdash; is essential for contractors working on publicly funded infrastructure projects.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Regulatory Framework: Who Governs What
              </h2>

              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr>
                    <th className="bg-navy text-white px-4 py-3 text-left">Authority</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Jurisdiction</th>
                    <th className="bg-navy text-white px-4 py-3 text-left">Key Crane Requirements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">OSHA (29 CFR 1926 Subpart CC)</td>
                    <td className="border px-4 py-3">All crane operations on construction sites</td>
                    <td className="border px-4 py-3">Inspection frequency, operator certification, signal persons, lift planning</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">FHWA</td>
                    <td className="border px-4 py-3">Federal-aid highway projects</td>
                    <td className="border px-4 py-3">Quality assurance, contractor safety programs, work zone safety</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">State DOT</td>
                    <td className="border px-4 py-3">State-funded and federal-aid highway projects in state</td>
                    <td className="border px-4 py-3">Often exceeds OSHA: specific crane plan submittals, third-party inspection, traffic control requirements</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">USCG / Army Corps</td>
                    <td className="border px-4 py-3">Work over navigable waterways</td>
                    <td className="border px-4 py-3">Waterway permits, navigation clearance, barge crane stability requirements</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-3 font-semibold">FAA</td>
                    <td className="border px-4 py-3">Crane operations near airports or above 200 ft AGL</td>
                    <td className="border px-4 py-3">FAA Form 7460-1 notification, obstruction lighting</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                State DOT Crane Requirements: Common Specifications
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Most state DOTs include crane-specific provisions in their Standard Specifications for Highway Construction. While details vary by state, common requirements include:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Crane lift plan submittals:</strong> Many states require formal crane lift plans submitted to the engineer of record for approval before critical lifts &mdash; particularly for girder erection, precast segment placement, and over-traffic lifts</li>
                <li><strong>Third-party annual inspection:</strong> Several state DOTs require current third-party annual inspection certificates (often within the past 12 months) for any crane working on DOT projects, regardless of OSHA requirements</li>
                <li><strong>Pre-lift meetings:</strong> Mandatory pre-lift meetings with DOT inspectors present for critical picks involving girder erection or lifts over active traffic lanes</li>
                <li><strong>Crane operator qualification documentation:</strong> NCCCO or equivalent certification documentation filed with the DOT project office before crane operations begin</li>
                <li><strong>Ground condition certification:</strong> Geotechnical engineer certification of bearing capacity at crane setup locations, particularly on bridge approach embankments</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Over-Water Lift Requirements
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                Bridge construction frequently involves crane operations on barges over waterways. Over-water lifts introduce stability variables not present on solid ground:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Barge crane stability analysis:</strong> A marine engineer must verify barge stability with the crane at maximum operating radius and load, accounting for tidal changes, current, wind, and passing vessel wake</li>
                <li><strong>Load charts for marine operations:</strong> Standard land-based load charts do not apply on barges &mdash; a marine surveyor or the crane manufacturer must provide de-rated capacities accounting for vessel list and trim</li>
                <li><strong>Spud barge vs. anchored barge:</strong> Spud barges (pilings through the barge) provide more stability than anchor barges; the barge type affects the crane&apos;s allowable capacity</li>
                <li><strong>USCG navigation permits:</strong> Required for crane operations that may impede navigable waterways; the crane boom swing radius over the waterway must be defined</li>
                <li><strong>Emergency response plan:</strong> Must include man-overboard procedures, swift-water rescue capability, and communication with marine traffic control</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Traffic Control During Crane Operations
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                MUTCD Chapter 6 and FHWA work zone guidelines govern traffic control when crane operations occur adjacent to or over active traffic lanes. Key requirements include:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Crane swing radius over traffic:</strong> Most state DOTs prohibit loads from traveling over open traffic lanes &mdash; lanes beneath the load path must be closed with positive protection (jersey barriers, not cones)</li>
                <li><strong>Lane closure permits:</strong> Specific lane closure permits tied to crane operation hours, with defined setup and teardown windows</li>
                <li><strong>Night work requirements:</strong> Many DOTs mandate crane operations during off-peak hours (night/weekend) when traffic lanes must be closed; additional lighting and visibility requirements apply</li>
                <li><strong>Temporary traffic control plans (TTCPs):</strong> Crane-specific TTCPs showing boom swing radius, load path, outrigger footprint relative to travel lanes, and required closure areas</li>
                <li><strong>Overhead clearance:</strong> Minimum 16.5 ft vertical clearance for traffic lanes adjacent to crane operations per AASHTO guidelines</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Critical Lift Considerations for Bridge Erection
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Girder erection:</strong> Precast or steel girder placement typically exceeds 75% of crane capacity and qualifies as a critical lift requiring an engineered lift plan, PE stamp, and pre-lift meeting</li>
                <li><strong>Segment erection:</strong> Precast segmental bridge construction requires precise load weight verification &mdash; segment weights can vary significantly from design due to concrete density variations</li>
                <li><strong>Utility relocation lifts:</strong> Relocating active utility lines (gas, electric, water) during highway widening involves coordination with utility owners and additional safety protocols</li>
                <li><strong>Temporary shoring and falsework:</strong> Crane operations near temporary shoring must account for dynamic loads on the temporary structure</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Permit and Documentation Requirements
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li><strong>Oversize/overweight permits:</strong> Mobilizing large cranes on public highways requires oversize/overweight vehicle permits from state DOT; route surveys must verify bridge load ratings along the mobilization path</li>
                <li><strong>Annual inspection certificates:</strong> Current annual inspection documentation filed with the DOT project engineer before crane operations begin</li>
                <li><strong>Operator certification records:</strong> NCCCO or state-accepted equivalent, filed with the project</li>
                <li><strong>Insurance certificates:</strong> Often higher limits than standard commercial construction due to exposure to public traffic</li>
                <li><strong>Environmental permits:</strong> For work near wetlands, waterways, or environmentally sensitive areas, crane operations may require additional environmental agency coordination</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">
                Key Takeaways
              </h2>

              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Bridge and highway crane operations are governed by OSHA, FHWA, state DOT, and potentially USCG and FAA requirements simultaneously</li>
                <li>State DOT specifications frequently exceed OSHA minimums &mdash; third-party inspections, lift plan submittals, and pre-lift meetings with DOT inspectors are common</li>
                <li>Over-water crane operations on barges require marine stability analysis and de-rated load charts that account for vessel motion</li>
                <li>Traffic control during crane operations requires MUTCD-compliant temporary traffic control plans, lane closures with positive protection, and often nightwork provisions</li>
                <li>Crane mobilization on public highways requires oversize/overweight permits with route surveys verifying bridge ratings along the path</li>
              </ul>

              <div className="bg-gradient-to-r from-brand to-brand-dark rounded-xl p-8 text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-3">Manage DOT Crane Compliance Digitally</h3>
                <p className="text-white/90 mb-6">CraneCheck provides digital lift plan documentation, DOT inspection certificate tracking, operator qualification management, and traffic control coordination forms for bridge and highway construction crane operations.</p>
                <a href="https://cranecheck.co/demo" className="inline-block bg-white text-brand font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4"><RelatedPosts currentSlug="crane-inspection-bridge-highway-construction" /></div>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
      <Footer />
    </>
  );
}
