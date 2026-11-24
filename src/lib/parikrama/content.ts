/**
 * Parikrama — editorial content: videos, journal, destinations.
 * All videos are real uploads from the verified @ParikramaTreksExpeditionPvtLtd
 * YouTube channel. No video titles are invented.
 */
import { pkImages } from "@/lib/parikrama/images";

// ---------- VIDEOS ----------
export type PkVideo = {
  id: string;
  youtubeId: string;
  title: string;
  featured?: boolean;
};

const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

export const pkVideos: PkVideo[] = [
  {
    id: "vf",
    youtubeId: "udTSWD_BaAg",
    title:
      "Upper Mustang Motorcycle Adventure — Ride to Nepal's Hidden Kingdom (4K)",
    featured: true,
  },
  {
    id: "v1",
    youtubeId: "hO_-E7oIE5k",
    title: "Motorcycle Tour Tibet — Mount Kailash & Everest Base Camp",
  },
  {
    id: "v2",
    youtubeId: "tVM30VJvHKM",
    title: "Our Guided Motorcycle Tour in Tibet — the ultimate Himalayan adventure",
  },
  {
    id: "v3",
    youtubeId: "l2P4mDXtq6Q",
    title:
      "Himalayan Motorbike Tour — Everest BC, Rongbu Monastery, Yamdrok, Shigatse, Lhasa",
  },
];

export const pkVideoThumb = (id: string) => ytThumb(id);
export const pkYtEmbed = (id: string) =>
  `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`;
export const pkYtWatch = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// ---------- JOURNAL ----------
export type PkArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  cover: string;
  body: string[];
};

export const pkJournalCategories = [
  "All",
  "Himalayan Stories",
  "Trekking Guides",
  "Motorcycle Expeditions",
  "Nepal Travel",
  "Tibet & Bhutan",
  "Expedition Preparation",
] as const;

export const pkArticles: PkArticle[] = [
  {
    slug: "motorcycle-upper-mustang-field-notes",
    title: "Field notes from riding Upper Mustang",
    excerpt:
      "A riding guide's account of the Trans-Himalayan desert, the walled city of Lo Manthang and what the road between Kagbeni and the Tibetan plateau actually feels like.",
    category: "Motorcycle Expeditions",
    date: "12 Mar 2025",
    readingTime: "8 min read",
    cover: pkImages.motoMustang,
    body: [
      "Upper Mustang is not like the rest of Nepal. The moment you cross the ridge above Kagbeni, the green folds of the Annapurna fall away and you ride into a rain-shadow desert of wind-carved canyons, red cliffs and a sky that feels impossibly large.",
      "We ride Royal Enfields — the right tool for these roads. The trail to Lo Manthang is part gravel, part stone, part nothing at all, and the support vehicle carries fuel, spares and a mechanic because there is nothing between the villages.",
      "Lo Manthang itself is a walled city. You enter through a single gate and the modern world quietly recedes — cave monasteries with 800-year-old murals, a king who still lives in the palace, and a wind that never quite stops.",
      "Riding here is slow. We pace the group, stop often, and never push the high passes in the afternoon wind. The journey is the point, not the destination.",
    ],
  },
  {
    slug: "planning-everest-base-camp",
    title: "Planning an Everest Base Camp trek",
    excerpt:
      "How we pace the classic Khumbu trek — acclimatisation, season, lodge choice, and what to carry versus what the crew handles.",
    category: "Trekking Guides",
    date: "28 Feb 2025",
    readingTime: "7 min read",
    cover: pkImages.ebc,
    body: [
      "Everest Base Camp is the trek most people have heard of, and it is still one of the best. The route through Sherpa villages, monasteries and the deep valley of the Khumbu is as rewarding as the altitude is serious.",
      "We build in two acclimatisation days — one in Namche, one in Dingboche. They are not optional. The trail gains more than 2,500 m from Lukha to Base Camp and the body needs time.",
      "Lodge-based trekking means warm beds and hot meals each night, but the rooms are simple and the nights are cold. A good sleeping bag matters more than anything in your pack.",
      "Season matters: March to May and October to November give the clearest conditions. We never rush the final push to Base Camp and Kala Patthar — it is the highest, slowest and most beautiful day of the trek.",
    ],
  },
  {
    slug: "tibet-kailash-pilgrimage",
    title: "Tibet, Kailash and the meaning of a kora",
    excerpt:
      "What it means to ride and walk the circuit of Mount Kailash — the most sacred mountain in Tibetan culture, shared by Buddhists, Hindus, Jains and Bon.",
    category: "Tibet & Bhutan",
    date: "10 Feb 2025",
    readingTime: "9 min read",
    cover: pkImages.tibet,
    body: [
      "Mount Kailash is not climbed. For thousands of years it has been circled on foot — a kora — by pilgrims of four religions who believe a single circuit washes away the sins of a lifetime.",
      "Our Tibet motorcycle circuit brings riders to the base of Kailash, and from Darchen we complete the three-day kora on foot. The crossing of the Drolma La pass at 5,630 m is the high point — physically and spiritually.",
      "Tibet demands respect. The plateau is high, dry and exposed. Our permits, support crew and pacing are built around the altitude, not around a schedule.",
      "Riding across Tibet to reach Kailash is an expedition in the truest sense — days of open road, nomad camps, monasteries and a silence that is hard to find anywhere else.",
    ],
  },
  {
    slug: "what-to-pack-motorcycle-expedition",
    title: "What to pack for a Himalayan motorcycle expedition",
    excerpt:
      "A practical gear list from two decades of Royal Enfield expeditions — riding kit, layering, tools and what the support vehicle carries so you don't have to.",
    category: "Expedition Preparation",
    date: "05 Jan 2025",
    readingTime: "6 min read",
    cover: pkImages.motoMain,
    body: [
      "A motorcycle expedition is not a trek and not a road trip — it is both. You need riding gear that protects you on gravel and layers that work from a 35°C valley to a 4,000 m pass in the same afternoon.",
      "We provide the bike, the mechanic, the fuel and the support vehicle. You bring riding jacket and trousers, boots, gloves, a good helmet and layered clothing underneath.",
      "The single most underrated item is a buff or neck tube — for dust, wind and sun. The single most overpacked is a heavy camera rig; the phone in your pocket is usually enough.",
      "We send every rider a full list before departure, tailored to the route and the season.",
    ],
  },
  {
    slug: "manaslu-restricted-area",
    title: "Manaslu and the restricted-area experience",
    excerpt:
      "Why the Manaslu circuit with the Tsum Valley detour is our most rewarding restricted-area trek — and how the permits, crew and pacing work.",
    category: "Himalayan Stories",
    date: "18 Dec 2024",
    readingTime: "8 min read",
    cover: pkImages.manaslu,
    body: [
      "Manaslu is what the Annapurna Circuit was thirty years ago — a genuine restricted-area journey through Tibetan Buddhist villages, ancient monasteries and a high pass that earns every metre of its 5,106 m.",
      "The Tsum Valley detour turns a circuit into an exploration. Mu Gompa, at the head of the valley, is one of the most remote monasteries you can reach on foot in Nepal.",
      "Restricted-area permits mean the route stays quiet. They also mean we plan well in advance — the crew, the permits, the contingency days. Nothing here is improvised.",
      "For trekkers who have already done Everest or Annapurna, Manaslu with Tsum is the natural next step.",
    ],
  },
  {
    slug: "bhutan-last-himalayan-kingdom",
    title: "Bhutan — riding the last Himalayan kingdom",
    excerpt:
      "A riding journey through Paro, Thimphu and Punakha — dzongs, the Dochula pass and the hike to Tiger's Nest monastery.",
    category: "Tibet & Bhutan",
    date: "22 Nov 2024",
    readingTime: "7 min read",
    cover: pkImages.bhutan,
    body: [
      "Bhutan measures itself in Gross National Happiness, and the slow, deliberate pace of travel here makes that idea feel less like a slogan and more like a fact.",
      "Our motorcycle route stays in the western valleys — Paro, Thimphu, Punakha and the Phobjikha valley — where the roads are engineered, the dzongs are extraordinary and the altitude stays manageable.",
      "Tiger's Nest — Taktsang Monastery — is the image everyone knows. We hike there on foot on a rest day, leaving the bikes below. It clings to a cliff 900 m above the Paro valley and it is worth every step.",
      "Bhutan's Sustainable Development Fee keeps tourism limited and intentional. We handle the visa, the fee and the arrangements; you bring the patience to travel a place that has chosen to stay itself.",
    ],
  },
];

