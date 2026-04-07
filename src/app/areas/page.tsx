"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AREAS_SERVED } from "@/data/business";
import { MapPin, Phone, Navigation, ArrowRight, Calendar } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { BUSINESS } from "@/data/business";
import { heroText, staggerContainer, fadeUp } from "@/lib/animations";

export default function AreasPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 relative overflow-hidden noise">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(ellipse, rgba(245,166,35,0.3) 0%, transparent 70%)",
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
                  Coverage Area
                </span>
              </motion.span>
              <motion.h1 variants={heroText} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6">
                Driving Lessons Across
                <br />
                <span className="text-gradient-gold">West London</span>
              </motion.h1>
              <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed">
                We provide driving lessons throughout West London, covering multiple 
                postcodes. Pickup and drop-off available throughout our service area.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── Areas Grid ─── */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {AREAS_SERVED.map((area, index) => (
                <motion.div
                  key={area}
                  variants={fadeUp}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card glass-card-hover rounded-2xl p-5 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="font-semibold text-white text-sm">{area}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ─── Postcode CTA ─── */}
        <section className="py-16 lg:py-24 relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <Card className="glass-card overflow-hidden">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                      Not Sure If We Cover Your Area?
                    </h2>
                    <p className="text-white/50 mb-8 leading-relaxed">
                      Chat with our AI assistant and we&apos;ll let you know if we can come to 
                      you. We cover most of West London and are always expanding 
                      our coverage area.
                    </p>
                    <button
                      onClick={() => {
                        const btn = document.querySelector('[aria-label="Open AI voice assistant"]');
                        if (btn instanceof HTMLElement) btn.click();
                      }}
                      aria-label="Ask AI Assistant about coverage area"
                      className="rounded-full bg-red-500 text-white hover:bg-red-400 glow-red font-semibold h-12 px-8 inline-flex items-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      Ask AI Assistant
                    </button>
                  </div>
                  <div className="relative">
                    <div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,59,48,0.1) 0%, rgba(245,166,35,0.05) 100%)",
                        filter: "blur(60px)",
                      }}
                    />
                    <div className="relative glass-card rounded-3xl p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Navigation className="w-6 h-6 text-red-400" />
                        <h3 className="font-display font-bold text-lg text-white">
                          Postcodes Covered
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {["W3", "W4", "W5", "W6", "W12", "W13"].map((postcode) => (
                          <Badge
                            key={postcode}
                            className="px-4 py-2 text-sm border border-white/15 bg-white/5 text-white hover:bg-white/10 font-mono"
                          >
                            {postcode}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
