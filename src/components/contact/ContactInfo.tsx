import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { BUSINESS } from "@/data/business";

interface ContactInfoProps {
  className?: string;
}

export function ContactInfo({ className }: ContactInfoProps) {
  return (
    <Card className={`glass-card h-full ${className}`}>
      <CardContent className="p-8 lg:p-10">
        {/* AI Assistant Highlight */}
        <div className="relative rounded-2xl p-5 mb-8 overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0505 0%, #141414 100%)" }}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,59,48,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,59,48,0.3) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg shadow-red-500/20 shrink-0">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-display font-bold text-white mb-1">AI Assistant Available</p>
              <p className="text-sm text-white/60">Get instant answers 24/7</p>
            </div>
            <div className="ml-auto shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            </div>
          </div>
        </div>

        <h2 className="font-display text-2xl font-bold text-white mb-8">
          Get in Touch
        </h2>

        <div className="space-y-6">
          {[
            {
              icon: Mail,
              title: "Email",
              value: BUSINESS.email,
              href: `mailto:${BUSINESS.email}`,
              note: "We respond within 24 hours",
              highlight: true,
            },
            {
              icon: MapPin,
              title: "Location",
              value: `${BUSINESS.address.street}\n${BUSINESS.address.city} ${BUSINESS.address.postcode}`,
              note: "West London",
              highlight: false,
            },
            {
              icon: Clock,
              title: "AI Assistant Hours",
              value: "24 hours a day",
              note: "7 days a week",
              highlight: false,
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                item.highlight ? "bg-red-500/15 border border-red-500/20" : "bg-white/5 border border-white/10"
              }`}>
                <item.icon className={`w-5 h-5 ${item.highlight ? "text-red-400" : "text-white/60"}`} />
              </div>
              <div>
                <h3 className="font-medium text-white/60 text-sm mb-1">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`text-lg font-semibold ${item.highlight ? "text-red-400 hover:text-red-300" : "text-white/80 hover:text-white"} transition-colors`}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-lg font-semibold text-white/80 whitespace-pre-line">{item.value}</p>
                )}
                <p className="text-sm text-white/40 mt-1">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
