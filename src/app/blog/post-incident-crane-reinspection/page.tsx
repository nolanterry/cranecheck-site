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
  title: "Post-Incident Crane Reinspection: When to Re-Inspect After Accidents, Overloads & Near-Misses",
  description: "Guide to post-incident crane reinspection requirements after accidents, overloads, two-blocking events, tip-overs, and structural contact. Learn OSHA and ASME B30 requirements for returning a crane to service after an incident.",
  alternates: { canonical: "/blog/post-incident-crane-reinspection" },
};

export default function PostIncidentCraneReinspectionPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Post-Incident Crane Reinspection: When to Re-Inspect After Accidents, Overloads & Near-Misses",
    "description": "Guide to post-incident crane reinspection requirements after accidents, overloads, two-blocking events, tip-overs, and structural contact. Learn OSHA and ASME B30 requirements for returning a crane to service after an incident.",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/post-incident-crane-reinspection" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Post-Incident Crane Reinspection", "item": "https://cranecheck.co/blog/post-incident-crane-reinspection" }
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
              <span className="text-xs text-gray-400">April 15, 2026</span>
              <span className="text-xs text-gray-400">12 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Post-Incident Crane Reinspection: When to Re-Inspect After Accidents, Overloads &amp; Near-Misses
            </h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">
              After a crane incident &mdash; whether it is an overload, a two-blocking event, structural
              contact, or a near-miss &mdash; returning the crane to service without a proper reinspection
              is one of the most dangerous decisions a crane company can make. Here is exactly what the
              standards require and how to do it right.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              Every crane incident creates the possibility of hidden damage that is not visible during a
              normal walk-around inspection. An overload event may have yielded structural members that
              show no visible deformation. A two-blocking event may have damaged the boom tip, wire rope
              anchor, or anti-two-block device in ways that are not immediately apparent. A power line
              contact event may have created electrical damage paths through the crane structure. Even a
              &ldquo;minor&rdquo; boom contact with a building can create internal cracks in boom sections
              that will propagate under future loading until catastrophic failure occurs.
            </p>

            <p>
              Both OSHA and ASME B30 series standards require reinspection following certain events, but
              the requirements are scattered across multiple sections and can be difficult to assemble
              into a coherent return-to-service protocol. This guide consolidates the requirements and
              provides a practical framework for post-incident reinspection. For related content on
              incident investigation and documentation, see our{" "}
              <Link href="/blog/crane-accident-investigation-documentation">crane accident investigation documentation guide</Link>.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Events That Trigger Reinspection</h2>

            <p>
              Not every event requires a full reinspection, but the following categories of incidents
              always require the crane to be taken out of service and reinspected before returning to
              operation:
            </p>

            <h3>Overload Events</h3>
            <p>
              Any time a crane lifts a load exceeding its rated capacity for the given configuration
              (boom length, radius, quadrant), a reinspection is required. This includes:
            </p>
            <ul>
              <li>Intentional overloading (e.g., load heavier than estimated, configuration error)</li>
              <li>Dynamic overloading (sudden stops, wind gusts, load swing)</li>
              <li>LMI/RCI alarm activation (even if the operator immediately set the load down)</li>
              <li>Load chart configuration errors (wrong outrigger setting, wrong boom length entered)</li>
            </ul>
            <p>
              ASME B30.5-5.2.2.3 states that any crane that has been &ldquo;subjected to a loading
              condition in excess of its rated load&rdquo; shall not be used until it has been inspected
              and found safe for continued operation. The inspection must be performed by a qualified
              person and must include structural members, boom, wire rope, hook, hoist mechanism, and
              all load-bearing components.
            </p>

            <h3>Two-Blocking Events</h3>
            <p>
              Two-blocking occurs when the hook block contacts the boom tip sheave, creating a sudden
              overload on the wire rope, boom, and supporting structure. Even a brief two-blocking event
              can cause:
            </p>
            <ul>
              <li>Wire rope damage (stretched, kinked, or broken wires at the block or boom tip)</li>
              <li>Boom tip damage (bent sheave pins, cracked boom tip structure)</li>
              <li>Anti-two-block device damage (the device may have activated but was overpowered)</li>
              <li>Hook block damage (side plates, sheaves, hook throat deformation)</li>
            </ul>
            <p>
              For more on anti-two-block devices and their inspection, see our{" "}
              <Link href="/blog/crane-anti-two-block-safety">anti-two-block safety guide</Link>.
            </p>

            <h3>Structural Contact</h3>
            <p>
              Any time the crane boom, load block, or load contacts a building, power line, structure,
              or the ground in an uncontrolled manner, reinspection is required. This includes:
            </p>
            <ul>
              <li>Boom contact with buildings, bridges, or other structures</li>
              <li>Load contact with structures (swing-through incidents)</li>
              <li>Boom or jib grounding (boom tip contacts the ground during lowering)</li>
              <li>Power line contact (electrocution hazard plus potential structural damage from electrical arcing)</li>
            </ul>
            <p>
              For power line contact events, the reinspection must include an evaluation of the electrical
              path through the crane to identify any arc damage to structural members, wire rope, sheave
              bearings, or turntable. See our{" "}
              <Link href="/blog/crane-power-line-safety">power line safety guide</Link> for prevention
              strategies.
            </p>

            <h3>Tip-Over or Partial Tip-Over</h3>
            <p>
              If a crane tips over or experiences a partial tip-over (one or more outrigger legs lift
              off the ground), the crane has been subjected to loading conditions far outside its design
              parameters. A complete reinspection including structural NDT is mandatory before any
              consideration of returning to service. Many tip-over cranes are total losses.
            </p>

            <h3>Severe Weather Events</h3>
            <p>
              Cranes exposed to severe weather events while unattended require reinspection:
            </p>
            <ul>
              <li><strong>High winds:</strong> Winds exceeding manufacturer&rsquo;s out-of-service wind speed limit</li>
              <li><strong>Lightning strikes:</strong> Direct or near-strike to the crane</li>
              <li><strong>Seismic events:</strong> Earthquakes above a locally established threshold</li>
              <li><strong>Flooding:</strong> If the crane foundation or outrigger positions were inundated</li>
            </ul>

            <h3>Component Failures</h3>
            <p>
              Failure of any load-bearing component during operation triggers reinspection of the failed
              component and all related systems:
            </p>
            <ul>
              <li>Wire rope failure (broken rope or strand separation)</li>
              <li>Brake failure (hoist, swing, or boom)</li>
              <li>Hydraulic system failure (cylinder, hose, pump)</li>
              <li>Structural failure (weld crack, bolt failure, pin failure)</li>
              <li>Safety device failure (LMI, limit switch, ATB)</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>The Reinspection Process</h2>

            <h3>Step 1: Immediate Crane Shutdown</h3>
            <p>
              When an incident occurs, the crane must be immediately taken out of service. This means:
            </p>
            <ul>
              <li>If a load is suspended, secure it safely (set it down if possible, or secure the area below)</li>
              <li>De-energize the crane and lock out the main disconnect</li>
              <li>Tag the crane as OUT OF SERVICE with date, time, and reason</li>
              <li>Secure the incident scene for investigation (do not move the crane until the investigation is complete, unless safety requires it)</li>
              <li>Notify the crane owner, site safety director, and &mdash; if OSHA-reportable &mdash; OSHA within required timelines</li>
            </ul>

            <h3>Step 2: Incident Investigation</h3>
            <p>
              Before reinspection begins, conduct a thorough incident investigation to understand what
              happened and what forces the crane was subjected to. This information guides the reinspection
              scope. Key information to gather:
            </p>
            <ul>
              <li>Load weight and configuration at the time of the incident</li>
              <li>Crane configuration (boom length, radius, quadrant, outrigger position)</li>
              <li>What happened (sequence of events, operator actions, environmental conditions)</li>
              <li>LMI/RCI data logs (if available &mdash; many modern cranes record this data)</li>
              <li>Witness statements</li>
              <li>Photos and video of the crane position and any visible damage</li>
            </ul>

            <h3>Step 3: Reinspection by Qualified Person</h3>
            <p>
              ASME B30.5-5.2.2.3 requires that the reinspection be performed by a &ldquo;qualified
              person&rdquo; &mdash; someone who by possession of a recognized degree, certificate, or
              professional standing, or who by extensive knowledge, training, and experience has
              successfully demonstrated the ability to solve or resolve problems relating to the
              subject matter. For information on qualification requirements, see our{" "}
              <Link href="/blog/qualified-vs-competent-person-crane">qualified vs. competent person guide</Link>.
            </p>
            <p>
              The reinspection scope depends on the incident type but typically includes:
            </p>
            <ul>
              <li><strong>Visual inspection:</strong> All structural members, welds, connections, and load-bearing components</li>
              <li><strong>Dimensional inspection:</strong> Boom straightness, hook throat opening, wire rope diameter</li>
              <li><strong>NDT inspection:</strong> Magnetic particle (MT) or dye penetrant (PT) testing of critical welds and high-stress areas, especially where the incident forces were concentrated</li>
              <li><strong>Functional testing:</strong> All safety devices, brakes, controls, and limit switches</li>
              <li><strong>Load test:</strong> If structural repairs were performed, a load test per ASME B30.5-5.2.2.1 may be required before returning to service</li>
            </ul>

            <h3>Step 4: Engineering Evaluation (When Required)</h3>
            <p>
              For serious incidents &mdash; overloads exceeding 10% of rated capacity, tip-overs,
              structural contact causing visible deformation, or component failures &mdash; a registered
              professional engineer (PE) with crane experience should evaluate the inspection findings
              and determine whether the crane is safe to return to service, requires repairs, or should
              be taken out of service permanently.
            </p>
            <p>
              OSHA 1926.1417(f) requires that repairs or modifications to load-sustaining structural
              members be approved by the manufacturer or a registered professional engineer.
            </p>

            <h3>Step 5: Return-to-Service Authorization</h3>
            <p>
              The reinspection must result in a formal written authorization to return the crane to
              service, signed by the qualified person (and the PE, if one was involved). This document
              should include:
            </p>
            <ul>
              <li>Description of the incident that triggered the reinspection</li>
              <li>Scope of the reinspection performed</li>
              <li>Findings (including any damage identified and repaired)</li>
              <li>Confirmation that all safety devices were tested and functional</li>
              <li>Any limitations or restrictions on future operation (e.g., reduced capacity until further evaluation)</li>
              <li>Date, signature, and qualifications of the authorizing person</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Reinspection Scope by Incident Type</h2>

            <p>
              The following table summarizes the minimum recommended reinspection scope for common
              incident types:
            </p>

            <div className="overflow-x-auto not-prose my-8">
              <table className="min-w-full text-sm border border-gray-200">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Incident Type</th>
                    <th className="px-4 py-3 text-left font-semibold">Visual</th>
                    <th className="px-4 py-3 text-left font-semibold">Dimensional</th>
                    <th className="px-4 py-3 text-left font-semibold">NDT</th>
                    <th className="px-4 py-3 text-left font-semibold">Functional</th>
                    <th className="px-4 py-3 text-left font-semibold">Load Test</th>
                    <th className="px-4 py-3 text-left font-semibold">PE Review</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Overload (&lt;10% over rated)</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">Optional</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">&mdash;</td>
                    <td className="px-4 py-3">&mdash;</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Overload (&gt;10% over rated)</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">Recommended</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Two-blocking</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓ (boom tip)</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">&mdash;</td>
                    <td className="px-4 py-3">If damage found</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Structural contact</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">If repaired</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Power line contact</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">&mdash;</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Tip-over / partial tip-over</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓ (extensive)</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-medium">Component failure</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">✓ (related)</td>
                    <td className="px-4 py-3">If structural</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">If repaired</td>
                    <td className="px-4 py-3">If structural</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Severe weather</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">Optional</td>
                    <td className="px-4 py-3">Optional</td>
                    <td className="px-4 py-3">✓</td>
                    <td className="px-4 py-3">&mdash;</td>
                    <td className="px-4 py-3">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ------------------------------------------------------------ */}
            <h2>Common Mistakes in Post-Incident Reinspection</h2>

            <ul>
              <li>
                <strong>Rushing to return to service:</strong> The crane is needed on the job and there
                is pressure to get it back to work. This leads to incomplete reinspections that miss
                hidden damage. The potential cost of a secondary failure far exceeds the cost of
                downtime for a thorough reinspection.
              </li>
              <li>
                <strong>Operator self-inspection:</strong> The operator performs a &ldquo;walk-around&rdquo;
                and declares the crane fit for service. Post-incident reinspection requires a qualified
                person &mdash; not the same operator who was involved in the incident.
              </li>
              <li>
                <strong>Inspecting only the obvious:</strong> After a boom contact event, the inspection
                focuses on the contact point but misses internal boom section damage, wire rope damage,
                or safety device damage caused by the same event.
              </li>
              <li>
                <strong>No documentation:</strong> The reinspection is performed but not documented.
                Without written records, there is no evidence that a reinspection occurred &mdash; which
                is the same as no reinspection in the eyes of OSHA and a plaintiff&rsquo;s attorney.
              </li>
              <li>
                <strong>Skipping the root cause:</strong> The reinspection confirms the crane is
                physically safe, but nobody investigates why the incident happened. Without root cause
                analysis, the same incident will likely recur. For more on near-miss and incident
                analysis, see our{" "}
                <Link href="/blog/crane-near-miss-reporting">near-miss reporting guide</Link>.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Insurance and Legal Implications</h2>

            <p>
              Post-incident reinspection has significant insurance and legal implications:
            </p>

            <ul>
              <li>
                <strong>Insurance notification:</strong> Most crane insurance policies require notification
                of incidents within 24&ndash;48 hours. Failure to notify can void coverage. The
                reinspection report becomes part of the insurance claim documentation.
              </li>
              <li>
                <strong>Litigation defense:</strong> If an incident results in injury or death, the
                reinspection records (or lack thereof) become central evidence. Thorough reinspection
                with PE involvement demonstrates due diligence. Absent or incomplete reinspection
                records suggest negligence. See our{" "}
                <Link href="/blog/crane-insurance-requirements-coverage">crane insurance guide</Link>{" "}
                for more on documentation and coverage.
              </li>
              <li>
                <strong>OSHA citations:</strong> OSHA can cite an employer for returning a crane to
                service without adequate reinspection after a known incident. This is typically cited
                under the General Duty Clause (Section 5(a)(1)) or under 1926.1412 if the reinspection
                was required by the inspection standard.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Digital Reinspection Workflows</h2>

            <p>
              CraneCheck includes post-incident reinspection templates that guide the qualified inspector
              through the appropriate scope based on the incident type. Key features include:
            </p>
            <ul>
              <li>Incident classification that automatically determines reinspection scope</li>
              <li>Digital checklist with photo documentation at each inspection point</li>
              <li>PE review workflow with digital signature capability</li>
              <li>Formal return-to-service authorization with complete audit trail</li>
              <li>Automatic linking of the reinspection record to the incident report and the crane&rsquo;s permanent inspection history</li>
            </ul>

            <div className="bg-brand-light border border-brand rounded-xl p-6 my-8">
              <p className="font-semibold text-navy mb-2">
                Be ready when incidents happen
              </p>
              <p className="text-gray-600 mb-4">
                CraneCheck&rsquo;s post-incident reinspection workflows ensure you follow the right
                process every time, with complete documentation for OSHA, insurance, and legal defense.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition no-underline"
              >
                Book a Demo &rarr;
              </Link>
            </div>
          </div>
        </article>

        <div className="max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="post-incident-crane-reinspection" />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
