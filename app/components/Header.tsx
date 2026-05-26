import Link from "next/link";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/projets", label: "Projets" },
];

export function Header() {
  return (
    <header className="flex w-full items-center justify-between px-6 py-5 sm:px-10 lg:px-16">
      <Link className="text-base font-black tracking-tight" href="/">
        MGR
      </Link>
      <nav className="flex items-center gap-4 text-xs font-semibold sm:gap-8">
        {links.map((link) => (
          <Link className="hidden sm:inline" href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
        <Link className="rounded-full bg-[#f4f4f4] px-4 py-2" href="/contact">
          Contact{" "}
          <span className="ml-1 rounded-full bg-black px-1.5 py-0.5 text-white">
            →
          </span>
        </Link>
      </nav>
    </header>
  );
}
