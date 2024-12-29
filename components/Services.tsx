// src/pages/index.tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/constant';

export function Services() {
  return (
    <div id='servicios' className="bg-white py-24 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-600 dark:text-blue-400">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
            Ofrecemos una amplia gama de servicios especializados en ingeniería
            eléctrica y automatización industrial
          </p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto max-w-6xl"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4"
                >
                  <Card className="overflow-hidden">
                    <div className="relative h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}
