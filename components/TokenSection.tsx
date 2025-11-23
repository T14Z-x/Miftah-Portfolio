import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "./ui/Button";

const featureBlocks = [
  {
    title: "Analytics & Strategy",
    description:
      "Turn business questions into SQL and Python analyses, dashboards, and recommendations teams can act on immediately.",
  },
  {
    title: "Design Systems & Prototypes",
    description:
      "Design user flows, wireframes, and interactive prototypes in Figma or Adobe XD with research at the center.",
  },
  {
    title: "Research & Testing",
    description:
      "Plan studies, synthesize findings, and pair qualitative insights with metrics to guide roadmaps and iterations.",
  },
];

export function TokenSection() {
  return (
    <section
      id="token"
      className="relative mx-auto max-w-6xl px-6 pt-16 pb-12 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/8 to-blue-700/10 blur-3xl" />
      <div className="relative space-y-8">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools and methods I use daily"
          subtitle="Analytics, research, and design come together here—helping teams learn fast, decide confidently, and ship purposeful experiences."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {featureBlocks.map((item, index) => (
            <Reveal key={item.title} delay={100 * index}>
              <div className="glass h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-300">
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-cyan-100">
                    Toolkit
                  </span>
                  <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
