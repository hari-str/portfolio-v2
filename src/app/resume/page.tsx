import { buttonVariants } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "./print-button";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${portfolio.name} — Full Stack Developer and Frontend Engineer.`,
};

export default function ResumePage() {
  return (
    <main className="container-narrow section-pad py-10 sm:py-14">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          ← Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="rounded-2xl border border-border/70 bg-card/40 p-6 sm:p-10 print:border-0 print:bg-white print:p-0 print:text-black">
        <header className="border-b border-border/70 pb-6 print:border-neutral-300">
          <h1 className="text-3xl font-semibold tracking-tight">{portfolio.name}</h1>
          <p className="mt-1 text-muted-foreground print:text-neutral-600">
            {portfolio.title}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground print:text-neutral-700">
            <a href={`mailto:${portfolio.email}`} className="hover:text-primary">
              {portfolio.email}
            </a>
            <a href={`tel:${portfolio.phoneTel}`} className="hover:text-primary">
              {portfolio.phone}
            </a>
            <span>{portfolio.locationShort}</span>
            <a
              href={portfolio.social[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={portfolio.social[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </header>

        <section className="mt-8 space-y-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-primary print:text-neutral-800">
            Summary
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground print:text-neutral-700">
            {portfolio.about.paragraphs[0]} {portfolio.about.paragraphs[1]}
          </p>
        </section>

        <section className="mt-8 space-y-5">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-primary print:text-neutral-800">
            Experience
          </h2>
          {portfolio.experience.map((job) => (
            <div key={job.company} className="space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {job.role} · {job.company}
                </h3>
                <p className="font-mono text-xs text-muted-foreground print:text-neutral-600">
                  {job.start} — {job.end}
                </p>
              </div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground print:text-neutral-700">
                {job.achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8 space-y-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-primary print:text-neutral-800">
            Projects
          </h2>
          {portfolio.projects
            .filter((project) => project.featured)
            .map((project) => (
              <div key={project.title} className="space-y-1">
                <h3 className="font-semibold">
                  {project.title}{" "}
                  <span className="font-normal text-muted-foreground print:text-neutral-600">
                    — {project.category}
                  </span>
                </h3>
                <p className="text-sm text-muted-foreground print:text-neutral-700">
                  {project.description}
                </p>
              </div>
            ))}
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-primary print:text-neutral-800">
            Skills
          </h2>
          <div className="space-y-2">
            {portfolio.skills.map((group) => (
              <p key={group.category} className="text-sm text-muted-foreground print:text-neutral-700">
                <span className="font-medium text-foreground print:text-neutral-900">
                  {group.category}:
                </span>{" "}
                {group.skills.join(", ")}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-primary print:text-neutral-800">
            Education
          </h2>
          {portfolio.education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-wrap items-baseline justify-between gap-2"
            >
              <div>
                <p className="font-semibold">{item.degree}</p>
                <p className="text-sm text-muted-foreground print:text-neutral-700">
                  {item.school}
                </p>
              </div>
              <p className="font-mono text-xs text-muted-foreground print:text-neutral-600">
                {item.start} — {item.end}
              </p>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
