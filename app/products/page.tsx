import ProductsGridSection from "@/app/components/sections/products/ProductsGridSection";
import ProductsHeroSection from "@/app/components/sections/products/ProductsHeroSection";
import ProductsCollectiveSection from "@/app/components/sections/products/ProductsCollectiveSection";
import ProductsKitsSection from "@/app/components/sections/products/ProductsKitsSection";
import ProductsWholesaleSection from "@/app/components/sections/products/ProductsWholesaleSection";
import ShopFooterSection from "@/app/components/sections/shared/ShopFooterSection";
import ShopHeaderSection from "@/app/components/sections/shared/ShopHeaderSection";

export default function ProductsPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <ShopHeaderSection activeHref="/products" />
      <ProductsHeroSection />
      <ProductsGridSection />
      <ProductsCollectiveSection />
      <ProductsKitsSection />
      <ProductsWholesaleSection />
      <ShopFooterSection />
    </div>
  );
}
