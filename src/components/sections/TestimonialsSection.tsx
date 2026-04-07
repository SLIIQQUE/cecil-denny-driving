"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Star, Quote, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS } from "@/data/business";

const BG_IMAGES = [
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=800&q=80",
];

export function TestimonialsSection() {
  const featured = TESTIMONIALS[0];
  const rest = TESTIMONIALS.slice(1, 4);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-0 right-8 section-number select-none pointer-events-none">
        02
      </div>

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
              Learner Stories
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-4">
                What They
                <br />
                <span className="text-gradient-gold">Say.</span>
              </h2>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-8xl font-display font-bold text-white leading-none">
                {BUSINESS.rating}
              </span>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[12px] text-white/40">{BUSINESS.reviewCount}+ Verified Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Featured Testimonial ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 group"
        >
          <div className="relative rounded-3xl overflow-hidden h-[420px] lg:h-[480px]">
            <Image
              src={BG_IMAGES[0]}
              alt="Learner success"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
              onError={(e) => {
                const t = e.currentTarget as HTMLImageElement;
                t.style.display = "none";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Quote Icon */}
            <div className="absolute top-8 right-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Quote className="w-6 h-6 text-red-400" />
              </div>
            </div>

            {/* Stars */}
            <div className="absolute top-8 left-8 flex gap-0.5">
              {[...Array(featured.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 max-w-3xl">
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8 font-light">
                &ldquo;{featured.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                  <span className="font-display font-bold text-white text-lg">
                    {featured.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{featured.name}</p>
                  <p className="text-sm text-white/50">{featured.location}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Testimonial Grid ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-5"
        >
          {rest.map((t, i) => (
            <motion.div key={t.id} variants={fadeUp} className="group">
              <Card className="h-full overflow-hidden rounded-3xl border-0 glass-card glass-card-hover">
                {/* Image header */}
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={BG_IMAGES[i + 1]}
                    alt={`Review from ${t.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="33vw"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
                </div>

                <CardContent className="p-6 bg-[#0D0D0D]">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-5 line-clamp-4">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                    <div className="w-8 h-8 rounded-full bg-red-500/15 border border-red-500/20 flex items-center justify-center">
                      <span className="font-display font-bold text-white text-xs">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{t.name}</p>
                      <p className="text-[11px] text-white/40">{t.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <ButtonLink href="/testimonials" className="rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/25 h-12 px-8 font-medium">
            Read All {BUSINESS.reviewCount}+ Reviews
            <ArrowRight className="w-4 h-4 ml-2" />
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
