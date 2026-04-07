"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES, PACKAGES } from "@/data/services";
import { Car, Gauge, CheckCircle2, ArrowRight, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { heroText, staggerContainer, fadeUp, view3d } from "@/lib/animations";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Gauge,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 relative overflow-hidden noise">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(255,59,48,0.3) 0%, transparent 70%)",
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
                  Our Courses
                </span>
              </motion.span>
              <motion.h1 variants={heroText} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6">
                Expert Driving
                <br />
                <span className="text-gradient-red">Tuition</span>
              </motion.h1>
              <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed max-w-xl mx-auto">
                Professional driving lessons tailored to your learning pace. 
                Whether you&apos;re starting from scratch or need to sharpen your skills, 
                we&apos;ve got you covered.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── Services ─── */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {SERVICES.map((service, index) => {
                const IconComponent = ICONS[service.icon];
                return (
                  <motion.div
                    key={service.id}
                    variants={view3d}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="glass-card glass-card-hover rounded-3xl overflow-hidden"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.id === "lessons"
                          ? "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80"
                          : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
                        }
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        onError={(e) => {
                          const t = e.currentTarget as HTMLImageElement;
                          t.style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8 bg-[#0D0D0D]">
                      <div className="mb-4">
                        <h2 className="font-display text-2xl font-bold text-white mb-1">
                          {service.title}
                        </h2>
                        <p className="text-red-400 font-semibold">{service.price}</p>
                      </div>
                      <p className="text-white/50 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                            </div>
                            <span className="text-sm text-white/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <ButtonLink href="/contact" className="w-full rounded-xl border border-white/15 text-white hover:bg-white/5 hover:border-white/25">
                        Book This Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </ButtonLink>
                    </CardContent>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Packages ─── */}
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
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="line-accent" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
                  Lesson Packages
                </span>
              </div>
              <motion.h2 variants={heroText} className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mb-4">
                Choose Your Package
              </motion.h2>
              <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed">
                Flexible packages to match your learning goals and budget.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-5">
              {PACKAGES.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
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
                  <ButtonLink
                    href="/contact"
                    variant={pkg.popular ? "default" : "outline"}
                    className={`w-full rounded-xl ${
                      pkg.popular ? "bg-red-500 hover:bg-red-400 text-white" : "border-white/15 text-white hover:bg-white/5 hover:border-white/25"
                    }`}
                  >
                    Get Started
                  </ButtonLink>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
