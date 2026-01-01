import AboutSection from "@/app/components/sections/home/AboutSection";
import BookingSection from "@/app/components/sections/home/BookingSection";
import CelebrationSection from "@/app/components/sections/home/CelebrationSection";
import CommunitySection from "@/app/components/sections/home/CommunitySection";
import FounderSection from "@/app/components/sections/home/FounderSection";
import HomeFooterSection from "@/app/components/sections/home/HomeFooterSection";
import HomeHeaderSection from "@/app/components/sections/home/HomeHeaderSection";
import HomeHeroSection from "@/app/components/sections/home/HomeHeroSection";
import ProductsPreviewSection from "@/app/components/sections/home/ProductsPreviewSection";
import ServicesSection from "@/app/components/sections/home/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <section id="home" className="bg-[color:var(--pl-cream)]">
        <HomeHeaderSection />
        <HomeHeroSection />
        <BookingSection />
      </section>
      <AboutSection />
      <CelebrationSection />
      <ProductsPreviewSection />
      <ServicesSection />
      <CommunitySection />
      <FounderSection />
      <HomeFooterSection />
    </div>
  );
}
