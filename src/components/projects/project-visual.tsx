import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentMap = {
  indigo: "from-primary/40 via-primary/10 to-transparent",
  cyan: "from-cyan/40 via-cyan/10 to-transparent",
  zinc: "from-foreground/20 via-foreground/5 to-transparent",
} as const;

type ProjectVisualProps = {
  project: Project;
  className?: string;
};

export function ProjectVisual({ project, className }: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border/70 bg-elevated/50",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-90",
          accentMap[project.accent]
        )}
      />
      <div className="absolute inset-0 mesh-bg opacity-40" />
      <div className="relative flex min-h-[180px] flex-col justify-between p-5 sm:min-h-[220px] sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {project.category}
        </p>
        <div>
          <p className="text-2xl font-semibold tracking-tight text-foreground">
            {project.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/60 bg-background/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
