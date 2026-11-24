import Image from "next/image";
import { pkImages } from "@/lib/parikrama/images";
import { pkConfig } from "@/lib/parikrama/config";
import { PkSectionHeading } from "@/components/parikrama/section-heading";
import { PkWhatsApp } from "@/components/parikrama/whatsapp";

export function PkOurStory() {
  return (
    <section id="story" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-basalt">
              <Image
                src={pkImages.story}
                alt="Kathmandu — the city Parikrama calls home"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-basalt/50 to-transparent" />
            </div>
            <p className="mt-4 font-serif text-sm italic text-basalt/60">
              Kathmandu, Nepal — our home and operations base since {pkConfig.establishedYear}.
            </p>
          </div>
          <div className="lg:col-span-7 lg:pt-8">
            <PkSectionHeading
              eyebrow="Our story"
              title={<>Rooted in the Himalayas since {pkConfig.establishedYear}.</>}
            />
            <div className="mt-7 space-y-5 font-sans text-base font-light leading-relaxed text-basalt/75">
              <p>
                Parikrama Treks &amp; Expeditions was founded in Kathmandu in {pkConfig.establishedYear} as a
                specialist Himalayan expedition company — born from a genuine desire to take travellers
                deeper into the mountains than a standard itinerary allows.
              </p>
              <p>
                In {pkConfig.motorcycleSince}, we began organising motorcycle touring operations across the
                Himalaya, building the logistics, mechanic support and route expertise that long-distance
                Royal Enfield expeditions demand. Today, motorcycle journeys across Nepal, Tibet and Bhutan
                remain a defining part of who we are.
              </p>
              <p>
                Our work is built on local knowledge, experienced guides, mechanics and support crews, and a
                commitment to responsible, well-planned expeditions. We do not chase volume — we plan each
                journey carefully and run it properly.
              </p>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-basalt/15 bg-basalt/15">
              {[
                { v: "25+", l: "Years operating" },
                { v: "3", l: "Himalayan countries" },
                { v: "1998", l: "Founded in Kathmandu" },
              ].map((s) => (
                <div key={s.l} className="bg-cream px-3 py-5 text-center">
                  <dd className="font-serif text-3xl text-copper md:text-4xl">{s.v}</dd>
                  <dt className="eyebrow mt-2 text-basalt/55">{s.l}</dt>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <PkWhatsApp className="px-7 py-3.5 text-sm">Plan a journey with our team</PkWhatsApp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
