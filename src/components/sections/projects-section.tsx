import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects, getSecondaryProjects } from "@/data/projects";
import { BLUR_FADE_DELAY } from "@/lib/constants";

export function ProjectsSection() {
  const featured = getFeaturedProjects();
  const secondary = getSecondaryProjects();

  return (
    <section id="projects" className="border-b border-border/60 py-20 sm:py-28">
      <div className="container-wide section-pad space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading
            eyebrow="Projects"
            title="Engineering case studies with measurable impact."
            description="Production platforms and selected builds — focused on scale, performance, and product outcomes."
          />
        </BlurFade>

        <div className="grid gap-5">
          {featured.map((project, index) => (
            <BlurFade
              key={project.slug}
              delay={BLUR_FADE_DELAY * (2 + index)}
              inView
            >
              <ProjectCard project={project} featured />
            </BlurFade>
          ))}
        </div>

        <div className="space-y-5">
          <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              More projects
            </h3>
          </BlurFade>
          <div className="grid gap-4 md:grid-cols-2">
            {secondary.map((project, index) => (
              <BlurFade
                key={project.slug}
                delay={BLUR_FADE_DELAY * (7 + index)}
                inView
              >
                <ProjectCard project={project} />
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
