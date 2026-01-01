import Link from "next/link";
import { lashServices } from "@/app/data/services";

type ServiceGroupProps = {
  title: string;
  items: { label: string; price: string }[];
};

function ServiceGroup({ title, items }: ServiceGroupProps) {
  return (
    <div className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]">
      <h3 className="text-xl">{title}</h3>
      <div className="mt-4 space-y-3 text-sm text-[color:var(--pl-ink)]/70">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span>{item.label}</span>
            <span className="text-[color:var(--pl-ink)]">{item.price}</span>
          </div>
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[color:var(--pl-charcoal)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
      >
        Book Now
      </Link>
    </div>
  );
}

export default function LashServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
        Lash Services
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl">Lash sets tailored to your vibe.</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ServiceGroup
          title={lashServices.megaVolume.name}
          items={lashServices.megaVolume.items}
        />
        <ServiceGroup
          title={lashServices.volumeHybridClassic.name}
          items={lashServices.volumeHybridClassic.items}
        />
      </div>
    </section>
  );
}
