import Placeholder from "@/app/components/Placeholder";
import { founderProfile } from "@/app/data/training";

export default function TrainingFounderSection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Placeholder label="Founder Portrait" className="aspect-[4/5] w-full" />
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Meet Your Educator
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            {founderProfile.name}, {founderProfile.role}
          </h2>
          <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
            {founderProfile.bio}
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
            {founderProfile.promise}
          </p>
        </div>
      </div>
    </section>
  );
}
