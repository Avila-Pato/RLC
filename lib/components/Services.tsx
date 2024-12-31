// src/pages/index.tsx
import { services } from '../constant'
import { Card, CardContent } from './ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel'
import Image from 'next/image'

export function Services() {
    return (
        <section
            id="servicios"
            className="container mx-auto px-4 mt-24  bg-white dark:bg-gray-900 sm:w-full lg:w-3/4  "
        >
            <p className="tracking-tight text-base md:text-lg lg:text-xl mt-4 mb-16 text-center">
                Ofrecemos una amplia gama de servicios especializados en
                ingeniería eléctrica y automatización industrial, brindando
                soluciones innovadoras y eficientes que optimizan procesos,
                mejoran la productividad y se adaptan a las necesidades
                específicas de cada cliente. Nos destacamos por nuestro
                compromiso con la calidad y el soporte técnico personalizado.
            </p>

            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                }}
            >
                <CarouselContent className="mx-auto max-w-7xl">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <CarouselItem
                                key={index}
                                className="pl-2 md:basis-1/2 lg:basis-1/3 md:pl-4 "
                            >
                                <Card className="overflow-hidden hover:scale-105 transition-all duration-500 ease-in-out ">
                                    <div className="relative h-48">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            className="h-full w-full object-cover"
                                            width={400}
                                            height={400}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <Icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
                                    </div>
                                    <CardContent className="h-[150px] p-6 ">
                                        <h3 className="mb-2 text-xl font-bold">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm md:text-base   text-gray-600 dark:text-gray-300">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </section>
    )
}
