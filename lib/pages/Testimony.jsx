'use client'
import { TESTIMONIAL } from '@/lib/constant'
import React from 'react'
import Slider from 'react-slick'
import { RiDoubleQuotesR } from 'react-icons/ri'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../components/ui/card";


// Configuración de Slider
const sliderSettings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1291,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}

const Clients = () => {
    return (
        <section
            className="container mx-auto w-full md:w-9/12"
            id="clientes"
        >
            <div className="text-base md:text-lg   text-center mb-12">
                <h3 className="text-4xl font-bold mb-6">
                    Nuestra lista de clientes
                </h3>
                <p className="text-lg text-gray-600">
                    Desde nuestros inicios, hemos brindado un servicio confiable
                    a nuestra clientela. A lo largo de los años, hemos trabajado
                    con dedicación para entender y satisfacer las necesidades de
                    cada uno de nuestros clientes, asegurándonos de ofrecer
                    soluciones de calidad que generen confianza.
                </p>
            </div>

            <div className="px-4">
                <Slider
                    {...sliderSettings}
                    className="testimonials-slider pb-5 m-5 "
                >
                    {TESTIMONIAL.map((testimonial, index) => (
                        <div key={index}>
                            <Card className="shadow-lg h-72 max-h-72 border-b-4 border-sky-500">
                                {/* Header */}
                                <CardHeader className="flex items-center justify-between">
                                    <RiDoubleQuotesR className="text-blue-400 mx-auto" />
                                </CardHeader>

                                {/* Content */}
                                <CardContent>
                                    <CardDescription className="text-center text-base text-gray-800 dark:text-gray-200 relative overflow-hidden h-[120px]">
                                        {testimonial.des}
                                    </CardDescription>
                                </CardContent>

                                {/* Footer */}
                                <CardFooter className="p-4 flex items-center bg-gray-50 dark:bg-gray-900/60 px-6 rounded-b-xl">
                                    <div>
                                        <p className="font-semibold text-gray-800 dark:text-gray-200 truncate">
                                            {testimonial.name}
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Clients
