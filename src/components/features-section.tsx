"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardCheck, Warehouse, AlertCircle, FileText, Users, Smartphone } from "lucide-react";

const FEATURES = [
  { icon: ClipboardCheck, title: "Daily Pre-Shift Inspections", desc: "29 CFR 1926.1412 compliant checklists for mobile, tower, overhead, and crawler cranes. Tap through each checkpoint in under 3 minutes." },
  { icon: Warehouse, title: "Equipment Registry", desc: "Track your entire fleet in one place. Crane type, serial number, certifications, and complete inspection history for every unit." },
  { icon: AlertCircle, title: "Deficiency Tracking", desc: "Critical failures auto-lock cranes from operation. Flag issues, assign corrective actions, and track resolution with photo evidence." },
  { icon: FileText, title: "PDF Audit Reports", desc: "One-click OSHA-ready documentation. Inspector name, date, equipment ID, findings, and photos — all in a professional PDF." },
  { icon: Users, title: "Team Management", desc: "NCCCO cert tracking, role-based access. Safety directors see everything, operators see their assigned equipment." },
  { icon: Smartphone, title: "Mobile-First", desc: "Works on any phone, even with spotty cell service. Offline mode syncs when you're back in range. Built for gloves and bright sun." },
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
