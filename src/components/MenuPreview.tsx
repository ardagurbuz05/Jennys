import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

import breakfastImg from "@/assets/breakfast-special.jpg";
import burgerImg from "@/assets/epic-burger.jpeg";
import pancakeImg from "@/assets/breakfast-pancakes.jpeg";

const tiles = [
  {
    title: "Breakfast",
    desc: "All-day favourites, classics, pancakes, and Mediterranean specials.",
    image: breakfastImg,
    to: "/menu?section=breakfast",
  },
  {
    title: "Lunch",
    desc: "Chef’s table, burgers, wraps, sandwiches, omelettes and more.",
    image: burgerImg,
    to: "/menu?section=lunch",
  },
  {
    title: "Desserts",
    desc: "Sweet treats, waffles, pancakes, ice cream sundaes.",
    image: pancakeImg,
    to: "/menu?section=dessert",
  },
];

export const MenuPreview = () => {
  return (
    <section className="py-40 bg-muted/20" id="menu">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-6xl md:text-7xl font-bold text-foreground mb-6">
            Our Menu
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto mb-8" />
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Choose a section to explore — Breakfast, Lunch, or Desserts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {tiles.map((t) => (
            <Link key={t.title} to={t.to} className="group">
              <Card className="overflow-hidden shadow-card hover-lift bg-card">
                <div className="h-56 overflow-hidden">
                  <img
                    src={t.image}
                    alt={`${t.title} at Jenny's`}
                    className="w-full h-full object-cover hover-scale hover-brighten"
                    loading="lazy"
                  />
                </div>
                <div className="p-10">
                  <h3 className="font-serif text-4xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t.desc}
                  </p>
                  <div className="mt-8 text-primary font-semibold">
                    View {t.title} →
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};