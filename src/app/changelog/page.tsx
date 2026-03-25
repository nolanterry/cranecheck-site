import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See what's new in CraneCheck. Product updates, new features, and improvements to crane inspection software.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Changelog | CraneCheck",
    description:
      "See what's new in CraneCheck. Product updates, new features, and improvements to crane inspection software.",
    url: "https://cranecheck.co/changelog",
  },
};

type ChangeCategory = "new" | "improved" | "fixed";

interface Change {
  category: ChangeCategory;
  text: string;
}

interface Release {
  version: string;
  date: string;
  summary: string;
  changes: Change[];
}

const RELEASES: Release[] = [
  {
    version: "1.2.0",
    date: "March 10, 2026",
    summary: "Wire rope tracking, bulk export, and mobile improvements",
    changes: [
      { category: "new", text: "Wire rope inspection tracking with wear-and-tear photo comparison across inspection cycles" },
      { category: "new", text: "Bulk PDF export — download all inspection reports for a crane or jobsite in one click" },
      { category: "improved", text: "Mobile camera integration now supports burst mode for faster multi-angle documentation" },
      { category: "improved", text: "Dashboard load time reduced by 40% for accounts with 500+ cranes" },
      { category: "fixed", text: "Resolved an issue where offline inspections occasionally duplicated on sync" },
      { category: "fixed", text: "Fixed date picker not respecting timezone settings on inspection scheduling" },
    ],
  },
  {
    version: "1.1.0",
    date: "February 3, 2026",
    summary: "OSHA report builder, team roles, and deficiency workflows",
    changes: [
      { category: "new", text: "OSHA-ready report builder — generate 29 CFR 1926.1412 compliant inspection summaries with one click" },
      { category: "new", text: "Team roles and permissions — assign Inspector, Supervisor, and Admin roles with granular access controls" },
      { category: "improved", text: "Deficiency tracking now supports photo annotations with arrows, circles, and text overlays" },
      { category: "improved", text: "Inspection checklist templates load 3× faster on low-bandwidth connections" },
      { category: "fixed", text: "Corrected load chart reference links for Liebherr LTM series cranes" },
      { category: "fixed", text: "Fixed an issue where inspection reminder emails were sent in UTC instead of the user's local timezone" },
    ],
  },
  {
    version: "1.0.0",
    date: "January 6, 2026",
    summary: "CraneCheck launches — digital crane inspections built for the field",
    changes: [
      { category: "new", text: "Complete digital crane inspection platform with pre-built checklists for mobile, tower, and overhead cranes" },
      { category: "new", text: "Offline-first mobile app — complete inspections without cell service and sync when connected" },
      { category: "new", text: "Photo and video documentation attached directly to inspection line items" },
      { category: "new", text: "Automated inspection scheduling with email and SMS reminders for operators and supervisors" },
      { category: "new", text: "Real-time compliance dashboard showing inspection status across your entire fleet" },
      { category: "new", text: "PDF report generation with company branding, digital signatures, and QR code verification" },
    ],
  },
];

const CATEGORY_CONFIG: Record<ChangeCategory, { label: string; emoji: string; color: string }> = {
  new: { label: "New", emoji: "🆕", color: "bg-emerald-100 text-emerald-800" },
  improved: { label: "Improved", emoji: "✨", color: "bg-blue-100 text-blue-800" },
  fixed: { label: "Fixed", emoji: "🐛", color: "bg-amber-100 text-amber-800" },
};

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Changelog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything new in CraneCheck — features, improvements, and fixes shipped to make crane inspections safer and faster.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="space-y-12">
            {RELEASES.map((release) => (
              <article key={release.version} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand border-2 border-white" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand font-mono text-sm font-semibold">
                    v{release.version}
                  </span>
                  <time className="text-sm text-gray-500">{release.date}</time>
                </div>
                <p className="text-gray-700 font-medium mb-4">{release.summary}</p>
                <ul className="space-y-2">
                  {release.changes.map((change, i) => {
                    const cfg = CATEGORY_CONFIG[change.category];
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium shrink-0 mt-0.5 ${cfg.color}`}>
                          {cfg.emoji} {cfg.label}
                        </span>
                        <span className="text-gray-600 text-sm">{change.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
