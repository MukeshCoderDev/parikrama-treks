"use client";

import { packages } from "@/lib/parikrama/packages";
import { pkImages } from "@/lib/parikrama/images";
import { PkPackagesSection } from "@/components/parikrama/packages-section";

export function PkMotorcycle() {
  const moto = packages.filter((p) => p.category === "Motorcycle");
  return (
    <PkPackagesSection
      id="motorcycle"
      bg="basalt"
      eyebrow="Motorcycle expeditions"
      title={<>Some roads lead beyond the map.</>}
      description="Royal Enfield expeditions across the Trans-Himalaya — Mustang's desert canyons, the friendship highway into Tibet, the north face of Everest, and the last kingdom of Bhutan. Fully supported with a mechanic, backup vehicle and experienced riding guides."
      image={pkImages.motoMain}
      imageAlt="Royal Enfield motorcycle on a misty Himalayan mountain trail"
      pkgs={moto}
    />
  );
}
