import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources — Crane Inspection Checklists, Templates & Guides | CraneCheck",
  description:
    "Download free crane inspection checklists, OSHA compliance templates, and safety guides. Built by crane safety professionals for field crews and safety directors.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources — Crane Inspection Checklists, Templates & Guides",
    description:
      "Download free crane inspection checklists, OSHA compliance templates, and safety guides.",
    url: "https://cranecheck.com/resources",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
