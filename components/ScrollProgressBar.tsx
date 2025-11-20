"use client";

import { usePageProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/cn";

/**
 * Thin progress indicator that fills as the user scrolls the page.
 */
export function ScrollProgressBar() {
  const progress = usePageProgress();

  return (
    <div className="fixed left-0 top-[76px] z-40 w-full md:top-[80px]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="h-1.5 overflow-hidden rounded-full bg-white/5 ring-1 ring-inset ring-white/10 backdrop-blur">
          <div
            className={cn(
              "h-full rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-[width] duration-150 ease-out"
            )}
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
