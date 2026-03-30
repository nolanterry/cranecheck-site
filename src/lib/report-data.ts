export interface Report {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  readTime: string;
  publishDate: string;
  category: string;
  highlights: string[];
  sections: { title: string; description: string }[];
  stats: { value: string; label: string }[];
}

export const REPORTS: Report[] = [
  {
    slug: "2026-crane-inspection-compliance-report",
    title: "2026 State of Crane Inspection Compliance",
    subtitle: "How construction companies are adapting to stricter OSHA enforcement and digital documentation requirements",
    description: "A comprehensive analysis of crane inspection compliance trends across the U.S. construction industry. Based on OSHA enforcement data, industry surveys, and interviews with safety directors at 200+ crane companies. Covers citation trends, common violations, digital adoption rates, and ROI of compliance software.",
    pages: 28,
    readTime: "15 min read",
    publishDate: "March 2026",
    category: "Industry Report",
    highlights: [
      "OSHA crane-related citations increased 23% year-over-year in 2025",
      "Average willful violation penalty reached $165,514 — up from $156K in 2024",
      "Only 31% of crane companies use digital inspection tools",
      "Companies using digital systems resolve audit findings 73% faster",
      "Record retention violations account for 34% of crane-related citations",
    ],
    sections: [
      { title: "OSHA Enforcement Trends", description: "Analysis of 29 CFR 1926.1400 citation data from 2023-2025, including regional variations and most-cited standards." },
      { title: "Digital Adoption Landscape", description: "Survey results from 200+ crane companies on inspection technology adoption, barriers, and planned investments." },
      { title: "Cost of Non-Compliance", description: "Total cost analysis including fines, project delays, insurance premium increases, and litigation expenses." },
      { title: "Best Practices from Top Performers", description: "Case studies from companies with zero OSHA citations over 3+ years and the systems they use." },
      { title: "2026-2028 Outlook", description: "Predicted regulatory changes, technology trends, and workforce impacts on crane inspection compliance." },
    ],
    stats: [
      { value: "200+", label: "Companies Surveyed" },
      { value: "3 Years", label: "Data Analyzed" },
      { value: "28 Pages", label: "Full Report" },
    ],
  },
  {
    slug: "digital-crane-inspection-roi-guide",
    title: "The ROI of Digital Crane Inspections",
    subtitle: "Quantifying the financial impact of replacing paper-based crane inspection workflows",
    description: "A detailed ROI analysis for crane companies considering digital inspection tools. Includes time savings calculations, error reduction metrics, insurance premium impacts, and a step-by-step framework for building a business case for digital transformation.",
    pages: 18,
    readTime: "10 min read",
    publishDate: "February 2026",
    category: "Whitepaper",
    highlights: [
      "Average crane company saves 12.4 hours per week switching from paper to digital",
      "Digital inspections reduce documentation errors by 89%",
      "Insurance carriers offer 8-15% premium discounts for digital documentation",
      "Payback period for digital inspection tools averages 2.3 months",
      "Field teams complete inspections 67% faster with mobile-first tools",
    ],
    sections: [
      { title: "Current State: The Hidden Cost of Paper", description: "Time studies and cost analysis of paper-based crane inspection workflows across company sizes." },
      { title: "Direct Cost Savings", description: "Labor time, paper/printing, storage, and administrative overhead reductions quantified." },
      { title: "Indirect Financial Benefits", description: "Insurance premium reductions, faster audit resolution, reduced legal exposure, and improved bid competitiveness." },
      { title: "Implementation Framework", description: "Phased rollout plan with timeline, training requirements, and change management strategies." },
    ],
    stats: [
      { value: "89%", label: "Error Reduction" },
      { value: "2.3 mo", label: "Avg Payback" },
      { value: "12.4 hrs", label: "Weekly Savings" },
    ],
  },
  {
    slug: "crane-accident-documentation-guide",
    title: "Crane Accident Prevention & Documentation Guide",
    subtitle: "Best practices for inspection documentation that protects your company before, during, and after incidents",
    description: "A practical guide for safety directors and crane operators on documentation practices that reduce accident risk and protect companies during OSHA investigations. Covers pre-incident documentation standards, incident response protocols, and post-incident record requirements.",
    pages: 22,
    readTime: "12 min read",
    publishDate: "January 2026",
    category: "Best Practice Guide",
    highlights: [
      "78% of crane accidents involve documentation deficiencies in the 90 days prior",
      "Proper documentation reduces OSHA penalty assessments by an average of 40%",
      "Photo evidence in inspection records reduces disputed findings by 65%",
      "Companies with digital audit trails settle claims 3.2x faster",
      "ANSI B30 compliance documentation gaps are the #1 plaintiff attorney target",
    ],
    sections: [
      { title: "Pre-Incident Documentation Standards", description: "What every inspection record should contain to demonstrate due diligence and competent person oversight." },
      { title: "Critical Documentation During Incidents", description: "Step-by-step protocol for documenting crane incidents, near-misses, and equipment failures." },
      { title: "Post-Incident Record Requirements", description: "OSHA reporting timelines, record preservation obligations, and communication protocols." },
      { title: "Building a Documentation Culture", description: "Training programs and accountability frameworks that make thorough documentation the default." },
    ],
    stats: [
      { value: "78%", label: "Accidents with Doc Gaps" },
      { value: "40%", label: "Penalty Reduction" },
      { value: "3.2x", label: "Faster Claims" },
    ],
  },
];
