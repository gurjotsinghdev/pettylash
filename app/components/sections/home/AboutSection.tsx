export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"
    >
      <img
        src="/images/about-mirror.jpeg"
        alt="Petty Lash detail portrait"
        className="aspect-[3/4] w-full rounded-[24px] object-cover"
      />
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          About
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl">
          Lash luxury with purpose.
        </h2>
        <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
          Petty Lash pairs luxury lash artistry with boutique education in a
          calm Kelowna studio. We focus on retention, comfort, and a client-first
          flow from consult to aftercare.
        </p>
        <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
          The academy blends technique, business systems, and mentorship so
          artists leave ready to book, retain, and grow.
        </p>
      </div>
    </section>
  );
}
