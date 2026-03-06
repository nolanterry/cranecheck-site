import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cranecheck.app"),
  title: { default: "CraneCheck — OSHA Crane Inspection Software", template: "%s | CraneCheck" },
  description: "Mobile-first crane inspection compliance software. Replace paper checklists, pass OSHA audits, and protect your company from $165K fines.",
  openGraph: {
    type: "website",
    siteName: "CraneCheck",
    title: "CraneCheck — OSHA Crane Inspection Compliance Made Simple",
    description: "Digital crane inspections in under 3 minutes. Photo evidence, deficiency tracking, PDF compliance reports. Try free for 14 days.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
