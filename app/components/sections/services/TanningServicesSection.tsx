import { tanningServices } from "@/app/data/services";

export default function TanningServicesSection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Custom Sunless Tans
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl">Glow-ready in one visit.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {tanningServices.map((service) => (
            <div
              key={service.name}
              className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="text-xl">{service.name}</h3>
                {service.price ? (
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                    {service.price}
                  </span>
                ) : null}
              </div>
              {service.note ? (
                <p className="mt-3 text-sm text-[color:var(--pl-ink)]/70">
                  {service.note}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
