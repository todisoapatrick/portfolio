import { Footer } from "./Footer";
import { Header } from "./Header";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-white text-[#202124]">
      <section className="w-full bg-white">{children}</section>
    </main>
  );
}

export function SiteFrame({ children }: { children: React.ReactNode }) {
  return (
    <PageShell>
      <Header />
      {children}
      <Footer />
    </PageShell>
  );
}
