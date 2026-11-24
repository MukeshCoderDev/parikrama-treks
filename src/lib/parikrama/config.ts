/**
 * Parikrama Treks & Expeditions — Central Site Configuration
 * Single source of truth for brand info, WhatsApp number, social links.
 */

export const pkConfig = {
  brand: "Parikrama Treks & Expeditions",
  brandShort: "Parikrama",
  tagline: "Beyond the ordinary. Into the Himalayas.",
  establishedYear: "1998",
  motorcycleSince: "2001",
  location: "Kathmandu, Nepal",
  officeArea: "Budhanilkantha, Kathmandu",
  experienceYears: "25+ years of Himalayan expedition experience",
  experienceYearsShort: "25+ Years",
  // WhatsApp — primary conversion channel (international format, no +).
  whatsappNumber: "9779851056547",
  youtubeChannel:
    "https://www.youtube.com/@ParikramaTreksExpeditionPvtLtd/videos",
  youtubeHandle: "@ParikramaTreksExpeditionPvtLtd",
  tripadvisor:
    "https://www.tripadvisor.com/Attraction_Review-g293890-d2281689-Reviews-Parikrama_Treks_And_Expeditions-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_R.html",
  // ── Credentials — DEMO placeholders ──────────────────────────────────
  // These are temporary demonstration values. Company registration and the
  // Department of Tourism licence are SEPARATE legal documents and are stored
  // as separate fields. When the client supplies the real documents, replace
  // the `number` values here and set `verified: true` — the change flows to
  // the hero credibility panel and the trust section automatically.
  // Never present 000000 as a verified government licence.
  registrationNumber: "000000",
  registrationVerified: false,
  registrationStatus: "DEMO — PENDING DOCUMENT VERIFICATION",
  tourismLicenceNumber: "000000",
  tourismLicenceVerified: false,
  tourismLicenceStatus: "DEMO — PENDING DOCUMENT VERIFICATION",
  // Kept as a concise status line for the footer.
  licenceStatus: "DEMO — PENDING DOCUMENT VERIFICATION",
  social: {
    facebook: "https://www.facebook.com/parikramatrek",
    x: "https://x.com/parikramatreks1",
    youtube:
      "https://www.youtube.com/@ParikramaTreksExpeditionPvtLtd/videos",
  },
} as const;

/** Build a context-aware WhatsApp deep link. */
export function pkWhatsApp(message: string): string {
  const num = pkConfig.whatsappNumber.replace(/\D/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/** Generic greeting used across non-package CTAs. */
export const pkDefaultWhatsAppMessage =
  "Namaste Parikrama Team! I visited your website and would like to plan a Himalayan journey. Could you help me explore the right route, season and expedition?";

export const pkNav = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Nepal", href: "#nepal" },
  { label: "Tibet", href: "#tibet" },
  { label: "Bhutan", href: "#bhutan" },
  { label: "Motorcycle", href: "#motorcycle" },
  { label: "Journal", href: "#journal" },
  { label: "Films", href: "#films" },
  { label: "Contact", href: "#contact" },
] as const;
