type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    tags: string[];
    tone: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-[20px] border border-[#ececec] bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
      <div className={`h-48 rounded-[18px] bg-gradient-to-br ${project.tone} p-5`}>
        <div className="h-full rounded-[14px] border border-white/80 bg-white/75 p-4 shadow-[0_16px_30px_rgba(0,0,0,0.08)]">
          <div className="mb-5 flex gap-2">
            <span className="size-2 rounded-full bg-red-300" />
            <span className="size-2 rounded-full bg-yellow-300" />
            <span className="size-2 rounded-full bg-green-300" />
          </div>
          <div className="grid grid-cols-[0.7fr_1fr] gap-3">
            <div className="space-y-2">
              <span className="block h-4 rounded-full bg-[#202223]" />
              <span className="block h-12 rounded-xl bg-[#65ddf5]" />
              <span className="block h-12 rounded-xl bg-[#dfff58]" />
            </div>
            <div className="space-y-3">
              <span className="block h-8 rounded-xl bg-[#efefef]" />
              <span className="block h-8 rounded-xl bg-[#efefef]" />
              <span className="block h-8 rounded-xl bg-[#efefef]" />
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-xl font-black">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#777]">{project.description}</p>
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
