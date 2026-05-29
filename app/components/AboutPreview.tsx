import Link from "next/link";

export function AboutPreview() {
  return (
    <section className="relative px-6 py-20 sm:px-10 lg:px-16">
      <div className="absolute bottom-0 left-0 h-36 w-52 bg-[#d9ffe3] [clip-path:polygon(0_0,70%_0,100%_100%,0_100%)]" />
      <div className="absolute bottom-0 right-0 h-36 w-52 bg-[#b7edff] [clip-path:polygon(30%_0,100%_0,100%_100%,0_100%)]" />
      <div className="reveal-up relative mx-auto max-w-4xl">
        <h2 className="mx-auto max-w-2xl text-center text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight tracking-tight">
          J&apos;aime créer un design simple, élégant et utile
        </h2>
        <div className="mt-10 space-y-6 text-base leading-8 text-[#777]">
          <p>
            Je suis Mamilalaina Todisoa Gabrielo Patrick, développeur web,
            mobile et desktop. Mon travail rassemble la logique du code, le sens
            du détail visuel et une vraie attention aux besoins des utilisateurs.
          </p>
          <p>
            Je construis des expériences modernes avec des interfaces lisibles,
            des parcours fluides et des fondations techniques solides.
          </p>
        </div>
        <div className="mt-10 text-center">
          <Link className="text-sm font-black text-[#202124]" href="/a-propos">
            En savoir plus →
          </Link>
        </div>
      </div>
    </section>
  );
}
