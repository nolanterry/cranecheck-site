import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle, Calendar, Shield, Smartphone, BarChart3, Clock, Users, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — See CraneCheck in Action",
  description: "Schedule a personalized demo of CraneCheck crane inspection software. See digital checklists, compliance tracking, and audit-ready reports for your fleet.",
  alternates: { canonical: "/demo" },
};

const DEMO_INCLUDES = [
  { icon: Smartphone, title: "Live Walkthrough", desc: "See the mobile inspection flow your operators will use daily — from pre-shift checks to full periodic inspections." },
  { icon: Shield, title: "Compliance Dashboard", desc: "Watch how CraneCheck tracks 29 CFR 1926 compliance across your entire fleet in real time." },
  { icon: BarChart3, title: "Reporting & Audits", desc: "Generate audit-ready PDF reports in seconds. We'll show you exactly what OSHA inspectors want to see." },
  { icon: Users, title: "Fleet Management", desc: "Multi-crane dashboard, operator assignments, and maintenance scheduling — tailored to your fleet size." },
];

const STATS = [
  { value: "12 min", label: "Average inspection time (vs 45 min on paper)" },
  { value: "100%", label: "Audit pass rate for CraneCheck users" },
  { value: "5 min", label: "Setup time — no IT department needed" },
];

const FAQS = [
  { q: "How long is the demo?", a: "About 20 minutes. We'll customize it to your fleet size and inspection requirements." },
  { q: "Do I need to prepare anything?", a: "Nope. Just show up. If you want, bring questions about your current inspection workflow." },
  { q: "Can I try it after the demo?", a: "Absolutely. Every demo includes a 14-day free trial so you can test it with your crew." },
  { q: "Is there a contract?", a: "No contracts. Month-to-month pricing. Cancel anytime." },
];

export default function DemoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar size={16} />
                  Free Personalized Demo
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  See Why Safety Teams Are Ditching Paper Inspections
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Get a personalized walkthrough of CraneCheck tailored to your fleet.
                  See how digital inspections, automatic compliance tracking, and audit-ready reports
                  work for crane companies like yours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25"
                  >
                    Book Your Demo <ArrowRight size={20} />
                  </a>
                  <a
                    href="https://app.cranecheck.com/sign-up"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Or Start Free Trial
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    {STATS.map((s) => (
                      <div key={s.label} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl font-bold text-brand min-w-[80px]">{s.value}</span>
                        <span className="text-gray-300 text-sm">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you'll see */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">What You&apos;ll See in Your Demo</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every demo is tailored to your operation. Here&apos;s what we typically cover:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {DEMO_INCLUDES.map((item) => (
                <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                    <item.icon className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="book" className="py-20 bg-gray-50 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-navy">Book Your Demo</h2>
            <p className="text-center text-gray-600 mb-10">Fill out the form and we&apos;ll schedule a time that works for you.</p>
            <form
              action="https://formspree.io/f/xpwzgvkd"
              method="POST"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-6"
            >
              <input type="hidden" name="_subject" value="CraneCheck Demo Request" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <input type="text" id="company" name="company" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="Acme Crane Services" />
                </div>
                <div>
                  <label htmlFor="fleet" className="block text-sm font-medium text-gray-700 mb-2">Fleet Size</label>
                  <select id="fleet" name="fleet_size" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white">
                    <option value="">Select fleet size</option>
                    <option value="1-5">1–5 cranes</option>
                    <option value="6-15">6–15 cranes</option>
                    <option value="16-50">16–50 cranes</option>
                    <option value="50+">50+ cranes</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Anything specific you&apos;d like to see?</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all resize-none" placeholder="E.g., OSHA audit prep, mobile inspections, multi-site management..." />
              </div>
              <button type="submit" className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25">
                Request Demo
              </button>
              <p className="text-center text-sm text-gray-500">We&apos;ll respond within 1 business day. No spam, ever.</p>
            </form>
          </div>
        </section>

        {/* Social proof */}
        <section className="py-16 bg-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8 text-navy">Trusted by Crane Companies Nationwide</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-brand">$16,131</div>
                <p className="text-sm text-gray-600 mt-1">Avg OSHA crane violation fine</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">73%</div>
                <p className="text-sm text-gray-600 mt-1">Faster inspections with CraneCheck</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand">0</div>
                <p className="text-sm text-gray-600 mt-1">Audit findings for our customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-navy">Demo FAQ</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to See CraneCheck?</h2>
            <p className="text-gray-300 mb-8">20 minutes. No pressure. Just a walkthrough of what digital crane inspections look like.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors">
                Book Your Demo <Calendar size={20} />
              </a>
              <a href="https://app.cranecheck.com/sign-up" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                Start Free Trial Instead
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
