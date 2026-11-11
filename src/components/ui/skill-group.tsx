import type { SkillGroup as SkillGroupType } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type SkillGroupProps = {
  group: SkillGroupType;
  className?: string;
};

export function SkillGroup({ group, className }: SkillGroupProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/70 bg-card/40 p-5 transition-colors hover:border-border",
        className
      )}
    >
      <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-primary">
        {group.category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
