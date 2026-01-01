import Link from "next/link";

export default function CheckoutSummarySection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-12">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[color:var(--pl-ink)]/70">
          Need to adjust your order? Review items in the cart.
        </p>
        <Link
          href="/cart"
          className="rounded-full border border-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
        >
          Back to cart
        </Link>
      </div>
    </section>
  );
}
