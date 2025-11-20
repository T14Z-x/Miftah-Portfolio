export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 lg:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          © 2025 NovaSphere. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-sm text-slate-300">
          <a href="#" className="transition hover:text-white">
            Privacy
          </a>
          <a href="#" className="transition hover:text-white">
            Terms
          </a>
          <a href="#" className="transition hover:text-white">
            Docs
          </a>
        </div>
        <div className="flex items-center gap-3">
          {["X", "Discord", "GitHub"].map((network) => (
            <span
              key={network}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-100 transition hover:border-white/30 hover:bg-white/10"
            >
              {network}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
