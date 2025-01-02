'use client'
import { TESTIMONIAL } from '@/lib/constant'
import React from 'react'
import Slider from 'react-slick'
import { RiDoubleQuotesR } from 'react-icons/ri'

import {
<<<<<<< HEAD
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../components/ui/card";

=======
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from '../components/ui/card'
import { AiTwotoneLike } from 'react-icons/ai'
>>>>>>> ce5ec49b5d93ede62d255feeef4cac5d9c4d07b5

// Configuración de Slider
const sliderSettings = {
    arrows: false,
    autoplay: false,
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
            <div className="max-w-4xl mx-auto text-center mb-12">
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
                    className="testimonials-slider pb-5 m-5"
                >
                    {TESTIMONIAL.map((testimonial, index) => (
                        <div
                            key={index}
                            className="px-4"
                        >
                            <Card
                                className="max-w-md mx-auto shadow-lg border border-gray-200 bg-white 
               dark:bg-gray-800 rounded-xl transform hover:scale-105 transition-transform duration-300"
                            >
                                {/* Header */}
                                <CardHeader className="px-6 pt-8">
                                    {/* Content */}
                                    <CardContent className="px-3 pb-6">
                                        <CardDescription className="text-center text-gray-800 dark:text-gray-200 relative">
                                            {testimonial.des}
                                            <RiDoubleQuotesR className="text-4xl text-blue-400  mx-auto  " />
                                        </CardDescription>
                                    </CardContent>
                                </CardHeader>

                                {/* Footer */}
                                <CardFooter className="flex items-center  bg-gray-50 dark:bg-gray-900/60 px-6 pb-4 rounded-b-xl">
                                    <div>
                                        <p className="font-semibold text-gray-800 dark:text-gray-200  ">
                                            {testimonial.name}
                                        </p>
                                    </div>
                                </CardFooter>
                                <div className="bg-sky-500 p-0.5 rounded-b-lg "></div>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Clients
