import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type Project = {
  title: string;
  context: string;
  stack: string[];
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    title: "Marriage Matrimony Platform",
    context: "University Project",
    stack: ["Laravel", "PHP", "MySQL"],
    description:
      "Built a full matchmaking experience with profile onboarding, search filters, secure auth, and admin moderation workflows.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80&sat=-18",
  },
  {
    title: "Automatic Garage System",
    context: "University Project",
    stack: ["Laravel", "PHP", "MySQL", "Location services"],
    description:
      "Designed a garage booking and tracking system with live location tagging, queue visibility, and service history.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80&sat=-12",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="absolute inset-0 -z-10 rounded-[28px] bg-gradient-to-br from-cyan-500/6 via-fuchsia-500/6 to-blue-700/8 blur-[120px]" />
      <div className="absolute inset-x-8 top-16 -z-10 rounded-[32px] border border-white/5 bg-white/5 blur-3xl" />

      <div className="relative space-y-12">
        <SectionHeading
          eyebrow="Experience"
          title="University builds with production rigor"
          subtitle="Two flagship academic projects treated like client deliveries—owning research, architecture, secure auth, and polished handoff."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr,1.6fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.55)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-fuchsia-500/4 to-blue-600/6" />
              <div className="relative space-y-5">
                <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-cyan-100">
                  Academic builds
                  <span className="h-px w-8 bg-cyan-300/60" />
                </p>
                <p className="text-lg leading-relaxed text-slate-100">
                  I approached both capstone projects like client work—scoping requirements, pairing research with
                  delivery, and shipping reliable, well-documented builds.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">Approach</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      Discovery to MVP, with secure auth, clear data models, QA checklists, and stakeholder demos.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-100">Quality bar</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      Production-ready Laravel/PHP stacks, RESTful patterns, defensive error handling, and usable UI.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Laravel", "PHP", "MySQL", "User research", "Service design"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 auto-rows-[1fr]">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={80 * index} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/85 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-white/25">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 via-slate-950/40 to-slate-900/18" />
                  <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/12 to-blue-600/10 blur-3xl transition duration-700 group-hover:scale-110" />

                  <div className="relative grid h-full gap-5 lg:grid-cols-[1fr,1.4fr] lg:items-center">
                    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-inner transition duration-500 group-hover:border-cyan-300/40 group-hover:shadow-[0_12px_50px_rgba(34,211,238,0.22)]">
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/25 via-transparent to-fuchsia-500/25 mix-blend-screen" />
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-52 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-[1.06]"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/45 to-transparent" />
                      <div className="absolute left-3 top-3 flex items-center gap-2">
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                          {project.context}
                        </span>
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-100">
                          Full-stack build
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-display text-xl font-semibold text-white">
                          {project.title}
                        </h3>
                        <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                          University
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-100">
                        Outcome-driven delivery
                        <span className="h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
