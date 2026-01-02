import Link from "next/link";

export type NavLink = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  announcement: string;
  navLinks: NavLink[];
  activeHref?: string;
};

export default function SiteHeader({
  announcement,
  navLinks,
  activeHref,
}: SiteHeaderProps) {
  return (
    <header className="relative z-10 bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <div className="border-b border-[color:var(--pl-sand)]">
        <div className="mx-auto max-w-6xl px-6 py-2 text-center text-[9px] uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/70 sm:text-[10px] sm:tracking-[0.45em]">
          {announcement}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <div className="hidden items-center gap-3 lg:flex">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--pl-sand)] text-[color:var(--pl-ink)]/70 transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
              aria-label="Search"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.1-4.4a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
                />
              </svg>
            </button>
          </div>
          <div className="text-center">
            <Link href="/#home">
              <img
                src="/pettylash-logo.png"
                alt="Petty Lash logo"
                className="mx-auto h-16 w-auto sm:h-20"
              />
            </Link>
            <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/50 sm:text-[10px] sm:tracking-[0.4em]">
              Luxury Beauty Lounge + Education
            </p>
          </div>
          <div className="hidden items-center justify-end gap-3 lg:flex">
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--pl-sand)] text-[color:var(--pl-ink)]/70 transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
              aria-label="Account"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 19.5a7.5 7.5 0 0 1 15 0"
                />
              </svg>
            </button>
            <Link
              href="/cart"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--pl-sand)] text-[color:var(--pl-ink)]/70 transition hover:border-[color:var(--pl-rose)] hover:text-[color:var(--pl-rose)]"
              aria-label="Cart"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5h2l1.4 9.5a2 2 0 0 0 2 1.7h7.6a2 2 0 0 0 2-1.5L21 8H7"
                />
                <circle cx="9" cy="19" r="1.4" />
                <circle cx="17" cy="19" r="1.4" />
              </svg>
            </Link>
          </div>
        </div>
        <nav className="mt-5 flex flex-wrap justify-center gap-4 text-[9px] uppercase tracking-[0.25em] text-[color:var(--pl-ink)]/70 sm:gap-6 sm:text-[10px] sm:tracking-[0.35em]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition hover:text-[color:var(--pl-rose)] ${
                activeHref === link.href ? "text-[color:var(--pl-rose)]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
