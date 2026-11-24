"use client";

import Image from "next/image";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { packageImage, type Package } from "@/lib/parikrama/packages";
import { pkWhatsApp } from "@/lib/parikrama/config";
import { WaIcon } from "@/components/parikrama/whatsapp";

export function PkPackageCard({
  pkg,
  onOpen,
}: {
  pkg: Package;
  onOpen: () => void;
}) {
  const img = packageImage(pkg);
  return (
    <div className="group flex flex-col overflow-hidden rounded-sm border border-basalt/12 bg-white transition-all duration-300 hover:border-copper/40 hover:shadow-lg hover:shadow-basalt/5">
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View itinerary: ${pkg.name}`}
        className="group/img relative aspect-[3/2] w-full overflow-hidden bg-basalt text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
      >
        <Image
          src={img}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1280px) 32vw, 24vw"
          className="object-cover transition-transform duration-[1000ms] ease-out group-hover/img:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-basalt/80 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-basalt/75 px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          <MapPin className="h-3 w-3 text-copper" />
          {pkg.country}
        </span>
        <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-basalt/40 text-white backdrop-blur-md transition-all duration-500 group-hover/img:bg-copper group-hover/img:border-copper">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </button>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-medium leading-snug text-basalt transition-colors group-hover:text-copper">
          {pkg.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 font-sans text-sm font-light leading-relaxed text-basalt/65">
          {pkg.description}
        </p>
        <div className="mt-4 flex items-center gap-3 font-sans text-xs text-basalt/55">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-copper" />
            {pkg.duration}
          </span>
          <span className="h-1 w-1 rounded-full bg-basalt/30" />
          <span>{pkg.difficulty}</span>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-basalt/10 pt-4">
          <div>
            <p className="eyebrow text-basalt/50">From</p>
            <p className="font-serif text-xl text-basalt">
              USD {pkg.priceFrom.toLocaleString()}
              <span className="ml-1 font-sans text-[0.65rem] font-normal text-basalt/45">/ person</span>
            </p>
            {pkg.verifyPrice && (
              <p className="mt-0.5 font-sans text-[0.6rem] italic text-stone-parikrama">
                indicative · confirm with team
              </p>
            )}
          </div>
          <a
            href={pkWhatsApp(pkg.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${pkg.name} on WhatsApp`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105"
          >
            <WaIcon className="h-4 w-4" />
          </a>
        </div>
        <button
          type="button"
          onClick={onOpen}
          className="mt-4 inline-flex items-center gap-1.5 self-start font-sans text-xs uppercase tracking-[0.14em] text-copper"
        >
          View itinerary
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
