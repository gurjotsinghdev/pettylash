import Link from "next/link";
import { hairMaintenance } from "@/app/data/services";

export default function HairMaintenanceSection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Routine Maintenance - Hair Extensions
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Keep your install fresh.</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {hairMaintenance.items.map((item) => (
          <div
            key={item.bundles}
            className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5 text-center"
          >
            <p className="text-lg">{item.bundles}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
              {item.price}
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[color:var(--pl-charcoal)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
            >
              Book Now
            </Link>
          </div>
        ))}
        </div>
        <p className="mt-6 text-sm text-[color:var(--pl-ink)]/70">
          {hairMaintenance.note}
        </p>
      </div>
    </section>
  );
}
