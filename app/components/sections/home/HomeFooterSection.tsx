import Link from "next/link";
import { contactDetails } from "@/app/data/contact";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Shop", href: "/products" },
  { label: "Education", href: "/training" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

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
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-[color:var(--pl-sand)] pt-6 text-center text-[10px] uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/60">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {quickLinks.map((link, index) => (
            <span key={link.href} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="text-[color:var(--pl-ink)]/40">|</span>
              ) : null}
              <Link
                href={link.href}
                className="transition hover:text-[color:var(--pl-rose)]"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-2">
          <span>(c) 2025 Petty Lash</span>
          <span className="text-[color:var(--pl-ink)]/40">|</span>
          <Link
            href="https://bragdeal.com/kelowna-web-design/"
            className="transition hover:text-[color:var(--pl-rose)]"
          >
            Kelowna Web Design
          </Link>
          <span className="text-[color:var(--pl-ink)]/60">by</span>
          <Link
            href="https://bragdeal.com"
            className="transition hover:text-[color:var(--pl-rose)]"
          >
            BragDeal Inc.
          </Link>
        </p>
      </div>
    </footer>
  );
}
