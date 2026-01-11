import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/app/data/products";
import { brandDetails } from "@/app/data/products";

const formatDetailValue = (value: string | string[]) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  }
  return value;
};

type ProductDetailSectionProps = {
  product: Product;
};

export default function ProductDetailSection({
  product,
}: ProductDetailSectionProps) {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
      <div className="space-y-6">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-white/60 shadow-[0_25px_60px_rgba(91,52,41,0.2)]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
            quality={100}
            priority
          />
        </div>
        <div className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Brand
          </p>
          <h3 className="mt-3 text-2xl">{brandDetails.name}</h3>
          <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
            Instagram: {brandDetails.instagram}
          </p>
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
          {product.category}
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl">{product.name}</h1>
        <p className="mt-2 text-base text-[color:var(--pl-ink)]/70">
          {product.summary}
        </p>
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/55">
          Price
        </p>
        <div className="mt-2 text-2xl font-semibold text-[color:var(--pl-charcoal)]">
          {product.price}
        </div>
        {product.details && product.details.length > 0 ? (
          <div className="mt-6 space-y-4">
            {product.details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                  {detail.label}
                </p>
                <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
                  {formatDetailValue(detail.value)}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        {product.options && product.options.length > 0 ? (
          <div className="mt-6 space-y-4">
            {product.options.map((option) => (
              <label
                key={option.label}
                className="block rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                  {option.label}
                </span>
                <select
                  className="mt-3 w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-2 text-sm text-[color:var(--pl-ink)]"
                  aria-required={option.required || undefined}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select {option.label.toLowerCase()}
                  </option>
                  {option.values.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </label>
            ))}
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/55">
              Selection required before adding to cart.
            </p>
          </div>
        ) : null}
        {product.notes && product.notes.length > 0 ? (
          <div className="mt-6 rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
              Notes
            </p>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
              {product.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/cart"
            className="w-full rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--pl-rose)] sm:w-auto"
          >
            Add to cart
          </Link>
          <Link
            href="/checkout"
            className="w-full rounded-full border border-[color:var(--pl-charcoal)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)] sm:w-auto"
          >
            Checkout now
          </Link>
        </div>
        <Link
          href="/products"
          className="mt-6 inline-flex text-xs uppercase tracking-[0.35em] text-[color:var(--pl-ink)]/60 transition hover:text-[color:var(--pl-rose)]"
        >
          Back to products
        </Link>
      </div>
    </section>
  );
}
