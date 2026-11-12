import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { Cloud, Code2, Cpu, Sparkles } from "lucide-react";

const icons = [Code2, Cpu, Cloud, Sparkles];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="Capabilities"
            title="Engineering Across the Stack"
            description="A practical map of how I design, build, and ship modern product experiences."
          />
        </BlurFade>

        <div className="grid gap-4 md:grid-cols-2">
          {portfolio.capabilities.map((capability, index) => {
            const Icon = icons[index] ?? Code2;
            return (
              <BlurFade
                key={capability.id}
                delay={BLUR_FADE_DELAY * (2 + index)}
                inView
                className={index === 0 ? "md:row-span-1" : undefined}
              >
                <article className="group h-full rounded-2xl border border-border/70 bg-card/40 p-6 transition hover:border-primary/30 hover:bg-elevated/40 sm:p-7">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="inline-flex size-11 items-center justify-center rounded-xl border border-border/70 bg-background/60 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {capability.id}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border/60 bg-background/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
