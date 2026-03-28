export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  longDescription: string;
  relatedTerms: string[];
  category: string;
}

export const GLOSSARY_CATEGORIES = [
  "OSHA Regulations",
  "Inspection Types",
  "Crane Components",
  "Safety & Compliance",
  "Documentation",
  "Personnel",
] as const;

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: "29 CFR 1926.1412",
    slug: "29-cfr-1926-1412",
    definition: "The OSHA standard governing inspection requirements for cranes and derricks used in construction.",
    longDescription: "29 CFR 1926.1412 is the federal regulation that mandates inspection protocols for cranes and derricks in construction. It specifies requirements for shift inspections (visual checks before each shift), monthly inspections (documented checks of critical components), and annual/comprehensive inspections (thorough examination by a qualified person). Non-compliance can result in OSHA citations with penalties up to $165,514 per willful violation. The standard requires that all inspection results be documented and retained, with deficiencies addressed before continued operation.",
    relatedTerms: ["osha-crane-inspection", "qualified-person", "competent-person", "annual-inspection"],
    category: "OSHA Regulations",
  },
  {
    term: "OSHA Crane Inspection",
    slug: "osha-crane-inspection",
    definition: "A mandatory examination of crane equipment to verify safe operating condition per OSHA standards.",
    longDescription: "OSHA crane inspections are legally required examinations that verify cranes meet safety standards before and during operation. These inspections fall into three tiers: pre-shift visual inspections (daily), periodic/monthly inspections (documented), and annual comprehensive inspections (by a qualified person). OSHA inspectors can arrive unannounced and request inspection records going back years. Companies without proper documentation face citations, fines, and potential work stoppages. Digital inspection software like CraneCheck replaces paper checklists with searchable, audit-ready records.",
    relatedTerms: ["29-cfr-1926-1412", "shift-inspection", "annual-inspection", "compliance-audit"],
    category: "OSHA Regulations",
  },
  {
    term: "Shift Inspection",
    slug: "shift-inspection",
    definition: "A visual inspection performed before each work shift to identify obvious deficiencies or damage.",
    longDescription: "Shift inspections (also called pre-shift or daily inspections) are visual checks that must be performed before a crane is used each shift. The operator or designated competent person walks around the crane checking for visible damage, fluid leaks, tire condition, outrigger integrity, wire rope condition, and safety device function. While no written documentation is strictly required by OSHA for shift inspections, best practice — and many company policies — mandate a written record. Digital shift inspection checklists ensure consistency and create an audit trail.",
    relatedTerms: ["competent-person", "pre-operation-check", "deficiency", "wire-rope-inspection"],
    category: "Inspection Types",
  },
  {
    term: "Annual Inspection",
    slug: "annual-inspection",
    definition: "A comprehensive yearly inspection performed by a qualified person to assess all crane systems and components.",
    longDescription: "Annual inspections (also called comprehensive inspections) are thorough examinations required at least every 12 months under 29 CFR 1926.1412. They must be performed by a qualified person and cover structural members, hydraulic systems, electrical systems, safety devices, wire rope, hooks, sheaves, drums, brakes, and all operational mechanisms. The qualified person must document all findings, and any deficiencies must be corrected before the crane returns to service. Annual inspection records must be retained and made available to OSHA upon request.",
    relatedTerms: ["qualified-person", "29-cfr-1926-1412", "structural-inspection", "deficiency"],
    category: "Inspection Types",
  },
  {
    term: "Qualified Person",
    slug: "qualified-person",
    definition: "An individual with recognized credentials and demonstrated ability to solve crane inspection and safety problems.",
    longDescription: "A qualified person, as defined by OSHA, is someone who by possession of a recognized degree, certificate, or professional standing, or by extensive knowledge, training, and experience, has successfully demonstrated the ability to solve or resolve problems relating to the subject matter, work, or project. For crane inspections, this typically means a certified crane inspector (such as through NCCCO or equivalent) who can perform annual/comprehensive inspections. The distinction between qualified and competent persons is critical — using the wrong classification for inspections can result in citations.",
    relatedTerms: ["competent-person", "nccco", "annual-inspection", "crane-inspector"],
    category: "Personnel",
  },
  {
    term: "Competent Person",
    slug: "competent-person",
    definition: "A person capable of identifying existing and predictable crane hazards and authorized to take corrective measures.",
    longDescription: "OSHA defines a competent person as one who is capable of identifying existing and predictable hazards in the surroundings or working conditions which are unsanitary, hazardous, or dangerous to employees, and who has authorization to take prompt corrective measures to eliminate them. For crane operations, competent persons typically perform shift and monthly inspections, ground condition assessments, and rigging inspections. Unlike qualified persons, competent persons do not need formal certifications but must have adequate training and knowledge specific to the equipment.",
    relatedTerms: ["qualified-person", "shift-inspection", "hazard-assessment", "osha-crane-inspection"],
    category: "Personnel",
  },
  {
    term: "NCCCO",
    slug: "nccco",
    definition: "National Commission for the Certification of Crane Operators — the primary crane operator certification body in the U.S.",
    longDescription: "The National Commission for the Certification of Crane Operators (NCCCO) is the largest and most widely recognized crane operator certification organization in the United States. NCCCO certifications include Mobile Crane Operator, Tower Crane Operator, Overhead Crane Operator, and others. OSHA's crane standard (Subpart CC) requires crane operators to be certified by an accredited organization, and NCCCO is the most common choice. NCCCO also offers certifications for crane inspectors, riggers, and signalpersons, making it a cornerstone of the crane industry's safety infrastructure.",
    relatedTerms: ["qualified-person", "crane-operator-certification", "crane-inspector"],
    category: "Personnel",
  },
  {
    term: "Load Chart",
    slug: "load-chart",
    definition: "A manufacturer-provided chart showing the maximum safe lifting capacities at various boom lengths and radii.",
    longDescription: "A load chart is a critical safety document provided by the crane manufacturer that specifies the maximum load the crane can safely lift at various combinations of boom length, boom angle, and operating radius. Load charts account for factors like counterweight configuration, outrigger/crawler position, and whether the crane is on rubber or outriggers. Operating beyond load chart limits is the leading cause of crane tip-overs and collapses. Load charts must be available to operators at all times and are a key inspection item — any missing, damaged, or illegible load chart is a serious deficiency.",
    relatedTerms: ["rated-capacity", "operating-radius", "boom-length", "tip-over"],
    category: "Crane Components",
  },
  {
    term: "Wire Rope Inspection",
    slug: "wire-rope-inspection",
    definition: "Examination of crane wire ropes for broken wires, corrosion, kinks, crushing, and diameter reduction.",
    longDescription: "Wire rope inspection is a critical component of both shift and periodic crane inspections. Inspectors look for broken wires (OSHA specifies maximum acceptable counts), corrosion, kinking, crushing, bird-caging, diameter reduction, and end connection integrity. The number of allowable broken wires depends on the rope construction and whether they are in one lay length or at end connections. Severe wire rope deterioration requires immediate removal from service. Documentation should include the location, type, and severity of any defects found, along with corrective actions taken.",
    relatedTerms: ["shift-inspection", "deficiency", "load-chart", "structural-inspection"],
    category: "Inspection Types",
  },
  {
    term: "Deficiency",
    slug: "deficiency",
    definition: "Any condition found during inspection that does not meet the required safety standard or manufacturer specification.",
    longDescription: "A deficiency is any identified condition during a crane inspection that deviates from OSHA standards, manufacturer specifications, or accepted industry practices. Deficiencies range from minor (cosmetic damage, minor fluid seepage) to critical (structural cracks, failed safety devices, wire rope beyond rejection criteria). Critical deficiencies require immediate removal of the crane from service until repaired. All deficiencies must be documented with description, severity, location, and corrective action. Digital inspection tools like CraneCheck automatically flag deficiencies and track resolution status through completion.",
    relatedTerms: ["shift-inspection", "annual-inspection", "corrective-action", "compliance-audit"],
    category: "Safety & Compliance",
  },
  {
    term: "Lift Plan",
    slug: "lift-plan",
    definition: "A documented plan specifying the crane, rigging, load path, and safety procedures for a critical lift.",
    longDescription: "A lift plan is a comprehensive document created before critical or complex crane lifts that details every aspect of the operation. It includes crane selection and configuration, load weight and center of gravity, rigging hardware and arrangement, ground conditions, swing radius, overhead obstructions, wind limits, communication protocols, and emergency procedures. While OSHA doesn't mandate lift plans for all picks, they are required by many general contractors, and their absence during incidents significantly increases liability. Well-documented lift plans demonstrate due diligence and are essential for audit-readiness.",
    relatedTerms: ["critical-lift", "rigging", "load-chart", "ground-conditions"],
    category: "Documentation",
  },
  {
    term: "Critical Lift",
    slug: "critical-lift",
    definition: "A crane lift that exceeds a specified percentage of rated capacity or involves unusual hazards requiring extra planning.",
    longDescription: "A critical lift is generally defined as any lift that exceeds 75% of the crane's rated capacity at the maximum radius, involves lifting personnel, requires multiple cranes, passes over occupied areas, or involves other unusual hazards. The specific threshold varies by company policy — some use 80% or 90%. Critical lifts always require a formal, written lift plan reviewed and approved by qualified personnel before the operation begins. They typically require additional safety measures such as tag lines, dedicated signal persons, barricaded areas, and pre-lift meetings with all involved personnel.",
    relatedTerms: ["lift-plan", "rated-capacity", "load-chart", "qualified-person"],
    category: "Safety & Compliance",
  },
  {
    term: "Rigging",
    slug: "rigging",
    definition: "The hardware and techniques used to attach loads to the crane hook, including slings, shackles, and spreader bars.",
    longDescription: "Rigging encompasses all the hardware and methods used to connect a load to the crane for lifting. This includes wire rope slings, synthetic slings, chain slings, shackles, hooks, eyebolts, spreader bars, lifting beams, and other below-the-hook lifting devices. Rigging must be inspected before each use by a competent person, looking for damage, wear, deformation, and proper capacity markings. Improper rigging is a leading cause of dropped loads and crane accidents. Rigging capacity must be calculated based on the configuration (number of legs, angle) and documented in the lift plan.",
    relatedTerms: ["competent-person", "lift-plan", "sling-inspection", "below-the-hook"],
    category: "Crane Components",
  },
  {
    term: "Outrigger",
    slug: "outrigger",
    definition: "Extendable beams with pads that stabilize mobile cranes by increasing the base of support during lifting operations.",
    longDescription: "Outriggers are hydraulic or mechanical beams that extend from the crane's chassis and press pads against the ground to provide stability during lifting. Proper outrigger deployment is critical — the crane's load chart capacity is based on fully extended outriggers on firm, level ground. Common outrigger-related failures include insufficient ground bearing capacity (leading to sinking), uneven extension, damaged cylinders or locking mechanisms, and inadequate pad size for soil conditions. Outrigger inspection includes checking cylinders, locking pins, pads, and structural members for damage, leaks, and proper function.",
    relatedTerms: ["ground-conditions", "load-chart", "shift-inspection", "tip-over"],
    category: "Crane Components",
  },
  {
    term: "Ground Conditions Assessment",
    slug: "ground-conditions",
    definition: "Evaluation of the ground surface to ensure it can support the crane's weight and outrigger/crawler loads during operation.",
    longDescription: "A ground conditions assessment evaluates whether the ground where a crane will be set up can safely support the crane's total weight plus the lifted load. This includes checking soil bearing capacity, drainage conditions, underground utilities or voids, slope, and compaction. The assessment must be performed by a competent person before the crane is set up. Inadequate ground conditions are a leading cause of crane tip-overs. Proper documentation includes soil type, bearing capacity calculations, cribbing/matting used, and any geotechnical reports. Ground conditions must be monitored throughout operations, especially after rain.",
    relatedTerms: ["outrigger", "competent-person", "tip-over", "lift-plan"],
    category: "Safety & Compliance",
  },
  {
    term: "Compliance Audit",
    slug: "compliance-audit",
    definition: "A formal review of crane inspection records and safety procedures to verify adherence to OSHA and company standards.",
    longDescription: "A compliance audit is a systematic examination of a company's crane inspection records, safety programs, training documentation, and operational procedures to verify they meet OSHA regulations and industry standards. Audits may be conducted internally, by third-party consultants, or by OSHA inspectors. Key items reviewed include inspection frequency and documentation, inspector qualifications, deficiency tracking and resolution, training records, lift plans, and equipment certifications. Companies that fail audits face citations, fines, and potential work stoppages. Digital inspection software significantly simplifies audit preparation by maintaining organized, searchable records.",
    relatedTerms: ["osha-crane-inspection", "documentation-retention", "qualified-person", "deficiency"],
    category: "Documentation",
  },
  {
    term: "Documentation Retention",
    slug: "documentation-retention",
    definition: "The required practice of maintaining crane inspection records for specified time periods per OSHA and company policy.",
    longDescription: "Documentation retention refers to the requirement to keep crane inspection records accessible and organized for a minimum period. While OSHA doesn't specify an exact retention period for most crane inspection records, industry best practice is to retain records for the life of the equipment plus several years. Annual inspection records must be retained until the next annual inspection at minimum. Many companies retain all records for 5-7 years. During OSHA investigations or litigation, companies must produce relevant records — inability to do so can result in adverse inferences. Digital record-keeping eliminates lost or damaged paper records and enables instant retrieval.",
    relatedTerms: ["compliance-audit", "annual-inspection", "29-cfr-1926-1412"],
    category: "Documentation",
  },
  {
    term: "ANSI B30",
    slug: "ansi-b30",
    definition: "A series of American National Standards Institute standards covering safety requirements for cranes, hoists, and rigging.",
    longDescription: "ANSI B30 is a comprehensive series of safety standards published by the American Society of Mechanical Engineers (ASME) covering various types of cranes, hoists, and material handling equipment. Key standards include B30.5 (mobile and locomotive cranes), B30.2 (overhead cranes), B30.3 (tower cranes), and B30.9 (slings). While ANSI B30 standards are not law by themselves, OSHA frequently references them, and many states adopt them. The standards are updated every 5 years and are considered the industry consensus on safe crane practices. Companies that follow both OSHA and ANSI B30 demonstrate the highest level of due diligence.",
    relatedTerms: ["osha-crane-inspection", "29-cfr-1926-1412", "asme"],
    category: "OSHA Regulations",
  },
  {
    term: "Boom",
    slug: "boom",
    definition: "The primary structural member of a crane that extends outward and upward to position the hook over the load.",
    longDescription: "The boom is the main lifting arm of a crane, extending from the crane's superstructure outward and upward to position the hook over the load to be lifted. Booms come in two main types: telescopic (hydraulic cylinders extend nested sections) used on mobile cranes, and lattice (assembled from individual sections using pins) used on larger crawler and mobile cranes. Boom inspection includes checking for structural cracks, bent or buckled members, pin connections, hydraulic cylinder condition, and lattice section alignment. Boom length directly affects the crane's rated capacity — longer boom lengths significantly reduce lifting capacity.",
    relatedTerms: ["load-chart", "lattice-boom", "telescopic-boom", "structural-inspection"],
    category: "Crane Components",
  },
  {
    term: "Lattice Boom",
    slug: "lattice-boom",
    definition: "A crane boom constructed from individual steel sections connected with pins, offering high strength-to-weight ratio for heavy lifts.",
    longDescription: "Lattice booms are crane booms constructed from individual steel sections (typically rectangular or triangular in cross-section) connected with pins. They offer a superior strength-to-weight ratio compared to telescopic booms, enabling longer reaches and heavier lifts. Lattice boom inspection is particularly detailed — inspectors must check each section for bent or cracked chords and lacings, pin hole elongation, pin wear, and proper alignment between sections. Assembly and disassembly of lattice booms are themselves critical operations requiring qualified supervision. Environmental factors like wind, ice loading, and temperature affect lattice boom capacity.",
    relatedTerms: ["boom", "structural-inspection", "critical-lift", "annual-inspection"],
    category: "Crane Components",
  },
  {
    term: "Load Moment Indicator (LMI)",
    slug: "load-moment-indicator",
    definition: "An electronic safety device that monitors crane load, boom angle, and radius to warn operators of overload conditions.",
    longDescription: "A Load Moment Indicator (LMI) — also called a Rated Capacity Indicator (RCI) — is an electronic system that continuously monitors the crane's actual load moment (load weight × radius) and compares it to the rated capacity at that configuration. It provides visual and audible warnings as the crane approaches capacity limits, and many systems include automatic shutoff at 100% capacity. LMI systems must be calibrated and tested regularly as part of the inspection program. A malfunctioning or bypassed LMI is a critical deficiency requiring immediate crane shutdown. Modern LMI systems can log operational data for review.",
    relatedTerms: ["rated-capacity", "load-chart", "safety-device", "deficiency"],
    category: "Crane Components",
  },
  {
    term: "Rated Capacity",
    slug: "rated-capacity",
    definition: "The maximum load a crane can safely lift at a given configuration, as specified by the manufacturer's load chart.",
    longDescription: "Rated capacity is the maximum load that a crane is designed to handle safely at a specific configuration of boom length, boom angle, operating radius, and counterweight/outrigger setup. It is determined by the manufacturer and published in the crane's load chart. Operating at or near rated capacity requires extreme care, and most companies have policies limiting routine lifts to 75-85% of rated capacity. Exceeding rated capacity can cause structural failure, tip-over, or collapse. Rated capacity accounts for the weight of the hook block, rigging hardware, and any attachments — operators must subtract these from the chart capacity to determine the actual load they can pick.",
    relatedTerms: ["load-chart", "critical-lift", "load-moment-indicator", "tip-over"],
    category: "Safety & Compliance",
  },
  {
    term: "Structural Inspection",
    slug: "structural-inspection",
    definition: "Detailed examination of a crane's structural members for cracks, corrosion, deformation, and weld integrity.",
    longDescription: "Structural inspection is a thorough examination of all load-bearing members of the crane including the boom, jib, mast, superstructure frame, turntable, crawler frames or carrier, and outrigger beams. Inspectors look for cracks (especially at weld joints and high-stress areas), corrosion, deformation, bent or buckled members, loose or missing bolts, and worn pin connections. Advanced techniques like magnetic particle testing (MT) or ultrasonic testing (UT) may be required for critical welds. Structural failures are among the most catastrophic crane incidents — they often occur without warning and can result in total collapse. Structural inspections are a key component of annual comprehensive inspections.",
    relatedTerms: ["annual-inspection", "qualified-person", "boom", "lattice-boom"],
    category: "Inspection Types",
  },
  {
    term: "Crane Inspector",
    slug: "crane-inspector",
    definition: "A qualified professional certified to perform comprehensive crane inspections and assessments.",
    longDescription: "A crane inspector is a qualified person who has been trained and certified to perform thorough crane inspections. Certification bodies include NCCCO (Crane Inspector Program), LEEA (Lifting Equipment Engineers Association), and various state-specific programs. Crane inspectors perform annual/comprehensive inspections, post-incident assessments, pre-purchase evaluations, and expert witness services. They must have deep knowledge of OSHA regulations, ANSI B30 standards, crane mechanics, structural engineering principles, and inspection techniques. The demand for qualified crane inspectors has grown significantly as OSHA enforcement has increased and companies prioritize compliance.",
    relatedTerms: ["qualified-person", "nccco", "annual-inspection", "compliance-audit"],
    category: "Personnel",
  },
  {
    term: "Crane Operator Certification",
    slug: "crane-operator-certification",
    definition: "Mandatory third-party certification required by OSHA for all crane operators in construction.",
    longDescription: "Since November 2018, OSHA requires all crane operators in construction to be certified by an accredited testing organization. The four OSHA-recognized certifying bodies are NCCCO, NCCER (National Center for Construction Education and Research), CIC (Crane Institute Certification), and OECP (Operating Engineers Certification Program). Certification requires passing both written and practical exams specific to the crane type (mobile, tower, overhead, etc.). Certifications must be renewed every 5 years. Employers must verify operator certification and ensure operators are qualified for the specific equipment they operate. Operating without valid certification is a citable OSHA violation.",
    relatedTerms: ["nccco", "competent-person", "osha-crane-inspection"],
    category: "Personnel",
  },
  {
    term: "Tip-Over",
    slug: "tip-over",
    definition: "A catastrophic event where a crane loses stability and overturns, often caused by overloading, ground failure, or improper setup.",
    longDescription: "A crane tip-over occurs when the overturning moment (load × radius) exceeds the crane's stabilizing moment (counterweight + machine weight × distance from tipping fulcrum). Common causes include exceeding rated capacity, inadequate ground conditions causing outrigger sinking, operating on slopes without compensation, sudden load swings, wind gusts, improper outrigger deployment, and side-loading the boom. Tip-overs are among the most dangerous crane incidents, frequently resulting in fatalities, massive property damage, and regulatory investigations. Prevention requires strict adherence to load charts, proper ground assessment, LMI monitoring, and comprehensive operator training.",
    relatedTerms: ["rated-capacity", "ground-conditions", "outrigger", "load-moment-indicator"],
    category: "Safety & Compliance",
  },
  {
    term: "Operating Radius",
    slug: "operating-radius",
    definition: "The horizontal distance from the crane's center of rotation to the center of the load being lifted.",
    longDescription: "Operating radius is the horizontal distance measured from the center of the crane's rotation (center pin) to the center of the load hook (or the point where the load is attached). It is one of the primary variables determining rated capacity — as the radius increases, the available capacity decreases significantly. Operators must accurately determine the operating radius for every lift and reference the load chart accordingly. Boom deflection under load increases the actual radius beyond what the boom angle alone would indicate. Modern cranes with LMI systems calculate real-time radius automatically, but operators must still understand the concept for planning and safety.",
    relatedTerms: ["load-chart", "rated-capacity", "boom", "lift-plan"],
    category: "Safety & Compliance",
  },
  {
    term: "Third-Party Inspection",
    slug: "third-party-inspection",
    definition: "An independent crane inspection performed by an external qualified inspector not employed by the crane owner or operator.",
    longDescription: "A third-party inspection is a crane examination performed by a qualified person who is independent of the crane owner, operator, and user. While OSHA doesn't strictly require third-party inspections (a qualified in-house inspector is acceptable), many general contractors, project owners, and insurance companies require them for objectivity and liability protection. Third-party inspectors bring unbiased assessment, specialized expertise, and inspection reports that carry more weight in litigation. The cost of third-party annual inspections typically ranges from $500-$2,000+ depending on crane type and size, a fraction of potential OSHA fines or incident costs.",
    relatedTerms: ["qualified-person", "annual-inspection", "compliance-audit", "crane-inspector"],
    category: "Inspection Types",
  },
  {
    term: "Pre-Operation Check",
    slug: "pre-operation-check",
    definition: "A systematic visual and functional check performed by the operator before using the crane each shift.",
    longDescription: "A pre-operation check is the operator's systematic review of the crane before beginning work each shift. It typically includes checking fluid levels, inspecting wire rope condition, verifying safety device function (LMI, anti-two-block, boom stops), testing controls, checking for hydraulic leaks, inspecting outrigger pads and tires, reviewing the load chart availability, and ensuring all guards and covers are in place. While overlapping with the shift inspection, pre-operation checks are specifically operator-focused — ensuring the operator is familiar with the crane's condition before assuming control. Many companies use standardized checklist forms or digital inspection apps for consistency.",
    relatedTerms: ["shift-inspection", "competent-person", "load-moment-indicator", "deficiency"],
    category: "Inspection Types",
  },
  {
    term: "Corrective Action",
    slug: "corrective-action",
    definition: "Steps taken to repair, replace, or address a deficiency found during a crane inspection.",
    longDescription: "Corrective action refers to the specific steps taken to resolve deficiencies identified during crane inspections. For critical deficiencies (structural cracks, failed safety devices, wire rope beyond rejection criteria), the crane must be immediately taken out of service until repairs are completed and verified. For non-critical deficiencies, corrective actions may be scheduled but must be tracked to completion. Documentation of corrective actions should include the original deficiency description, the repair or replacement performed, the date completed, and who performed and verified the work. Tracking corrective actions from identification through resolution is a key audit readiness metric.",
    relatedTerms: ["deficiency", "compliance-audit", "documentation-retention"],
    category: "Documentation",
  },
];

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function getGlossaryTermsByCategory(category: string): GlossaryTerm[] {
  return GLOSSARY_TERMS.filter((t) => t.category === category);
}

export function getAllGlossarySlugs(): string[] {
  return GLOSSARY_TERMS.map((t) => t.slug);
}
