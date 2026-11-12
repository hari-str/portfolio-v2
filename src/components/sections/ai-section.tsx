import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { Bot, Layers3, Workflow } from "lucide-react";

const icons = [Layers3, Bot, Workflow];

export function AiSection() {
  return (
    <section id="ai" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="AI Product Work"
            title={portfolio.aiWork.title}
            description={portfolio.aiWork.description}
          />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/40 p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.16),transparent_45%),radial-gradient(ellipse_at_bottom_left,hsl(var(--cyan)/0.12),transparent_40%)]" />
            <div className="relative grid gap-4 lg:grid-cols-3">
              {portfolio.aiWork.items.map((item, index) => {
                const Icon = icons[index] ?? Bot;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-border/70 bg-background/40 p-5 backdrop-blur-sm"
                  >
                    <div className="mb-4 inline-flex size-10 items-center justify-center rounded-xl border border-border/70 text-primary">
                      <Icon className="size-4" />
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
            <p className="relative mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Product-level AI integrations · Not ML research or model training
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
