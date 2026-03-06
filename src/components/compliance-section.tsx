"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, AlertTriangle } from "lucide-react";

const REGS = [
  { code: "1926.1412(d)", title: "Each Shift Inspection", desc: "Visual inspection of 13+ items before every shift — controls, wire rope, hydraulics, safety devices." },
  { code: "1926.1412(e)", title: "Monthly Inspection", desc: "Thorough inspection by qualified person. Must document date, inspector, equipment ID, and findings." },
  { code: "1926.1412(f)", title: "Annual Inspection", desc: "Comprehensive inspection with certification record retained until next annual + 2 months." },
  { code: "1910.179", title: "Overhead & Gantry", desc: "Daily visual + monthly documented + annual comprehensive for all overhead and gantry cranes." },
];

export function ComplianceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built on OSHA regulations,
                <br />
                <span className="text-brand">not around them.</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Every CraneCheck template maps directly to OSHA&apos;s crane inspection standards.
                Your operators follow the checklist — compliance happens automatically.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-red-700">The cost of non-compliance</p>
                  <p className="text-sm text-red-600 mt-1">
                    OSHA fines up to <strong>$165,323 per willful violation</strong>. After a crane accident,
                    investigators subpoena inspection records first. Missing records = negligence liability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            {REGS.map((r, i) => (
              <motion.div
                key={r.code}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-lg p-5 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-green-600" size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-brand bg-brand-light px-2 py-0.5 rounded">{r.code}</span>
                    <h3 className="font-semibold mt-1">{r.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
