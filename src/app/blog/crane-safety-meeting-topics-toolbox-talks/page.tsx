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
  title: "Crane Safety Meeting Topics: 52 Toolbox Talk Ideas for Weekly Safety Meetings",
  description: "52 crane safety meeting and toolbox talk topics organized by category with discussion guides. Cover every critical crane safety topic across a full year of weekly safety meetings.",
  alternates: { canonical: "/blog/crane-safety-meeting-topics-toolbox-talks" },
};

export default function CraneSafetyMeetingTopicsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Safety Meeting Topics: 52 Toolbox Talk Ideas for Weekly Safety Meetings",
    "description": "52 crane safety meeting and toolbox talk topics organized by category with discussion guides. Cover every critical crane safety topic across a full year of weekly safety meetings.",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/crane-safety-meeting-topics-toolbox-talks" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Safety Meeting Topics & Toolbox Talks", "item": "https://cranecheck.co/blog/crane-safety-meeting-topics-toolbox-talks" }
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
              <span className="text-xs text-gray-400">15 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Safety Meeting Topics: 52 Toolbox Talk Ideas for Weekly Safety Meetings
            </h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Running out of safety meeting topics? Here are 52 crane-specific toolbox talk ideas &mdash;
              one for every week of the year &mdash; with discussion points, real-world scenarios, and
              links to detailed guides for each topic.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              Regular safety meetings are one of the most effective tools for maintaining a strong
              safety culture in crane operations. OSHA does not mandate a specific meeting frequency,
              but weekly toolbox talks are industry standard for construction and heavy equipment
              operations. The challenge for safety managers is keeping the content fresh, relevant,
              and engaging &mdash; recycling the same five topics every quarter leads to disengagement
              and tuned-out crews.
            </p>

            <p>
              This guide provides 52 crane-specific safety meeting topics, organized into categories,
              with key discussion points for each. Each topic can be covered in a 10&ndash;15 minute
              toolbox talk format. Where we have detailed guides available, they are linked for the
              safety manager who wants to prepare deeper content.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Pre-Operation and Daily Inspection (Weeks 1&ndash;8)</h2>

            <h3>Week 1: Daily Crane Inspection &mdash; What to Actually Check</h3>
            <p>
              <strong>Key points:</strong> Walk-around sequence, fluid levels, safety device checks,
              visual structural inspection. Discuss the difference between going through the motions
              and actually looking.
              <br /><strong>Discussion starter:</strong> &ldquo;What was the last thing you actually found
              on a daily inspection?&rdquo;
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/daily-crane-inspection-checklist">Daily Crane Inspection Checklist</Link>
            </p>

            <h3>Week 2: Wire Rope Inspection &mdash; What You Can See and What You Cannot</h3>
            <p>
              <strong>Key points:</strong> Broken wire criteria, diameter reduction, bird-caging,
              corrosion signs. Emphasize that internal deterioration is invisible without rope
              measurement.
              <br /><strong>Discussion starter:</strong> &ldquo;How do you check wire rope diameter
              in the field?&rdquo;
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-wire-rope-inspection-guide">Wire Rope Inspection Guide</Link>
            </p>

            <h3>Week 3: Hook Inspection &mdash; The Single Point of Failure</h3>
            <p>
              <strong>Key points:</strong> Throat opening measurement, twist check, latch function,
              when to pull a hook from service. Emphasize that hooks are single-point-of-failure
              components.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-hook-inspection-criteria">Hook Inspection Criteria</Link>
            </p>

            <h3>Week 4: Safety Device Function Testing</h3>
            <p>
              <strong>Key points:</strong> LMI/RCI calibration verification, upper limit switch
              testing, anti-two-block testing. How to test each device correctly and what to do when
              one fails.
              <br /><strong>Discussion starter:</strong> &ldquo;Has anyone ever had a safety device
              activate during an actual lift?&rdquo;
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-anti-two-block-safety">Anti-Two-Block Safety Devices</Link>
            </p>

            <h3>Week 5: Outrigger Setup &mdash; Getting It Right Every Time</h3>
            <p>
              <strong>Key points:</strong> Full extension verification, pad sizing for soil conditions,
              level check, monitoring during lifts. The #1 cause of mobile crane tip-overs.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-outrigger-inspection-setup">Outrigger Inspection &amp; Setup</Link>
            </p>

            <h3>Week 6: Boom Inspection &mdash; What to Look For</h3>
            <p>
              <strong>Key points:</strong> Telescopic boom wear pads, lattice boom lacing bars, pin
              connections, signs of fatigue cracking.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-boom-inspection-guide">Boom Inspection Guide</Link>
            </p>

            <h3>Week 7: Hydraulic System Walk-Around</h3>
            <p>
              <strong>Key points:</strong> Hose condition, leak identification, fluid level checks,
              what a failing hydraulic hose looks like before it bursts.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/hydraulic-crane-inspection-guide">Hydraulic Crane Inspection Guide</Link>
            </p>

            <h3>Week 8: Documenting What You Find</h3>
            <p>
              <strong>Key points:</strong> Why documentation matters (OSHA defense, insurance, trend
              analysis). What makes a good deficiency description vs. a useless one.
              <br /><strong>Discussion starter:</strong> &ldquo;If OSHA showed up tomorrow and asked
              for your last 30 days of inspection records, how fast could you produce them?&rdquo;
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-inspection-report-template">Inspection Report Template</Link>
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Hazard Awareness (Weeks 9&ndash;20)</h2>

            <h3>Week 9: Power Line Safety &mdash; The 20-Foot Rule</h3>
            <p>
              <strong>Key points:</strong> OSHA Table A clearance distances, voltage identification,
              spotter requirements. Power line contact is the #2 cause of crane fatalities.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-power-line-safety">Power Line Safety</Link>
            </p>

            <h3>Week 10: Swing Radius Protection</h3>
            <p>
              <strong>Key points:</strong> Barricade requirements, struck-by hazards, awareness of
              counterweight swing radius. Demonstrate actual counterweight swing distance.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-swing-radius-safety-zones">Swing Radius Safety Zones</Link>
            </p>

            <h3>Week 11: Wind Speed Awareness</h3>
            <p>
              <strong>Key points:</strong> How to read wind conditions, manufacturer limits, gust
              factors, what to do when wind picks up mid-lift.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-wind-speed-limits">Wind Speed Limits</Link>
            </p>

            <h3>Week 12: Ground Conditions &mdash; What&rsquo;s Under Your Crane?</h3>
            <p>
              <strong>Key points:</strong> Soil bearing assessment, underground utilities, recent
              excavation near outrigger positions, rain-softened ground.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-ground-conditions-setup">Ground Conditions Guide</Link>
            </p>

            <h3>Week 13: Load Chart Reading</h3>
            <p>
              <strong>Key points:</strong> How to read a load chart correctly. Configuration
              selection, gross vs. net capacity, what &ldquo;over side&rdquo; vs. &ldquo;over
              rear&rdquo; actually means. Quiz operators on their crane&rsquo;s chart.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-load-chart-documentation">Load Chart Documentation</Link>
            </p>

            <h3>Week 14: Rigging Inspection Before Every Lift</h3>
            <p>
              <strong>Key points:</strong> Sling inspection criteria, shackle ratings, damaged
              rigging removal from service, tag line use.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/rigging-inspection-requirements">Rigging Inspection Requirements</Link>
            </p>

            <h3>Week 15: Signal Person Communication</h3>
            <p>
              <strong>Key points:</strong> Standard hand signals review, voice communication
              protocols, what to do when you lose sight of the signal person. Practice signals.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-signal-person-requirements">Signal Person Requirements</Link>
            </p>

            <h3>Week 16: Night Crane Operations</h3>
            <p>
              <strong>Key points:</strong> Lighting requirements, visibility for signal persons,
              fatigue awareness, site illumination assessment.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-night-operations-lighting">Night Operations &amp; Lighting</Link>
            </p>

            <h3>Week 17: Cold Weather Crane Hazards</h3>
            <p>
              <strong>Key points:</strong> Steel brittle fracture risk, hydraulic cold-start
              procedures, ice on loads and rigging, operator cold-stress.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-cold-weather-operations">Cold Weather Operations</Link>
            </p>

            <h3>Week 18: Hot Weather Crane Hazards</h3>
            <p>
              <strong>Key points:</strong> Operator heat illness, hydraulic overheating, thermal
              expansion, hydration protocols.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-hot-weather-operations">Hot Weather Operations</Link>
            </p>

            <h3>Week 19: Multi-Employer Worksite Responsibilities</h3>
            <p>
              <strong>Key points:</strong> Who is responsible for what on a multi-employer site?
              GC, crane owner, and operator responsibilities. What happens when someone else&rsquo;s
              worker enters the crane zone?
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/osha-multi-employer-crane-liability">Multi-Employer Crane Liability</Link>
            </p>

            <h3>Week 20: Near-Miss Reporting &mdash; Why It Matters</h3>
            <p>
              <strong>Key points:</strong> What constitutes a near-miss, why reporting is not
              punishment, how near-miss data prevents fatalities. Review any recent near-misses.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-near-miss-reporting">Near-Miss Reporting</Link>
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Lift Planning and Operations (Weeks 21&ndash;32)</h2>

            <h3>Week 21: Lift Planning Basics</h3>
            <p>
              <strong>Key points:</strong> Every lift needs a plan. Critical lift thresholds, load
              weight determination, crane configuration selection.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-lift-plan-requirements">Lift Plan Requirements</Link>
            </p>

            <h3>Week 22: Tandem Lifts &mdash; When Two Cranes Work Together</h3>
            <p>
              <strong>Key points:</strong> Why tandem lifts multiply risk, derating requirements,
              communication protocols, engineering requirements.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-tandem-lift-requirements">Tandem Lift Requirements</Link>
            </p>

            <h3>Week 23: Assembly and Disassembly Safety</h3>
            <p>
              <strong>Key points:</strong> A/D director role, crew communication, most dangerous
              phases, pre-A/D planning.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-assembly-disassembly-safety">Assembly &amp; Disassembly Safety</Link>
            </p>

            <h3>Week 24: Emergency Shutdown Procedures</h3>
            <p>
              <strong>Key points:</strong> When to shut down immediately, how to secure the crane and
              load, evacuation procedures, severe weather response.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-emergency-shutdown-procedures">Emergency Shutdown Procedures</Link>
            </p>

            <h3>Week 25: Load Weight Verification</h3>
            <p>
              <strong>Key points:</strong> How to verify load weight before lifting. Shipping
              documents, manufacturer specs, calculated weights, dynamic weight additions (ice, water,
              debris). Never guess.
              <br /><strong>Discussion starter:</strong> &ldquo;What is the heaviest thing you have
              lifted that was heavier than expected?&rdquo;
            </p>

            <h3>Week 26: Crane Travel Under Load</h3>
            <p>
              <strong>Key points:</strong> When is travel under load allowed? Manufacturer restrictions,
              load height, speed limits, ground conditions during travel. Most RT cranes allow it &mdash;
              most ATs do not.
            </p>

            <h3>Week 27: Blind Lifts</h3>
            <p>
              <strong>Key points:</strong> When the operator cannot see the load or landing zone.
              Signal person requirements, communication protocols, camera systems.
            </p>

            <h3>Week 28: Side Loading &mdash; Why It Kills Cranes</h3>
            <p>
              <strong>Key points:</strong> Cranes are designed for vertical loads. Side loading
              (dragging, pulling) creates forces the crane was not designed for. How to identify and
              refuse side-loading situations.
            </p>

            <h3>Week 29: Crane Set-Up on Slopes</h3>
            <p>
              <strong>Key points:</strong> Level tolerance, slope measurement, capacity reduction on
              grades, what to do when the only available position is not level.
            </p>

            <h3>Week 30: Working Near Excavations</h3>
            <p>
              <strong>Key points:</strong> Outrigger placement near trenches and excavations, soil
              collapse zones, minimum setback distances, compacted vs. uncompacted fill.
            </p>

            <h3>Week 31: Personnel Hoisting Safety</h3>
            <p>
              <strong>Key points:</strong> OSHA 1926.1431 requirements, personnel platform inspection,
              pre-lift meeting requirements, capacity derating for personnel lifts (50% of rated capacity).
            </p>

            <h3>Week 32: Crane Shutdown and Securing Procedures</h3>
            <p>
              <strong>Key points:</strong> End-of-shift securing, overnight wind protection, boom
              storage position, main disconnect, anti-theft measures.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Compliance and Regulations (Weeks 33&ndash;40)</h2>

            <h3>Week 33: OSHA 29 CFR 1926.1412 &mdash; Your Inspection Obligations</h3>
            <p>
              <strong>Key points:</strong> Frequent vs. periodic vs. annual inspections. Who is
              responsible. What documentation is required.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/29-cfr-1926-1412-explained">29 CFR 1926.1412 Explained</Link>
            </p>

            <h3>Week 34: Operator Certification &mdash; What Your Card Means</h3>
            <p>
              <strong>Key points:</strong> NCCCO, CIC, and NCCER certifications. What they cover,
              what they do not cover, recertification timelines.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-operator-certification-requirements">Operator Certification Requirements</Link>
            </p>

            <h3>Week 35: Qualified vs. Competent Person</h3>
            <p>
              <strong>Key points:</strong> OSHA definitions, who can do what, why it matters for
              inspection validity.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/qualified-vs-competent-person-crane">Qualified vs. Competent Person</Link>
            </p>

            <h3>Week 36: OSHA Penalties &mdash; What Non-Compliance Costs</h3>
            <p>
              <strong>Key points:</strong> Current penalty amounts, willful vs. serious vs.
              other-than-serious, how penalties compound. Real citation examples.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-inspection-penalties-fines">OSHA Crane Penalties</Link>
            </p>

            <h3>Week 37: Maintenance Records &mdash; Your Legal Shield</h3>
            <p>
              <strong>Key points:</strong> Why maintenance records protect you in lawsuits and audits.
              What to document, how long to keep it.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-maintenance-log-requirements">Maintenance Log Requirements</Link>
            </p>

            <h3>Week 38: Record Retention &mdash; What to Keep and For How Long</h3>
            <p>
              <strong>Key points:</strong> OSHA, ASME, and state requirements for inspection and
              maintenance record retention.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-inspection-record-retention">Record Retention Guide</Link>
            </p>

            <h3>Week 39: Third-Party Inspections &mdash; When and Why</h3>
            <p>
              <strong>Key points:</strong> When third-party inspection is required, how to select a
              qualified inspector, what to expect from the process.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/third-party-crane-inspection">Third-Party Inspection Guide</Link>
            </p>

            <h3>Week 40: OSHA Audit Preparation</h3>
            <p>
              <strong>Key points:</strong> What triggers an audit, what inspectors look for, how to
              organize your documentation, employee rights during audits.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/osha-crane-audit-preparation">OSHA Audit Preparation</Link>
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Specialized Topics (Weeks 41&ndash;48)</h2>

            <h3>Week 41: Crane Insurance &mdash; What Your Policy Actually Covers</h3>
            <p>
              <strong>Key points:</strong> Types of crane insurance, how inspection records affect
              premiums, what documentation insurers require after an incident.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-insurance-requirements-coverage">Crane Insurance Guide</Link>
            </p>

            <h3>Week 42: Rental Crane Responsibilities</h3>
            <p>
              <strong>Key points:</strong> Who inspects a rented crane? Bare vs. operated rentals,
              multi-employer obligations, what to check on delivery.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-rental-inspection-obligations">Rental Inspection Obligations</Link>
            </p>

            <h3>Week 43: Demolition Crane Operations</h3>
            <p>
              <strong>Key points:</strong> Special hazards of demolition sites, falling debris
              protection, dynamic load changes, wrecking ball operations.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-inspection-demolition-projects">Demolition Project Inspection</Link>
            </p>

            <h3>Week 44: Operator Fatigue Management</h3>
            <p>
              <strong>Key points:</strong> Recognizing fatigue in yourself and others, work-hour
              best practices, the courage to say &ldquo;I need a break.&rdquo;
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-operator-fatigue-management">Fatigue Management Guide</Link>
            </p>

            <h3>Week 45: Accident Investigation &mdash; What Happens After an Incident</h3>
            <p>
              <strong>Key points:</strong> Immediate scene preservation, documentation requirements,
              OSHA reporting timelines, employee rights.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-accident-investigation-documentation">Accident Investigation Documentation</Link>
            </p>

            <h3>Week 46: Tower Crane Specific Safety</h3>
            <p>
              <strong>Key points:</strong> Climbing operations, free-standing vs. tied-in heights,
              weather vaning, operator emergency evacuation.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/tower-crane-inspection-requirements">Tower Crane Inspection Requirements</Link>
            </p>

            <h3>Week 47: Crawler Crane Specific Safety</h3>
            <p>
              <strong>Key points:</strong> Track tension, travel on grades, swing with load on
              crawlers, pick-and-carry operations, soft ground sensitivity.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crawler-crane-inspection-checklist">Crawler Crane Inspection Checklist</Link>
            </p>

            <h3>Week 48: Load Testing &mdash; Why and When</h3>
            <p>
              <strong>Key points:</strong> When load tests are required, proof load vs. rated load,
              what happens during a load test, documentation requirements.
              <br /><strong>Deep dive:</strong>{" "}
              <Link href="/blog/crane-load-testing-requirements">Load Testing Requirements</Link>
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Safety Culture and Continuous Improvement (Weeks 49&ndash;52)</h2>

            <h3>Week 49: Stop Work Authority</h3>
            <p>
              <strong>Key points:</strong> Everyone has the authority and the responsibility to stop
              a lift if they see something unsafe. How to exercise stop work authority without
              retaliation. Share examples of good stop work calls.
            </p>

            <h3>Week 50: Lessons Learned &mdash; Review the Year</h3>
            <p>
              <strong>Key points:</strong> Review all incidents, near-misses, and inspection findings
              from the past year. What patterns emerged? What corrective actions were taken? What
              should change going forward?
            </p>

            <h3>Week 51: New Equipment and Technology</h3>
            <p>
              <strong>Key points:</strong> Review any new cranes, equipment, or technology introduced
              or planned. Training requirements, configuration differences from existing equipment,
              operator familiarization.
            </p>

            <h3>Week 52: Safety Goals for Next Year</h3>
            <p>
              <strong>Key points:</strong> Set specific, measurable safety goals for the next year.
              Zero harm targets, inspection completion rates, near-miss reporting goals, training
              completion targets.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Tips for Effective Crane Safety Meetings</h2>

            <ul>
              <li>
                <strong>Keep it short:</strong> 10&ndash;15 minutes maximum. Crews lose focus after
                that. If a topic needs more time, schedule a dedicated training session.
              </li>
              <li>
                <strong>Make it interactive:</strong> Ask questions, share scenarios, let experienced
                operators share war stories. A lecture is less effective than a conversation.
              </li>
              <li>
                <strong>Use real examples:</strong> Reference actual incidents from your company,
                OSHA investigation reports, or industry news. Abstract safety concepts do not
                stick &mdash; real stories do.
              </li>
              <li>
                <strong>Rotate presenters:</strong> Let operators, riggers, and field supervisors
                present topics they know well. This builds ownership and engagement.
              </li>
              <li>
                <strong>Document attendance and topics:</strong> OSHA may ask for evidence of safety
                training. Keep sign-in sheets and topic records.
              </li>
              <li>
                <strong>Follow up on action items:</strong> If a safety meeting identifies an issue
                (e.g., damaged rigging on a specific crane), follow up and report back the resolution
                at the next meeting.
              </li>
            </ul>

            <div className="bg-brand-light border border-brand rounded-xl p-6 my-8">
              <p className="font-semibold text-navy mb-2">
                Digital safety meeting tracking
              </p>
              <p className="text-gray-600 mb-4">
                CraneCheck can help you track safety meeting topics, attendance, and follow-up
                items alongside your inspection and maintenance records &mdash; everything in one
                place.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition no-underline"
              >
                Start Your Free Trial &rarr;
              </Link>
            </div>
          </div>
        </article>

        <div className="max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="crane-safety-meeting-topics-toolbox-talks" />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
