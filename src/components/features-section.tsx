"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Camera, AlertCircle, FileText, Users, Smartphone } from "lucide-react";

const FEATURES = [
  { icon: ClipboardCheck, title: "OSHA Inspection Templates", desc: "Pre-built checklists for mobile, tower, overhead, and crawler cranes — mapped directly to 29 CFR 1926.1412 requirements." },
  { icon: Camera, title: "Photo Evidence", desc: "Attach timestamped, GPS-tagged photos to every inspection item. Irrefutable proof when OSHA comes knocking." },
  { icon: AlertCircle, title: "Deficiency Tracking", desc: "Flag issues, assign corrective actions, and track resolution. Never let a deficiency fall through the cracks." },
  { icon: FileText, title: "PDF Compliance Reports", desc: "Generate audit-ready inspection reports with one tap. Inspector name, date, equipment ID, and findings — all documented." },
  { icon: Users, title: "Team Management", desc: "Add operators, assign cranes, control permissions. Safety directors see everything, operators see their equipment." },
  { icon: Smartphone, title: "Mobile-First Design", desc: "Built for the jobsite. Complete full inspections on your phone — even with gloves on. Works offline too." },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to stay compliant</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CraneCheck replaces your paper inspection forms with a digital system that&apos;s faster, more reliable, and always audit-ready.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-gray-100 hover:border-brand/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                <f.icon className="text-brand" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
