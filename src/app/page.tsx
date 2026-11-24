import type { Metadata } from "next";
import { PkNavbar } from "@/components/parikrama/navbar";
import { PkHero } from "@/components/parikrama/hero";
import { PkDifference } from "@/components/parikrama/difference";
import { PkAdventures } from "@/components/parikrama/adventures";
import { PkMotorcycle } from "@/components/parikrama/motorcycle";
import { PkNepal } from "@/components/parikrama/nepal";
import { PkTibet, PkBhutan } from "@/components/parikrama/destinations";
import { PkOurStory } from "@/components/parikrama/our-story";
import { PkFilms } from "@/components/parikrama/films";
import { PkJournal } from "@/components/parikrama/journal";
import { PkGallery } from "@/components/parikrama/gallery";
import { PkExperiences } from "@/components/parikrama/experiences";
import { PkTrust } from "@/components/parikrama/trust";
import { PkFinalCta } from "@/components/parikrama/final-cta";
import { PkContact } from "@/components/parikrama/contact";
import { PkFooter } from "@/components/parikrama/footer";
import { PkWhatsAppFloat } from "@/components/parikrama/whatsapp";

export const metadata: Metadata = {
  title: "Parikrama Treks & Expeditions — Beyond the Ordinary. Into the Himalayas.",
  description:
    "Parikrama Treks & Expeditions Pvt. Ltd. — an established Himalayan expedition company in Kathmandu since 1998. Trekking and Royal Enfield motorcycle expeditions across Nepal, Tibet and Bhutan. Plan your journey on WhatsApp.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <PkNavbar />
      <main className="flex-1">
        <PkHero />
        <PkDifference />
        <PkAdventures />
        <PkMotorcycle />
        <PkNepal />
        <PkTibet />
        <PkBhutan />
        <PkOurStory />
        <PkFilms />
        <PkJournal />
        <PkGallery />
        <PkExperiences />
        <PkTrust />
        <PkFinalCta />
        <PkContact />
      </main>
      <PkFooter />
      <PkWhatsAppFloat />
    </div>
  );
}
