import Placeholder from "@/app/components/Placeholder";

const cartItems = [
  {
    name: "Lash Trays",
    detail: "C, CC, D curls - Mixed length",
    price: "$24",
    quantity: 2,
  },
  {
    name: "Non-Slip Gel Eyepads",
    detail: "Cooling comfort pack",
    price: "$20",
    quantity: 1,
  },
];

export default function CartItemsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Your Cart
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl">Ready for checkout.</h1>
        </div>
        <p className="text-sm text-[color:var(--pl-ink)]/70">
          {cartItems.length} items curated for your next set.
        </p>
      </div>
      <div className="mt-10 space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.name}
            className="grid gap-6 rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5 sm:grid-cols-[120px_1fr_auto] sm:items-center"
          >
            <Placeholder label={item.name} className="aspect-[4/5] w-full" />
            <div>
              <h2 className="text-xl">{item.name}</h2>
              <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
                {item.detail}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/55">
                Qty {item.quantity}
              </p>
            </div>
            <div className="text-right text-lg font-semibold text-[color:var(--pl-charcoal)]">
              {item.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
