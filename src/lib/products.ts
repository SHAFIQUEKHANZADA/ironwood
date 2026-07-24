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
  // ── Tents ──────────────────────────────────────────────────────────────
  {
    name: "10×10 Pop-Up Canopy",
    slug: "10x10-pop-up-canopy",
    spec: "10' × 10' instant shelter · adjustable legs",
    categorySlug: "tent",
  },
  {
    name: "10×20 Pop-Up Canopy",
    slug: "10x20-pop-up-canopy",
    spec: "10' × 20' instant shelter · adjustable legs",
    categorySlug: "tent",
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
];

export function productsForCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}
