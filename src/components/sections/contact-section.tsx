import BlurFade from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { CopyEmail } from "@/components/ui/copy-email";
import { SocialLinks } from "@/components/ui/social-links";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-wide section-pad">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/50 px-6 py-12 sm:px-10 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--glow)/0.12),transparent_55%)]" />
            <div className="relative mx-auto max-w-3xl space-y-8 text-center">
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Contact
                </p>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {portfolio.contact.heading}
                </h2>
                <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {portfolio.contact.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${portfolio.email}`}
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  <Mail className="size-4" />
                  {portfolio.email}
                </a>
                <a
                  href={`tel:${portfolio.phoneTel}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2"
                  )}
                >
                  <Phone className="size-4" />
                  {portfolio.phone}
                </a>
                <CopyEmail email={portfolio.email} />
              </div>

              <div className="flex flex-col items-center gap-4 pt-2">
                <SocialLinks />
                <p className="text-sm text-muted-foreground">
                  Prefer LinkedIn? Reach out anytime — I typically respond within
                  a day.
                </p>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
