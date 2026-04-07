"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BUSINESS } from "@/data/business";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Mail, MapPin, Star, Calendar, Phone } from "lucide-react";

export function CTASection() {
  const scrollToAssistant = () => {
    const assistantBtn = document.querySelector(
      '[aria-label="Open AI voice assistant"]',
    );
    if (assistantBtn instanceof HTMLElement) {
      assistantBtn.click();
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed background */}
      <div className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1511871893393-82e9c16b81d3?w=1920&q=85"
            alt="Start your driving journey"
            fill
            className="object-cover"
            sizes="100vw"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              t.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/60" />

          {/* Red accent glow */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,59,48,0.15) 0%, transparent 60%)",
              filter: "blur(100px)",
              transform: "translate(30%, -20%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Big typography */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="line-accent" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
                  Book Your First Lesson
                </span>
              </div>

              <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-bold text-white leading-[0.92] mb-4">
                Ready to
                <br />
                <span className="text-gradient-red">Start Driving?</span>
                <br />
                Let's Go.
              </h2>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 mt-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-white/60 text-sm">
                  {BUSINESS.rating} · {BUSINESS.reviewCount} verified reviews
                </span>
              </div>

              <p className="text-white/50 text-base mt-6 max-w-md leading-relaxed">
                Book your first lesson in minutes using our AI assistant. Ask
                questions, check availability, and schedule your lesson — all
                without waiting.
              </p>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <span>Same-week booking available</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Contact cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {/* Book Now CTA */}
              <motion.div variants={fadeUp}>
                <button
                  onClick={scrollToAssistant}
                  className="w-full h-16 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 glow-red text-lg font-bold shadow-2xl shadow-red-500/15 flex items-center justify-center gap-3 transition-all"
                >
                  <Calendar className="w-6 h-6" />
                  Book Your First Lesson
                </button>
              </motion.div>

              {/* Info card */}
              <motion.div
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 space-y-5"
              >
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/40 uppercase tracking-wider mb-0.5">
                      Call Us
                    </p>
                    <p className="font-semibold text-white group-hover:text-red-400 transition-colors">
                      {BUSINESS.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors">
                    <Mail className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/40 uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <p className="font-semibold text-white group-hover:text-red-400 transition-colors">
                      {BUSINESS.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-[11px] text-white/40 uppercase tracking-wider mb-0.5">
                      Based in
                    </p>
                    <p className="font-semibold text-white">
                      {BUSINESS.address.area}, {BUSINESS.address.postcode}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* AI Feature Card */}
              <motion.div variants={fadeUp}>
                <div
                  className="relative rounded-2xl p-5 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #1a0505 0%, #141414 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,59,48,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,59,48,0.3) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <div className="relative flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20 shrink-0">
                      <Calendar className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-white mb-1">
                        Book Through AI
                      </p>
                      <div className="flex flex-wrap gap-2 text-xs text-white/60">
                        <span className="px-2 py-0.5 rounded-full bg-white/10">
                          Instant answers
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-white/10">
                          Check availability
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-white/10">
                          Schedule lessons
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
