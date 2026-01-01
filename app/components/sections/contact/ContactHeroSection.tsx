import { contactDetails } from "@/app/data/contact";

export default function ContactHeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Contact
        </p>
        <h1 className="mt-4 text-3xl sm:text-4xl">
          Let us plan your next appointment.
        </h1>
        <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
          Reach out for bookings, training dates, or product questions. Our team
          will guide you to the right service.
        </p>
        <div className="mt-6 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
          <p>Phone: {contactDetails.phone}</p>
          <p>Email: {contactDetails.email}</p>
          <p>Instagram: {contactDetails.instagram}</p>
        </div>
      </div>
      <img
        src="/images/about-mirror.jpeg"
        alt="Petty Lash studio portrait"
        className="aspect-[4/5] w-full rounded-[24px] object-cover"
      />
    </section>
  );
}
