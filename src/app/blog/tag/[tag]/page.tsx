import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { NewsletterSignup } from "@/components/newsletter-signup";
import { POSTS, getAllTags, getPostsByTag, TAG_LABELS } from "@/lib/blog-posts";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const label =
    TAG_LABELS[tag] ||
    tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ");
  const posts = getPostsByTag(tag);
  return {
    title: `${label} Articles — CraneCheck Blog`,
    description: `${posts.length} article${posts.length !== 1 ? "s" : ""} about ${label.toLowerCase()} for crane inspection professionals. Compliance guides, safety checklists, and industry insights.`,
    alternates: { canonical: `/blog/tag/${tag}` },
  };
}

export default async function TagArchivePage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParam } = await params;
  const posts = getPostsByTag(tagParam);
  if (posts.length === 0) notFound();

  const label =
    TAG_LABELS[tagParam] ||
    tagParam.charAt(0).toUpperCase() + tagParam.slice(1).replace(/-/g, " ");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cranecheck.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://cranecheck.com/blog" },
      { "@type": "ListItem", position: 3, name: "Topics", item: "https://cranecheck.com/blog/tag" },
      { "@type": "ListItem", position: 4, name: label, item: `https://cranecheck.com/blog/tag/${tagParam}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              href="/blog/tag"
              className="inline-block text-xs font-medium text-gray-400 hover:text-white mb-4 transition-colors"
            >
              ← All Topics
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {label}
            </h1>
            <p className="text-lg text-gray-300">
              {posts.length} article{posts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 space-y-8">
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
                  <h2 className="text-xl font-bold mb-2 hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    Read more →
                  </Link>
                  <div className="flex gap-1.5">
                    {post.tags
                      .filter((t) => t !== tagParam)
                      .slice(0, 3)
                      .map((t) => (
                        <Link
                          key={t}
                          href={`/blog/tag/${t}`}
                          className="text-xs text-gray-400 hover:text-brand bg-gray-50 px-2 py-0.5 rounded-full transition-colors"
                        >
                          {TAG_LABELS[t] || t.replace(/-/g, " ")}
                        </Link>
                      ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-lg font-semibold mb-4">Explore More Topics</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {getAllTags()
                .filter(({ tag }) => tag !== tagParam)
                .slice(0, 10)
                .map(({ tag, count }) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-brand/30 hover:text-brand transition-colors"
                  >
                    {TAG_LABELS[tag] || tag.replace(/-/g, " ")} ({count})
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-3xl mx-auto px-4">
        <NewsletterSignup />
      </div>
      <Footer />
    </>
  );
}
