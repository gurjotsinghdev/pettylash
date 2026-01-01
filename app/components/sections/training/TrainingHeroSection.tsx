import Link from "next/link";
import Placeholder from "@/app/components/Placeholder";
import { trainingIntro } from "@/app/data/training";

export default function TrainingHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--pl-blush)]">
      <div className="absolute inset-0">
        <Placeholder label="Training Hero" className="h-full w-full rounded-none text-sm" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(43,29,23,0.8),rgba(43,29,23,0.35),rgba(43,29,23,0.08))]" />
      <div className="relative z-10 mx-auto flex min-h-[55vh] max-w-4xl flex-col items-center justify-center px-6 py-12 text-center text-white">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/80 sm:text-xs sm:tracking-[0.45em]">
          Petty Lash Pro Training
        </p>
        <h1 className="mt-5 text-3xl leading-tight sm:text-5xl">
          {trainingIntro.headline}
        </h1>
        <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white/80 sm:text-[11px] sm:tracking-[0.35em]">
          Lash artistry + business mentorship
        </p>
        <div className="mt-6 flex w-full flex-wrap justify-center gap-4 sm:mt-8">
          <Link
            href="#contact"
            className="w-full rounded-none bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-xs"
          >
            Contact Us Now
          </Link>
          <Link
            href="/services"
            className="w-full rounded-none border border-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[color:var(--pl-charcoal)] sm:w-auto sm:px-8 sm:text-xs"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
