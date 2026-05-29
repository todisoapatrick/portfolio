import Link from "next/link";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function ProjectsPreview() {
  return (
    <section className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="reveal-up mb-8 flex items-end justify-between gap-6">
        <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-black tracking-tight">
          Derniers projets
        </h2>
        <Link className="text-sm font-bold text-[#777]" href="/projets">
          Voir plus
        </Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
