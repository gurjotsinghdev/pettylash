import HomeFooterSection from "@/app/components/sections/home/HomeFooterSection";
import TrainingCtaSection from "@/app/components/sections/training/TrainingCtaSection";
import TrainingCurriculumSection from "@/app/components/sections/training/TrainingCurriculumSection";
import TrainingHeaderSection from "@/app/components/sections/training/TrainingHeaderSection";
import TrainingHeroSection from "@/app/components/sections/training/TrainingHeroSection";
import TrainingHighlightsSection from "@/app/components/sections/training/TrainingHighlightsSection";
import TrainingIntroSection from "@/app/components/sections/training/TrainingIntroSection";

export default function TrainingPage() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <TrainingHeaderSection />
      <TrainingHeroSection />
      <TrainingIntroSection />
      <TrainingHighlightsSection />
      <TrainingCurriculumSection />
      <TrainingCtaSection />
      <HomeFooterSection />
    </div>
  );
}
