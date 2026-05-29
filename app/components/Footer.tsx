import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-16">
      <div className="grid gap-8 text-xs text-[#777] sm:grid-cols-3">
        <div>
          <h3 className="mb-4 font-black text-[#202124]">Navigation</h3>
          <Link className="block" href="/">
            Accueil
          </Link>
          <Link className="block" href="/a-propos">
            À propos
          </Link>
          <Link className="block" href="/projets">
            Projets
          </Link>
          <Link className="block" href="/contact">
            Contact
          </Link>
        </div>
        <div>
          <h3 className="mb-4 font-black text-[#202124]">Services</h3>
          <p>Branding</p>
          <p>UI/UX Design</p>
          <p>Développement</p>
          <p>Application mobile</p>
        </div>
        <div>
          <h3 className="mb-4 font-black text-[#202124]">Information</h3>
          <p>Andrainjato, Fianarantsoa, Madagascar</p>
          <p>gabrielotodisoa@gmail.com</p>
          <p>+261 34 68 080 97</p>
          <p>Disponible pour missions</p>
        </div>
      </div>
      <div>
        <h2 className="text-[clamp(2.5rem,5vw,4.4rem)] font-black leading-none tracking-tight">
          Soyez créatif,
          <br />
          soyez utile
        </h2>
        <form className="mt-9 flex max-w-md rounded-full bg-[#66ddf5] p-1">
          <label className="sr-only" htmlFor="footer-email">
            Votre email
          </label>
          <input
            className="min-w-0 flex-1 bg-transparent px-5 text-sm font-bold text-black placeholder:text-black/70 outline-none"
            id="footer-email"
            placeholder="Votre email"
            type="email"
          />
          <button
            className="grid size-10 shrink-0 place-items-center rounded-full bg-[#202223] text-white"
            type="submit"
          >
            →
          </button>
        </form>
      </div>
    </footer>
  );
}
