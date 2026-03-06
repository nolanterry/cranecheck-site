"use client";

import { motion } from "framer-motion";
import { Shield, Clock, AlertTriangle, ArrowRight } from "lucide-react";

const STATS = [
  { icon: Shield, value: "$165K", label: "Max OSHA fine per violation" },
  { icon: Clock, value: "<3 min", label: "Complete inspection time" },
  { icon: AlertTriangle, value: "100%", label: "Audit-ready records" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              OSHA 29 CFR 1926.1412 Compliant
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Crane inspections{" "}
              <span className="text-brand">done right.</span>
              <br />
              Every shift. Every crane.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Replace paper checklists with mobile-first digital inspections.
              Photo evidence, deficiency tracking, and PDF compliance reports —
              all in under 3 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#"
                className="bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-center flex items-center justify-center gap-2"
              >
                Start Free Trial <ArrowRight size={18} />
              </a>
              <a
                href="/features"
                className="border border-gray-300 text-gray-700 font-medium px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-center"
              >
                See All Features
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <s.icon className="mx-auto mb-2 text-brand" size={24} />
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
