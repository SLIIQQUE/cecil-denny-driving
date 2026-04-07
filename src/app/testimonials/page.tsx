"use client";

import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, Quote, MessageCircle, ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { heroText, staggerContainer, fadeUp } from "@/lib/animations";

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 relative overflow-hidden noise">
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(245,166,35,0.3) 0%, transparent 70%)",
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
                  Testimonials
                </span>
              </motion.span>
              <motion.h1 variants={heroText} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6">
                What Our Learners
                <br />
                <span className="text-gradient-gold">Say About Us</span>
              </motion.h1>
              <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed">
                Real feedback from learners who passed their test with us. Join 
                hundreds of satisfied drivers in West London.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── Testimonials Grid ─── */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-5">
              {TESTIMONIALS.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card glass-card-hover rounded-3xl overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <div className="relative mb-6">
                      <Quote className="absolute -top-1 -left-1 w-10 h-10 text-red-400/20" />
                      <p className="text-white/60 leading-relaxed pl-6 relative">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-5 border-t border-white/8">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                        <span className="font-display font-bold text-red-400 text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-display font-semibold text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-white/40">
                          {testimonial.location} · {testimonial.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <p className="text-white/50 mb-6">
                Ready to become one of our success stories?
              </p>
              <ButtonLink href="/contact" className="rounded-full bg-red-500 text-white hover:bg-red-400 glow-red font-semibold h-12 px-8">
                Book Your First Lesson
                <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonLink>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
