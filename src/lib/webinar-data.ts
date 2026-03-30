export interface Webinar {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  duration: string;
  speaker: { name: string; title: string; company: string };
  topics: string[];
  status: "upcoming" | "on-demand";
  category: string;
}

export const WEBINARS: Webinar[] = [
  {
    slug: "osha-crane-inspection-compliance-2026",
    title: "OSHA Crane Inspection Compliance in 2026: What's Changed & What's Coming",
    description: "A comprehensive walkthrough of current OSHA 29 CFR 1926.1412 requirements, recent enforcement trends, and how to prepare your crane inspection program for increased scrutiny.",
    longDescription: "OSHA crane inspection enforcement has intensified dramatically — citations are up 34% year-over-year and willful violation penalties now exceed $165K per instance. This webinar breaks down exactly what inspectors look for, the most common citations crane companies receive, and a step-by-step checklist for audit-readiness. We'll cover the shift from paper to digital documentation, how to structure your inspection program to withstand regulatory scrutiny, and real-world case studies from companies that passed surprise OSHA audits. Whether you're a safety director, fleet manager, or crane operator, you'll leave with an actionable compliance roadmap.",
    date: "2026-04-15",
    time: "2:00 PM ET",
    duration: "45 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "CraneCheck" },
    topics: [
      "29 CFR 1926.1412 requirements breakdown",
      "Top 10 most common OSHA crane citations",
      "Digital vs. paper documentation: what OSHA prefers",
      "Building an audit-ready inspection program",
      "Real-world case studies from passed audits",
    ],
    status: "upcoming",
    category: "Compliance",
  },
  {
    slug: "digital-crane-inspection-adoption",
    title: "From Paper to Digital: How Top Crane Companies Are Modernizing Inspections",
    description: "Learn how leading crane companies have transitioned from paper checklists to digital inspection workflows — and the ROI they're seeing in reduced liability, faster audits, and fewer citations.",
    longDescription: "The crane industry is experiencing a digital transformation, and inspection documentation is at the center of it. Companies that have moved to digital inspection workflows report 73% faster audit preparation, 91% fewer documentation gaps, and measurable reductions in OSHA citations. This webinar features insights from safety directors who've led successful digital transitions, including common pitfalls to avoid, change management strategies for field crews, and how to evaluate and implement inspection software. We'll also demonstrate live how a typical pre-shift, monthly, and annual inspection flows in CraneCheck compared to traditional paper processes.",
    date: "2026-05-06",
    time: "1:00 PM ET",
    duration: "50 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "CraneCheck" },
    topics: [
      "Why the crane industry is going digital now",
      "ROI metrics from companies that made the switch",
      "Change management: getting field crews on board",
      "Live demo: digital pre-shift, monthly, and annual inspections",
      "Evaluating inspection software: what to look for",
    ],
    status: "upcoming",
    category: "Technology",
  },
  {
    slug: "crane-accident-prevention-documentation",
    title: "How Proper Documentation Prevents Crane Accidents (And Protects Your Company)",
    description: "Explore the direct link between inspection documentation quality and accident prevention — with data from OSHA investigations and insurance claim analyses.",
    longDescription: "Every major crane accident investigation starts with one question: where are the inspection records? In this on-demand webinar, we analyze data from 50+ crane incident investigations to show how documentation gaps directly correlate with accident frequency and severity. You'll learn the critical documentation elements that insurance companies and OSHA investigators examine, how to structure deficiency tracking to catch problems before they become incidents, and the legal implications of missing or incomplete records. This session is essential for safety directors, risk managers, and anyone responsible for crane fleet documentation.",
    date: "2026-02-20",
    time: "2:00 PM ET",
    duration: "40 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "CraneCheck" },
    topics: [
      "Data from 50+ crane incident investigations",
      "Documentation gaps that lead to accidents",
      "What insurance companies examine after an incident",
      "Deficiency tracking best practices",
      "Legal implications of missing records",
    ],
    status: "on-demand",
    category: "Safety",
  },
  {
    slug: "crane-inspection-record-retention-guide",
    title: "Crane Inspection Record Retention: Federal, State & Best Practice Requirements",
    description: "A detailed guide to how long you must keep crane inspection records, what format is acceptable, and state-by-state variations beyond federal minimums.",
    longDescription: "Record retention is one of the most misunderstood aspects of crane inspection compliance. While OSHA sets minimum federal requirements, many states have additional mandates, and best practices often exceed both. This on-demand webinar walks through the complete record retention landscape — from federal requirements under 29 CFR 1926.1412 to state-specific rules in the top 15 crane-heavy states. We cover acceptable formats (paper vs. digital), how long to keep different types of inspection records, and how digital record management systems eliminate the risk of lost or damaged documentation. Includes a downloadable retention schedule template.",
    date: "2026-01-15",
    time: "1:00 PM ET",
    duration: "35 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "CraneCheck" },
    topics: [
      "Federal retention requirements under 29 CFR 1926.1412",
      "State-by-state variations (top 15 crane-heavy states)",
      "Paper vs. digital: format acceptability",
      "Retention periods by inspection type",
      "Digital record management best practices",
    ],
    status: "on-demand",
    category: "Compliance",
  },
];

export function getWebinarBySlug(slug: string): Webinar | undefined {
  return WEBINARS.find((w) => w.slug === slug);
}

export function getUpcomingWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "upcoming");
}

export function getOnDemandWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "on-demand");
}
