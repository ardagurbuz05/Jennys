import { Card } from "@/components/ui/card";
import breakfastImg from "@/assets/breakfast-special.jpg";
import burgerImg from "@/assets/burger-meal.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface MenuItem {
  name: string;
  desc: string;
  price: string;
}

interface MenuCategory {
  name: string;
  image?: string;
  popular: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "All Day Breakfast",
    image: breakfastImg,
    popular: [
      {
        name: "Olympic Breakfast",
        desc: "2 fried eggs, 3 sausages, beans, sliced tomato & mushrooms",
        price: "£6.95",
      },
      {
        name: "The Brunch",
        desc: "2 fried eggs, 2 sausages, 2 rashers bacon, sliced tomato & mushrooms",
        price: "£6.95",
      },
      {
        name: "Traditional Breakfast",
        desc: "Fried egg, sausage, 2 rashers bacon, beans & chips",
        price: "£6.95",
      },
      {
        name: "Veggie Breakfast",
        desc: "2 fried eggs, veggie sausages, beans, mushrooms, tomato & hash browns",
        price: "£6.45",
      },
    ],
  },
  {
    name: "English Classics",
    popular: [
      {
        name: "Fish & Chips",
        desc: "Fresh battered fish served with chunky chips, peas & tartare sauce",
        price: "£8.95",
      },
      {
        name: "Scampi & Chips",
        desc: "Breaded wholetail scampi with chips, peas & tartare sauce",
        price: "£8.45",
      },
      {
        name: "Sausage & Mash",
        desc: "Cumberland sausages with creamy mash, peas & gravy",
        price: "£7.95",
      },
      {
        name: "Chicken & Chips",
        desc: "Breaded chicken breast served with chips & choice of sauce",
        price: "£7.95",
      },
    ],
  },
  {
    name: "Sandwiches & Wraps",
    popular: [
      {
        name: "BLT Sandwich",
        desc: "Crispy bacon, lettuce & tomato on white or malted bloomer",
        price: "£4.95",
      },
      {
        name: "Tuna Mayo Panini",
        desc: "Toasted panini with tuna, mayo & mozzarella cheese",
        price: "£5.45",
      },
      {
        name: "Chicken Caesar Wrap",
        desc: "Grilled chicken, lettuce, parmesan & Caesar dressing",
        price: "£5.95",
      },
      {
        name: "Ham & Cheese Toastie",
        desc: "Classic toasted sandwich served with fries & coleslaw",
        price: "£6.95",
      },
    ],
  },
  {
    name: "Jacket Potatoes",
    popular: [
      {
        name: "Cheese & Beans",
        desc: "Soft fluffy jacket potato with melted cheese & baked beans",
        price: "£5.45",
      },
      {
        name: "Tuna Mayo",
        desc: "Jacket potato filled with tuna mayonnaise & salad garnish",
        price: "£5.95",
      },
      {
        name: "Chicken & Bacon",
        desc: "Jacket potato with chicken, crispy bacon & mayo",
        price: "£6.45",
      },
      {
        name: "Chilli Con Carne",
        desc: "Jacket potato topped with homemade beef chilli & cheese",
        price: "£6.95",
      },
    ],
  },
  {
    name: "Omelettes & Salads",
    popular: [
      {
        name: "Cheese Omelette",
        desc: "Fluffy omelette with choice of jacket potato, fries or sauté potatoes",
        price: "£6.45",
      },
      {
        name: "Ham & Mushroom Omelette",
        desc: "Served with peas, salad garnish & your choice of potato",
        price: "£6.95",
      },
      {
        name: "Chicken Caesar Salad",
        desc: "Mixed leaves, grilled chicken, parmesan, croutons & Caesar dressing",
        price: "£7.45",
      },
      {
        name: "Greek Salad",
        desc: "Fresh salad with feta cheese, olives, peppers & balsamic glaze",
        price: "£6.95",
      },
    ],
  },
  {
    name: "Our Finest Burgers",
    image: burgerImg,
    popular: [
      {
        name: "Classic Cheeseburger",
        desc: "100% beef patty, cheese, lettuce, tomato, onion & burger sauce with chips",
        price: "£7.95",
      },
      {
        name: "Bacon BBQ Burger",
        desc: "Beef patty, crispy bacon, BBQ sauce, cheese & onion rings with chips",
        price: "£8.95",
      },
      {
        name: "Chicken Burger",
        desc: "Breaded chicken breast, lettuce, mayo & tomato with chips",
        price: "£7.95",
      },
      {
        name: "Veggie Burger",
        desc: "Plant-based patty with all the trimmings & chips",
        price: "£7.45",
      },
    ],
  },
  {
    name: "Cold Drinks & Extras",
    popular: [
      {
        name: "Soft Drinks",
        desc: "Coca-Cola, Diet Coke, Fanta, 7UP, Dr Pepper",
        price: "£1.80",
      },
      {
        name: "Milkshakes",
        desc: "Vanilla, chocolate, strawberry or banana",
        price: "£3.50",
      },
      {
        name: "Frappuccino",
        desc: "Iced blended coffee drink",
        price: "£3.95",
      },
      {
        name: "Extra Sides",
        desc: "Chips, onion rings, coleslaw, garlic bread",
        price: "From £2.50",
      },
    ],
  },
];

