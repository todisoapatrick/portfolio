import { SiteFrame } from "../components/PageShell";
import { PageHero } from "../components/PageHero";

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
              contact@portfolio.dev
            </p>
            <p>
              <strong className="block text-white">Localisation</strong>
              Antananarivo, Madagascar
            </p>
            <p>
              <strong className="block text-white">Disponibilité</strong>
              Missions web, mobile, desktop et UI/UX.
            </p>
          </div>
        </div>
        <form className="grid gap-5 rounded-[28px] border border-[#ececec] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:p-8">
          <div className="grid gap-2">
            <label className="text-sm font-black" htmlFor="name">
              Nom
            </label>
            <input
              className="rounded-2xl border border-[#e5e5e5] px-4 py-3 outline-none focus:border-[#66ddf5]"
              id="name"
              placeholder="Votre nom"
              type="text"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-black" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-2xl border border-[#e5e5e5] px-4 py-3 outline-none focus:border-[#66ddf5]"
              id="email"
              placeholder="votre@email.com"
              type="email"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-black" htmlFor="message">
              Message
            </label>
            <textarea
              className="min-h-40 rounded-2xl border border-[#e5e5e5] px-4 py-3 outline-none focus:border-[#66ddf5]"
              id="message"
              placeholder="Décrivez votre projet..."
            />
          </div>
          <button
            className="inline-flex w-fit items-center gap-4 rounded-full bg-[#66ddf5] px-6 py-3 text-sm font-black text-black"
            type="submit"
          >
            Envoyer
            <span className="grid size-9 place-items-center rounded-full bg-[#202223] text-white">
              →
            </span>
          </button>
        </form>
      </section>
    </SiteFrame>
  );
}
