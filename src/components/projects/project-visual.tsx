import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const accentMap = {
  indigo: "from-primary/35 via-primary/10 to-transparent",
  cyan: "from-cyan/35 via-cyan/10 to-transparent",
  zinc: "from-foreground/20 via-foreground/5 to-transparent",
} as const;

type ProjectVisualProps = {
  project: Project;
  className?: string;
  compact?: boolean;
};

export function ProjectVisual({
  project,
  className,
  compact = false,
}: ProjectVisualProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-elevated/50",
        compact ? "h-[112px] sm:h-[128px]" : "h-[140px] sm:h-[160px]",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-90",
          accentMap[project.accent]
        )}
      />
      <div className="absolute inset-0 mesh-bg opacity-30" />
      <div className="relative flex h-full items-end p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          {project.category}
        </p>
      </div>
    </div>
  );
}
