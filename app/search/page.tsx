import HomeFooterSection from "@/app/components/sections/home/HomeFooterSection";
import ShopHeaderSection from "@/app/components/sections/shared/ShopHeaderSection";
import SearchSection from "@/app/components/sections/search/SearchSection";

export default function SearchPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <ShopHeaderSection />
      <SearchSection />
      <HomeFooterSection />
    </div>
  );
}
