"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Star, Quote, ArrowRight, CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS } from "@/data/business";

const TESTIMONIAL_IMAGES: Record<string, string> = {
  "Sarah M.": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  "James K.": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "Priya P.": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  "Michael T.": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
};

const PASS_STORIES = [
  "Passed first time",
  "Passed after previous failures",
  "Overcame nervousness",
  "Passed with professional guidance",
];

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-0 right-8 section-number select-none pointer-events-none">
        02
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
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
              Testimonials
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-4">
                What Our
                <br />
                <span className="text-gradient-gold">Learners Say.</span>
              </h2>
              <p className="text-white/50 text-base max-w-md leading-relaxed">
                Real feedback from real learners. Join the hundreds who've passed with us.
              </p>
            </div>

            {/* Rating Badge */}
            <div className="flex items-center gap-6 bg-white/5 rounded-2xl p-4 pr-6 border border-white/10">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  <span className="text-4xl font-display font-bold text-white">{BUSINESS.rating}</span>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-[11px] text-white/40 uppercase tracking-wider">Rating</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="font-semibold text-white">{BUSINESS.reviewCount}</p>
                <p className="text-[11px] text-white/40">Verified Reviews</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── Testimonial Cards Grid ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card className="h-full bg-transparent border-0 overflow-visible">
                <div className="relative rounded-3xl p-6 glass-card glass-card-hover h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                      <Quote className="w-5 h-5 text-red-400" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-white/70 leading-relaxed mb-6 flex-1">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Pass Story Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400 font-medium">
                      {PASS_STORIES[i % PASS_STORIES.length]}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                      <img
                        src={TESTIMONIAL_IMAGES[t.name]}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center">
                        <span className="font-display font-bold text-white text-sm">
                          {t.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-[11px] text-white/40">{t.location} · {t.date}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ─── Trust Badges ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 mt-16"
        >
          {[
            { label: "DVSA Qualified", value: "Approved" },
            { label: "20+ Years", value: "Experience" },
            { label: "West London", value: "Based" },
          ].map((item, i) => (
            <div key={item.label} className="flex items-center gap-3 text-white/50">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm">{item.label}</span>
              <span className="text-white/30">·</span>
              <span className="text-white font-medium">{item.value}</span>
            </div>
          ))}
        </motion.div>

        {/* ─── CTA ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <ButtonLink 
            href="/testimonials" 
            className="rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/25 h-12 px-8 font-medium"
          >
            Read All {BUSINESS.reviewCount} Reviews
            <ArrowRight className="w-4 h-4 ml-2" />
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}