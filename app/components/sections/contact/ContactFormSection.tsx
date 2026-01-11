export default function ContactFormSection() {
  return (
    <section className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 rounded-[28px] border border-[color:var(--pl-sand)] bg-white/90 p-8 shadow-[0_20px_40px_rgba(76,42,34,0.12)] lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Send a message
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">Start the conversation.</h2>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            Share the service you want, your preferred dates, and any special
            requests so we can confirm your time.
          </p>
        </div>
        <form className="grid gap-4">
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Name"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Email"
          />
          <input
            className="w-full rounded-full border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Service interest"
          />
          <textarea
            className="min-h-[140px] w-full rounded-[22px] border border-[color:var(--pl-sand)] bg-white px-4 py-3 text-sm"
            placeholder="Message"
          />
          <button className="rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[color:var(--pl-rose)]">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
