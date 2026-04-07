import Link from "next/link";
import { Mail, MapPin, Star, Sparkles } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { BUSINESS, AREAS_SERVED } from "@/data/business";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-white/8">
      {/* Red glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(ellipse, rgba(255,59,48,0.3) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3.5 mb-6 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/25">
                <span className="font-display font-bold text-white text-xl">CD</span>
              </div>
              <div>
                <p className="font-display font-semibold leading-tight text-white">Cecil Denny</p>
                <p className="text-sm text-white/40">Driving School</p>
              </div>
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-white/40 ml-1">{BUSINESS.rating} Rating</span>
            </div>

            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: "linear-gradient(135deg, #1a0505 0%, #141414 100%)" }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-white/60">AI Available 24/7</span>
            </div>

            <p className="text-white/40 text-sm leading-relaxed mt-4">
              West London&apos;s first AI-powered driving school. Get instant answers about lessons, 
              pricing, and booking — available 24/7.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Courses" },
                { href: "/blog", label: "Blog" },
                { href: "/areas", label: "Areas" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-red-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Areas Covered
            </h3>
            <ul className="space-y-2.5">
              {AREAS_SERVED.slice(0, 6).map((area) => (
                <li key={area} className="text-white/40 text-sm flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-red-400/50 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-white/40 text-sm hover:text-red-400 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-red-500/10 transition-colors">
                    <Mail className="w-4 h-4 text-red-400" />
                  </div>
                  {BUSINESS.email}
                </a>
              </li>
              <li className="text-white/40 text-sm flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-red-400" />
                </div>
                <span>
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.city} {BUSINESS.address.postcode}
                </span>
              </li>
              <li className="text-white/40 text-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-red-500/20 to-amber-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-red-400" />
                </div>
                <span>
                  AI Chat Available
                  <br />
                  <span className="text-white/60">24 hours, 7 days</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-white/8 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-white/30 hover:text-red-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-white/30 hover:text-red-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
