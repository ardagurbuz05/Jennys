import { useState, useEffect } from "react";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // Change navbar styling
      setIsScrolled(y > 50);

      // Hide when scrolling down, show when scrolling up
      setIsVisible(y < lastY || y < 100);

      setLastY(y);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  const goToSection = (id: string) => {
    // If we're not on the homepage, go home first, then scroll
    if (location.pathname !== "/") {
      navigate("/");
      // wait a tick so the home sections exist in the DOM
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-700
        ${isScrolled ? "bg-background/95 backdrop-blur-lg shadow-lg" : "bg-transparent"}
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button
                        onClick={() => {
                          if (location.pathname !== "/") {
                            navigate("/");
                            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
                            return;
                          }
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
            className="font-serif text-2xl font-bold hover:text-primary transition-colors"
          >
            <span className={`transition-colors duration-700 ${isScrolled ? "text-foreground" : "text-white"}`}>
              Jenny's Café
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
               onClick={() => goToSection("about")}
              className={`text-base font-medium transition-all duration-700 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              About
            </button>

            <button
                            onClick={() => goToSection("menu")}
              className={`text-base font-medium transition-all duration-700 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Menu
            </button>

            <button
                            onClick={() => goToSection("contact")}
              className={`text-base font-medium transition-all duration-700 hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Visit Us
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant={isScrolled ? "default" : "outline"}
              className={`hidden lg:inline-flex transition-all duration-700 ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-secondary"
              }`}
              asChild
            >
              <a href="tel:01252312244">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>

            <Button
              size="sm"
              className={`transition-all duration-700 ${
                isScrolled
                  ? "bg-accent text-accent-foreground hover:bg-accent/90"
                  : "bg-accent/90 text-accent-foreground hover:bg-accent"
              }`}
              asChild
            >
              <a
                href="https://www.google.com/maps/search/?api=1&query=20+Wellington+Street+Aldershot+GU11+1DZ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Directions</span>
              </a>
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};