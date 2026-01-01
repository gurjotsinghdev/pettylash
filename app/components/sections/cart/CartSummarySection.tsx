import Link from "next/link";

export default function CartSummarySection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-16">
      <div className="mx-auto grid max-w-4xl gap-6 rounded-[28px] border border-[color:var(--pl-sand)] bg-white/90 p-8 text-center shadow-[0_20px_40px_rgba(76,42,34,0.12)]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Order Summary
          </p>
          <h2 className="mt-3 text-2xl">Subtotal $68</h2>
          <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
            Shipping calculated at checkout. Complimentary shipping over $120.
          </p>
        </div>
        <Link
          href="/checkout"
          className="rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--pl-rose)]"
        >
          Proceed to checkout
        </Link>
      </div>
    </section>
  );
}
