import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Handshake, DollarSign, Users, Megaphone, BookOpen, ArrowRight, Shield, BarChart3, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Program — CraneCheck",
  description: "Join the CraneCheck partner program. Earn recurring commissions referring crane companies, or integrate your product with our OSHA-compliant inspection platform.",
  alternates: { canonical: "/partners" },
};

const PARTNER_TYPES = [
  {
    icon: Handshake,
    title: "Referral Partners",
    description: "Know crane companies struggling with paper inspections? Refer them to CraneCheck and earn 20% recurring commission for the life of the account.",
    benefits: [
      "20% recurring revenue share",
      "Dedicated partner dashboard",
      "Co-branded marketing materials",
      "Priority support for your referrals",
    ],
    cta: "Become a Referral Partner",
    ideal: "Safety consultants, crane training providers, insurance brokers",
  },
  {
    icon: Zap,
    title: "Technology Partners",
    description: "Build integrations between CraneCheck and your platform. Connect crane telematics, fleet management, ERP, or safety systems for mutual customers.",
    benefits: [
      "API access and technical documentation",
      "Joint go-to-market opportunities",
      "Listed on our integrations page",
      "Co-development support",
    ],
    cta: "Explore Technology Partnership",
    ideal: "Crane OEMs, fleet management platforms, ERP vendors, IoT providers",
  },
  {
    icon: Megaphone,
    title: "Reseller Partners",
    description: "Add CraneCheck to your product portfolio. We provide training, sales enablement, and volume pricing so you can sell digital crane inspection solutions.",
    benefits: [
      "Volume discount pricing",
      "Sales training and certification",
      "White-label reporting options",
      "Dedicated channel manager",
    ],
    cta: "Apply as a Reseller",
    ideal: "Safety equipment distributors, crane service companies, compliance consultancies",
  },
];

const WHY_PARTNER = [
  {
    icon: Shield,
    title: "Growing Market",
    description: "OSHA crane inspection requirements are tightening. Every crane company needs digital compliance — the market is expanding rapidly.",
  },
  {
    icon: DollarSign,
    title: "Recurring Revenue",
    description: "Our SaaS model means your referral commissions recur monthly. One introduction can generate years of passive income.",
  },
  {
    icon: BarChart3,
    title: "High Conversion",
    description: "Crane companies switching from paper see immediate ROI. Our 14-day free trial converts because the problem is urgent and the solution is obvious.",
  },
  {
    icon: Users,
    title: "Partner Support",
    description: "Dedicated partner manager, co-branded materials, joint webinars, and a partner portal to track every referral and commission.",
  },
];

const STEPS = [
  { step: "1", title: "Apply", description: "Fill out the partner application form. We review within 48 hours." },
  { step: "2", title: "Onboard", description: "Get your partner dashboard, referral links, and co-branded materials." },
  { step: "3", title: "Refer & Earn", description: "Share CraneCheck with your network. Track conversions and commissions in real time." },
];

const partnerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "CraneCheck Partner Program",
  description: "Join the CraneCheck partner program. Earn recurring commissions or integrate your product with OSHA-compliant crane inspection software.",
  url: "https://cranecheck.co/partners",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.co" },
      { "@type": "ListItem", position: 2, name: "Partners", item: "https://cranecheck.co/partners" },
    ],
  },
};

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grow Your Business with CraneCheck
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Earn recurring commissions, expand your product offering, or build integrations with the crane industry&apos;s
              leading digital inspection platform. We grow when our partners grow.
            </p>
            <a
              href="mailto:partners@cranecheck.co?subject=Partner%20Program%20Application"
              className="inline-flex items-center gap-2 bg-brand text-white font-medium px-8 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Apply to Partner Program <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Partnership Track</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Whether you&apos;re a consultant, technology vendor, or distributor — we have a partnership model that fits.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {PARTNER_TYPES.map((type) => (
                <div key={type.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-4">
                    {type.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mb-4">
                    <strong>Ideal for:</strong> {type.ideal}
                  </p>
                  <a
                    href="mailto:partners@cranecheck.co?subject=Partner%20Program%20Application"
                    className="inline-flex items-center gap-1.5 text-brand font-medium text-sm hover:underline"
                  >
                    {type.cta} <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Partner with CraneCheck?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_PARTNER.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                    <item.icon className="text-brand" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
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
