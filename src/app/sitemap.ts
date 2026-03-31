import type { MetadataRoute } from "next";
import { getAllTags } from "@/lib/blog-posts";
import { GLOSSARY_TERMS } from "@/lib/glossary-data";
import { WEBINARS } from "@/lib/webinar-data";
import { REPORTS } from "@/lib/report-data";
import { getAllCaseStudySlugs } from "@/lib/case-study-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cranecheck.co";
  const now = new Date();
  const tags = getAllTags();
  const caseStudySlugs = getAllCaseStudySlugs();

  const blogSlugs = [
    "osha-crane-inspection-requirements",
    "daily-crane-inspection-checklist",
    "crane-inspection-software-vs-paper",
    "osha-crane-audit-preparation",
    "29-cfr-1926-1412-explained",
    "mobile-crane-inspection-checklist",
    "tower-crane-inspection-requirements",
    "overhead-crane-inspection-frequency",
    "crane-inspection-penalties-fines",
    "crane-operator-certification-requirements",
    "crane-load-chart-documentation",
    "crane-wire-rope-inspection-guide",
    "rigging-inspection-requirements",
    "crane-accident-investigation-documentation",
    "crane-inspection-report-template",
    "annual-crane-inspection-requirements",
    "qualified-vs-competent-person-crane",
    "crane-maintenance-log-requirements",
    "crane-rental-inspection-obligations",
    "crane-inspection-record-retention",
    "conexpo-2026-crane-inspection-technology",
    "crane-lift-plan-requirements",
    "third-party-crane-inspection",
    "crane-outrigger-inspection-setup",
    "ansi-b30-vs-osha-crane-standards",
    "lattice-boom-crane-inspection",
    "crane-inspection-demolition-projects",
    "crane-inspection-software-roi",
    "crane-ground-conditions-setup",
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({
      url: `${base}/reports/${r.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/getting-started`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/customers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...caseStudySlugs.map((slug) => ({
      url: `${base}/customers/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/status`, lastModified: now, changeFrequency: "daily" as const, priority: 0.5 },
    { url: `${base}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/general-contractors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/crane-rental-companies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/safety-directors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/blog/authors`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/blog/authors/nolan-terry`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/blog/authors/cranecheck-team`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/partners`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/migrate-from`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migrate-from/inspectall`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migrate-from/paper-logs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migrate-from/hvi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/inspectall`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/paper`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/security`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/developers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/blog/tag`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 },
    ...tags.map(({ tag }) => ({
      url: `${base}/blog/tag/${tag}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    { url: `${base}/glossary`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    ...GLOSSARY_TERMS.map((term) => ({
      url: `${base}/glossary/${term.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/webinars`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...WEBINARS.map((w) => ({
      url: `${base}/webinars/${w.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({
      url: `${base}/reports/${r.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
