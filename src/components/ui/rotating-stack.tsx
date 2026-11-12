"use client";

import { HERO_STACK } from "@/lib/constants";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function RotatingStack() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_STACK.length);
    }, 1800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const label = HERO_STACK[index];

  return (
    <div className="inline-flex h-8 min-w-[8.5rem] items-center overflow-hidden rounded-lg border border-border/70 bg-elevated/50 px-3 font-mono text-sm text-primary">
      {reduceMotion ? (
        <span>{HERO_STACK.join(" · ")}</span>
      ) : (
        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="block"
          >
            {label}
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  );
}
