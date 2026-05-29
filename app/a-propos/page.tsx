import Image from "next/image";
import profile from "@/assets/images/profile_face.png";
import { services } from "@/data/portfolio";
import { CompaniesSection } from "../components/CompaniesSection";
import { PageHero } from "../components/PageHero";
import { SiteFrame } from "../components/PageShell";

const skills = [
  "Figma",
  "HTML/CSS",
  "JavaScript",
  "React",
  "Next.js",
  "NestJS",
  "PHP",
  "Laravel",
  "CodeIgniter",
  "Python",
  "FastAPI",
  "Java",
  "Docker",
];

const experiences = [
  {
    role: "Assistant technique",
    company: "GENKEY",
    period: "Octobre 2024 - Juin 2025",
    location: "Antananarivo, Madagascar",
    details: [
      "Assistance dans la gestion de projets techniques.",
      "Participation à la résolution de problèmes techniques.",
      "Collaboration avec l'équipe pour mettre en place de nouveaux processus.",
    ],
  },
  {
    role: "Prestataire en design et développement web",
    company: "FiveDigits",
    period: "Juillet 2023 - Septembre 2023",
    location: "Fianarantsoa, Madagascar",
    details: [
      "Contribution au développement de l'application Talentio.",
      "Développement de fonctionnalités spécifiques avec une équipe multidisciplinaire.",
      "Technologies utilisées : Figma, ReactJS, NestJS et Docker.",
    ],
  },
  {
    role: "Stagiaire en design et développement web",
    company: "GuideDuChoix24",
    period: "Juin 2022 - Août 2022",
    location: "Fianarantsoa, Madagascar",
    details: [
      "Conception et développement du module web Saifaire Expo.",
      "Développement personnalisé aligné sur les attentes spécifiques du client.",
      "Technologies utilisées : PHP Laravel et ReactJS.",
    ],
  },
  {
    role: "Coach durant l'atelier Supercodeur",
    company: "Orange",
    period: "Juin 2021 - Septembre 2021",
    location: "Fianarantsoa, Madagascar",
    details: [
      "Accompagnement des participants dans la découverte de la programmation.",
      "Animation d'ateliers pratiques autour de la logique et de la création numérique.",
    ],
  },
];

const education = [
  {
    title: "Ingénieur au grade de Master",
    period: "Janvier 2024 - Mai 2026",
    school: "EMIT, Fianarantsoa",
    description:
      "Diplôme d'ingénieur au grade de Master en Modélisation et Ingénierie Informatique (M2I).",
  },
  {
    title: "Licence en Développement d'Application Internet et Intranet",
    period: "Mars 2020 - Septembre 2023",
    school: "EMIT, Fianarantsoa",
    description:
      "Formation en développement de logiciels desktop, web et mobile.",
  },
  {
    title: "Baccalauréat série C",
    period: "Octobre 2018 - Septembre 2019",
    school: "LPC Saint Joseph de Cluny, Ambositra",
    description: "Baccalauréat de l'enseignement général, mention assez bien.",
  },
];

const languages = [
  "Malgache - langue maternelle",
  "Français",
  "Anglais",
];

export default function AboutPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="À propos"
        text="Développeur full-stack et designer web basé à Fianarantsoa, je transforme les besoins métiers en interfaces concrètes, utiles et agréables à utiliser."
        title="Un développeur full-stack qui pense aussi l'expérience."
      />
      <section className="grid gap-10 px-6 pb-20 sm:px-10 lg:grid-cols-[0.78fr_1fr] lg:px-16">
        <div className="reveal-up grid place-items-center">
          <div className="relative aspect-square w-full max-w-[430px] overflow-hidden rounded-full border-[14px] border-[#d8ffe0] bg-[#d8ffe0] shadow-[0_24px_60px_rgba(0,0,0,0.1)]">
            <Image
              alt="Portrait de Mamilalaina Todisoa Gabrielo Patrick"
              className="h-full w-full object-cover object-top"
              src={profile}
              sizes="(max-width: 1024px) 82vw, 430px"
            />
          </div>
        </div>
        <div className="reveal-up self-center">
          <h2 className="text-[clamp(2rem,4vw,4rem)] font-black leading-tight">
            Je conçois et développe des produits propres, lisibles et durables.
          </h2>
          <div className="mt-8 space-y-5 text-base leading-8 text-[#777]">
            <p>
              Je suis Mamilalaina Todisoa Gabrielo Patrick, développeur
              full-stack et designer web passionné par l&apos;informatique, les
              nouvelles technologies et la création d&apos;outils numériques
              utiles.
            </p>
            <p>
              J&apos;interviens sur des projets web, mobile et desktop, depuis
              la réflexion UI/UX jusqu&apos;au développement front-end,
              back-end et à l&apos;intégration. Mon objectif est de livrer des
              expériences simples à comprendre, agréables à utiliser et faciles
              à faire évoluer.
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
      <section className="px-6 pb-20 sm:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal-up rounded-[28px] bg-[#202223] p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#66ddf5]">
              Compétences
            </p>
            <h2 className="mt-5 text-3xl font-black leading-tight">
              Une base technique orientée produit.
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/85"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-10 grid gap-4 text-sm leading-7 text-white/75 sm:grid-cols-2">
              <p>
                <strong className="block text-white">Localisation</strong>
                Fianarantsoa, Madagascar
              </p>
              <p>
                <strong className="block text-white">Profil</strong>
                Développeur full-stack, UI/UX, web et mobile
              </p>
              <p>
                <strong className="block text-white">Email</strong>
                gabrielotodisoa@gmail.com
              </p>
              <p>
                <strong className="block text-white">Réseaux</strong>
                GitHub et LinkedIn : todisoapatrick
              </p>
            </div>
          </div>
          <div className="reveal-up rounded-[28px] border border-[#ececec] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#66bcd0]">
              Expériences
            </p>
            <div className="mt-8 space-y-8">
              {experiences.map((experience) => (
                <article
                  className="border-b border-[#ececec] pb-7 last:border-b-0 last:pb-0"
                  key={`${experience.role}-${experience.company}`}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-black">{experience.role}</h3>
                      <p className="mt-1 text-sm font-bold text-[#66bcd0]">
                        {experience.company} - {experience.location}
                      </p>
                    </div>
                    <p className="rounded-full bg-[#f4f4f4] px-4 py-2 text-xs font-black text-[#777]">
                      {experience.period}
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-[#777]">
                    {experience.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6 px-6 pb-20 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <div className="reveal-up rounded-[28px] border border-[#ececec] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#66bcd0]">
            Formations
          </p>
          <div className="mt-8 space-y-7">
            {education.map((item) => (
              <article key={item.title}>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#999]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-xl font-black">{item.title}</h3>
                <p className="mt-1 text-sm font-bold text-[#66bcd0]">
                  {item.school}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#777]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="reveal-up rounded-[28px] bg-[#f6f7f2] p-8">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#66bcd0]">
            Langues
          </p>
          <h2 className="mt-5 text-3xl font-black leading-tight">
            Communiquer clairement avec les équipes et les clients.
          </h2>
          <div className="mt-8 grid gap-3">
            {languages.map((language) => (
              <span
                className="rounded-full border border-[#e2e2dd] bg-white px-5 py-3 text-sm font-bold"
                key={language}
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </section>
      <CompaniesSection />
    </SiteFrame>
  );
}
