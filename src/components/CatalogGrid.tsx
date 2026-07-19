import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { categories, type Category } from "@/lib/site";

/**
 * Category tile, styled after a classic rental-catalog grid: photo panel with
 * the category name over it and a "View All" bar underneath.
 *
 * Photos live at /public/categories/<slug>.jpg — to swap one, drop a new
 * landscape image in at that path, no code change needed. The gradient is
 * kept as the panel background so the tile still looks intentional while the
 * image loads (and if one is ever missing).
 */
function CategoryCard({ category }: { category: Category }) {
  const [from, to] = category.gradient;

  return (
    <Link
      href="#contact"
      className="group flex flex-col overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div
        className="relative h-52 overflow-hidden sm:h-56"
        style={{
          backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        <Image
          src={`/categories/${category.slug}.jpg`}
          alt={`${category.name} available to rent from Ironwood`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* darkening scrim so the label always reads over the photo */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-black/10" />

        {/* small brand icon badge */}
        <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white/90 backdrop-blur-sm transition group-hover:bg-wine">
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

      <div className="flex items-center justify-between bg-ink px-5 py-3 text-white transition group-hover:bg-wine">
        <span className="text-sm font-semibold italic">View All</span>
        <Icon
          name="arrow"
          size={16}
          className="transition duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

export default function CatalogGrid() {
  return (
    <section id="catalog" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            Rental Catalog
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-16 bg-champagne" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate">
            Everything you need for the room and everything you need for the
            set. Browse by category, then send us a list — we&apos;ll confirm
            availability for your dates.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
