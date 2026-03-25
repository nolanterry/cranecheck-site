"use client";

import { useState } from "react";
import {
  ChevronDown,
  Rocket,
  ClipboardCheck,
  Users,
  FileText,
  CreditCard,
  Shield,
  Search,
  HelpCircle,
} from "lucide-react";

interface Article {
  q: string;
  a: string;
}

interface Category {
  title: string;
  icon: React.ReactNode;
  description: string;
  articles: Article[];
}

const CATEGORIES: Category[] = [
  {
    title: "Getting Started",
    icon: <Rocket size={22} />,
    description: "Set up your account, add equipment, and run your first inspection.",
    articles: [
      {
        q: "How do I create my CraneCheck account?",
        a: "Visit app.cranecheck.co/sign-up and enter your email. You'll get a 14-day free trial with full access — no credit card required. Once signed in, you'll be walked through adding your first crane and running a sample inspection.",
      },
      {
        q: "How do I add cranes and equipment?",
        a: "Go to Equipment → Add Equipment. Enter the crane type (mobile, overhead, tower, etc.), make/model, serial number, capacity, and location. You can also upload the manufacturer's load chart. CraneCheck automatically creates the correct OSHA inspection checklist based on crane type.",
      },
      {
        q: "How do I invite my team?",
        a: "Go to Settings → Team → Invite. Enter their email and select a role: Admin (full access), Inspector (can run inspections and log deficiencies), or Viewer (read-only access to reports). They'll get an email invite and can sign in immediately.",
      },
      {
        q: "Can I import existing inspection data?",
        a: "Yes. Contact support@cranecheck.co with your existing records (spreadsheets, PDFs, or photos of paper logs) and we'll help you import them so you have a complete digital history from day one.",
      },
      {
        q: "What devices does CraneCheck work on?",
        a: "CraneCheck works on any device with a modern web browser — iPhone, Android, iPad, laptop, or desktop. The inspection interface is optimized for mobile so your operators can complete pre-shift inspections right at the crane. No app store download required.",
      },
    ],
  },
  {
    title: "Running Inspections",
    icon: <ClipboardCheck size={22} />,
    description: "Pre-shift, monthly, and annual inspection workflows.",
    articles: [
      {
        q: "How do I start a pre-shift inspection?",
        a: "Tap Inspections → New Inspection, select the crane, and choose 'Pre-Shift' as the inspection type. CraneCheck loads the correct OSHA checklist (29 CFR 1926.1412 for construction, 29 CFR 1910.179 for general industry). Walk through each item, mark pass/fail, add photos of any issues, and submit. Takes about 2-3 minutes.",
      },
      {
        q: "What inspection types are available?",
        a: "CraneCheck supports Pre-Shift (daily operator checks), Monthly (detailed component inspection), Quarterly (wire rope, hooks, load-bearing components), Annual/Comprehensive (full 1926.1412(f) inspection), and Post-Assembly (new crane setup or relocation). Each type has the correct OSHA-required checklist items.",
      },
      {
        q: "How do I add photos to an inspection?",
        a: "At any checklist item, tap the camera icon to take a photo or upload from your gallery. Photos are GPS-tagged, timestamped, and permanently attached to that inspection record. We recommend photos for any deficiency and for all wire rope, hook, and structural inspections.",
      },
      {
        q: "What happens when I find a deficiency?",
        a: "Mark the item as 'Fail' and describe the deficiency. CraneCheck automatically creates a deficiency ticket, assigns a severity level (Critical — crane must be taken out of service, or Minor — can continue with monitoring), and notifies your safety director. Critical deficiencies trigger an automatic out-of-service flag until resolved.",
      },
      {
        q: "Can I customize inspection checklists?",
        a: "Yes. Go to Settings → Checklists to add custom items to any inspection type. Many companies add items for site-specific requirements, manufacturer recommendations, or client contract requirements. The OSHA-required items cannot be removed (that's by design — it protects you).",
      },
      {
        q: "How does offline mode work?",
        a: "CraneCheck works offline on mobile. Start an inspection normally — if you lose signal, the app caches your progress locally. When connectivity returns, it syncs automatically. Photos are queued and uploaded in the background. You'll see a sync indicator in the top bar.",
      },
    ],
  },
  {
    title: "Deficiency Tracking",
    icon: <Shield size={22} />,
    description: "Track, assign, and resolve deficiencies with full audit trails.",
    articles: [
      {
        q: "How do I view open deficiencies?",
        a: "Go to Deficiencies → Open. You'll see every unresolved issue across all equipment, sorted by severity. Critical items (crane out of service) appear at the top with a red flag. Filter by crane, inspector, date, or severity level.",
      },
      {
        q: "How do I resolve a deficiency?",
        a: "Open the deficiency, describe the corrective action taken, add photos of the repair, and mark as resolved. CraneCheck logs who resolved it, when, and what was done — creating the audit trail OSHA requires. For critical deficiencies, resolving the issue automatically clears the out-of-service flag.",
      },
      {
        q: "Can I assign deficiencies to specific team members?",
        a: "Yes. Open the deficiency and assign it to any team member. They'll receive an email notification with the details, photos, and a direct link. You can also set a due date — CraneCheck sends reminder emails as the deadline approaches.",
      },
      {
        q: "What's the difference between Critical and Minor deficiencies?",
        a: "Critical deficiencies mean the crane must be immediately taken out of service per OSHA requirements (e.g., damaged wire rope, malfunctioning brakes, structural cracks). The crane cannot be operated until the issue is fixed and documented. Minor deficiencies are issues that need attention but don't require immediate shutdown (e.g., minor fluid leak, cosmetic damage, missing label).",
      },
    ],
  },
  {
    title: "Reports & Compliance",
    icon: <FileText size={22} />,
    description: "Generate PDF reports, prepare for audits, and stay OSHA-compliant.",
    articles: [
      {
        q: "How do I generate an inspection report?",
        a: "Open any completed inspection and click 'Download PDF.' The report includes all checklist items, pass/fail status, photos, inspector signature, timestamps, and equipment details. Reports are formatted for OSHA auditors — we've modeled them after what compliance officers actually want to see.",
      },
      {
        q: "How do I prepare for an OSHA audit?",
        a: "Go to Reports → Audit Package. Select a date range and equipment. CraneCheck generates a complete compliance package: all inspection records, deficiency logs with resolution documentation, equipment registry with certification dates, and inspector qualification records. Export as a single PDF or zip file.",
      },
      {
        q: "How long are records retained?",
        a: "CraneCheck retains all inspection records indefinitely. OSHA requires crane inspection records be kept for the life of the equipment, and we recommend keeping them even longer. Your data is backed up daily and encrypted at rest.",
      },
      {
        q: "Can I export data for my own records?",
        a: "Yes. Go to Reports → Export and choose CSV, PDF, or JSON format. You can export inspections, deficiencies, equipment lists, or team activity logs. Many companies export monthly for their own backup or to share with insurance providers.",
      },
      {
        q: "Does CraneCheck handle NCCCO certification tracking?",
        a: "Yes. Under Team → Certifications, you can enter each operator's NCCCO credentials, expiration dates, and crane types they're certified on. CraneCheck alerts you 90, 60, and 30 days before any certification expires so you can schedule recertification.",
      },
    ],
  },
  {
    title: "Team Management",
    icon: <Users size={22} />,
    description: "Roles, permissions, and multi-site team coordination.",
    articles: [
      {
        q: "What roles are available?",
        a: "Admin: Full access including billing, team management, and settings. Inspector: Can run inspections, log deficiencies, and view reports for their assigned equipment. Viewer: Read-only access to reports and dashboards (ideal for safety directors or insurance auditors who need visibility without edit access).",
      },
      {
        q: "Can I manage multiple job sites?",
        a: "Yes. Create locations under Equipment → Locations. Assign cranes to locations and team members to sites. Inspectors only see equipment at their assigned locations, keeping things clean on large operations. Admins see everything across all sites.",
      },
      {
        q: "How do I remove a team member?",
        a: "Go to Settings → Team, find the member, and click Remove. Their past inspections and activity logs are preserved (OSHA requires this), but they can no longer access the system. You can also temporarily disable access without removing their history.",
      },
    ],
  },
  {
    title: "Billing & Account",
    icon: <CreditCard size={22} />,
    description: "Plans, payments, and account settings.",
    articles: [
      {
        q: "How much does CraneCheck cost?",
        a: "CraneCheck is $199/month for up to 5 cranes, with additional cranes at $29/crane/month. All features are included — no feature gating or hidden tiers. Annual billing is available at a discount. See our pricing page for full details.",
      },
      {
        q: "How does the 14-day free trial work?",
        a: "Sign up and get full access to every feature for 14 days. No credit card required. Add your equipment, invite your team, run real inspections. At the end of the trial, enter payment to continue or your account pauses (your data is saved for 90 days).",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. Go to Settings → Billing → Cancel Subscription. Your access continues through the end of your current billing period. Your data is retained for 90 days after cancellation in case you want to come back. You can export everything before canceling.",
      },
      {
        q: "Do you offer enterprise pricing?",
        a: "Yes. For companies with 25+ cranes or multi-region operations, contact us at support@cranecheck.co for volume pricing, custom SLAs, dedicated onboarding, and SSO/SAML integration.",
      },
    ],
  },
];

