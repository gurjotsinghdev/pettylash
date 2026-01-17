export default function BookingSection() {
  return (
    <div
      id="book"
      className="relative z-10 mx-auto -mt-8 max-w-6xl px-5 pb-10 sm:-mt-10 sm:px-6"
    >
      <div className="rounded-[24px] border border-[color:var(--pl-sand)] bg-white px-6 py-6 shadow-[0_20px_40px_rgba(76,42,34,0.18)]">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--pl-ink)]/60">
            Request an appointment
          </p>
          <h3 className="text-2xl">Send your request and we will confirm.</h3>
          <p className="text-sm text-[color:var(--pl-ink)]/70">
            Share your preferred time and we will confirm availability before
            your appointment is locked in.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            placeholder="Service requested"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Instagram handle"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            type="datetime-local"
            placeholder="Preferred date & time"
          />
          <button className="w-full rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--pl-rose)] md:col-span-2 xl:col-span-3">
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
}
