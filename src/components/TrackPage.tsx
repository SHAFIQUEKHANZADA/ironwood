import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import TrackCatalog from "./TrackCatalog";
import { company, type RentalTrack } from "@/lib/site";

/**
 * Full page for one rental track: banner, category grid, then a quote CTA.
 * Shared by /event-rentals and /film-rentals.
 */
export default function TrackPage({ track }: { track: RentalTrack }) {
  return (
    <>
      {/* Banner */}
      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        <Image
          src={track.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-forest-dark/80" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/50 via-transparent to-black/30" />

        <div className="mx-auto max-w-7xl px-6">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                /
              </li>
              <li className="text-gold">{track.name}</li>
            </ol>
          </nav>

          <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
              <Icon name={track.icon} size={32} strokeWidth={1.5} />
            </span>
            <div>
              <h1 className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
                {track.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/80">
                {track.blurb}
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrackCatalog track={track} tone="light" showHeading={false} />

      {/* Quote CTA */}
      <section className="border-t border-black/5 bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            Need a hand putting a package together?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Tell us your dates, venue and headcount — we&apos;ll confirm
            availability and send pricing the same day.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-forest px-9 text-base font-semibold text-white transition hover:bg-forest-soft"
            >
              Request a Quote
              <Icon name="arrow" size={18} />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-forest/30 px-9 text-base font-semibold text-forest transition hover:border-forest hover:bg-white"
            >
              <Icon name="phone" size={18} />
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
