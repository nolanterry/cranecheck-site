import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

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
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CraneCheck",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    url: "https://cranecheck.com",
    description:
      "Mobile-first OSHA crane inspection compliance software. Digital pre-shift inspections, deficiency tracking, and PDF audit reports.",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CraneCheck",
    url: "https://cranecheck.com",
    logo: "https://cranecheck.com/favicon-32.png",
    description:
      "OSHA crane inspection compliance software for construction and industrial crane operators.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://cranecheck.com/demo",
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does CraneCheck meet OSHA's 29 CFR 1926.1412 requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. CraneCheck's inspection templates are built directly from the requirements in 29 CFR 1926.1412 for construction cranes and 29 CFR 1910.179 for overhead and gantry cranes. Every checkpoint maps to a specific regulatory requirement.",
        },
      },
      {
        "@type": "Question",
        name: "Can my operators use CraneCheck without cell service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. CraneCheck works offline on any smartphone. Operators can complete full inspections, take photos, and flag deficiencies without connectivity. Everything syncs automatically when they're back in range.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to complete an inspection?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most operators complete a full pre-shift inspection in under 3 minutes. That's faster than filling out a paper form — and the result is a timestamped, GPS-tagged, photo-documented digital record.",
        },
      },
      {
        "@type": "Question",
        name: "What happens when an operator finds a deficiency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CraneCheck automatically locks the crane from further operation until the issue is resolved. The deficiency is logged with photos, assigned for corrective action, and tracked through resolution. Safety directors get instant notifications.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try CraneCheck before committing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer a 14-day free trial with up to 3 cranes. No credit card required. You'll have access to every feature so you can see how CraneCheck works with your actual fleet and crew.",
        },
      },
      {
        "@type": "Question",
        name: "How does pricing work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CraneCheck is $199/month (or $169/month on annual billing) which includes 5 cranes. Additional cranes are $29/crane/month. Every plan includes unlimited inspections, all features, and support.",
        },
      },
      {
        "@type": "Question",
        name: "Will OSHA accept digital inspection records?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. OSHA requires that inspection records be maintained and available for review — they do not require paper. Digital records that include the inspector's name, date, equipment identification, and findings satisfy OSHA's documentation requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get my team started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sign up for a free trial, add your cranes to the equipment registry, invite your operators, and they can start inspecting the same day. No training required.",
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
