import Link from "next/link";
import { hairExtensions } from "@/app/data/services";

export default function HairExtensionsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
        Hair Extensions - Nanobeads
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl">
        Seamless length and volume, customized to you.
      </h2>
      <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
        {hairExtensions.intro}
      </p>
      <div className="mt-8 grid gap-4">
        {hairExtensions.lengths.map((item) => (
          <div
            key={item.length}
            className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 px-5 py-4"
          >
            <div>
              <p className="text-lg">{item.length} - {item.weight}</p>
              <p className="mt-1 text-sm text-[color:var(--pl-ink)]/70">
                Bundle add-on: {item.bundleAddOn}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                {item.price}
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[color:var(--pl-charcoal)] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-[color:var(--pl-ink)]/70">
        {hairExtensions.note}
      </p>
    </section>
  );
}
