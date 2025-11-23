"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/Button"

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = useMemo(
    () => ["data-rich", "human", "immersive", "strategic", "polished"],
    []
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleIndex((prev) => (prev === titles.length - 1 ? 0 : prev + 1))
    }, 2200)

    return () => clearTimeout(timeoutId)
  }, [titleIndex, titles.length])

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/60 px-6 py-16 shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-6%] h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.12),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.12),transparent_32%)]" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-100/80">
          Data × Design Portfolio
        </div>

        <div className="space-y-4">
          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Building{" "}
            <span className="relative inline-flex w-[11ch] justify-center overflow-hidden align-baseline text-transparent">
              {titles.map((title, index) => (
                <motion.span
                  key={title}
                  className="absolute bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-blue-500 bg-clip-text font-semibold"
                  initial={{ opacity: 0, y: -60 }}
                  animate={
                    titleIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: index < titleIndex ? -100 : 100 }
                  }
                  transition={{ type: "spring", stiffness: 90, damping: 16 }}
                >
                  {title}
                </motion.span>
              ))}
            </span>{" "}
            digital experiences with clarity.
          </h1>

          <p className="text-lg leading-relaxed text-slate-200 sm:text-xl">
            I blend analytics, product strategy, and interface craft to turn
            complex data into interfaces people actually understand. From
            dashboards to interactive prototypes, I design with intention and
            ship with polish.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            SQL · Python · Figma · Spline
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Research-led UX
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            Motion + micro-interactions
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="gap-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white shadow-[0_18px_40px_rgba(56,189,248,0.28)] hover:from-cyan-400 hover:via-blue-500 hover:to-fuchsia-400"
          >
            <a href="#products">
              View portfolio <MoveRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="gap-2 border-white/30 bg-white/5 text-white hover:bg-white/10"
          >
            <a href="#contact">
              Book a call <PhoneCall className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export { Hero }
