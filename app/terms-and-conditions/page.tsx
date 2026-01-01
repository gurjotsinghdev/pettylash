import HomeFooterSection from "@/app/components/sections/home/HomeFooterSection";
import LegalContentSection from "@/app/components/sections/legal/LegalContentSection";
import LegalHeaderSection from "@/app/components/sections/legal/LegalHeaderSection";
import { termsAndConditions } from "@/app/data/legal";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <LegalHeaderSection />
      <LegalContentSection
        title={termsAndConditions.title}
        updated={termsAndConditions.updated}
        sections={termsAndConditions.sections}
      />
      <HomeFooterSection />
    </div>
  );
}
