import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, Users, Shield, Zap, Heart, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — CraneCheck",
  description: "Join CraneCheck and help modernize crane inspection compliance. We're building the future of construction safety software. See open positions.",
  alternates: { canonical: "/careers" },
};

const VALUES = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We build software that keeps people safe. Every feature we ship protects crane operators and construction workers.",
  },
  {
    icon: Zap,
    title: "Ship Fast, Ship Right",
    description: "We move quickly but never cut corners on quality. Our customers depend on us for OSHA compliance — accuracy matters.",
  },
  {
    icon: Users,
    title: "Customer Obsessed",
    description: "We talk to crane companies every week. Our product decisions come from real conversations with safety directors, not guesswork.",
  },
  {
    icon: Heart,
    title: "Small Team, Big Impact",
    description: "Every person here has outsized impact. We're lean, autonomous, and trust each other to do great work.",
  },
];

const BENEFITS = [
  "Competitive salary + equity",
  "Remote-first (US time zones)",
  "Unlimited PTO",
  "Health, dental, and vision",
  "$1,000/year learning budget",
  "Latest MacBook + home office stipend",
  "Annual team retreat",
  "401(k) match",
];

const POSITIONS = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build the core platform powering crane inspection workflows for thousands of construction companies. Next.js, TypeScript, PostgreSQL.",
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote (US)",
    type: "Full-time",
    description: "Design intuitive mobile-first experiences for crane operators in the field. Figma, user research, design systems.",
  },
  {
    title: "Account Executive — Construction SaaS",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Close mid-market crane companies on CraneCheck. You'll own the full sales cycle from demo to close, targeting safety directors and fleet managers.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    description: "Onboard new crane companies, drive adoption, and ensure our customers get maximum value from the platform. Construction industry experience preferred.",
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-time",
    description: "Create content that crane safety professionals actually want to read. Blog posts, guides, webinars — you'll own the content engine driving inbound leads.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy to-navy/95 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block text-sm font-medium text-orange-400 mb-4 tracking-wide uppercase">
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build Software That Keeps<br />People Safe
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              CraneCheck is modernizing how crane companies manage inspections and OSHA compliance.
              Join a small team solving a real problem for an industry that&apos;s been stuck on paper for decades.
            </p>
            <div className="mt-8">
              <a href="#positions" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why CraneCheck */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why CraneCheck?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We&apos;re not building another generic SaaS. We&apos;re digitizing safety-critical workflows
                in an industry where the status quo is literally a clipboard and a pen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {VALUES.map((value) => (
                <div key={value.title} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-orange-100 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We take care of our team so they can focus on building great software.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
                  <TrendingUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don&apos;t see the right role? Email us at <a href="mailto:careers@cranecheck.co" className="text-orange-600 hover:underline">careers@cranecheck.co</a> — we&apos;re always looking for great people.
              </p>
            </div>
            <div className="space-y-4">
              {POSITIONS.map((position) => (
                <div key={position.title} className="p-6 rounded-xl border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" /> {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {position.type}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{position.description}</p>
                    </div>
                    <a
                      href={`mailto:careers@cranecheck.co?subject=Application: ${position.title}`}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap self-start"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">🏗️ Builders Welcome</h3>
                <p className="text-sm text-gray-600">We&apos;re a startup. You&apos;ll wear multiple hats, ship real features, and see your work used by crane operators the same week.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">🌎 Remote First</h3>
                <p className="text-sm text-gray-600">Work from anywhere in the US. We communicate async-first, meet when it matters, and trust you to manage your time.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">📈 Growth Stage</h3>
                <p className="text-sm text-gray-600">Early-stage with real revenue and paying customers. You&apos;ll have equity and a front-row seat to scaling a vertical SaaS company.</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.co" },
              { "@type": "ListItem", position: 2, name: "Careers", item: "https://cranecheck.co/careers" },
            ],
          }),
        }}
      />
    </>
  );
}
