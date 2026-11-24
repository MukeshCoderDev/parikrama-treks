import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { pkImages } from "@/lib/parikrama/images";
import { PkWhatsApp } from "@/components/parikrama/whatsapp";
import { PkSocialLinks } from "@/components/parikrama/social";

export function PkFinalCta() {
  return (
    <section className="relative overflow-hidden bg-basalt">
      <Image src={pkImages.ctaSunset} alt="Himalayan expedition landscape at golden hour" fill sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-basalt/92 via-basalt/60 to-basalt/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-basalt/85 to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-[1340px] flex-col items-center gap-8 px-5 py-24 text-center md:px-8 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5 text-copper">Your next chapter</p>
          <h2 className="display-hero text-white">
            <span className="block text-[clamp(2.2rem,6vw,4.5rem)]">YOUR NEXT HIMALAYAN</span>
            <span className="block text-[clamp(2.2rem,6vw,4.5rem)]"><span className="text-copper italic">STORY STARTS HERE.</span></span>
          </h2>
          <p className="mx-auto mt-6 max-w-md font-sans text-base font-light text-white/80 md:text-lg">
            Tell us what kind of journey you’re dreaming of. Our team will help you explore the right route, season and expedition.
          </p>
        </div>
        <PkWhatsApp className="px-8 py-4 text-sm md:text-base">
          Start a WhatsApp conversation
          <ArrowRight className="h-4 w-4" />
        </PkWhatsApp>
        <div className="flex flex-col items-center gap-3 border-t border-white/15 pt-8 md:flex-row md:gap-8">
          <p className="eyebrow text-white/50">Follow Parikrama</p>
          <span className="hidden h-px w-10 bg-white/20 md:block" />
          <PkSocialLinks iconClassName="h-5 w-5" />
        </div>
      </div>
    </section>
  );
}
