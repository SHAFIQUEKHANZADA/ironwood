// Central place for company details and site content.

export const company = {
  name: "Ironwood Film's & Event Rentals",
  shortName: "Ironwood",
  email: "iwfilmrentals@gmail.com",
  phone: "778-385-1498",
  phoneHref: "tel:+17783851498",
  serviceArea: "Serving the Lower Mainland & British Columbia",
  tagline: "Equipment. Experience. Excellence.",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Film's Rental", href: "/film-rental" },
  { label: "Event Rentals", href: "/event-rentals" },
  { label: "Gallery", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export type Category = {
  name: string;
  slug: string;
  blurb: string;
  /** icon key mapped in Icon.tsx */
  icon: string;
  /**
   * Two-stop gradient used as the card's panel background. It shows through
   * while the photo loads, and stands in entirely when there is no photo yet.
   */
  gradient: [string, string];
  /**
   * Photo under /public/categories/. Omit when we don't have a real photo for
   * this line yet — the card then renders the branded gradient + icon instead
   * of a misleading stock image. Drop a file in and add the path to upgrade it.
   */
  image?: string;
};

export type RentalTrack = {
  key: "event" | "film";
  name: string;
  /** url slug — each track gets its own page at /<slug> */
  slug: string;
  blurb: string;
  icon: string;
  image: string;
  categories: Category[];
};

/**
 * The two rental tracks the business is organised around. Tents and heaters
 * intentionally appear in both — the same inventory serves both markets.
 */
export const tracks: RentalTrack[] = [
  {
    key: "film",
    name: "Film's Rental",
    slug: "film-rental",
    blurb:
      "Tents, heat and ground protection for productions of every size, across the Lower Mainland.",
    icon: "clapper",
    image: "/categories/film-production.jpg",
    categories: [
      {
        name: "Pop-up Canopy",
        slug: "pop-up-canopy",
        blurb: "10×10 & 10×20 instant shelters for set & basecamp",
        icon: "tent",
        gradient: ["#3a3d42", "#16181b"],
        image: "/categories/pop-up-canopy.png",
      },
      {
        name: "Heaters",
        slug: "heaters",
        blurb: "Keep cast and crew warm on location",
        icon: "heat",
        gradient: ["#6b5a2f", "#2f2712"],
        image: "/categories/heaters.jpg",
      },
      {
        name: "Ground Protection Mats",
        slug: "ground-protection-mats",
        blurb: "Turf protection, trackway & vehicle access",
        icon: "mat",
        gradient: ["#3c6b57", "#12271f"],
        image: "/categories/ground-protection-mats.png",
      },
    ],
  },
  {
    key: "event",
    name: "Event Rentals",
    slug: "event-rentals",
    blurb:
      "Tents, tables, chairs, linens and more for weddings, parties and corporate events.",
    icon: "tent",
    image: "/inspiration.jpg",
    categories: [
      {
        name: "Pop-up Canopy",
        slug: "pop-up-canopy",
        blurb: "10×10 & 10×20 instant shelters for any event",
        icon: "tent",
        gradient: ["#3a3d42", "#16181b"],
        image: "/categories/pop-up-canopy.png",
      },
      {
        name: "Tables",
        slug: "tables",
        blurb: "Rounds, banquets, farmhouse & cocktail",
        icon: "table",
        gradient: ["#3c6b57", "#163128"],
        image: "/categories/tables.jpg",
      },
      {
        name: "Chairs",
        slug: "chairs",
        blurb: "Chiavari, folding, lounge & ghost",
        icon: "chair",
        gradient: ["#4a7a63", "#1c3a30"],
        image: "/categories/chairs.jpg",
      },
      {
        name: "Linens",
        slug: "linens",
        blurb: "Tablecloths, runners, drapery & napkins",
        icon: "linen",
        gradient: ["#5a8570", "#20402f"],
        image: "/categories/linens.jpg",
      },
      {
        name: "Heaters",
        slug: "heaters",
        blurb: "Patio heaters, fans & climate control",
        icon: "heat",
        gradient: ["#6b5a2f", "#2f2712"],
        image: "/categories/heaters.jpg",
      },
      {
        name: "Bars",
        slug: "bars",
        blurb: "Portable bars, coolers & service carts",
        icon: "bar",
        gradient: ["#3f5f70", "#1a2b33"],
        image: "/categories/bars.jpg",
      },
    ],
  },
];

/** Flat list of every category, for the footer and search suggestions. */
export const allCategories: Category[] = tracks.flatMap((t) => t.categories);

export const services = [
  {
    title: "Delivery & Pickup",
    desc: "Reliable, on-time delivery and teardown across the Lower Mainland and greater British Columbia.",
    icon: "truck",
  },
  {
    title: "Setup & Installation",
    desc: "Professional installation of tents, heaters, flooring and production gear by an experienced crew.",
    icon: "wrench",
  },
  {
    title: "Event & Production Consulting",
    desc: "Tell us your vision, guest count and venue — we'll build a rental package that fits your budget.",
    icon: "chat",
  },
  {
    title: "Film & Photo Support",
    desc: "Location support with flexible terms for productions of every size.",
    icon: "clapper",
  },
];
