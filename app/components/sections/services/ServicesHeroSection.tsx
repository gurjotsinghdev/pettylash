import { servicesIntro } from "@/app/data/services";

export default function ServicesHeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          {servicesIntro.loungeName}
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl">
          {servicesIntro.tagline}
        </h1>
        <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
          Instagram: {servicesIntro.instagram}
        </p>
        <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
          Experience luxe beauty services tailored to your glow, your schedule,
          and your celebration moments.
        </p>
      </div>
      <img
        src="/images/ring-light.jpeg"
        alt="Petty Lash studio portrait"
        className="aspect-[4/5] w-full rounded-[24px] object-cover"
      />
    </section>
  );
}
