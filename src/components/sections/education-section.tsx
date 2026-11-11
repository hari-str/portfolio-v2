import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import Image from "next/image";

export function EducationSection() {
  return (
    <section id="education" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="Education"
            title="Academic foundation."
            description="Computer Applications degrees that shaped my engineering fundamentals."
          />
        </BlurFade>

        <ol className="relative space-y-4 before:absolute before:bottom-4 before:left-[1.35rem] before:top-4 before:w-px before:bg-border/70">
          {portfolio.education.map((item, index) => (
            <BlurFade
              key={item.degree}
              delay={BLUR_FADE_DELAY * (2 + index)}
              inView
            >
              <li className="relative grid gap-4 rounded-2xl border border-border/70 bg-card/40 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-6 sm:p-6">
                <div className="relative z-10 flex size-11 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-background">
                  <Image
                    src={item.logoUrl}
                    alt={`${item.school} logo`}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.degree}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.school}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.school}
                    </p>
                  )}
                </div>
                <p className="font-mono text-xs text-muted-foreground sm:text-right">
                  {item.start} — {item.end}
                </p>
              </li>
            </BlurFade>
          ))}
        </ol>
      </div>
    </section>
  );
}
