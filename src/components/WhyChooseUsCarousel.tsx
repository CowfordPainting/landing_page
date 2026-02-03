import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CheckCircle2 } from "lucide-react";

interface WhyChooseUsCarouselProps {
  items: string[];
}

export const WhyChooseUsCarousel = ({ items }: WhyChooseUsCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="flex-[0_0_100%] min-w-0 flex items-center gap-3 py-3"
          >
            <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
            <span className="text-foreground text-lg">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
