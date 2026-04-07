import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS, AREAS_SERVED } from "@/data/business";
import { VoiceAssistant } from "@/components/VoiceAssistant";

const displayFont = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: {
    default: "Cecil Denny Driving School | Expert Driving Lessons in London W3",
    template: "%s | Cecil Denny Driving School",
  },
  description:
    "Professional driving lessons in London W3 (Acton, Chiswick, Shepherd's Bush). Manual transmission. 5-star rated instructor with 20+ years experience. Book your first lesson today.",
  keywords: [
    "driving lessons London W3",
    "driving instructor Acton",
    "driving school Chiswick",
    "manual driving lessons London",
    "Cecil Denny driving school",
    "learn to drive W3",
    "driving lessons Shepherd's Bush",
  ],
  authors: [{ name: "Cecil Denny" }],
  creator: "SLIIQQUE",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Cecil Denny Driving School",
    title: "Cecil Denny Driving School | Expert Driving Lessons in London W3",
    description:
      "Professional driving lessons in London W3. Manual transmission. 5-star rated instructor with 20+ years experience.",
    url: "https://cecildennydriving.co.uk",
    images: [
      {
        url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Cecil Denny Driving School - Expert driving lessons in London W3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cecil Denny Driving School",
    description: "Expert driving lessons in London W3",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: BUSINESS.name,
  description:
    "Professional driving lessons in London W3 with over 20 years of teaching experience.",
  url: "https://cecildennydriving.co.uk",
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.area,
    addressRegion: "London",
    postalCode: BUSINESS.address.postcode,
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.location.lat,
    longitude: BUSINESS.location.lng,
  },
  openingHoursSpecification: Object.entries(BUSINESS.hours).map(([day, hours]) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day.charAt(0).toUpperCase() + day.slice(1),
    opens: hours.open,
    closes: hours.close,
  })),
  areaServed: AREAS_SERVED.map((area) => ({
    "@type": "Place",
    name: area,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(BUSINESS.rating),
    reviewCount: "50",
  },
  priceRange: "££",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="min-h-screen flex flex-col font-body antialiased bg-[#0A0A0A] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <VoiceAssistant />
      </body>
    </html>
  );
}
