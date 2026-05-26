import Link from "next/link";

export function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-[#202223] px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="absolute -left-12 -top-16 h-56 w-72 rounded-[38px] bg-white/10 rotate-[-8deg]" />
      <div className="absolute -right-16 -top-20 h-44 w-64 rounded-[38px] bg-white/10 rotate-[10deg]" />
      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-2xl text-[clamp(2.2rem,5vw,4.7rem)] font-black leading-tight tracking-tight">
          Donnez plus d&apos;impact à votre produit avec une interface claire.
        </h2>
        <Link
          className="inline-flex w-fit items-center gap-4 rounded-full bg-[#66ddf5] px-6 py-3 text-sm font-black text-black"
          href="/contact"
        >
          Travaillons ensemble
          <span className="grid size-9 place-items-center rounded-full bg-[#1f2223] text-white">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
