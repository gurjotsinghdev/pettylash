import { contactDetails } from "@/app/data/contact";

export default function ProductsCollectiveSection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[28px] border border-[color:var(--pl-sand)] bg-white/90 p-8 shadow-[0_20px_40px_rgba(76,42,34,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Petty Lash Collective
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Exclusive pricing for certified lash artists.
          </h2>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            The Petty Lash Collective is our VIP program for certified artists.
            Members receive professional pricing on products for personal use and
            retail so you can stock luxury lashes your clients will love, and you
            profit from.
          </p>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            Submit your details and certification to get approved and receive a
            private discount code via email.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/60">
            Approvals sent to {contactDetails.email}
          </p>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
              placeholder="First name"
            />
            <input
              className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
              placeholder="Last name"
            />
          </div>
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Phone number"
            type="tel"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Instagram handle"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Business website (optional)"
          />
          <label className="grid gap-2 text-sm text-[color:var(--pl-ink)]/70">
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
              Certification photo
            </span>
            <input
              className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-2 text-sm"
              type="file"
              accept="image/*"
            />
          </label>
          <button className="rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--pl-rose)]">
            Join the collective
          </button>
        </form>
      </div>
    </section>
  );
}
