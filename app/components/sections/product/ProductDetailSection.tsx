import Link from "next/link";
import Placeholder from "@/app/components/Placeholder";
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
        <Placeholder
          label={`${product.name} Image`}
          className="aspect-[4/5] w-full"
        />
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
