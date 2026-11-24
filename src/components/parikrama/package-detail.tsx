"use client";

import Image from "next/image";
import { Mountain, Clock, Gauge, Calendar, MapPin, Check, X } from "lucide-react";
import { packageImage, type Package } from "@/lib/parikrama/packages";
import { pkWhatsApp } from "@/lib/parikrama/config";
import { PkWhatsApp } from "@/components/parikrama/whatsapp";

export function PkPackageDetail({ pkg }: { pkg: Package }) {
  const img = packageImage(pkg);
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="relative -mx-1 h-56 w-full overflow-hidden rounded-sm md:h-72">
        <Image src={img} alt={pkg.name} fill sizes="(max-width: 768px) 90vw, 720px" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-basalt/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="eyebrow text-copper">{pkg.country} · {pkg.category}</p>
          <h3 className="mt-2 font-serif text-2xl text-white md:text-3xl">{pkg.name}</h3>
        </div>
      </div>

      {/* Facts */}
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-basalt/15 bg-basalt/15">
        <Fact icon={<Mountain className="h-4 w-4" />} label="Max elevation" value={pkg.maxElevation} />
        <Fact icon={<Clock className="h-4 w-4" />} label="Duration" value={pkg.duration} />
        <Fact icon={<Gauge className="h-4 w-4" />} label="Difficulty" value={pkg.difficulty} />
        <Fact icon={<Calendar className="h-4 w-4" />} label="Best season" value={pkg.season} />
      </div>

      {/* Price */}
      <div className="rounded-sm bg-basalt p-5 text-center text-white">
        <p className="eyebrow text-copper">Starting price</p>
        <p className="mt-1 font-serif text-3xl">USD {pkg.priceFrom.toLocaleString()}</p>
        <p className="mt-1 font-sans text-xs text-white/60">per person · twin-sharing basis · single supplement on request</p>
        {pkg.verifyPrice && (
          <p className="mt-2 font-sans text-[0.65rem] italic text-white/50">
            Indicative price from the existing website — to be confirmed with the Parikrama team before booking.
          </p>
        )}
      </div>

      {/* Overview */}
      <div>
        <p className="eyebrow mb-3 text-copper">Overview</p>
        <p className="font-sans text-base font-light leading-relaxed text-basalt/80">{pkg.description}</p>
      </div>

      {/* Highlights */}
      <div>
        <p className="eyebrow mb-4 text-copper">Highlights</p>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2.5 font-sans text-sm text-basalt">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Itinerary */}
      <div>
        <p className="eyebrow mb-4 text-copper">Day-by-day itinerary</p>
        <ol className="space-y-2">
          {pkg.itinerary.map((d) => (
            <li key={d.day} className="flex gap-4 rounded-sm border border-basalt/12 bg-cream p-3">
              <span className="font-serif text-lg text-copper">D{d.day}</span>
              <div>
                <p className="font-sans text-sm font-medium text-basalt">{d.title}</p>
                <p className="font-sans text-xs font-light leading-relaxed text-basalt/65">{d.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-3 font-sans text-xs italic text-basalt/55">
          Itinerary is indicative and may adjust for weather, acclimatisation and road conditions. Fixed departures and private/custom groups available — confirm with the team.
        </p>
      </div>

      {/* Inclusions / Exclusions */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-sm border border-basalt/12 bg-cream p-4">
          <p className="eyebrow mb-3 text-copper">Inclusions</p>
          <ul className="space-y-1.5">
            {pkg.inclusions.map((i) => (
              <li key={i} className="flex items-start gap-2 font-sans text-sm text-basalt/80">
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest" />
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border border-basalt/12 bg-cream p-4">
          <p className="eyebrow mb-3 text-copper">Exclusions</p>
          <ul className="space-y-1.5">
            {pkg.exclusions.map((i) => (
              <li key={i} className="flex items-start gap-2 font-sans text-sm text-basalt/80">
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-stone-parikrama" />
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Permits & accommodation */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <p className="eyebrow mb-2 text-copper">Permits & documentation</p>
          <ul className="space-y-1 font-sans text-sm text-basalt/75">
            {pkg.permits.map((p) => <li key={p}>· {p}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-2 text-copper">Accommodation & transport</p>
          <p className="font-sans text-sm text-basalt/75">{pkg.accommodation}</p>
          <p className="mt-1 font-sans text-sm text-basalt/75">{pkg.transport}</p>
        </div>
      </div>

      {/* Enquiry CTA */}
      <div className="rounded-sm bg-basalt p-6 text-center">
        <p className="font-serif text-xl text-white">Enquire about {pkg.name}</p>
        <p className="mt-1 font-sans text-sm text-white/60">Get the latest departure dates, availability and a tailored quote.</p>
        <div className="mt-4 flex justify-center">
          <PkWhatsApp message={pkg.whatsappMessage} className="px-6 py-3 text-sm">
            Enquire on WhatsApp
          </PkWhatsApp>
        </div>
      </div>
    </div>
  );
}

function Fact({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-cream p-4">
      <div className="flex items-center gap-2 text-copper">
        {icon}
        <span className="eyebrow text-basalt/55">{label}</span>
      </div>
      <p className="mt-2 font-serif text-base text-basalt">{value}</p>
    </div>
  );
}
