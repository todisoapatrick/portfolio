import Image from "next/image";
import { companies } from "@/data/portfolio";

export function CompaniesSection() {
  return (
    <section className="px-6 py-20 text-center sm:px-10 lg:px-16">
      <h2 className="mx-auto max-w-xl text-[clamp(2rem,4vw,3.25rem)] font-black leading-tight">
        Entreprises avec lesquelles j&apos;ai travaillé
      </h2>
      <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
        {companies.map((company) => (
          <div
            className="reveal-up grid aspect-square place-items-center rounded-full border border-[#eee] bg-white p-10 shadow-[0_18px_45px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(0,0,0,0.08)]"
            key={company.name}
          >
            <Image
              alt={`Logo ${company.name}`}
              className="max-h-24 w-auto object-contain"
              src={company.logo}
              sizes="(max-width: 640px) 60vw, 240px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
