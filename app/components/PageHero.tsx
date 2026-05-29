type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className="reveal-up px-6 pb-16 pt-12 sm:px-10 lg:px-16 lg:pt-20">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#66bcd0]">
        {eyebrow}
      </p>
      <h1 className="mt-5 max-w-4xl text-[clamp(3rem,8vw,7rem)] font-black leading-[0.94] tracking-tight">
        {title}
      </h1>
      <p className="mt-7 max-w-2xl text-base leading-8 text-[#777]">{text}</p>
    </section>
  );
}
