"use client";

import { cn } from "@/lib/cn";

type TrailerModalProps = {
  open: boolean;
  onClose: () => void;
};

export function TrailerModal({ open, onClose }: TrailerModalProps) {
  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass relative w-[90vw] max-w-2xl rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close trailer"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/30 hover:text-white"
        >
          ✕
        </button>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-200/80">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 shadow-[0_0_12px_rgba(56,189,248,0.7)]" />
            Portfolio Preview
          </div>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black">
            <div className="absolute inset-0 opacity-70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.22),transparent_32%)]" />
              <div className="grid-overlay absolute inset-0" />
            </div>
            <div className="relative flex h-full items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 shadow-[0_0_40px_rgba(168,85,247,0.35)] ring-2 ring-white/20">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-600 text-slate-950 text-xl font-bold"
                  )}
                >
                  ▶
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            Showreel coming soon. A quick look at how I translate data into
            interactive prototypes, dashboards, and user journeys.
          </p>
        </div>
      </div>
    </div>
  );
}
