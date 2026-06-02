import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.GreeNest.com"),
  title: {
    default: "GreeNest – Where Nature Feels Like Home | Kanthalloor, Kerala",
    template: "%s | GreeNest",
  },
  description:
    "GreeNest is a premium eco-friendly mountain homestay coming soon to Kanthalloor, Kerala. Join the waiting list, explore future experiences, and discover investment opportunities in sustainable tourism.",
  keywords: [
    "GreeNest",
    "Kanthalloor homestay",
    "eco-friendly resort Kerala",
    "mountain retreat Kerala",
    "Kanthalloor tourism",
    "sustainable tourism Kerala",
    "family resort Kerala",
    "Kerala highlands",
    "Idukki homestay",
    "nature retreat India",
  ],
  openGraph: {
    title: "GreeNest – Premium Eco Mountain Homestay | Kanthalloor Kerala",
    description:
      "A nature-inspired retreat with sunrise mountain views, fruit orchards, and homemade food. Coming soon to Kanthalloor.",
    url: "https://www.GreeNest.com",
    siteName: "GreeNest",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GreeNest – Mountain homestay in Kanthalloor, Kerala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreeNest – Premium Eco-Friendly Mountain Homestay | Kerala",
    description:
      "Discover sustainable luxury in Kanthalloor. Join the waiting list now.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.GreeNest.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.GreeNest.com/#organization",
        name: "GreeNest",
        url: "https://www.GreeNest.com",
        description:
          "Premium eco-friendly mountain homestay coming soon to Kanthalloor, Kerala, India.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-99999-99999",
          contactType: "customer service",
          availableLanguage: ["English", "Malayalam"],
        },
      },
      {
        "@type": "LodgingBusiness",
        "@id": "https://www.GreeNest.com/#lodging",
        name: "GreeNest",
        description:
          "Premium eco-friendly mountain homestay in Kanthalloor, Kerala.",
        url: "https://www.GreeNest.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kanthalloor",
          addressRegion: "Kerala",
          addressCountry: "IN",
          postalCode: "685619",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.28,
          longitude: 77.12,
        },
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Mountain Views",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Eco-Friendly",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Farm Experiences",
            value: true,
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Stargazing",
            value: true,
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
