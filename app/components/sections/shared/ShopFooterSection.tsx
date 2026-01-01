import Link from "next/link";

export default function ShopFooterSection() {
  return (
    <footer className="bg-[color:var(--pl-cream)] px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-[color:var(--pl-sand)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Studio Pickup
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            18 Mercer Avenue, Suite 4B
            <br />
            Los Angeles, CA
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
            Mon - Fri: 9am - 7pm
            <br />
            support@pettylash.com
          </p>
        </div>
        <div>
          <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
            Product Updates
          </h3>
          <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
            Join the list for restocks, drops, and pro pricing.
          </p>
          <button className="mt-4 rounded-full border border-[color:var(--pl-rose)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
            Join the list
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