interface MenuCategoryCardProps {
  category: MenuCategory;
  index: number;
}

const MenuCategoryCard = ({ category, index }: MenuCategoryCardProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const staggerClass = `stagger-${Math.min((index % 4) + 1, 6)}`;

  return (
    <Card
      ref={ref}
      className={`overflow-hidden shadow-card hover-lift reveal-scale ${staggerClass} ${
        isVisible ? "reveal-scale-visible" : ""
      } bg-card`}
    >
      {category.image && (
        <div className="h-56 overflow-hidden">
          <img
            src={category.image}
            alt={`${category.name} - delicious food at Jenny's Cafe`}
            className="w-full h-full object-cover hover-scale hover-brighten"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-10">
        <h3 className="font-serif text-4xl font-bold text-secondary mb-8">
          {category.name}
        </h3>
        <div className="space-y-6">
          {category.popular.map((item) => (
            <div
              key={item.name}
              className="border-b border-border/50 pb-5 last:border-0 last:pb-0 group hover:bg-muted/30 -mx-4 px-4 py-3 rounded-lg transition-all duration-300"
            >
              <div className="flex justify-between items-baseline gap-6 mb-2">
                <h4 className="font-semibold text-lg text-foreground flex-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h4>
                <span className="text-primary font-bold text-xl whitespace-nowrap tabular-nums">
                  {item.price}
                </span>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export const Menu = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section className="py-40 bg-muted/20" id="menu">
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className={`text-center mb-24 reveal-header ${
            titleVisible ? "reveal-header-visible" : ""
          }`}
          ref={titleRef as React.RefObject<HTMLDivElement>}
        >
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8">
            Our Menu
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto mb-10" />
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            From hearty breakfasts to satisfying lunches, we&apos;ve got something for everyone
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {menuCategories.map((category, idx) => (
            <MenuCategoryCard key={category.name} category={category} index={idx} />
          ))}
        </div>

        <div className="text-center mt-20 space-y-5 max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground font-medium">
            These are some of our most popular dishes.
          </p>
          <p className="text-lg text-muted-foreground">
            Full menu and pricing are available in-store. Please speak to a member of our team
            for allergen or dietary information.
          </p>
          <p className="text-lg text-muted-foreground">
            Give us a call at{" "}
            <a
              href="tel:01252312244"
              className="text-primary hover:underline font-bold transition-all"
            >
              01252 312244
            </a>{" "}
            for any enquiries.
          </p>
        </div>
      </div>
    </section>
  );
};