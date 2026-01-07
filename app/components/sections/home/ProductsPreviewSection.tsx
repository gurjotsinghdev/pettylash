import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function ProductsPreviewSection() {
  const featuredSlugs = [
    "lash-adhesive-10-ml",
    "lash-shampoo",
    "tweezers-40-per-tweezer",
  ];
  const featuredProducts = featuredSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter((product): product is (typeof products)[number] => Boolean(product));

  return (
    <section
      id="products"
      className="bg-[color:var(--pl-cream)] px-6 pb-16 pt-16 sm:pt-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
              Products
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl">
              Petty Lash Professional Products
            </h2>
          </div>
          <Link
            href="/products"
            className="w-full rounded-full border border-[color:var(--pl-rose)] px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)] sm:w-auto"
          >
            View all products
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5 shadow-[0_18px_35px_rgba(76,42,34,0.12)] transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-white/60 shadow-[0_25px_60px_rgba(91,52,41,0.2)]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="text-xl">{product.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
                  {product.price}
                </span>
              </div>
              <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
                {product.summary}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
