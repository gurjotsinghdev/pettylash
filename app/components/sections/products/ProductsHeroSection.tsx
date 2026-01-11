import Image from "next/image";

export default function ProductsHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--pl-blush)]">
      <div className="absolute inset-0">
        <Image
          src="/images/ring-light.jpeg"
          alt="Petty Lash product hero"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(30,23,20,0.85),rgba(30,23,20,0.55),rgba(30,23,20,0.35))]" />
      <div className="relative z-10 mx-auto flex min-h-[50vh] max-w-4xl flex-col items-center justify-center px-6 py-12 text-center text-white">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/80 sm:text-xs sm:tracking-[0.45em]">
          Nearly a decade of refinement, curated for artists
        </p>
        <h1 className="mt-5 text-3xl leading-tight text-white sm:text-5xl">
          The Petty Pro Collection
        </h1>
        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/80 sm:text-[11px] sm:tracking-[0.35em]">
          Because average isn&apos;t Petty
        </p>
        <div className="mt-6 flex w-full flex-wrap justify-center gap-4 sm:mt-8">
          <button className="w-full rounded-none bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-xs">
            Shop Best Sellers
          </button>
          <button className="w-full rounded-none border border-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[color:var(--pl-charcoal)] sm:w-auto sm:px-8 sm:text-xs">
            Download Catalog
          </button>
        </div>
      </div>
    </section>
  );
}
