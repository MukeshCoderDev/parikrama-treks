import Image from "next/image";
import { pkImages } from "@/lib/parikrama/images";
import { pkConfig } from "@/lib/parikrama/config";
import { PkSectionHeading } from "@/components/parikrama/section-heading";

const facts = [
  { value: pkConfig.establishedYear, label: "Established", sub: "Himalayan expedition company" },
  { value: pkConfig.motorcycleSince, label: "Motorcycle touring since", sub: "Royal Enfield expeditions" },
  { value: "Kathmandu", label: "Based in", sub: "Nepal — operating at the source" },
];

export function PkDifference() {
  return (
    <section id="difference" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-basalt">
              <Image
                src={pkImages.team}
                alt="Parikrama expedition team and guides in the Himalaya"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-basalt/50 to-transparent" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <PkSectionHeading
              eyebrow="The Parikrama difference"
              title={<>Experience is earned in the mountains.</>}
              description="For more than 25 years, Parikrama has been taking travellers deeper into the Himalayas — from remote trekking trails to legendary motorcycle routes across Nepal, Tibet and Bhutan. Every journey is shaped by local knowledge, experienced teams, guides, mechanics and a genuine spirit of exploration."
            />
            <dl className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-basalt/15 bg-basalt/15">
              {facts.map((f) => (
                <div key={f.label} className="bg-cream px-3 py-6 text-center md:px-4">
                  <dd className="font-serif text-3xl text-copper md:text-4xl">{f.value}</dd>
                  <dt className="eyebrow mt-2 text-basalt/60">{f.label}</dt>
                  <p className="mt-1 font-sans text-[0.7rem] leading-snug text-basalt/55">{f.sub}</p>
                </div>
              ))}
            </dl>
            <p className="mt-8 font-serif text-xl italic leading-relaxed text-basalt/70">
              “Real journeys. Experienced people. The Himalayas, explored with purpose.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
