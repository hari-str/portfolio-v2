"use client";

import { portfolio } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowUpRight, FileText, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  href: string;
  group: string;
};

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items = useMemo<CommandItem[]>(
    () => [
      ...NAV_LINKS.map((link) => ({
        id: link.href,
        label: link.label,
        hint: "Section",
        href: link.href,
        group: "Navigate",
      })),
      ...projects.map((project) => ({
        id: project.slug,
        label: project.title,
        hint: "Project",
        href: `/projects/${project.slug}`,
        group: "Projects",
      })),
      {
        id: "resume",
        label: "Download Resume",
        hint: "Resume",
        href: portfolio.resumeUrl,
        group: "Actions",
      },
      {
        id: "email",
        label: "Email Hariharan",
        hint: portfolio.email,
        href: `mailto:${portfolio.email}`,
        group: "Actions",
      },
    ],
    []
  );

  const filtered = items.filter((item) =>
    `${item.label} ${item.hint ?? ""}`.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function run(item: CommandItem) {
    setOpen(false);
    setQuery("");
    if (item.href.startsWith("mailto:")) {
      window.location.href = item.href;
      return;
    }
    router.push(item.href);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-lg border border-border/70 bg-elevated/40 px-2.5 py-1.5 text-xs text-muted-foreground transition hover:border-primary/30 hover:text-foreground md:inline-flex"
        aria-label="Open command palette"
      >
        <Search className="size-3.5" />
        <span>Search</span>
        <kbd className="rounded border border-border/70 px-1.5 py-0.5 font-mono text-[10px]">
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-background/70 px-4 pt-[15vh] backdrop-blur-sm">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close command palette"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border/70 px-4">
          <Search className="size-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Jump to a section, project, or action..."
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted-foreground">
              No matches
            </li>
          ) : (
            filtered.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => run(item)}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-elevated"
                  )}
                >
                  <span>
                    <span className="block font-medium text-foreground">
                      {item.label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {item.group}
                      {item.hint ? ` · ${item.hint}` : ""}
                    </span>
                  </span>
                  {item.group === "Actions" ? (
                    <FileText className="size-3.5 text-muted-foreground" />
                  ) : (
                    <ArrowUpRight className="size-3.5 text-muted-foreground" />
                  )}
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
