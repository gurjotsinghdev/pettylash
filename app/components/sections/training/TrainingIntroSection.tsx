import { trainingIntro } from "@/app/data/training";

export default function TrainingIntroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Training
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">{trainingIntro.subhead}</h2>
        </div>
        <div>
          <p className="text-base leading-7 text-[color:var(--pl-ink)]/75">
            As lash specialists, we focus on skill, safety, and a client-first
            experience. Our training gives you the confidence to create a lash
            business that reflects your talent and professionalism.
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
            {trainingIntro.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
