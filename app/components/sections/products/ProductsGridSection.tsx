import Link from "next/link";
import Placeholder from "@/app/components/Placeholder";
import { products } from "@/app/data/products";

export default function ProductsGridSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Signature Products
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Stock your kit with trusted essentials.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-[color:var(--pl-ink)]/70">
          Every item is studio-tested, retail-ready, and shipped from our
          academy floor.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5 shadow-[0_18px_35px_rgba(76,42,34,0.12)] transition hover:-translate-y-1"
          >
            <Placeholder
              label={product.name}
              className="aspect-[4/3] w-full text-[10px]"
            />
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h3 className="text-xl">{product.name}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                {product.price}
              </span>
            </div>
            <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
              {product.summary}
            </p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/55">
              {product.category}
            </p>
            <span className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-[color:var(--pl-charcoal)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition group-hover:border-[color:var(--pl-rose)] group-hover:text-[color:var(--pl-rose)]">
              View product
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
