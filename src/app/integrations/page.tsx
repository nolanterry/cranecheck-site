import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations — Connect CraneCheck with Your Existing Tools",
  description:
    "CraneCheck integrates with Procore, QuickBooks, DocuSign, Google Workspace, HCSS, Samsara, and more. Sync crane inspection data with the tools your team already uses.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Integrations — Connect CraneCheck with Your Existing Tools",
    description:
      "CraneCheck integrates with Procore, QuickBooks, DocuSign, Google Workspace, HCSS, Samsara, and more.",
    url: "https://cranecheck.co/integrations",
  },
};

const INTEGRATIONS = [
  { emoji: "🏗️", name: "Procore", description: "Sync inspection records and equipment data directly into your Procore projects.", status: "coming-soon" as const },
  { emoji: "📋", name: "HCSS", description: "Push crane hours, inspection logs, and safety data to HCSS HeavyJob and Safety.", status: "coming-soon" as const },
  { emoji: "📡", name: "Samsara", description: "Connect Samsara telematics to auto-log crane locations and operating hours.", status: "coming-soon" as const },
  { emoji: "📍", name: "GPS Trackit", description: "Import fleet GPS data and map crane locations to job sites automatically.", status: "coming-soon" as const },
  { emoji: "💰", name: "QuickBooks", description: "Sync equipment costs, inspection billing, and maintenance expenses to QuickBooks.", status: "available" as const },
  { emoji: "📊", name: "Xero", description: "Export inspection and maintenance cost data to Xero for streamlined accounting.", status: "coming-soon" as const },
  { emoji: "✍️", name: "DocuSign", description: "Collect e-signatures on inspection reports, operator certifications, and audit docs.", status: "available" as const },
  { emoji: "📧", name: "Google Workspace", description: "Share reports via Gmail, store inspection PDFs in Drive, sync with Google Calendar.", status: "available" as const },
  { emoji: "💼", name: "Microsoft 365", description: "Integrate with Outlook, SharePoint, and Teams for seamless report distribution.", status: "coming-soon" as const },
  { emoji: "💬", name: "Slack", description: "Get instant notifications for failed inspections, expiring certs, and audit alerts.", status: "coming-soon" as const },
  { emoji: "🛡️", name: "SAP EHS", description: "Feed crane inspection and safety data into SAP Environment, Health & Safety.", status: "coming-soon" as const },
  { emoji: "📄", name: "OSHA eFile", description: "Generate and submit OSHA-formatted inspection records electronically.", status: "coming-soon" as const },
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Integrations
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect CraneCheck with the tools your team already uses. Sync inspection data, automate reports, and keep every system in your stack up to date.
          </p>
        </section>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-brand/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{integration.emoji}</span>
                  {integration.status === "available" ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                      Available
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t see your tool?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            We&apos;re building new integrations all the time. Let us know what you need and we&apos;ll prioritize it.
          </p>
          <a
            href="mailto:support@cranecheck.co?subject=Integration%20Request"
            className="inline-block bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-lg"
          >
            Request an Integration
          </a>
        </section>

        {/* JSON-LD BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.co" },
                { "@type": "ListItem", position: 2, name: "Integrations", item: "https://cranecheck.co/integrations" },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
