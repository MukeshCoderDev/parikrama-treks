import { MapPin, MessageCircle, Globe, ExternalLink } from "lucide-react";
import { pkConfig } from "@/lib/parikrama/config";
import { PkSectionHeading } from "@/components/parikrama/section-heading";
import { PkWhatsApp } from "@/components/parikrama/whatsapp";
import { PkSocialLinks } from "@/components/parikrama/social";

export function PkContact() {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <PkSectionHeading
              eyebrow="Contact"
              title={<>Speak directly with our team.</>}
              description="The simplest way to begin is a direct WhatsApp message. Tell us where you want to go — Nepal, Tibet or Bhutan, trekking or motorcycle — and we’ll help you plan the right journey."
            />
            <div className="mt-9">
              <PkWhatsApp className="px-8 py-4 text-sm md:text-base">Start a WhatsApp conversation</PkWhatsApp>
              <p className="mt-3 font-sans text-xs text-basalt/55">
                Telephone numbers, email addresses and the exact Google Maps location are being verified with the client and will be published once confirmed.
              </p>
            </div>
            <div className="mt-8 border-t border-basalt/20 pt-6">
              <p className="eyebrow mb-4 text-basalt/55">Follow & message</p>
              <PkSocialLinks onDark={false} iconClassName="h-6 w-6" />
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm border border-basalt/15 bg-basalt p-8 text-ivory md:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-10 translate-x-10 rounded-full bg-copper/15 blur-3xl" />
            <p className="eyebrow text-copper">The company</p>
            <h3 className="mt-3 font-serif text-2xl font-medium text-white md:text-3xl">{pkConfig.brand}</h3>
            <p className="mt-2 font-sans text-sm font-light text-white/55">Pvt. Ltd. · {pkConfig.experienceYears}</p>

            <dl className="mt-8 space-y-5 font-sans">
              <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper/40 text-copper"><MapPin className="h-4 w-4" /></span>
                <div>
                  <dt className="eyebrow text-white/45">Location</dt>
                  <dd className="mt-1 font-serif text-lg text-white">{pkConfig.location}</dd>
                  <dd className="font-sans text-xs text-white/55">{pkConfig.officeArea}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper/40 text-copper"><MessageCircle className="h-4 w-4" /></span>
                <div>
                  <dt className="eyebrow text-white/45">WhatsApp</dt>
                  <dd className="mt-1 font-serif text-lg text-white">+{pkConfig.whatsappNumber}</dd>
                  <dd className="font-sans text-xs text-white/55">Primary contact · replies personally</dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper/40 text-copper"><Globe className="h-4 w-4" /></span>
                <div>
                  <dt className="eyebrow text-white/45">Established</dt>
                  <dd className="mt-1 font-serif text-lg text-white">{pkConfig.establishedYear} · Kathmandu, Nepal</dd>
                  <dd className="font-sans text-xs text-white/55">Motorcycle touring since {pkConfig.motorcycleSince}</dd>
                </div>
              </div>
            </dl>

            <a
              href={pkConfig.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-[0.12em] text-white/60 transition-colors hover:text-copper"
            >
              Read reviews on TripAdvisor
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
