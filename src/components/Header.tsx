"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { company, navLinks } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll and wire up Escape while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* ---------------------------------------------------------------
          Single dark bar: logo (left) · nav (centre) ·
          Get a Quote (desktop only) + cart (right).
      ---------------------------------------------------------------- */}
      <div className="border-b border-white/10 bg-night">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          {/* Logo — light knockout so it reads on the dark bar */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo-light.png"
              alt={company.name}
              width={1127}
              height={754}
              priority
              className="h-12 w-auto sm:h-16"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
            {navLinks.map((link) => {
              const active = link.href === pathname;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative whitespace-nowrap py-1 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                    active ? "text-gold" : "text-white/85 hover:text-gold"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-full bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right cluster */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {/* Quote CTA — desktop/tablet only; phones get it in the drawer */}
            <Link
              href="/#contact"
              className="hidden rounded-md bg-gold px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-night shadow-sm transition hover:bg-gold-soft sm:inline-block sm:px-6"
            >
              Get a Quote
            </Link>

            {/* Cart — icon only */}
            <button
              type="button"
              aria-label="View your cart"
              className="relative rounded-full p-2 text-white/85 transition hover:bg-white/10 hover:text-gold"
            >
              <Icon name="cart" size={24} strokeWidth={1.8} />
              <span className="absolute right-0 top-0 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-night">
                0
              </span>
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="-mr-1 rounded-md p-1.5 text-white transition hover:bg-white/10 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={28} strokeWidth={2.2} />
            </button>
          </div>
        </div>

      </div>

      {/* ---------------------------------------------------------------
          Mobile drawer — full-height forest panel that slides in from the
          right over a blurred backdrop.
      ---------------------------------------------------------------- */}
      <div
        className={`fixed inset-0 z-60 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* backdrop */}
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 h-full w-full cursor-default bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* panel */}
        <div
          className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-linear-to-b from-forest via-forest-dark to-[#0b1a14] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* panel header */}
          <div className="flex items-start justify-between px-7 pb-6 pt-7">
            <div className="leading-none">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                IRONWOOD
              </span>
              <span className="mt-1.5 block font-display text-xs italic text-gold">
                film&apos;s <span className="not-italic">&amp;</span> event
                rentals
              </span>
            </div>
            <button
              type="button"
              tabIndex={open ? 0 : -1}
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="-mr-2 -mt-1 rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <Icon name="close" size={24} strokeWidth={2} />
            </button>
          </div>

          <div className="mx-7 h-px bg-linear-to-r from-gold/60 to-transparent" />

          {/* links */}
          <nav className="px-7 py-3">
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    tabIndex={open ? 0 : -1}
                    onClick={() => setOpen(false)}
                    style={{
                      transitionDelay: open ? `${60 + i * 32}ms` : "0ms",
                    }}
                    className={`group flex items-baseline gap-4 border-b border-white/10 py-4 transition-all duration-400 ${
                      open
                        ? "translate-x-0 opacity-100"
                        : "translate-x-4 opacity-0"
                    }`}
                  >
                    <span className="w-5 shrink-0 text-[11px] font-semibold tabular-nums text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl text-white transition-colors group-hover:text-gold">
                      {link.label}
                    </span>
                    <Icon
                      name="arrow"
                      size={16}
                      className="ml-auto self-center text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + contact */}
          <div className="mt-auto px-7 pb-9 pt-6">
            <Link
              href="/#contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-gold text-base font-semibold text-forest-dark shadow-lg shadow-black/30 transition hover:bg-gold-soft"
            >
              Start Your Quote
              <Icon name="arrow" size={16} />
            </Link>

            <div className="mt-7 space-y-3.5">
              <a
                href={company.phoneHref}
                tabIndex={open ? 0 : -1}
                className="flex items-center gap-3 text-sm text-white/85 transition hover:text-gold"
              >
                <Icon name="phone" size={16} className="text-gold" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                tabIndex={open ? 0 : -1}
                className="flex items-center gap-3 break-all text-sm text-white/85 transition hover:text-gold"
              >
                <Icon name="mail" size={16} className="shrink-0 text-gold" />
                {company.email}
              </a>
              <p className="flex items-start gap-3 text-sm leading-snug text-white/60">
                <Icon
                  name="pin"
                  size={16}
                  className="mt-0.5 shrink-0 text-gold"
                />
                {company.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
