"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-600 text-slate-950 shadow-[0_10px_40px_rgba(56,189,248,0.25)] hover:shadow-[0_16px_46px_rgba(168,85,247,0.28)] hover:-translate-y-0.5",
  ghost:
    "border border-white/15 bg-white/5 text-slate-50 hover:border-white/30 hover:bg-white/10",
  outline:
    "border border-cyan-300/50 text-cyan-100 hover:border-cyan-200 hover:bg-cyan-300/10",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
