"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { pkNav, pkWhatsApp, pkDefaultWhatsAppMessage } from "@/lib/parikrama/config";
import { PkSocialLinks } from "@/components/parikrama/social";
import { cn } from "@/lib/utils";

function PkLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 52 36" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 32L16 8l7 11 5-7 22 20H2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M13.5 12.5l2.5-4 3 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="42" cy="6" r="2" fill="currentColor" />
    </svg>
  );
}

export function PkNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = pkNav.map((l) => l.href.slice(1));
      const y = window.scrollY + 120;
      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(href.slice(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        scrolled
          ? "bg-basalt/95 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-gradient-to-b from-basalt/70 to-transparent py-5",
      )}
    >
      <nav className="mx-auto flex max-w-[1340px] items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#home"
          onClick={(e) => onNav(e, "#home")}
          className="flex shrink-0 items-center gap-3 text-white"
        >
          <PkLogo className="h-7 w-10 text-copper" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-[0.14em] md:text-lg">
              PARIKRAMA
            </span>
            <span className="eyebrow mt-1 text-[0.5rem] text-white/70 md:text-[0.55rem]">
              TREKS &amp; EXPEDITIONS · EST. 1998
            </span>
          </span>
        </a>

        <ul className="hidden flex-1 items-center justify-center gap-4 whitespace-nowrap lg:flex xl:gap-5">
          {pkNav.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => onNav(e, link.href)}
                  className={cn(
                    "group relative whitespace-nowrap font-sans text-[0.78rem] font-medium tracking-wide transition-colors duration-300 xl:text-[0.8rem]",
                    isActive ? "text-white" : "text-white/85 hover:text-white",
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-copper transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          <PkSocialLinks className="hidden xl:flex" iconClassName="h-[1.05rem] w-[1.05rem]" />
          <a
            href={pkWhatsApp(pkDefaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-copper px-5 py-2.5 font-sans text-xs font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-copper-light sm:inline-flex"
          >
            Plan Your Journey
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={cn("fixed inset-0 z-50 lg:hidden", open ? "pointer-events-auto" : "pointer-events-none")} aria-hidden={!open}>
        <div
          className={cn("absolute inset-0 bg-black/60 transition-opacity duration-300", open ? "opacity-100" : "opacity-0")}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-basalt px-7 py-7 shadow-2xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <PkLogo className="h-6 w-9 text-copper" />
              <span className="font-serif text-sm font-semibold tracking-[0.14em]">PARIKRAMA</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-10 flex flex-col gap-1">
            {pkNav.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => onNav(e, link.href)}
                  className="block border-b border-white/10 py-4 font-serif text-2xl text-white/85 transition-colors hover:text-copper"
                >
                  <span className="mr-3 text-xs text-copper/70">0{i + 1}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-6">
            <PkSocialLinks iconClassName="h-5 w-5" />
            <a
              href={pkWhatsApp(pkDefaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-copper px-6 py-3 font-sans text-sm font-medium text-white"
            >
              Plan Your Journey
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
