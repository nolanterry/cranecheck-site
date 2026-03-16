import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualified Person vs. Competent Person: Who Can Inspect Your Crane?",
  description:
    "OSHA defines qualified and competent persons differently for crane inspections. Getting this wrong means your inspections are invalid. Here's exactly who can do what.",
};

export default function QualifiedVsCompetentPersonCranePage() {
  const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Qualified Person vs. Competent Person: Who Can Inspect Your Crane?",
  "description": "OSHA defines qualified and competent persons differently for crane inspections. Getting this wrong means your inspections are invalid. Here's exactly who can do what.",
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
    "@id": "https://cranecheck.com/blog/qualified-vs-competent-person-crane"
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
      "name": "Qualified Person vs. Competent Person: Who Can Inspect Your Crane?",
      "item": "https://cranecheck.com/blog/qualified-vs-competent-person-crane"
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
              <span className="text-xs text-gray-400">9 min read</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Qualified Person vs. Competent Person: Who Can Inspect Your Crane?
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl">
              OSHA uses these terms precisely — and they don&apos;t mean the same thing. If the wrong person is signing off on your inspections, those inspections are effectively invalid. Here&apos;s who can do what.
            </p>
          </div>
        </section>

        <article className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 prose prose-lg prose-gray prose-headings:text-navy prose-a:text-brand prose-a:no-underline hover:prose-a:underline prose-strong:text-navy">
            <p>
              &quot;Our most experienced operator does all our inspections.&quot; We hear this constantly from crane companies. And it&apos;s one of the most common — and costly — compliance mistakes in the industry.
            </p>
            <p>
              OSHA&apos;s crane standards (29 CFR 1926 Subpart CC) use two specific designations for people authorized to perform inspections and make safety determinations: <strong>competent person</strong> and <strong>qualified person</strong>. These are not interchangeable. Each has a specific definition, specific authority, and specific limitations. Getting this wrong doesn&apos;t just mean paperwork problems — it means your inspections may not count at all.
            </p>

            <h2>The OSHA Definitions</h2>

            <h3>Competent Person (29 CFR 1926.1401)</h3>
            <blockquote>
              <p>
                One who is capable of identifying existing and predictable hazards in the surroundings or working conditions which are unsanitary, hazardous, or dangerous to employees, and who has authorization to take prompt corrective measures to eliminate them.
              </p>
            </blockquote>
            <p>
              Key elements: (1) can identify hazards, and (2) has the <strong>authority</strong> to take corrective action. A competent person isn&apos;t just knowledgeable — they must have organizational authority to shut things down when something is unsafe.
            </p>

            <h3>Qualified Person (29 CFR 1926.1401)</h3>
            <blockquote>
              <p>
                A person who, by possession of a recognized degree, certificate, or professional standing, or who by extensive knowledge, training, and experience, successfully demonstrated the ability to solve/resolve problems relating to the subject matter, the work, or the project.
              </p>
            </blockquote>
            <p>
              Key elements: Requires <strong>demonstrated expertise</strong> through formal credentials or extensive verifiable experience. This is a higher technical bar than &quot;competent person.&quot;
            </p>

            <h2>Who Can Do What: The Breakdown</h2>

            <h3>What a Competent Person Can Do</h3>
            <ul>
              <li><strong>Shift inspections:</strong> Pre-shift visual checks per 1926.1412(a)</li>
              <li><strong>Ground condition assessments:</strong> Determine if ground can support the crane (1926.1402)</li>
              <li><strong>Assembly/disassembly oversight:</strong> Direct A/D operations (1926.1404)</li>
              <li><strong>Hazard assessment:</strong> Evaluate site conditions, power line proximity, load path</li>
              <li><strong>Tag/lock-out decisions:</strong> Take equipment out of service when hazards are identified</li>
              <li><strong>Monthly periodic inspections:</strong> Routine periodic inspections per 1926.1412(b)</li>
            </ul>

            <h3>What Only a Qualified Person Can Do</h3>
            <ul>
              <li><strong>Annual comprehensive inspections:</strong> Required by 1926.1412(c) — must be performed by a qualified person</li>
              <li><strong>Determine inspection intervals:</strong> Set the periodic inspection schedule based on usage, conditions, and manufacturer requirements</li>
              <li><strong>Wire rope assessments:</strong> Evaluate wire rope condition against removal criteria under 1926.1413</li>
              <li><strong>Structural evaluations:</strong> Assess cracks, deformation, corrosion, and structural integrity</li>
              <li><strong>Modifications and repairs:</strong> Approve design changes, modifications, or structural repairs to crane components</li>
              <li><strong>Load testing:</strong> Design and supervise load tests when required</li>
              <li><strong>Crane rating changes:</strong> Evaluate and authorize capacity changes</li>
            </ul>

            <h2>The Most Common Mistakes</h2>

            <h3>1. Using an Operator for Annual Inspections</h3>
            <p>
              Your best operator may have 30 years of experience and know the crane inside and out. That&apos;s great — and it doesn&apos;t automatically make them a &quot;qualified person&quot; for annual inspection purposes. Unless they have formal credentials (engineering degree, manufacturer certification, NCCCO inspector cert) or you can document extensive specific training and experience that meets the OSHA definition, their annual inspection is vulnerable to challenge.
            </p>

            <h3>2. No Documentation of Qualifications</h3>
            <p>
              Even if someone genuinely meets the &quot;qualified person&quot; definition, you need to be able to prove it. When OSHA asks &quot;Who performed this annual inspection and what are their qualifications?&quot; — &quot;Oh, that&apos;s Mike, he&apos;s been doing this for 20 years&quot; is not a compliant answer. You need their credentials, training records, certifications, and experience documentation on file.
            </p>

            <h3>3. Competent Person Without Authority</h3>
            <p>
              The definition requires authorization to take prompt corrective action. If your designated competent person can identify a hazard but needs to call their supervisor for permission to shut down the crane, they don&apos;t meet the definition. The authority to act must be real, documented, and understood by everyone on site.
            </p>

            <h3>4. Single Person for Everything</h3>
            <p>
              Having one person serve as both competent and qualified person isn&apos;t prohibited — if they genuinely meet both definitions. But it creates a single point of failure. When that person is sick, on vacation, or leaves the company, your entire inspection program stalls. Build depth.
            </p>

            <h3>5. Assuming Third-Party Inspectors Cover Everything</h3>
            <p>
              Hiring a third-party qualified person for annual inspections is common and smart. But it doesn&apos;t relieve you of the obligation to have competent persons on site for daily and periodic inspections. The third party handles annuals — you still need internal people handling everything else.
            </p>

            <h2>How to Designate and Document</h2>

            <h3>For Competent Persons</h3>
            <ol>
              <li><strong>Formally designate in writing.</strong> A signed letter or designation form that identifies the person by name, states they are designated as a competent person, and specifies the scope of their authority.</li>
              <li><strong>Document their training.</strong> Crane-specific safety training, hazard recognition, OSHA standards familiarization. Keep certificates and training records.</li>
              <li><strong>Confirm authority.</strong> The designation must explicitly grant authority to take corrective action, including stopping operations and removing equipment from service.</li>
              <li><strong>Review periodically.</strong> Competent person designations should be reviewed annually or when responsibilities change.</li>
            </ol>

            <h3>For Qualified Persons</h3>
            <ol>
              <li><strong>Verify credentials.</strong> Collect and maintain copies of degrees, certifications (NCCCO, manufacturer certs), professional licenses, or detailed experience documentation.</li>
              <li><strong>Match qualifications to equipment.</strong> A person qualified to inspect overhead bridge cranes may not be qualified for mobile hydraulic cranes. Ensure the qualifier matches the equipment.</li>
              <li><strong>Maintain current records.</strong> Certifications expire. Training becomes outdated. Review qualified person files annually.</li>
              <li><strong>Document alongside inspections.</strong> Every annual inspection record should include the inspector&apos;s qualifications — not just their name.</li>
            </ol>

            <h2>What OSHA Looks for During an Audit</h2>
            <p>
              When an OSHA compliance officer reviews your crane program, they will:
            </p>
            <ul>
              <li>Ask who performs each type of inspection</li>
              <li>Request documentation of those persons&apos; qualifications or designations</li>
              <li>Verify that competent persons have documented authority to take corrective action</li>
              <li>Check that qualified persons meet the definition for the specific inspection type they performed</li>
              <li>Look for gaps where the wrong designation level performed an inspection that required a higher one</li>
            </ul>
            <p>
              If they find an annual inspection signed by someone who doesn&apos;t meet the &quot;qualified person&quot; standard, that inspection doesn&apos;t count. And now you&apos;re not just cited for the personnel issue — you&apos;re cited for not having a valid annual inspection at all.
            </p>

            <h2>Get It Right From the Start</h2>
            <p>
              The competent/qualified distinction isn&apos;t bureaucratic hairsplitting. It&apos;s the foundation your entire crane inspection program stands on. Get the designations right, document everything, and make sure every inspection is signed by someone with the proper authority and qualifications for that inspection type.
            </p>
          </div>
        </article>

        <section className="bg-navy py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Track Inspector Qualifications Alongside Every Inspection
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              CraneCheck links inspector credentials to every inspection record — so when OSHA asks, you have the answer in seconds.
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
