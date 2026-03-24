import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Truck, Building2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases — CraneCheck for Every Role on the Job Site",
  description:
    "See how CraneCheck helps general contractors, crane rental companies, and safety directors streamline OSHA crane inspections, reduce compliance risk, and pass audits with confidence.",
  openGraph: {
    title: "CraneCheck Use Cases — Built for How You Work",
    description:
      "From multi-crane job sites to fleet-wide inspection tracking, see how CraneCheck fits your role.",
  },
};

const USE_CASES = [
  {
    slug: "general-contractors",
    title: "CraneCheck for General Contractors",
    subtitle: "Manage multi-crane job sites and subcontractor compliance from one dashboard.",
    icon: Building2,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    slug: "crane-rental-companies",
    title: "CraneCheck for Crane Rental Companies",
    subtitle: "Fleet-wide inspection tracking, customer documentation, and rental compliance at scale.",
    icon: Truck,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    slug: "safety-directors",
    title: "CraneCheck for Safety Directors",
    subtitle: "Real-time compliance dashboards, OSHA audit prep, and deficiency resolution tracking.",
    icon: ShieldCheck,
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-navy text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">Use Cases</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Every Role on the Job Site
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Whether you&apos;re managing a single tower crane or a fleet of 200, CraneCheck adapts to how your team actually works — from the field to the front office.
            </p>
          </div>
        </section>

        {/* Use Case Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {USE_CASES.map((uc) => {
                const Icon = uc.icon;
                return (
                  <Link
                    key={uc.slug}
                    href={`/use-cases/${uc.slug}`}
                    className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-amber-300 transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${uc.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{uc.subtitle}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which plan fits?</h2>
            <p className="text-gray-300 mb-8">
              Book a 15-minute call and we&apos;ll show you exactly how CraneCheck works for your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.cranecheck.com/sign-up" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Start Free Trial
              </a>
              <Link href="/demo" className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.com" },
              { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://cranecheck.com/use-cases" },
            ],
          }),
        }}
      />
    </>
  );
}
