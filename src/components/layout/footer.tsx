import { SocialLinks } from "@/components/ui/social-links";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70">
      <div className="container-wide section-pad flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{portfolio.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            © {year} · Built with Next.js & TypeScript
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}
