import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { pkConfig } from "@/lib/parikrama/config";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://paritreks.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Parikrama Treks & Expeditions — Beyond the Ordinary. Into the Himalayas.",
    template: "%s · Parikrama Treks & Expeditions",
  },
  description:
    "An established Himalayan expedition company in Kathmandu since 1998. Trekking and Royal Enfield motorcycle expeditions across Nepal, Tibet and Bhutan. Plan your journey on WhatsApp.",
  keywords: [
    "Parikrama Treks",
    "Himalayan expedition company",
    "Nepal trekking",
    "Royal Enfield motorcycle Himalaya",
    "Upper Mustang motorcycle",
    "Tibet motorcycle tour",
    "Bhutan motorcycle adventure",
    "Everest Base Camp trek",
    "Kanchenjunga trek",
    "Manaslu trek",
    "Kathmandu trekking company",
  ],
  authors: [{ name: "Parikrama Treks & Expeditions Pvt. Ltd." }],
  creator: "Parikrama Treks & Expeditions Pvt. Ltd.",
  publisher: "Parikrama Treks & Expeditions Pvt. Ltd.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Parikrama Treks & Expeditions — Beyond the Ordinary. Into the Himalayas.",
    description:
      "Established Himalayan expedition company in Kathmandu since 1998. Trekking and motorcycle expeditions across Nepal, Tibet and Bhutan.",
    url: SITE_URL,
    siteName: "Parikrama Treks & Expeditions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parikrama Treks & Expeditions",
    description:
      "Himalayan trekking and motorcycle expeditions across Nepal, Tibet and Bhutan. Established Kathmandu 1998.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "travel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Parikrama Treks & Expeditions Pvt. Ltd.",
  description:
    "Established Himalayan expedition company in Kathmandu since 1998. Trekking and motorcycle expeditions across Nepal, Tibet and Bhutan.",
  url: SITE_URL,
  foundingDate: "1998",
  areaServed: ["Nepal", "Tibet", "Bhutan"],
  knowsAbout: [
    "Himalayan Trekking",
    "Royal Enfield Motorcycle Expeditions",
    "Upper Mustang",
    "Tibet Motorcycle Tours",
    "Bhutan Motorcycle Adventures",
    "Mount Kailash",
    "Everest Base Camp",
  ],
  sameAs: [pkConfig.social.facebook, pkConfig.social.x, pkConfig.social.youtube],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${cormorant.variable} ${inter.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
