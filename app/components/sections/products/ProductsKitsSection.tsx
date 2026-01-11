const kitItems = [
  {
    name: "Artist Starter Kit",
    detail: "All the essentials to launch services with confidence.",
    price: "$249",
  },
  {
    name: "Studio Retail Bundle",
    detail: "Client-loved aftercare for your retail shelf.",
    price: "$310",
  },
  {
    name: "Training Day Toolkit",
    detail: "Practice kit curated for academy training days.",
    price: "$180",
  },
];

export default function ProductsKitsSection() {
  return (
    <section className="bg-[color:var(--pl-cocoa)] px-6 py-16 text-white sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.45em] text-white/60">
            Studio Kits
          </p>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            Build your pro kit in one drop.
          </h2>
          <p className="mt-4 text-sm text-white/70">
            Save time with curated bundles built by educators and working
            lash artists.
          </p>
        </div>
        <div className="space-y-4">
          {kitItems.map((kit) => (
            <div
              key={kit.name}
              className="rounded-2xl border border-white/20 bg-white/10 p-5"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl text-white">{kit.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-blush)]">
                  {kit.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/70">{kit.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
