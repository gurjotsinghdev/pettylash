export default function FounderSection() {
  return (
    <section
      id="founder"
      className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
    >
      <img
        src="/images/founder-seated.jpeg"
        alt="Petty Lash founder portrait"
        className="aspect-[3/4] w-full rounded-[24px] object-cover"
      />
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Meet the founder
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl">
          Built on artistry, backed by standards.
        </h2>
        <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
          Petty Lash was built on real studio experience, a love for artistry,
          and a commitment to elevated service. Every class is rooted in the
          standards we use behind the lash bed.
        </p>
        <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
          Students get clear systems, hands-on training, and mentorship that
          supports a long-term, bookable business.
        </p>
      </div>
    </section>
  );
}
