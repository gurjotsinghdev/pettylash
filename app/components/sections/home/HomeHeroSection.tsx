import Placeholder from "@/app/components/Placeholder";

export default function HomeHeroSection() {
  return (
    <div className="relative min-h-[60vh] overflow-hidden bg-[color:var(--pl-blush)] lg:min-h-[70vh]">
      <div className="absolute inset-0">
        <Placeholder
          label="Hero Image"
          className="h-full w-full rounded-none text-sm sm:text-base"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(43,29,23,0.8),rgba(43,29,23,0.25),rgba(43,29,23,0.05))]" />
      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-5 py-10 text-center text-white sm:px-6 sm:py-12 lg:min-h-[70vh]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white sm:text-xs sm:tracking-[0.45em]">
          Beauty that saves you time. Skills that change your life.
        </p>
        <h2 className="mt-5 text-3xl leading-tight sm:text-5xl lg:text-6xl">
          Petty Lash Studio + Institute
        </h2>
        <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white sm:text-[10px] sm:tracking-[0.35em]">
          Lash artistry &amp; pro training for modern beauty careers
        </p>
        <div className="mt-6 flex w-full flex-wrap justify-center gap-4 sm:mt-8">
          <button className="w-full rounded-none bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-xs">
            Appointments
          </button>
          <button className="w-full rounded-none border border-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[color:var(--pl-charcoal)] sm:w-auto sm:px-8 sm:text-xs">
            Trainings
          </button>
        </div>
      </div>
    </div>
  );
}
