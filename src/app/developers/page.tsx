import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer API — CraneCheck REST API Documentation",
  description:
    "Integrate crane inspection data into your systems with the CraneCheck REST API. Endpoints for inspections, equipment, deficiencies, compliance reports, and webhooks.",
  alternates: { canonical: "/developers" },
  openGraph: {
    title: "Developer API — CraneCheck REST API Documentation",
    description:
      "RESTful API for crane inspection data. Programmatic access to inspections, equipment registry, deficiencies, and compliance reports.",
    url: "https://cranecheck.co/developers",
  },
};

const ENDPOINTS = [
  {
    category: "Inspections",
    icon: "📋",
    description: "Create, retrieve, and manage crane inspection records",
    endpoints: [
      { method: "GET", path: "/api/v1/inspections", desc: "List all inspections with filtering and pagination" },
      { method: "GET", path: "/api/v1/inspections/:id", desc: "Retrieve a specific inspection by ID" },
      { method: "POST", path: "/api/v1/inspections", desc: "Create a new inspection record" },
      { method: "PATCH", path: "/api/v1/inspections/:id", desc: "Update an existing inspection" },
      { method: "GET", path: "/api/v1/inspections/:id/pdf", desc: "Download inspection as PDF report" },
    ],
  },
  {
    category: "Equipment Registry",
    icon: "🏗️",
    description: "Manage crane and equipment inventory",
    endpoints: [
      { method: "GET", path: "/api/v1/equipment", desc: "List all registered equipment" },
      { method: "POST", path: "/api/v1/equipment", desc: "Register a new crane or piece of equipment" },
      { method: "GET", path: "/api/v1/equipment/:id/history", desc: "Full inspection history for a crane" },
      { method: "PATCH", path: "/api/v1/equipment/:id", desc: "Update equipment details or status" },
    ],
  },
  {
    category: "Deficiencies",
    icon: "⚠️",
    description: "Track and resolve inspection deficiencies",
    endpoints: [
      { method: "GET", path: "/api/v1/deficiencies", desc: "List all open and resolved deficiencies" },
      { method: "POST", path: "/api/v1/deficiencies/:id/resolve", desc: "Mark a deficiency as resolved with evidence" },
      { method: "GET", path: "/api/v1/deficiencies/stats", desc: "Deficiency analytics and trends" },
    ],
  },
  {
    category: "Compliance & Reports",
    icon: "📊",
    description: "Generate audit-ready compliance documentation",
    endpoints: [
      { method: "GET", path: "/api/v1/reports/compliance", desc: "Generate OSHA compliance summary report" },
      { method: "GET", path: "/api/v1/reports/fleet", desc: "Fleet-wide inspection status overview" },
      { method: "GET", path: "/api/v1/certifications", desc: "Operator certification status and expiry dates" },
    ],
  },
  {
    category: "Webhooks",
    icon: "🔔",
    description: "Real-time event notifications",
    endpoints: [
      { method: "POST", path: "/api/v1/webhooks", desc: "Register a new webhook endpoint" },
      { method: "GET", path: "/api/v1/webhooks", desc: "List all registered webhooks" },
      { method: "DELETE", path: "/api/v1/webhooks/:id", desc: "Remove a webhook subscription" },
    ],
  },
];

const WEBHOOK_EVENTS = [
  { event: "inspection.completed", desc: "Fired when an operator submits a completed inspection" },
  { event: "inspection.failed", desc: "Fired when an inspection contains critical deficiencies" },
  { event: "deficiency.created", desc: "Fired when a new deficiency is logged" },
  { event: "deficiency.resolved", desc: "Fired when a deficiency is marked resolved" },
  { event: "equipment.lockout", desc: "Fired when a crane is locked out due to failed inspection" },
  { event: "certification.expiring", desc: "Fired 30 days before an operator certification expires" },
];

const CODE_EXAMPLE = `curl -X GET "https://api.cranecheck.co/v1/inspections?status=completed&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

const RESPONSE_EXAMPLE = `{
  "data": [
    {
      "id": "insp_8xK2mP9q",
      "equipment_id": "eq_3nR7vL",
      "type": "pre_shift",
      "status": "completed",
      "result": "pass",
      "inspector": {
        "name": "Mike Rodriguez",
        "certification": "CCO-2847"
      },
      "location": {
        "lat": 40.7128,
        "lng": -74.0060,
        "job_site": "Hudson Yards Tower 4"
      },
      "checklist_items": 42,
      "deficiencies": 0,
      "completed_at": "2026-03-30T07:15:00Z",
      "pdf_url": "/v1/inspections/insp_8xK2mP9q/pdf"
    }
  ],
  "pagination": {
    "total": 1247,
    "page": 1,
    "per_page": 10,
    "has_more": true
  }
}`;

const CREATE_EXAMPLE = `curl -X POST "https://api.cranecheck.co/v1/inspections" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "equipment_id": "eq_3nR7vL",
    "type": "pre_shift",
    "inspector_id": "usr_mR2x9p",
    "checklist": "osha_1926_1412",
    "job_site": "Hudson Yards Tower 4"
  }'`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "CraneCheck Developer API Documentation",
  description: "REST API documentation for integrating CraneCheck crane inspection data into your systems.",
  publisher: { "@type": "Organization", name: "CraneCheck", url: "https://cranecheck.co" },
  url: "https://cranecheck.co/developers",
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.co" },
    { "@type": "ListItem", position: 2, name: "Developer API", item: "https://cranecheck.co/developers" },
  ],
};

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-green-100 text-green-700",
    POST: "bg-blue-100 text-blue-700",
    PATCH: "bg-yellow-100 text-yellow-700",
    DELETE: "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-block text-xs font-mono font-bold px-2 py-0.5 rounded ${colors[method] || "bg-gray-100 text-gray-700"}`}>
      {method}
    </span>
  );
}