// ---------- DESTINATIONS ----------
export type PkDestination = {
  id: "nepal" | "tibet" | "bhutan";
  name: string;
  tagline: string;
  image: string;
  intro: string;
  regions: { name: string; note: string }[];
};

export const pkDestinations: PkDestination[] = [
  {
    id: "nepal",
    name: "Nepal",
    tagline: "The heart of the Himalaya",
    image: pkImages.ebc,
    intro:
      "The deepest Himalayan experience — Everest, Annapurna, Manaslu, Kanchenjunga, Mustang and the restricted areas. We run both lodge-based treks and supported motorcycle expeditions across the country.",
    regions: [
      { name: "Everest region", note: "Base Camp, Gokyo, Cho La, the classic Khumbu." },
      { name: "Annapurna region", note: "Mardi Himal, sanctuary, circuit." },
      { name: "Langtang", note: "The closest high valley to Kathmandu." },
      { name: "Manaslu & Tsum", note: "Restricted-area circuit." },
      { name: "Kanchenjunga", note: "Remote far-eastern base camps." },
      { name: "Mustang", note: "Upper & Lower Mustang motorcycle adventures." },
      { name: "Restricted-area trekking", note: "Permitted, crew-supported journeys." },
      { name: "Peak climbing", note: "Trekking peaks and introductory mountaineering." },
    ],
  },
  {
    id: "tibet",
    name: "Tibet",
    tagline: "The high plateau",
    image: pkImages.tibet,
    intro:
      "Ride and travel across the Roof of the World — the north face of Everest, Mount Kailash and Lake Mansarovar, Lhasa and the friendship highway from Kathmandu.",
    regions: [
      { name: "Everest North Face", note: "Rongbuk and the northern base camp." },
      { name: "Kathmandu–Lhasa route", note: "The friendship highway." },
      { name: "Tibet motorcycle circuits", note: "Lhasa–Everest–Kailash expeditions." },
      { name: "Kailash & Mansarovar", note: "Sacred pilgrimage journeys." },
      { name: "Cultural & overland tours", note: "Monasteries, lakes and the plateau." },
    ],
  },
  {
    id: "bhutan",
    name: "Bhutan",
    tagline: "The last kingdom",
    image: pkImages.bhutan,
    intro:
      "The measured, deeply Buddhist kingdom of Bhutan — motorcycle adventures and cultural journeys through Paro, Thimphu, Punakha and Tiger's Nest monastery.",
    regions: [
      { name: "Bhutan motorcycle adventures", note: "Western valleys riding routes." },
      { name: "Cultural journeys", note: "Dzongs, monasteries and festivals." },
      { name: "Trekking & sightseeing", note: "Where offered and permitted." },
    ],
  },
];

export const pkTripadvisor =
  "https://www.tripadvisor.com/Attraction_Review-g293890-d2281689-Reviews-Parikrama_Treks_And_Expeditions-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_R.html";
