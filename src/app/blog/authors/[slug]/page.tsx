import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AUTHORS, getAuthorBySlug } from "@/lib/authors";
import { getPostsByAuthor } from "@/lib/blog-posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return AUTHORS.map((author) => ({ slug: author.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};
  return {
    title: `${author.name} — Author | CraneCheck Blog`,
    description: author.bio,
    alternates: { canonical: `/blog/authors/${author.slug}` },
  };
}

export default function AuthorDetailPage({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const posts = getPostsByAuthor(author.slug);

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": author.slug === "cranecheck-team" ? "Organization" : "Person",
      "name": author.name,
      "description": author.bio,
      "url": `https://cranecheck.com/blog/authors/${author.slug}`,
    },
  };

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
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": author.name,
        "item": `https://cranecheck.com/blog/authors/${author.slug}`
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-brand"
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
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{author.name}</h1>
                <p className="text-gray-400">{author.role}</p>
              </div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">{author.bio}</p>
            <div className="flex flex-wrap gap-2 mt-6">
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
        </section>

        {/* Posts */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-navy mb-8">
              Articles by {author.name} ({posts.length})
            </h2>
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-gray-100 rounded-xl p-6 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-2 hover:text-brand transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
