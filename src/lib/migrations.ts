export interface Migration {
  slug: string;
  name: string;
  tagline: string;
  steps: { title: string; description: string; time: string }[];
  featureMap: { feature: string; them: string; us: string }[];
  faqs: { q: string; a: string }[];
}

export const MIGRATIONS: Migration[] = [
  {
    slug: "inspectall",
    name: "InspectAll",
    tagline:
      "Move from InspectAll to CraneCheck and get crane-specific workflows, OSHA-ready reports, and faster field inspections — without losing your data.",
    steps: [
      {
        title: "Export your InspectAll data",
        description:
          "Go to InspectAll Settings → Data Export and download your inspection records as CSV. Include equipment lists, inspection history, and deficiency logs.",
        time: "5 min",
      },
      {
        title: "Create your CraneCheck account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Use your company email so your team can join later.",
        time: "2 min",
      },
      {
        title: "Import your equipment registry",
        description:
          "Upload your exported CSV to CraneCheck's bulk import tool. We'll map crane make, model, serial numbers, and capacity ratings automatically.",
        time: "5 min",
      },
      {
        title: "Review your inspection templates",
        description:
          "CraneCheck includes pre-built OSHA 29 CFR 1926.1412 and ANSI B30 templates. Compare them to your InspectAll checklists and customize if needed.",
        time: "10 min",
      },
      {
        title: "Invite your inspection team",
        description:
          "Add inspectors via email. They'll get mobile access immediately — no per-seat charges with CraneCheck's unlimited user plan.",
        time: "3 min",
      },
      {
        title: "Run your first inspection",
        description:
          "Complete a side-by-side inspection to verify your data migrated correctly. Most teams are fully switched over within one shift.",
        time: "15 min",
      },
    ],
    featureMap: [
      { feature: "Crane-specific templates", them: "Generic checklists", us: "OSHA/ANSI B30 pre-built" },
      { feature: "Unlimited users", them: "Per-seat pricing", us: "Included in all plans" },
      { feature: "Mobile inspections", them: "Basic mobile app", us: "Offline-capable with photo capture" },
      { feature: "OSHA compliance reports", them: "Generic PDF export", us: "1-click audit-ready reports" },
      { feature: "Deficiency tracking", them: "Manual follow-up", us: "Automated alerts + escalation" },
      { feature: "Equipment registry", them: "Basic asset list", us: "Full lifecycle tracking with certifications" },
      { feature: "Load chart documentation", them: "Not included", us: "Built-in load chart verification" },
      { feature: "API access", them: "Enterprise only", us: "REST API on all plans" },
    ],
    faqs: [
      {
        q: "Will I lose my historical inspection data?",
        a: "No. CraneCheck's CSV import preserves your full inspection history, including dates, findings, and corrective actions. We can also do a manual data migration for larger accounts.",
      },
      {
        q: "Can I run both systems during the transition?",
        a: "Absolutely. Most teams run CraneCheck alongside InspectAll for 1–2 weeks to verify everything transferred correctly before fully switching.",
      },
      {
        q: "How long does the full migration take?",
        a: "Most teams are fully migrated in under an hour. The data import takes 5 minutes, and the rest is reviewing templates and inviting your team.",
      },
      {
        q: "Do I need to retrain my inspectors?",
        a: "CraneCheck's mobile app is designed for field crews — most inspectors are comfortable within their first inspection. We also offer a free onboarding call.",
      },
    ],
  },
  {
    slug: "paper-logs",
    name: "Paper Logs & Spreadsheets",
    tagline:
      "Going digital doesn't have to be painful. CraneCheck replaces your paper inspection forms and Excel spreadsheets with a system that's actually easier to use.",
    steps: [
      {
        title: "Gather your current forms",
        description:
          "Collect your paper inspection forms, Excel spreadsheets, and any equipment lists. Take photos of paper records you want to preserve digitally.",
        time: "15 min",
      },
      {
        title: "Create your CraneCheck account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Use your company email so your team can join later.",
        time: "2 min",
      },
      {
        title: "Enter your equipment",
        description:
          "Add your cranes and lifting equipment to CraneCheck. Enter make, model, serial number, and capacity. If you have a spreadsheet, we can bulk import it.",
        time: "10 min",
      },
      {
        title: "Choose your inspection templates",
        description:
          "Select from pre-built OSHA and ANSI B30 templates that match your paper forms. No need to recreate checklists from scratch.",
        time: "5 min",
      },
      {
        title: "Set up your team",
        description:
          "Invite inspectors and assign roles. Every inspector gets mobile access at no extra cost — no more chasing down paper forms.",
        time: "3 min",
      },
      {
        title: "Complete your first digital inspection",
        description:
          "Walk through an inspection on CraneCheck. Photo capture, voice notes, and tap-to-complete checklists make it faster than paper.",
        time: "10 min",
      },
    ],
    featureMap: [
      { feature: "Inspection records", them: "Paper forms / filing cabinets", us: "Searchable digital archive" },
      { feature: "OSHA compliance", them: "Manual tracking / hope", us: "Automated compliance monitoring" },
      { feature: "Deficiency follow-up", them: "Sticky notes / memory", us: "Automated alerts + escalation" },
      { feature: "Photo documentation", them: "Separate camera + printing", us: "In-app photo capture + annotation" },
      { feature: "Report generation", them: "Hours of manual typing", us: "1-click PDF generation" },
      { feature: "Audit readiness", them: "Scramble when OSHA calls", us: "Always audit-ready" },
      { feature: "Multi-site visibility", them: "Drive to each site", us: "Real-time dashboard across all sites" },
      { feature: "Record retention", them: "Boxes in storage", us: "Automatic 7-year digital retention" },
    ],
    faqs: [
      {
        q: "My inspectors aren't tech-savvy. Will they be able to use this?",
        a: "CraneCheck is designed for field crews, not IT departments. The mobile app uses large buttons, photo capture, and simple checklists. If they can use a smartphone, they can use CraneCheck.",
      },
      {
        q: "Can I keep my existing paper forms as a backup?",
        a: "Of course. Many teams run paper alongside CraneCheck for the first month. But most find the digital version is faster and stop printing within a few weeks.",
      },
      {
        q: "What about my years of historical paper records?",
        a: "You can photograph and attach paper records to equipment profiles in CraneCheck. For large archives, our team can help with bulk digitization.",
      },
      {
        q: "Do I need internet access in the field?",
        a: "CraneCheck works offline. Inspections sync automatically when you reconnect — critical for remote job sites and crane yards without reliable WiFi.",
      },
    ],
  },
  {
    slug: "hvi",
    name: "HVI (Heavy Vehicle Inspections)",
    tagline:
      "Upgrade from HVI's generic heavy vehicle platform to CraneCheck's purpose-built crane inspection software — with OSHA templates, load chart tracking, and unlimited users.",
    steps: [
      {
        title: "Export your HVI data",
        description:
          "Download your equipment records and inspection history from HVI. Export as CSV or request a data dump from their support team.",
        time: "10 min",
      },
      {
        title: "Create your CraneCheck account",
        description:
          "Sign up for a free 14-day trial. No credit card required. We'll set up your company workspace automatically.",
        time: "2 min",
      },
      {
        title: "Import equipment and history",
        description:
          "Upload your exported data. CraneCheck maps equipment fields automatically and preserves your inspection history timeline.",
        time: "5 min",
      },
      {
        title: "Configure crane-specific templates",
        description:
          "HVI uses generic heavy vehicle checklists. CraneCheck includes OSHA 29 CFR 1926.1412, ANSI B30, and manufacturer-specific templates pre-built.",
        time: "5 min",
      },
      {
        title: "Invite your team",
        description:
          "Add inspectors, operators, and safety managers. Unlike HVI, CraneCheck doesn't charge per user — add your whole team.",
        time: "3 min",
      },
      {
        title: "Verify with a parallel inspection",
        description:
          "Run one inspection in both systems to confirm everything matches. Most teams decommission HVI within a week.",
        time: "15 min",
      },
    ],
    featureMap: [
      { feature: "Industry focus", them: "Generic heavy vehicles", us: "Purpose-built for cranes" },
      { feature: "Compliance templates", them: "Basic checklists", us: "OSHA/ANSI B30 pre-configured" },
      { feature: "Pricing model", them: "Per-vehicle + per-user", us: "Flat rate, unlimited everything" },
      { feature: "Load chart tracking", them: "Not available", us: "Built-in load chart verification" },
      { feature: "Lift plan documentation", them: "Separate process", us: "Integrated lift planning" },
      { feature: "Rigging inspection", them: "Add-on module", us: "Included in core platform" },
      { feature: "Mobile experience", them: "Responsive web", us: "Native mobile app with offline" },
      { feature: "Support", them: "Ticket-based", us: "Live chat + dedicated onboarding" },
    ],
    faqs: [
      {
        q: "HVI handles more than just cranes. Will I need another tool?",
        a: "CraneCheck is purpose-built for cranes and lifting equipment. If you inspect non-crane heavy vehicles, you may want a separate tool for those — but for crane compliance, CraneCheck is more thorough than HVI's generic approach.",
      },
      {
        q: "Can I migrate mid-contract with HVI?",
        a: "Yes. CraneCheck's 14-day trial lets you run both systems in parallel. When you're ready to switch, cancel HVI at your next renewal.",
      },
      {
        q: "Is CraneCheck cheaper than HVI?",
        a: "For crane-focused teams, typically yes. HVI charges per-vehicle and per-user, which adds up fast. CraneCheck is a flat monthly rate with unlimited users and equipment.",
      },
      {
        q: "Will my OSHA documentation transfer?",
        a: "All imported inspection records maintain their dates and findings, so your compliance history is preserved. CraneCheck's OSHA report format is also accepted by auditors.",
      },
    ],
  },
];
