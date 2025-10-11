import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, CheckCircle2, Paintbrush, Home, Wrench } from "lucide-react";
import { MobileServicesSwiper } from "@/components/MobileServicesSwiper";
import cowfordLogo from "@/assets/cowford-logo.svg";
import interiorPainting from "@/assets/interior-painting.jpg";
import exteriorPainting from "@/assets/exterior-painting.jpg";
import cabinetRefinishing from "@/assets/cabinet-refinishing.jpg";
import woodStaining from "@/assets/wood-staining.jpg";
import drywallRepair from "@/assets/drywall-repair.jpg";

const Index = () => {
  const services = [
    {
      id: 1,
      title: "Interior Painting",
      description: "Transform your living spaces with expertly applied color and flawless finishes. We bring precision and care to every room, ensuring a perfect result that reflects your personal style.",
      image: interiorPainting
    },
    {
      id: 2,
      title: "Exterior Painting",
      description: "Protect and beautify your home's exterior with weather-resistant, professional painting. Our expert team uses premium materials to ensure lasting beauty and protection against the elements.",
      image: exteriorPainting
    },
    {
      id: 3,
      title: "Cabinet Refinishing",
      description: "Breathe new life into your kitchen and bathrooms with custom cabinet refinishing. We transform dated cabinets into stunning focal points with meticulous preparation and expert finishing.",
      image: cabinetRefinishing
    },
    {
      id: 4,
      title: "Wood Staining",
      description: "Enhance the natural beauty of wood with professional staining services. From decks to fences to interior trim, we bring out the rich character of wood with expert application.",
      image: woodStaining
    },
    {
      id: 5,
      title: "Drywall Repair",
      description: "Seamless repairs that prepare your walls for a perfect paint finish. We fix cracks, holes, and imperfections to create a smooth, flawless surface ready for painting.",
      image: drywallRepair
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  const whyChooseUs = [
    "Locally owned and operated in Jacksonville, FL",
    "Meticulous preparation and attention to detail",
    "Professional-grade materials and techniques",
    "Honest estimates and reliable scheduling",
    "Small-business integrity with expert results"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(2,145,159,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center">
            <img 
              src={cowfordLogo} 
              alt="Cowford Painting Logo" 
              className="mb-8 h-32 w-32 md:h-40 md:w-40 animate-in fade-in zoom-in duration-700"
            />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Cowford Painting
            </h1>
            <p className="mb-4 text-xl md:text-2xl font-semibold text-primary animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Local. Reliable. Exceptional.
            </p>
            <p className="mb-8 max-w-4xl text-base md:text-lg font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              Bringing color, craftsmanship, and care to every project across Jacksonville, FL, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
              <Button size="lg" className="text-lg" asChild>
                <a href="tel:904-236-9511">
                  <Phone className="mr-2 h-5 w-5" />
                  904-236-9511
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="mailto:Cowfordpainting@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Get a Quote
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary">Our Services</h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              From meticulous prep work to clean, professional finishes—we ensure every detail reflects our dedication to quality.
            </p>
          </div>
          
          {/* Mobile Swiper */}
          <div className="lg:hidden">
            <MobileServicesSwiper 
              services={services}
              selectedService={selectedService}
              onServiceChange={setSelectedService}
            />
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid lg:grid-cols-[350px,1fr] gap-6 max-w-6xl mx-auto">
            {/* Service List - Left Side */}
            <div className="space-y-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                    selectedService.id === service.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </button>
              ))}
            </div>

            {/* Service Detail - Right Side */}
            <Card className="bg-white p-8 overflow-hidden">
              <div className="space-y-6">
                <img 
                  src={selectedService.image} 
                  alt={selectedService.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{selectedService.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Choose Cowford Painting?</h2>
              <p className="mb-6 text-lg text-primary">
                We take pride in delivering flawless results with a personal touch. Our commitment to excellence goes far beyond the brush.
              </p>
              <ul className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Paintbrush className="mx-auto h-24 w-24 text-primary mb-6" />
                  <p className="text-2xl font-semibold mb-2">Professional Excellence</p>
                  <p className="text-muted-foreground">
                    Small-business integrity with professional-grade results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Transform Your Space?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contact us today for a free estimate. We're here to bring your vision to life with colors you'll love for years to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a 
                href="tel:904-236-9511" 
                className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                904-236-9511
              </a>
              <span className="hidden sm:inline text-muted-foreground">|</span>
              <a 
                href="mailto:Cowfordpainting@gmail.com" 
                className="flex items-center gap-2 text-lg font-semibold hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                Cowfordpainting@gmail.com
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" asChild>
                <a href="tel:904-236-9511">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg" asChild>
                <a href="mailto:Cowfordpainting@gmail.com">Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Mobile Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card border-t shadow-lg">
        <div className="grid grid-cols-2 gap-0">
          <Button size="lg" className="rounded-none h-16 w-full" asChild>
            <a href="tel:904-236-9511">
              <Phone className="mr-2 h-5 w-5" />
              Call
            </a>
          </Button>
          <Button size="lg" className="rounded-none h-16 w-full border-l bg-black text-white hover:bg-black/90" asChild>
            <a href="mailto:Cowfordpainting@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </Button>
        </div>
      </div>

      {/* Desktop Footer */}
      <footer className="hidden md:block border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cowford Painting. All rights reserved.</p>
          <p className="mt-2">Serving Jacksonville, FL and surrounding areas</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;