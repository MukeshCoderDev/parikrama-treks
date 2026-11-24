"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { pkImages } from "@/lib/parikrama/images";
import { PkSectionHeading } from "@/components/parikrama/section-heading";

const pathways = [
  {
    id: "nepal",
    eyebrow: "01 — Nepal",
    title: "Nepal Trekking",
    desc: "Everest, Annapurna, Manaslu, Kanchenjunga, Mustang and the restricted areas.",
    image: pkImages.ebc,
    target: "nepal",
  },
  {
    id: "motorcycle",
    eyebrow: "02 — Motorcycle",
    title: "Himalayan Motorcycle Expeditions",
    desc: "Royal Enfield journeys across Mustang, Everest, Tibet and Bhutan.",
    image: pkImages.motoMain,
    target: "motorcycle",
  },
  {
    id: "tibet",
    eyebrow: "03 — Tibet",
    title: "Tibet Adventures",
    desc: "The high plateau — Everest North Face, Kailash, Mansarovar and Lhasa.",
    image: pkImages.tibet,
    target: "tibet",
  },
  {
    id: "bhutan",
    eyebrow: "04 — Bhutan",
    title: "Bhutan Journeys",
    desc: "The last Himalayan kingdom — Paro, Thimphu, Punakha and Tiger's Nest.",
    image: pkImages.bhutan,
    target: "bhutan",
  },
];

export function PkAdventures() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="adventures" className="bg-basalt py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <PkSectionHeading
          light
          eyebrow="Choose your adventure"
          title={<>Four ways into the mountains.</>}
          description="From lodge-based treks to multi-country motorcycle expeditions, every Parikrama journey is fully supported and shaped by decades of operation."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {pathways.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => scrollTo(p.target)}
              className="group relative block h-[460px] w-full overflow-hidden rounded-sm bg-basalt text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 overlay-dark" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow mb-2 text-copper">{p.eyebrow}</p>
                <h3 className="font-serif text-2xl font-medium text-white md:text-[1.6rem]">{p.title}</h3>
                <p className="mt-1.5 font-sans text-sm font-light text-white/75">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.14em] text-white/85">
                  Explore journeys
                </span>
              </div>
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:bg-copper group-hover:text-white">
                <ArrowUpRight className="h-4 w-4 text-white transition-colors duration-500 group-hover:text-white" />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
