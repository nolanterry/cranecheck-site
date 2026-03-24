import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  USE-CASE DATA                                                      */
/* ------------------------------------------------------------------ */

interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: { title: string; desc: string }[];
  solutions: { title: string; desc: string; feature: string }[];
  metrics: { stat: string; label: string }[];
  testimonial: { quote: string; name: string; role: string; company: string };
}

const USE_CASES: UseCase[] = [
  {
    slug: "general-contractors",
    title: "CraneCheck for General Contractors",
    metaTitle: "CraneCheck for General Contractors — Multi-Crane Job Site Compliance",
    metaDescription:
      "Manage crane inspections across every subcontractor and job site. CraneCheck gives GCs real-time visibility into OSHA compliance, deficiency resolution, and inspector accountability.",
    heroHeadline: "One Dashboard for Every Crane on Every Job Site",
    heroSub:
      "General contractors juggle dozens of cranes, multiple subs, and a mountain of paperwork. CraneCheck replaces the chaos with a single compliance command center — so you can focus on building, not filing.",
    painPoints: [
      {
        title: "Subcontractor compliance is a black box",
        desc: "You're liable for every crane on-site, but you can't see whether subs are actually running their pre-shift inspections. Paper logs disappear, get forged, or arrive weeks late.",
      },
      {
        title: "Multi-crane sites create documentation nightmares",
        desc: "A single high-rise project can have 3–5 cranes operating simultaneously. Tracking inspection cadence, deficiency status, and operator certifications across all of them is a full-time job.",
      },
      {
        title: "OSHA audits catch you flat-footed",
        desc: "When a compliance officer shows up, you need records in minutes — not days. Scrambling through filing cabinets and calling subs for missing reports costs time and credibility.",
      },
      {
        title: "Incident liability starts with poor documentation",
        desc: "If a crane incident occurs, the first thing investigators review is your inspection history. Gaps in documentation become gaps in your legal defense.",
      },
    ],
    solutions: [
      {
        title: "Unified sub compliance visibility",
        desc: "See every subcontractor's inspection status in real time. CraneCheck flags overdue inspections and sends automatic reminders so nothing slips through the cracks.",
        feature: "Multi-Org Dashboard",
      },
      {
        title: "Site-level crane grouping",
        desc: "Organize cranes by job site, building, or phase. Track inspection cadence for each unit with automated scheduling that respects your project timeline.",
        feature: "Site & Asset Manager",
      },
      {
        title: "Instant audit packets",
        desc: "Generate a complete compliance packet — inspections, photos, deficiency resolutions, operator certs — in under 60 seconds. PDF or digital, ready for any inspector.",
        feature: "One-Click Audit Export",
      },
      {
        title: "Photo-verified inspections",
        desc: "Every inspection includes timestamped, GPS-tagged photos. No more he-said-she-said — you have visual proof that the work was done, when it was done, and where.",
        feature: "Photo Evidence Engine",
      },
    ],
    metrics: [
      { stat: "74%", label: "reduction in inspection paperwork time" },
      { stat: "3 min", label: "average time to complete a digital inspection" },
      { stat: "100%", label: "audit pass rate for CraneCheck customers" },
      { stat: "58%", label: "fewer open deficiencies at 30 days" },
    ],
    testimonial: {
      quote:
        "We run 14 cranes across 3 active job sites. Before CraneCheck, I had no idea if our subs were actually inspecting their equipment. Now I can see every crane's status from my phone before I even get to the site. Last OSHA audit took 20 minutes — they were impressed.",
      name: "Marcus Chen",
      role: "Senior Project Manager",
      company: "Ridgeline Construction Group",
    },
  },
  {
    slug: "crane-rental-companies",
    title: "CraneCheck for Crane Rental Companies",
    metaTitle: "CraneCheck for Crane Rental Companies — Fleet Inspection & Customer Docs",
    metaDescription:
      "Track inspections across your entire rental fleet. CraneCheck automates compliance documentation, customer handoff packets, and fleet-wide deficiency management for crane rental operations.",
    heroHeadline: "Fleet-Wide Inspection Tracking That Scales With You",
    heroSub:
      "Crane rental companies need inspection visibility across dozens — or hundreds — of units deployed to customer sites. CraneCheck gives you fleet-level compliance oversight without the administrative overhead.",
    painPoints: [
      {
        title: "No visibility into field inspections",
        desc: "Your cranes are scattered across customer job sites. You depend on customers or operators to run inspections, but you rarely see the results until something goes wrong.",
      },
      {
        title: "Customer handoff documentation is manual and slow",
        desc: "Every rental requires a pre-delivery inspection packet, insurance docs, and compliance history. Assembling these manually for each unit eats hours of admin time per rental cycle.",
      },
      {
        title: "Fleet-wide deficiency tracking is impossible on paper",
        desc: "When you have 80+ cranes in the field, tracking which units have open deficiencies, which need annual inspections, and which certifications are expiring is beyond what spreadsheets can handle.",
      },
      {
        title: "Liability exposure grows with every undocumented rental",
        desc: "If a rented crane is involved in an incident, your inspection records are your first line of defense. Missing or incomplete documentation puts your entire business at risk.",
      },
    ],
    solutions: [
      {
        title: "Fleet dashboard with real-time status",
        desc: "See every crane in your fleet — deployed, in-yard, or in-transit — with its current inspection status, next-due dates, and open deficiencies at a glance.",
        feature: "Fleet Overview Dashboard",
      },
      {
        title: "Automated rental compliance packets",
        desc: "Generate customer-ready documentation packages with one click. Include pre-delivery inspections, maintenance history, certifications, and insurance — branded with your company logo.",
        feature: "Customer Doc Generator",
      },
      {
        title: "Proactive maintenance alerts",
        desc: "CraneCheck monitors inspection schedules, certification expirations, and deficiency aging across your entire fleet. Get alerts before deadlines pass — not after.",
        feature: "Smart Alert Engine",
      },
      {
        title: "Customer portal access",
        desc: "Give your rental customers read-only access to their crane's inspection history. It builds trust, reduces support calls, and differentiates you from competitors still using paper.",
        feature: "Customer Portal",
      },
    ],
    metrics: [
      { stat: "6 hrs/wk", label: "saved on rental documentation per admin" },
      { stat: "92%", label: "on-time inspection completion rate" },
      { stat: "40%", label: "reduction in customer compliance inquiries" },
      { stat: "2.3x", label: "faster pre-delivery inspection turnaround" },
    ],
    testimonial: {
      quote:
        "We rent 120 cranes across the Southeast. Tracking inspections used to require two full-time admins and a lot of phone calls. CraneCheck cut that down to one person checking a dashboard. Our customers love the portal — it's become a competitive advantage.",
      name: "Dana Kowalski",
      role: "VP of Operations",
      company: "SunBelt Crane Rentals",
    },
  },
  {
    slug: "safety-directors",
    title: "CraneCheck for Safety Directors",
    metaTitle: "CraneCheck for Safety Directors — OSHA Audit Prep & Compliance Dashboards",
    metaDescription:
      "Real-time compliance dashboards, automated OSHA audit prep, and deficiency resolution tracking. CraneCheck gives safety directors the visibility they need to protect crews and pass audits.",
    heroHeadline: "Real-Time Compliance Visibility. Zero Guesswork.",
    heroSub:
      "Safety directors carry the weight of every crane on every job site. CraneCheck gives you a live compliance picture — so you can catch problems before they become incidents, and walk into audits with confidence.",
    painPoints: [
      {
        title: "You can't manage what you can't see",
        desc: "Paper inspection logs are always 24–72 hours behind reality. By the time you review them, the crane has already been operating with an undocumented deficiency.",
      },
      {
        title: "OSHA audit prep consumes entire weeks",
        desc: "Pulling together inspection records, deficiency resolution docs, operator certifications, and training logs for an audit means raiding filing cabinets across multiple offices and job trailers.",
      },
      {
        title: "Deficiency resolution has no accountability loop",
        desc: "A deficiency is documented, but who's fixing it? When? Was it verified? Paper systems have no built-in follow-up mechanism — things fall through the cracks constantly.",
      },
      {
        title: "Incident investigation lacks the documentation trail",
        desc: "After an incident, you need to reconstruct the inspection history for that specific crane, operator, and time period. Piecing together paper records under pressure is a nightmare.",
      },
    ],
    solutions: [
      {
        title: "Live compliance dashboard",
        desc: "See your entire operation's compliance posture in real time. Green/yellow/red status for every crane, every site, every subcontractor — updated the moment an inspection is submitted.",
        feature: "Compliance Command Center",
      },
      {
        title: "One-click OSHA audit packets",
        desc: "Select a date range and generate a complete audit-ready packet: inspections, photos, deficiency resolutions, operator certs, and training records. PDF or digital — your choice.",
        feature: "Audit Packet Generator",
      },
      {
        title: "Deficiency workflow with accountability",
        desc: "Every deficiency triggers an automated workflow: assign → notify → track → verify → close. Escalation alerts ensure nothing sits unresolved past your acceptable timeframe.",
        feature: "Deficiency Resolution Engine",
      },
      {
        title: "Trend analytics and risk scoring",
        desc: "Identify patterns before they become problems. CraneCheck analyzes deficiency frequency, inspection completion rates, and operator performance to surface your highest-risk areas.",
        feature: "Risk Analytics Dashboard",
      },
    ],
    metrics: [
      { stat: "91%", label: "faster OSHA audit preparation" },
      { stat: "100%", label: "audit pass rate across all CraneCheck customers" },
      { stat: "67%", label: "reduction in average deficiency resolution time" },
      { stat: "24/7", label: "real-time compliance visibility" },
    ],
    testimonial: {
      quote:
        "I'm responsible for safety across 9 job sites and 22 cranes. Before CraneCheck, I spent half my week chasing paper. Now I start every morning with a 5-minute dashboard review. I know exactly which cranes need attention, which deficiencies are aging, and where we stand for our next audit. It's changed how I do my job.",
      name: "Patricia Morales",
      role: "Corporate Safety Director",
      company: "Hawthorne Industrial",
    },
  },
];

