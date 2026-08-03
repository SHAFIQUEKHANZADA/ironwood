/**
 * Individual rental items, grouped by the category slug they belong to.
 *
 * ── ADDING A PRODUCT ────────────────────────────────────────────────────────
 * 1. Save the photo to  /public/products/<slug>.jpg   (.png/.webp also work)
 *    Use the product's slug exactly as the filename, e.g.
 *      10x10-pop-up-canopy.jpg
 * 2. Add an entry below under the right category slug.
 *
 * The photo is matched by slug automatically — there is no image path to set.
 * An item with no photo yet still renders, with a branded placeholder tile,
 * so the page never looks broken while the catalogue is being filled in.
 *
 * Category slugs in use: tent · tables · chairs · linens · heaters · bars ·
 * ground-protection-mats
 */

export type Product = {
  name: string;
  /** also the photo filename: /public/products/<slug>.(jpg|png|webp) */
  slug: string;
  /** short spec line shown under the name */
  spec?: string;
  categorySlug: string;
};

export const products: Product[] = [
  // ── Pop-up Canopy ──────────────────────────────────────────────────────
  {
    name: "10×10 Pop-Up Canopy",
    slug: "10x10-pop-up-canopy",
    spec: "10' × 10' instant shelter · adjustable legs",
    categorySlug: "pop-up-canopy",
  },
  {
    name: "10×20 Pop-Up Canopy",
    slug: "10x20-pop-up-canopy",
    spec: "10' × 20' instant shelter · adjustable legs",
    categorySlug: "pop-up-canopy",
  },

  // ── Tables ─────────────────────────────────────────────────────────────
  {
    name: "6 ft Round Table",
    slug: "6-foot-round-table",
    spec: "Seats 8–10 · folding banquet round",
    categorySlug: "tables",
  },
  {
    name: "5 ft Plastic Round Table",
    slug: "5-foot-plastic-round-table",
    spec: "Seats 8 · lightweight folding round",
    categorySlug: "tables",
  },
  {
    name: "6 ft Rectangle Table",
    slug: "6-foot-rectangle-table",
    spec: "Seats 6–8 · folding banquet trestle",
    categorySlug: "tables",
  },
  {
    name: "Plastic Cocktail Table",
    slug: "plastic-cocktail-table",
    spec: "Tall highboy · fold-flat top",
    categorySlug: "tables",
  },
  {
    name: "Wooden Cocktail Table",
    slug: "wooden-cocktail-table",
    spec: "Tall highboy · wood top, chrome column",
    categorySlug: "tables",
  },

  // ── Chairs ─────────────────────────────────────────────────────────────
  {
    name: "Garden Chairs",
    slug: "garden-chairs",
    spec: "White padded resin folding · wedding-ready",
    categorySlug: "chairs",
  },
  {
    name: "Black Plastic Folding Chairs",
    slug: "black-plastic-folding-chairs",
    spec: "Sturdy, stackable · indoor or out",
    categorySlug: "chairs",
  },
  {
    name: "White Plastic Folding Chairs",
    slug: "white-plastic-folding-chairs",
    spec: "Sturdy, stackable · indoor or out",
    categorySlug: "chairs",
  },
  {
    name: "Clear Chivari Chairs",
    slug: "clear-chivari-chairs",
    spec: "Crystal resin · elegant banquet seating",
    categorySlug: "chairs",
  },

  // ── Heaters ────────────────────────────────────────────────────────────
  {
    name: "Patio Heater",
    slug: "patio-heater",
    spec: "Propane mushroom heater · freestanding",
    categorySlug: "heaters",
  },
  {
    name: "Frost Fighter IDF350 Indirect Fired Portable Heater",
    slug: "frost-fighter-idf350",
    spec: "Indirect-fired · clean heat for tents & sets",
    categorySlug: "heaters",
  },

  // ── Bars ───────────────────────────────────────────────────────────────
  {
    name: "LED Bar",
    slug: "led-bar",
    spec: "Colour-changing glow bar · portable",
    categorySlug: "bars",
  },

  // ── Ground Protection Mats ─────────────────────────────────────────────
  {
    name: "Ground Protection Mats 4×8ft",
    slug: "ground-protection-mats-4x8ft",
    spec: "4' × 8' panels · turf & trackway protection",
    categorySlug: "ground-protection-mats",
  },
  {
    name: "Multi Mover Hand Truck",
    slug: "multi-mover-hand-truck",
    spec: "4-wheel convertible dolly · heavy loads",
    categorySlug: "ground-protection-mats",
  },
];

export function productsForCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}
