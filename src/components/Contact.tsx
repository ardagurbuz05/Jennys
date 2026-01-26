import { MapPin, Clock, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["20 Wellington Street", "Aldershot, Hampshire", "GU11 1DZ"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: [
      "Monday - Saturday: 8:00 AM - 6:30 PM",
      "Sunday: 9:00 AM - 5:00 PM",
    ],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["01252 312244"],
    link: "tel:01252312244",
  },
];

export const Contact = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-40 bg-background" id="contact">
      <div className="container mx-auto px-6 max-w-7xl">
        <div
          className={`text-center mb-24 reveal-header ${
            titleVisible ? "reveal-header-visible" : ""
          }`}
          ref={titleRef}
        >
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8">
            How to Find Us
          </h2>
          <div className="w-32 h-1.5 bg-primary mx-auto mb-10" />
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            We&apos;re in the heart of Aldershot, ready to serve you with a warm
            welcome and delicious food
          </p>
        </div>

        <div
          className="grid md:grid-cols-3 gap-10 mb-20"
          ref={cardsRef}
        >
          {contactInfo.map((info, idx) => (
            <Card
              key={info.title}
              className={`p-10 text-center shadow-card hover-lift reveal stagger-${
                idx + 1
              } ${cardsVisible ? "reveal-visible" : ""} bg-card`}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 transition-all duration-300">
                <info.icon className="w-9 h-9 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl text-foreground mb-5">
                {info.title}
              </h3>
              <div className="space-y-2">
                {info.details.map((detail, idx2) =>
                  info.link && idx2 === 0 ? (
                    <a
                      key={idx2}
                      href={info.link}
                      className="block text-primary hover:underline text-lg font-semibold transition-all"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p
                      key={idx2}
                      className="text-muted-foreground text-lg"
                    >
                      {detail}
                    </p>
                  ),
                )}
              </div>
            </Card>
          ))}
        </div>

        <div ref={mapRef}>
          <Card
            className={`overflow-hidden shadow-hover reveal-scale ${
              mapVisible ? "reveal-scale-visible" : ""
            } hover-lift`}
          >
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-3 h-[500px] lg:h-[650px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.234567890123!2d-0.7629!3d51.2489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875d0123456789%3A0x987654321!2s20%20Wellington%20St%2C%20Aldershot%20GU11%201DZ!5e0!3m2!1sen!2suk!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jenny's Cafe location on Google Maps"
                  className="grayscale-[15%] brightness-95"
                />
              </div>
              <div className="lg:col-span-2 p-12 lg:p-14 bg-gradient-to-br from-primary/10 to-accent/10 flex flex-col justify-center">
                <h3 className="font-serif text-4xl font-bold text-foreground mb-8 leading-tight">
                  Come and experience Jenny&apos;s hospitality
                </h3>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                  No reservations needed - just pop in! We welcome walk-ins and
                  groups.
                </p>
                <div className="flex flex-col gap-5">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=20+Wellington+Street+Aldershot+GU11+1DZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-semibold text-lg rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    <MapPin className="mr-3 h-5 w-5" />
                    Get Directions
                  </a>
                  <a
                    href="tel:01252312244"
                    className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-secondary-foreground font-semibold text-lg rounded-xl hover:bg-secondary/90 transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Call 01252 312244
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};