import { ProjectVisual } from "@/components/projects/project-visual";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  wide?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  featured = false,
  wide = false,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-all duration-300 hover:border-primary/30 hover:bg-elevated/30",
        wide && "lg:grid lg:grid-cols-[1.05fr_0.95fr]",
        className
      )}
    >
      {featured ? (
        <ProjectVisual
          project={project}
          className={cn("rounded-none border-0", wide ? "min-h-full" : "")}
        />
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            {!featured ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                {project.category}
              </p>
            ) : null}
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
              {project.title}
            </h3>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            aria-label={`View ${project.title} case study`}
          >
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>

        {project.metrics?.length ? (
          <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-border/60 bg-background/30 px-3 py-2"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {featured ? (
          <ul className="mt-5 space-y-2.5">
            {project.contributions.slice(0, wide ? 4 : 3).map((item) => (
              <li
                key={item}
                className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/70"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <ul className="flex flex-wrap gap-2">
            {project.technologies.slice(0, featured ? 6 : 4).map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Case study
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
