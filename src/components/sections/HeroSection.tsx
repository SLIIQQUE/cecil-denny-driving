"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { Star, Sparkles } from "lucide-react";
import { BUSINESS } from "@/data/business";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const springY = useSpring(y, { stiffness: 60, damping: 25 });

  const scrollToAssistant = () => {
    const assistantBtn = document.querySelector(
      '[aria-label="Open AI voice assistant"]',
    );
    if (assistantBtn instanceof HTMLElement) {
      assistantBtn.click();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] min-h-[700px] flex items-center overflow-hidden noise"
    >
      {/* ─── Background ─── */}
      <motion.div
        style={{ y: springY, scale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2560&q=90"
          alt="Open road at sunset"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
          }}
        />

        {/* Layered overlays for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

        {/* Red light streak */}
        <div
          className="absolute top-0 left-1/4 w-1 h-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,59,48,0.3) 0%, transparent 100%)",
          }}
        />

        {/* Warm flare */}
        <div
          className="absolute -top-1/3 right-0 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,166,35,0.12) 0%, rgba(255,59,48,0.05) 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* ─── Grid lines (decorative) ─── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ─── Content ─── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="line-accent" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
              AI-Powered · London W3
            </span>
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-4xl pb-40 lg:pb-48">
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(16px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight text-white mb-6"
          >
            Ask Our AI
            <br />
            <span className="text-gradient-red">Get Answers</span>
            <br />
            Instantly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[17px] text-white/50 max-w-xl leading-relaxed mb-10"
          >
            West London&apos;s first AI-powered driving school. Get instant
            answers about lessons, pricing, and booking — available 24/7. Our AI
            assistant is here to help you start your journey.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToAssistant}
              className="inline-flex items-center justify-center h-14 px-8 text-[15px] font-semibold rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 glow-red shadow-2xl shadow-red-500/20 transition-all"
            >
              <Sparkles className="w-5 h-5 mr-3" />
              Chat with AI Now
            </button>
            <button
              onClick={scrollToAssistant}
              className="inline-flex items-center justify-center h-14 px-8 text-[15px] font-semibold rounded-full bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all"
            >
              How It Works
            </button>
          </motion.div>
        </div>

        {/* ─── Stats Bar ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-12 left-6 right-6 lg:left-8 lg:right-8"
        >
          <div className="glass-card rounded-2xl p-6 flex flex-wrap items-center justify-between gap-6">
            {[
              { label: "AI Response Time", value: "< 30s" },
              { label: "Availability", value: "24/7" },
              { label: "Happy Learners", value: "500+" },
              { label: "Areas Covered", value: "10+" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div>
                  <p className="text-2xl font-display font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-white/40 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
                {stat.label !== "Areas Covered" && (
                  <div className="w-px h-10 bg-white/10 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 right-8 hidden lg:flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-[9px] text-white/30 uppercase tracking-[0.25em] rotate-90 origin-center"
            style={{ marginBottom: "1.5rem" }}
          >
            Scroll
          </span>
          <div className="w-px h-14 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
