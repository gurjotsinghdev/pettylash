import CheckoutFormSection from "@/app/components/sections/checkout/CheckoutFormSection";
import CheckoutSummarySection from "@/app/components/sections/checkout/CheckoutSummarySection";
import ShopFooterSection from "@/app/components/sections/shared/ShopFooterSection";
import ShopHeaderSection from "@/app/components/sections/shared/ShopHeaderSection";

export default function CheckoutPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <ShopHeaderSection />
      <CheckoutFormSection />
      <CheckoutSummarySection />
      <ShopFooterSection />
    </div>
  );
}
