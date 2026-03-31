import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { CASE_STUDIES } from "@/lib/case-study-data";
import { ArrowRight, ShieldCheck, Clock, FileCheck, Smartphone, BarChart3, Camera } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers — CraneCheck",
  description:
    "See how CraneCheck helps crane companies digitize inspections, stay OSHA-compliant, and eliminate paper checklists.",
  alternates: { canonical: "/customers" },
};

const KEY_BENEFITS = [
  {
    icon: ShieldCheck,
    title: "OSHA Audit-Ready Documentation",
    desc: "Every inspection is digitally recorded with timestamps, photos, and signatures — organized and exportable for any compliance review.",
  },
  {
    icon: Clock,
    title: "Faster Pre-Shift Inspections",
    desc: "Pre-built checklists mapped to 29 CFR 1926 Subpart CC let operators complete inspections in minutes on their phone or tablet.",
  },
  {
    icon: BarChart3,
    title: "Fleet-Wide Visibility",
    desc: "A real-time dashboard shows inspection completion, open deficiencies, and compliance status across every crane and job site.",
  },
  {
    icon: Camera,
    title: "Photo-Verified Records",
    desc: "Timestamped, GPS-tagged photos attached to every inspection. Visual evidence that the work was done, when and where.",
  },
  {
    icon: FileCheck,
    title: "Deficiency Tracking & Resolution",
    desc: "Flag issues, assign corrective actions, and track resolution with a full audit trail. Nothing falls through the cracks.",
  },
  {
    icon: Smartphone,
    title: "Works Offline",
    desc: "Operators can complete inspections without cell service. Data syncs automatically when a connection is available.",
  },
];

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Built for Crane Companies
              <br />
              <span className="text-brand">Who Take Safety Seriously</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From 5-crane shops to 50-crane fleets, CraneCheck helps safety
              teams eliminate paper, stay compliant, and keep their crews safe.
            </p>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Why Safety Teams Choose CraneCheck
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Purpose-built for crane inspection compliance — every feature
              designed to replace paper and prove you&apos;re audit-ready.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {KEY_BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                >
                  <b.icon size={28} className="text-brand mb-4" />
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Customer Success Stories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how crane companies are using CraneCheck to eliminate paper,
                stay compliant, and improve safety across their operations.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {CASE_STUDIES.map((study) => (
                <div
                  key={study.slug}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {study.companyName}
                    </h3>
                    <span className="bg-brand/10 text-brand text-sm px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.hero.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                      <div className="font-bold text-brand text-lg">
                        {study.hero.keyMetric}
                      </div>
                      <div className="text-sm text-gray-600">Key Result</div>
                    </div>
                    <a
                      href={`/customers/${study.slug}`}
                      className="inline-flex items-center gap-1 text-brand font-semibold hover:text-brand-dark transition-colors"
                    >
                      Read Story <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://app.cranecheck.co/sign-up"
                className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-lg"
              >
                Start Your Free 14-Day Trial <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
