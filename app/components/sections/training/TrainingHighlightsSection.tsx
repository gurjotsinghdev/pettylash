import { trainingHighlights } from "@/app/data/training";

export default function TrainingHighlightsSection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
              Why Petty Lash Pro
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Build skills that stay sharp.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-[color:var(--pl-ink)]/70">
            Training blends technique, artistry, and business structure so you
            grow faster.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainingHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/85 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]"
            >
              <h3 className="text-xl">{highlight.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--pl-ink)]/70">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
