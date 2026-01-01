import ContactFormSection from "@/app/components/sections/contact/ContactFormSection";
import ContactHeaderSection from "@/app/components/sections/contact/ContactHeaderSection";
import ContactHeroSection from "@/app/components/sections/contact/ContactHeroSection";
import ContactInfoSection from "@/app/components/sections/contact/ContactInfoSection";
import HomeFooterSection from "@/app/components/sections/home/HomeFooterSection";

export default function ContactPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <ContactHeaderSection />
      <ContactHeroSection />
      <ContactFormSection />
      <ContactInfoSection />
      <HomeFooterSection />
    </div>
  );
}
