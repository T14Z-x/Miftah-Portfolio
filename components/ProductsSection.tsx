import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const products = [
  {
    id: "01",
    name: "Nexus",
    description: "A unified hub where players sync identity, squads, and presence across every connected world.",
  },
  {
    id: "02",
    name: "Vault",
    description: "Rewards, assets, and cross-game inventory secured by NovaSphere's adaptive trust layer.",
  },
  {
    id: "03",
    name: "Aurora",
    description: "An AI companion system that learns your playstyle, surfaces tactics, and orchestrates your crew.",
  },
  {
    id: "04",
    name: "Relay",
    description: "Real-time intelligence and analytics for studios to tune experiences and economies with precision.",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <div className="absolute left-6 top-10 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 blur-2xl lg:left-8" />
      <div className="absolute right-10 top-8 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/25 to-fuchsia-500/25 blur-3xl" />

      <div className="relative space-y-12">
        <SectionHeading
          eyebrow="Products"
          title="Interconnected modules built for play"
          subtitle="Every NovaSphere module is designed to be composable. Use them alone, or combine them to orchestrate your own metagame."
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
                <div className="mt-10 flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white">
                  <span>Learn more</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                  >
                    <path
                      d="M6 12h12m0 0-5-5m5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
