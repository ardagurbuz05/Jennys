import { Card } from "@/components/ui/card";
import breakfastImg from "@/assets/breakfast-special.jpg";
import burgerImg from "@/assets/epic-burger.jpeg";
import pancakeImg from "@/assets/breakfast-pancakes.jpeg";
import chefImg from "@/assets/chef-table.jpeg";
import sandwichImg from "@/assets/sandwich.jpeg";
import kidsImg from "@/assets/kids.jpeg";
import wrapImg from "@/assets/wraps.jpeg";
import omeletteImg from "@/assets/omelette.jpeg";
import sweetImg from "@/assets/sweet-treats.jpeg";
import potatoImg from "@/assets/jacket-potato.jpeg";
import mediterraneanImg from "@/assets/mediterraneanS.jpeg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface MenuItem {
  name: string;
  desc: string;
}

interface MenuCategory {
  name: string;
  image?: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    name: "All Day Breakfast",
    image: breakfastImg,
    items: [
      { name: "Omelette Breakfast (V)", desc: "Cheese omelette with beans, grilled tomato, mushrooms & hash browns." },
      { name: "New Early Breakfast", desc: "Scrambled eggs, mushrooms, Cumberland sausage, bacon, baked beans & hash browns." },
      { name: "The Brunch Breakfast", desc: "Two fried eggs, Cumberland sausages, bacon, grilled tomatoes & mushrooms." },
      { name: "Traditional Breakfast", desc: "Fried egg, Cumberland sausage, bacon, baked beans & chips." },
      { name: "Old English Breakfast", desc: "Bacon, fried egg, sausage, black pudding, bubble & squeak, grilled tomatoes & hash browns." },
      { name: "The Full Monty", desc: "Beef burger, two fried eggs, bacon, baked beans, mushrooms & chips." },
      { name: "The Veggie Breakfast (V)", desc: "Poached eggs, veggie sausages, grilled halloumi, mushrooms, grilled tomato, hash brown & baked beans." },
      { name: "Four Seasons", desc: "Scrambled eggs, smoked salmon, avocado, mushrooms, baked seasoned tomatoes & toast." },
    ],
  },

  {
    name: "Mediterranean Specials",
    image: mediterraneanImg,
    items: [
      {
        name: "Turkish Breakfast",
        desc: "Scrambled eggs, feta pastry, grilled halloumi, feta cheese, sujuk, salad, jam & honey, served with simit & bread.",
      },
      {
        name: "Medi Smashed (V)",
        desc: "Toasted brioche with smashed avocado, crumbled feta, olives, sun-dried tomato, poached egg & pomegranate drizzle, mild chilli and oregano.",
      },
      {
        name: "Men’emen (V)",
        desc: "Tomato, peppers, onion & parsley cooked with eggs. Served with toasted bread.",
      },
      {
        name: "Feta Pastry (Su Boregi) (V)",
        desc: "Served with tomatoes, cucumber and olives.",
      },
    ],
  },

  {
    name: "Breakfast Classics",
    items: [
      { name: "Eggs Benedict", desc: "Poached eggs on toasted brioche with bacon & hollandaise." },
      { name: "Eggs Benedict Royal", desc: "Poached eggs on toasted brioche with smoked salmon & hollandaise." },
      { name: "Smashed Avocado (V)", desc: "Toasted bread with mixed seeds, crushed chilli & poached eggs." },
      { name: "Croque Monsieur", desc: "Ham & béchamel, topped with melted cheddar. Served with hash browns." },
      { name: "Croque Madame", desc: "Croque Monsieur topped with a fried egg." },
    ],
  },

  {
    name: "Breakfast Pancakes",
    image: pancakeImg,
    items: [
      {
        name: "American Breakfast",
        desc: "Buttermilk pancakes with eggs, sausage, bacon & fries, served with maple syrup.",
      },
      {
        name: "Bacon & Syrup Pancake Stack",
        desc: "Buttermilk pancakes with bacon, drizzled with maple syrup.",
      },
    ],
  },

  {
    name: "Chef’s Table",
    image: chefImg,
    items: [
      { name: "Char-Grilled Butterfly Chicken", desc: "Served with coleslaw, salad garnish & fries or rice." },
      { name: "Minute Steak", desc: "Char-grilled thin cut steak, garlic butter, grilled tomato, mushrooms, coleslaw & fries." },
      { name: "Chicken Escalope (Schnitzel)", desc: "Garlic butter infused schnitzel with coleslaw, salad garnish & fries." },
      { name: "Meat Lasagne", desc: "Oven-baked beef lasagne with fries, jacket potato or side salad." },
      { name: "Chilli Con Carne", desc: "Served with rice or fries and a side salad." },
    ],
  },

  {
    name: "Epic Burgers",
    image: burgerImg,
    items: [
      {
        name: "Beef Burger With Cheese",
        desc: "Two 4oz patties in a brioche bun with lettuce, tomato, gherkins, red onion, cheese & burger relish.",
      },
      {
        name: "Baconator",
        desc: "Double-stack beef, double bacon, double cheese & chipotle sauce in a brioche bun.",
      },
      { name: "Grilled Chicken Burger", desc: "Served in brioche bun with lettuce, tomato, red onion & garlic mayo." },
      { name: "Crispy Chicken Burger", desc: "Breaded chicken in brioche bun with crispy lettuce, coleslaw & chipotle sauce." },
      {
        name: "Halloumi Burger (V)",
        desc: "Brioche bun with mixed leaves, roasted red peppers, smashed avocado & balsamic glaze.",
      },
    ],
  },

  {
    name: "Jacket Potatoes",
    image: potatoImg,
    items: [
      { name: "Butter (V)", desc: "Classic baked jacket potato with butter." },
      { name: "Cheese (V)", desc: "Jacket potato with melted cheese." },
      { name: "Beans (V)", desc: "Jacket potato with baked beans." },
      { name: "Tuna Mayo", desc: "Jacket potato with tuna mayonnaise." },
      { name: "Chilli Con Carne", desc: "Jacket potato topped with chilli con carne." },
      { name: "Cheese & Coleslaw (V)", desc: "Jacket potato with cheese & coleslaw." },
      { name: "Cheese & Beans (V)", desc: "Jacket potato with melted cheese & baked beans." },
    ],
  },

  {
    name: "Omelettes",
    image: omeletteImg,
    items: [
      { name: "Plain Omelette (V)", desc: "3-egg omelette served with baked beans, fries or salad." },
      {
        name: "Custom Omelette (Choose Fillings)",
        desc: "Choose from: cheese, ham, mushrooms, Cumberland sausage, sujuk, onions, peppers, tomatoes.",
      },
    ],
  },

  {
    name: "Salads",
    items: [
      {
        name: "Goat’s Cheese Salad",
        desc: "Mixed leaves, sun-dried tomatoes, walnuts, green apple & fig, olive oil & balsamic glaze.",
      },
      {
        name: "Halloumi Salad (V)",
        desc: "Mixed leaves, roasted peppers, red onion, cherry tomatoes, avocado, olive oil & pomegranate drizzle.",
      },
      {
        name: "Chicken Caesar Salad",
        desc: "Crispy lettuce, char-grilled chicken, garlic croutons, Caesar dressing & shaved parmesan.",
      },
    ],
  },

  {
    name: "Sandwiches",
    image: sandwichImg,
    items: [
      { name: "Cheese & Salad (V)", desc: "Classic cheese with fresh salad." },
      { name: "Ham & Salad", desc: "Ham with fresh salad." },
      { name: "Smoked Turkey & Salad", desc: "Smoked turkey with fresh salad." },
      { name: "Tuna Mayo & Cucumber", desc: "Tuna mayo with cucumber." },
      { name: "Char-Grilled Chicken & Salad", desc: "Grilled chicken with fresh salad." },
      { name: "Cumberland Sausage", desc: "Cumberland sausage sandwich." },
      { name: "Sausage & Egg", desc: "Cumberland sausage with fried egg." },
      { name: "Sausage & Fried Onion", desc: "Cumberland sausage with fried onions." },
      { name: "Bacon", desc: "Crispy bacon sandwich." },
      { name: "Bacon & Egg", desc: "Crispy bacon with fried egg." },
      { name: "Bacon & Mushroom", desc: "Bacon with mushrooms." },
      { name: "Bacon & Avocado", desc: "Bacon with avocado." },
      { name: "Halloumi & Tomato (V)", desc: "Grilled halloumi with tomato." },
      { name: "Fried Egg", desc: "Fried egg sandwich." },
      { name: "BLT", desc: "Bacon, lettuce & tomato." },
    ],
  },

  {
    name: "Baguette & Wrap Meals",
    image: wrapImg,
    items: [
      {
        name: "Jenny’s Club Baguette",
        desc: "Grilled chicken, gammon ham, lettuce, tomato, cheese, mayo with fries & onion rings/coleslaw.",
      },
      {
        name: "BLT Baguette",
        desc: "Crispy bacon, lettuce & tomato baguette with melted cheese, with fries & onion rings/coleslaw.",
      },
      {
        name: "Grilled Halloumi Wrap",
        desc: "Hummus, roasted red peppers, avocado, lettuce & pomegranate sauce with fries & onion rings/coleslaw.",
      },
      {
        name: "Chicken Caesar & Bacon Wrap",
        desc: "Chicken in Caesar dressing, parmesan, mixed leaves & crispy bacon with fries & onion rings/coleslaw.",
      },
      {
        name: "Crispy Chicken Wrap",
        desc: "Southern-style chicken strips, lettuce, cucumber, garlic mayo & tomato relish.",
      },
      {
        name: "Chicken Shawarma Wrap",
        desc: "Grilled chicken with chips, salad, onion, garlic mayo, ketchup & gherkin with fries & onion rings/coleslaw .",
      },
      {
        name: "Steak Wrap",
        desc: "Char-grilled steak with lettuce, roasted peppers, fried onion, melted cheese & garlic mayo with fries & onion rings/coleslaw .",
      },
    ],
  },

  {
    name: "Toasted Sandwich Meals",
    items: [
      { name: "Sujuk Club Melt", desc: "Toasted bloomer with sujuk, melted cheese & our red sauce with fries & onion rings/coleslaw ." },
      { name: "Tuna Club Melt", desc: "Toasted bloomer with tuna mayo, sweetcorn, cheddar, tomato with fries & onion rings/coleslaw ." },
      { name: "Breakfast Club Melt", desc: "Toasted bloomer with bacon, melted cheese egg & sausage with fries & onion rings/coleslaw ." },
      { name: "Ham Club Melt", desc: "Ham, mature cheddar, tomatoes & mustard mayo on toasted bloomer with fries & onion rings/coleslaw ." },
    ],
  },

  {
    name: "Kids’ Favourites",
    image: kidsImg,
    items: [
      { name: "Sausage, Egg & Chips", desc: "Kid-sized favourite with sausage, egg and chips." },
      { name: "Burger & Chips", desc: "Burger served with chips." },
      { name: "Nuggets, Beans & Chips", desc: "Chicken nuggets with baked beans and chips." },
      { name: "Omelette & Chips", desc: "Omelette served with chips." },
      { name: "Pancake (Bacon + Syrup)", desc: "Pancake with bacon and maple syrup." },
      {
        name: "Kid’s Breakfast",
        desc: "Mini sausages, scrambled egg, bacon, baked beans & toast.",
      },
      { name: "Sandwich + Chips", desc: "Tuna mayo, cheese, ham or sausage." },
    ],
  },

  {
    name: "Sweet Treats",
    image: sweetImg,
    items: [
      {
        name: "Sweet Pancake Stack",
        desc: "Three fluffy pancakes with cranberry sauce, seasonal fruit, chocolate wafer & icing sugar (maple or Nutella).",
      },
      {
        name: "Belgium Waffles",
        desc: "Two waffles with cranberry sauce, seasonal fruit, chocolate wafer & icing sugar (maple or Nutella).",
      },
      {
        name: "Ice Cream Sundae",
        desc: "Three scoops of ice cream with brownie cubes, cream & your favourite sauce.",
      },
    ],
  },
];

