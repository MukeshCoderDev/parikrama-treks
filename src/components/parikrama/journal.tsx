"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { pkArticles, pkJournalCategories } from "@/lib/parikrama/content";
import { PkSectionHeading } from "@/components/parikrama/section-heading";
import { PkWhatsApp } from "@/components/parikrama/whatsapp";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function PkJournal() {
  const [category, setCategory] = useState("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const filtered = useMemo(
    () => (category === "All" ? pkArticles : pkArticles.filter((a) => a.category === category)),
    [category],
  );
  const [featured, ...rest] = filtered;
  const active = pkArticles.find((a) => a.slug === openSlug) ?? null;
  const related = active
    ? pkArticles.filter((a) => a.slug !== active.slug).slice(0, 2)
    : [];

  return (
    <section id="journal" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <PkSectionHeading
            eyebrow="Journal"
            title={<>Stories from the high places.</>}
            description="Himalayan stories, trekking guides, motorcycle expeditions and field notes — written from decades on the trail and the road."
          />
          <div className="flex flex-wrap gap-2">
            {pkJournalCategories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 font-sans text-xs tracking-wide transition-all duration-300",
                  category === c
                    ? "border-copper bg-copper text-white"
                    : "border-basalt/25 text-basalt/60 hover:border-copper/60 hover:text-basalt",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {featured && (
          <button
            type="button"
            onClick={() => setOpenSlug(featured.slug)}
            className="group mt-12 grid w-full grid-cols-1 overflow-hidden rounded-sm border border-basalt/12 bg-white text-left transition-all duration-300 hover:shadow-xl hover:shadow-basalt/10 lg:grid-cols-2"
          >
            <div className="relative aspect-[3/2] w-full overflow-hidden bg-basalt lg:aspect-auto lg:h-full">
              <Image src={featured.cover} alt={featured.title} fill sizes="(max-width: 1024px) 90vw, 50vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-basalt/80 px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.12em] text-ivory backdrop-blur-sm">
                Featured · {featured.category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-3 font-sans text-[0.66rem] uppercase tracking-[0.12em] text-basalt/55">
                <span>{featured.date}</span>
                <span className="h-1 w-1 rounded-full bg-basalt/40" />
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{featured.readingTime}</span>
              </div>
              <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-basalt transition-colors group-hover:text-copper md:text-4xl">{featured.title}</h3>
              <p className="mt-4 font-sans text-base font-light leading-relaxed text-basalt/70">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.14em] text-copper">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </button>
        )}

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((a) => (
            <button
              key={a.slug}
              type="button"
              onClick={() => setOpenSlug(a.slug)}
              className="group flex w-full flex-col overflow-hidden rounded-sm border border-basalt/12 bg-white text-left transition-all duration-300 hover:border-copper/40 hover:shadow-lg hover:shadow-basalt/5"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden bg-basalt">
                <Image src={a.cover} alt={a.title} fill sizes="(max-width: 1280px) 45vw, 30vw" className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-basalt/80 px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.12em] text-ivory backdrop-blur-sm">{a.category}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 font-sans text-[0.66rem] uppercase tracking-[0.12em] text-basalt/55">
                  <span>{a.date}</span>
                  <span className="h-1 w-1 rounded-full bg-basalt/40" />
                  <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{a.readingTime}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl font-medium leading-snug text-basalt transition-colors group-hover:text-copper">{a.title}</h3>
                <p className="mt-2 line-clamp-2 font-sans text-sm font-light leading-relaxed text-basalt/65">{a.excerpt}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenSlug(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="max-h-[92svh] w-[94vw] max-w-3xl overflow-y-auto scroll-area-ivory rounded-sm border-basalt/15 bg-cream p-6 md:p-8"
        >
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          {active && (
            <article>
              <div className="relative -mx-1 h-56 w-full overflow-hidden rounded-sm md:h-72">
                <Image src={active.cover} alt={active.title} fill sizes="(max-width: 768px) 90vw, 720px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-basalt/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="rounded-full bg-copper px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.12em] text-white">{active.category}</span>
                  <h2 className="mt-3 font-serif text-3xl text-white md:text-4xl">{active.title}</h2>
                </div>
              </div>
              <div className="mt-7 space-y-5">
                <p className="font-sans text-base font-light leading-relaxed text-basalt/75 first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-5xl first-letter:leading-[0.8] first-letter:text-copper">
                  {active.body[0]}
                </p>
                {active.body.slice(1).map((p, i) => (
                  <p key={i} className="font-sans text-base font-light leading-relaxed text-basalt/75">{p}</p>
                ))}
              </div>
              {related.length > 0 && (
                <div className="mt-9 border-t border-basalt/15 pt-6">
                  <p className="eyebrow mb-4 text-copper">Related articles</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {related.map((r) => (
                      <button key={r.slug} type="button" onClick={() => setOpenSlug(r.slug)} className="group flex items-center gap-3 rounded-sm border border-basalt/15 p-3 text-left transition-colors hover:border-copper/40">
                        <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-sm bg-basalt">
                          <Image src={r.cover} alt={r.title} fill sizes="80px" className="object-cover" />
                        </div>
                        <span className="font-serif text-base leading-tight text-basalt group-hover:text-copper">{r.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-8 flex flex-col items-center gap-3 rounded-sm bg-basalt p-6 text-center">
                <p className="font-serif text-lg italic text-white">Want to live these stories?</p>
                <PkWhatsApp className="px-6 py-3 text-sm">Talk to the Parikrama team</PkWhatsApp>
              </div>
            </article>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
