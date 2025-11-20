"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/Button";
import { TrailerModal } from "./TrailerModal";
import { Reveal } from "./Reveal";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/cn";

const featurePills = [
  "AI-directed squads",
  "Unified player identity",
  "Adaptive economies",
];

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const heroProgress = useSectionProgress(heroRef);
  const heroStep = Math.min(2, Math.floor(heroProgress * 3));

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative isolate overflow-hidden pt-28 pb-24 sm:pb-28 md:pt-32 lg:pt-36 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute left-[5%] top-[8%] h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/40 via-fuchsia-500/30 to-blue-700/30 blur-3xl" />
        <div className="absolute right-[12%] top-[10%] h-72 w-72 rounded-full bg-gradient-to-br from-fuchsia-500/25 via-rose-500/20 to-cyan-500/30 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <Reveal
              className={cn(
                "inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cyan-200/80 transition-all",
                heroStep >= 0 ? "drop-shadow-[0_0_16px_rgba(56,189,248,0.4)]" : ""
              )}
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
              AI + gaming meta layer
            </Reveal>

            <Reveal className="space-y-4" delay={80}>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-6xl lg:text-7xl">
                <span
                  className={cn(
                    "block text-slate-200 transition-all duration-300",
                    heroStep >= 0
                      ? "text-white drop-shadow-[0_6px_24px_rgba(255,255,255,0.12)]"
                      : "text-slate-400"
                  )}
                >
                  REDEFINE
                </span>
                <span
                  className={cn(
                    "block bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent transition-all duration-300",
                    heroStep >= 1 ? "drop-shadow-[0_6px_28px_rgba(168,85,247,0.35)]" : ""
                  )}
                >
                  PLAY
                </span>
                <span
                  className={cn(
                    "block text-slate-100 transition-all duration-300",
                    heroStep >= 2
                      ? "text-white drop-shadow-[0_6px_24px_rgba(56,189,248,0.3)]"
                      : "text-slate-400"
                  )}
                >
                  REALITY
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
                NovaSphere is the AI-driven metagame layer that links every
                world you play. Command adaptive companions, sync rewards across
                galaxies, and step into a universe that is always learning from
                you.
              </p>
            </Reveal>

            <Reveal className="flex flex-wrap items-center gap-4" delay={140}>
              <Button
                href="#products"
                className={cn(
                  "transition-transform",
                  heroStep >= 1 ? "scale-[1.01] shadow-[0_10px_40px_rgba(56,189,248,0.35)]" : ""
                )}
              >
                Enter the Metagame
              </Button>
              <Button
                variant="ghost"
                onClick={() => setOpen(true)}
                className={cn(heroStep >= 1 ? "border-white/30 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)]" : "")}
              >
                Watch Trailer
              </Button>
            </Reveal>

            <Reveal className="flex flex-wrap gap-3" delay={220}>
              {featurePills.map((item) => (
                <span
                  key={item}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition-all",
                    heroStep >= 2
                      ? "border-white/30 bg-white/10 shadow-[0_12px_28px_rgba(168,85,247,0.2)]"
                      : ""
                  )}
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  {item}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal
            delay={120}
            className={cn(
              "relative h-full w-full min-h-[380px] rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all",
              heroStep >= 1 ? "shadow-[0_24px_70px_rgba(56,189,248,0.18)]" : ""
            )}
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/12 to-blue-600/10 blur-[60px]" />
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70">
              <div className="absolute inset-0">
                <div className="absolute left-[10%] top-[20%] h-40 w-40 rounded-full bg-gradient-to-br from-cyan-400/25 to-blue-500/20 blur-3xl" />
                <div className="absolute right-[10%] top-[15%] h-48 w-48 rounded-full bg-gradient-to-br from-fuchsia-500/25 to-rose-500/25 blur-3xl" />
                <div className="absolute left-[40%] top-[45%] h-64 w-64 -translate-x-1/2 rounded-full border border-white/10" />
                <div className="absolute left-[45%] top-[50%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20" />
                <div className="absolute inset-6 rounded-[34px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                <div className="grid-overlay absolute inset-0 opacity-50" />
              </div>
              <div className="relative flex h-full items-center justify-center">
                <div className="glass relative flex w-full max-w-[360px] flex-col gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-left shadow-xl">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-300">
                    <span>Player Signal</span>
                    <span className="flex items-center gap-2 text-cyan-200">
                      Aligned
                      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3">
                      <div>
                        <p className="text-sm text-slate-400">Squad Mode</p>
                        <p className="text-lg font-semibold text-white">
                          Adaptive Rush
                        </p>
                      </div>
                      <span className="rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-slate-950">
                        Live
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      {["Trust Net", "Realm Sync", "Yield Flow"].map((label) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/5 bg-white/5 px-3 py-4 text-center"
                        >
                          <p className="text-xs text-slate-400">{label}</p>
                          <p className="mt-2 text-lg font-semibold text-white">
                            {label === "Trust Net" ? "98%" : label === "Realm Sync" ? "1.2s" : "+42%"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 text-sm text-slate-300">
                    <span>NovaSphere AI link</span>
                    <span className="text-cyan-200">Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260} className="flex items-center gap-3 text-sm text-slate-300">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <div className="scroll-indicator h-6 w-[2px] rounded-full bg-gradient-to-b from-cyan-300 to-fuchsia-400" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
              Scroll
            </p>
            <p className="text-sm text-slate-300">Discover the connected realms</p>
          </div>
        </Reveal>
      </div>

      <TrailerModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
}
