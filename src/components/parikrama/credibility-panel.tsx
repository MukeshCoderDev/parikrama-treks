import { pkConfig } from "@/lib/parikrama/config";
import { cn } from "@/lib/utils";

/**
 * Hero credibility panel — an editorial company identity card.
 * Reads all credential values from the central `pkConfig` so the demo
 * registration number lives in ONE place. No green buttons, no hardcoded
 * numbers here.
 */
export function PkCredibilityPanel({ className }: { className?: string }) {
  const rows = [
    { label: "Experience", value: pkConfig.experienceYearsShort },
    { label: "Motorcycle Expeditions", value: `Since ${pkConfig.motorcycleSince}` },
    {
      label: "Registration / Licence",
      value: pkConfig.registrationNumber,
      accent: true,
      demo: !pkConfig.registrationVerified,
      demoLabel: pkConfig.registrationStatus,
    },
  ];

  return (
    <aside
      className={cn(
        "w-full max-w-xs rounded-sm border border-copper/25 bg-basalt/65 p-6 shadow-2xl shadow-black/50 backdrop-blur-xl md:p-7",
        className,
      )}
    >
      {/* Header row */}
      <div className="flex items-baseline justify-between border-b border-white/15 pb-4">
        <span className="eyebrow text-copper">The Expedition Company</span>
        <span className="font-serif text-xs italic text-ivory/70">est. Kathmandu</span>
      </div>

      {/* Identity */}
      <h2 className="mt-4 font-serif text-3xl font-medium text-white">PARIKRAMA</h2>
      <p className="mt-1 font-sans text-[0.7rem] uppercase tracking-[0.16em] text-ivory/55">
        Treks &amp; Expeditions Pvt. Ltd.
      </p>

      {/* Info rows */}
      <dl className="mt-5 space-y-3 font-sans">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-start justify-between gap-3">
              <dt className="text-[0.65rem] uppercase tracking-[0.14em] text-stone-parikrama">
                {r.label}
              </dt>
              <dd
                className={cn(
                  "text-right font-serif text-base text-white",
                  r.accent && "text-copper",
                )}
              >
                {r.value}
              </dd>
            </div>
            {r.demo && (
              <p className="mt-1 text-right text-[0.55rem] uppercase tracking-[0.14em] text-copper/60">
                {r.demoLabel}
              </p>
            )}
            <div className="mt-3 h-px bg-white/10" />
          </div>
        ))}
      </dl>

      {/* Statement */}
      <p className="mt-5 font-serif text-sm italic leading-relaxed text-ivory/80">
        “Decades of experience. A lifetime of Himalayan journeys.”
      </p>
    </aside>
  );
}
