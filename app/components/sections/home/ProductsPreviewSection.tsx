import Link from "next/link";
import Placeholder from "@/app/components/Placeholder";

const galleryItems = [
  "Studio close-up",
  "Lash detail",
  "Training day",
  "Before + after",
  "Soft glam",
  "Product flatlay",
  "Client selfie",
  "Behind the scenes",
];

export default function ProductsPreviewSection() {
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
            Shop Now
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <Placeholder key={item} label={item} className="aspect-[4/5]" />
          ))}
        </div>
      </div>
    </section>
  );
}
