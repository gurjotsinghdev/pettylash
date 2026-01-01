import CartItemsSection from "@/app/components/sections/cart/CartItemsSection";
import CartSummarySection from "@/app/components/sections/cart/CartSummarySection";
import ShopFooterSection from "@/app/components/sections/shared/ShopFooterSection";
import ShopHeaderSection from "@/app/components/sections/shared/ShopHeaderSection";

export default function CartPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <ShopHeaderSection />
      <CartItemsSection />
      <CartSummarySection />
      <ShopFooterSection />
    </div>
  );
}
