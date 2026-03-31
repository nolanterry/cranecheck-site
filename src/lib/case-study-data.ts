export interface CaseStudy {
  slug: string;
  companyName: string;
  industry: string;
  companySize: string;
  products: string[];
  hero: {
    summary: string;
    keyMetric: string;
  };
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    implementation: string[];
  };
  results: {
    title: string;
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
  quote: {
    text: string;
    author: string;
    title: string;
  };
  atAGlance: {
    companySize: string;
    industry: string;
    products: string[];
    keyResults: string[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "southeastern-crane-rigging",
    companyName: "Southeastern Crane & Rigging",
    industry: "Crane Rental",
    companySize: "35 cranes, 12 operators",
    products: ["CraneCheck Pro"],
    hero: {
      summary: "Regional crane rental company achieves 100% OSHA audit compliance after digitalizing inspection records with CraneCheck.",
      keyMetric: "100% audit compliance",
    },
    challenge: {
      title: "Failed OSHA Audit Due to Missing Records",
      description: "Southeastern Crane & Rigging's paper-based inspection system couldn't keep up with their growing fleet operations, leading to compliance gaps.",
      painPoints: [
        "Failed OSHA audit due to missing inspection documentation",
        "Paper forms frequently lost or damaged on job sites",
        "No centralized system to track inspection completion",
        "Time-consuming manual filing and retrieval of records",
      ],
    },
    solution: {
      title: "Complete Digital Transformation",
      description: "CraneCheck provided a comprehensive digital inspection platform that eliminated paper forms and ensured complete documentation.",
      implementation: [
        "Deployed CraneCheck on tablets for all 12 operators",
        "Digitized existing inspection checklists to match OSHA requirements",
        "Implemented photo-verified inspection records with GPS timestamps",
        "Set up automated compliance dashboards for management oversight",
      ],
    },
    results: {
      title: "Audit-Ready in 18 Months",
      description: "Southeastern achieved complete OSHA compliance and dramatically improved their inspection efficiency.",
      metrics: [
        { value: "100%", label: "Audit Compliance" },
        { value: "45%", label: "Faster Pre-Shift Inspections" },
        { value: "Zero", label: "OSHA Citations in 18 Months" },
        { value: "35", label: "Cranes Now Fully Compliant" },
      ],
    },
    quote: {
      text: "CraneCheck saved our business. We went from failing OSHA audits to being completely audit-ready. Our operators love how much faster inspections are now.",
      author: "Mike Rodriguez",
      title: "Safety Director, Southeastern Crane & Rigging",
    },
    atAGlance: {
      companySize: "35 cranes, 12 operators",
      industry: "Crane Rental",
      products: ["CraneCheck Pro"],
      keyResults: [
        "100% OSHA audit compliance",
        "45% faster inspections",
        "Zero citations in 18 months",
        "Complete digital transformation"
      ],
    },
  },
  {
    slug: "pacific-northwest-heavy-lift",
    companyName: "Pacific Northwest Heavy Lift",
    industry: "Heavy Lift Contracting",
    companySize: "22 cranes across 8 job sites",
    products: ["CraneCheck Enterprise"],
    hero: {
      summary: "Heavy lift contractor gains real-time fleet visibility and prevents crane failures through proactive deficiency identification.",
      keyMetric: "80% reduction in inspection backlog",
    },
    challenge: {
      title: "No Fleet-Wide Visibility",
      description: "With cranes spread across multiple job sites, Pacific Northwest Heavy Lift had no way to monitor inspection status or identify developing problems.",
      painPoints: [
        "No real-time visibility into fleet-wide inspection status",
        "Critical deficiencies going unnoticed until too late",
        "Inspection backlog growing across multiple job sites",
        "No way to prioritize maintenance based on inspection data",
      ],
    },
    solution: {
      title: "Real-Time Fleet Monitoring",
      description: "CraneCheck Enterprise provided centralized dashboards and automated alerts for proactive fleet management.",
      implementation: [
        "Deployed CraneCheck across all 22 cranes and 8 job sites",
        "Implemented real-time compliance monitoring dashboard",
        "Set up automated alerts for inspection due dates and deficiencies",
        "Integrated wire rope inspection tracking with photo documentation",
      ],
    },
    results: {
      title: "Proactive Fleet Management",
      description: "Pacific Northwest gained complete fleet visibility and prevented costly equipment failures through early deficiency detection.",
      metrics: [
        { value: "80%", label: "Reduction in Inspection Backlog" },
        { value: "3", label: "Critical Wire Rope Deficiencies Caught" },
        { value: "100%", label: "Fleet Visibility" },
        { value: "8", label: "Job Sites Fully Connected" },
      ],
    },
    quote: {
      text: "The CraneCheck dashboard gives me instant visibility into every crane across all our job sites. We caught wire rope deficiencies that could have led to catastrophic failures.",
      author: "Sarah Chen",
      title: "Fleet Operations Manager, Pacific Northwest Heavy Lift",
    },
    atAGlance: {
      companySize: "22 cranes across 8 job sites",
      industry: "Heavy Lift Contracting",
      products: ["CraneCheck Enterprise"],
      keyResults: [
        "80% reduction in inspection backlog",
        "3 critical deficiencies caught early",
        "Real-time fleet visibility",
        "Proactive maintenance planning"
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(study => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map(study => study.slug);
}