import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import { findImage } from "@/lib/media";
import { productsForCategory } from "@/lib/products";
import { company, tracks, type Category } from "@/lib/site";

/** Categories are unique by slug even though some appear in both tracks. */
function allCategories(): Category[] {
  const seen = new Map<string, Category>();
  for (const track of tracks) {
    for (const category of track.categories) {
      if (!seen.has(category.slug)) seen.set(category.slug, category);
    }
  }
  return [...seen.values()];
}

function findCategory(slug: string) {
  return allCategories().find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return allCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata(
  props: PageProps<"/rentals/[category]">
): Promise<Metadata> {
  const { category: slug } = await props.params;
  const category = findCategory(slug);
  if (!category) return {};
  return { title: category.name, description: category.blurb };
}

export default async function CategoryPage(
  props: PageProps<"/rentals/[category]">
) {
  const { category: slug } = await props.params;
  const category = findCategory(slug);
  if (!category) notFound();

  const items = productsForCategory(category.slug);
  const [from, to] = category.gradient;

  // Which track(s) this category belongs to, for the breadcrumb.
  const parent = tracks.find((t) =>
    t.categories.some((c) => c.slug === category.slug)
  );

  return (
    <>
      {/* Banner */}
      <section
        className="relative isolate overflow-hidden py-16 sm:py-20"
        style={{
          backgroundImage: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
        }}
      >
        {category.image && (
          <Image
            src={category.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover"
          />
        )}
        <div className="absolute inset-0 -z-10 bg-forest-dark/78" />

        <div className="mx-auto max-w-7xl px-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">
                /
              </li>
              {parent && (
                <>
                  <li>
                    <Link
                      href={`/${parent.slug}`}
                      className="transition hover:text-gold"
                    >
                      {parent.name}
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-white/40">
                    /
                  </li>
                </>
              )}
              <li className="text-gold">{category.name}</li>
            </ol>
          </nav>

          <div className="mt-6 flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-gold text-gold">
              <Icon name={category.icon} size={32} strokeWidth={1.5} />
            </span>
            <div>
              <h1 className="font-display text-4xl text-white sm:text-5xl">
                {category.name}
              </h1>
              <p className="mt-2 text-lg text-white/80">{category.blurb}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          {items.length > 0 ? (
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => {
                const photo = findImage(`/products/${item.slug}`);
                return (
                  <li
                    key={item.slug}
                    className="group overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative flex h-60 items-center justify-center bg-white">
                      {photo ? (
                        <Image
                          src={photo}
                          alt={item.name}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-cream text-forest/25">
                          <Icon
                            name={category.icon}
                            size={64}
                            strokeWidth={1.2}
                          />
                          <span className="text-[11px] font-semibold uppercase tracking-widest">
                            Photo coming soon
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="border-t border-black/5 p-5">
                      <h2 className="font-semibold text-ink">{item.name}</h2>
                      {item.spec && (
                        <p className="mt-1 text-[13px] leading-snug text-slate">
                          {item.spec}
                        </p>
                      )}
                      <Link
                        href="/#contact"
                        className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest transition hover:text-gold"
                      >
                        Request a Quote
                        <Icon name="arrow" size={14} />
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="mx-auto max-w-xl rounded-lg border border-dashed border-forest/25 bg-cream px-8 py-14 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
                <Icon name={category.icon} size={28} strokeWidth={1.5} />
              </span>
              <h2 className="mt-5 font-display text-2xl text-ink">
                {category.name} — full list coming soon
              </h2>
              <p className="mt-3 text-slate">
                We&apos;re still photographing this range. Call or email us and
                we&apos;ll tell you exactly what&apos;s available for your dates.
              </p>
              <a
                href={company.phoneHref}
                className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-forest px-7 text-sm font-semibold text-white transition hover:bg-forest-soft"
              >
                <Icon name="phone" size={16} />
                {company.phone}
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
