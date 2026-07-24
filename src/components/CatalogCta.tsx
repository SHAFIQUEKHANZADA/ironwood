import Link from "next/link";
import Icon from "./Icon";

/**
 * Decorative botanical sprig, echoing the gold leaf motif in the brand
 * direction. Purely ornamental — sits low-opacity behind the copy.
 */
function Sprig({ className = "" }: { className?: string }) {
  const leaves = [0, 1, 2, 3, 4, 5];
  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {/* main stem */}
      <path d="M100 315 C 96 240, 98 170, 104 96 C 107 60, 112 34, 118 10" />
      {leaves.map((i) => {
        const y = 262 - i * 42;
        const t = i * 2.5;
        return (
          <g key={i}>
            {/* left leaf */}
            <path
              d={`M${99 - i} ${y} C ${70 - t} ${y - 6}, ${48 - t} ${y - 26}, ${
                40 - t
              } ${y - 52} C ${68 - t} ${y - 48}, ${88 - t} ${y - 30}, ${
                99 - i
              } ${y}`}
              fill="currentColor"
              fillOpacity="0.22"
            />
            {/* right leaf */}
            <path
              d={`M${101 + i} ${y - 20} C ${130 + t} ${y - 26}, ${152 + t} ${
                y - 46
              }, ${160 + t} ${y - 72} C ${132 + t} ${y - 68}, ${112 + t} ${
                y - 50
              }, ${101 + i} ${y - 20}`}
              fill="currentColor"
              fillOpacity="0.22"
            />
          </g>
        );
      })}
    </svg>
  );
}

export default function CatalogCta() {
  return (
    <section className="relative isolate overflow-hidden bg-forest py-20 text-white sm:py-24">
      {/* botanical flourishes */}
      <Sprig className="pointer-events-none absolute -bottom-10 right-4 h-80 w-auto text-gold/25 sm:right-16 sm:h-96" />
      <Sprig className="pointer-events-none absolute -bottom-16 -left-10 hidden h-80 w-auto -scale-x-100 text-gold/15 lg:block" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl uppercase leading-tight tracking-wide text-cream sm:text-5xl">
            Our Full Catalog
          </h2>
          <div className="mt-6 h-px w-24 bg-gold/70" />

          <p className="mt-7 text-lg leading-relaxed text-white/80">
            Browse the complete inventory of tents, tables, chairs, linens,
            heaters, bars and location gear we deliver across the Lower
            Mainland.
          </p>

          <Link
            href="#explore"
            className="mt-9 inline-flex h-14 items-center gap-3 rounded-full border border-gold px-8 text-sm font-semibold uppercase tracking-widest text-gold transition hover:bg-gold hover:text-forest-dark"
          >
            View Catalog
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
