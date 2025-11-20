import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const team = [
  {
    name: "Lyra Chen",
    role: "Founder & Architect",
    focus: "Designs the meta-economy and interoperability layers across realms.",
    gradient: "from-cyan-400 via-blue-500 to-fuchsia-500",
  },
  {
    name: "Milo Reyes",
    role: "AI Systems Lead",
    focus: "Builds the adaptive companion stack and real-time inference routing.",
    gradient: "from-fuchsia-400 via-rose-500 to-orange-400",
  },
  {
    name: "Rin Okada",
    role: "Experience Director",
    focus: "Shapes the cinematic UX, motion language, and player-facing surfaces.",
    gradient: "from-blue-400 via-cyan-400 to-emerald-400",
  },
];

function initials(name: string) {
  const [first = "", second = ""] = name.split(" ");
  return `${first.charAt(0)}${second.charAt(0)}`.toUpperCase();
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl px-6 py-20 lg:px-8"
    >
      <div className="relative space-y-12 rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="NovaSphere is building a fair, player-driven metagame layer"
            subtitle="We believe games should talk to each other, economies should be transparent, and AI should amplify player intent—not replace it."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={100 * index}>
              <div className="glass h-full rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br ${member.gradient} text-base font-bold text-slate-950 shadow-[0_0_24px_rgba(168,85,247,0.3)]`}
                  >
                    {initials(member.name)}
                  </div>
                  <div>
                    <p className="font-display text-lg font-semibold text-white">
                      {member.name}
                    </p>
                    <p className="text-sm text-cyan-200">{member.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {member.focus}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
