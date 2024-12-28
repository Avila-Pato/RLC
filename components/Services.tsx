"use client";

import { services } from "@/constant";
import { Card, CardContent } from "@/components/ui/card";
import Slider from "react-slick";
import { cn } from "@/lib/utils";

const sliderSettings = {
  arrows: false,
  autoplay: false,
  infinite: true,
  speed: 1000,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export function ServicesSlider() {
  return (
    <section
      id="servicios"
      className="bg-hands bg-cover bg-center bg-no-repeat min-h-screen pt-24 pb-16 px-4 sm:pt-32 sm:pb-24"
    >
      <div className="container px-4 mx-auto pb-11">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-2 text-white">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
            Descubre nuestra gama completa de servicios profesionales diseñados para satisfacer tus necesidades
          </p>
        </div>
        
        <div className="relative">
          <Slider {...sliderSettings} className="services-slider">
            {services.map((service, index) => (
              <div key={index} className="px-4 py-2">
                <Card className={cn(
                  "h-[380px] bg-card transition-all duration-300",
                  "hover:shadow-lg hover:scale-[1.02]",
                  "border-t-4 border-t-primary"
                )}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 rounded-full bg-primary/10">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-center flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-border ">
                      <div className="flex justify-center">
                        {/* <button className="text-primary hover:text-primary/80 font-medium">
                          Más información → 
                        </button> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

  
