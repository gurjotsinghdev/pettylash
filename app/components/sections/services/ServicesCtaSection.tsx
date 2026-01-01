import Link from "next/link";

export default function ServicesCtaSection() {
  return (
    <section className="bg-[color:var(--pl-cocoa)] px-6 py-16 text-center text-white sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">
          Ready to Book?
        </p>
        <h2 className="mt-4 text-3xl text-white sm:text-4xl">
          Lock in your appointment with The Petty Beauty Lounge.
        </h2>
        <p className="mt-4 text-sm text-white/70">
          Tap below to connect with our booking team or reach out directly.
        </p>
        <Link
          href="/#contact"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
