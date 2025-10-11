import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import cowfordLogo from "@/assets/cowford-logo.svg";

export const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={cowfordLogo} alt="Cowford Painting" className="h-10 w-10" />
            <span className="text-lg font-bold">Cowford Painting</span>
          </div>
          <div className="flex gap-3">
            <Button size="default" asChild>
              <a href="tel:904-236-9511">
                <Phone className="mr-2 h-4 w-4" />
                904-236-9511
              </a>
            </Button>
            <Button size="default" variant="outline" asChild>
              <a href="mailto:Cowfordpainting@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                Get a Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
