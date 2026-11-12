import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { buttonVariants } from "@/components/ui/button";
import { HeroOrb } from "@/components/ui/hero-orb";
import { RotatingStack } from "@/components/ui/rotating-stack";
import { SocialLinks } from "@/components/ui/social-links";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight, Download, Mail } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-50" />
      <div className="container-wide section-pad relative grid items-center gap-12 py-16 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-24">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-cyan" />
              </span>
              Available for opportunities
            </div>
          </BlurFade>

          <div className="space-y-5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              yOffset={8}
              text={portfolio.name}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                {portfolio.roles.join(" · ")}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="max-w-xl text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl">
                {portfolio.headline}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {portfolio.tagline}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-muted-foreground">Building with</span>
                <RotatingStack />
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <ul className="flex flex-wrap gap-2">
              {portfolio.heroHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border/70 bg-elevated/40 px-3 py-1.5 text-xs text-muted-foreground sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                Explore My Work
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={portfolio.resumeUrl}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2"
                )}
              >
                <Download className="size-4" />
                Download Resume
              </Link>
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "gap-2"
                )}
              >
                <Mail className="size-4" />
                Contact Me
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <SocialLinks />
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 5} className="relative">
          <HeroOrb />
        </BlurFade>
      </div>
    </section>
  );
}
