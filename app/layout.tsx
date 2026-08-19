import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import type { Metadata } from "next";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL("https://greenestco.in"),
  applicationName: "greenest",
  manifest: "/site.webmanifest",
  category: "travel",
  creator: "greenest",
  publisher: "greenest",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  title: {
    default: "greenest — Where nature feels like home",
    template: "%s | greenest",
  },
  description:
    "greenest is a thoughtful, eco-conscious mountain homestay in planning and construction in Kanthalloor, Kerala.",
  keywords: [
    "greenest",
    "Kanthalloor homestay",
    "eco-friendly resort Kerala",
    "mountain retreat Kerala",
    "Kanthalloor tourism",
    "sustainable tourism Kerala",
    "family resort Kerala",
    "Kerala highlands",
    "Idukki homestay",
    "nature retreat India",
    "Kanthalloor resort",
    "Kanthalloor eco resort",
    "Kanthalloor family homestay",
    "Kanthalloor accommodation",
    "Kanthalloor stay",
    "resorts in Kanthalloor",
    "best homestay in Kanthalloor",
    "farm stay Kanthalloor",
    "mountain stay Kanthalloor",
    "homestay near Munnar",
    "mountain stay near Munnar",
    "quiet stay near Munnar",
    "Idukki mountain resort",
    "eco resort Idukki",
    "Kerala hill station resort",
    "Western Ghats homestay",
    "nature resort Kerala",
    "eco friendly homestay India",
    "apple orchard stay Kerala",
    "strawberry farm stay Kerala",
    "family vacation Kerala",
    "Kerala mountain getaway",
    "weekend getaway from Kochi",
    "misty mountain retreat Kerala",
    "sustainable family travel Kerala",
  ],
  openGraph: {
    title: "greenest — A mountain home in Kanthalloor, Kerala",
    description:
      "A nature-led stay with misty mountain views, fruit orchards and homemade food. Currently taking shape in Kanthalloor.",
    url: "https://greenestco.in",
    siteName: "greenest",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "greenest — A mountain home in Kanthalloor, Kerala",
    description:
      "A thoughtful nature-led stay now taking shape in the Kerala highlands.",
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
  alternates: {
    canonical: "https://greenestco.in",
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
        "@id": "https://greenestco.in/#organization",
        name: "greenest",
        url: "https://greenestco.in",
        logo: "https://greenestco.in/icons/android-chrome-512x512.png",
        image: "https://greenestco.in/images/greenest-mountain-sunrise.png",
        description:
          "Eco-conscious mountain homestay in planning and construction in Kanthalloor, Kerala, India.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-62820-77926",
          email: "greenest5000@gmail.com",
          contactType: "customer service",
          availableLanguage: ["English", "Malayalam"],
        },
      },
      {
        "@type": "LodgingBusiness",
        "@id": "https://greenestco.in/#lodging",
        name: "greenest",
        description:
          "Premium eco-friendly mountain homestay in Kanthalloor, Kerala.",
        url: "https://greenestco.in",
        image: "https://greenestco.in/images/greenest-mountain-sunrise.png",
        telephone: "+91-62820-77926",
        email: "greenest5000@gmail.com",
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
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
        <SpeedInsights />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
