import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface MobileServicesSwiperProps {
  services: Service[];
  selectedService: Service;
  onServiceChange: (service: Service) => void;
}

export const MobileServicesSwiper = ({ 
  services, 
  selectedService,
  onServiceChange 
}: MobileServicesSwiperProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      onServiceChange(services[index]);
      setShowSwipeHint(false);
    };

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, services, onServiceChange]);

  useEffect(() => {
    const currentIndex = services.findIndex(s => s.id === selectedService.id);
    scrollTo(currentIndex);
  }, [selectedService, services, scrollTo]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSwipeHint(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {services.map((service) => (
            <div key={service.id} className="flex-[0_0_100%] min-w-0 px-2">
              <Card className="bg-white p-6">
                <div className="space-y-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Swipe Hint Animation */}
      {showSwipeHint && (
        <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 pointer-events-none">
          <div className="bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2 animate-pulse">
            <ChevronLeft className="h-4 w-4 animate-[slide-in-right_1s_ease-in-out_infinite]" />
            <span className="text-sm font-medium">Swipe</span>
            <ChevronRight className="h-4 w-4 animate-[slide-in-right_1s_ease-in-out_infinite_reverse]" />
          </div>
        </div>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {services.map((service, index) => (
          <button
            key={service.id}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              service.id === selectedService.id 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-gray-300'
            }`}
            aria-label={`Go to ${service.title}`}
          />
        ))}
      </div>
    </div>
  );
};
