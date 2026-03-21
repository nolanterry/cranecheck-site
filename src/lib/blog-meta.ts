export interface BlogMeta {
  slug: string;
  title: string;
  tags: string[];
}

export const BLOG_META: BlogMeta[] = [
  { slug: "29-cfr-1926-1412-explained", title: "29 CFR 1926.1412 Explained: Pre-Shift Crane Inspection Rules", tags: ["osha", "compliance", "inspection-types"] },
  { slug: "annual-crane-inspection-requirements", title: "Annual Crane Inspection Requirements: What You Need to Know", tags: ["inspection-types", "compliance", "documentation"] },
  { slug: "conexpo-2026-crane-inspection-technology", title: "Why Crane Inspection Is Finally Going Digital — ConExpo 2026", tags: ["industry-trends", "technology"] },
  { slug: "crane-accident-investigation-documentation", title: "Crane Accident Investigation Documentation Requirements", tags: ["documentation", "compliance", "osha"] },
  { slug: "crane-inspection-penalties-fines", title: "Crane Inspection Penalties & Fines: What Non-Compliance Costs", tags: ["compliance", "osha", "audit"] },
  { slug: "crane-inspection-record-retention", title: "Crane Inspection Record Retention: How Long to Keep Records", tags: ["documentation", "compliance", "audit"] },
  { slug: "crane-inspection-report-template", title: "Crane Inspection Report Template: What to Include", tags: ["documentation", "inspection-types", "templates"] },
  { slug: "crane-inspection-software-vs-paper", title: "Crane Inspection Software vs Paper Logs: Full Comparison", tags: ["technology", "documentation", "comparison"] },
  { slug: "crane-load-chart-documentation", title: "Crane Load Chart Documentation: Complete Guide", tags: ["documentation", "mobile-cranes", "compliance"] },
  { slug: "crane-maintenance-log-requirements", title: "Crane Maintenance Log Requirements You Can't Ignore", tags: ["documentation", "maintenance", "compliance"] },
  { slug: "crane-operator-certification-requirements", title: "Crane Operator Certification Requirements in 2026", tags: ["certification", "osha", "qualification"] },
  { slug: "crane-rental-inspection-obligations", title: "Crane Rental Inspection Obligations: Who Is Responsible?", tags: ["inspection-types", "compliance", "rental"] },
  { slug: "crane-wire-rope-inspection-guide", title: "Crane Wire Rope Inspection Guide: When to Replace", tags: ["inspection-types", "maintenance", "rigging"] },
  { slug: "daily-crane-inspection-checklist", title: "Daily Crane Inspection Checklist: Never Miss a Step", tags: ["inspection-types", "templates", "compliance"] },
  { slug: "mobile-crane-inspection-checklist", title: "Mobile Crane Inspection Checklist for Field Crews", tags: ["mobile-cranes", "inspection-types", "templates"] },
  { slug: "osha-crane-audit-preparation", title: "OSHA Crane Audit Preparation: Your Complete Guide", tags: ["osha", "audit", "compliance"] },
  { slug: "osha-crane-inspection-requirements", title: "OSHA Crane Inspection Requirements: The Complete Guide", tags: ["osha", "compliance", "inspection-types"] },
  { slug: "overhead-crane-inspection-frequency", title: "Overhead Crane Inspection Frequency: How Often Is Required?", tags: ["overhead-cranes", "inspection-types", "compliance"] },
  { slug: "qualified-vs-competent-person-crane", title: "Qualified vs Competent Person for Crane Inspections", tags: ["certification", "osha", "qualification"] },
  { slug: "rigging-inspection-requirements", title: "Rigging Inspection Requirements: OSHA & ASME Standards", tags: ["rigging", "osha", "inspection-types"] },
  { slug: "tower-crane-inspection-requirements", title: "Tower Crane Inspection Requirements: Complete Compliance Guide", tags: ["tower-cranes", "inspection-types", "compliance"] },
];

export function getRelatedPosts(currentSlug: string, count = 3): BlogMeta[] {
  const current = BLOG_META.find((p) => p.slug === currentSlug);
  if (!current) return BLOG_META.filter((p) => p.slug !== currentSlug).slice(0, count);

  const scored = BLOG_META
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      score: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  return scored.slice(0, count);
}
