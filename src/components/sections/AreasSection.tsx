"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button-link";
import { AREAS_SERVED } from "@/data/business";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { MapPin, ArrowRight, Car } from "lucide-react";

const AREA_IMAGES = [
  "https://images.unsplash.com/photo-1582657118090-4c39e017a562?w=600&q=80",
  "https://images.unsplash.com/photo-1570116174805-e5c4f45e3c5a?w=600&q=80",
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80",
  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&q=80",
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
  "https://images.unsplash.com/photo-1570120302121-3a296b7b01d6?w=600&q=80",
];

const AreaCard = ({ area, imageIndex }: { area: string; imageIndex: number }) => (
  <div className="relative rounded-2xl overflow-hidden w-[180px] sm:w-[200px] h-[140px] shrink-0 glass-card glass-card-hover cursor-pointer">
    <Image
      src={AREA_IMAGES[imageIndex % AREA_IMAGES.length]}
      alt={`Driving lessons in ${area}`}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-40"
      sizes="200px"
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
          West London
        </span>
      </div>
      <p className="font-display font-bold text-white text-lg">{area}</p>
    </div>
  </div>
);

export function AreasSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-visible">
      {/* Section Number */}
      <div className="absolute top-0 right-8 section-number select-none pointer-events-none">
        03
      </div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=60"
          alt="West London cityscape"
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

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                Driving Lessons
                <br />
                <span className="text-gradient-gold">Across West London.</span>
              </h2>
              <p className="text-white/50 text-base max-w-md leading-relaxed">
                Professional lessons where you need them. We pick you up and drop you off 
                in your area — no hassle.
              </p>
            </div>
            <ButtonLink
              href="/areas"
              className="rounded-full border border-white/15 text-white hover:bg-white/5 hover:border-white/25 self-start"
            >
              Check Your Area
              <ArrowRight className="w-4 h-4 ml-2" />
            </ButtonLink>
          </div>
        </motion.div>

        {/* ─── Area Marquee - 2 Rows (Full Width) ─── */}
        <div className="-mx-6 lg:-mx-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="space-y-4">
              {/* Row 1 - Left to Right */}
              <div className="relative overflow-visible">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="overflow-visible">
                  <div className="flex animate-marquee gap-4">
                    {[...AREAS_SERVED, ...AREAS_SERVED, ...AREAS_SERVED].map((area, index) => (
                      <AreaCard key={`row1-${area}-${index}`} area={area} imageIndex={index} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Row 2 - Right to Left */}
              <div className="relative overflow-visible">
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
                <div className="overflow-visible">
                  <div className="flex animate-marquee-reverse gap-4">
                    {[...AREAS_SERVED].reverse().map((area, index) => (
                      <AreaCard key={`row2-${area}-${index}`} area={area} imageIndex={index + 5} />
                    ))}
                    {[...AREAS_SERVED].reverse().map((area, index) => (
                      <AreaCard key={`row2dup-${area}-${index}`} area={area} imageIndex={index + 5} />
                    ))}
                    {[...AREAS_SERVED].reverse().map((area, index) => (
                      <AreaCard key={`row2dup2-${area}-${index}`} area={area} imageIndex={index + 5} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── CTA Banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl p-8 glass-card flex flex-col md:flex-row items-center justify-between gap-6 mt-12"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center">
              <Car className="w-7 h-7 text-red-400" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Not sure if we cover your area?
              </h3>
              <p className="text-white/50 text-sm">
                Contact us to check — we may be able to help even if it's not listed.
              </p>
            </div>
          </div>
          <ButtonLink
            href="/contact"
            className="rounded-full bg-red-500 hover:bg-red-400 text-white px-6 shrink-0"
          >
            Check Now
          </ButtonLink>
        </motion.div>
      </div>
    </section>
  );
}
