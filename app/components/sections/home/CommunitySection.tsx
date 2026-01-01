export default function CommunitySection() {
  return (
    <section id="community" className="bg-[color:var(--pl-blush)] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <img
          src="/images/ring-light.jpeg"
          alt="Petty Lash studio moment"
          className="aspect-[16/7] w-full rounded-[24px] object-cover"
        />
        <h2 className="mt-10 text-3xl sm:text-4xl">Join Our Beauty Community</h2>
        <p className="mt-4 text-base text-[color:var(--pl-ink)]/70">
          Build a future that feels aligned and powerful with education,
          mentorship, and support.
        </p>
      </div>
    </section>
  );
}
