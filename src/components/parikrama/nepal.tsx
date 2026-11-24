"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { packages } from "@/lib/parikrama/packages";
import { pkImages } from "@/lib/parikrama/images";
import { pkDestinations } from "@/lib/parikrama/content";
import { PkPackageCard } from "@/components/parikrama/package-card";
import { PkPackageDetail } from "@/components/parikrama/package-detail";
import { PkSectionHeading } from "@/components/parikrama/section-heading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function PkNepal() {
  const [openId, setOpenId] = useState<string | null>(null);
  const nepalTrek = packages.filter((p) => p.country === "Nepal" && p.category === "Trekking");
  const active = packages.find((p) => p.id === openId) ?? null;
  const dest = pkDestinations.find((d) => d.id === "nepal")!;

  return (
    <section id="nepal" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        {/* Destination hero */}
        <div className="relative mb-12 h-[42svh] min-h-[280px] w-full overflow-hidden rounded-sm bg-basalt md:h-[50svh]">
          <Image src={dest.image} alt={dest.name} fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/55 to-basalt/20" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="eyebrow text-copper">{dest.tagline}</p>
            <h2 className="mt-2 font-serif text-4xl text-white md:text-6xl">{dest.name}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <PkSectionHeading
              eyebrow="The heart of the Himalaya"
              title={<>The deepest Nepal experience.</>}
              description={dest.intro}
            />
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4 text-copper">Where we go</p>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {dest.regions.map((r) => (
                <li key={r.name} className="flex items-start gap-2 font-sans text-sm text-basalt/80">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" />
                  <span>
                    <span className="font-medium text-basalt">{r.name}</span>
                    <span className="block text-xs font-light text-basalt/55">{r.note}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nepal trekking packages */}
        <div className="mt-14">
          <p className="eyebrow mb-6 text-copper">Featured Nepal trekking journeys</p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {nepalTrek.map((p) => (
              <PkPackageCard key={p.id} pkg={p} onOpen={() => setOpenId(p.id)} />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenId(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="max-h-[92svh] w-[94vw] max-w-3xl overflow-y-auto scroll-area-ivory rounded-sm border-basalt/15 bg-cream p-6 md:p-8"
        >
          <DialogTitle className="sr-only">{active?.name}</DialogTitle>
          {active && <PkPackageDetail pkg={active} />}
        </DialogContent>
      </Dialog>
    </section>
  );
}
