import { ShieldCheck, FileText, Landmark, Award } from "lucide-react";
import { pkConfig } from "@/lib/parikrama/config";
import { PkSectionHeading } from "@/components/parikrama/section-heading";

type Credential = {
  icon: typeof Landmark;
  label: string;
  note: string;
  number?: string;
  status?: string;
  verified?: boolean;
};

// Registration and tourism licence are SEPARATE documents — each carries its
// own demo number + status, read from the central pkConfig so there is one
// source of truth. The remaining items are pending confirmation.
const credentials: Credential[] = [
  {
    icon: Landmark,
    label: "Government company registration",
    note: "Pvt. Ltd. registration",
    number: pkConfig.registrationNumber,
    status: pkConfig.registrationStatus,
    verified: pkConfig.registrationVerified,
  },
  {
    icon: FileText,
    label: "Department of Tourism licence",
    note: "Tourism operator licensing — a separate document from company registration",
    number: pkConfig.tourismLicenceNumber,
    status: pkConfig.tourismLicenceStatus,
    verified: pkConfig.tourismLicenceVerified,
  },
  { icon: Award, label: "TAAN membership", note: "Trekking Agencies Association of Nepal · pending confirmation" },
  { icon: Award, label: "Nepal Mountaineering Association", note: "NMA membership · pending confirmation" },
  { icon: ShieldCheck, label: "Nepal Tourism Board", note: "NTB affiliation · pending confirmation" },
  { icon: ShieldCheck, label: "Nepal Rastra Bank", note: "Foreign-currency authorisation · pending document" },
];

export function PkTrust() {
  return (
    <section id="trust" className="bg-basalt py-24 md:py-32">
      <div className="mx-auto max-w-[1340px] px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <PkSectionHeading
              light
              eyebrow="Trust & credentials"
              title={<>An established, accountable company.</>}
              description="Parikrama Treks & Expeditions Pvt. Ltd. is a registered Kathmandu company with more than 25 years of operation. The credentials below are listed honestly — each is marked for owner confirmation, and authentic documents will be displayed once verified."
            />
            <div className="mt-8 rounded-sm border border-copper/30 bg-dark-basalt p-5">
              <p className="eyebrow text-copper">Document status</p>
              <p className="mt-2 font-serif text-lg text-white">{pkConfig.licenceStatus}</p>
              <p className="mt-1 font-sans text-xs text-white/55">
                Registration and tourism-licence numbers shown elsewhere on this site are temporary demonstration values. We will publish the verified numbers and authentic logos the moment the official documents are supplied.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
              {credentials.map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label} className="bg-basalt p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-copper/40 text-copper">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-sans text-sm font-medium text-white">{c.label}</p>
                        <p className="mt-1 font-sans text-xs text-white/50">{c.note}</p>
                        {c.number && (
                          <p className="mt-2 font-serif text-base text-copper">
                            {c.number}
                            {!c.verified && (
                              <span className="ml-2 align-middle text-[0.55rem] uppercase tracking-[0.14em] text-copper/60">
                                {c.status}
                              </span>
                            )}
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 font-sans text-xs italic text-white/45">
              Company registration, tourism licensing, trade-association membership and foreign-currency authorisation are distinct legal matters. We list each separately and will publish authentic documents and logos as they are supplied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
