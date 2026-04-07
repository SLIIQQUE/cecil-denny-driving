import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardContent } from "@/components/ui/card";
import { BLOG_POSTS, getPostBySlug, getAllSlugs } from "@/data/blog";
import { Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const nextPost = BLOG_POSTS[currentIndex + 1] || null;
  const prevPost = BLOG_POSTS[currentIndex - 1] || null;

  const contentParagraphs = post.content.trim().split("\n\n").filter(Boolean);

  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-20"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/90 to-[#0A0A0A]" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/20 text-red-400 text-xs font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/50 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <span className="font-display font-bold text-white text-sm">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Article Content ─── */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
              </div>

              <CardContent className="p-8 lg:p-12 bg-[#0D0D0D]">
                <article className="prose prose-invert max-w-none">
                  {contentParagraphs.map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="font-display text-2xl font-bold text-white mt-10 mb-4">
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={index} className="font-display text-xl font-bold text-white mt-8 mb-3">
                          {paragraph.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      const items = paragraph.split("\n").filter(line => line.startsWith("- "));
                      return (
                        <ul key={index} className="space-y-2 mb-6 text-white/70">
                          {items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                              {item.replace("- ", "")}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    if (paragraph.match(/^\d+\. /)) {
                      const items = paragraph.split("\n").filter(line => line.match(/^\d+\. /));
                      return (
                        <ol key={index} className="space-y-2 mb-6 text-white/70 list-decimal list-inside">
                          {items.map((item, i) => (
                            <li key={i}>{item.replace(/^\d+\. /, "")}</li>
                          ))}
                        </ol>
                      );
                    }
                    return (
                      <p key={index} className="text-white/70 mb-6 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  })}
                </article>
              </CardContent>
            </div>

            {/* ─── Navigation ─── */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="glass-card glass-card-hover rounded-2xl p-6 group"
                >
                  <div className="flex items-center gap-2 text-white/40 text-sm mb-2">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Previous
                  </div>
                  <h3 className="font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {prevPost.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="glass-card glass-card-hover rounded-2xl p-6 group text-right"
                >
                  <div className="flex items-center justify-end gap-2 text-white/40 text-sm mb-2">
                    Next
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-display font-bold text-white group-hover:text-red-400 transition-colors">
                    {nextPost.title}
                  </h3>
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-3xl p-8 lg:p-12 text-center">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Book your first lesson with Cecil Denny and get expert guidance from an instructor with 20+ years experience.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-red-500 text-white hover:bg-red-400 glow-red h-12 px-8 font-semibold"
              >
                Book a Lesson
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
