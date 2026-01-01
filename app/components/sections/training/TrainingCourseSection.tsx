import Placeholder from "@/app/components/Placeholder";
import { trainingCourse } from "@/app/data/training";

export default function TrainingCourseSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <Placeholder label="Petty Lash Pro Kit" className="aspect-[4/5] w-full" />
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Course Spotlight
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl">{trainingCourse.name}</h2>
        <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
          {trainingCourse.summary}
        </p>
        <div className="mt-6 space-y-3 text-sm text-[color:var(--pl-ink)]/70">
          {trainingCourse.includes.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 px-5 py-4"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
