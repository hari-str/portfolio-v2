import { Icons } from "@/components/icons";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

const iconMap = {
  GitHub: Icons.github,
  LinkedIn: Icons.linkedin,
  Email: Mail,
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
        const external = social.url.startsWith("http");

        return (
          <a
            key={social.name}
            href={social.url}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={social.label}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-xl border border-border/80 bg-elevated/40 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-accent hover:text-foreground",
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
