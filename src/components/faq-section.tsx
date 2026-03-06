"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Does CraneCheck meet OSHA's 29 CFR 1926.1412 requirements?",
    a: "Yes. CraneCheck's inspection templates are built directly from the requirements in 29 CFR 1926.1412 for construction cranes and 29 CFR 1910.179 for overhead and gantry cranes. Every checkpoint maps to a specific regulatory requirement. Your completed digital inspections meet OSHA's documentation standards.",
  },
  {
    q: "Can my operators use CraneCheck without cell service?",
    a: "Yes. CraneCheck works offline on any smartphone. Operators can complete full inspections, take photos, and flag deficiencies without connectivity. Everything syncs automatically when they're back in range.",
  },
  {
    q: "How long does it take to complete an inspection?",
    a: "Most operators complete a full pre-shift inspection in under 3 minutes. That's faster than filling out a paper form — and the result is a timestamped, GPS-tagged, photo-documented digital record instead of a crumpled checklist.",
  },
  {
    q: "What happens when an operator finds a deficiency?",
    a: "When an operator flags a critical deficiency, CraneCheck automatically locks the crane from further operation until the issue is resolved. The deficiency is logged with photos, assigned for corrective action, and tracked through resolution. Safety directors get instant notifications.",
  },
  {
    q: "Can I try CraneCheck before committing?",
    a: "Absolutely. We offer a 14-day free trial with up to 3 cranes. No credit card required. You'll have access to every feature so you can see how CraneCheck works with your actual fleet and crew.",
  },
  {
    q: "How does pricing work?",
    a: "CraneCheck is $199/month (or $169/month on annual billing) which includes 5 cranes. Additional cranes are $29/crane/month. Every plan includes unlimited inspections, all features, and support. Enterprise pricing is available for fleets of 10+ cranes.",
  },
  {
    q: "Will OSHA accept digital inspection records?",
    a: "Yes. OSHA requires that inspection records be maintained and available for review — they do not require paper. Digital records that include the inspector's name, date, equipment identification, and findings satisfy OSHA's documentation requirements. In fact, digital records are often preferred by OSHA inspectors because they're organized and searchable.",
  },
  {
    q: "How do I get my team started?",
    a: "Sign up for a free trial, add your cranes to the equipment registry, invite your operators, and they can start inspecting the same day. No training required — if they can use a smartphone, they can use CraneCheck.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left gap-4"
      >
        <span className="font-medium text-gray-900">{faq.q}</span>
        <ChevronDown
          size={20}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you need, <a href="/contact" className="text-brand hover:underline">contact us</a>.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 px-6">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
