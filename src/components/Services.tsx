import Icon from "./Icon";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="bg-ink py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">
            Services
          </h2>
          <div className="mx-auto mt-5 h-0.5 w-16 bg-champagne" />
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-sm border border-white/10 bg-white/5 p-7 transition hover:border-champagne/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-champagne/15 text-champagne">
                <Icon name={s.icon} size={24} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
