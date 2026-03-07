import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "OSHA crane inspection guides, compliance tips, and industry insights from CraneCheck. Stay informed on crane safety regulations and best practices.",
};

const POSTS = [
  {
    slug: "mobile-crane-inspection-checklist",
    title: "Mobile Crane Inspection Checklist: Complete Field Guide",
    excerpt: "A comprehensive pre-operation inspection checklist for all-terrain, rough-terrain, and truck-mounted mobile cranes. Covers hydraulic systems, outriggers, load moment indicators, wire rope, and all OSHA-required inspection items for daily compliance.",
    date: "March 7, 2026",
    readTime: "11 min read",
    category: "Checklists",
  },
  {
    slug: "crane-inspection-penalties-fines",
    title: "OSHA Crane Inspection Penalties: What Non-Compliance Actually Costs",
    excerpt: "The real financial impact of OSHA crane inspection violations in 2026. From $16,550 serious violations to $165,514 willful violations, plus real citation examples and how penalties compound when multiple cranes and violations are involved.",
    date: "March 6, 2026",
    readTime: "12 min read",
    category: "Compliance",
  },
  {
    slug: "tower-crane-inspection-requirements",
    title: "Tower Crane Inspection Requirements: Erection to Dismantling",
    excerpt: "Comprehensive guide to tower crane inspection requirements throughout the crane lifecycle. From foundation engineering review and pre-erection inspections to climbing procedures, monthly/annual inspections, and dismantling requirements under OSHA 29 CFR 1926 Subpart CC.",
    date: "March 5, 2026",
    readTime: "13 min read",
    category: "Regulations",
  },
  {
    slug: "crane-wire-rope-inspection-guide",
    title: "Crane Wire Rope Inspection: When to Replace and What to Look For",
    excerpt: "Comprehensive guide to crane wire rope inspection based on ASME B30.5 standards. Learn broken wire replacement thresholds, diameter reduction limits, corrosion assessment criteria, heat damage identification, and proper end connection inspection techniques.",
    date: "March 4, 2026",
    readTime: "12 min read",
    category: "Safety",
  },
  {
    slug: "crane-operator-certification-requirements",
    title: "Crane Operator Certification Requirements: NCCCO, CIC, and State Rules",
    excerpt: "Complete guide to crane operator certification requirements under OSHA's 2026 mandate. Compare NCCCO, CIC-Crane, and NCCER programs, understand state-specific requirements, recertification timelines, and develop compliant operator qualification programs.",
    date: "March 3, 2026",
    readTime: "13 min read",
    category: "Compliance",
  },
  {
    slug: "osha-crane-inspection-requirements",
    title: "OSHA Crane Inspection Requirements: The Complete 2026 Guide",
    excerpt: "Everything you need to know about OSHA's crane inspection requirements under 29 CFR 1926.1412 and 29 CFR 1910.179 — inspection types, frequencies, documentation requirements, and how to stay compliant.",
    date: "March 1, 2026",
    readTime: "12 min read",
    category: "Compliance",
  },
  {
    slug: "daily-crane-inspection-checklist",
    title: "Daily Crane Inspection Checklist: What OSHA Actually Requires",
    excerpt: "A detailed breakdown of the OSHA-required daily crane inspection checklist items under 29 CFR 1926.1412(d). Know exactly what your operators need to check before every shift.",
    date: "February 22, 2026",
    readTime: "10 min read",
    category: "Checklists",
  },
  {
    slug: "crane-inspection-software-vs-paper",
    title: "Crane Inspection Software vs Paper Logs: Why Digital Wins",
    excerpt: "Paper crane inspection logs are a liability. Digital inspection software eliminates lost records, illegible handwriting, and audit-day panic. Here's the full comparison.",
    date: "February 15, 2026",
    readTime: "9 min read",
    category: "Technology",
  },
  {
    slug: "osha-crane-audit-preparation",
    title: "How to Prepare for an OSHA Crane Audit",
    excerpt: "OSHA crane audits don't have to be stressful. Learn what inspectors look for, which records they'll request, and how to be ready before they arrive.",
    date: "February 8, 2026",
    readTime: "11 min read",
    category: "Compliance",
  },
  {
    slug: "29-cfr-1926-1412-explained",
    title: "29 CFR 1926.1412 Explained: Pre-Shift Crane Inspection Rules",
    excerpt: "A plain-English breakdown of 29 CFR 1926.1412 — the OSHA standard that governs crane inspections on construction sites. What it requires, who's responsible, and how to comply.",
    date: "February 1, 2026",
    readTime: "13 min read",
    category: "Regulations",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Blog</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              OSHA crane inspection guides, compliance tips, and industry insights.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {POSTS.map((post) => (
                <article key={post.slug} className="border border-gray-100 rounded-xl p-6 hover:border-brand/30 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-2 hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
