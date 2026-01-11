import Link from "next/link";
import { contactDetails } from "@/app/data/contact";

export default function ShopFooterSection() {
  return (
    <footer className="bg-[color:var(--pl-cream)] px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-[color:var(--pl-sand)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Studio Pickup
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            {contactDetails.address[0]}
            <br />
            {contactDetails.address[1]}
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Shipping
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--pl-ink)]/70">
            <li>Domestic: 2-4 days</li>
            <li>International: 7-10 days</li>
            <li>Free over $120</li>
            <li>Local pickup available</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Support
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            {contactDetails.hours.map((hour, index) => (
              <span key={hour}>
                {index > 0 ? <br /> : null}
                {hour}
              </span>
            ))}
            <br />
            {contactDetails.email}
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Product Updates
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            Follow @pettylashhh for restocks, drops, and pro pricing.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-[color:var(--pl-sand)] pt-6 text-xs uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/60">
        <p>(c) 2025 Petty Lash</p>
        <p>
          <Link
            href="https://bragdeal.com/kelowna-web-design/"
            className="transition hover:text-[color:var(--pl-rose)]"
          >
            Kelowna Web Design
          </Link>{" "}
          by{" "}
          <Link
            href="https://bragdeal.com"
            className="transition hover:text-[color:var(--pl-rose)]"
          >
            BragDeal Inc.
          </Link>
        </p>
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
