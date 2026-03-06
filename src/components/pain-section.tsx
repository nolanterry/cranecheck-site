"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Ban, Scale } from "lucide-react";

const CONSEQUENCES = [
  { icon: AlertTriangle, value: "$165,514", label: "per willful violation", desc: "OSHA's maximum penalty for willful violations. A single missed inspection on a single crane can trigger this." },
  { icon: Ban, value: "Immediate", label: "equipment shutdown", desc: "OSHA can issue an imminent danger order, shutting down your crane operations on the spot. Your project stops cold." },
  { icon: Scale, value: "Criminal", label: "liability", desc: "Knowing violations that result in worker death can lead to criminal prosecution. Paper logs that \"went missing\" won't save you." },
];

export function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What happens when OSHA shows up and your inspection logs are missing?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every year, crane companies face devastating fines because they can&apos;t produce inspection records.
            Don&apos;t be one of them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONSEQUENCES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-4">
                <c.icon className="text-red-400" size={28} />
              </div>
              <div className="text-4xl font-bold text-red-400 mb-1">{c.value}</div>
              <div className="text-sm text-gray-400 mb-4">{c.label}</div>
              <p className="text-sm text-gray-300">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
