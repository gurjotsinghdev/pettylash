import Link from "next/link";
import { contactDetails } from "@/app/data/contact";

export default function HomeFooterSection() {
  return (
    <footer id="contact" className="bg-[color:var(--pl-cream)] px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-[color:var(--pl-sand)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Location
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            {contactDetails.address[0]}
            <br />
            {contactDetails.address[1]}
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
            <li>Classic Extensions</li>
            <li>Hybrid Extensions</li>
            <li>Volume Extensions</li>
            <li>Lash Lift + Tint</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Studio Hours
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            {contactDetails.hours.map((hour, index) => (
              <span key={hour}>
                {index > 0 ? <br /> : null}
                {hour}
              </span>
            ))}
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Contact
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            {contactDetails.email}
          </p>
          <button className="mt-4 rounded-full border border-[color:var(--pl-rose)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-[color:var(--pl-sand)] pt-6 text-xs uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/60">
        <p>(c) 2025 Petty Lash</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy-policy" className="transition hover:text-[color:var(--pl-rose)]">
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="transition hover:text-[color:var(--pl-rose)]"
          >
            Terms &amp; Conditions
          </Link>
          <Link href="/contact" className="transition hover:text-[color:var(--pl-rose)]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
