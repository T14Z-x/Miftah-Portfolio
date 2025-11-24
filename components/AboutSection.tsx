import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const pillars = [
  {
    label: "Data analysis",
    title: "SQL · Python · Tableau / Power BI",
    copy: "Turn signals into stories—queries, dashboards, and recommendations that land with stakeholders and feed the product backlog.",
  },
  {
    label: "Front-end & UX",
    title: "React · Next.js · Tailwind CSS · React Native",
    copy: "Map journeys, validate with users, and ship accessible components and screens that feel intentional across web and mobile.",
  },
  {
    label: "Collaboration",
    title: "BRAC CS Graduate · Node.js APIs · Team facilitation",
    copy: "Guide decisions, translate goals, and keep teams aligned on outcomes over opinions with a full-stack view.",
  },
];

const stats = [
  { label: "Focus", value: "Data-led UX and production-grade React/Next.js experiences" },
  { label: "Tooling", value: "React, Next.js, Tailwind CSS, TypeScript, Node.js, React Native, SQL, Python, Tableau, Power BI, Figma, Adobe XD" },
  { label: "Approach", value: "Research, performance-focused builds, microinteractions, clarity-first storytelling" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8"
    >
      <div className="relative space-y-10 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Data-first designer & frontend engineer with a researcher's brain"
            subtitle="I bridge analytics, UX, and production-grade React/Next.js and React Native builds so teams see what matters and ship with confidence. Work spans SQL and Python deep dives, dashboards, and interactive prototypes in Figma/Adobe XD—grounded in research, performance, and motion."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/82 to-slate-900/72 p-6 shadow-xl backdrop-blur-xl">
              <div className="absolute -left-10 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-400/12 via-blue-500/12 to-fuchsia-500/12 blur-3xl" />
              <div className="absolute -right-14 bottom-0 h-52 w-52 rounded-full bg-gradient-to-br from-fuchsia-500/10 via-rose-500/12 to-cyan-400/10 blur-[120px]" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
                  Data → Design
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  I translate messy signals into experiences teams can trust.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Each engagement starts with the questions that matter, moves through SQL/Python analysis, and ends with React/Next.js builds that make decisions obvious. I keep stakeholders aligned with clear storytelling, motion, and measurable outcomes.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                      How I work
                    </p>
                    <p className="mt-1 text-slate-100">Research → Analyze → Prototype → Build → Validate → Iterate</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                      What teams get
                    </p>
                    <p className="mt-1 text-slate-100">Dashboards, UX flows, motion systems, and production-grade React/Next.js and React Native experiences.</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5">
            <div className="glass relative h-full rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg">
              <div className="absolute -right-8 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400/18 via-blue-500/18 to-fuchsia-500/18 blur-2xl" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                    Snapshot
                  </p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-cyan-100">
                    Available for remote
                  </span>
                </div>
                <div className="space-y-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-400">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                  {["Cross-functional facilitation", "Storytelling with data", "Design systems", "Performance-first React/Next.js", "Motion for clarity"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {pillars.map((pillar, index) => (
            <Reveal key={pillar.label} delay={80 * index} className="md:col-span-4">
              <div className="glass h-full rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-lg">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-300">
                  <span className="rounded-full border border-white/15 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-blue-600/20 px-3 py-1 text-cyan-50">
                    {pillar.label}
                  </span>
                  <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                </div>
                <h4 className="mt-4 font-display text-lg font-semibold text-white">
                  {pillar.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {pillar.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
