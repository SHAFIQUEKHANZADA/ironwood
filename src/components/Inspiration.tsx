import Image from "next/image";

export default function Inspiration() {
  return (
    <section id="inspiration" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-sm shadow-sm">
          <div className="grid md:grid-cols-2">
            {/* Photo panel. Swap /public/inspiration.jpg for your own styled
                shot — portrait or square crops sit best here. */}
            <div className="relative min-h-70 md:min-h-full">
              <Image
                src="/inspiration.jpg"
                alt="Round tables dressed in ivory linens with candelabra and string lights at dusk"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center bg-white p-10 sm:p-14">
              <h2 className="font-display text-3xl font-bold italic text-ink sm:text-4xl">
                Get Inspired!
              </h2>
              <div className="mt-4 h-0.5 w-12 bg-wine" />
              <p className="mt-5 text-lg leading-relaxed text-slate">
                Get a first look at new arrivals, seasonal packages and setup
                ideas for your next event or shoot.
              </p>

              <form
                className="mt-7 flex flex-col gap-3 sm:flex-row"
                // Static site: wire this to your mailing-list provider when ready.
                action="#contact"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                {/* `sm:flex-1` rather than `flex-1`: in the mobile column
                    layout flex-1 zeroes the basis on the height axis and
                    collapses the field, overriding h-12. */}
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="h-12 w-full shrink-0 rounded-sm border border-black/15 px-4 text-base text-ink outline-none transition focus:border-wine focus:ring-2 focus:ring-wine/20 sm:flex-1"
                />
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-sm bg-wine px-7 text-base font-semibold text-white transition hover:bg-wine-soft"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
