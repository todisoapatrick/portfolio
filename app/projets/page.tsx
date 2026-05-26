import { projects } from "@/data/portfolio";
import { ContactCta } from "../components/ContactCta";
import { PageHero } from "../components/PageHero";
import { SiteFrame } from "../components/PageShell";
import { ProjectCard } from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Projets"
        text="Une sélection de projets web, mobile et desktop, pensés pour être utiles, clairs et agréables à utiliser au quotidien."
        title="Des interfaces qui vont droit au but."
      />
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
      <ContactCta />
    </SiteFrame>
  );
}
