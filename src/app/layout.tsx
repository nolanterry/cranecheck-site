import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cranecheck.com"),
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CraneCheck",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS, Android, Web",
  description: "Mobile-first OSHA crane inspection compliance software. Digital pre-shift inspections, deficiency tracking, and PDF audit reports.",
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "USD",
    priceValidUntil: "2027-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "127",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
