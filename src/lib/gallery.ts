/**
 * Portfolio gallery shown on the home page.
 *
 * Add a setup/lifestyle photo to /public/gallery/, then add an entry here.
 * `span: "wide"` makes a tile take two columns on large screens for a bit of
 * rhythm — use it for your best landscape shots.
 */
export type GalleryItem = {
  src: string;
  caption: string;
  tag: string;
  span?: "wide";
};

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/cocktail-tables-patio.png",
    caption: "Cocktail hour on the patio",
    tag: "Wooden cocktail tables + white linens",
  },
  {
    src: "/inspiration.jpg",
    caption: "Dusk reception under the lights",
    tag: "String lights + candlelight",
  },
  {
    src: "/gallery/round-table-styled.png",
    caption: "Styled banquet round",
    tag: "5 ft round + floor-length linen",
  },
  {
    src: "/gallery/cocktail-table-garden.png",
    caption: "Garden cocktail setup",
    tag: "Highboy tables outdoors",
  },
  {
    src: "/hero-event.jpg",
    caption: "Long-table dinner",
    tag: "Tables, chairs + festoon lighting",
    span: "wide",
  },
];
