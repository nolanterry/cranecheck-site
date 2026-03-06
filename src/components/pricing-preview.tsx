"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const FEATURES = [
  "Unlimited inspections",
  "All crane type templates",
  "Photo evidence & GPS tagging",
  "Deficiency tracking & corrective actions",
  "PDF compliance reports",
  "Team management & permissions",
  "Equipment registry",
  "Inspection history & search",
  "Priority support",
];

export function PricingPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. No surprises.</h2>
        <p className="text-gray-600 mb-12">One plan. Everything included. Add cranes as your fleet grows.</p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl border-2 border-brand p-8 shadow-lg"
        >
          <div className="mb-6">
            <div className="text-sm text-brand font-semibold mb-2">FLEET PLAN</div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold">$199</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">+ $29/crane per month</div>
            <div className="text-sm text-brand mt-2">14-day free trial · No credit card required</div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 text-left mb-8">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-2">
                <Check className="text-green-500 shrink-0" size={16} />
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="block w-full bg-brand text-white font-semibold py-4 rounded-lg hover:bg-brand-dark transition-colors"
          >
            Start Your Free Trial
          </a>
        </motion.div>

        <p className="text-sm text-gray-500 mt-6">
          5 cranes? <strong>$344/mo</strong>. 20 cranes? <strong>$779/mo</strong>. Still cheaper than one OSHA fine.
        </p>
      </div>
    </section>
  );
}
