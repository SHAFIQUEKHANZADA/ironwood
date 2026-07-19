"use client";

import { useState } from "react";
import Icon from "./Icon";
import { company } from "@/lib/site";

/**
 * Quote request form.
 *
 * There's no backend on this site yet, so submitting composes a pre-filled
 * email to the shop instead of silently posting into the void. When an email
 * service or form endpoint is added, swap `handleSubmit` for a fetch() to it.
 */
export default function QuoteSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const body = [
      `Name: ${get("name")}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Event date: ${get("date")}`,
      `Event type: ${get("type")}`,
      `Location / venue: ${get("location")}`,
      "",
      "What they need:",
      get("message"),
    ].join("\n");

    const subject = `Rental quote request — ${get("name") || "New enquiry"}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "h-12 w-full rounded-sm border border-black/15 bg-white px-4 text-base text-ink outline-none transition focus:border-wine focus:ring-2 focus:ring-wine/20";

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact details */}
          <div>
            <h2 className="font-display text-4xl font-bold italic text-ink sm:text-5xl">
              Start Your Quote
            </h2>
            <div className="mt-5 h-0.5 w-16 bg-champagne" />
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Tell us the date, the venue and roughly how many people you&apos;re
              hosting — or what your production needs on set. We&apos;ll come
              back with availability and pricing.
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-wine">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={company.phoneHref}
                      className="text-lg font-semibold text-ink transition hover:text-wine"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-wine">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${company.email}`}
                      className="break-all text-lg font-semibold text-ink transition hover:text-wine"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-wine">
                  <Icon name="pin" size={20} />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate">
                    Service Area
                  </dt>
                  <dd className="text-lg font-semibold text-ink">
                    {company.serviceArea}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="rounded-sm bg-cream p-8 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name *"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email *"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="date" className="sr-only">
                    Event date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    className={field}
                  />
                </div>
                <div>
                  <label htmlFor="type" className="sr-only">
                    Event type
                  </label>
                  <select id="type" name="type" className={field}>
                    <option value="">Event type…</option>
                    <option>Wedding</option>
                    <option>Corporate event</option>
                    <option>Private party</option>
                    <option>Film / photo production</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="sr-only">
                    Location or venue
                  </label>
                  <input
                    id="location"
                    name="location"
                    placeholder="Location / venue"
                    className={field}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  What do you need?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="What do you need? Guest count, items, delivery details… *"
                  className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-wine focus:ring-2 focus:ring-wine/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-wine px-8 text-base font-semibold text-white transition hover:bg-wine-soft"
              >
                Send Quote Request
                <Icon name="arrow" size={18} />
              </button>

              <p
                aria-live="polite"
                className="min-h-5 text-center text-sm text-slate"
              >
                {sent
                  ? "Your email app should have opened with the details filled in. If it didn't, email us directly at " +
                    company.email
                  : ""}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
