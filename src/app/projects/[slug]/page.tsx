import { ProjectVisual } from "@/components/projects/project-visual";
import { buttonVariants } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const sections = [
    { title: "Overview", body: project.caseStudy.overview },
    { title: "Problem", body: project.caseStudy.problem },
    { title: "Solution", body: project.caseStudy.solution },
    { title: "Architecture", body: project.caseStudy.architecture },
  ];

  return (
    <main className="container-wide section-pad py-10 sm:py-14">
      <Link
        href="/#projects"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "mb-8 gap-2"
        )}
      >
        <ArrowLeft className="size-3.5" />
        Back to projects
      </Link>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="space-y-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              {project.category}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.description}
            </p>
          </div>

          {project.metrics?.length ? (
            <dl className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border/70 bg-card/40 px-3 py-3"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 text-lg font-semibold">{metric.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="space-y-2">
                <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {section.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {section.body}
                </p>
              </section>
            ))}

            <section className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                My contributions
              </h2>
              <ul className="space-y-2.5">
                {project.caseStudy.contributions.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Engineering challenges
              </h2>
              <ul className="space-y-2.5">
                {project.caseStudy.challenges.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-cyan/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Measurable outcomes
              </h2>
              <ul className="space-y-2.5">
                {project.caseStudy.outcomes.map((item) => (
                  <li
                    key={item}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <ProjectVisual project={project} className="rounded-2xl border border-border/70" />
          <div className="rounded-2xl border border-border/70 bg-card/40 p-5">
            <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Technology stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-border/60 bg-background/40 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {project.links?.length ? (
              <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </aside>
      </div>
    </main>
  );
}
