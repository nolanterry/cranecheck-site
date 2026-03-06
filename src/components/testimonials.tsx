"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Tony Marchetti", company: "Marchetti Crane Services", location: "Houston, TX", quote: "We had OSHA show up last month. Pulled up every inspection on my phone in 30 seconds. The inspector said it was the cleanest documentation he'd ever seen. CraneCheck paid for itself that one visit.", rating: 5 },
  { name: "Dave Kowalski", company: "Midwest Steel Erectors", location: "Chicago, IL", quote: "My guys used to 'forget' their paper checklists half the time. Now they tap through it on their phone before their first lift. I can see every inspection from my desk. No more chasing paperwork.", rating: 5 },
  { name: "Linda Chen", company: "Pacific Crane Rental", location: "Seattle, WA", quote: "We manage 35 cranes across 8 jobsites. Before CraneCheck, tracking inspections was a nightmare of binders and spreadsheets. Now everything's digital, searchable, and audit-ready. Game changer.", rating: 5 },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by crane companies nationwide</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="text-yellow-400 fill-yellow-400" size={16} />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.company} · {t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
