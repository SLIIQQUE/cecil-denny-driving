"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "@/data/blog";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";

export function BlogSection() {
  const posts = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section Number Background */}
      <div className="absolute top-0 right-8 section-number select-none pointer-events-none">
        04
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,166,35,0.3) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="line-accent" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
              Latest Articles
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-4">
                Driving Insights
                <br />
                <span className="text-gradient-gold">& Advice.</span>
              </h2>
              <p className="text-white/50 text-base max-w-md leading-relaxed">
                Expert tips and guides to help you on your journey to becoming a confident driver.
              </p>
            </div>
            <ButtonLink
              href="/blog"
              size="lg"
              className="rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/25 self-start"
            >
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </ButtonLink>
          </div>
        </motion.div>

        {/* ─── Blog Grid ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="h-full group overflow-hidden rounded-3xl border-0 glass-card glass-card-hover">
                  <div className="relative h-[220px] overflow-hidden shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="flex flex-col flex-1 p-6 bg-[#0D0D0D]">
                    <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-white/50 text-sm mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-white/40 pt-4 border-t border-white/8">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
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
  );
}
