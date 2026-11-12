import BlurFade from "@/components/magicui/blur-fade";
import { ExperienceCard } from "@/components/ui/experience-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built and shipped."
            description="Measurable outcomes across full-stack product engineering, platform scale, and mentorship."
          />
        </BlurFade>

        <div className="space-y-6">
          {portfolio.experience.map((item, index) => (
            <BlurFade
              key={item.company}
              delay={BLUR_FADE_DELAY * (2 + index)}
              inView
            >
              <ExperienceCard experience={item} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
