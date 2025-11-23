import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const products = [
  {
    id: "01",
    name: "Insight-Driven Strategies",
    description: "Translate business questions into SQL and Python analyses that uncover growth levers and product opportunities.",
  },
  {
    id: "02",
    name: "Dashboards & Data Stories",
    description: "Build Tableau and Power BI visuals that clarify performance, KPIs, and experimentation results for teams.",
  },
  {
    id: "03",
    name: "UX Research & Prototyping",
    description: "Plan user interviews, map journeys, and bring ideas to life in Figma and Adobe XD to validate early.",
  },
  {
    id: "04",
    name: "Product Experiments",
    description: "Design and measure UX experiments, pairing data with design iterations to improve engagement and retention.",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="absolute left-6 top-10 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 blur-2xl lg:left-8" />
      <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/25 to-fuchsia-500/25 blur-3xl" />

      <div className="relative space-y-12">
        <SectionHeading
          eyebrow="Expertise"
          title="Data and design services that ship outcomes"
          subtitle="From raw data to intuitive experiences, I connect analysis and UX so teams can make confident, user-centered decisions."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={80 * index}>
              <article className="glass relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_24px_60px_rgba(56,189,248,0.15)]">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-cyan-200">
                    {product.id}
                  </span>
                  <span className="text-cyan-200/70">Module</span>
                </div>
                <div className="mt-6 space-y-3">
              <h3 className="font-display text-2xl font-semibold text-white">
                {product.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate-300">
                {product.description}
              </p>
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 blur-2xl" />
          </article>
        </Reveal>
      ))}
    </div>
      </div>
    </section>
  );
}
