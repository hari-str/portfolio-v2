import type { Experience } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ExperienceCardProps = {
  experience: Experience;
  className?: string;
};

export function ExperienceCard({ experience, className }: ExperienceCardProps) {
  return (
    <article
      className={cn(
        "relative grid gap-5 rounded-2xl border border-border/70 bg-card/40 p-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-7",
        className
      )}
    >
      <div className="flex items-start gap-4 sm:block">
        <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-background">
          <Image
            src={experience.logoUrl}
            alt={`${experience.company} logo`}
            width={40}
            height={40}
            className="object-contain"
          />
        </div>
        <div className="sm:hidden">
          <p className="font-mono text-xs text-muted-foreground">
            {experience.start} — {experience.end}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">
            {experience.role}
          </h3>
        </div>
      </div>

      <div className="min-w-0 space-y-4">
        <header className="space-y-1">
          <p className="hidden font-mono text-xs text-muted-foreground sm:block">
            {experience.start} — {experience.end}
          </p>
          <h3 className="hidden text-xl font-semibold tracking-tight sm:block">
            {experience.role}
          </h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            {experience.href ? (
              <a
                href={experience.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                {experience.company}
              </a>
            ) : (
              <span className="font-medium text-foreground">
                {experience.company}
              </span>
            )}
            <span aria-hidden="true">·</span>
            <span>{experience.location}</span>
          </div>
        </header>

        <ul className="space-y-2.5">
          {experience.achievements.map((item) => (
            <li
              key={item}
              className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:size-1.5 before:rounded-full before:bg-primary/70"
            >
              {item}
            </li>
          ))}
        </ul>

        {experience.technologies?.length ? (
          <ul className="flex flex-wrap gap-2 pt-1">
            {experience.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
