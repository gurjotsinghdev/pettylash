import Link from "next/link";

const serviceItems = [
  {
    title: "Lash Extensions",
    blurb: "Classic, hybrid, and volume sets tailored to your eye shape.",
  },
  {
    title: "Lash Lift + Tint",
    blurb: "Lifted definition with a clean, effortless finish.",
  },
  {
    title: "Aftercare + Retail",
    blurb: "Pro products to keep retention strong between fills.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Our Services
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl">
          Lash artistry, customized for you.
        </h2>
        <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
          Choose from signature services designed for clean, elevated results
          and easy upkeep.
        </p>
        <div className="mt-8 space-y-4">
          {serviceItems.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/70 p-5"
            >
              <h3 className="text-xl">{service.title}</h3>
              <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:w-auto"
        >
          Book a service
        </Link>
      </div>
      <img
        src="/images/service-lash.jpeg"
        alt="Lash service in progress"
        className="aspect-square w-full rounded-[24px] object-cover"
      />
    </section>
  );
}
