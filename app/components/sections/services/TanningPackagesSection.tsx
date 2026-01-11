import Link from "next/link";
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
            Glow bundles made for groups.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[color:var(--pl-ink)]/70">
          Save when you book together or pre-book your next glow.
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
            <Link
              href="/contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[color:var(--pl-charcoal)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
