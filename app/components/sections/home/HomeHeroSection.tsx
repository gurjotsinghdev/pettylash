"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const heroImages = [
  "/images/home-hero.jpeg",
  "/images/about-mirror.jpeg",
  "/images/ring-light.jpeg",
];

export default function HomeHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setActiveIndex((current) =>
      current === 0 ? heroImages.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % heroImages.length);
  };

  return (
    <div className="relative min-h-[60vh] overflow-hidden bg-[color:var(--pl-blush)] lg:min-h-[70vh]">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="Petty Lash hero portrait"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(30,23,20,0.88),rgba(30,23,20,0.6),rgba(30,23,20,0.4))]" />
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition hover:border-white hover:bg-white/15 sm:h-11 sm:w-11"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m15 19-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white transition hover:border-white hover:bg-white/15 sm:h-11 sm:w-11"
      >
        <svg
          aria-hidden="true"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
        </svg>
      </button>
      <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-5 py-10 text-center text-white sm:px-6 sm:py-12 lg:min-h-[70vh]">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white sm:text-xs sm:tracking-[0.45em]">
          Come pretty, leave petty.
        </p>
        <h2 className="mt-5 text-3xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Luxury beauty services on lock
        </h2>
        <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white sm:text-[10px] sm:tracking-[0.35em]">
          Lash artistry &amp; Petty Pro training | turn your skill into a bag.
          Education that pays.
        </p>
        <div className="mt-6 flex w-full flex-wrap justify-center gap-4 sm:mt-8">
          <Link
            href="/services"
            className="w-full rounded-none bg-white px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-xs"
          >
            Book Now
          </Link>
          <Link
            href="/training"
            className="w-full rounded-none border border-white px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[color:var(--pl-charcoal)] sm:w-auto sm:px-8 sm:text-xs"
          >
            Education
          </Link>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
