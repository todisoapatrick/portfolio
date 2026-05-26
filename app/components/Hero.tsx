import Image from "next/image";
import Link from "next/link";
import profile from "@/assets/images/profile.png";

export function Hero() {
  return (
    <section className="relative grid min-h-[620px] w-full items-center gap-8 px-6 pb-14 pt-8 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16 lg:pb-10">
      <div className="relative z-10 max-w-[560px]">
        <h1 className="max-w-[9ch] text-[clamp(3rem,7vw,6.5rem)] font-black leading-[0.94] tracking-tight">
          Créer pour des gens incroyables
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-6 text-[#777]">
          Je conçois et développe des interfaces web, mobile et desktop claires,
          rapides et agréables à utiliser.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Link
            className="group inline-flex items-center gap-3 rounded-full bg-[#66ddf5] px-5 py-3 text-sm font-bold text-black shadow-[inset_0_-2px_0_rgba(0,0,0,0.1)]"
            href="/contact"
          >
            Me contacter
            <span className="grid size-8 place-items-center rounded-full bg-[#1f2223] text-white transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <div className="flex items-center gap-3 text-sm">
            <div className="flex -space-x-2">
              {["MG", "RT", "UI", "JS"].map((initials) => (
                <span
                  className="grid size-8 place-items-center rounded-full border-2 border-white bg-[#eafce5] text-[10px] font-black text-[#1f2223]"
                  key={initials}
                >
                  {initials}
                </span>
              ))}
            </div>
            <strong>10+</strong>
            <span className="text-[#888]">projets livrés</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto h-[470px] w-full max-w-[560px]">
        <div className="absolute left-[10%] top-[18%] h-[285px] w-[330px] rounded-[44px] bg-[#d8ffe0]" />
        <div className="absolute bottom-[8%] right-[5%] h-[285px] w-[360px] rounded-[44px] bg-[#aeeaff]" />
        <div className="absolute left-1/2 top-4 h-[430px] w-[310px] -translate-x-1/2 overflow-hidden rounded-t-[150px] bg-[#f7f7f7] shadow-[0_25px_50px_rgba(0,0,0,0.12)]">
          <Image
            alt="Portrait de Mamilalaina Todisoa Gabrielo Patrick"
            className="h-full w-full object-cover object-top"
            priority
            src={profile}
            sizes="(max-width: 768px) 80vw, 310px"
          />
        </div>
        <span className="absolute right-4 top-[28%] rounded-full bg-[#dfff58] px-5 py-2 text-xs font-bold">
          Développeur UI
        </span>
        <span className="absolute left-3 top-[40%] rounded-full bg-[#6fe2fb] px-5 py-2 text-xs font-bold">
          Web & mobile
        </span>
        <span className="absolute bottom-[24%] right-0 rounded-full bg-[#9cf4b2] px-5 py-2 text-xs font-bold">
          Product design
        </span>
      </div>
    </section>
  );
}
