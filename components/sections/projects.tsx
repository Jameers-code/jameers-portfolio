import { ArrowUpRight, Star, Wrench } from "lucide-react";
import { Github } from "@/components/shared/brand-icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { SpotlightCard } from "@/components/shared/spotlight-card";
import { Reveal } from "@/components/shared/reveal";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

/** Small badge marking placeholder content the owner should replace. */
function TodoBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-amber-500/50 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
      <Wrench className="size-3" />
      Placeholder
    </span>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-lg border border-border/70 bg-background/50 px-2.5 py-1 text-xs font-medium text-muted-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm font-medium transition-colors hover:border-brand/40 hover:text-foreground"
      >
        <Github className="size-4" />
        Code
      </a>
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
        >
          Live demo
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-border/70 px-4 py-2 text-sm font-medium text-muted-foreground/70">
          {/* TODO: add liveUrl in constants/projects.ts */}
          Demo soon
        </span>
      )}
    </div>
  );
}

/** Decorative gradient panel standing in for a project screenshot. */
function ProjectVisual({ title, className }: { title: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-line-grid",
        className,
      )}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 60% at 30% 20%, color-mix(in oklch, var(--brand) 22%, transparent), transparent 70%), radial-gradient(60% 60% at 90% 90%, color-mix(in oklch, var(--accent-blue) 20%, transparent), transparent 70%)",
        }}
      />
      <span className="relative select-none text-sm font-medium tracking-wide text-muted-foreground">
        {title}
      </span>
    </div>
  );
}

/** Projects showcase: one featured card + a grid of supporting builds. */
export function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => p !== featured);

  return (
    <section id="projects" className="section-anchor scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I'm building"
          description="Selected work at the intersection of full stack, AI, and cloud. Live projects are on the way."
        />

        <div className="mt-12 flex flex-col gap-6">
          {featured && (
            <Reveal>
              <SpotlightCard className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-muted px-2.5 py-0.5 text-[11px] font-medium text-brand">
                      <Star className="size-3" />
                      Featured
                    </span>
                    {featured.todo && <TodoBadge />}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>
                  <TagList tags={featured.tags} />
                  <div className="pt-1">
                    <ProjectLinks project={featured} />
                  </div>
                </div>
                <ProjectVisual
                  title={featured.title}
                  className="order-first aspect-video lg:order-last lg:h-full"
                />
              </SpotlightCard>
            </Reveal>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <SpotlightCard className="flex h-full flex-col gap-4 p-6">
                  <ProjectVisual title={project.title} className="aspect-video" />
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    {project.todo && <TodoBadge />}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-4 pt-2">
                    <TagList tags={project.tags} />
                    <ProjectLinks project={project} />
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
