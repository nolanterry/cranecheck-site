import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cranecheck.com";
  const now = new Date();

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
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/compare/inspectall`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/paper`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
