import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="About"
            title="Engineering philosophy shaped by real production systems."
          />
        </BlurFade>

        <div className="space-y-6">
          {portfolio.about.paragraphs.map((paragraph, index) => (
            <BlurFade
              key={paragraph.slice(0, 24)}
              delay={BLUR_FADE_DELAY * (2 + index)}
              inView
            >
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            </BlurFade>
          ))}

          <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
            <blockquote className="rounded-2xl border border-primary/20 bg-accent/40 p-5 text-base leading-relaxed text-foreground sm:p-6 sm:text-lg">
              {portfolio.about.philosophy}
            </blockquote>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
            <ul className="grid gap-3 sm:grid-cols-2">
              {portfolio.about.focus.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border/70 bg-elevated/30 px-4 py-3 text-sm text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
