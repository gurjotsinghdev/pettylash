import Link from "next/link";
import { browLaminationService } from "@/app/data/services";

export default function BrowLaminationSection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Brow Lamination & Tint
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          {browLaminationService.name}
        </h2>
        <div className="mt-8 rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]">
          <p className="max-w-2xl text-sm text-[color:var(--pl-ink)]/70">
            {browLaminationService.summary}
          </p>
          <div className="mt-5 space-y-3 text-sm text-[color:var(--pl-ink)]/70">
            {browLaminationService.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {browLaminationService.pricing.map((item) => (
              <div
                key={item.name}
                className="flex flex-wrap items-center justify-between gap-3"
              >
                <span className="text-sm text-[color:var(--pl-ink)]/80">
                  {item.name}
                </span>
                {item.price ? (
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                    {item.price}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full border border-[color:var(--pl-charcoal)] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