interface MenuCategoryCardProps {
  category: MenuCategory;
  index: number;
}

const MenuCategoryCard = ({ category, index }: MenuCategoryCardProps) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
    triggerOnce: true,
  });
  const staggerClass = `stagger-${Math.min((index % 4) + 1, 6)}`;

  return (
    <Card
  ref={ref}
  className={`w-full overflow-hidden shadow-card hover-lift bg-card reveal ${
    isVisible ? "reveal-visible" : ""
  } ${staggerClass}`}
>
      {category.image && (
        <div className="h-56 overflow-hidden">
          <img
            src={category.image}
            alt={`${category.name} - food at Jenny's Cafe`}
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
          {category.items.map((item) => (
            <div
              key={item.name}
              className="border-b border-border/50 pb-5 last:border-0 last:pb-0 group hover:bg-muted/30 -mx-4 px-4 py-3 rounded-lg transition-all duration-300"
            >
              <h4 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                {item.name}
              </h4>
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

export const Menu = ({
  section = "breakfast",
}: {
  section?: "breakfast" | "lunch" | "dessert";
}) => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const sectionTitles: Record<"breakfast" | "lunch" | "dessert", string> = {
    breakfast: "Breakfast",
    lunch: "Lunch",
    dessert: "Desserts",
  };
  
  const sections: Record<"breakfast" | "lunch" | "dessert", string[]> = {
    breakfast: [
      "All Day Breakfast",
      "Mediterranean Specials",
      "Breakfast Classics",
      "Breakfast Pancakes",
      "Omelettes"
    ],
    lunch: [
      "Chef’s Table",
      "Epic Burgers",
      "Jacket Potatoes",
      "Salads",
      "Sandwiches",
      "Baguette & Wrap Meals",
      "Toasted Sandwich Meals",
      "Kids’ Favourites",
    ],
    dessert: ["Sweet Treats"],
  };
  
  const visibleCategories = menuCategories.filter((c) =>
    sections[section].includes(c.name)
  );

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
          Explore our {sectionTitles[section]} selection — ask in-store for the full menu and today’s pricing.
          </p>
        </div>
        <div className="columns-1 lg:columns-2 [column-gap:2.5rem]">
  {visibleCategories.map((category, idx) => (
    <div key={category.name} className="mb-10 break-inside-avoid w-full">
    <MenuCategoryCard category={category} index={idx} />
  </div>
  ))}
</div>
     

        <div className="text-center mt-20 space-y-5 max-w-4xl mx-auto">
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