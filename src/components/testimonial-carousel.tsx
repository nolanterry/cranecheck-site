"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Smartphone, ShieldCheck, BarChart3, Camera, FileText } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Smartphone,
    title: "Mobile-First Inspections",
    description:
      "Operators complete pre-shift checklists on their phone or tablet. No paper, no clipboards, no excuses.",
  },
  {
    icon: ShieldCheck,
    title: "Built-In OSHA Compliance",
    description:
      "Every checklist maps to 29 CFR 1926 Subpart CC. Wire rope, pre-shift, monthly, and annual inspections — all covered.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description:
      "See inspection completion, open deficiencies, and compliance status across your entire fleet from one screen.",
  },
  {
    icon: Camera,
    title: "Photo Evidence",
    description:
      "Timestamped, GPS-tagged photos attached to every inspection. Visual proof that the work was done, when and where.",
  },
  {
    icon: FileText,
    title: "One-Click Audit Reports",
    description:
      "Generate complete, audit-ready PDF reports in seconds. Organized by crane, date range, or inspector.",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HIGHLIGHTS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Product highlights"
      className="py-20 md:py-28 bg-white/[0.03]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Everything You Need for Crane Compliance
        </h2>
        <p className="text-gray-500 mb-12">
          Purpose-built features that replace paper binders with audit-ready
          digital records.
        </p>

        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              aria-live="polite"
              className="w-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-5">
                {(() => {
                  const Icon = HIGHLIGHTS[current].icon;
                  return <Icon className="text-brand" size={40} />;
                })()}
              </div>

              {/* Content */}
              <div className="relative max-w-2xl mx-auto">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {HIGHLIGHTS[current].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed px-6">
                  {HIGHLIGHTS[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div
          className="flex justify-center gap-2 mt-8"
          role="tablist"
          aria-label="Feature navigation"
        >
          {HIGHLIGHTS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Feature ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-amber-500 w-7"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
