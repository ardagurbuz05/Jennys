import { Phone, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Footer = () => {
  const { ref, isVisible } = useScrollReveal();
  
  return (
    <footer className={`bg-secondary text-secondary-foreground py-20 reveal ${isVisible ? 'reveal-visible' : ''}`} ref={ref as React.RefObject<HTMLElement>}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">Jenny's Café & Restaurant</h3>
            <p className="text-secondary-foreground/80 mb-3 text-base">Serving Aldershot since 1996</p>
            <p className="text-secondary-foreground/70 text-base leading-relaxed">Your local favorite for hearty breakfasts and classic comfort food</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-6">Contact</h4>
            <div className="space-y-4 text-base">
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:01252312244" className="hover:text-accent transition-colors">01252 312244</a>
              </p>
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-secondary-foreground/80">20 Wellington Street, Aldershot, Hampshire GU11 1DZ</span>
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-xl mb-6">Opening Hours</h4>
            <div className="space-y-2 text-base text-secondary-foreground/80">
              <p>Monday - Friday: 7:00 AM - 4:00 PM</p>
              <p>Saturday: 7:30 AM - 3:30 PM</p>
              <p>Sunday: 8:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-base text-secondary-foreground/70">
            © {new Date().getFullYear()} Jenny's Café & Restaurant, Aldershot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
