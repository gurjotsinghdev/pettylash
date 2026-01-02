import AddOnsSection from "@/app/components/sections/services/AddOnsSection";
import HairExtensionsSection from "@/app/components/sections/services/HairExtensionsSection";
import HairMaintenanceSection from "@/app/components/sections/services/HairMaintenanceSection";
import LashServicesSection from "@/app/components/sections/services/LashServicesSection";
import MobileTanningSection from "@/app/components/sections/services/MobileTanningSection";
import PermanentBrowsSection from "@/app/components/sections/services/PermanentBrowsSection";
import ServicesCtaSection from "@/app/components/sections/services/ServicesCtaSection";
import ServicesHeaderSection from "@/app/components/sections/services/ServicesHeaderSection";
import ServicesHeroSection from "@/app/components/sections/services/ServicesHeroSection";
import TanningPackagesSection from "@/app/components/sections/services/TanningPackagesSection";
import TanningServicesSection from "@/app/components/sections/services/TanningServicesSection";
import TeethWhiteningSection from "@/app/components/sections/services/TeethWhiteningSection";
import HomeFooterSection from "@/app/components/sections/home/HomeFooterSection";

export default function ServicesPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <ServicesHeaderSection />
      <ServicesHeroSection />
      <TanningServicesSection />
      <TanningPackagesSection />
      <MobileTanningSection />
      <HairExtensionsSection />
      <HairMaintenanceSection />
      <LashServicesSection />
      <TeethWhiteningSection />
      <PermanentBrowsSection />
      <AddOnsSection />
      <ServicesCtaSection />
      <HomeFooterSection />
    </div>
  );
}
