"use client";

import { ArrowRight } from "lucide-react";

const SIGNUP_URL = "https://app.cranecheck.co/sign-up";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stop gambling with paper checklists.
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          The next OSHA inspector won&apos;t accept &ldquo;we lost that binder.&rdquo;
          CraneCheck gives you digital, searchable, audit-proof inspection records — starting today.
        </p>
        <a
          href={SIGNUP_URL}
          className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors"
        >
          Start Free Trial <ArrowRight size={18} />
        </a>
        <p className="text-sm text-gray-400 mt-4">14 days free · No credit card · Cancel anytime</p>
      </div>
    </section>
  );
}
