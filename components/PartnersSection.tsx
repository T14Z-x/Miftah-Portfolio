import { Reveal } from "./Reveal";

const partners = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node.js",
  "React Native",
  "SQL",
  "Python",
  "Tableau",
  "Power BI",
  "Figma",
  "Adobe XD",
];

function MarqueeRow({ offset }: { offset?: boolean }) {
  return (
    <div
      className="flex animate-marquee gap-3 whitespace-nowrap"
      style={{ animationDelay: offset ? "10s" : "0s" }}
    >
      {partners.concat(partners).map((name, idx) => (
        <span
          key={`${name}-${idx}`}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/30 hover:bg-white/10"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-14 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <Reveal className="flex flex-col gap-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
              Tools & Platforms
            </p>
            <p className="text-sm text-slate-300">
              The stack I lean on to move from insight to experience.
            </p>
          </div>
          <div className="relative h-[68px] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />
            <div className="absolute inset-0 flex items-center">
              <MarqueeRow />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
