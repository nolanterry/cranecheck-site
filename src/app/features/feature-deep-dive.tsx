"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardCheck,
  Warehouse,
  AlertCircle,
  FileText,
  Users,
  Smartphone,
  Camera,
  Search,
  Bell,
  Lock,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
}

const FEATURES: Feature[] = [
  {
    icon: ClipboardCheck,
    title: "Inspection Flow",
    subtitle: "Pre-shift inspections in under 3 minutes",
    desc: "Operators select their crane, and CraneCheck loads the correct OSHA-compliant checklist for that crane type. They tap through each checkpoint, snap photos of any issues, and submit. The entire flow takes less than 3 minutes — faster than paper.",
    bullets: [
      "Crane-type-specific templates (mobile, tower, overhead, crawler)",
      "29 CFR 1926.1412(d) shift inspection checkpoints",
      "Monthly and annual inspection templates",
      "Digital signature capture",
      "Timestamped, GPS-tagged submission",
      "Works fully offline — syncs when connected",
    ],
  },
  {
    icon: Warehouse,
    title: "Equipment Management",
    subtitle: "Your entire fleet in one place",
    desc: "The equipment registry tracks every crane in your fleet — serial numbers, make/model, inspection schedules, certifications, and complete inspection history. Know the status of every unit at a glance.",
    bullets: [
      "Crane profiles with photos and specifications",
      "Inspection schedule tracking (shift, monthly, annual)",
      "Certification and load chart records",
      "QR code labels for quick crane selection",
      "Fleet-wide compliance dashboard",
      "Equipment transfer between jobsites",
    ],
  },
  {
    icon: AlertCircle,
    title: "Deficiency Lifecycle",
    subtitle: "From flagged to fixed — nothing falls through the cracks",
    desc: "When an operator flags a deficiency, the system kicks into action. Critical issues auto-lock the crane from operation. The deficiency is assigned, tracked through corrective action, verified, and closed — with a complete audit trail.",
    bullets: [
      "Severity classification (critical, major, minor)",
      "Critical deficiencies auto-lock crane operation",
      "Photo evidence required for deficiency documentation",
      "Corrective action assignment and tracking",
      "Resolution verification with photo proof",
      "Full deficiency history on every crane",
    ],
  },
  {
    icon: FileText,
    title: "Reporting & Compliance",
    subtitle: "One-click OSHA-ready documentation",
    desc: "Generate professional PDF inspection reports with a single tap. Every report includes inspector name, date, equipment identification, findings, photos, and digital signature — exactly what OSHA wants to see during an audit.",
    bullets: [
      "PDF reports with all OSHA-required fields",
      "Bulk report generation for audit preparation",
      "Inspection history search and filtering",
      "Compliance dashboard with fleet-wide metrics",
      "Exportable data for your own record systems",
      "Automatic retention period management",
    ],
  },
  {
    icon: Users,
    title: "Team & Certifications",
    subtitle: "NCCCO cert tracking and role-based access",
    desc: "Add operators, assign them to cranes, and control what they can see and do. Track NCCCO certifications, medical exams, and training records. Safety directors get complete visibility. Operators see their assigned equipment.",
    bullets: [
      "Role-based access (admin, safety director, operator)",
      "NCCCO certification tracking with expiration alerts",
      "Medical exam record management",
      "Training documentation",
      "Operator assignment to specific cranes",
      "Activity audit log for all team actions",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    subtitle: "Built for the jobsite, not the office",
    desc: "CraneCheck is designed for construction workers on active jobsites. Large tap targets for gloved hands, high-contrast display for bright sun, offline capability for areas without cell service. It works on any smartphone — no special hardware needed.",
    bullets: [
      "Works on iOS and Android — any modern smartphone",
      "Large touch targets designed for gloved hands",
      "High-contrast UI for outdoor visibility",
      "Full offline functionality — syncs automatically",
      "Camera integration for photo evidence",
      "Push notifications for assignments and alerts",
    ],
  },
];

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={isReversed ? "md:order-2" : ""}
          >
            <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
              <feature.icon className="text-brand" size={24} />
            </div>
            <h2 className="text-3xl font-bold mb-2">{feature.title}</h2>
            <p className="text-brand font-medium mb-4">{feature.subtitle}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">{feature.desc}</p>
            <ul className="space-y-2.5">
              {feature.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={isReversed ? "md:order-1" : ""}
          >
            <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-400">
                <feature.icon size={48} strokeWidth={1} />
                <p className="text-sm mt-2">Screenshot placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function FeatureDeepDive() {
  return (
    <div>
      {FEATURES.map((feature, i) => (
        <FeatureBlock key={feature.title} feature={feature} index={i} />
      ))}
    </div>
  );
}
