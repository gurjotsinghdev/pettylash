export default function CheckoutFormSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[28px] border border-[color:var(--pl-sand)] bg-white/90 p-8 shadow-[0_18px_35px_rgba(76,42,34,0.12)]">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
          Checkout
        </p>
        <h1 className="mt-3 text-3xl sm:text-4xl">Shipping details</h1>
        <div className="mt-8 grid gap-4">
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Full name"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Email"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Phone"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Address"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
              placeholder="City"
            />
            <input
              className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
              placeholder="Postal code"
            />
          </div>
        </div>
        <button className="mt-8 w-full rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--pl-rose)]">
          Place order
        </button>
      </div>
      <div className="rounded-[28px] border border-[color:var(--pl-sand)] bg-white/90 p-8 shadow-[0_18px_35px_rgba(76,42,34,0.12)]">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
          Payment
        </p>
        <h2 className="mt-3 text-2xl">Secure checkout</h2>
        <p className="mt-3 text-sm text-[color:var(--pl-ink)]/70">
          Add payment details at launch. For now, preview the totals below.
        </p>
        <div className="mt-6 space-y-3 text-sm text-[color:var(--pl-ink)]/70">
          <div className="flex items-center justify-between">
            <span>Subtotal</span>
            <span>$68</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>$8</span>
          </div>
          <div className="flex items-center justify-between font-semibold text-[color:var(--pl-charcoal)]">
            <span>Total</span>
            <span>$76</span>
          </div>
        </div>
      </div>
    </section>
  );
}
