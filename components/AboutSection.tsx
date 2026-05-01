import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const pillars = [
  {
    label: "QA practice",
    title: "Test planning · Regression · Defect reporting",
    copy: "Create structured test scenarios, execute critical-path checks, and document issues clearly so teams can fix the right problems fast.",
  },
  {
    label: "Product validation",
    title: "Web · Mobile · API-backed workflows",
    copy: "Validate user journeys, edge cases, responsive behavior, and release readiness across modern product stacks.",
  },
  {
    label: "Collaboration",
    title: "BRAC CS Graduate · Dev-aware communication",
    copy: "Work closely with developers and stakeholders to clarify requirements, reproduce bugs, and keep releases aligned with expectations.",
  },
];

const stats = [
  { label: "Focus", value: "QA-first product validation for reliable web and mobile releases" },
  { label: "Tooling", value: "React, Next.js, Tailwind CSS, TypeScript, Node.js, React Native, Laravel, PHP, MySQL, REST APIs" },
  { label: "Approach", value: "Requirement review, risk-based testing, regression coverage, and clear documentation" },
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
            title="QA-focused software graduate with a product mindset"
            subtitle="I help teams ship stable products through requirement analysis, structured testing, and developer-aware validation across React/Next.js, React Native, Laravel, and API-backed workflows."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-950/90 via-slate-900/82 to-slate-900/72 p-6 shadow-xl backdrop-blur-xl">
              <div className="absolute -left-10 -top-12 h-44 w-44 rounded-full bg-gradient-to-br from-cyan-400/12 via-blue-500/12 to-fuchsia-500/12 blur-3xl" />
              <div className="absolute -right-14 bottom-0 h-52 w-52 rounded-full bg-gradient-to-br from-fuchsia-500/10 via-rose-500/12 to-cyan-400/10 blur-[120px]" />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
                  Quality → Confidence
                </div>
                <h3 className="font-display text-2xl font-semibold text-white">
                  I turn ambiguous requirements into release-ready checks.
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Each engagement starts with understanding the product,
                  then moves through test case design, exploratory coverage,
                  defect reporting, re-testing, and final validation. I focus
                  on clarity, reproducibility, and smooth collaboration so
                  releases stay stable and predictable.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                      How I work
                    </p>
                    <p className="mt-1 text-slate-100">Review requirements → Design test cases → Execute → Report defects → Re-test → Sign off</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                      What teams get
                    </p>
                    <p className="mt-1 text-slate-100">Test cases, bug reports, regression coverage, UAT support, and cleaner releases.</p>
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
                  {["Cross-functional communication", "Bug reporting", "Regression testing", "Front-end-aware QA", "Usability validation"].map((chip) => (
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