function ArticleAccordion({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
      >
        <span className="text-sm font-medium text-gray-900 group-hover:text-brand transition-colors">
          {article.q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-4 pr-8 text-sm text-gray-600 leading-relaxed">
          {article.a}
        </div>
      )}
    </div>
  );
}

export function HelpCenter() {
  const [search, setSearch] = useState("");

  const filtered = CATEGORIES.map((cat) => ({
    ...cat,
    articles: cat.articles.filter(
      (a) =>
        !search ||
        a.q.toLowerCase().includes(search.toLowerCase()) ||
        a.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.articles.length > 0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Search */}
        <div className="relative mb-12">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search help articles..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          />
        </div>

        {/* Categories */}
        <div className="space-y-10">
          {filtered.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-brand">{cat.icon}</div>
                <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4 ml-[34px]">{cat.description}</p>
              <div className="bg-gray-50 rounded-xl p-4">
                {cat.articles.map((a) => (
                  <ArticleAccordion key={a.q} article={a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {search && filtered.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">No articles match &ldquo;{search}&rdquo;</p>
            <p className="text-sm text-gray-400 mt-1">
              Try a different search or email{" "}
              <a href="mailto:support@cranecheck.co" className="text-brand hover:underline">
                support@cranecheck.co
              </a>
            </p>
          </div>
        )}

        {/* Contact support banner */}
        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Still need help?</h3>
          <p className="text-sm text-gray-600 mb-4">
            Our support team responds within 2 hours during business hours.
          </p>
          <a
            href="mailto:support@cranecheck.co"
            className="inline-flex items-center gap-2 bg-brand text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-brand-dark transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
