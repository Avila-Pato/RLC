'use client'
import { TESTIMONIAL } from '@/lib/constant' // Importa tus datos de testimonios
import React from 'react'
import Slider from 'react-slick'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Image from 'next/image'

// Configuración de Slider
const sliderSettings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}

const Clients = () => {
    return (
        <section
            id="clientes"
            className="min-h-screen w-full py-16  relative flex flex-col justify-center "
        >
            <h3 className="font-bold text-3xl text-center">Testimonios</h3>
            <p className="text-center text-gray-500 py-6 max-w-lg mx-auto">
                Desde nuestros inicios, hemos brindado un servicio confiable a
                nuestra clientela. A lo largo de los años, hemos trabajado con
                dedicación para entender y satisfacer las necesidades de cada
                uno de nuestros clientes, asegurándonos de ofrecer soluciones de
                calidad que generen confianza. Nuestra prioridad ha sido siempre
                ofrecer un trato cercano y profesional, garantizando la
                satisfacción total.
            </p>

            <Slider
                {...sliderSettings}
                className="bg-slate-500"
            >
                {TESTIMONIAL.map((testimonial) => (
                    <TestimonialItem
                        key={testimonial.title}
                        title={testimonial.title}
                        des={testimonial.des}
                        profession={testimonial.profesion}
                        URL={testimonial.URL}
                    />
                ))}
            </Slider>
        </section>
    )
}

type TestimonialItemProps = {
    des: string
    title: string
    URL: string
    profession: string
}

const TestimonialItem = ({
    title,
    profession,
    URL,
    des,
}: TestimonialItemProps) => {
    return (
        <div className="px-6 mx-16 my-8 py-16 rounded-md bg-white shadow-lg z-20 transition-all duration-500 ease-in-out transform hover:scale-105 relative">
            <span className="text-slate-400 text-9xl absolute top-0 right-4 -z-10 opacity-60">
                <RiDoubleQuotesR />
            </span>
            <p className="text-gray-950 text-center">{des}</p>
            <div className="flex justify-center gap-4 mt-4">
                <Image
                    src={URL}
                    alt="user"
                    height={60}
                    width={60}
                    className="rounded-full object-cover"
                />
            </div>
            <div className="text-lg font-semibold text-center mt-4">
                {title}
            </div>
            <div className="text-gray-400 text-sm text-center">
                {profession}
            </div>
        </div>
    )
}

export default Clients
