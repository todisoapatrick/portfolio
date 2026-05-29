import fiveDigitsLogo from "@/assets/images/fivedigits.png";
import genkeyLogo from "@/assets/images/logo-genkey.webp";
import campExpenseLogo from "@/assets/images/Camp_expense_logo.png";
import orchestraLogo from "@/assets/images/orchestra_logo.png";
import shouseLogo from "@/assets/images/SHouse_logo.png";
import talentioLogo from "@/assets/images/talentio_logo.png";

export const projects = [
  {
    title: "Orchestra",
    description:
      "Lecteur de musique sur mobile, projet academique de developpement mobile en L3 \n Lien : https://github.com/todisoapatrick/Orchestra",
    tags: ["Flutter", "UI/UX"],
    tone: "from-sky-100 to-lime-100",
    logo: orchestraLogo,
  },
  {
    title: "Talentio",
    description:
      "Plateforme web de recherche et d'offre de travail, rencontre entre Talent et recruteur",
    tags: ["React TS", "Nest TS"],
    tone: "from-zinc-100 to-cyan-100",
    logo: talentioLogo,
  },
  {
    title: "SHouse",
    description:
      "Plateforme web de vente ou d'allocation de logement \n Lien : https://github.com/todisoapatrick/SHouse_front",
    tags: ["React JS", "Spring"],
    tone: "from-lime-100 to-zinc-100",
    logo: shouseLogo,
  },
  {
    title: "Portfolio créatif",
    description:
      "Site personnel responsive avec direction artistique claire et sections modulaires. \n Lien : https://github.com/todisoapatrick/portfolio",
    tags: ["Next.js", "Tailwind"],
    tone: "from-cyan-100 to-zinc-100",
  },
  {
    title: "Projet ValalMad",
    description:
      "Module de suivi et de simulation de deplacement des essaims de criquets pelerin",
    tags: ["Python", "Mesa"],
    tone: "from-lime-100 to-sky-100",
  },
  {
    title: "Camp Expense",
    description:
      "Design d'un application mobile de gestion de depense de materiel de campement \n Lien : https://www.figma.com/design/uO7lwTRfqmyyZoFpDcfajQ/CampExpense?node-id=0-1&p=f&t=Oxu70CPJM0xTGAjN-0",
    tags: ["UI/UX", "Figma"],
    tone: "from-sky-100 to-lime-100",
    logo: campExpenseLogo,
  },
];

export const companies = [
  {
    name: "GENKEY",
    logo: genkeyLogo,
  },
  {
    name: "FiveDigits Innovative",
    logo: fiveDigitsLogo,
  },
];

export const stack = [
  "Design",
  "Développement",
  "Mobile",
  "Desktop",
  "Expérience",
  "Interface",
];

export const services = [
  "UI/UX Design",
  "Développement web",
  "Application mobile",
  "Application desktop",
  "Intégration API",
  "Dashboard métier",
];
