"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, Star } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BUSINESS } from "@/data/business";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Courses" },
  { href: "/blog", label: "Blog" },
  { href: "/areas", label: "Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAssistant = () => {
    const assistantBtn = document.querySelector(
      '[aria-label="Open AI voice assistant"]',
    );
    if (assistantBtn instanceof HTMLElement) {
      assistantBtn.click();
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px] lg:h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-xl group-hover:shadow-red-500/40 transition-shadow">
              <span className="font-display font-bold text-white text-lg">CD</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-semibold text-white text-sm leading-tight group-hover:text-red-300 transition-colors">
                Cecil Denny
              </p>
              <p className="text-[11px] text-white/40">
                Driving School
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-medium transition-all duration-300 rounded-lg ${
                  pathname === link.href
                    ? "text-red-400 bg-red-500/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-2.5">
            {/* AI Booking CTA */}
            <Button
              onClick={scrollToAssistant}
              className="hidden md:inline-flex rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 shadow-lg shadow-red-500/20 font-semibold text-[13px] h-10 px-5"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              AI Assistant
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden h-10 w-10 rounded-xl text-white hover:bg-white/10"
                  />
                }
              >
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[340px] sm:w-[380px] bg-black/98 backdrop-blur-xl border-l border-white/10 p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="font-display font-bold text-white text-lg">CD</span>
                      </div>
                      <div>
                        <p className="font-display font-semibold text-white text-sm">
                          Cecil Denny
                        </p>
                        <p className="text-[11px] text-white/40">
                          Driving School
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile AI Status */}
                  <div
                    className="px-6 py-4 border-b border-white/8"
                    style={{
                      background:
                        "linear-gradient(135deg, #1a0505 0%, transparent 100%)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="font-display font-bold text-white text-lg">CD</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">
                          AI Assistant Online
                        </p>
                        <p className="text-xs text-white/50">
                          Get instant answers 24/7
                        </p>
                      </div>
                      <div className="ml-auto w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Mobile Nav */}
                  <div className="flex-1 px-4 py-4 space-y-1">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all ${
                          pathname === link.href
                            ? "bg-red-500/10 text-red-400 border border-red-500/15"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="p-4 border-t border-white/8">
                    <Button
                      onClick={() => {
                        setIsOpen(false);
                        setTimeout(scrollToAssistant, 300);
                      }}
                      className="w-full rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-400 hover:to-red-500 font-semibold h-12"
                      size="lg"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
