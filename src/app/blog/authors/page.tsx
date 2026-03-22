import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AUTHORS } from "@/lib/authors";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Authors | CraneCheck",
  description: "Meet the authors behind CraneCheck's crane inspection guides, OSHA compliance content, and industry insights.",
  alternates: { canonical: "/blog/authors" },
};

export default function AuthorsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://cranecheck.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://cranecheck.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Authors",
        "item": "https://cranecheck.com/blog/authors"
      }
    ]
  };

  const profileSchemas = AUTHORS.map((author) => ({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": author.slug === "cranecheck-team" ? "Organization" : "Person",
      "name": author.name,
      "description": author.bio,
      "url": `https://cranecheck.com/blog/authors/${author.slug}`,
    },
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {profileSchemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Authors</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind CraneCheck&apos;s crane safety and compliance content.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-10">
            {AUTHORS.map((author) => (
              <div
                key={author.slug}
                className="border border-gray-100 rounded-xl p-8 hover:border-brand/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-brand-light rounded-full flex items-center justify-center">
                    <svg
                      className="h-7 w-7 text-brand"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <Link href={`/blog/authors/${author.slug}`}>
                      <h2 className="text-xl font-bold text-navy hover:text-brand transition-colors">
                        {author.name}
                      </h2>
                    </Link>
                    <p className="text-sm text-gray-500 mb-3">{author.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{author.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {author.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
