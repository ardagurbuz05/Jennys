import { Button } from "@/components/ui/button";
import { Phone, MapPin, UtensilsCrossed, ChevronDown } from "lucide-react";
import heroImage from "@/assets/jennys-hero.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";


export const Hero = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Hero background with slow zoom and parallax */}
      <div
  className={`absolute inset-0 bg-cover bg-center hero-kenburns ${
    isLoaded ? "" : ""
  }`}
  style={{
    backgroundImage: `url(${heroImage})`,
    transformOrigin: "center center",
  }}
  role="img"
  aria-label="Jenny's Cafe interior with welcoming atmosphere"
>
  <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-secondary/70" />
</div>

      {/* Hero content with staggered reveal */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl py-40 md:py-48">
        {/* Badge */}
        <div
          className={`inline-block mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 reveal hero-stagger-1 ${
            isVisible ? "reveal-visible" : ""
          }`}
        >
          <p className="text-sm font-medium text-white tracking-widest uppercase">
            Serving Aldershot since 1996
          </p>
        </div>

        {/* Main heading */}
        <h1
          className={`font-serif text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-10 leading-[0.9] tracking-tight reveal hero-stagger-2 ${
            isVisible ? "reveal-visible" : ""
          }`}
        >
          Jenny&apos;s Café &<br />
          Restaurant
        </h1>

        {/* Subtitle */}
        <p
          className={`text-xl md:text-2xl lg:text-3xl text-white/95 mb-14 max-w-4xl mx-auto font-light leading-relaxed reveal hero-stagger-3 ${
            isVisible ? "reveal-visible" : ""
          }`}
        >
          Your local favorite for hearty breakfasts, delicious lunches, and all-day
          comfort food in the heart of Aldershot.
        </p>

        {/* Primary CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-5 justify-center mb-12 reveal hero-stagger-4 ${
            isVisible ? "reveal-visible" : ""
          }`}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-8 text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-primary/20"
            asChild
          >
            <a href="tel:01252312244">
              <Phone className="mr-2 h-5 w-5" />
              Call 01252 312244
            </a>
          </Button>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-8 text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-accent/20"
            asChild
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query=20+Wellington+Street+Aldershot+GU11+1DZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </a>
          </Button>
          <Button
             size="lg"
             variant="outline"
             className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-secondary font-semibold px-10 py-8 text-lg transition-all duration-300 hover:scale-105"
              asChild
          >
           <a href="#menu">
        <UtensilsCrossed className="mr-2 h-5 w-5" />
          View Menu
           </a>
            </Button>
        </div>

        {/* Delivery links */}
        <div
          className={`flex flex-wrap gap-4 justify-center reveal hero-stagger-4 ${
            isVisible ? "reveal-visible" : ""
          }`}
        >
          <a
            href="https://deliveroo.co.uk/menu/camberley/aldershot/jennys-cafe-wellington-street?srsltid=AfmBOoo-uI0GjuxJVPfrIUP_G_u_UOIRJQbwfl_-1c7liZyhBjS-AApF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-4 bg-white hover:bg-white/95 text-foreground rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Order on Deliveroo
          </a>
          <a
            href="https://www.just-eat.co.uk/restaurants-jennyscafeandrestaurant-aldershot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-7 py-4 bg-white hover:bg-white/95 text-foreground rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg"
          >
            Order on Just Eat
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group"
        aria-label="Scroll to content"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="w-7 h-7 scroll-indicator" />
      </a>
    </section>
  );
};