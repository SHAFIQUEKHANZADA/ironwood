"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import MountainRule from "./MountainRule";
import { company, navLinks } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
          Burgundy utility bar: search (left) · Get a Quote (centre) ·
          menu (right) — mirroring the reference site's mobile header.
      ---------------------------------------------------------------- */}
      <div className="bg-wine text-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4">
          {/* Left: search */}
          <div className="flex flex-1 items-center gap-4">
            <button
              type="button"
              aria-label="Search"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((v) => !v)}
              className="rounded-full p-1.5 text-white transition hover:bg-white/15"
            >
              <Icon name="search" size={26} strokeWidth={2} />
            </button>
            <a
              href={company.phoneHref}
              className="hidden text-sm font-medium text-white/90 transition hover:text-white lg:block"
            >
              {company.phone}
            </a>
          </div>

          {/* Quote pill — centred on mobile (per the reference), pushed to the
              far right on desktop where there's room for it. */}
          <Link
            href="#contact"
            className="rounded-full bg-white px-7 py-2.5 text-base font-semibold text-ink shadow-sm transition hover:bg-cream lg:order-last"
          >
            Get a Quote
          </Link>

          {/* Right: menu */}
          <div className="flex flex-1 items-center justify-end gap-4">
            <span className="hidden text-sm text-white/90 lg:block">
              {company.serviceArea}
            </span>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-full p-1.5 text-white transition hover:bg-white/15 lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} size={30} strokeWidth={2.4} />
            </button>
          </div>
        </div>

        {/* Search drawer */}
        {searchOpen && (
          <div className="border-t border-white/15 bg-wine-dark">
            <div className="mx-auto max-w-7xl px-4 py-3">
              <label htmlFor="site-search" className="sr-only">
                Search the catalog
              </label>
              <input
                id="site-search"
                type="search"
                placeholder="Search entire store here…"
                className="h-11 w-full rounded-sm border border-white/20 bg-white/95 px-4 text-base text-ink outline-none placeholder:text-slate/70 focus:ring-2 focus:ring-champagne"
              />
            </div>
          </div>
        )}
      </div>

      {/* ---------------------------------------------------------------
          White brand bar: logo (left) · View Your Cart (right),
          with the mountain-range rule along the bottom edge.
      ---------------------------------------------------------------- */}
      <div className="relative bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 pb-6 pt-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 flex-col leading-none">
            <span className="font-display text-3xl font-bold tracking-tight text-wine sm:text-4xl">
              IRONWOOD
            </span>
            <span className="mt-1 font-display text-sm italic text-ink sm:text-base">
              films <span className="not-italic text-wine">+</span> event rentals
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-ink transition hover:text-wine"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart */}
          <button
            type="button"
            className="flex shrink-0 items-center gap-2 text-ink transition hover:text-wine"
          >
            <span className="text-base font-semibold sm:text-lg">
              View Your Cart
            </span>
            <span className="relative">
              <Icon name="cart" size={30} strokeWidth={1.8} />
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-wine px-1 text-[11px] font-bold text-white">
                0
              </span>
            </span>
          </button>
        </div>

        {/* mountain rule */}
        <MountainRule className="absolute inset-x-0 bottom-0 h-10 w-full text-slate/50" />
      </div>

      {/* ---------------------------------------------------------------
          Mobile drawer — full-height wine panel that slides in from the
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
          className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-linear-to-b from-wine via-wine-dark to-[#260d15] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* panel header */}
          <div className="flex items-start justify-between px-7 pb-6 pt-7">
            <div className="leading-none">
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                IRONWOOD
              </span>
              <span className="mt-1.5 block font-display text-xs italic text-champagne">
                films <span className="not-italic">+</span> event rentals
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

          <div className="mx-7 h-px bg-linear-to-r from-champagne/60 to-transparent" />

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
                    <span className="w-5 shrink-0 text-[11px] font-semibold tabular-nums text-champagne/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl text-white transition-colors group-hover:text-champagne">
                      {link.label}
                    </span>
                    <Icon
                      name="arrow"
                      size={16}
                      className="ml-auto self-center text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-champagne"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + contact */}
          <div className="mt-auto px-7 pb-9 pt-6">
            <Link
              href="#contact"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="flex h-13 w-full items-center justify-center gap-2 rounded-full bg-accent text-base font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-accent-dark"
            >
              Start Your Quote
              <Icon name="arrow" size={16} />
            </Link>

            <div className="mt-7 space-y-3.5">
              <a
                href={company.phoneHref}
                tabIndex={open ? 0 : -1}
                className="flex items-center gap-3 text-sm text-white/85 transition hover:text-champagne"
              >
                <Icon name="phone" size={16} className="text-champagne" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                tabIndex={open ? 0 : -1}
                className="flex items-center gap-3 break-all text-sm text-white/85 transition hover:text-champagne"
              >
                <Icon name="mail" size={16} className="shrink-0 text-champagne" />
                {company.email}
              </a>
              <p className="flex items-start gap-3 text-sm leading-snug text-white/60">
                <Icon
                  name="pin"
                  size={16}
                  className="mt-0.5 shrink-0 text-champagne"
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
