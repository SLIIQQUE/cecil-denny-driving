"use client";

import { motion } from "motion/react";
import { PACKAGES } from "@/data/services";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { CheckCircle2, ArrowRight, Car, Clock, Shield } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";

const PACKAGE_FEATURES = [
  [
    { icon: Clock, text: "90-minute sessions" },
    { icon: Shield, text: "DVSA-qualified instructor" },
    { icon: Car, text: "Manual or automatic" },
  ],
  [
    { icon: Clock, text: "90-minute sessions" },
    { icon: Shield, text: "DVSA-qualified instructor" },
    { icon: Car, text: "Manual or automatic" },
  ],
  [
    { icon: Clock, text: "90-minute sessions" },
    { icon: Shield, text: "DVSA-qualified instructor" },
    { icon: Car, text: "Manual or automatic" },
  ],
];

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section Number Background */}
      <div className="absolute top-0 right-8 section-number select-none pointer-events-none">
        01
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(255,59,48,0.4) 0%, transparent 70%)" }}
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
              Lesson Packages
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-4">
                Your Path to
                <br />
                <span className="text-gradient-red">Passing First Time.</span>
              </h2>
              <p className="text-white/50 text-base max-w-md leading-relaxed">
                Structured lessons covering everything you need — from basic controls to test-ready skills.
              </p>
            </div>
            <ButtonLink
              href="/services"
              size="lg"
              className="rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/25 self-start"
            >
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </ButtonLink>
          </div>
        </motion.div>

        {/* ─── Package Grid ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              variants={fadeUp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 transition-all duration-300 glass-card glass-card-hover ${
                pkg.popular ? "border-red-500/30" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-red-500 text-white border-0 px-4 shadow-lg">
                    Most Popular
                  </Badge>
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {pkg.name}
              </h3>
              <p className="text-white/50 text-sm mb-6">
                {pkg.description}
              </p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-white">
                  {pkg.lessons}
                </span>
                <span className="text-white/50 ml-2">lessons</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 mb-8">
                {PACKAGE_FEATURES[index].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-white/50">
                    <feat.icon className="w-4 h-4 text-white/30" />
                    {feat.text}
                  </div>
                ))}
              </div>
              <ButtonLink
                href="/contact"
                variant={pkg.popular ? "default" : "outline"}
                className={`w-full rounded-xl ${
                  pkg.popular ? "bg-red-500 hover:bg-red-400 text-white" : "border-white/15 text-white hover:bg-white/5 hover:border-white/25"
                }`}
              >
                Book This Package
              </ButtonLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
