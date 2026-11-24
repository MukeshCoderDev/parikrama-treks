"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { pkGallery } from "@/lib/parikrama/images";
import { PkSectionHeading } from "@/components/parikrama/section-heading";

export function PkGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex((i) => (i === null ? i : (i - 1 + pkGallery.length) % pkGallery.length)), []);
  const next = useCallback(() => setIndex((i) => (i === null ? i : (i + 1) % pkGallery.length)), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <section id="gallery" className="bg-basalt py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <PkSectionHeading
            light
            eyebrow="Gallery"
            title={<>Frames from the field.</>}
            description="Expedition photographs from two decades across Nepal, Tibet and Bhutan — motorcycles, trails, monasteries and the high places."
          />
          <p className="hidden font-sans text-sm text-white/50 md:block">{pkGallery.length} photographs · tap to enlarge</p>
        </div>

        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
          {pkGallery.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-sm bg-basalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              style={{ aspectRatio: i % 5 === 0 ? "3/4" : i % 5 === 1 ? "4/3" : i % 5 === 2 ? "1/1" : i % 5 === 3 ? "4/5" : "3/2" }}
              aria-label={`Open photograph: ${img.alt}`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 45vw, 22vw" className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-basalt/0 transition-colors duration-500 group-hover:bg-basalt/20" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-basalt/80 to-transparent p-3 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-sans text-[0.68rem] font-light text-white/85">{img.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && index !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-basalt/95 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Photograph viewer" onClick={close}>
          <button type="button" onClick={close} aria-label="Close" className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous" className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 md:left-6 md:h-14 md:w-14">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="relative mx-auto h-[82svh] w-[90vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image src={pkGallery[index].src} alt={pkGallery[index].alt} fill sizes="90vw" className="object-contain" />
          </figure>
          <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next" className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 md:right-6 md:h-14 md:w-14">
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute inset-x-0 bottom-6 text-center">
            <p className="font-serif text-sm italic text-white/85">{pkGallery[index].alt}</p>
            <p className="mt-1 font-sans text-xs text-white/40">{index + 1} / {pkGallery.length}</p>
          </div>
        </div>
      )}
    </section>
  );
}
