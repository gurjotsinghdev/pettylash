import { contactDetails } from "@/app/data/contact";

export default function ContactInfoSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Location
          </p>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            {contactDetails.address[0]}
            <br />
            {contactDetails.address[1]}
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Hours
          </p>
          <div className="mt-4 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
            {contactDetails.hours.map((hour) => (
              <p key={hour}>{hour}</p>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Connect
          </p>
          <div className="mt-4 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
            <p>Phone: {contactDetails.phone}</p>
            <p>Email: {contactDetails.email}</p>
            <p>Instagram: {contactDetails.instagram}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
