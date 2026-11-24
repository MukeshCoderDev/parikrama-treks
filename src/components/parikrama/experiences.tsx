import { Star, ExternalLink, Quote } from "lucide-react";
import { pkConfig } from "@/lib/parikrama/config";
import { PkSectionHeading } from "@/components/parikrama/section-heading";

export function PkExperiences() {
  return (
    <section id="experiences" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <PkSectionHeading
              eyebrow="Traveller experiences"
              title={<>Real stories, where they belong.</>}
              description="We do not publish fabricated testimonials. Traveller reviews of Parikrama Treks & Expeditions live on TripAdvisor, where they are verified by the platform and written by the people who travelled with us."
            />
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={pkConfig.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-basalt px-6 py-3 font-sans text-sm font-medium text-white transition-all hover:bg-dark-basalt"
              >
                <Star className="h-4 w-4 text-copper" />
                Read reviews on TripAdvisor
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <span className="font-sans text-xs text-basalt/50">TripAdvisor · Parikrama Treks & Expeditions, Kathmandu</span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-sm border border-basalt/15 bg-white p-8">
              <Quote className="h-8 w-8 text-copper" />
              <p className="mt-4 font-serif text-xl italic leading-relaxed text-basalt/80">
                “Every review we earn is written by a traveller who completed a real journey with our team. We prefer it that way — and we invite you to read them in full on TripAdvisor before you decide to travel with us.”
              </p>
              <p className="mt-5 font-sans text-sm text-basalt/55">— The Parikrama Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
