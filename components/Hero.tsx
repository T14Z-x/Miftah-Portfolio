"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/Button";
import { TrailerModal } from "./TrailerModal";
import { Reveal } from "./Reveal";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/cn";
import { SplineScene } from "./ui/splite";
import { Card } from "./ui/card";
import { Spotlight } from "./ui/spotlight";

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
              <Card className="relative flex h-full flex-col overflow-hidden border border-white/10 bg-slate-900/80 p-0">
                <Spotlight className="-top-32 left-8 md:left-16" fill="white" />
                <div className="relative z-10 flex flex-col gap-3 p-6 text-sm text-slate-200">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-300">
                    <span className="font-display text-base text-white">Spline Motion</span>
                    <span className="flex items-center gap-2 text-cyan-200">
                      Live Scene
                      <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
                    </span>
                  </div>
                  <p className="font-semibold text-white">
                    Immersive 3D stitched into the portfolio—smooth, neon, and interactive.
                  </p>
                  <p className="text-sm text-slate-300">
                    Coded with lazy loading, glass UI, and spotlight highlights. Feel the parallax glow as Spline breathes inside the card.
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-200">Stack</p>
                      <p className="font-semibold text-white">Spline · TS · Tailwind</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-200">Style</p>
                      <p className="font-semibold text-white">Glass + Glow</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1">
                  <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
              </Card>
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