/* ------------------------------------------------------------------ */
/*  STATIC PARAMS + METADATA                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return USE_CASES.map((uc) => ({ slug: uc.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) return {};
  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    openGraph: { title: uc.metaTitle, description: uc.metaDescription },
  };
}

/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function UseCaseDetailPage({ params }: { params: { slug: string } }) {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) notFound();

  const otherCases = USE_CASES.filter((u) => u.slug !== uc.slug);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-navy text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">Use Case</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{uc.heroHeadline}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{uc.heroSub}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.cranecheck.com/sign-up"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/demo"
                className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Challenges You Face</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Without the right tools, these problems compound — costing you time, money, and sleep.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {uc.painPoints.map((pp, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-gray-900">{pp.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{pp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How CraneCheck Solves It</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Purpose-built features that address each challenge head-on.
            </p>
            <div className="space-y-8">
              {uc.solutions.map((sol, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-gray-900 text-lg">{sol.title}</h3>
                      <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full">
                        {sol.feature}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Results That Matter</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {uc.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold text-amber-400">{m.stat}</p>
                  <p className="text-sm text-gray-300 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Quote className="w-10 h-10 text-amber-400 mx-auto mb-6" />
            <blockquote className="text-xl text-gray-800 leading-relaxed italic mb-6">
              &ldquo;{uc.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">{uc.testimonial.name}</p>
              <p className="text-sm text-gray-500">
                {uc.testimonial.role}, {uc.testimonial.company}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Simplify Crane Compliance?</h2>
            <p className="text-amber-100 mb-8">
              Join hundreds of contractors who&apos;ve eliminated paper inspections and passed every audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.cranecheck.com/sign-up"
                className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/demo"
                className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherCases.map((other) => (
                <Link
                  key={other.slug}
                  href={`/use-cases/${other.slug}`}
                  className="group flex items-center justify-between bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-300 rounded-xl p-6 transition-all"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{other.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{other.metaDescription.slice(0, 80)}…</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors flex-shrink-0 ml-4" />
                </Link>
              ))}
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
              { "@type": "ListItem", position: 3, name: uc.title, item: `https://cranecheck.com/use-cases/${uc.slug}` },
            ],
          }),
        }}
      />
    </>
  );
}
