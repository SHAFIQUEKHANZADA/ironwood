# Product photos

Drop rental item photos in **this folder**.

## Naming

The filename must match the product's `slug` in `src/lib/products.ts`:

```
public/products/10x10-pop-up-canopy.jpg   ->  slug: "10x10-pop-up-canopy"
```

`.jpg`, `.jpeg`, `.png` and `.webp` all work. Lowercase, words separated by
hyphens, no spaces.

## Adding a new item

1. Save the photo here using the naming rule above.
2. Add an entry to `products` in `src/lib/products.ts` with the same slug and
   the category it belongs to.

The photo is picked up automatically from the slug — there is no image path to
edit. Until a photo exists the item still shows, with a "Photo coming soon"
placeholder, so nothing looks broken while the catalogue is filled in.

## What makes a good photo here

Product tiles display the image **contained** (not cropped), so shots on a plain
white or light background — like the supplier photos — sit nicely. Square-ish
images work best. Aim for at least 1000px on the long edge.

## Category slugs

`tent` · `tables` · `chairs` · `linens` · `heaters` · `bars` ·
`ground-protection-mats`

## Portfolio / "Our Work" gallery

Setup and lifestyle shots (a styled table, an event in progress) go in
`public/gallery/` instead, and are listed in `src/lib/gallery.ts`. Those show
in the "Recent Setups" section on the home page.
