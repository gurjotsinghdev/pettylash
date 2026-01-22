import {
  bookingHours,
  bookingSequenceRules,
  bookingServices,
} from "@/app/data/booking";

export default function BookingPolicySection() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
          Booking Details
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          Service timing and scheduling rules.
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]">
              <h3 className="text-lg">Standard booking hours</h3>
              <p className="mt-3 text-sm text-[color:var(--pl-ink)]/70">
                {bookingHours.standard}
              </p>
              <p className="mt-3 text-sm text-[color:var(--pl-ink)]/70">
                {bookingHours.requestOnly}
              </p>
            </div>
            <div className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-6 shadow-[0_18px_35px_rgba(76,42,34,0.12)]">
              <h3 className="text-lg">Scheduling rules</h3>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
                {bookingSequenceRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {bookingServices.map((category) => (
              <div
                key={category.category}
                className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/80 p-5 shadow-[0_18px_35px_rgba(76,42,34,0.12)]"
              >
                <h3 className="text-lg">{category.category}</h3>
                {category.note ? (
                  <p className="mt-2 text-xs text-[color:var(--pl-ink)]/60">
                    {category.note}
                  </p>
                ) : null}
                <div className="mt-4 space-y-3 text-sm">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-wrap items-center justify-between gap-3"
                    >
                      <span className="text-[color:var(--pl-ink)]/70">
                        {item.name}
                      </span>
                      <span className="text-[color:var(--pl-ink)]">
                        {item.duration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
