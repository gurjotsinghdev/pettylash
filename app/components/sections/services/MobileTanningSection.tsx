import { mobileTanningService } from "@/app/data/services";

export default function MobileTanningSection() {
  return (
    <section className="bg-[color:var(--pl-cocoa)] px-6 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.45em] text-white/60">
          Additional Tanning Service
        </p>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="text-3xl text-white sm:text-4xl">
            {mobileTanningService.name}
          </h2>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-blush)]">
            {mobileTanningService.price}
          </span>
        </div>
        <div className="mt-6 space-y-3 text-sm text-white/70">
          {mobileTanningService.details?.map((detail) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
