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
          All About Our Founder
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl">
          Learn the story behind Petty Lash.
        </h2>
        <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
          Our founder blends artistry, wellness, and education to create a
          studio experience that feels personal and restorative. Each
          masterclass is built on real studio knowledge and elevated service
          standards.
        </p>
        <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
          Students receive clear systems, hands-on training, and ongoing
          mentorship to help them build sustainable lash businesses.
        </p>
      </div>
    </section>
  );
}
