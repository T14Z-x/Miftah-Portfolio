import { Reveal } from "./Reveal";

const partners = [
  "Studio One",
  "HyperCore Labs",
  "Orbital Forge",
  "SignalWorks",
  "Pulse Interactive",
  "Helix Arc",
];

export function PartnersSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-14 lg:px-8">
      <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
              Partners
            </p>
            <p className="text-sm text-slate-300">
              Building alongside forward-looking studios and builders.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {partners.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/10"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
