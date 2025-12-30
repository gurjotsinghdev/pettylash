const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Book Now", href: "#book" },
  { label: "Training", href: "#founder" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const serviceItems = [
  {
    title: "Lash Extensions",
    blurb: "Classic, hybrid, and volume sets customized to your features.",
  },
  {
    title: "Lash Lift + Tint",
    blurb: "Lifted definition with a soft, natural finish.",
  },
  {
    title: "Aftercare + Retail",
    blurb: "Professional products to keep your lashes healthy.",
  },
];

const galleryItems = [
  "Studio close-up",
  "Lash detail",
  "Training day",
  "Before + after",
  "Soft glam",
  "Product flatlay",
  "Client selfie",
  "Behind the scenes",
];

function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[24px] border border-white/60 bg-[linear-gradient(135deg,#f5e8df_0%,#e7cdbf_45%,#c86f5c_100%)] text-xs font-semibold uppercase tracking-[0.35em] text-white/80 shadow-[0_25px_60px_rgba(91,52,41,0.2)] ${
        className || ""
      }`}
    >
      <span className="z-10">{label}</span>
      <div className="absolute -left-16 top-1/3 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -right-10 bottom-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
      <section id="home" className="bg-[color:var(--pl-cream)]">
        <header className="relative z-10 bg-[color:var(--pl-cream)] text-[color:var(--pl-ink)]">
          <div className="border-b border-[color:var(--pl-sand)]">
            <div className="mx-auto max-w-6xl px-6 py-2 text-center text-[9px] uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/70 sm:text-[10px] sm:tracking-[0.45em]">
              A new chapter starts here · January enrollment special: $1,000 off
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
                <p className="text-[9px] uppercase tracking-[0.35em] text-[color:var(--pl-ink)]/60 sm:text-[10px] sm:tracking-[0.5em]">
                  Petty Lash
                </p>
                <h1 className="font-display text-2xl text-[color:var(--pl-charcoal)] sm:text-3xl">
                  Petty Lash
                </h1>
                <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-[color:var(--pl-ink)]/50 sm:text-[10px] sm:tracking-[0.4em]">
                  Studio + Academy
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
                <button
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
                </button>
              </div>
            </div>
            <nav className="mt-5 flex flex-wrap justify-center gap-4 text-[9px] uppercase tracking-[0.25em] text-[color:var(--pl-ink)]/70 sm:gap-6 sm:text-[10px] sm:tracking-[0.35em]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition hover:text-[color:var(--pl-rose)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <div className="relative min-h-[60vh] overflow-hidden bg-[color:var(--pl-blush)] lg:min-h-[70vh]">
          <div className="absolute inset-0">
            <Placeholder
              label="Hero Image"
              className="h-full w-full rounded-none text-sm sm:text-base"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(43,29,23,0.8),rgba(43,29,23,0.25),rgba(43,29,23,0.05))]" />
          <div className="relative z-10 mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-5 py-10 text-center text-white sm:px-6 sm:py-12 lg:min-h-[70vh]">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white sm:text-xs sm:tracking-[0.45em]">
              Beauty that saves you time. Skills that change your life.
            </p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-5xl lg:text-6xl">
              Petty Lash Studio + Institute
            </h2>
            <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white sm:text-[10px] sm:tracking-[0.35em]">
              Lash artistry &amp; pro training for modern beauty careers
            </p>
            <div className="mt-6 flex w-full flex-wrap justify-center gap-4 sm:mt-8">
              <button className="w-full rounded-none bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-charcoal)] shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-0.5 sm:w-auto sm:px-8 sm:text-xs">
                Appointments
              </button>
              <button className="w-full rounded-none border border-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[color:var(--pl-charcoal)] sm:w-auto sm:px-8 sm:text-xs">
                Trainings
              </button>
            </div>
          </div>
        </div>
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
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.75fr_1.25fr] lg:items-center"
      >
        <Placeholder label="About Image" className="aspect-[3/4] w-full" />
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            About
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            A lash lounge with intention.
          </h2>
          <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
            Petty Lash delivers luxury lash services and boutique training in a
            serene studio setting. We focus on healthy, long-lasting results and
            a client-first experience from consultation to aftercare.
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
            Our academy offers guided education, practical technique, and
            business support so artists feel confident behind the lash bed and
            ready to grow.
          </p>
        </div>
      </section>

      <section className="bg-[color:var(--pl-cocoa)] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs uppercase tracking-[0.45em] text-white/70">
            Celebrating ten years of business.
          </p>
          <h2 className="mt-4 text-3xl text-white sm:text-4xl">
            Be part of our beauty community and get ready for treatments made
            just for you.
          </h2>
        </div>
      </section>

      <section
        id="products"
        className="bg-[color:var(--pl-cream)] px-6 pb-16 pt-16 sm:pt-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
                Products
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Petty Lash Professional Products
              </h2>
            </div>
            <button className="w-full rounded-full border border-[color:var(--pl-rose)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)] sm:w-auto">
              Shop Now
            </button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <Placeholder key={item} label={item} className="aspect-[4/5]" />
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Tailored lash artistry.
          </h2>
          <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
            Choose from our signature services and treatments designed for
            effortless, elevated beauty.
          </p>
          <div className="mt-8 space-y-4">
            {serviceItems.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-[color:var(--pl-sand)] bg-white/70 p-5"
              >
                <h3 className="text-xl">{service.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--pl-ink)]/70">
                  {service.blurb}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full rounded-full bg-[color:var(--pl-charcoal)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white sm:w-auto">
            Book a Service
          </button>
        </div>
        <Placeholder label="Service Image" className="aspect-square w-full" />
      </section>

      <section
        id="community"
        className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl text-center">
          <Placeholder
            label="Community Group Photo"
            className="aspect-[16/7] w-full"
          />
          <h2 className="mt-10 text-3xl sm:text-4xl">
            Join Our Beauty Community
          </h2>
          <p className="mt-4 text-base text-[color:var(--pl-ink)]/70">
            Build a future that feels aligned and powerful with education,
            mentorship, and support.
          </p>
        </div>
      </section>

      <section
        id="founder"
        className="mx-auto grid max-w-6xl scroll-mt-24 gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"
      >
        <Placeholder label="Founder Image" className="aspect-[3/4] w-full" />
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--pl-rose)]">
            All About Our Founder
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Learn the story behind Petty Lash.
          </h2>
          <p className="mt-6 text-base leading-7 text-[color:var(--pl-ink)]/75">
            Our founder blends artistry, wellness, and education to create a
            studio experience that feels personal and restorative. Each
            masterclass is built on real studio knowledge and elevated service
            standards.
          </p>
          <p className="mt-4 text-base leading-7 text-[color:var(--pl-ink)]/75">
            Students receive clear systems, hands-on training, and ongoing
            mentorship to help them build sustainable lash businesses.
          </p>
        </div>
      </section>

      <footer id="contact" className="bg-[color:var(--pl-cream)] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 border-t border-[color:var(--pl-sand)] pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
              Location
            </h3>
            <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
              18 Mercer Avenue, Suite 4B
              <br />
              Los Angeles, CA
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
              Mon - Fri: 9am - 7pm
              <br />
              Sat: 10am - 5pm
              <br />
              Sun: Closed
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-[color:var(--pl-rose)]">
              Contact
            </h3>
            <p className="mt-4 text-sm text-[color:var(--pl-ink)]/70">
              (555) 019-2456
              <br />
              hello@pettylash.com
            </p>
            <button className="mt-4 rounded-full border border-[color:var(--pl-rose)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--pl-rose)]">
              Subscribe
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
