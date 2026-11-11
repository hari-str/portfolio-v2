import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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
        "group flex h-full flex-col rounded-2xl border border-border/70 bg-card/40 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/70 sm:p-7",
        featured && "sm:p-8",
        wide && "lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-10",
        className
      )}
    >
      <div className={cn(wide && "flex flex-col")}>
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
              {project.category}
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground lg:text-2xl">
              {project.title}
            </h3>
          </div>
          {project.links?.[0] ? (
            <a
              href={project.links[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
              aria-label={`${project.title} ${project.links[0].label}`}
            >
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        {project.links?.length ? (
          <div className="mt-5 flex flex-wrap gap-3 border-t border-border/60 pt-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </a>
            ))}
          </div>
        ) : null}
      </div>

      {featured ? (
        <div
          className={cn(
            "mt-5 space-y-3",
            wide &&
              "mt-0 rounded-xl border border-border/60 bg-background/30 p-5 lg:mt-0"
          )}
        >
          {wide ? (
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Key contributions
            </p>
          ) : null}
          <ul className="space-y-2.5">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
