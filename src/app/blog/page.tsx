"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/data/blog";
import { heroText, staggerContainer, fadeUp } from "@/lib/animations";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 relative overflow-hidden noise">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(255,59,48,0.3) 0%, transparent 70%)",
              filter: "blur(100px)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center max-w-3xl mx-auto"
            >
              <motion.span variants={heroText} className="inline-flex items-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
                  Blog
                </span>
              </motion.span>
              <motion.h1 variants={heroText} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6">
                Driving Insights
                <br />
                <span className="text-gradient-red">& Advice</span>
              </motion.h1>
              <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed">
                Expert tips, guides, and advice to help you on your journey to becoming a confident driver.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── Featured Post ─── */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link href={`/blog/${featuredPost.slug}`}>
                <Card className="group overflow-hidden rounded-3xl border-0 glass-card glass-card-hover">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-[300px] md:h-[450px] overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center bg-[#0D0D0D]">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 rounded-full bg-red-500/15 border border-red-500/20 text-red-400 text-xs font-medium">
                          {featuredPost.category}
                        </span>
                        <span className="text-[12px] text-white/40">Featured</span>
                      </div>
                      <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-white/50 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-white/40 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-red-400 font-medium group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ─── Other Posts ─── */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {otherPosts.map((post) => (
                <motion.div key={post.slug} variants={fadeUp}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="h-full group overflow-hidden rounded-3xl border-0 glass-card glass-card-hover">
                      <div className="relative h-[200px] overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-6 bg-[#0D0D0D]">
                        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/50 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-white/40">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Newsletter CTA ─── */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 lg:p-12 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-red-400" />
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                Want More Driving Tips?
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Book a lesson with us and get personalised guidance tailored to your learning style and pace.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-red-500 text-white hover:bg-red-400 glow-red h-12 px-8 font-semibold"
              >
                Book a Lesson
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
