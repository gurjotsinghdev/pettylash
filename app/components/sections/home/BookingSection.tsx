export default function BookingSection() {
  return (
    <div
      id="book"
      className="relative z-10 mx-auto -mt-8 max-w-4xl px-5 pb-10 sm:-mt-10 sm:px-6"
    >
      <div className="rounded-[24px] border border-[color:var(--pl-sand)] bg-white px-6 py-6 shadow-[0_20px_40px_rgba(76,42,34,0.18)]">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-ink)]/60">
            Book a consultation
          </p>
          <h3 className="text-2xl">Reserve your lash consultation.</h3>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Full name"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Email"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Preferred date"
          />
          <button className="w-full rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--pl-rose)] md:w-auto">
            Request
          </button>
        </div>
      </div>
    </div>
  );
}
