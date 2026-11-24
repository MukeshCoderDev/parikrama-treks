/**
 * Parikrama — Structured Package Catalogue
 * ------------------------------------------
 * Every package has a unique id and structured fields (destination, duration,
 * category, price, itinerary, inclusions, exclusions) so the data can later
 * power WhatsApp AI automation.
 *
 * PRICES are research-stage values taken from the existing company website.
 * They are marked `verifyPrice: true` and MUST be confirmed by the owner
 * before publication. Nothing is invented.
 */

import { pkImages } from "@/lib/parikrama/images";

export type Difficulty = "Moderate" | "Challenging" | "Strenuous";

export type Package = {
  id: string;
  name: string;
  country: "Nepal" | "Tibet" | "Bhutan";
  region: string;
  category: "Trekking" | "Motorcycle";
  duration: string;
  durationDays: number;
  priceFrom: number; // USD
  verifyPrice: boolean;
  image: string;
  difficulty: Difficulty;
  season: string;
  maxElevation: string;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; detail: string }[];
  inclusions: string[];
  exclusions: string[];
  permits: string[];
  accommodation: string;
  transport: string;
  /** Context-aware WhatsApp enquiry message for this package. */
  whatsappMessage: string;
};

const greeting = "Namaste Parikrama Team!";

export const packages: Package[] = [
  // ---------------- NEPAL TREKKING ----------------
  {
    id: "mardi-himal-base-camp",
    name: "Annapurna Mardi Himal Base Camp Trek",
    country: "Nepal",
    region: "Annapurna",
    category: "Trekking",
    duration: "10 days",
    durationDays: 10,
    priceFrom: 1300,
    verifyPrice: true,
    image: "",
    difficulty: "Moderate",
    season: "Mar–May · Oct–Nov",
    maxElevation: "4,500 m",
    description:
      "A shorter, quieter Annapurna trek to the base of Mardi Himal — ridge walking above the Modi Khola valley with close views of Machapuchare and the Annapurna massif. Ideal as a first Himalayan trek or a brief, rewarding escape.",
    highlights: [
      "Mardi Himal Base Camp (4,500 m)",
      "Ridge trail with Machapuchare views",
      "Quiet route away from the main Annapurna crowds",
      "Sunrise over the Annapurna sanctuary",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Arrival, briefing and equipment check." },
      { day: 2, title: "Fly to Pokhara", detail: "Short flight to Pokhara on Phewa Lake." },
      { day: 3, title: "Drive to Kande & trek to Australian Camp", detail: "Begin the trek through forested ridges." },
      { day: 4, title: "Trek to Forest Camp", detail: "Enter dense rhododendron and pine forest." },
      { day: 5, title: "Trek to High Camp", detail: "Climb above the treeline to open ridge views." },
      { day: 6, title: "Mardi Himal Base Camp & back to High Camp", detail: "Reach base camp beneath Machapuchare." },
      { day: 7, title: "Trek to Siding", detail: "Descend through villages and terraced fields." },
      { day: 8, title: "Trek to Lumre & drive to Pokhara", detail: "Return to Pokhara for a rest evening." },
      { day: 9, title: "Fly to Kathmandu", detail: "Return flight and free afternoon." },
      { day: 10, title: "Departure", detail: "Transfer to the international airport." },
    ],
    inclusions: [
      "Airport transfers in Kathmandu",
      "Kathmandu–Pokhara flights",
      "Teahouse lodge accommodation during trek",
      "All meals on trek",
      "Licensed guide and porter support",
      "Annapurna conservation permits",
    ],
    exclusions: [
      "International flights",
      "Nepal visa",
      "Travel insurance",
      "Personal gear",
      "Drinks and items of a personal nature",
    ],
    permits: ["Annapurna Conservation Area Permit (ACAP)", "TIMS Card"],
    accommodation: "Teahouse lodges (twin-share)",
    transport: "Domestic flights, private jeep",
    whatsappMessage: `${greeting} I am interested in the Mardi Himal Base Camp Trek. Could you share the latest departure dates, inclusions and booking details?`,
  },
  {
    id: "everest-circuit-gokyo-cho-la",
    name: "Everest Circuit with Gokyo and Cho La",
    country: "Nepal",
    region: "Everest",
    category: "Trekking",
    duration: "18 days",
    durationDays: 18,
    priceFrom: 1750,
    verifyPrice: true,
    image: "",
    difficulty: "Strenuous",
    season: "Mar–May · Oct–Nov",
    maxElevation: "5,535 m",
    description:
      "The classic Everest circuit combining Base Camp, Kala Patthar, the Gokyo Lakes and the Cho La pass — the fullest loop through the Khumbu with five of the world's highest peaks in view.",
    highlights: [
      "Everest Base Camp (5,364 m)",
      "Kala Patthar sunrise (5,535 m)",
      "Gokyo Lakes & Gokyo Ri",
      "Cho La pass crossing (5,420 m)",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Arrival and trek briefing." },
      { day: 2, title: "Fly to Lukla & trek to Phakding", detail: "Begin the Khumbu trail." },
      { day: 3, title: "Trek to Namche Bazaar", detail: "Acclimatisation gateway." },
      { day: 4, title: "Acclimatisation in Namche", detail: "Rest and short hike." },
      { day: 5, title: "Trek to Tengboche", detail: "Tengboche Monastery." },
      { day: 6, title: "Trek to Dingboche", detail: "Climb into the Imja valley." },
      { day: 7, title: "Acclimatisation in Dingboche", detail: "Rest day." },
      { day: 8, title: "Trek to Lobuche", detail: "Above the treeline." },
      { day: 9, title: "Everest Base Camp & Gorak Shep", detail: "Reach Base Camp." },
      { day: 10, title: "Kala Patthar & trek to Dzongla", detail: "Sunrise on Everest." },
      { day: 11, title: "Cross Cho La to Gokyo", detail: "High pass crossing." },
      { day: 12, title: "Gokyo Ri & lakes", detail: "Fifth lake and viewpoint." },
      { day: 13, title: "Trek to Namche", detail: "Long descent." },
      { day: 14, title: "Trek to Lukla", detail: "Final trail day." },
      { day: 15, title: "Fly to Kathmandu", detail: "Return flight." },
      { day: 16, title: "Reserve / contingency day", detail: "Buffer for weather." },
      { day: 17, title: "Free day in Kathmandu", detail: "Rest and explore." },
      { day: 18, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: [
      "Domestic flights Kathmandu–Lukla",
      "Teahouse accommodation",
      "Meals on trek",
      "Guide and porter support",
      "Sagarmatha National Park permit & TIMS",
    ],
    exclusions: ["International flights", "Visa", "Insurance", "Personal gear"],
    permits: ["Sagarmatha National Park Permit", "TIMS Card", "Local Khumbu Pasang Lhamu permit"],
    accommodation: "Teahouse lodges",
    transport: "Domestic flights, walking",
    whatsappMessage: `${greeting} I am interested in the Everest Circuit with Gokyo and Cho La. Please share the latest departure dates, availability, detailed itinerary and pricing.`,
  },
  {
    id: "kanchenjunga-north-south",
    name: "Kanchenjunga North and South Base Camp",
    country: "Nepal",
    region: "Kanchenjunga",
    category: "Trekking",
    duration: "24 days",
    durationDays: 24,
    priceFrom: 2499,
    verifyPrice: true,
    image: "",
    difficulty: "Strenuous",
    season: "Apr–May · Oct–Nov",
    maxElevation: "5,143 m",
    description:
      "A long, remote expedition to the north and south base camps of the world's third-highest mountain — pristine wilderness, glaciers and far-eastern Himalayan culture few travellers reach.",
    highlights: [
      "Kanchenjunga North Base Camp (Pangpema)",
      "South Base Camp (Yalung)",
      "Sele La & Sinion La high passes",
      "Untouched far-eastern Nepal",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Briefing." },
      { day: 2, title: "Fly to Bhadrapur & drive to Taplejung", detail: "Travel to the trailhead." },
      { day: 3, title: "Drive to Sekathum", detail: "Begin the approach." },
      { day: 4, title: "Trek to Amjilosa", detail: "Enter the Tamur valley." },
      { day: 5, title: "Trek to Gyabla", detail: "Forest and river trails." },
      { day: 6, title: "Trek to Ghunsa", detail: "Tibetan village." },
      { day: 7, title: "Acclimatisation in Ghunsa", detail: "Rest day." },
      { day: 8, title: "Trek to Kambachen", detail: "Above the treeline." },
      { day: 9, title: "Trek to Lhonak", detail: "Glacier views." },
      { day: 10, title: "North Base Camp (Pangpema)", detail: "5,143 m." },
      { day: 11, title: "Trek back to Ghunsa", detail: "Descent." },
      { day: 12, title: "Cross Sele La to Sele Le", detail: "High pass." },
      { day: 13, title: "Trek to Tseram", detail: "South side." },
      { day: 14, title: "Trek to Ramche", detail: "Approach south base camp." },
      { day: 15, title: "South Base Camp (Yalung)", detail: "Glacier amphitheatre." },
      { day: 16, title: "Trek to Torongtan", detail: "Begin return." },
      { day: 17, title: "Trek to Yamphudin", detail: "Cross passes." },
      { day: 18, title: "Trek to Mamangkhe", detail: "Villages." },
      { day: 19, title: "Trek to Khebang", detail: "Lower valleys." },
      { day: 20, title: "Drive to Bhadrapur", detail: "Exit road." },
      { day: 21, title: "Fly to Kathmandu", detail: "Return." },
      { day: 22, title: "Contingency day", detail: "Buffer." },
      { day: 23, title: "Free day", detail: "Rest." },
      { day: 24, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: [
      "Flights Kathmandu–Bhadrapur",
      "Camping & teahouse accommodation",
      "Full support crew & porters",
      "Meals, guide",
      "Kanchenjunga restricted-area permit",
    ],
    exclusions: ["International flights", "Visa", "Insurance", "Personal gear"],
    permits: ["Kanchenjunga Conservation Area Permit", "Restricted Area Permit"],
    accommodation: "Camping & basic teahouses",
    transport: "Flights, jeep, walking",
    whatsappMessage: `${greeting} I am interested in the Kanchenjunga North & South Base Camp trek. Please share the latest departure dates, availability and full itinerary.`,
  },
  {
    id: "manaslu-tsum-valley",
    name: "Manaslu Tsum Valley Trek",
    country: "Nepal",
    region: "Manaslu",
    category: "Trekking",
    duration: "20 days",
    durationDays: 20,
    priceFrom: 2299,
    verifyPrice: true,
    image: "",
    difficulty: "Strenuous",
    season: "Mar–May · Sep–Nov",
    maxElevation: "5,106 m",
    description:
      "A restricted-area circuit through the Tsum Valley and around Manaslu — Tibetan Buddhist culture, ancient monasteries and the high Larke pass with dramatic Himalayan scenery throughout.",
    highlights: [
      "Tsum Valley — the 'hidden valley'",
      "Larke Pass (5,106 m)",
      "Manaslu Base Camp views",
      "Mu Gompa & ancient monasteries",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Briefing." },
      { day: 2, title: "Drive to Soti Khola", detail: "Long road to the trailhead." },
      { day: 3, title: "Trek to Machha Khola", detail: "Budhi Gandaki valley." },
      { day: 4, title: "Trek to Jagat", detail: "Enter restricted area." },
      { day: 5, title: "Trek to Lokpa", detail: "Branch into Tsum Valley." },
      { day: 6, title: "Trek to Chumling", detail: "Tsum culture begins." },
      { day: 7, title: "Trek to Chhule", detail: "Upper Tsum." },
      { day: 8, title: "Trek to Mu Gompa", detail: "Ancient monastery." },
      { day: 9, title: "Explore Mu Gompa", detail: "Acclimatisation." },
      { day: 10, title: "Trek to Chumling", detail: "Return south." },
      { day: 11, title: "Trek to Lokpa & rejoin circuit", detail: "Back to Manaslu trail." },
      { day: 12, title: "Trek to Deng", detail: "Forest trails." },
      { day: 13, title: "Trek to Namrung", detail: "Good Manaslu views." },
      { day: 14, title: "Trek to Lho", detail: "Tibetan villages." },
      { day: 15, title: "Trek to Samagaon", detail: "Below Manaslu." },
      { day: 16, title: "Acclimatisation in Samagaon", detail: "Manaslu Base Camp hike." },
      { day: 17, title: "Trek to Samdo", detail: "Last village." },
      { day: 18, title: "Cross Larke Pass to Bimthang", detail: "5,106 m pass." },
      { day: 19, title: "Trek to Dharapani & drive out", detail: "End of circuit." },
      { day: 20, title: "Drive/fly to Kathmandu", detail: "Return." },
    ],
    inclusions: [
      "Transport to/from trailhead",
      "Teahouse & camping accommodation",
      "Guide, porter crew",
      "Meals on trek",
      "Manaslu & Tsum restricted permits",
    ],
    exclusions: ["International flights", "Visa", "Insurance", "Personal gear"],
    permits: ["Manaslu Conservation Area Permit", "Manaslu Restricted Area Permit", "TIMS"],
    accommodation: "Teahouses & camping",
    transport: "Jeep, walking",
    whatsappMessage: `${greeting} I am interested in the Manaslu Tsum Valley Trek. Could you share the latest departure dates, inclusions and booking details?`,
  },
  {
    id: "everest-base-camp-lodge",
    name: "Everest Base Camp Lodge Trek",
    country: "Nepal",
    region: "Everest",
    category: "Trekking",
    duration: "15 days",
    durationDays: 15,
    priceFrom: 2100,
    verifyPrice: true,
    image: "",
    difficulty: "Challenging",
    season: "Mar–May · Oct–Nov",
    maxElevation: "5,545 m",
    description:
      "The classic Everest Base Camp trek, fully lodge-based — the Lukla to Base Camp and Kala Patthar route through Sherpa villages, monasteries and the heart of the Khumbu.",
    highlights: [
      "Everest Base Camp (5,364 m)",
      "Kala Patthar (5,545 m)",
      "Namche Bazaar & Tengboche Monastery",
      "Sherpa culture of the Khumbu",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Briefing." },
      { day: 2, title: "Fly to Lukla & trek to Phakding", detail: "Begin trek." },
      { day: 3, title: "Trek to Namche Bazaar", detail: "Gateway village." },
      { day: 4, title: "Acclimatisation Namche", detail: "Rest." },
      { day: 5, title: "Trek to Tengboche", detail: "Monastery." },
      { day: 6, title: "Trek to Dingboche", detail: "Imja valley." },
      { day: 7, title: "Acclimatisation Dingboche", detail: "Rest." },
      { day: 8, title: "Trek to Lobuche", detail: "High country." },
      { day: 9, title: "Gorak Shep & Everest Base Camp", detail: "Reach EBC." },
      { day: 10, title: "Kala Patthar & trek to Pheriche", detail: "Sunrise view." },
      { day: 11, title: "Trek to Namche", detail: "Descend." },
      { day: 12, title: "Trek to Lukla", detail: "Final walk." },
      { day: 13, title: "Fly to Kathmandu", detail: "Return." },
      { day: 14, title: "Contingency / free day", detail: "Buffer." },
      { day: 15, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: [
      "Kathmandu–Lukla flights",
      "Teahouse accommodation",
      "Meals, guide, porter",
      "Park permits & TIMS",
    ],
    exclusions: ["International flights", "Visa", "Insurance", "Personal gear"],
    permits: ["Sagarmatha National Park Permit", "TIMS Card"],
    accommodation: "Teahouse lodges",
    transport: "Domestic flights, walking",
    whatsappMessage: `${greeting} I am interested in the Everest Base Camp Lodge Trek. Please share the latest departure dates, availability and pricing.`,
  },
  // ---------------- MOTORCYCLE ----------------
  {
    id: "upper-mustang-motorcycle",
    name: "Upper Mustang Motorcycle Adventure",
    country: "Nepal",
    region: "Mustang",
    category: "Motorcycle",
    duration: "12 days",
    durationDays: 12,
    priceFrom: 3500,
    verifyPrice: true,
    image: "",
    difficulty: "Challenging",
    season: "Jun–Sep",
    maxElevation: "4,200 m",
    description:
      "Ride a Royal Enfield into the forbidden kingdom of Upper Mustang — a Trans-Himalayan desert of canyons, cave monasteries and the walled city of Lo Manthang. A riding journey unlike anywhere else in Nepal.",
    highlights: [
      "Lo Manthang — the walled capital",
      "Trans-Himalayan desert riding",
      "Kagbeni & Muktinath",
      "Ancient cave monasteries",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Briefing and bike familiarisation." },
      { day: 2, title: "Ride to Pokhara", detail: "First riding day." },
      { day: 3, title: "Fly to Jomsom & ride to Kagbeni", detail: "Enter Upper Mustang." },
      { day: 4, title: "Ride to Chele", detail: "Canyon trails." },
      { day: 5, title: "Ride to Charang", detail: "High desert." },
      { day: 6, title: "Ride to Lo Manthang", detail: "The walled city." },
      { day: 7, title: "Explore Lo Manthang", detail: "Monasteries and caves." },
      { day: 8, title: "Ride to Ghiling", detail: "Return loop." },
      { day: 9, title: "Ride to Ghami & Chhusang", detail: "Canyon descent." },
      { day: 10, title: "Ride to Muktinath & Jomsom", detail: "Pass crossings." },
      { day: 11, title: "Fly to Pokhara/Kathmandu", detail: "Return." },
      { day: 12, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: [
      "Royal Enfield motorcycle",
      "Support vehicle & mechanic",
      "Fuel, accommodation, meals",
      "Riding guide",
      "Upper Mustang restricted permit",
    ],
    exclusions: ["International flights", "Riding gear", "Insurance", "Drinks"],
    permits: ["Upper Mustang Restricted Area Permit", "ACAP"],
    accommodation: "Lodges & guesthouses",
    transport: "Motorcycle, support jeep, domestic flights",
    whatsappMessage: `${greeting} I am interested in the Upper Mustang Motorcycle Adventure. Please share the latest departure dates, availability, detailed itinerary and pricing.`,
  },
  {
    id: "lower-mustang-motorcycle",
    name: "Lower Mustang Motorcycle Adventure",
    country: "Nepal",
    region: "Mustang",
    category: "Motorcycle",
    duration: "9 days",
    durationDays: 9,
    priceFrom: 2500,
    verifyPrice: true,
    image: "",
    difficulty: "Moderate",
    season: "Jun–Oct",
    maxElevation: "3,800 m",
    description:
      "A shorter Royal Enfield ride into Lower Mustang — the Kali Gandaki valley, Muktinath, Marpha and Jomsom, with dramatic mountain scenery and the world's deepest gorge.",
    highlights: [
      "Muktinath temple",
      "Marpha apple village",
      "Kali Gandaki — deepest gorge",
      "Dhaulagiri & Annapurna views",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Briefing." },
      { day: 2, title: "Ride to Pokhara", detail: "Prithvi Highway." },
      { day: 3, title: "Ride to Beni & Tatopani", detail: "Hot springs." },
      { day: 4, title: "Ride to Lete & Ghasa", detail: "Enter the gorge." },
      { day: 5, title: "Ride to Marpha & Jomsom", detail: "Wind valley." },
      { day: 6, title: "Ride to Muktinath & Kagbeni", detail: "High point." },
      { day: 7, title: "Ride back to Tatopani", detail: "Descend." },
      { day: 8, title: "Ride to Pokhara/Kathmandu", detail: "Return." },
      { day: 9, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: ["Motorcycle", "Support vehicle", "Fuel, lodging, meals", "Guide", "Permits"],
    exclusions: ["International flights", "Riding gear", "Insurance"],
    permits: ["ACAP", "TIMS"],
    accommodation: "Lodges",
    transport: "Motorcycle, support jeep",
    whatsappMessage: `${greeting} I am interested in the Lower Mustang Motorcycle Adventure. Could you share the latest departure dates, inclusions and pricing?`,
  },
  {
    id: "everest-motorcycle-tour",
    name: "Everest Motorcycle Tour, Nepal and Tibet",
    country: "Tibet",
    region: "Everest North",
    category: "Motorcycle",
    duration: "15 days",
    durationDays: 15,
    priceFrom: 5245,
    verifyPrice: true,
    image: "",
    difficulty: "Challenging",
    season: "May–Oct",
    maxElevation: "5,200 m",
    description:
      "An international motorcycle expedition riding from Kathmandu into Tibet — across the friendship highway to the north face of Everest, Rongbuk Monastery, Yamdrok Lake, Shigatse and Lhasa.",
    highlights: [
      "Everest North Face & Rongbuk Monastery",
      "Yamdrok Lake & Karo La",
      "Shigatse & Lhasa",
      "Friendship Highway crossing",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Briefing & permits." },
      { day: 2, title: "Ride to Kodari & cross to Tibet", detail: "Border crossing." },
      { day: 3, title: "Ride to Nyalam", detail: "First Tibetan miles." },
      { day: 4, title: "Ride to Tingri", detail: "Tibetan plateau." },
      { day: 5, title: "Ride to Rongbuk & Everest North Base Camp", detail: "5,200 m." },
      { day: 6, title: "Ride to Shigatse", detail: "Tibet's second city." },
      { day: 7, title: "Ride to Gyantse", detail: "Kumbum Stupa." },
      { day: 8, title: "Ride to Yamdrok Lake", detail: "Turquoise lake." },
      { day: 9, title: "Ride to Lhasa", detail: "Capital arrival." },
      { day: 10, title: "Lhasa — Potala & Jokhang", detail: "Rest & sightseeing." },
      { day: 11, title: "Lhasa sightseeing", detail: "Sera & Drepung." },
      { day: 12, title: "Ride back toward Shigatse", detail: "Return loop." },
      { day: 13, title: "Ride to border", detail: "Descend to Kodari." },
      { day: 14, title: "Cross to Kathmandu", detail: "Return to Nepal." },
      { day: 15, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: [
      "Royal Enfield motorcycle",
      "Tibet Travel Permit & group visa",
      "Support vehicle, mechanic, guide",
      "Accommodation, meals",
      "Fuel",
    ],
    exclusions: ["International flights to/from Kathmandu", "Riding gear", "Insurance", "Visa fees for Nepal"],
    permits: ["Tibet Travel Permit", "China Group Visa", "Everest North Base Camp access"],
    accommodation: "Hotels & guesthouses",
    transport: "Motorcycle, support vehicle",
    whatsappMessage: `${greeting} I am interested in the Everest Motorcycle Tour, Nepal and Tibet. Please share the latest departure dates, availability, detailed itinerary and pricing.`,
  },
  {
    id: "tibet-motorcycle-circuit",
    name: "Tibet Motorcycle Circuit",
    country: "Tibet",
    region: "Central Tibet",
    category: "Motorcycle",
    duration: "19 days",
    durationDays: 19,
    priceFrom: 6500,
    verifyPrice: true,
    image: "",
    difficulty: "Strenuous",
    season: "May–Oct",
    maxElevation: "5,200 m",
    description:
      "The full Tibet motorcycle circuit — Lhasa to Everest North Face, Mount Kailash and Lake Mansarovar, crossing the high plateau with monasteries, nomad camps and the most sacred landscape in Tibetan culture.",
    highlights: [
      "Mount Kailash kora",
      "Lake Mansarovar",
      "Everest North Face",
      "Lhasa — Potala Palace",
    ],
    itinerary: [
      { day: 1, title: "Arrive Kathmandu", detail: "Briefing." },
      { day: 2, title: "Fly to Lhasa", detail: "Acclimatise." },
      { day: 3, title: "Lhasa sightseeing", detail: "Potala & Jokhang." },
      { day: 4, title: "Lhasa sightseeing", detail: "Sera & Drepung." },
      { day: 5, title: "Ride to Yamdrok & Gyantse", detail: "Begin circuit." },
      { day: 6, title: "Ride to Shigatse", detail: "Tashilhunpo." },
      { day: 7, title: "Ride to Tingri", detail: "Plateau." },
      { day: 8, title: "Ride to Everest North Base Camp", detail: "Rongbuk." },
      { day: 9, title: "Ride to Saga", detail: "West Tibet." },
      { day: 10, title: "Ride to Lake Mansarovar", detail: "Sacred lake." },
      { day: 11, title: "Ride to Darchen", detail: "Kailash base." },
      { day: 12, title: "Kailash kora day 1", detail: "Dirapuk." },
      { day: 13, title: "Kailash kora day 2 — Drolma La", detail: "5,630 m pass." },
      { day: 14, title: "Kailash kora day 3 & return to Darchen", detail: "Complete kora." },
      { day: 15, title: "Ride to Saga", detail: "Return east." },
      { day: 16, title: "Ride to Tingri/Shigatse", detail: "Long ride." },
      { day: 17, title: "Ride to Lhasa", detail: "Return." },
      { day: 18, title: "Fly to Kathmandu", detail: "Return to Nepal." },
      { day: 19, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: [
      "Motorcycle & support crew",
      "Tibet Travel Permit & group visa",
      "Accommodation, meals, fuel",
      "Guide & mechanic",
      "Kailash & Everest permits",
    ],
    exclusions: ["International flights", "Riding gear", "Insurance"],
    permits: ["Tibet Travel Permit", "China Group Visa", "Kailash entry"],
    accommodation: "Hotels & guesthouses",
    transport: "Motorcycle, support vehicle, flights",
    whatsappMessage: `${greeting} I am interested in the Tibet Motorcycle Circuit. Please share the latest departure dates, availability, detailed itinerary and pricing.`,
  },
  {
    id: "bhutan-motorcycle-adventure",
    name: "Bhutan Motorcycle Adventure",
    country: "Bhutan",
    region: "Western Bhutan",
    category: "Motorcycle",
    duration: "10 days",
    durationDays: 10,
    priceFrom: 4799,
    verifyPrice: true,
    image: "",
    difficulty: "Moderate",
    season: "Mar–May · Sep–Nov",
    maxElevation: "3,120 m",
    description:
      "Ride the last Himalayan kingdom — Paro, Thimphu, Punakha and the Dochula pass, with Tiger's Nest monastery, dzongs and the measured, deeply Buddhist culture of Bhutan.",
    highlights: [
      "Tiger's Nest (Taktsang) Monastery",
      "Punakha Dzong",
      "Dochula Pass (3,120 m)",
      "Thimphu & Paro valleys",
    ],
    itinerary: [
      { day: 1, title: "Arrive Paro", detail: "Briefing & bike handover." },
      { day: 2, title: "Ride to Thimphu", detail: "Capital city." },
      { day: 3, title: "Thimphu sightseeing", detail: "Buddha point & dzong." },
      { day: 4, title: "Ride to Punakha via Dochula", detail: "3,120 m pass." },
      { day: 5, title: "Punakha & Wangdue", detail: "Dzong & valley." },
      { day: 6, title: "Ride to Gangtey/Phobjikha", detail: "Valley of cranes." },
      { day: 7, title: "Ride back to Paro", detail: "Return west." },
      { day: 8, title: "Hike to Tiger's Nest", detail: "Taktsang Monastery." },
      { day: 9, title: "Paro sightseeing / free day", detail: "Rest." },
      { day: 10, title: "Departure", detail: "Airport transfer." },
    ],
    inclusions: [
      "Royal Enfield motorcycle",
      "Bhutan SDF & visa",
      "Support vehicle & guide",
      "Accommodation, meals, fuel",
    ],
    exclusions: ["International flights", "Riding gear", "Insurance", "Drinks"],
    permits: ["Bhutan Visa", "Sustainable Development Fee"],
    accommodation: "Hotels & guesthouses",
    transport: "Motorcycle, support vehicle",
    whatsappMessage: `${greeting} I am interested in the Bhutan Motorcycle Adventure. Could you share the latest departure dates, inclusions and booking details?`,
  },
];

export function packageById(id: string): Package | undefined {
  return packages.find((p) => p.id === id);
}

/** Map a package to its image based on country/region/category. */
export function packageImage(p: Package): string {
  if (p.category === "Motorcycle") {
    if (p.country === "Bhutan") return pkImages.motoBhutan;
    if (p.country === "Tibet") return p.id === "everest-motorcycle-tour" ? pkImages.motoEverest : pkImages.motoTibet;
    // Nepal motorcycle
    return pkImages.motoMustang;
  }
  // Trekking
  if (p.region === "Everest") return pkImages.ebc;
  if (p.region === "Annapurna") return pkImages.mardi;
  if (p.region === "Kanchenjunga") return pkImages.kanchenjunga;
  if (p.region === "Manaslu") return pkImages.manaslu;
  return pkImages.ebc;
}
