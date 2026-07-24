import Image from "next/image";
import { gallery } from "@/lib/gallery";

/**
 * Home-page portfolio: real setups from past events, in a mixed-width grid.
 * Captions sit in a gradient that lifts on hover.
 */
export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gold sm:w-16" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest sm:text-sm">
            Our Work
          </p>
          <span className="h-px w-10 bg-gold sm:w-16" />
        </div>

        <h2 className="mt-6 text-center font-display text-4xl leading-tight text-ink sm:text-5xl">
          Recent <span className="text-forest-soft">Setups</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate">
          A look at how our tents, tables, linens and lighting come together on
          the day.
        </p>

        {/* Gallery grid */}
        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-3">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className={`group relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 ${
                item.span === "wide"
                  ? "col-span-2 lg:col-span-2"
                  : "col-span-2 sm:col-span-1"
              }`}
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(min-width: 1024px) 66vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* caption scrim */}
              <div className="absolute inset-0 bg-linear-to-t from-forest-dark/85 via-transparent to-transparent opacity-90 transition group-hover:opacity-100" />

              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {item.tag}
                </p>
                <p className="mt-1 font-display text-xl text-white sm:text-2xl">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
