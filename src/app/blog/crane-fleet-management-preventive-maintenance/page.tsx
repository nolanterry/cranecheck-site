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
  title: "Crane Fleet Management: Preventive Maintenance Programs, Scheduling & OSHA Compliance",
  description: "Complete guide to crane fleet management and preventive maintenance programs. Learn PM scheduling intervals, component lifecycle tracking, fleet utilization optimization, and how to build a compliance-ready maintenance program.",
  alternates: { canonical: "/blog/crane-fleet-management-preventive-maintenance" },
};

export default function CraneFleetManagementPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Crane Fleet Management: Preventive Maintenance Programs, Scheduling & OSHA Compliance",
    "description": "Complete guide to crane fleet management and preventive maintenance programs. Learn PM scheduling intervals, component lifecycle tracking, fleet utilization optimization, and how to build a compliance-ready maintenance program.",
    "datePublished": "2026-04-15",
    "dateModified": "2026-04-15",
    "author": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "publisher": { "@type": "Organization", "name": "CraneCheck", "url": "https://cranecheck.co" },
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://cranecheck.co/blog/crane-fleet-management-preventive-maintenance" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://cranecheck.co" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://cranecheck.co/blog" },
      { "@type": "ListItem", "position": 3, "name": "Crane Fleet Management & Preventive Maintenance", "item": "https://cranecheck.co/blog/crane-fleet-management-preventive-maintenance" }
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
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">Maintenance</span>
              <span className="text-xs text-gray-400">April 15, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Fleet Management: Preventive Maintenance Programs, Scheduling &amp; OSHA Compliance
            </h1>
            <AuthorByline name="CraneCheck Editorial Team" slug="cranecheck-team" role="Industry Research &amp; Content" />
            <p className="text-lg text-gray-300 leading-relaxed">
              A comprehensive guide to building and running a crane fleet preventive maintenance
              program that reduces downtime, extends equipment life, and keeps you audit-ready
              under OSHA 1926.1417 and ASME B30 standards.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand hover:prose-a:text-brand-dark prose-a:no-underline hover:prose-a:underline">
            <div className="not-prose"><TableOfContents /></div>

            <p>
              Managing a fleet of cranes &mdash; whether you own 5 machines or 500 &mdash; requires a
              structured preventive maintenance (PM) program that goes far beyond responding to breakdowns.
              Every unplanned service event costs 3&ndash;8&times; more than the same repair performed on
              schedule, and that does not account for lost revenue from idle cranes, emergency mobilization
              fees, or the compliance exposure created when maintenance documentation has gaps. According to
              industry data, crane companies with mature PM programs experience 40&ndash;60% fewer unplanned
              outages and extend major component life by 25&ndash;35%.
            </p>

            <p>
              OSHA 29 CFR 1926.1417 requires that cranes be maintained in accordance with manufacturer
              recommendations, and that maintenance records be available for review. ASME B30 series standards
              add detailed interval-based inspection and service requirements for every crane type. Together,
              these standards create a regulatory floor &mdash; but the real business case for fleet PM goes
              well beyond compliance. For background on the documentation requirements themselves, see our{" "}
              <Link href="/blog/crane-maintenance-log-requirements">crane maintenance log requirements guide</Link>.
            </p>

            <p>
              This guide covers the complete lifecycle of a crane fleet PM program: how to set it up, what
              intervals to use, how to track component lifecycles, how to optimize fleet utilization, and
              how to integrate inspection data with maintenance scheduling to create a single source of truth
              for your entire fleet.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Why Preventive Maintenance Programs Fail</h2>

            <p>
              Before building a program, it helps to understand why so many crane companies have PM programs
              that exist on paper but fail in practice. The most common failure modes are:
            </p>

            <h3>Reactive Culture</h3>
            <p>
              Many crane operations grew from small, owner-operated businesses where the owner fixed things
              when they broke. As fleets grow, that reactive approach does not scale. Technicians spend all
              their time on emergency repairs, PM tasks get deferred, and the backlog compounds until major
              components fail prematurely. Breaking the reactive cycle requires leadership commitment, dedicated
              PM scheduling capacity, and metrics that track PM completion rates separately from corrective
              maintenance.
            </p>

            <h3>Paper-Based Tracking</h3>
            <p>
              Paper work orders, clipboard-based PM checklists, and spreadsheet tracking systems create
              information silos that make it impossible to see fleet-wide patterns. When a wire rope reaches
              its replacement interval on crane #47, the maintenance manager may not know unless they
              physically check the log &mdash; which is probably in the cab of a crane two states away on
              a jobsite. Digital fleet management systems eliminate this gap by centralizing all PM data
              and generating automated alerts. For more on the digital vs. paper comparison, see our{" "}
              <Link href="/blog/crane-inspection-software-vs-paper">inspection software vs. paper logs guide</Link>.
            </p>

            <h3>No Integration Between Inspection and Maintenance</h3>
            <p>
              In too many organizations, the inspection program and the maintenance program operate as
              separate functions. An inspector notes a deficiency, writes it on a form, and hands it to a
              supervisor &mdash; who may or may not create a work order. When inspection findings feed
              directly into the maintenance management system with automated work order generation, nothing
              falls through the cracks.
            </p>

            <h3>One-Size-Fits-All Intervals</h3>
            <p>
              Not every crane in your fleet operates the same way. A 300-ton crawler running 2,500 hours
              per year on heavy-lift construction needs different PM intervals than a 30-ton RT crane that
              runs 800 hours per year on intermittent maintenance lifts. Effective PM programs adjust
              intervals based on crane type, utilization rate, operating environment, and manufacturer
              recommendations.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Building Your Fleet PM Program: The Foundation</h2>

            <p>
              A structured PM program starts with a complete inventory of your fleet assets and the
              manufacturer-recommended maintenance tasks for each one. Here is a step-by-step approach:
            </p>

            <h3>Step 1: Complete Fleet Asset Inventory</h3>
            <p>
              Document every crane in your fleet with the following minimum data points:
            </p>
            <ul>
              <li><strong>Crane ID / Unit number:</strong> Your internal tracking identifier</li>
              <li><strong>Make, model, serial number:</strong> Required for manufacturer service bulletins</li>
              <li><strong>Capacity rating:</strong> Maximum rated capacity and load chart configuration</li>
              <li><strong>Year of manufacture:</strong> Drives age-based inspection requirements</li>
              <li><strong>Current hour meter reading:</strong> Baseline for interval tracking</li>
              <li><strong>Home location / assignment:</strong> Where the crane is based or currently deployed</li>
              <li><strong>Ownership status:</strong> Owned, leased, or rented &mdash; affects maintenance responsibility</li>
              <li><strong>Major component install dates:</strong> Wire rope, engine, transmission, hydraulic pumps</li>
            </ul>

            <h3>Step 2: Map Manufacturer PM Requirements</h3>
            <p>
              Every crane manufacturer publishes maintenance schedules in the operator&rsquo;s manual and
              service manual. These are not suggestions &mdash; OSHA 1926.1417(a) explicitly requires that
              cranes be maintained &ldquo;in accordance with manufacturer procedures and recommendations.&rdquo;
              Failure to follow manufacturer PM schedules is a citable offense.
            </p>
            <p>
              For each crane model in your fleet, extract the complete PM task list organized by interval:
            </p>
            <ul>
              <li><strong>Daily / every shift:</strong> Fluid level checks, visual walk-around, safety device function tests</li>
              <li><strong>Weekly / 50 hours:</strong> Greasing, belt tension, tire pressure (rubber-tired cranes)</li>
              <li><strong>Monthly / 250 hours:</strong> Oil sampling, filter inspection, structural bolt torque checks</li>
              <li><strong>Quarterly / 500 hours:</strong> Hydraulic filter changes, brake adjustment, cooling system service</li>
              <li><strong>Semi-annual / 1,000 hours:</strong> Engine oil and filter change, transmission service, full lubrication</li>
              <li><strong>Annual / 2,000 hours:</strong> Major fluid changes, hose inspection/replacement, structural NDT</li>
              <li><strong>Major overhaul / 5,000&ndash;10,000 hours:</strong> Engine overhaul, pump rebuild, full rewire</li>
            </ul>

            <h3>Step 3: Establish PM Work Order Templates</h3>
            <p>
              For each PM interval, create standardized work order templates that list every task, the parts
              required, the estimated labor hours, and the acceptance criteria. This ensures consistency
              regardless of which technician performs the service. Include space for the technician to record
              measurements (e.g., brake lining thickness, wire rope diameter, hydraulic pressure readings)
              so you build trend data over time.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>PM Scheduling Strategies for Multi-Crane Fleets</h2>

            <p>
              The scheduling challenge for crane fleets is unique: your assets are mobile, often deployed
              to remote jobsites hundreds of miles from your shop, and pulling a crane off a job for PM
              costs revenue. Here are proven scheduling strategies:
            </p>

            <h3>Calendar-Based vs. Hour-Based Scheduling</h3>
            <p>
              Most crane PM programs use a &ldquo;whichever comes first&rdquo; approach: perform the 250-hour
              service at 250 hours or 30 days, whichever arrives first. This prevents low-utilization cranes
              from going months without service. For high-utilization cranes (2,000+ hours/year), hour-based
              scheduling is the primary driver. For intermittent-use cranes, calendar-based scheduling
              prevents time-based degradation (corrosion, seal dry-out, fluid oxidation) from being overlooked.
            </p>

            <h3>Field Service vs. Shop Service</h3>
            <p>
              Not every PM task requires returning the crane to your shop. Divide your PM tasks into two
              categories:
            </p>
            <ul>
              <li>
                <strong>Field-serviceable:</strong> Greasing, fluid top-offs, filter changes, visual inspections,
                daily/weekly/monthly PM items. These can be performed by a field technician in a service truck
                at the jobsite with minimal disruption.
              </li>
              <li>
                <strong>Shop-required:</strong> Major fluid changes, NDT inspections, structural repairs,
                component rebuilds, load testing. These require overhead crane coverage, specialized tools,
                and controlled environments.
              </li>
            </ul>
            <p>
              Building a mobile field service capability dramatically reduces PM-related downtime. A well-equipped
              service truck can handle 80% of routine PM tasks without moving the crane.
            </p>

            <h3>PM Windows and Job Coordination</h3>
            <p>
              Work with your dispatching team to build PM windows into job scheduling. When a crane finishes
              a job and is being demobilized, route it through the shop for any upcoming PM before deploying
              to the next job. This &ldquo;transit PM&rdquo; approach captures maintenance during natural
              downtime rather than pulling cranes off active jobs.
            </p>

            <h3>Seasonal Maintenance Planning</h3>
            <p>
              Most crane operations have seasonal utilization patterns. Plan major maintenance during your
              slow season &mdash; typically December through February in northern climates. Schedule annual
              inspections, major overhauls, and any deferred maintenance during this window. For winter-specific
              concerns, see our{" "}
              <Link href="/blog/crane-cold-weather-operations">cold weather operations guide</Link>.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Component Lifecycle Tracking</h2>

            <p>
              Beyond interval-based PM, effective fleet management requires tracking individual component
              lifecycles. Major crane components have finite service lives, and tracking their condition
              over time enables condition-based replacement that maximizes component value while preventing
              in-service failures.
            </p>

            <h3>Wire Rope</h3>
            <p>
              Wire rope is the most commonly tracked consumable component. Key metrics to track include:
              installed date, installed hours, current hours in service, last inspection date, broken wire
              count progression, diameter measurements at multiple points, and any noted corrosion or
              deformation. ASME B30.5 provides specific removal criteria, but trending the data lets you
              predict replacement timing and order rope in advance. See our{" "}
              <Link href="/blog/crane-wire-rope-inspection-guide">wire rope inspection guide</Link>{" "}
              for detailed removal criteria.
            </p>

            <h3>Hydraulic Hoses</h3>
            <p>
              Hydraulic hose failures are among the most common causes of unplanned crane downtime. Track
              installation date, operating hours, pressure rating, and location for every hose assembly.
              Most manufacturers recommend replacement at 5&ndash;7 years regardless of condition, but
              environmental factors (UV exposure, extreme temperatures, chemical contact) can accelerate
              degradation. Proactive hose replacement programs typically replace all hoses in a circuit
              simultaneously during scheduled maintenance.
            </p>

            <h3>Engines and Powertrains</h3>
            <p>
              Track engine hours, oil analysis trends (wear metals, contamination, viscosity), coolant
              analysis, and fuel consumption. Increasing fuel consumption or declining oil analysis trends
              are leading indicators of engine wear that enable planned overhauls rather than catastrophic
              failures. Major engine overhauls typically occur at 10,000&ndash;15,000 hours depending on
              the engine model and operating conditions.
            </p>

            <h3>Structural Components</h3>
            <p>
              Boom sections, turntable bearings, outrigger beams, and frame members all experience fatigue
              loading that accumulates over time. Track NDT inspection results by location, note any
              indications found, and trend the data to identify components approaching end of life. For
              older cranes (20+ years), structural monitoring becomes increasingly critical. For more on
              boom-specific inspection, see our{" "}
              <Link href="/blog/crane-boom-inspection-guide">boom inspection guide</Link>.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Fleet Utilization Optimization</h2>

            <p>
              PM data is also fleet management data. By analyzing maintenance patterns across your fleet,
              you can make better decisions about crane deployment, acquisition, and disposition.
            </p>

            <h3>Utilization Rate Tracking</h3>
            <p>
              Track actual operating hours vs. available hours for every crane. Industry benchmarks suggest
              that well-managed rental fleets achieve 55&ndash;65% utilization, while contractor-owned fleets
              typically run 40&ndash;55%. Cranes consistently below 30% utilization may be candidates for
              disposition or reassignment.
            </p>

            <h3>Cost-Per-Hour Analysis</h3>
            <p>
              For each crane, calculate the total cost of ownership per operating hour including depreciation,
              PM costs, corrective maintenance, insurance, and transport. When a crane&rsquo;s cost-per-hour
              exceeds your rental rate for equivalent equipment, it is time to evaluate disposition. Typical
              thresholds:
            </p>
            <ul>
              <li><strong>Mobile cranes (&lt;100 ton):</strong> $45&ndash;$85/operating hour total cost</li>
              <li><strong>Mobile cranes (100&ndash;300 ton):</strong> $120&ndash;$250/operating hour</li>
              <li><strong>Crawler cranes (200+ ton):</strong> $200&ndash;$500/operating hour</li>
              <li><strong>Tower cranes:</strong> $150&ndash;$350/operating hour (highly variable by market)</li>
            </ul>

            <h3>Age vs. Condition Decisions</h3>
            <p>
              Age alone does not determine when to replace a crane. A 15-year-old crane with a complete
              maintenance history and recent major overhaul may be more reliable than a 5-year-old crane
              with deferred maintenance. Use your PM data to make condition-based fleet decisions rather
              than arbitrary age-based rules.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Integrating Inspection Data with Maintenance</h2>

            <p>
              The most effective fleet management programs treat inspection and maintenance as a single
              integrated system. Here is how to connect them:
            </p>

            <h3>Automated Deficiency-to-Work-Order Flow</h3>
            <p>
              When an inspector identifies a deficiency during a frequent, periodic, or annual inspection,
              the finding should automatically generate a maintenance work order with severity classification.
              Critical deficiencies (crane must be taken out of service per ASME B30.5-5.2.2.2) generate
              emergency work orders. Non-critical deficiencies generate scheduled work orders that can be
              coordinated with the next PM event.
            </p>

            <h3>Inspection History as Maintenance Intelligence</h3>
            <p>
              Inspection data reveals maintenance trends before they become failures. If daily inspections
              consistently note hydraulic leaks at the same connection point on a crane model, that becomes
              a fleet-wide PM item. If annual inspections show accelerating wear on turntable bearings in
              cranes operating in sandy/coastal environments, those cranes get more frequent bearing
              inspections and greasing intervals.
            </p>

            <h3>Single Source of Truth</h3>
            <p>
              The goal is a single digital record for each crane that contains all inspections, all
              maintenance, all deficiencies, and all component lifecycle data. When an OSHA inspector asks
              for the maintenance history of crane unit #247, you should be able to produce a complete
              timeline in minutes &mdash; not spend hours digging through filing cabinets. CraneCheck was
              built to serve as exactly this kind of integrated inspection and maintenance platform for
              crane fleets of any size.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>KPIs for Fleet Maintenance Performance</h2>

            <p>
              You cannot improve what you do not measure. Track these key performance indicators to evaluate
              and continuously improve your fleet PM program:
            </p>

            <ul>
              <li>
                <strong>PM Completion Rate:</strong> Percentage of scheduled PM work orders completed on
                time. Target: 90%+ for a mature program.
              </li>
              <li>
                <strong>PM-to-CM Ratio:</strong> Ratio of preventive maintenance hours to corrective
                (unplanned) maintenance hours. World-class operations target 80/20 (80% PM, 20% CM).
                Most crane companies start at 40/60 or worse.
              </li>
              <li>
                <strong>Mean Time Between Failures (MTBF):</strong> Average operating hours between
                unplanned breakdowns. Increasing MTBF indicates your PM program is working.
              </li>
              <li>
                <strong>Maintenance Cost per Operating Hour:</strong> Total maintenance spend divided by
                total fleet operating hours. Track this at both fleet and individual crane level.
              </li>
              <li>
                <strong>Fleet Availability:</strong> Percentage of fleet available for work (not down for
                maintenance or repair). Target: 90%+ for well-managed fleets.
              </li>
              <li>
                <strong>Inspection Deficiency Close-Out Time:</strong> Average days from deficiency
                identification to corrective action completion. Shorter is better &mdash; critical items
                should close same-day.
              </li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>OSHA Compliance Considerations for Fleet PM</h2>

            <p>
              OSHA does not prescribe specific PM programs, but the regulatory requirements create a
              framework that your PM program must satisfy:
            </p>

            <ul>
              <li>
                <strong>1926.1417(a) &mdash; Manufacturer procedures:</strong> Maintenance must follow
                manufacturer recommendations. Your PM intervals and tasks must align with the OEM manual.
              </li>
              <li>
                <strong>1926.1417(b) &mdash; Operational aids:</strong> Safety devices (LMI, ATB, limit
                switches) must be maintained in proper working order. Include safety device testing in
                every PM event.
              </li>
              <li>
                <strong>1926.1417(e) &mdash; Maintenance records:</strong> Records must be available.
                OSHA does not specify a retention period for maintenance records, but ASME B30.5 recommends
                retaining records for the life of the crane. See our{" "}
                <Link href="/blog/crane-inspection-record-retention">record retention guide</Link>{" "}
                for detailed requirements.
              </li>
              <li>
                <strong>1926.1417(f) &mdash; Critical components:</strong> Modifications or repairs to
                load-sustaining structural members require manufacturer or registered professional engineer
                approval before the crane returns to service.
              </li>
            </ul>

            <p>
              During an audit, OSHA inspectors will compare your PM records against the manufacturer&rsquo;s
              recommended schedule. Gaps between when PM was due and when it was performed are audit findings.
              For a deeper dive on audit readiness, see our{" "}
              <Link href="/blog/osha-crane-audit-preparation">OSHA crane audit preparation guide</Link>.
            </p>

            {/* ------------------------------------------------------------ */}
            <h2>Getting Started: 90-Day Implementation Plan</h2>

            <p>
              If you are starting from scratch or transitioning from a reactive maintenance culture, here
              is a phased implementation plan:
            </p>

            <h3>Days 1&ndash;30: Foundation</h3>
            <ul>
              <li>Complete fleet asset inventory with current hour meter readings</li>
              <li>Collect all manufacturer maintenance manuals (digital copies preferred)</li>
              <li>Establish a digital fleet management system (spreadsheet minimum, dedicated software preferred)</li>
              <li>Create PM work order templates for each crane model and interval</li>
              <li>Assign a fleet maintenance coordinator or manager</li>
            </ul>

            <h3>Days 31&ndash;60: Launch</h3>
            <ul>
              <li>Schedule and perform baseline PM on every crane in the fleet</li>
              <li>Record current component conditions as your baseline dataset</li>
              <li>Begin tracking all maintenance activities (PM and corrective) digitally</li>
              <li>Establish field service truck capability for jobsite PM</li>
              <li>Train operators on daily/shift-level PM responsibilities</li>
            </ul>

            <h3>Days 61&ndash;90: Optimization</h3>
            <ul>
              <li>Analyze first month of PM data &mdash; identify completion rate gaps</li>
              <li>Integrate inspection findings with maintenance work order system</li>
              <li>Establish KPI dashboards for management review</li>
              <li>Adjust PM intervals based on actual operating conditions (more aggressive for high-utilization cranes)</li>
              <li>Begin oil analysis program for engines and hydraulic systems</li>
            </ul>

            {/* ------------------------------------------------------------ */}
            <h2>Digital Fleet Management with CraneCheck</h2>

            <p>
              CraneCheck was designed specifically for crane fleet operators who need a single platform to
              manage inspections, maintenance, deficiency tracking, and compliance documentation across
              their entire fleet. Key fleet management capabilities include:
            </p>
            <ul>
              <li>Centralized asset registry with hour tracking and component lifecycle monitoring</li>
              <li>Automated PM scheduling with configurable intervals by crane model</li>
              <li>Inspection-to-work-order integration with severity-based routing</li>
              <li>Fleet-wide dashboards showing availability, compliance status, and upcoming PM</li>
              <li>Mobile-first design for field technicians performing PM at jobsites</li>
              <li>Complete audit trail for OSHA and insurance compliance</li>
            </ul>
            <p>
              Whether you operate 5 cranes or 500, a structured fleet PM program is the single most
              impactful investment you can make in equipment reliability, safety compliance, and operating
              cost control.
            </p>

            <div className="bg-brand-light border border-brand rounded-xl p-6 my-8">
              <p className="font-semibold text-navy mb-2">
                Ready to build a fleet PM program that actually works?
              </p>
              <p className="text-gray-600 mb-4">
                CraneCheck gives you the tools to manage inspections, maintenance, and compliance across
                your entire crane fleet from a single platform.
              </p>
              <Link
                href="/demo"
                className="inline-block bg-brand text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand-dark transition no-underline"
              >
                Book a Fleet Demo &rarr;
              </Link>
            </div>
          </div>
        </article>

        <div className="max-w-3xl mx-auto px-4">
          <RelatedPosts currentSlug="crane-fleet-management-preventive-maintenance" />
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </>
  );
}
