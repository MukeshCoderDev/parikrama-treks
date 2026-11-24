"use client";

import { pkConfig, pkWhatsApp, pkDefaultWhatsAppMessage } from "@/lib/parikrama/config";
import { PkSocialLinks } from "@/components/parikrama/social";
import { WaIcon } from "@/components/parikrama/whatsapp";

function PkLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 36" className={className} fill="none" aria-hidden="true">
      <path d="M2 32L16 8l7 11 5-7 22 20H2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M13.5 12.5l2.5-4 3 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="42" cy="6" r="2" fill="currentColor" />
    </svg>
  );
}

export function PkFooter() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };
  return (
    <footer className="mt-auto bg-basalt text-ivory">
      <div className="mx-auto max-w-[1340px] px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <PkLogo className="h-7 w-10 text-copper" />
              <span className="flex flex-col leading-none">
                <span className="font-serif text-lg font-semibold tracking-[0.14em] text-white">PARIKRAMA</span>
                <span className="eyebrow mt-1 text-[0.5rem] text-white/45">TREKS &amp; EXPEDITIONS · EST. {pkConfig.establishedYear}</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm font-sans text-sm font-light leading-relaxed text-white/60">
              An established Himalayan expedition company based in Kathmandu — taking travellers deeper into Nepal, Tibet and Bhutan since {pkConfig.establishedYear}, on foot and on motorcycle.
            </p>
            <div className="mt-6">
              <a
                href={pkWhatsApp(pkDefaultWhatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 font-sans text-xs font-medium text-white transition-all hover:bg-[#1ebe5a]"
              >
                <WaIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5 text-copper">Explore</p>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Story", href: "#story" },
                { label: "Nepal", href: "#nepal" },
                { label: "Tibet", href: "#tibet" },
                { label: "Bhutan", href: "#bhutan" },
                { label: "Motorcycle", href: "#motorcycle" },
                { label: "Journal", href: "#journal" },
                { label: "Films", href: "#films" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => scrollTo(e, l.href)} className="font-sans text-sm text-white/65 transition-colors hover:text-copper">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow mb-5 text-copper">The company</p>
            <dl className="space-y-3 font-sans text-sm text-white/65">
              <div className="flex justify-between border-b border-white/8 pb-3"><dt className="text-white/45">Location</dt><dd className="text-white">{pkConfig.location}</dd></div>
              <div className="flex justify-between border-b border-white/8 pb-3"><dt className="text-white/45">WhatsApp</dt><dd className="text-white">+{pkConfig.whatsappNumber}</dd></div>
              <div className="flex justify-between border-b border-white/8 pb-3"><dt className="text-white/45">Established</dt><dd className="text-white">{pkConfig.establishedYear}</dd></div>
              <div className="flex justify-between"><dt className="text-white/45">Motorcycle since</dt><dd className="text-white">{pkConfig.motorcycleSince}</dd></div>
            </dl>
            <div className="mt-6">
              <p className="eyebrow mb-3 text-copper">Follow</p>
              <PkSocialLinks iconClassName="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
          <p className="font-sans text-xs text-white/40">© {new Date().getFullYear()} {pkConfig.brand} Pvt. Ltd. All rights reserved.</p>
          <p className="font-sans text-xs text-white/40">{pkConfig.licenceStatus}</p>
        </div>
      </div>
    </footer>
  );
}
