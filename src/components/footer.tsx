import Link from "next/link";
import { HardHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="text-brand" size={20} />
              <span className="font-bold">Crane<span className="text-brand">Check</span></span>
            </div>
            <p className="text-sm text-gray-500">OSHA-compliant crane inspection software that keeps your crews safe and your records audit-ready.</p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Product</h4>
            <div className="space-y-2">
              <Link href="/features" className="block text-sm text-gray-500 hover:text-gray-900">Features</Link>
              <Link href="/pricing" className="block text-sm text-gray-500 hover:text-gray-900">Pricing</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-3">Compliance</h4>
            <div className="space-y-2">
              <span className="block text-sm text-gray-500">29 CFR 1926.1412</span>
              <span className="block text-sm text-gray-500">29 CFR 1910.179</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} CraneCheck. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
