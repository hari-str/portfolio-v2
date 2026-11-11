import { Icons } from "@/components/icons";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
} as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {portfolio.social.map((social) => {
        const Icon = iconMap[social.name as keyof typeof iconMap];
        if (!Icon) return null;

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-lg border border-border/80 bg-card/40 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground",
              iconClassName
            )}
          >
            <Icon className="size-4" />
          </a>
        );
      })}
    </div>
  );
}
