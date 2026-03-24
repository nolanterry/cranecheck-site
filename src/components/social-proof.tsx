"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Smartphone, FileCheck, Clock } from "lucide-react";

const FEATURES = [
  { icon: Shield, value: "29 CFR 1926", label: "Subpart CC Compliant" },
  { icon: Smartphone, value: "Mobile", label: "Phone & Tablet Ready" },
  { icon: FileCheck, value: "Instant", label: "Audit-Ready Reports" },
  { icon: Clock, value: "Minutes", label: "Not Hours per Inspection" },
];

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider">
            Built for crane safety teams
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FEATURES.map((f) => (
              <div key={f.label} className="text-center">
                <f.icon className="mx-auto mb-2 text-brand" size={24} />
                <div className="text-2xl font-bold text-navy">{f.value}</div>
                <div className="text-sm text-gray-500 mt-1">{f.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
