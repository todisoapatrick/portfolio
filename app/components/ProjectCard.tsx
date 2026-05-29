import Image, { type StaticImageData } from "next/image";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    tags: string[];
    tone: string;
    logo?: StaticImageData;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card reveal-up rounded-[20px] border border-[#ececec] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.1)]">
      <div
        className={`project-visual h-48 rounded-[18px] bg-gradient-to-br ${project.tone} p-5`}
      >
        <div className="grid h-full place-items-center rounded-[14px] border border-white/80 bg-white/80 p-5 shadow-[0_16px_30px_rgba(0,0,0,0.08)]">
          {project.logo ? (
            <Image
              alt={`Logo ${project.title}`}
              className="max-h-28 w-auto object-contain"
              src={project.logo}
              sizes="(max-width: 768px) 70vw, 260px"
            />
          ) : (
            <div className="grid size-28 place-items-center rounded-[24px] border border-[#202223]/10 bg-[#202223] text-center text-3xl font-black text-white shadow-[0_18px_35px_rgba(0,0,0,0.14)]">
              {project.title
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </div>
          )}
        </div>
      </div>
      <h3 className="mt-5 text-xl font-black">{project.title}</h3>
      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-[#777]">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            className="rounded-full border border-[#ddd] px-3 py-1 text-xs font-bold"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
