import { RefObject, useEffect, useState } from "react";

export function usePageProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        const total = scrollHeight - clientHeight;
        const next = total > 0 ? scrollTop / total : 0;
        setProgress(clamp(next, 0, 1));
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return progress;
}

export function useSectionProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) {
          frame = 0;
          return;
        }
        const rect = el.getBoundingClientRect();
        const total = rect.height + window.innerHeight;
        const viewed = window.innerHeight - rect.top;
        const next = clamp(viewed / total, 0, 1);
        setProgress(next);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [ref]);

  return progress;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}
