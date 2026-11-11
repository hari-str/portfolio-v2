"use client";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled &&
          "border-border/70 bg-background/80 shadow-[0_1px_0_0_hsl(var(--border)/0.5)] backdrop-blur-xl"
      )}
    >
      <div className="container-wide section-pad flex h-16 items-center justify-between">
        <Link
          href="/#hero"
          className="group font-semibold tracking-tight text-foreground"
        >
          <span className="text-primary">{"<"}</span>
          {portfolio.initials}
          <span className="text-primary">{"/>"}</span>
          <span className="ml-2 hidden text-sm font-normal text-muted-foreground sm:inline">
            {portfolio.shortName}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            Let&apos;s Connect
          </Link>
          <div className="hidden md:block">
            <ModeToggle />
          </div>
          <MobileNav name={portfolio.name} />
        </div>
      </div>
    </header>
  );
}
