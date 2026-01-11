import { trainingCurriculum } from "@/app/data/training";

export default function TrainingCurriculumSection() {
  return (
    <section className="bg-[color:var(--pl-cocoa)] px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-blush)]">
              What You'll Learn
            </p>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl">
              Lash mastery plus business essentials.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/70">
            A complete curriculum built for confidence behind the lash bed.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainingCurriculum.map((topic) => (
            <div
              key={topic}
              className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4"
            >
              <p className="text-sm text-white/80">{topic}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
