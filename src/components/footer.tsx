import Link from "next/link";
import Image from "next/image";

const PRODUCT_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Customers", href: "/customers" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Resources", href: "/resources" },
  { label: "Help Center", href: "/help" },
  { label: "Glossary", href: "/glossary" },
  { label: "Partners", href: "/partners" },
  { label: "Status", href: "/status" },
];

const RESOURCE_LINKS = [
  { label: "OSHA Crane Inspection Requirements", href: "/blog/osha-crane-inspection-requirements" },
  { label: "Daily Crane Inspection Checklist", href: "/blog/daily-crane-inspection-checklist" },
  { label: "Crane Inspection Software vs Paper", href: "/blog/crane-inspection-software-vs-paper" },
  { label: "How to Prepare for an OSHA Audit", href: "/blog/osha-crane-audit-preparation" },
  { label: "29 CFR 1926.1412 Explained", href: "/blog/29-cfr-1926-1412-explained" },
];

const COMPLIANCE_LINKS = [
  { label: "29 CFR 1926.1412", href: "/blog/29-cfr-1926-1412-explained" },
  { label: "29 CFR 1910.179", href: "/blog/osha-crane-inspection-requirements" },
  { label: "OSHA Crane Audits", href: "/blog/osha-crane-audit-preparation" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <Image src="/logo.svg" alt="CraneCheck" width={28} height={28} className="invert" />
              <span className="font-bold text-lg">CraneCheck</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              OSHA-compliant crane inspection software that keeps your crews safe and your records audit-ready.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              support@cranecheck.co
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Product</h4>
            <div className="space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Resources</h4>
            <div className="space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Compliance</h4>
            <div className="space-y-2.5">
              {COMPLIANCE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CraneCheck. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-gray-300 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
