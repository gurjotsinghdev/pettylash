import { tanningPackages } from "@/app/data/services";

export default function TanningPackagesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Tanning Packages
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Group-ready glow bundles.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[color:var(--pl-ink)]/70">
          Save when you book with friends or stock up on future tans.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {tanningPackages.map((pkg) => (
          <div
            key={pkg.name}
            className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-xl">{pkg.name}</h3>
              {pkg.price ? (
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                  {pkg.price}
                </span>
              ) : null}
            </div>
            {pkg.details ? (
              <ul className="mt-4 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
                {pkg.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
