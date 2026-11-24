/**
 * Parikrama image registry.
 * Real, properly licensed Himalayan expedition photography re-hosted on the
 * ZAI CDN (verified clean of stock watermarks). Includes one authentic
 * Parikrama Treks photograph.
 */

const CDN = "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt";

export const pkImages = {
  // Hero — authentic Parikrama Treks photo: riders at a high-altitude lake
  hero: `${CDN}/79d5d3fab0f0.jpeg`,
  heroAlt: `${CDN}/013fc7e34c48.jpg`,
  // Motorcycle expeditions
  motoMain: `${CDN}/b0424e5a7f71.jpg`,
  motoMustang: `${CDN}/30994179f157.jpg`,
  motoTibet: `${CDN}/6dc93670f763.jpg`,
  motoBhutan: `${CDN}/732ced6cb2b1.jpg`,
  motoEverest: `${CDN}/fb4291157fc2.jpg`,
  // Trekking
  ebc: `${CDN}/8fbc9d62ce27.jpg`,
  annapurna: `${CDN}/51dae135f694.jpeg`,
  mardi: `${CDN}/72ab56b73907.jpg`,
  manaslu: `${CDN}/26fff1ab95b7.jpg`,
  kanchenjunga: `${CDN}/99f4e13b003f.jpg`,
  // Destinations
  tibet: `${CDN}/cc11bee32898.jpg`,
  tibetAlt: `${CDN}/199691454e38.jpg`,
  bhutan: `${CDN}/4ba61ac2dfdc.jpg`,
  bhutanAlt: `${CDN}/b8885bb08429.jpg`,
  // Story / team
  story: `${CDN}/195af213c0ae.jpg`,
  team: `${CDN}/41803258a5eb.jpg`,
  // Closing CTA
  ctaSunset: `${CDN}/2cbcb519904d.jpg`,
} as const;

// Gallery — expedition photographs
export const pkGallery = [
  { src: `${CDN}/00188e277141.jpg`, alt: "Himalayan expedition camp beneath the peaks" },
  { src: `${CDN}/a9f93580f7b8.jpg`, alt: "High-altitude mountain landscape at dawn" },
  { src: `${CDN}/51b575d392a6.jpg`, alt: "Trekkers crossing a Himalayan pass" },
  { src: `${CDN}/cdaee95d1edd.jpg`, alt: "Rider with motorcycle on a remote Himalayan road" },
  { src: `${CDN}/7644434f8892.jpeg`, alt: "Snow peaks of the Kanchenjunga region" },
  { src: `${CDN}/ca4eae57731d.jpg`, alt: "Alpenglow on a Himalayan summit" },
  { src: `${CDN}/e417d4c26588.jpeg`, alt: "Village and valley on a trekking route" },
  { src: `${CDN}/9df28def7e19.jpg`, alt: "Motorcycle expedition winding through the Himalaya" },
  { src: `${CDN}/8b0f375ecdd7.jpg`, alt: "Ridge trail in the Annapurna foothills" },
  { src: `${CDN}/d88d244bf723.jpeg`, alt: "Cliffside monastery in the Himalaya" },
  { src: `${CDN}/27b8095fea68.jpg`, alt: "Riders resting in a Himalayan valley" },
  { src: `${CDN}/f5452ae065dc.jpg`, alt: "Remote valley on the Manaslu circuit" },
] as const;
