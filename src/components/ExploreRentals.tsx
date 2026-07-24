import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { tracks } from "@/lib/site";

/**
 * The two-path entry point: Event Rentals vs Film Rentals, followed by a
 * catalog search bar. This is the main way visitors choose a direction.
 */
export default function ExploreRentals() {
  return (
    <section id="explore" className="relative bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Eyebrow with gold rules either side */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gold sm:w-16" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-forest sm:text-sm">
            Welcome to Ironwood
          </p>
          <span className="h-px w-10 bg-gold sm:w-16" />
        </div>

        <h2 className="mt-6 text-center font-display text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
          <span className="text-forest-soft">Explore</span> Our Rentals
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate">
          Everything you need for unforgettable events and flawless productions.
        </p>

        {/* Two paths */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <Link
              key={track.key}
              href={`/${track.slug}`}
              className="group relative isolate flex min-h-100 flex-col items-center justify-center overflow-hidden rounded-xl px-8 py-12 text-center shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={track.image}
                alt=""
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="-z-10 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* dark scrim keeps the white type readable over any photo */}
              <div className="absolute inset-0 -z-10 bg-forest-dark/62 transition group-hover:bg-forest-dark/55" />
              <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/60 via-transparent to-black/30" />

              {/* gold ring icon */}
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-forest-dark/60 text-gold transition duration-300 group-hover:bg-gold group-hover:text-forest-dark">
                <Icon name={track.icon} size={38} strokeWidth={1.5} />
              </span>

              <h3 className="mt-6 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
                {track.name}
              </h3>
              <span className="mt-4 block h-px w-14 bg-gold/80" />

              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/85">
                {track.blurb}
              </p>

              <span className="mt-8 inline-flex h-12 items-center gap-3 rounded-md border border-gold/70 px-6 text-xs font-semibold uppercase tracking-widest text-gold transition group-hover:bg-gold group-hover:text-forest-dark">
                Explore {track.name}
                <Icon name="arrow" size={16} />
              </span>
            </Link>
          ))}
        </div>

        {/* Catalog search */}
        <form
          action="/event-rentals"
          className="mt-8 flex flex-col gap-3 rounded-xl bg-forest p-3 shadow-lg sm:flex-row sm:items-center sm:gap-0"
        >
          <label htmlFor="catalog-search" className="sr-only">
            Search the rental catalog
          </label>
          <span className="hidden pl-4 pr-3 text-gold sm:block">
            <Icon name="search" size={24} strokeWidth={2} />
          </span>
          <input
            id="catalog-search"
            name="q"
            type="search"
            placeholder="Search tents, chairs, tables, heaters, flooring…"
            className="h-12 w-full shrink-0 rounded-md bg-white/5 px-4 text-base text-white outline-none placeholder:text-white/45 focus:bg-white/10 sm:h-12 sm:flex-1 sm:rounded-none sm:bg-transparent sm:px-0 sm:focus:bg-transparent"
          />
          <span className="hidden h-8 w-px bg-white/15 sm:mx-4 sm:block" />
          <button
            type="submit"
            className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-gold px-7 text-xs font-bold uppercase tracking-widest text-forest-dark transition hover:bg-gold-soft"
          >
            Find Products
            <Icon name="arrow" size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
