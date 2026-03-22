export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  author: string;
}

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  POSTS.forEach((p) => p.tags.forEach((t) => tagMap.set(t, (tagMap.get(t) || 0) + 1)));
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return POSTS.filter((p) => p.tags.includes(tag));
}

export const TAG_LABELS: Record<string, string> = {
  "osha": "OSHA",
  "compliance": "Compliance",
  "inspection": "Inspection",
  "safety": "Safety",
  "documentation": "Documentation",
  "regulations": "Regulations",
  "checklists": "Checklists",
  "certification": "Certification",
  "mobile-crane": "Mobile Crane",
  "tower-crane": "Tower Crane",
  "overhead-crane": "Overhead Crane",
  "wire-rope": "Wire Rope",
  "rigging": "Rigging",
  "audit": "Audit",
  "penalties": "Penalties",
  "technology": "Technology",
  "templates": "Templates",
  "construction": "Construction",
  "ansi-b30": "ANSI B30",
  "load-charts": "Load Charts",
  "maintenance": "Maintenance",
  "rental": "Rental",
  "records": "Records",
  "industry": "Industry",
};

export const POSTS: BlogPost[] = [
  {
    slug: "conexpo-2026-crane-inspection-technology",
    title: "ConExpo 2026: Why Crane Inspection Is Finally Going Digital",
    excerpt: "ConExpo-CON/AGG 2026 is showcasing the most advanced crane technology ever built. But most crane companies still track inspections on paper. That disconnect is closing fast.",
    date: "March 9, 2026",
    readTime: "8 min read",
    category: "Industry",
    tags: ["industry", "technology", "inspection"],
    author: "cranecheck-team",
  },
  {
    slug: "annual-crane-inspection-requirements",
    title: "Annual Crane Inspection Requirements: What OSHA and ANSI B30 Actually Require",
    excerpt: "There are three tiers of crane inspections — frequent, periodic, and annual. Most companies get the first two right and completely botch the annual. Here's what the standards actually say, who's qualified to perform them, and what you need to document.",
    date: "March 9, 2026",
    readTime: "11 min read",
    category: "Compliance",
    tags: ["compliance", "osha", "ansi-b30", "inspection"],
    author: "cranecheck-team",
  },
  {
    slug: "qualified-vs-competent-person-crane",
    title: "Qualified Person vs. Competent Person: Who Can Inspect Your Crane?",
    excerpt: "OSHA uses these terms precisely — and they don't mean the same thing. If the wrong person is signing off on your inspections, those inspections are effectively invalid.",
    date: "March 9, 2026",
    readTime: "9 min read",
    category: "Compliance",
    tags: ["compliance", "osha", "certification", "inspection"],
    author: "cranecheck-team",
  },
  {
    slug: "crane-maintenance-log-requirements",
    title: "Crane Maintenance Log Requirements: What OSHA Expects in Your Records",
    excerpt: "OSHA 1926.1417 has specific maintenance documentation requirements that most crane companies overlook — until an auditor or a plaintiff's attorney comes looking.",
    date: "March 9, 2026",
    readTime: "10 min read",
    category: "Compliance",
    tags: ["compliance", "osha", "maintenance", "documentation"],
    author: "cranecheck-team",
  },
  {
    slug: "crane-rental-inspection-obligations",
    title: "Who's Responsible for Inspecting a Rented Crane? OSHA Rules Explained",
    excerpt: "OSHA's multi-employer worksite rules create complex inspection obligations for rented cranes. Both the rental company and the contractor can be cited.",
    date: "March 9, 2026",
    readTime: "10 min read",
    category: "Safety",
    tags: ["safety", "osha", "rental", "inspection"],
    author: "cranecheck-team",
  },
  {
    slug: "crane-inspection-record-retention",
    title: "How Long Must You Keep Crane Inspection Records? Retention Guide",
    excerpt: "Crane inspection record retention requirements under OSHA, ANSI B30, and state regulations. What to keep, how long, and why digital records eliminate retention risk.",
    date: "March 9, 2026",
    readTime: "8 min read",
    category: "Compliance",
    tags: ["compliance", "records", "documentation", "regulations"],
    author: "cranecheck-team",
  },
  {
    slug: "crane-accident-investigation-documentation",
    title: "Crane Accident Investigation: Documentation That Protects Your Company",
    excerpt: "When a crane incident happens, what you document in the first 24 hours determines whether you face a standard citation or a willful violation. Covers OSHA reporting timelines, scene documentation, and how your inspection history becomes your defense.",
    date: "March 8, 2026",
    readTime: "13 min read",
    category: "Safety",
    tags: ["safety", "osha", "documentation", "penalties"],
    author: "cranecheck-team",
  },
  {
    slug: "rigging-inspection-requirements",
    title: "Rigging Inspection Requirements: Slings, Shackles, and Hardware",
    excerpt: "Complete OSHA rigging inspection requirements under 29 CFR 1926.251. Covers wire rope sling criteria, synthetic web sling checks, chain sling inspection, shackle load ratings, and removal-from-service standards.",
    date: "March 8, 2026",
    readTime: "11 min read",
    category: "Rigging",
    tags: ["rigging", "osha", "inspection", "safety"],
    author: "cranecheck-team",
  },
  {
    slug: "crane-inspection-report-template",
    title: "Crane Inspection Report Template: What Inspectors Actually Need",
    excerpt: "Most crane inspection forms are missing critical fields. Learn what a compliant crane inspection report must contain, common documentation gaps that trigger OSHA citations, and why static templates create more risk than they solve.",
    date: "March 8, 2026",
    readTime: "10 min read",
    category: "Templates",
    tags: ["templates", "inspection", "documentation", "compliance"],
    author: "cranecheck-team",
  },
  {
    slug: "overhead-crane-inspection-frequency",
    title: "Overhead Crane Inspection Frequency: OSHA vs ASME Requirements",
    excerpt: "How often should you inspect overhead cranes? Break down daily, monthly, quarterly, and annual inspection schedules under OSHA 1910.179 and ASME B30.2, plus service classification guidance.",
    date: "March 8, 2026",
    readTime: "12 min read",
    category: "Compliance",
    tags: ["overhead-crane", "compliance", "osha", "inspection"],
    author: "cranecheck-team",
  },
  {
    slug: "crane-load-chart-documentation",
    title: "How to Document Crane Load Charts for OSHA Compliance",
    excerpt: "Complete guide to crane load chart documentation requirements. Learn rated capacity recording, boom length tracking, digital load chart management, and how to prevent citations with proper documentation systems.",
    date: "March 8, 2026",
    readTime: "11 min read",
    category: "Compliance",
    tags: ["compliance", "load-charts", "documentation", "osha"],
    author: "cranecheck-team",
  },
  {
    slug: "mobile-crane-inspection-checklist",
    title: "Mobile Crane Inspection Checklist: Complete Field Guide",
    excerpt: "A comprehensive pre-operation inspection checklist for all-terrain, rough-terrain, and truck-mounted mobile cranes. Covers hydraulic systems, outriggers, load moment indicators, wire rope, and all OSHA-required inspection items for daily compliance.",
    date: "March 7, 2026",
    readTime: "11 min read",
    category: "Checklists",
    tags: ["mobile-crane", "checklists", "inspection", "osha"],
    author: "nolan-terry",
  },
  {
    slug: "crane-inspection-penalties-fines",
    title: "OSHA Crane Inspection Penalties: What Non-Compliance Actually Costs",
    excerpt: "The real financial impact of OSHA crane inspection violations in 2026. From $16,550 serious violations to $165,514 willful violations, plus real citation examples and how penalties compound when multiple cranes and violations are involved.",
    date: "March 6, 2026",
    readTime: "12 min read",
    category: "Compliance",
    tags: ["compliance", "penalties", "osha", "regulations"],
    author: "nolan-terry",
  },
  {
    slug: "tower-crane-inspection-requirements",
    title: "Tower Crane Inspection Requirements: Erection to Dismantling",
    excerpt: "Comprehensive guide to tower crane inspection requirements throughout the crane lifecycle. From foundation engineering review and pre-erection inspections to climbing procedures, monthly/annual inspections, and dismantling requirements under OSHA 29 CFR 1926 Subpart CC.",
    date: "March 5, 2026",
    readTime: "13 min read",
    category: "Regulations",
    tags: ["tower-crane", "regulations", "osha", "inspection"],
    author: "nolan-terry",
  },
  {
    slug: "crane-wire-rope-inspection-guide",
    title: "Crane Wire Rope Inspection: When to Replace and What to Look For",
    excerpt: "Comprehensive guide to crane wire rope inspection based on ASME B30.5 standards. Learn broken wire replacement thresholds, diameter reduction limits, corrosion assessment criteria, heat damage identification, and proper end connection inspection techniques.",
    date: "March 4, 2026",
    readTime: "12 min read",
    category: "Safety",
    tags: ["wire-rope", "safety", "inspection", "ansi-b30"],
    author: "nolan-terry",
  },
  {
    slug: "crane-operator-certification-requirements",
    title: "Crane Operator Certification Requirements: NCCCO, CIC, and State Rules",
    excerpt: "Complete guide to crane operator certification requirements under OSHA's 2026 mandate. Compare NCCCO, CIC-Crane, and NCCER programs, understand state-specific requirements, recertification timelines, and develop compliant operator qualification programs.",
    date: "March 3, 2026",
    readTime: "13 min read",
    category: "Compliance",
    tags: ["certification", "compliance", "osha", "construction"],
    author: "nolan-terry",
  },
  {
    slug: "osha-crane-inspection-requirements",
    title: "OSHA Crane Inspection Requirements: The Complete 2026 Guide",
    excerpt: "Everything you need to know about OSHA's crane inspection requirements under 29 CFR 1926.1412 and 29 CFR 1910.179 — inspection types, frequencies, documentation requirements, and how to stay compliant.",
    date: "March 1, 2026",
    readTime: "12 min read",
    category: "Compliance",
    tags: ["osha", "compliance", "inspection", "regulations"],
    author: "nolan-terry",
  },
  {
    slug: "daily-crane-inspection-checklist",
    title: "Daily Crane Inspection Checklist: What OSHA Actually Requires",
    excerpt: "A detailed breakdown of the OSHA-required daily crane inspection checklist items under 29 CFR 1926.1412(d). Know exactly what your operators need to check before every shift.",
    date: "February 22, 2026",
    readTime: "10 min read",
    category: "Checklists",
    tags: ["checklists", "osha", "inspection", "compliance"],
    author: "nolan-terry",
  },
  {
    slug: "crane-inspection-software-vs-paper",
    title: "Crane Inspection Software vs Paper Logs: Why Digital Wins",
    excerpt: "Paper crane inspection logs are a liability. Digital inspection software eliminates lost records, illegible handwriting, and audit-day panic. Here's the full comparison.",
    date: "February 15, 2026",
    readTime: "9 min read",
    category: "Technology",
    tags: ["technology", "inspection", "documentation", "compliance"],
    author: "nolan-terry",
  },
  {
    slug: "osha-crane-audit-preparation",
    title: "How to Prepare for an OSHA Crane Audit",
    excerpt: "OSHA crane audits don't have to be stressful. Learn what inspectors look for, which records they'll request, and how to be ready before they arrive.",
    date: "February 8, 2026",
    readTime: "11 min read",
    category: "Compliance",
    tags: ["audit", "osha", "compliance", "documentation"],
    author: "nolan-terry",
  },
  {
    slug: "29-cfr-1926-1412-explained",
    title: "29 CFR 1926.1412 Explained: Pre-Shift Crane Inspection Rules",
    excerpt: "A plain-English breakdown of 29 CFR 1926.1412 — the OSHA standard that governs crane inspections on construction sites. What it requires, who's responsible, and how to comply.",
    date: "February 1, 2026",
    readTime: "13 min read",
    category: "Regulations",
    tags: ["regulations", "osha", "construction", "inspection"],
    author: "nolan-terry",
  },
];

export function getPostsByAuthor(authorSlug: string): BlogPost[] {
  return POSTS.filter(p => p.author === authorSlug);
}
