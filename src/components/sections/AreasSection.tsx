"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { AREAS_SERVED } from "@/data/business";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { MapPin, ArrowRight } from "lucide-react";

const AREA_IMAGES = [
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=600&q=80",
  "https://images.unsplash.com/photo-1465447142348-e9952c393450?w=600&q=80",
];

export function AreasSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-0 right-8 section-number select-none pointer-events-none">
        03
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=60"
          alt="West London"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
          onError={(e) => {
            const t = e.currentTarget as HTMLImageElement;
            t.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/95 to-[#0A0A0A]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="line-accent" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
              Service Areas
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white leading-tight mb-4">
                West London
                <br />
                <span className="text-gradient-gold">Coverage.</span>
              </h2>
              <p className="text-white/50 text-base max-w-md leading-relaxed">
                Professional driving lessons throughout Acton, Chiswick, Shepherd&apos;s Bush, 
                Hammersmith, Ealing, and all surrounding areas.
              </p>
            </div>
            <ButtonLink
              href="/areas"
              className="rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/25 self-start"
            >
              View All Areas
              <ArrowRight className="w-4 h-4 ml-2" />
            </ButtonLink>
          </div>
        </motion.div>

        {/* ─── Area Cards Grid ─── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {AREAS_SERVED.map((area, i) => (
            <motion.div key={area} variants={fadeUp} className="group">
              <div className="relative rounded-2xl overflow-hidden h-[140px] glass-card glass-card-hover cursor-pointer">
                <Image
                  src={AREA_IMAGES[i % AREA_IMAGES.length]}
                  alt={area}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-40"
                  sizes="25vw"
                  onError={(e) => {
                    const t = e.currentTarget as HTMLImageElement;
                    t.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3 h-3 text-red-400" />
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      {["Acton", "Chiswick", "Shepherd's Bush", "Hammersmith", "Ealing", "West Kensington", "Fulham", "Turnham Green", "Boston Manor", "South Acton"][i % 10]}
                    </span>
                  </div>
                  <p className="font-display font-bold text-white text-lg">{area}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
