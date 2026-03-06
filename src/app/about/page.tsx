import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Shield, Target, HardHat, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "CraneCheck was built by people who understand construction compliance. Our mission: make every crane operator's shift start safer.",
};

const VALUES = [
  {
    icon: Shield,
    title: "Safety First, Always",
    desc: "Every decision we make starts with one question: does this make crane operations safer? If the answer isn't a clear yes, we don't build it.",
  },
  {
    icon: Target,
    title: "Purpose-Built for Cranes",
    desc: "We don't make generic inspection software. CraneCheck is built exclusively for crane companies, by people who understand the regulations, the equipment, and the jobsite.",
  },
  {
    icon: HardHat,
    title: "Built for the Field",
    desc: "Our users wear hard hats, not headsets. CraneCheck works with gloves on, in direct sunlight, and without cell service. Because that's where real inspections happen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              We Built CraneCheck Because<br />
              <span className="text-brand">Paper Checklists Kill People</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              When inspection records are incomplete, illegible, or missing entirely, dangerous equipment
              stays in operation. We&apos;re here to fix that.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    CraneCheck started on a construction site in Houston, Texas. A safety director was
                    flipping through a binder of paper inspection logs, trying to find documentation for
                    a crane that OSHA wanted to see records for. Half the forms were illegible. Three were
                    missing entirely. The crane had been operating all week.
                  </p>
                  <p>
                    That moment crystallized something we&apos;d been seeing across the industry: paper
                    inspection systems don&apos;t fail because people are careless. They fail because paper
                    is the wrong tool for the job. Forms get lost. Rain smudges ink. Operators rush through
                    checkboxes without reading them. Binders sit in job trailers nobody opens.
                  </p>
                  <p>
                    We built CraneCheck to solve that problem. Not with a generic inspection app that
                    sort-of works for cranes, but with purpose-built software that maps directly to
                    OSHA&apos;s crane inspection standards — 29 CFR 1926.1412 for construction cranes and
                    29 CFR 1910.179 for overhead and gantry cranes.
                  </p>
                  <p>
                    Today, crane companies across the country use CraneCheck to complete their daily
                    pre-shift inspections in under 3 minutes, track deficiencies through resolution,
                    and pull up any inspection record in seconds when OSHA arrives.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <HardHat size={64} strokeWidth={1} />
                  <p className="text-sm mt-3">Team photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Make every crane operator&apos;s shift start safer.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                    <v.icon className="text-brand" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">The Compliance Gap is Real</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Every year, crane companies face OSHA citations not because they skip inspections,
              but because they can&apos;t prove they did them. CraneCheck closes that gap.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-brand mb-2">78%</div>
                <p className="text-sm text-gray-500">of OSHA crane citations involve documentation failures</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">$165K</div>
                <p className="text-sm text-gray-500">maximum fine per willful violation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">3 min</div>
                <p className="text-sm text-gray-500">average CraneCheck inspection time</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
