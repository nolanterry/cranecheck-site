import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crane Accident Investigation: Documentation That Protects Your Company",
  description:
    "How to document crane accidents, near-misses, and incidents for OSHA compliance and legal protection. Covers reporting timelines, investigation procedures, and how digital inspection trails become your defense.",
};

export default function CraneAccidentInvestigationDocumentationPage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Crane Accident Investigation: Documentation That Protects Your Company",
  "description": "How to document crane accidents, near-misses, and incidents for OSHA compliance and legal protection. Covers reporting timelines, investigation procedures, and how digital inspection trails become your defense.",
  "datePublished": "2026-03-08",
  "dateModified": "2026-03-08",
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
    "@id": "https://cranecheck.com/blog/crane-accident-investigation-documentation"
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
      "name": "Crane Accident Investigation: Documentation That Protects Your Company",
      "item": "https://cranecheck.com/blog/crane-accident-investigation-documentation"
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
                Safety
              </span>
              <span className="text-xs text-gray-400">March 8, 2026</span>
              <span className="text-xs text-gray-400">13 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Crane Accident Investigation: Documentation That Protects Your Company
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              When a crane incident happens, what you document in the first 24 hours determines whether you face a standard citation or a willful violation. Your inspection history becomes either your shield or the evidence used against you.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-navy">
            <p>
              No one plans for a crane accident. But when one happens — a dropped load, a collapse, a struck-by incident, a near-miss that was inches from a fatality — the documentation you produce in the aftermath will define your company&apos;s legal and regulatory exposure for years. This is not about bureaucracy. It is about survival.
            </p>
            <p>
              Companies with comprehensive, digitally-documented inspection histories consistently face lower penalties, fewer willful citations, and stronger positions in litigation. Companies with gaps in their records, paper forms they cannot find, or no records at all face the worst outcomes. The difference is documentation — and it starts long before the accident happens.
            </p>

            <h2>OSHA Reporting Requirements: The Clock Starts Immediately</h2>
            <p>
              Under 29 CFR 1904.39, employers must report certain crane incidents to OSHA within strict timeframes:
            </p>
            <ul>
              <li><strong>8 hours:</strong> Any work-related fatality. The 8-hour clock starts when the employer learns of the death, not when it occurs. Call OSHA&apos;s hotline at 1-800-321-OSHA or report online.</li>
              <li><strong>24 hours:</strong> Any work-related in-patient hospitalization, amputation, or loss of an eye. Same reporting methods.</li>
            </ul>
            <p>
              Failure to report within these windows is itself a citable violation. OSHA treats late reporting as an indication that the employer was trying to avoid investigation. Do not wait for the full picture before reporting — report the event, then provide additional details as your investigation progresses.
            </p>
            <p>
              Beyond federal OSHA, check your state requirements. States with OSHA-approved state plans (California, Washington, Michigan, etc.) may have additional or different reporting requirements.
            </p>

            <h2>Immediate Post-Incident Documentation</h2>
            <p>
              The first 24 hours after a crane incident are the most critical documentation window. Memories fade, physical evidence gets disturbed, and the pressure to &quot;get back to work&quot; can override the need to preserve information. Here is what to document immediately:
            </p>

            <h3>Scene Documentation</h3>
            <ul>
              <li>Photographs from multiple angles — the crane, the load, the rigging, the landing zone, the surrounding area</li>
              <li>Video if possible, especially of the crane position and any visible damage</li>
              <li>Weather conditions at the time of the incident (wind speed is critical for mobile cranes)</li>
              <li>Ground conditions — was the crane on mats, outriggers fully deployed, ground level?</li>
              <li>Position of the boom, load line, and any attachments at the time of the incident</li>
              <li>Barricade and signal person positions</li>
              <li>Nearby power lines and their distance from the crane</li>
            </ul>

            <h3>Equipment Documentation</h3>
            <ul>
              <li>Crane identification — make, model, serial number, rated capacity, configuration at time of incident</li>
              <li>Load weight — actual vs. rated capacity at the radius being used</li>
              <li><Link href="/blog/crane-load-chart-documentation">Load chart</Link> for the crane&apos;s configuration at the time of the incident</li>
              <li>Rigging equipment used — sling type, capacity, condition, last inspection date</li>
              <li>Safety device status — were the LMI, anti-two-block, and swing limiters functional?</li>
              <li>Maintenance and inspection history — <strong>this is where your pre-existing records become critical</strong></li>
            </ul>

            <h3>Personnel Documentation</h3>
            <ul>
              <li>Operator name, certification, training records, years of experience</li>
              <li>Signal person name, qualification documentation</li>
              <li>Rigger name, qualification documentation</li>
              <li>Lift director (if applicable) and their role during the lift</li>
              <li>Witness statements — take them immediately, in writing, signed and dated</li>
              <li>Hours worked that day and preceding days (fatigue analysis)</li>
            </ul>

            <h3>Lift Plan Documentation</h3>
            <ul>
              <li>Was a lift plan in place? If so, produce it.</li>
              <li>Was the lift a &quot;critical lift&quot; (typically defined as 75-80% of rated capacity)?</li>
              <li>Did the actual lift match the planned lift? If not, what deviated?</li>
              <li>Who approved the lift plan?</li>
            </ul>

            <h2>Your Inspection History Is Your Defense</h2>
            <p>
              Here is the reality that most crane companies do not understand until it is too late: <strong>your inspection history is the single most important document in any crane accident investigation.</strong>
            </p>
            <p>
              When OSHA investigates a crane incident, the first request is always for inspection records. They want to see:
            </p>
            <ul>
              <li>The most recent daily inspection for the crane involved</li>
              <li>The most recent monthly and annual periodic inspections</li>
              <li>Any deficiencies found in prior inspections and evidence they were corrected</li>
              <li>The inspection history for the rigging equipment involved</li>
              <li>Inspector qualifications for periodic inspections</li>
            </ul>
            <p>
              If you can produce complete, timestamped, photo-documented inspection records showing a consistent pattern of compliance, you are in a strong position. The narrative becomes: &quot;We did everything right. This was an unforeseeable event despite our diligent safety program.&quot;
            </p>
            <p>
              If you cannot produce records — or if your records have gaps, blank fields, or inconsistencies — the narrative becomes: &quot;This company was negligent. They did not maintain their equipment. They did not follow their own inspection procedures.&quot;
            </p>
            <p>
              The difference between a $16,000 serious citation and a $161,000 willful citation often comes down to what your records show. And in civil litigation, the difference between a defensible case and a multi-million dollar settlement comes down to the same records.
            </p>

            <h2>Near-Miss Documentation</h2>
            <p>
              Near-misses are not reportable to OSHA (unless they result in hospitalization or death), but they are arguably more important to document than actual incidents. Why? Because a pattern of undocumented near-misses that precedes an actual accident is devastating in court.
            </p>
            <p>
              If a plaintiff attorney can establish that your company experienced similar near-misses before the accident and did not document them, did not investigate them, and did not take corrective action, that is strong evidence of negligence.
            </p>
            <p>
              Document every near-miss with:
            </p>
            <ul>
              <li>Date, time, location, crane involved</li>
              <li>Description of what happened and what could have happened</li>
              <li>Root cause analysis — even a brief one</li>
              <li>Corrective actions taken to prevent recurrence</li>
              <li>Follow-up verification that corrective actions were effective</li>
            </ul>

            <h2>Root Cause Analysis Framework</h2>
            <p>
              Every crane incident investigation should include a structured root cause analysis. The goal is not to assign blame — it is to identify systemic failures that can be corrected. Use the &quot;5 Whys&quot; method as a starting point:
            </p>
            <ul>
              <li><strong>What happened?</strong> A wire rope sling failed during a lift, dropping a 10-ton steel beam.</li>
              <li><strong>Why did the sling fail?</strong> The sling had severe corrosion and broken wires exceeding removal criteria.</li>
              <li><strong>Why was a corroded sling in service?</strong> Pre-shift rigging inspection was not performed that morning.</li>
              <li><strong>Why was the inspection skipped?</strong> The crew was under pressure to start early for a concrete pour deadline.</li>
              <li><strong>Why did schedule pressure override safety procedures?</strong> No management enforcement of mandatory pre-use inspection policy.</li>
            </ul>
            <p>
              The root cause is rarely the obvious first answer. It is almost always a system failure — inadequate procedures, insufficient training, schedule pressure without safety guardrails, or broken documentation processes that allowed defective equipment to remain in service.
            </p>

            <h2>Building a Documentation System Before You Need It</h2>
            <p>
              The worst time to fix your documentation system is after an accident. The best time is now. A complete crane safety documentation system includes:
            </p>
            <ul>
              <li><Link href="/blog/daily-crane-inspection-checklist">Daily inspection records</Link> for every crane, every shift, with enforced completeness</li>
              <li><Link href="/blog/overhead-crane-inspection-frequency">Periodic inspection schedules</Link> with automated reminders and documented results</li>
              <li><Link href="/blog/rigging-inspection-requirements">Rigging equipment tracking</Link> with inspection history per sling and piece of hardware</li>
              <li>Operator certification and training records linked to each crane they operate</li>
              <li>Corrective action tracking from deficiency discovery through verified resolution</li>
              <li>Near-miss reporting and investigation records</li>
              <li>Incident investigation reports with photos, witness statements, and root cause analysis</li>
            </ul>
            <p>
              <Link href="/pricing">CraneCheck</Link> provides this complete documentation system out of the box. Every inspection, every crane, every piece of rigging — documented, timestamped, photo-attached, and instantly retrievable. When the worst happens, your records tell the story of a company that took safety seriously.
            </p>

            <h2>Key Takeaways</h2>
            <ul>
              <li>Report fatalities to OSHA within 8 hours, hospitalizations within 24 hours — no exceptions</li>
              <li>Document the scene, equipment, personnel, and lift plan within the first 24 hours</li>
              <li>Your pre-existing inspection history is the most important document in any investigation</li>
              <li>Gaps in inspection records are interpreted as evidence of negligence</li>
              <li>Document every near-miss — undocumented near-misses before an accident are devastating in court</li>
              <li>Root cause analysis should identify system failures, not just assign blame</li>
              <li>Build your documentation system before you need it — not after the accident</li>
            </ul>
          </div>
        </article>

        <section className="bg-navy py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Build Your Defense Before You Need It
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              CraneCheck creates the complete, audit-ready inspection trail that protects your company when it matters most.
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
