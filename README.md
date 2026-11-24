# Parikrama Treks & Expeditions — Website

A premium, cinematic editorial website for **Parikrama Treks & Expeditions Pvt. Ltd.** — an established Himalayan expedition company in Kathmandu, Nepal (since 1998).

Built with **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + shadcn/ui**.

---

## Quick start (VS Code)

1. **Unzip** and open the folder in VS Code (`File → Open Folder`).
2. Terminal (`Ctrl + \``):
   ```bash
   npm install      # or: bun install
   ```
3. Start the dev server:
   ```bash
   npm run dev      # or: bun run dev
   ```
4. Open **http://localhost:3000**.

> Requires Node.js 18.18+ (or Bun). Dev server runs on port 3000.

---

## What's wired in

- **Structured package catalogue** — 10 journeys (Nepal trekking + motorcycle expeditions) with day-by-day itineraries, prices, inclusions/exclusions, permits. Each opens a detail dialog.
- **Context-aware WhatsApp** — every package enquiry opens WhatsApp (`+977 9851056547`) with a message that includes the specific package name.
- **Real YouTube films** — 4 videos from the `@ParikramaTreksExpeditionPvtLtd` channel, with a modal player.
- **Destinations** — Nepal, Tibet, Bhutan sections with regions and packages.
- **Hero credibility panel** — translucent company identity card (Experience, Motorcycle since 2001, Registration/Licence).
- **Trust section** — credentials listed honestly, each marked pending.

---

## The 3 files that matter for editing

### 1. `src/lib/parikrama/config.ts` — brand, WhatsApp, credentials
- WhatsApp number (`9779851056547`)
- **Demo credentials** (`registrationNumber`, `tourismLicenceNumber` = `"000000"`, with `registrationStatus`/`tourismLicenceStatus`). Replace these + set `verified: true` when the real documents arrive — updates the hero panel AND trust section automatically.
- Social links, established year, location.

### 2. `src/lib/parikrama/packages.ts` — the journey catalogue
- 10 packages with id, country, duration, price (`verifyPrice: true`), itinerary, inclusions, exclusions, permits, and a context-aware `whatsappMessage`.
- Prices are research-stage values from the existing website — confirm with the owner before publishing.

### 3. `src/lib/parikrama/content.ts` — videos, journal, destinations
- YouTube video IDs + titles (real, from the channel).
- Journal articles.
- Nepal / Tibet / Bhutan destination data.

### `src/lib/parikrama/images.ts` — photography
- Real Himalayan expedition photos (CDN-hosted). Includes one authentic Parikrama Treks photograph.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts (Cormorant Garamond + Inter), SEO, JSON-LD
│   ├── page.tsx          # Homepage — all sections
│   ├── globals.css       # Parikrama palette: basalt, copper, forest, ivory, stone
│   └── sitemap.ts
├── components/
│   └── parikrama/        # 23 components (navbar, hero, credibility-panel, packages-section, package-detail, films, journal, gallery, trust, contact, footer, …)
└── lib/
    └── parikrama/        # config, packages, content, images
```

---

## Brand palette
- Basalt charcoal `#242522` · Warm ivory `#F1E9DC` · Muted copper `#B87545`
- Mountain stone `#8D887D` · Deep forest `#39473D`

## Notes
- **No backend required** — fully static content.
- WhatsApp is the primary conversion channel throughout.
- All credential numbers are DEMO placeholders pending client documents.

---

© Parikrama Treks & Expeditions Pvt. Ltd. · Established 1998 · Kathmandu, Nepal
