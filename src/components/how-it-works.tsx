"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, ClipboardCheck, FileText } from "lucide-react";

const STEPS = [
  { num: "01", icon: Smartphone, title: "Open CraneCheck", desc: "Select your crane from the equipment registry. The correct OSHA checklist loads automatically based on crane type." },
  { num: "02", icon: ClipboardCheck, title: "Walk the Inspection", desc: "Tap through each checkpoint — controls, wire rope, hydraulics, safety devices. Snap photos of any issues. Under 3 minutes." },
  { num: "03", icon: FileText, title: "Submit & Done", desc: "Your signed inspection record is stored, timestamped, and available for any audit. Generate PDF reports anytime." },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">3 minutes. Every shift. Done.</h2>
          <p className="text-gray-600">Faster than filling out a paper form — and infinitely more useful.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-brand/10 mb-4">{s.num}</div>
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-brand" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
