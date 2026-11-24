"use client";

import { useState } from "react";
import Image from "next/image";
import { packages as allPackages, type Package } from "@/lib/parikrama/packages";
import { PkPackageCard } from "@/components/parikrama/package-card";
import { PkPackageDetail } from "@/components/parikrama/package-detail";
import { PkSectionHeading } from "@/components/parikrama/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export function PkPackagesSection({
  id,
  eyebrow,
  title,
  description,
  pkgs,
  bg = "cream",
  image,
  imageAlt,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  pkgs: Package[];
  bg?: "cream" | "basalt";
  image?: string;
  imageAlt?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = allPackages.find((p) => p.id === openId) ?? null;
  const light = bg === "basalt";

  return (
    <section id={id} className={bg === "basalt" ? "bg-basalt py-24 md:py-32" : "bg-cream py-24 md:py-32"}>
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        {image && (
          <div className="relative mb-12 h-[42svh] min-h-[280px] w-full overflow-hidden rounded-sm bg-basalt md:h-[50svh]">
            <Image src={image} alt={imageAlt ?? ""} fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/60 to-basalt/20" />
          </div>
        )}
        <PkSectionHeading light={light} eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pkgs.map((p) => (
            <PkPackageCard key={p.id} pkg={p} onOpen={() => setOpenId(p.id)} />
          ))}
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