export default function DevelopersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-3 py-1 rounded-full mb-4">
            Developer API
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Build with CraneCheck
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Integrate crane inspection data directly into your ERP, safety management, or project management systems.
            RESTful API with JSON responses, webhook events, and comprehensive documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/demo" className="bg-brand text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors">
              Request API Access
            </a>
            <a href="#endpoints" className="border border-gray-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Endpoints
            </a>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "🔑", title: "API Key Auth", desc: "Simple Bearer token authentication. Generate and manage API keys from your CraneCheck dashboard." },
              { icon: "📦", title: "JSON REST API", desc: "Standard RESTful endpoints returning JSON. Consistent pagination, filtering, and error handling across all resources." },
              { icon: "⚡", title: "Webhooks", desc: "Real-time event notifications for inspections, deficiencies, lockouts, and certification expiry. Never poll again." },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-xl p-6 text-center">
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Authentication */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-600 mb-4">
              All API requests require a Bearer token in the Authorization header. Generate API keys from your
              CraneCheck dashboard under <strong>Settings → API Keys</strong>. Keys are scoped to your organization
              and inherit the permissions of the user who created them.
            </p>
            <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono whitespace-pre">
{`Authorization: Bearer ck_live_a1b2c3d4e5f6...`}
              </pre>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Keep your API keys secure.</strong> Never expose them in client-side code or public repositories.
                Rotate keys immediately if compromised via the dashboard.
              </p>
            </div>
          </div>

          {/* Rate Limits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold">Requests / Minute</th>
                    <th className="text-left px-4 py-3 font-semibold">Requests / Day</th>
                    <th className="text-left px-4 py-3 font-semibold">Webhooks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">10,000</td>
                    <td className="px-4 py-3">5 endpoints</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Enterprise</td>
                    <td className="px-4 py-3">300</td>
                    <td className="px-4 py-3">100,000</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Rate limit headers (<code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">X-RateLimit-Remaining</code>, <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">X-RateLimit-Reset</code>) are included in every response.
            </p>
          </div>

          {/* Endpoints */}
          <div id="endpoints" className="mb-16">
            <h2 className="text-2xl font-bold mb-8">API Endpoints</h2>
            <div className="space-y-10">
              {ENDPOINTS.map((group) => (
                <div key={group.category}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{group.icon}</span>
                    <h3 className="text-xl font-semibold">{group.category}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    {group.endpoints.map((ep, i) => (
                      <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                        <MethodBadge method={ep.method} />
                        <code className="text-sm font-mono text-gray-800 shrink-0">{ep.path}</code>
                        <span className="text-sm text-gray-500 ml-auto hidden sm:block">{ep.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">List completed inspections</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre">{CODE_EXAMPLE}</pre>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold mb-3">Response</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-blue-300 font-mono whitespace-pre">{RESPONSE_EXAMPLE}</pre>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Create a new inspection</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre">{CREATE_EXAMPLE}</pre>
              </div>
            </div>
          </div>

          {/* Webhook Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Webhook Events</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to real-time events to keep your systems in sync. Webhook payloads are signed with
              HMAC-SHA256 for verification. Failed deliveries are retried with exponential backoff (3 attempts).
            </p>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              {WEBHOOK_EVENTS.map((ev, i) => (
                <div key={ev.event} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <code className="text-sm font-mono text-brand font-medium shrink-0">{ev.event}</code>
                  <span className="text-sm text-gray-500">{ev.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SDKs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">SDKs &amp; Libraries</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { lang: "Node.js / TypeScript", pkg: "npm install @cranecheck/sdk", status: "Coming Soon" },
                { lang: "Python", pkg: "pip install cranecheck", status: "Coming Soon" },
                { lang: "C# / .NET", pkg: "dotnet add package CraneCheck.SDK", status: "Coming Soon" },
              ].map((sdk) => (
                <div key={sdk.lang} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold mb-1">{sdk.lang}</h3>
                  <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded block mb-3">{sdk.pkg}</code>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                    {sdk.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to integrate?</h2>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              API access is available on all paid plans. Request your API key and start building today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/demo" className="bg-brand text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-dark transition-colors">
                Request API Access
              </a>
              <a href="/contact" className="border border-gray-400 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Talk to Engineering
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
