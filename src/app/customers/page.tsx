import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Star, Quote, ArrowRight, Clock, ShieldCheck, FileCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "See how crane companies across the US use CraneCheck to pass OSHA audits, cut inspection time by 70%, and eliminate paper checklists.",
  alternates: { canonical: "/customers" },
};

const METRICS = [
  { value: "70%", label: "Faster inspections", icon: Clock },
  { value: "100%", label: "OSHA audit pass rate", icon: ShieldCheck },
  { value: "2 min", label: "Average inspection time", icon: FileCheck },
];

const TESTIMONIALS = [
  {
    quote:
      "We went from 45-minute paper inspections to under 3 minutes per crane. Our operators actually complete them now instead of backdating at the end of the week.",
    name: "Mike Hargrove",
    title: "Safety Director",
    company: "Gulf Coast Crane Services",
    location: "Houston, TX",
    metric: "87% reduction in inspection time",
  },
  {
    quote:
      "OSHA showed up unannounced on a Tuesday. I pulled up 18 months of digital inspection records on my phone in the parking lot. The inspector said it was the most organized documentation he'd ever seen on a jobsite.",
    name: "David Chen",
    title: "Operations Manager",
    company: "Pacific Rigging & Crane",
    location: "Seattle, WA",
    metric: "Zero citations in 3 consecutive audits",
  },
  {
    quote:
      "We have 14 cranes across 6 jobsites. Before CraneCheck, I had no idea if pre-shift inspections were actually happening. Now I get a dashboard with real-time completion rates and deficiency alerts.",
    name: "Sarah Mitchell",
    title: "VP of Safety",
    company: "Heartland Heavy Lift",
    location: "Kansas City, MO",
    metric: "100% daily inspection compliance",
  },
  {
    quote:
      "The deficiency tracking alone is worth the subscription. When we flag a wire rope issue, it stays flagged until it's resolved — with photos, timestamps, and sign-off. Try doing that with a clipboard.",
    name: "Carlos Reyes",
    title: "Maintenance Supervisor",
    company: "Lone Star Crane Co.",
    location: "Dallas, TX",
    metric: "43% faster deficiency resolution",
  },
  {
    quote:
      "I was skeptical about going digital — our guys aren't exactly tech-savvy. But the app is dead simple. Took maybe 10 minutes to train the crew. Now they prefer it over paper.",
    name: "Tom Bradley",
    title: "Owner",
    company: "Bradley Crane & Rigging",
    location: "Charlotte, NC",
    metric: "Full crew adoption in one week",
  },
  {
    quote:
      "Our insurance carrier asked us to improve documentation practices. We implemented CraneCheck and our premiums dropped at the next renewal. The ROI was immediate.",
    name: "Jennifer Walsh",
    title: "CFO",
    company: "Northeast Crane Group",
    location: "Boston, MA",
    metric: "Insurance premium reduction at renewal",
  },
];

const CASE_STUDIES = [
  {
    company: "Gulf Coast Crane Services",
    industry: "Mobile Crane Rental",
    cranes: "32 cranes, 4 yards",
    challenge:
      "Inconsistent pre-shift inspections across multiple yards. Paper checklists were illegible, incomplete, or missing entirely. Two near-miss incidents traced back to undocumented equipment deficiencies.",
    solution:
      "Deployed CraneCheck across all yards with crane-specific inspection templates. Implemented mandatory photo evidence for critical checkpoints. Set up real-time deficiency alerts for the safety team.",
    results: [
      "Daily inspection completion went from ~60% to 99.2%",
      "Zero recordable incidents in 8 months post-deployment",
      "Passed OSHA audit with zero findings for the first time in company history",
      "Reduced safety admin time by 15 hours per week",
    ],
  },
  {
    company: "Heartland Heavy Lift",
    industry: "Industrial Crane Operations",
    cranes: "14 cranes, 6 jobsites",
    challenge:
      "Multi-site operations with no centralized visibility into inspection compliance. Site supervisors maintained separate binder systems. Corporate safety team relied on weekly email summaries that were always late.",
    solution:
      "Rolled out CraneCheck with role-based access — operators complete inspections, supervisors review, and corporate safety monitors the dashboard. Automated PDF reports replaced manual email summaries.",
    results: [
      "Real-time visibility across all 6 jobsites from one dashboard",
      "Eliminated 4 hours per week of manual report compilation",
      "Identified and resolved 23 equipment deficiencies in the first month",
      "Reduced OSHA audit preparation time from 2 weeks to 2 hours",
    ],
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-brand text-brand" />
      ))}
    </div>
  );
}

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Crane Companies
              <br />
              <span className="text-brand">Who Take Safety Seriously</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From 5-crane shops to 50-crane fleets, CraneCheck helps safety
              teams eliminate paper, pass audits, and keep their crews safe.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {METRICS.map((m) => (
                <div key={m.label} className="text-center">
                  <m.icon size={32} className="mx-auto mb-3 text-brand" />
                  <p className="text-4xl font-bold text-gray-900">{m.value}</p>
                  <p className="text-gray-600 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Real feedback from safety directors, operators, and owners who
              switched from paper to CraneCheck.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col"
                >
                  <Quote size={24} className="text-brand/30 mb-3" />
                  <p className="text-gray-700 flex-1 mb-4 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <Stars />
                    <p className="font-semibold text-gray-900 mt-2">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.title}, {t.company}
                    </p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                    <p className="text-xs text-brand font-medium mt-2">
                      {t.metric}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Customer Stories
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              See how crane companies transformed their inspection processes
              with CraneCheck.
            </p>
            <div className="space-y-12">
              {CASE_STUDIES.map((cs) => (
                <div
                  key={cs.company}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-brand/10 text-brand text-sm font-medium px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      {cs.cranes}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {cs.company}
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        The Challenge
                      </h4>
                      <p className="text-gray-600">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        The Solution
                      </h4>
                      <p className="text-gray-600">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <ShieldCheck
                              size={16}
                              className="text-brand mt-1 shrink-0"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
