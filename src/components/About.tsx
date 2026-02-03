import { Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroFood from "@/assets/hero-food.jpg";
import aboutImg from "@/assets/about-frontWW.jpeg";
import { useEffect, useState } from "react";

export const About = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative py-40 bg-background overflow-hidden" id="about">
      {/* Subtle parallax background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroFood})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${(scrollY - 800) * 0.15}px)`,
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div
          className={`text-center mb-24 reveal-header ${
            titleVisible ? "reveal-header-visible" : ""
          }`}
          ref={titleRef}
        >
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8">
            Welcome to Jenny&apos;s
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto" />
        </div>
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-14">
        <img
         src={aboutImg}
         alt="Jenny's Café"
         className="w-full h-[420px] md:h-[520px] object-cover object-[50%_40%] rounded-2xl shadow-lg mb-10"
       />
       </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={`space-y-10 reveal stagger-1 ${
              contentVisible ? "reveal-visible" : ""
            }`}
            ref={contentRef}
          >
            <p className="text-2xl text-muted-foreground leading-[1.7] font-light">
              Since 1996, Jenny&apos;s Café &amp; Restaurant has been a beloved
              fixture in Aldershot&apos;s community, serving up hearty breakfasts,
              classic English dishes, and warm hospitality to locals and visitors
              alike.
            </p>
            <p className="text-xl text-muted-foreground leading-[1.8]">
              Our family-run café is known for generous portions, excellent value,
              and a friendly atmosphere that makes everyone feel at home. From our
              famous all-day breakfast to our delicious burgers and sandwiches,
              every dish is prepared with care using quality ingredients.
            </p>
            <p className="text-xl text-muted-foreground leading-[1.8]">
              Whether you&apos;re stopping by for a quick coffee, enjoying a
              leisurely brunch with friends, or grabbing lunch on the go, we&apos;re
              here to welcome you with a smile and serve you something delicious.
            </p>

            <div className="pt-8 flex items-center gap-4 bg-primary/5 rounded-2xl p-6">
              <Award className="w-8 h-8 text-primary flex-shrink-0" />
              <span className="text-lg text-muted-foreground">
                Food Hygiene Rating:{" "}
                <span className="font-bold text-foreground">
                  Good (Rushmoor)
                </span>
              </span>
            </div>
          </div>

          <div
            className={`reveal-scale stagger-2 ${
              imageVisible ? "reveal-scale-visible" : ""
            }`}
            ref={imageRef}
          >
            <div className="relative group">
              <img
                src={heroFood}
                alt="Delicious breakfast spread at Jenny's Cafe"
                className="rounded-2xl shadow-hover w-full h-auto object-cover hover-lift hover-brighten"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};