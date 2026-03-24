"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, FileSearch, ArrowRight } from "lucide-react";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "OSHA Audit-Ready",
    description:
      "Digital inspection records organized by crane, date, and inspector — instantly accessible when compliance officers arrive.",
  },
  {
    icon: Clock,
    title: "Faster Inspections",
    description:
      "Pre-built checklists mapped to 29 CFR 1926 let operators complete inspections in minutes instead of wrestling with paper forms.",
  },
  {
    icon: FileSearch,
    title: "Complete Visibility",
    description:
      "See every crane's inspection status across all your job sites from a single dashboard. No more chasing paperwork.",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Safety Teams Choose CraneCheck
          </h2>
          <p className="text-gray-600">
            Purpose-built for crane inspection compliance — from pre-shift
            checks to OSHA audits.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <b.icon className="text-brand mb-4" size={28} />
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://app.cranecheck.com/sign-up"
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors"
          >
            Start Your Free Trial <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
