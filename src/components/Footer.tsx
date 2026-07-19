import Link from "next/link";
import Icon from "./Icon";
import { categories, company } from "@/lib/site";

export default function Footer() {
  const half = Math.ceil(categories.length / 2);
  const columns = [categories.slice(0, half), categories.slice(half)];

  return (
    <footer className="bg-cream pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Products */}
          <div className="sm:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              Products
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2">
              {columns.map((col, i) => (
                <ul key={i} className="space-y-2">
                  {col.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href="#catalog"
                        className="text-sm text-slate transition hover:text-wine"
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Customer service */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              Customer Service
            </h3>
            <ul className="mt-5 space-y-2">
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Inspiration", href: "#inspiration" },
                { label: "Request a Quote", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-slate transition hover:text-wine"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-ink">
              Connect
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={company.phoneHref}
                  className="flex items-center gap-2 text-sm text-slate transition hover:text-wine"
                >
                  <Icon name="phone" size={16} />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-2 break-all text-sm text-slate transition hover:text-wine"
                >
                  <Icon name="mail" size={16} />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate">
                <Icon name="pin" size={16} className="mt-0.5 shrink-0" />
                {company.serviceArea}
              </li>
            </ul>

            <p className="mt-7 font-display text-lg italic text-ink">
              Event &amp; film rentals,{" "}
              <span className="whitespace-nowrap">done right.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-ink">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/70 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <p>{company.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
