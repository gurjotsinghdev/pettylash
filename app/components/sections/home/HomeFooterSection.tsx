export default function HomeFooterSection() {
  return (
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
  );
}
