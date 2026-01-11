import Link from "next/link";
import { serviceAddOns, serviceNotes } from "@/app/data/services";

export default function AddOnsSection() {
  return (
    <section className="bg-[color:var(--pl-cream)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Lash Add-Ons
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          Upgrade your lash service.
        </h2>
        <p className="mt-3 text-sm text-[color:var(--pl-ink)]/70">
          Add-ons are available exclusively with lash services.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {serviceAddOns.map((addon) => (
            <div
              key={addon.name}
              className="flex items-center justify-between rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 px-5 py-4"
            >
              <div>
                <span className="text-sm text-[color:var(--pl-ink)]/70">
                  {addon.name}
                </span>
                <div className="mt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-[color:var(--pl-charcoal)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                {addon.price}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
          {serviceNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
