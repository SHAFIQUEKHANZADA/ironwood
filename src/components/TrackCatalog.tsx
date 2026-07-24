import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { type Category, type RentalTrack } from "@/lib/site";

/**
 * Category tile. Renders the photo when the category has one; otherwise falls
 * back to the brand gradient with a large watermark icon, so a line without
 * photography still looks deliberate rather than broken.
 */
function CategoryCard({ category }: { category: Category }) {
  const [from, to] = category.gradient;

  return (
    <Link
      href={`/rentals/${category.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative h-52 overflow-hidden sm:h-56"
        style={{
          backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        {category.image ? (
          <Image
            src={category.image}
            alt={`${category.name} available to rent from Ironwood`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-white/20 transition duration-500 group-hover:scale-110 group-hover:text-white/30">
            <Icon name={category.icon} size={104} strokeWidth={1.2} />
          </span>
        )}

        {/* scrim so the label always reads */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/5" />

        <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-forest-dark/60 text-gold backdrop-blur-sm transition group-hover:bg-gold group-hover:text-forest-dark">
          <Icon name={category.icon} size={18} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <h3 className="text-xl font-bold leading-tight text-white drop-shadow-sm">
            {category.name}
          </h3>
          <p className="mt-1 text-[13px] leading-snug text-white/80">
            {category.blurb}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-forest px-5 py-3 text-white transition group-hover:bg-forest-soft">
        <span className="text-xs font-semibold uppercase tracking-widest">
          View All
        </span>
        <Icon
          name="arrow"
          size={16}
          className="text-gold transition duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default function TrackCatalog({
  track,
  tone = "light",
  showHeading = true,
}: {
  track: RentalTrack;
  /** alternating section backgrounds so the two tracks read as distinct */
  tone?: "light" | "cream";
  /** the track page already shows the title in its banner, so it opts out */
  showHeading?: boolean;
}) {
  return (
    <section
      id={track.slug}
      className={`${showHeading ? "py-20 sm:py-24" : "py-14 sm:py-16"} ${
        tone === "cream" ? "bg-cream" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {showHeading && (
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold text-forest">
              <Icon name={track.icon} size={28} strokeWidth={1.5} />
            </span>
            <h2 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
              {track.name}
            </h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gold" />
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate">
              {track.blurb}
            </p>
          </div>
        )}

        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
            showHeading ? "mt-14" : ""
          }`}
        >
          {track.categories.map((category) => (
            <CategoryCard
              key={`${track.key}-${category.slug}`}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
