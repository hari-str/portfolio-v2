import BlurFade from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillGroup } from "@/components/ui/skill-group";
import { portfolio } from "@/data/portfolio";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I use to ship products."
            description="Compact groups by domain — no arbitrary proficiency percentages."
          />
        </BlurFade>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group, index) => (
            <BlurFade
              key={group.category}
              delay={BLUR_FADE_DELAY * (2 + index)}
              inView
            >
              <SkillGroup group={group} className="h-full" />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
