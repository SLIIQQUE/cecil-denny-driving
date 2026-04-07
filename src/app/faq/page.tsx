"use client";

import { motion } from "motion/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { CardContent } from "@/components/ui/card";
import { FAQ_DATA } from "@/data/testimonials";
import { HelpCircle, Phone, Calendar } from "lucide-react";
import { heroText, staggerContainer, fadeUp } from "@/lib/animations";
import { ButtonLink } from "@/components/ui/button-link";

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-32 pb-16 relative overflow-hidden noise">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
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
                  FAQ
                </span>
              </motion.span>
              <motion.h1 variants={heroText} className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold text-white mb-6">
                Frequently Asked
                <br />
                <span className="text-gradient-gold">Questions</span>
              </motion.h1>
              <motion.p variants={heroText} className="text-white/50 text-base leading-relaxed">
                Everything you need to know about learning to drive with us. 
                Can&apos;t find the answer? Give us a call.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ─── FAQ List ─── */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {FAQ_DATA.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="glass-card rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-6 lg:p-8">
                    <h3 className="font-display text-lg lg:text-xl font-bold text-white mb-3 flex items-start gap-3">
                      <span className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-red-400 text-sm font-bold">{index + 1}</span>
                      </span>
                      {faq.question}
                    </h3>
                    <p className="text-white/50 leading-relaxed pl-11" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </CardContent>
                </motion.div>
              ))}
            </div>

            {/* Still have questions CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center glass-card rounded-2xl p-8"
            >
              <HelpCircle className="w-10 h-10 text-red-400 mx-auto mb-4" />
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Still have questions?
              </h3>
              <p className="text-white/50 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Chat with our AI assistant and 
                we&apos;ll be happy to help.
              </p>
              <button
                onClick={() => {
                  const btn = document.querySelector('[aria-label="Open AI voice assistant"]');
                  if (btn instanceof HTMLElement) btn.click();
                }}
                className="rounded-full bg-red-500 text-white hover:bg-red-400 glow-red font-semibold h-12 px-8 inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Ask AI Assistant
              </button>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
