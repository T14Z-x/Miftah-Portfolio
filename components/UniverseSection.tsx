import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const realms = [
  {
    title: "Discover & Define",
    description:
      "Kick off with business goals, success metrics, and user signals—scoping both UX and front-end requirements before a query or a commit.",
  },
  {
    title: "Analyze & Map",
    description:
      "Dig into SQL and Python, uncover patterns, and translate findings into journeys, component architecture, and performance requirements for React/Next.js.",
  },
  {
    title: "Prototype & Validate",
    description:
      "Wireframe in Figma or Adobe XD, layer in motion, and test with users. Iterate quickly, then ship validated flows as reusable components across web and React Native.",
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
            eyebrow="Process"
            title="An approach that bridges data, design, and front-end engineering"
            subtitle="From the first question to the final prototype, I translate insight into React/Next.js experiences that feel intentional, performant, and measurable."
          />
          <p className="text-base leading-relaxed text-slate-300">
            I move between databases and design tools to align product teams,
            reduce ambiguity, and keep users at the center. Each loop pairs
            analytical rigor with production-grade React/Next.js builds so stakeholders
            see what matters, ship faster, and measure outcomes.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "SQL + Python",
              "React / Next.js / Tailwind CSS",
              "Tableau / Power BI",
              "Figma / Adobe XD",
            ].map(
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
