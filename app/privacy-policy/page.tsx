import HomeFooterSection from "@/app/components/sections/home/HomeFooterSection";
import LegalContentSection from "@/app/components/sections/legal/LegalContentSection";
import LegalHeaderSection from "@/app/components/sections/legal/LegalHeaderSection";
import { privacyPolicy } from "@/app/data/legal";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <LegalHeaderSection />
      <LegalContentSection
        title={privacyPolicy.title}
        updated={privacyPolicy.updated}
        sections={privacyPolicy.sections}
      />
      <HomeFooterSection />
    </div>
  );
}
