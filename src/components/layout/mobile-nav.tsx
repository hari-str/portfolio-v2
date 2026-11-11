"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { SocialLinks } from "@/components/ui/social-links";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type MobileNavProps = {
  name: string;
};

export function MobileNav({ name }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border/70 bg-card/40 text-foreground"
      >
        {open ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>

      <div
        className={cn(
          "fixed inset-x-0 top-16 z-40 border-b border-border/70 bg-background/95 px-5 py-6 backdrop-blur-xl transition-all",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-5">
          <div>
            <p className="text-xs text-muted-foreground">{name}</p>
            <SocialLinks className="mt-3" />
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
