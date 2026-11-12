"use client";

import { HERO_STACK } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";

type HeroOrbProps = {
  className?: string;
};

export function HeroOrb({ className }: HeroOrbProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-md", className)}>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.35),transparent_55%),radial-gradient(circle_at_70%_70%,hsl(var(--cyan)/0.25),transparent_50%)] blur-2xl" />
      <motion.div
        className="absolute inset-[12%] rounded-full border border-primary/20 bg-[conic-gradient(from_120deg,hsl(var(--primary)/0.35),hsl(var(--cyan)/0.2),transparent,hsl(var(--primary)/0.3))] opacity-80"
        animate={
          reduceMotion
            ? undefined
            : { rotate: 360, scale: [1, 1.04, 1] }
        }
        transition={
          reduceMotion
            ? undefined
            : { rotate: { duration: 28, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity } }
        }
      />
      <div className="absolute inset-[22%] rounded-full border border-border/70 bg-elevated/70 shadow-[0_0_80px_hsl(var(--primary)/0.18)] backdrop-blur-xl" />
      <div className="absolute inset-[34%] rounded-full bg-[radial-gradient(circle_at_35%_30%,hsl(var(--primary)/0.55),hsl(var(--cyan)/0.2)_45%,transparent_70%)]" />
      <div className="absolute inset-0">
        {HERO_STACK.map((label, index) => {
          const angle = (index / HERO_STACK.length) * Math.PI * 2 - Math.PI / 2;
          const radius = 46;
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;

          return (
            <span
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/70 bg-card/80 px-2.5 py-1 font-mono text-[10px] text-muted-foreground backdrop-blur-md sm:text-[11px]"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
