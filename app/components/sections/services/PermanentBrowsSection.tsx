import Link from "next/link";
import { permanentBrowsService } from "@/app/data/services";

export default function PermanentBrowsSection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Permanent Brows
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          {permanentBrowsService.name}
        </h2>
        <div className="mt-8 rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <p className="max-w-2xl text-sm text-[color:var(--pl-ink)]/70">
              {permanentBrowsService.summary}
            </p>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
              {permanentBrowsService.price}
            </span>
          </div>
          <div className="mt-5 space-y-3 text-sm text-[color:var(--pl-ink)]/70">
            {permanentBrowsService.details.map((detail) => (
              <p key={detail}>{detail}</p>
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
