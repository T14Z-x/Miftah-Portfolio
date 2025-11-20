import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const realms = [
  {
    title: "The Core Realm",
    description:
      "NovaSphere's memory layer. Every action, squad callout, and trade is contextualized here, ready to sync across worlds in milliseconds.",
  },
  {
    title: "The Fringe Worlds",
    description:
      "Frontier experiences crafted by studios and communities. Experimental modes, seasonal anomalies, and daring mechanics live here.",
  },
  {
    title: "The Hidden Layer",
    description:
      "Encrypted AI simulations that forecast outcomes, balance rewards, and keep the universe fair, transparent, and player-aligned.",
  },
];

export function UniverseSection() {
  return (
    <section
      id="universe"
      className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-b from-blue-900/10 via-slate-900/30 to-slate-950/60 blur-3xl" />
      <div className="relative grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-6">
          <SectionHeading
            eyebrow="Universe"
            title="Discover the NovaSphere universe"
            subtitle="A connected metagame that is always observing, learning, and responding. Your data, moments, and squads move freely through every realm."
          />
          <p className="text-base leading-relaxed text-slate-300">
            Think of NovaSphere as a living operating system for play. AI agents
            adapt to your crew, economies tune themselves in real time, and
            stories bend based on your signals. Build with it, or simply step in
            and explore—either way, the universe evolves with you.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Persistent identities", "Context-aware AI", "Cross-realm rewards"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.16em] text-slate-200"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-5 top-4 h-[85%] w-[2px] bg-gradient-to-b from-cyan-400/80 via-fuchsia-500/50 to-blue-600/40" />
          <div className="space-y-6">
            {realms.map((realm, index) => (
              <Reveal key={realm.title} delay={120 * index}>
                <div className="glass relative rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-xl transition hover:-translate-y-1">
                  <div className="absolute -left-5 top-7 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/30 to-blue-600/30 text-slate-50 shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                    <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {realm.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {realm.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
