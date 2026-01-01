import { notFound } from "next/navigation";
import ProductDetailSection from "@/app/components/sections/product/ProductDetailSection";
import ShopFooterSection from "@/app/components/sections/shared/ShopFooterSection";
import ShopHeaderSection from "@/app/components/sections/shared/ShopHeaderSection";
import { products } from "@/app/data/products";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <ShopHeaderSection activeHref="/products" />
      <ProductDetailSection product={product} />
      <ShopFooterSection />
    </div>
  );
}
