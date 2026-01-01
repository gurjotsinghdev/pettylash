type PlaceholderProps = {
  label: string;
  className?: string;
};

export default function Placeholder({ label, className }: PlaceholderProps) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-[24px] border border-white/60 bg-[linear-gradient(135deg,#f5e8df_0%,#e7cdbf_45%,#c86f5c_100%)] text-xs font-semibold uppercase tracking-[0.35em] text-white/80 shadow-[0_25px_60px_rgba(91,52,41,0.2)] ${
        className || ""
      }`}
    >
      <span className="z-10 text-center">{label}</span>
      <div className="absolute -left-16 top-1/3 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -right-10 bottom-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
    </div>
  );
}
