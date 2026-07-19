import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

/**
 * Hero.
 *
 * Background photo lives at /public/hero-event.jpg (Unsplash License, free for
 * commercial use, no attribution required). To swap in your own photography,
 * drop a wide (≥2000px) landscape shot at that path — ideally something dark or
 * shot at dusk, since the headline sits over it in white. The gradient scrim
 * below handles the rest of the contrast.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-140 items-center overflow-hidden sm:min-h-160 lg:min-h-180">
      <Image
        src="/hero-event.jpg"
        alt="Guests dining at a long table beneath warm string lights at an outdoor evening event"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />

      {/* readability scrim: heavier on the left where the copy sits, plus a
          gentle bottom fade so the section meets the next one cleanly */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/80 via-black/45 to-black/10" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/45 via-transparent to-black/25" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
            {/* service area, echoing the reference site's regional framing */}
            Lower Mainland &amp; British Columbia
          </p>

          <h1 className="font-display text-5xl font-bold italic leading-[1.05] text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            Greater Vancouver
          </h1>

          <p className="mt-4 text-3xl font-light leading-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
            Event &amp; Production Rentals
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            Tables, chairs, linens, tents, staging, lighting and full film
            production gear — delivered, set up and struck by a crew that knows
            the region.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-9 text-lg font-medium text-white shadow-lg shadow-black/30 transition hover:bg-accent-dark"
            >
              Start Your Quote Here
              <Icon name="arrow" size={18} />
            </Link>
            <Link
              href="#catalog"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/40 px-8 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
            >
              Browse the Catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
