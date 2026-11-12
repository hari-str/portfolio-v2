"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedStat({
  value,
  label,
  numeric,
  suffix,
}: {
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || numeric == null) {
      if (inView) setDisplay(value);
      return;
    }

    let frame = 0;
    const total = 24;
    const id = window.setInterval(() => {
      frame += 1;
      const progress = frame / total;
      const current = Math.round(numeric * progress);
      setDisplay(`${current}${suffix ?? ""}`);
      if (frame >= total) {
        window.clearInterval(id);
        setDisplay(value);
      }
    }, 30);

    return () => window.clearInterval(id);
  }, [inView, numeric, suffix, value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border/70 bg-card/40 px-5 py-6 text-center transition-colors hover:border-primary/25"
    >
      <p className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {display}
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="Impact"
            title="Engineering outcomes that matter."
            description="Verified metrics from production systems, platform scale, and collaboration."
            align="center"
            className="mx-auto"
          />
        </BlurFade>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {portfolio.achievements.map((item, index) => (
            <BlurFade
              key={item.label}
              delay={BLUR_FADE_DELAY * (2 + index)}
              inView
            >
              <AnimatedStat
                value={item.value}
                label={item.label}
                numeric={item.numeric}
                suffix={item.suffix}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
