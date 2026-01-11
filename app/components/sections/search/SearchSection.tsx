"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return products;
    }

    return products.filter((product) => {
      const haystack = `${product.name} ${product.category} ${product.summary}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Search
          </p>
          <h1 className="mt-3 text-3xl sm:text-4xl">Find your essentials.</h1>
        </div>
        <p className="text-sm text-[color:var(--pl-ink)]/70">
          {results.length} results
        </p>
      </div>
      <div className="mt-6 rounded-[28px] border border-[color:var(--pl-sand)] bg-white/80 p-4">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
          placeholder="Search by product name, category, or keyword"
        />
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5 shadow-[0_18px_35px_rgba(76,42,34,0.12)] transition hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/60 shadow-[0_25px_60px_rgba(91,52,41,0.2)]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                quality={100}
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <h2 className="text-xl">{product.name}</h2>
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
    </section>
  );
}
