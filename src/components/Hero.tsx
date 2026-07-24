import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

/**
 * Hero.
 *
 * Two background photos so each orientation gets a properly framed crop:
 *   /public/hero.png     — landscape, used from `sm` up (desktop/tablet)
 *   /public/hero-bg.png  — portrait, used below `sm` (phones)
 * To change either, replace the file at that path. The gradient scrims below
 * handle contrast for the white headline.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-140 items-center overflow-hidden sm:min-h-160 lg:min-h-180">
      {/* Mobile (portrait crop) */}
      <Image
        src="/hero-bg.png"
        alt="Evening event set up with tables, chairs and string lighting"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover sm:hidden"
      />
      {/* Desktop / tablet (landscape crop) */}
      <Image
        src="/hero.png"
        alt="Evening event set up with tables, chairs and string lighting"
        fill
        priority
        sizes="100vw"
        className="-z-10 hidden object-cover sm:block"
      />

      {/* readability scrim: heavy on the left where the copy sits, so the
          headline stays legible while the lit scene shows through on the right */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-night/95 via-night/62 to-night/8" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-night/55 via-transparent to-night/35" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-gold sm:text-sm">
            Events. Equipment. Experience.
          </p>

          <h1 className="text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-7xl">
            We equip
            <br />
            your <span className="text-gold">vision.</span>
            <br />
            You create
            <br />
            the moment.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            From unforgettable events to cinematic productions, we provide
            premium rentals and expert support to bring your vision to life.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-gold px-8 text-sm font-bold uppercase tracking-[0.12em] text-night shadow-lg shadow-black/30 transition hover:bg-gold-soft"
            >
              Get a Quote
              <Icon name="arrow" size={18} />
            </Link>
            <Link
              href="#explore"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-md border border-white/50 px-8 text-sm font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:border-gold hover:bg-white/10 hover:text-gold"
            >
              Browse Catalog
              <Icon name="arrow" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
