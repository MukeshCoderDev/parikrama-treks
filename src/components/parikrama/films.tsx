"use client";

import { useState } from "react";
import { Play, ArrowUpRight, Youtube, ExternalLink } from "lucide-react";
import {
  pkVideos,
  pkVideoThumb,
  pkYtEmbed,
  pkYtWatch,
  type PkVideo,
} from "@/lib/parikrama/content";
import { pkConfig } from "@/lib/parikrama/config";
import { PkSectionHeading } from "@/components/parikrama/section-heading";
import { PkSocialLinks } from "@/components/parikrama/social";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function PkFilms() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const featured = pkVideos.find((v) => v.featured) ?? pkVideos[0];
  const rest = pkVideos.filter((v) => v.id !== featured.id);
  const active = pkVideos.find((v) => v.youtubeId === activeId) ?? null;

  return (
    <section id="films" className="bg-basalt py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <PkSectionHeading
            light
            eyebrow="From the field — film room"
            title={<>The expedition, in motion.</>}
            description="Real films from Parikrama's YouTube channel — motorcycle expeditions across Mustang, Tibet and the high Himalaya. Tap any film to play."
          />
          <a
            href={pkConfig.youtubeChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 font-sans text-xs uppercase tracking-[0.12em] text-white transition-all hover:border-white/60 hover:bg-white/10"
          >
            <Youtube className="h-4 w-4 text-[#FF0000]" />
            YouTube Channel
          </a>
        </div>

        {/* Featured */}
        <button
          type="button"
          onClick={() => setActiveId(featured.youtubeId)}
          className="group relative mt-12 block h-[46svh] min-h-[320px] w-full overflow-hidden rounded-sm bg-basalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper md:h-[58svh]"
        >
          <img
            src={pkVideoThumb(featured.youtubeId)}
            alt={featured.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-basalt via-basalt/60 to-basalt/25" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-basalt/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#FF0000] group-hover:bg-[#FF0000] md:h-24 md:w-24">
              <Play className="h-7 w-7 fill-white text-white md:h-9 md:w-9" />
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 text-center md:p-10">
            <p className="eyebrow text-copper">Featured film</p>
            <h3 className="mx-auto mt-3 max-w-3xl font-serif text-2xl text-white md:text-4xl">{featured.title}</h3>
          </div>
        </button>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((v: PkVideo) => (
            <div key={v.id} className="group flex flex-col overflow-hidden rounded-sm border border-white/10 bg-dark-basalt transition-colors hover:border-copper/40">
              <button
                type="button"
                onClick={() => setActiveId(v.youtubeId)}
                className="group/card relative aspect-video w-full overflow-hidden bg-basalt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                aria-label={`Play: ${v.title}`}
              >
                <img
                  src={pkVideoThumb(v.youtubeId)}
                  alt={v.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-basalt/85 via-basalt/10 to-transparent" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-basalt/40 backdrop-blur-md transition-all duration-500 group-hover/card:scale-110 group-hover/card:bg-[#FF0000] group-hover/card:border-[#FF0000] md:h-14 md:w-14">
                  <Play className="h-4 w-4 fill-white text-white md:h-5 md:w-5" />
                </span>
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-basalt/70 px-2 py-0.5 text-[0.6rem] font-medium text-white backdrop-blur-sm">
                  <Youtube className="h-3 w-3 text-[#FF0000]" /> YouTube
                </span>
              </button>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 font-serif text-base font-medium leading-snug text-white transition-colors group-hover:text-copper">{v.title}</h3>
                <a
                  href={pkYtWatch(v.youtubeId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 self-start font-sans text-[0.7rem] uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-copper"
                >
                  Watch on YouTube
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="mt-12 flex flex-col items-center gap-5 border-t border-white/10 pt-10 text-center">
          <p className="font-serif text-2xl text-white md:text-3xl">Explore the full film collection.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={pkConfig.youtubeChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-6 py-3 font-sans text-sm font-medium text-white transition-all hover:bg-[#cc0000]"
            >
              <Youtube className="h-5 w-5" />
              Visit {pkConfig.youtubeHandle}
            </a>
            <PkSocialLinks iconClassName="h-5 w-5" />
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActiveId(null)}>
        <DialogContent
          aria-describedby={undefined}
          className="w-[94vw] max-w-4xl overflow-hidden rounded-sm border-white/10 bg-basalt p-0"
        >
          <DialogTitle className="sr-only">{active?.title}</DialogTitle>
          <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
            <p className="line-clamp-1 font-serif text-sm text-white/90">{active?.title}</p>
            <a
              href={active ? pkYtWatch(active.youtubeId) : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 font-sans text-[0.7rem] uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-copper"
            >
              YouTube
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="relative aspect-video w-full bg-black">
            {active && (
              <iframe
                src={pkYtEmbed(active.youtubeId)}
                title={active.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerated-sender; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
