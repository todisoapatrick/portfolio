import Image from "next/image";
import profile from "@/assets/images/profile.png";
import { services } from "@/data/portfolio";
import { CompaniesSection } from "../components/CompaniesSection";
import { PageHero } from "../components/PageHero";
import { SiteFrame } from "../components/PageShell";

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="À propos"
        text="Je transforme les idées en interfaces concrètes, avec un équilibre entre esthétique, performance et simplicité d'utilisation."
        title="Un développeur qui pense aussi l'expérience."
      />
      <section className="grid gap-10 px-6 pb-20 sm:px-10 lg:grid-cols-[0.78fr_1fr] lg:px-16">
        <div className="relative h-[520px] overflow-hidden rounded-t-[180px] bg-[#d8ffe0]">
          <Image
            alt="Portrait de Mamilalaina Todisoa Gabrielo Patrick"
            className="h-full w-full object-cover object-top"
            src={profile}
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
        </div>
        <div className="self-center">
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-black leading-tight">
            Je construis des produits propres, lisibles et durables.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#777]">
            <p>
              Je suis Mamilalaina Todisoa Gabrielo Patrick, développeur web,
              mobile et desktop. J&apos;aime partir d&apos;un besoin clair,
              simplifier le parcours utilisateur, puis bâtir une interface
              solide autour.
            </p>
            <p>
              Mon objectif est de livrer des expériences qui restent faciles à
              comprendre, agréables à utiliser et simples à faire évoluer.
            </p>
          </div>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <span
                className="rounded-full border border-[#e5e5e5] px-5 py-3 text-sm font-bold"
                key={service}
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CompaniesSection />
    </SiteFrame>
  );
}
