"use client";

import { useState } from "react";
import Icon from "./Icon";
import { company } from "@/lib/site";

/**
 * Quote request form.
 *
 * Submits to Web3Forms (https://web3forms.com), which emails the entry to the
 * shop. The access key is public by design — Web3Forms keys are meant to live
 * in the client. To change the destination inbox, generate a new key in the
 * Web3Forms dashboard and set NEXT_PUBLIC_WEB3FORMS_KEY (falls back to the key
 * below).
 */
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ??
  "a8c6af9e-b4b3-460b-85a0-a82350197276";

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();

    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append(
      "subject",
      `Rental quote request${name ? ` — ${name}` : ""}`
    );
    data.append("from_name", "Ironwood Website");
    // Reply-To the customer, so hitting "Reply" in the inbox goes to them.
    if (email) data.append("replyto", email);

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "h-12 w-full rounded-sm border border-black/15 bg-white px-4 text-base text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20";

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact details */}
          <div>
            <h2 className="font-display text-4xl font-bold italic text-ink sm:text-5xl">
              Start Your Quote
            </h2>
            <div className="mt-5 h-0.5 w-16 bg-gold" />
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Tell us the date, the venue and roughly how many people you&apos;re
              hosting — or what your production needs on set. We&apos;ll come
              back with availability and pricing.
            </p>

            <dl className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
                  <Icon name="phone" size={20} />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={company.phoneHref}
                      className="text-lg font-semibold text-ink transition hover:text-forest"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
                  <Icon name="mail" size={20} />
                </span>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-slate">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${company.email}`}
                      className="break-all text-lg font-semibold text-ink transition hover:text-forest"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-forest">
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
              {/* Honeypot — bots fill this; real users never see it */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                style={{ display: "none" }}
              />

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
                  className="w-full rounded-sm border border-black/15 bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-forest px-8 text-base font-semibold text-white transition hover:bg-forest-soft disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send Quote Request"}
                {status !== "sending" && <Icon name="arrow" size={18} />}
              </button>

              <p
                aria-live="polite"
                className={`min-h-5 text-center text-sm ${
                  status === "error"
                    ? "text-red-600"
                    : status === "success"
                      ? "font-semibold text-forest"
                      : "text-slate"
                }`}
              >
                {status === "success" &&
                  "Thanks! Your request has been sent — we'll be in touch shortly."}
                {status === "error" &&
                  `Something went wrong. Please email us directly at ${company.email}.`}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
