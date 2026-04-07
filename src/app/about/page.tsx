"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Star, Award, Users, ThumbsUp, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { heroText, staggerContainer, fadeUp } from "@/lib/animations";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-32 pb-20 relative overflow-hidden noise">
          <div
            className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(255,59,48,0.3) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

              {/* Left - Text */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.span variants={heroText} className="inline-flex items-center gap-3 mb-6">
                  <div className="line-accent" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
                    About Us
                  </span>
                </motion.span>
                <motion.h1 variants={heroText} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6 leading-tight">
                  Your Trusted
                  <br />
                  <span className="text-gradient-gold">Driving Instructor</span>
                </motion.h1>
                <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed mb-6">
                  With over {BUSINESS.yearsExperience} years of teaching experience, Cecil Denny has helped 
                  hundreds of learners in Acton, Chiswick, Shepherd&apos;s Bush, and 
                  surrounding areas pass their driving test with confidence.
                </motion.p>
                <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed mb-8">
                  Specializing in manual transmission lessons, we believe every 
                  learner deserves patient, professional instruction tailored to 
                  their individual needs.
                </motion.p>

                <motion.div variants={staggerContainer} className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {BUSINESS.phone}
                  </a>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="inline-flex items-center gap-2 text-white/40 font-medium hover:text-white/70 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    {BUSINESS.email}
                  </a>
                </motion.div>
              </motion.div>

              {/* Right - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=85"
                    alt="Cecil Denny - Driving Instructor"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      t.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                {/* Rating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
                      <Star className="w-7 h-7 text-amber-400" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-2xl text-white">
                        {BUSINESS.rating}
                      </p>
                      <p className="text-sm text-white/40">Google Rating</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── Stats ─── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Users, value: "50+", label: "Verified Reviews" },
                { icon: Award, value: "DVSA", label: "Qualified" },
                { icon: Star, value: "5.0", label: "Average Rating" },
                { icon: ThumbsUp, value: "20+", label: "Years Experience" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-amber-400" />
                  <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-white/40 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Why Choose Us ─── */}
        <section className="py-16 lg:py-24 relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
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
                  Why Choose Us
                </span>
              </div>
              <motion.h2 variants={heroText} className="font-display text-[clamp(2rem,4vw,3.5rem)] font-bold text-white mb-4">
                What Sets Us Apart
              </motion.h2>
              <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed">
                We&apos;re committed to providing the best driving tuition experience in West London.
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: "Patient & Encouraging", description: "We understand that learning to drive can be nerve-wracking. Our calm, supportive approach helps you build confidence at your own pace.", icon: ThumbsUp },
                { title: "DVSA Approved", description: "All lessons follow the DVSA syllabus, ensuring you&apos;re fully prepared for both the theory and practical driving tests.", icon: Award },
                { title: "Flexible Scheduling", description: "Lessons available 7 days a week, early mornings to evenings. We work around your schedule, not the other way around.", icon: Users },
                { title: "Local Knowledge", description: "As a West London specialist, we know exactly which routes and maneuvers to focus on for your test area.", icon: Star },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card glass-card-hover rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.description }} />
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
