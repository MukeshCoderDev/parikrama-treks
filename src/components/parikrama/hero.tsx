"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { pkImages } from "@/lib/parikrama/images";
import { pkConfig } from "@/lib/parikrama/config";
import { PkWhatsApp } from "@/components/parikrama/whatsapp";
import { PkCredibilityPanel } from "@/components/parikrama/credibility-panel";

export function PkHero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-basalt">
      <Image
        src={pkImages.hero}
        alt="Parikrama motorcycle expedition riders at a high-altitude Himalayan lake"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 overlay-hero" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-basalt/85 via-basalt/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-basalt via-basalt/55 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1340px] flex-1 flex-col justify-start px-5 pb-36 pt-28 md:justify-center md:px-8 md:pt-32">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          {/* Left — headline & CTAs */}
          <div className="w-full max-w-3xl animate-fade-rise">
            <p className="mb-5 text-copper [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] [font-family:var(--font-inter)] text-[0.6rem] font-medium uppercase tracking-[0.16em] md:text-[0.7rem] md:tracking-[0.28em]">
              25+ Years · Nepal · Tibet · Bhutan
            </p>
            <h1 className="display-hero text-white [text-shadow:0_4px_24px_rgba(0,0,0,0.55)]">
              <span className="block text-[clamp(1.7rem,5.2vw,4.6rem)] whitespace-nowrap">
                BEYOND THE ORDINARY.
              </span>
              <span className="block text-[clamp(1.7rem,5.2vw,4.6rem)] whitespace-nowrap">
                INTO THE <span className="text-copper italic">HIMALAYAS.</span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-white/90 [text-shadow:0_2px_10px_rgba(0,0,0,0.6)] md:text-lg">
              Discover the Himalayas through extraordinary journeys across Nepal, Tibet and Bhutan.
              From legendary motorcycle routes to remote mountain trails — explore with a team shaped
              by decades of experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollTo("adventures")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-copper-light"
              >
                Explore Journeys
                <ArrowRight className="h-4 w-4" />
              </button>
              <PkWhatsApp variant="solid" className="px-7 py-3.5 text-sm">
                Plan Your Journey on WhatsApp
              </PkWhatsApp>
            </div>
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.18em] text-white/70 [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
              Established {pkConfig.establishedYear} · {pkConfig.location}
            </p>
          </div>

          {/* Right — company credibility panel (desktop right, mobile below) */}
          <PkCredibilityPanel className="animate-fade-rise delay-200 lg:mb-2" />
        </div>
      </div>
    </section>
  );
}
