import type { Metadata } from "next";
import { CheckCircle, ArrowRight, Check, Clock, AlertTriangle, FileText, Shield, Smartphone, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Crane Inspection Software — Digital Checklists & OSHA Compliance | CraneCheck",
  description: "Purpose-built crane inspection software. Digital checklists, automatic compliance tracking, and audit-ready reports. Start your free 14-day trial.",
  robots: { index: false, follow: false },
};

const PAIN_POINTS = [
  { icon: Clock, text: "Wasting hours on paper inspection forms?" },
  { icon: AlertTriangle, text: "Worried about failing an OSHA audit?" },
  { icon: FileText, text: "Can't find inspection records when you need them?" },
];

const FEATURES = [
  "Digital inspection checklists (mobile + tablet)",
  "29 CFR 1926.1412 & 1926.1417 built in",
  "Photo documentation with GPS stamps",
  "Automatic deficiency flagging & follow-up",
  "Audit-ready reports generated instantly",
  "Multi-crane fleet dashboard",
  "Maintenance scheduling & reminders",
  "Works offline — sync when connected",
];

const TESTIMONIALS = [
  { name: "Dave M.", role: "Safety Director, Gulf Coast Crane", text: "We passed our OSHA audit with zero findings for the first time. CraneCheck made it easy to prove compliance." },
  { name: "Rick P.", role: "Fleet Manager, Midwest Lifting", text: "Went from 45-minute paper inspections to 12 minutes on a tablet. My operators actually do them now." },
  { name: "Linda W.", role: "Operations VP, Atlas Rigging", text: "Having every inspection record searchable in seconds saved us during a surprise audit. Worth every penny." },
];

const SIGNUP_URL = "https://app.cranecheck.com/sign-up";

export default function LPCraneInspectionSoftware() {
  return (
    <main className="min-h-screen bg-white">
      {/* Minimal header — logo only, no nav */}
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
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-brand-light/50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-navy">
            Stop Risking OSHA Fines.{" "}
            <span className="text-brand">Start Inspecting Smarter.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            CraneCheck is crane inspection software purpose-built for safety teams.
            Digital checklists, automatic compliance tracking, and audit-ready reports — all from a tablet.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-10 py-5 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-gray-500">No credit card required · Set up in 5 minutes</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((p) => (
              <div key={p.text} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
                <p.icon className="text-red-500 mt-0.5 shrink-0" size={20} />
                <p className="text-gray-700 font-medium">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg text-gray-600">
            The average OSHA crane violation fine is <strong>$16,131</strong>. One missed inspection can cost you more than a year of CraneCheck.
          </p>
        </div>
      </section>

      {/* Features checklist */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy">
            Everything You Need for Compliant Crane Inspections
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                  <Check className="text-green-600" size={14} />
                </div>
                <span className="text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-navy">Trusted by Crane Safety Teams</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-navy">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 mb-8">All features included. Still cheaper than one OSHA fine.</p>
          <div className="bg-white rounded-2xl border-2 border-brand p-8 shadow-lg">
            <div className="mb-6">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-navy">$199</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-brand font-medium mt-2">Up to 5 cranes · $29/crane after that</p>
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
            Ready to Go Digital?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Join crane companies that replaced paper binders with audit-ready digital records.
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
