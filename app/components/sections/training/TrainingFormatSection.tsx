import { trainingFormat } from "@/app/data/training";

export default function TrainingFormatSection() {
  return (
    <section className="bg-[color:var(--pl-cocoa)] px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">
          Training Format
        </p>
        <h2 className="mt-4 text-3xl text-white sm:text-4xl">
          Learn online, master in person.
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {trainingFormat.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-6"
            >
              <h3 className="text-xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
