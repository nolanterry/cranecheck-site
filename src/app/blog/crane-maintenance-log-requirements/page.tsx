import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crane Maintenance Log Requirements: What OSHA Expects in Your Records",
  description:
    "OSHA 1926.1417 requires documented crane maintenance procedures. Learn what must be logged, how long to keep records, and common citation triggers for maintenance documentation gaps.",
};

export default function CraneMaintenanceLogRequirementsPage() {
  return (
    
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Crane Maintenance Log Requirements: What OSHA Expects in Your Records",
  "description": "OSHA 1926.1417 requires documented crane maintenance procedures. Learn what must be logged, how long to keep records, and common citation triggers for maintenance documentation gaps.",
  "datePublished": "2026-03-09",
  "dateModified": "2026-03-09",
  "author": {
    "@type": "Organization",
    "name": "CraneCheck",
    "url": "https://cranecheck.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CraneCheck",
    "url": "https://cranecheck.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://cranecheck.com/blog/crane-maintenance-log-requirements"
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
      "item": "https://cranecheck.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://cranecheck.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Crane Maintenance Log Requirements: What OSHA Expects in Your Records",
      "item": "https://cranecheck.com/blog/crane-maintenance-log-requirements"
    }
  ]
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main>
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                Compliance
              </span>
              <span className="text-xs text-gray-400">March 9, 2026</span>
              <span className="text-xs text-gray-400">10 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Maintenance Log Requirements: What OSHA Expects in Your Records
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              Inspections get all the attention. But OSHA 1926.1417 has specific maintenance documentation requirements that most crane companies overlook — until an auditor or a plaintiff&apos;s attorney comes looking for them.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-navy">
            <p>
              Every crane company knows they need to maintain their equipment. Fewer know that OSHA has specific requirements for how that maintenance is documented. And even fewer can produce those records when asked.
            </p>
            <p>
              The gap between &quot;we maintain our cranes&quot; and &quot;we can prove we maintain our cranes&quot; is where citations, lawsuits, and insurance disputes live.
            </p>

            <h2>OSHA 1926.1417: The Maintenance Standard</h2>
            <p>
              Section 1926.1417 of OSHA&apos;s crane standard establishes the baseline maintenance requirements:
            </p>
            <ul>
              <li><strong>Maintenance procedures</strong> must be established by a qualified person and followed</li>
              <li><strong>Manufacturer procedures</strong> must be complied with — if the manufacturer says to grease the swing bearing every 100 hours, that&apos;s not a suggestion</li>
              <li><strong>Maintenance must not create safety hazards</strong> — maintenance activities themselves must be performed safely</li>
              <li><strong>Replaced load-sustaining parts</strong> must be at least equivalent to the original in terms of material, dimension, and strength</li>
            </ul>

            <h2>What Should Be in Your Maintenance Log</h2>
            <p>
              While OSHA doesn&apos;t prescribe an exact format for maintenance records, enforcement practice and industry standards (ANSI B30, ASME) establish clear expectations. A defensible maintenance log should include:
            </p>

            <h3>For Each Maintenance Activity</h3>
            <ul>
              <li><strong>Date and time</strong> of the maintenance</li>
              <li><strong>Equipment identification</strong> — serial number, unit number, or other unique identifier</li>
              <li><strong>Description of work performed</strong> — specific, not &quot;general maintenance&quot;</li>
              <li><strong>Parts replaced</strong> — part numbers, specifications, and source</li>
              <li><strong>Who performed the work</strong> — name and qualifications</li>
              <li><strong>Hours/usage at time of maintenance</strong> — connects to interval-based schedules</li>
              <li><strong>Next scheduled maintenance</strong> — based on manufacturer intervals or qualified person determination</li>
            </ul>

            <h3>For Preventive Maintenance Programs</h3>
            <ul>
              <li><strong>PM schedule</strong> — what gets done at what intervals (daily, weekly, monthly, quarterly, annual)</li>
              <li><strong>Manufacturer service bulletins</strong> — tracked and implemented</li>
              <li><strong>Fluid analysis records</strong> — hydraulic fluid, gear oil, engine oil sampling and results</li>
              <li><strong>Lubrication records</strong> — what was greased, when, with what product</li>
              <li><strong>Filter change records</strong> — hydraulic, fuel, air, with hour/date tracking</li>
            </ul>

            <h3>For Corrective Maintenance (Repairs)</h3>
            <ul>
              <li><strong>What failed and how it was discovered</strong> — inspection finding, operator report, breakdown</li>
              <li><strong>Root cause</strong> — if determined</li>
              <li><strong>Repair details</strong> — specific work done, including welding procedures if applicable</li>
              <li><strong>Return-to-service verification</strong> — who authorized the crane to go back to work and on what basis</li>
              <li><strong>Testing performed</strong> — load tests, function tests, safety device verification after repair</li>
            </ul>

            <h2>Manufacturer Requirements: Not Optional</h2>
            <p>
              OSHA 1926.1417(a) requires compliance with manufacturer maintenance procedures. This is not &quot;best practice&quot; — it&apos;s a legal requirement. That means:
            </p>
            <ul>
              <li>You must <strong>have</strong> the manufacturer&apos;s maintenance manual for every crane you operate</li>
              <li>You must <strong>follow</strong> the intervals and procedures specified in that manual</li>
              <li>You must <strong>document</strong> that you followed them</li>
              <li>If you deviate from manufacturer procedures, you need a <strong>qualified person</strong> to determine and document alternative procedures that are at least as protective</li>
            </ul>
            <p>
              During an OSHA investigation, the compliance officer will request the manufacturer&apos;s manual and compare your maintenance records against the manufacturer&apos;s required intervals. Gaps between what the manufacturer requires and what you actually did are citations waiting to happen.
            </p>

            <h2>How Long to Keep Records</h2>
            <p>
              OSHA&apos;s crane standards don&apos;t specify an explicit retention period for all maintenance records, but practical and legal requirements establish clear guidance:
            </p>
            <ul>
              <li><strong>Inspection records:</strong> Must be maintained until the next inspection of that type is completed (minimum)</li>
              <li><strong>Annual inspection records:</strong> Maintain for the life of the equipment — these establish the crane&apos;s ongoing safety history</li>
              <li><strong>Maintenance records:</strong> Industry standard is life of the equipment or a minimum of 5 years, whichever is longer</li>
              <li><strong>Modification/repair records:</strong> Permanently — these affect the crane&apos;s rated capacity and operational parameters</li>
              <li><strong>Litigation hold:</strong> If there is any incident, investigation, or litigation, all records must be preserved indefinitely until the matter is resolved</li>
            </ul>
            <p>
              <strong>Our recommendation:</strong> Keep everything for the life of the equipment plus 5 years after disposal. Storage is cheap. Legal exposure from missing records is not.
            </p>

            <h2>Common Citation Triggers</h2>

            <h3>1. No Documented Maintenance Program</h3>
            <p>
              &quot;We maintain our cranes when they need it&quot; is not a maintenance program. OSHA expects a written, systematic program established by a qualified person that covers all equipment in your fleet.
            </p>

            <h3>2. Manufacturer Interval Gaps</h3>
            <p>
              The manufacturer says hydraulic fluid change every 2,000 hours. Your records show 4,000 hours between changes — or no records at all. This is a direct violation of 1926.1417(a).
            </p>

            <h3>3. Unqualified Repairs</h3>
            <p>
              Structural repairs, welding on load-bearing members, or modifications performed by unqualified persons or without proper procedures. Under 1926.1417(e), these require qualified person oversight and potentially engineering approval.
            </p>

            <h3>4. Non-OEM Parts Without Documentation</h3>
            <p>
              Using aftermarket parts is allowed — but they must be equivalent to OEM specs. Without documentation proving equivalence, you&apos;re exposed. Keep specs, certifications, and material test reports for critical replacement parts.
            </p>

            <h3>5. No Return-to-Service Documentation</h3>
            <p>
              A crane was taken out of service for repairs. Who authorized it to go back to work? On what basis? Was it tested? Without this documentation, there&apos;s no evidence the repair was verified before the crane went back under load.
            </p>

            <h2>Preventive vs. Reactive: The Documentation Difference</h2>
            <p>
              Companies with preventive maintenance programs and documented schedules consistently face lower OSHA penalties than reactive, break-fix operations. Why? Because a documented PM program demonstrates:
            </p>
            <ul>
              <li><strong>Good faith:</strong> You&apos;re actively trying to maintain safe equipment</li>
              <li><strong>Systematic approach:</strong> Not random or personality-dependent</li>
              <li><strong>Predictability:</strong> Problems get caught before they become failures</li>
              <li><strong>Defensibility:</strong> If something does fail, your records show it wasn&apos;t from neglect</li>
            </ul>
            <p>
              In OSHA penalty calculations, an employer&apos;s &quot;good faith&quot; can reduce penalties by up to 25%. A documented, followed PM program is one of the strongest demonstrations of good faith you can present.
            </p>

            <h2>Stop Maintaining Cranes on Paper</h2>
            <p>
              The information needs to be captured at the point of work — when the mechanic finishes the job, when the part gets replaced, when the fluid gets sampled. Not reconstructed later from memory, not transcribed from a grease-stained notebook, not entered in bulk at the end of the month. Real-time documentation at the point of maintenance is the standard. Build your system to make that easy.
            </p>
          </div>
        </article>

        <section className="bg-navy py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Maintenance Tracking That Keeps You Compliant
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              CraneCheck tracks maintenance schedules, manufacturer intervals, and corrective actions — all linked to your inspection records for complete equipment history.
            </p>
            <Link
              href="/pricing"
              className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
