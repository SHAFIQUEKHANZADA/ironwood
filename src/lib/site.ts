// Central place for company details and site content.

export const company = {
  name: "Ironwood Films & Event Rentals",
  shortName: "Ironwood",
  email: "iwfilmrentals@gmail.com",
  phone: "778-385-1498",
  phoneHref: "tel:+17783851498",
  serviceArea: "Serving the Lower Mainland & British Columbia",
  established: "British Columbia",
};

export const navLinks = [
  { label: "New", href: "#catalog" },
  { label: "Rental Catalog", href: "#catalog" },
  { label: "Linens", href: "#catalog" },
  { label: "Services", href: "#services" },
  { label: "Inspiration", href: "#inspiration" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Category = {
  name: string;
  slug: string;
  blurb: string;
  /** icon key mapped in CategoryCard */
  icon: string;
  /**
   * Two-stop gradient used as the card's panel background. The photo at
   * /public/categories/<slug>.jpg sits on top of it; this shows through while
   * the image loads.
   */
  gradient: [string, string];
};

// A film + event rental mix, styled after a classic rental-catalog grid.
export const categories: Category[] = [
  {
    name: "Tables",
    slug: "tables",
    blurb: "Rounds, banquets, farmhouse & cocktail",
    icon: "table",
    gradient: ["#7a3347", "#3d1622"],
  },
  {
    name: "Chairs",
    slug: "chairs",
    blurb: "Chiavari, folding, lounge & ghost",
    icon: "chair",
    gradient: ["#6b7787", "#2c3744"],
  },
  {
    name: "Linens + Napkins",
    slug: "linens",
    blurb: "Tablecloths, runners, drapery & napkins",
    icon: "linen",
    gradient: ["#8a5a6b", "#4a2230"],
  },
  {
    name: "China + Glassware",
    slug: "china-glassware",
    blurb: "Plates, flatware, stemware & barware",
    icon: "plate",
    gradient: ["#5f6b7a", "#2b333f"],
  },
  {
    name: "Tents + Structures",
    slug: "tents",
    blurb: "Frame tents, sailcloth, sidewalls & flooring",
    icon: "tent",
    gradient: ["#6b4a3a", "#2f2018"],
  },
  {
    name: "Staging + Dance Floors",
    slug: "staging",
    blurb: "Modular stages, risers & parquet floors",
    icon: "stage",
    gradient: ["#53688f", "#1f2a48"],
  },
  {
    name: "Lighting",
    slug: "lighting",
    blurb: "Uplighting, string lights, spots & control",
    icon: "light",
    gradient: ["#8a6a2f", "#3d2e12"],
  },
  {
    name: "Audio + Visual",
    slug: "audio-visual",
    blurb: "PA, mics, projectors, LED walls & screens",
    icon: "av",
    gradient: ["#2f5a6b", "#12303d"],
  },
  {
    name: "Film Production Gear",
    slug: "film-production",
    blurb: "Grip, electric, stands, flags & apple boxes",
    icon: "film",
    gradient: ["#5a5a5a", "#1e1e1e"],
  },
  {
    name: "Décor + Props",
    slug: "decor",
    blurb: "Backdrops, arches, candleholders & signage",
    icon: "decor",
    gradient: ["#7a3347", "#4a2230"],
  },
  {
    name: "Heating + Cooling",
    slug: "climate",
    blurb: "Patio heaters, fans, coolers & generators",
    icon: "heat",
    gradient: ["#6b3a2f", "#2f1712"],
  },
  {
    name: "Bars + Catering",
    slug: "bars-catering",
    blurb: "Portable bars, chafers, coolers & carts",
    icon: "bar",
    gradient: ["#6a6a80", "#2b2b3a"],
  },
];

export const services = [
  {
    title: "Delivery & Pickup",
    desc: "Reliable, on-time delivery and teardown across the Lower Mainland and greater British Columbia.",
    icon: "truck",
  },
  {
    title: "Setup & Installation",
    desc: "Professional installation of tents, staging, lighting and production gear by an experienced crew.",
    icon: "wrench",
  },
  {
    title: "Event & Production Consulting",
    desc: "Tell us your vision, guest count and venue — we'll build a rental package that fits your budget.",
    icon: "chat",
  },
  {
    title: "Film & Photo Support",
    desc: "Grip, electric and set-dressing rentals with flexible terms for productions of every size.",
    icon: "clapper",
  },
];
