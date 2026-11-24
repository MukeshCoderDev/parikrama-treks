"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { pkDestinations } from "@/lib/parikrama/content";
import { PkSectionHeading } from "@/components/parikrama/section-heading";

function DestinationIntro({ destId }: { destId: "tibet" | "bhutan" }) {
  const dest = pkDestinations.find((d) => d.id === destId)!;
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  const isEven = destId === "tibet";

  return (
    <section id={destId} className={isEven ? "bg-basalt py-24 md:py-32" : "bg-cream py-24 md:py-32"}>
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 ${isEven ? "" : "lg:flex-row-reverse"}`}>
          <div className={isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-basalt lg:h-full">
              <Image src={dest.image} alt={dest.name} fill sizes="(max-width: 1024px) 90vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-basalt/50 to-transparent" />
            </div>
          </div>
          <div className={isEven ? "lg:col-span-6 lg:order-1 lg:pt-6" : "lg:col-span-6 lg:pt-6"}>
            <PkSectionHeading
              light={isEven}
              eyebrow={dest.tagline}
              title={dest.name}
              description={dest.intro}
            />
            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {dest.regions.map((r) => (
                <li key={r.name} className="flex items-start gap-2 font-sans text-sm text-basalt/80">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" />
                  <span>
                    <span className={`font-medium ${isEven ? "text-white" : "text-basalt"}`}>{r.name}</span>
                    <span className={`block text-xs font-light ${isEven ? "text-white/55" : "text-basalt/55"}`}>{r.note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => scrollTo("motorcycle")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 font-sans text-xs font-medium uppercase tracking-[0.12em] text-white transition-all hover:bg-copper-light"
            >
              View {dest.name} motorcycle journeys
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PkTibet() {
  return <DestinationIntro destId="tibet" />;
}
export function PkBhutan() {
  return <DestinationIntro destId="bhutan" />;
}
