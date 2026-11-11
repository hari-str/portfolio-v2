import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { SocialLinks } from "@/components/ui/social-links";
import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowDownRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="container-wide section-pad relative grid items-center gap-12 py-16 lg:min-h-[calc(100vh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24 lg:pb-28">
        <div className="space-y-8">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/50 px-3 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>
          </BlurFade>

          <div className="space-y-4">
            <BlurFadeText
              delay={BLUR_FADE_DELAY * 2}
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              yOffset={8}
              text={portfolio.name}
            />
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="max-w-xl text-xl font-medium tracking-tight text-foreground/90 sm:text-2xl">
                {portfolio.headline}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {portfolio.tagline}
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <ul className="flex flex-wrap gap-2">
              {portfolio.heroHighlights.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border/70 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                className={cn(buttonVariants({ size: "lg" }), "gap-2")}
              >
                View Projects
                <ArrowDownRight className="size-4" />
              </Link>
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" })
                )}
              >
                Let&apos;s Connect
              </Link>
              <Link
                href={portfolio.resumeUrl}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "gap-2"
                )}
              >
                <Download className="size-4" />
                Download Resume
              </Link>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <SocialLinks />
              <span className="hidden h-4 w-px bg-border sm:block" />
              <p className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" />
                {portfolio.locationShort}
              </p>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={BLUR_FADE_DELAY * 4} className="relative">
          <div className="relative mx-auto w-full max-w-md pb-8">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/60 shadow-2xl shadow-black/20">
              <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/40 px-4 py-3">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                  hariharan@dev:~
                </span>
              </div>
              <div className="space-y-3 p-5 font-mono text-[12px] leading-relaxed text-muted-foreground sm:text-[13px]">
                <p>
                  <span className="text-primary">const</span>{" "}
                  <span className="text-foreground">engineer</span> = {"{"}
                </p>
                <p className="pl-4">
                  name:{" "}
                  <span className="text-emerald-400">
                    &quot;{portfolio.name}&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  role:{" "}
                  <span className="text-emerald-400">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </p>
                <p className="pl-4">
                  focus: [
                  <span className="text-emerald-400">&quot;React&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-emerald-400">&quot;Node.js&quot;</span>
                  ],
                </p>
                <p className="pl-4">
                  experience:{" "}
                  <span className="text-amber-300">&quot;3+ years&quot;</span>,
                </p>
                <p className="pl-4">
                  location:{" "}
                  <span className="text-emerald-400">&quot;Chennai&quot;</span>
                </p>
                <p>{"}"};</p>
                <p className="pt-2 text-primary">
                  {"// shipping scalable products"}
                  <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-primary align-middle" />
                </p>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 overflow-hidden rounded-2xl border border-border/80 bg-card/90 p-2 shadow-xl sm:block lg:-right-4">
              <Image
                src={portfolio.avatarUrl}
                alt={portfolio.name}
                width={96}
                height={96}
                className="size-16 rounded-xl object-cover sm:size-20"
                priority
              />
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
