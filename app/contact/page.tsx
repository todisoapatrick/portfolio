import { SiteFrame } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        eyebrow="Contact"
        text="Parlez-moi de votre idée, de votre produit ou de l'interface que vous souhaitez améliorer. Je vous répondrai avec une proposition claire."
        title="Discutons de votre prochain projet."
      />
      <section className="grid gap-10 px-6 pb-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-16">
        <div className="rounded-[28px] bg-[#202223] p-8 text-white">
          <h2 className="text-3xl font-black">Informations</h2>
          <div className="mt-8 space-y-6 text-sm leading-7 text-white/75">
            <p>
              <strong className="block text-white">Email</strong>
              gabrielotodisoa@gmail.com
            </p>
            <p>
              <strong className="block text-white">Localisation</strong>
              Andrainjato, Fianarantsoa, Madagascar
            </p>
            <p>
              <strong className="block text-white">Disponibilité</strong>
              Missions web, mobile, desktop et UI/UX.
            </p>
            <p>
              <strong className="block text-white">Telephone / Whatsapp</strong>
              +261 34 68 080 97
            </p>
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteFrame>
  );
}
