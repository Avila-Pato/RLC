'use client'
import { TESTIMONIAL } from '@/lib/constant' // Importa tus datos de testimonios
import React from 'react'
import Slider from 'react-slick'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Image from 'next/image'
import { Card } from './ui/card'

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
                slidesToShow: 3,
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
            className="container mx-auto py-16"
            id="clientes"
        >
            <h3 className="font-bold text-3xl text-center py-6 mt-5">
                Nuestra lista de clientes
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-left lg:text-center sm:text-center tracking-tight text-gray-800 mb-5 scale-95">
                Desde nuestros inicios, hemos brindado un servicio confiable a
                nuestra clientela. A lo largo de los años, hemos trabajado con
                dedicación para entender y satisfacer las necesidades de cada
                uno de nuestros clientes, asegurándonos de ofrecer soluciones de
                calidad que generen confianza.
            </p>
            <div className="flex justify-center">
                <Slider
                    {...sliderSettings}
                    lazyLoad="progressive"
                    centerMode
                    responsive={sliderSettings.responsive}
                    className="w-11/12 lg:w-4/5 "
                >
                    {TESTIMONIAL.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="p-6 m-4 h-[450px] lg:h-auto   bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={testimonial.URL}
                                    alt={testimonial.title}
                                    width={100}
                                    height={100}
                                    className="rounded-full mb-4"
                                />
                                <RiDoubleQuotesR className="text-gray-400 text-4xl mb-3" />
                                <p className="text-gray-700 text-base mb-3">
                                    {testimonial.des}
                                </p>
                                <h4 className="font-semibold text-lg text-gray-900">
                                    {testimonial.title}
                                </h4>
                                <span className="text-sm text-gray-500">
                                    {testimonial.profesion}
                                </span>
                            </div>
                        </Card>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Clients
