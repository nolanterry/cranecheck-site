import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Shield, Lock, Server, Eye, FileCheck, AlertTriangle, Users, Database, CheckCircle, Globe } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Security — CraneCheck",
  description:
    "CraneCheck security practices — how we protect your crane inspection data with enterprise-grade encryption, SOC 2 controls, and OSHA-compliant data handling.",
  alternates: { canonical: "/security" },
  openGraph: {
    title: "Security | CraneCheck",
    description: "Enterprise-grade security for crane inspection compliance data.",
    url: "https://cranecheck.co/security",
  },
};

const SECURITY_FEATURES = [
  {
    icon: Lock,
    title: "Encryption at Rest & In Transit",
    description:
      "All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Inspection photos, PDF reports, and compliance records are encrypted before storage.",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure",
    description:
      "Hosted on Vercel and Neon (PostgreSQL) with automatic failover, daily backups, and point-in-time recovery. Infrastructure spans multiple availability zones for 99.9% uptime.",
  },
  {
    icon: Users,
    title: "Authentication & Access Control",
    description:
      "Powered by Clerk with multi-factor authentication (MFA), SSO support, session management, and role-based access controls. Every API request is authenticated and authorized.",
  },
  {
    icon: Eye,
    title: "Audit Logging",
    description:
      "Every inspection record change, user login, and data export is logged with timestamps, user IDs, and IP addresses. Full audit trail for OSHA compliance reviews.",
  },
  {
    icon: Database,
    title: "Data Isolation",
    description:
      "Tenant data is logically isolated at the database level. Your crane inspection records, equipment data, and company information are never accessible to other organizations.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description:
      "24-hour incident response SLA with documented escalation procedures. Security incidents are communicated via email and our /status page within 4 hours of detection.",
  },
];

const COMPLIANCE_ITEMS = [
  {
    title: "OSHA 29 CFR 1926.1412 Compliance",
    description:
      "CraneCheck is built to satisfy OSHA record retention and inspection documentation requirements. Inspection records are retained for the life of the equipment plus 3 years, exceeding federal minimums.",
  },
  {
    title: "ANSI/ASME B30 Standards",
    description:
      "Our inspection checklists and data models align with ANSI/ASME B30 series standards for cranes, derricks, hoists, and rigging equipment.",
  },
  {
    title: "SOC 2 Type II (In Progress)",
    description:
      "We are pursuing SOC 2 Type II certification for security, availability, and confidentiality trust service criteria. Target completion: Q3 2026.",
  },
  {
    title: "GDPR & CCPA",
    description:
      "Full compliance with GDPR and CCPA data protection regulations. Users can export or delete their data at any time via account settings or by contacting support.",
  },
];

const DATA_PRACTICES = [
  "Inspection photos are stored in encrypted cloud storage with geo-redundant replication",
  "Database backups run every 6 hours with 30-day retention",
  "Point-in-time recovery available for the last 7 days",
  "Data export available in CSV, PDF, and JSON formats on request",
  "Account deletion permanently removes all data within 30 days",
  "No inspection data is used for model training or shared with third parties",
  "Stripe handles all payment processing — we never store credit card numbers",
  "Third-party vendors undergo security review before integration",
];

export default function SecurityPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Enterprise-Grade Security
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Crane Inspection Data,{" "}
              <span className="text-orange-500">Protected</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CraneCheck secures your inspection records, compliance documentation, and equipment data
              with the same standards trusted by enterprise construction companies.
            </p>
          </div>
        </section>

        {/* Security Features Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">How We Protect Your Data</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Security isn&apos;t an afterthought — it&apos;s built into every layer of CraneCheck.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SECURITY_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Compliance & Certifications</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Built for the construction industry&apos;s most demanding compliance requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {COMPLIANCE_ITEMS.map((item) => (
                <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Practices */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Data Handling Practices</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Transparency in how we store, process, and protect your information.
            </p>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {DATA_PRACTICES.map((practice, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Responsible Disclosure */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Globe className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Responsible Disclosure</h2>
            <p className="text-gray-600 mb-6">
              Found a security vulnerability? We take all reports seriously. Please email us at{" "}
              <a href="mailto:security@cranecheck.co" className="text-orange-600 font-medium hover:underline">
                security@cranecheck.co
              </a>{" "}
              with details. We&apos;ll acknowledge receipt within 24 hours and provide a resolution timeline within 72 hours.
            </p>
            <p className="text-gray-500 text-sm">
              Please do not publicly disclose vulnerabilities until we&apos;ve had a chance to address them.
            </p>
          </div>
        </section>

        <CTASection />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.co" },
                { "@type": "ListItem", position: 2, name: "Security", item: "https://cranecheck.co/security" },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
