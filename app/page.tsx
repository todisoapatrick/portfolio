import { AboutPreview } from "./components/AboutPreview";
import { CompaniesSection } from "./components/CompaniesSection";
import { ContactCta } from "./components/ContactCta";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeStrip } from "./components/MarqueeStrip";
import { PageShell } from "./components/PageShell";
import { ProjectsPreview } from "./components/ProjectsPreview";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <PageShell>
      <Header />
      <Hero />
      <MarqueeStrip />
      <AboutPreview />
      <ProjectsPreview />
      <CompaniesSection />
      <ContactCta />
      <Footer />
    </PageShell>
  );
}
