"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Button } from "./ui/Button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#products" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#universe" },
  { label: "Toolkit", href: "#token" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-white/10 backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "glass bg-slate-950/80 shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
          : "bg-white/5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex items-center gap-8 lg:gap-10">
          <a
            href="#home"
            className="group flex items-center gap-3 text-lg font-semibold tracking-wide text-white"
          >
            <span className="relative inline-flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/60 via-fuchsia-500/70 to-blue-700/60 blur-[1px] group-hover:glow transition-all" />
                <span className="absolute left-[2px] top-[2px] h-7 w-7 rounded-full bg-slate-900/80 backdrop-blur" />
                <span className="relative text-sm font-bold text-white tracking-wide">
                  
                </span>
              </span>
              <span className="relative text-xl font-display">Ashfiqun A. Miftah</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-200 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={activeId === item.href.slice(1) ? "true" : undefined}
                className={cn(
                  "group relative inline-flex items-center gap-2 uppercase tracking-[0.14em] transition-colors hover:text-white",
                  activeId === item.href.slice(1)
                    ? "text-white"
                    : "text-slate-200"
                )}
              >
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-600 transition-all duration-300",
                    activeId === item.href.slice(1) ? "w-full" : "group-hover:w-full"
                  )}
                />
                {item.label}
              </a>
            ))}
            <Button asChild className="ml-2">
              <a href="#contact">Let&apos;s Connect</a>
            </Button>
          </nav>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Button asChild className="hidden sm:inline-flex px-4 py-2 text-xs">
            <a href="#contact">Let&apos;s Connect</a>
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className={cn(
              "relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-all",
              open ? "border-cyan-400/70 shadow-[0_0_35px_rgba(56,189,248,0.3)]" : "hover:border-white/30"
            )}
          >
            <span
              className={cn(
                "absolute h-[2px] w-6 bg-white transition-all",
                open ? "translate-y-0 rotate-45" : "-translate-y-2"
              )}
            />
            <span
              className={cn(
                "absolute h-[2px] w-6 bg-white transition-all",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute h-[2px] w-6 bg-white transition-all",
                open ? "translate-y-0 -rotate-45" : "translate-y-2"
              )}
            />
          </button>
        </div>
      </div>

      {open ? (
        <div className="md:hidden">
          <div className="glass mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-900/90 p-4 text-sm uppercase tracking-[0.14em] text-slate-200 shadow-2xl">
            <div className="flex flex-col divide-y divide-white/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={activeId === item.href.slice(1) ? "true" : undefined}
                className={cn(
                  "flex items-center justify-between px-2 py-4 transition-colors hover:text-white",
                  activeId === item.href.slice(1)
                    ? "text-white"
                    : "text-slate-200"
                )}
              >
                {item.label}
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-600 shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
              </a>
            ))}
              <div className="pt-4">
                <Button asChild className="w-full text-center">
                  <a href="#contact">Let&apos;s Connect</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
