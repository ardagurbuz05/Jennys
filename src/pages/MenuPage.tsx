import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Menu } from "@/components/Menu";
import { Footer } from "@/components/Footer";
import { useSearchParams } from "react-router-dom";


const MenuPage = () => {
  const [params] = useSearchParams();
  const raw = params.get("section");
const section =
  raw === "breakfast" || raw === "lunch" || raw === "dessert" ? raw : "breakfast";
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [section]);

  return (
    <main className="min-h-screen">
      <Navigation />
      <Menu section={section} />
      <Footer />
    </main>
  );
};

export default MenuPage;