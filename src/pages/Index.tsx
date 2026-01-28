import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SectionDivider } from "@/components/SectionDivider";
import { About } from "@/components/About";
import { MenuPreview } from "@/components/MenuPreview";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <SectionDivider variant="wave" />
      <About />
      <SectionDivider variant="angle" flip />
      <MenuPreview/>
      <SectionDivider variant="gradient" />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
