import Icon from "./Icon";

const points = [
  {
    icon: "truck",
    title: "Delivered Across BC",
    desc: "From Vancouver and Burnaby to Surrey, the Fraser Valley and beyond.",
  },
  {
    icon: "clapper",
    title: "Event + Film Under One Roof",
    desc: "One supplier for the banquet floor and the production truck.",
  },
  {
    icon: "chat",
    title: "Real People, Fast Quotes",
    desc: "Tell us the date, venue and headcount — we'll price it the same day.",
  },
];

export default function TrustedSource() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold italic leading-tight text-ink sm:text-5xl">
            Your Trusted Source for All Things Event &amp; Film
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Ironwood Film&apos;s &amp; Event Rentals outfits weddings, corporate
            events, private parties and film productions across the Lower
            Mainland. Quality inventory, straight pricing, and a crew that shows
            up when it says it will.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
                <Icon name={p.icon} size={26} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
