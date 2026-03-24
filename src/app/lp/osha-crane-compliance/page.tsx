import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Check, ShieldAlert, FileWarning, Scale, Shield, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "OSHA Crane Compliance Software — Pass Every Audit | CraneCheck",
  description: "Never fail another OSHA crane audit. CraneCheck automates 29 CFR 1926 Subpart CC compliance with digital checklists, deficiency tracking, and audit-ready reports.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/osha-crane-compliance" },
};

const COMPLIANCE_GAPS = [
  { icon: ShieldAlert, title: "$16,131 per violation", desc: "OSHA's minimum serious penalty. Willful violations: up to $161,323." },
  { icon: FileWarning, title: "70% of citations", desc: "are for incomplete or missing inspection documentation — not actual safety failures." },
  { icon: Scale, title: "Subpart CC complexity", desc: "1926.1412 (pre-shift), 1926.1413 (wire rope), 1926.1417 (documentation) — hard to track on paper." },
];

const COMPLIANCE_FEATURES = [
  "Pre-shift, monthly, and annual checklists mapped to 29 CFR 1926",
  "Wire rope inspection tracking per 1926.1413",
  "Automatic deficiency → corrective action workflows",
  "Qualified & competent person assignment records",
  "Load chart documentation and verification",
  "Digital signatures with timestamps",
  "Inspection history searchable by crane, date, or inspector",
  "Exportable PDF reports for auditors in one click",
];

const SIGNUP_URL = "https://app.cranecheck.com/sign-up";

export default function LPOshaCraneCompliance() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      {/* Minimal header */}
      <div className="border-b border-gray-100 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-bold tracking-tight">
              Crane<span className="text-brand">Check</span>
            </span>
            <CheckCircle className="text-brand" size={18} strokeWidth={3} />
          </div>
          <a
            href="https://app.cranecheck.com/login"
            className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
          >
            Sign In →
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-navy to-navy-light text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
            <ShieldAlert size={16} />
            OSHA fines increased 44% since 2022
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Pass Every OSHA Crane Audit.{" "}
            <span className="text-brand">Guaranteed.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            CraneCheck automates 29 CFR 1926 Subpart CC compliance. Digital checklists,
            automatic deficiency tracking, and audit-ready documentation — so you never scramble before an inspection again.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-10 py-5 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-white/50">No credit card required · Full compliance features from day one</p>
        </div>
      </section>

      {/* Compliance Gaps */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
            The Cost of Paper-Based Compliance
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Most crane companies aren&apos;t unsafe — they just can&apos;t prove they&apos;re safe. Paper records create gaps that OSHA turns into fines.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {COMPLIANCE_GAPS.map((g) => (
              <div key={g.title} className="bg-red-50 rounded-2xl p-6 border border-red-100">
                <g.icon className="text-red-500 mb-3" size={28} />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{g.title}</h3>
                <p className="text-gray-600">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
            Built for Subpart CC Compliance
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {COMPLIANCE_FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="text-green-600" size={14} />
                </div>
                <span className="text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-navy">Ready to Be Audit-Ready?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join crane companies replacing paper binders with digital compliance records.
            Start your free trial and see the difference in your first inspection.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-10 py-5 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-gray-500">No credit card required · Full compliance features from day one</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-navy">Cheaper Than One OSHA Fine</h2>
          <p className="text-gray-600 mb-8">Full compliance suite. All features. No surprises.</p>
          <div className="bg-white rounded-2xl border-2 border-brand p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-navy">$199</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-brand font-medium mt-2">Up to 5 cranes · $29/crane after that</p>
              <p className="text-sm text-gray-500 mt-1">That&apos;s less than 1.3% of a single serious OSHA violation</p>
            </div>
            <a
              href={SIGNUP_URL}
              className="block w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors text-lg mb-4"
            >
              Start Free 14-Day Trial
            </a>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Shield size={14} /> No credit card required</span>
              <span className="flex items-center gap-1"><Smartphone size={14} /> Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 px-4 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t Wait for the Next Audit
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Every day without digital records is another day of compliance risk.
            Get CraneCheck running in 5 minutes.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-10 py-5 rounded-xl hover:bg-brand-dark transition-colors text-lg"
          >
            Start Your Free Trial <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-6 px-4 border-t border-gray-100 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CraneCheck. All rights reserved.
      </footer>
    </main>
  );
}
