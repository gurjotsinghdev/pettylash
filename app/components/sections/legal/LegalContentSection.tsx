import type { LegalSection } from "@/app/data/legal";

type LegalContentSectionProps = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalContentSection({
  title,
  updated,
  sections,
}: LegalContentSectionProps) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
        {updated}
      </p>
      <h1 className="mt-4 text-3xl sm:text-4xl">{title}</h1>
      <div className="mt-8 space-y-6">
        {sections.map((section) => (
          <div
            key={section.heading}
            className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6"
          >
            <h2 className="text-xl">{section.heading}</h2>
            <p className="mt-3 text-sm text-[color:var(--pl-ink)]/70">
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
