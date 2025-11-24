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
  {
    title: "Cattle Farm Management",
    context: "Client Delivery",
    stack: ["React", "Next.js", "Tailwind CSS", "Node.js", "MySQL"],
    description:
      "Shipped a responsive dashboard for herd health, feed schedules, and supply logistics with real-time updates.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80&sat=-15",
  },
  {
    title: "Candy Shop Ecommerce",
    context: "Client Delivery",
    stack: ["React", "Next.js", "Tailwind CSS", "Stripe"],
    description:
      "Created a playful storefront with product discovery, bundling, and checkout flows optimized for mobile shoppers.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80&sat=-8",
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
          title="Selected projects across web and mobile"
          subtitle="A blend of university builds and client deliveries—spanning Laravel/PHP systems and production React/Next.js experiences."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={70 * index}>
              <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/25">
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-slate-950/50 to-slate-950/70" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-52 w-full rounded-2xl object-cover transition duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/35 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                      {project.context}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-100">
                      {project.stack[0]} · {project.stack[1]}
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">
                      {index < 2 ? "University" : "Client"}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
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
                </div>

                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/12 to-blue-600/10 blur-3xl transition duration-700 group-hover:scale-110" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
