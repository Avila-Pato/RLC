'use client'
import { TESTIMONIAL } from '@/lib/constant'
import React from 'react'
import Slider from 'react-slick'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../components/ui/card'

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
        <section className="container mx-auto py-16" id="clientes">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-4xl font-bold mb-6">
            Nuestra lista de clientes
          </h3>
          <p className="text-lg text-gray-600">
            Desde nuestros inicios, hemos brindado un servicio confiable a
            nuestra clientela. A lo largo de los años, hemos trabajado con
            dedicación para entender y satisfacer las necesidades de cada
            uno de nuestros clientes, asegurándonos de ofrecer soluciones de
            calidad que generen confianza.
          </p>
        </div>
  
        <div className="px-4">
          <Slider {...sliderSettings} className="testimonials-slider">
            {TESTIMONIAL.map((testimonial, index) => (
              <div key={index} className="px-4">
                <Card className="h-full transform hover:scale-105  transition-transform duration-300">
                  <CardHeader className="space-y-4">
                    <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden b">
                      <Image
                        src={testimonial.URL}
                        alt={testimonial.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-slate-">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.profesion}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative">
                      <RiDoubleQuotesR className="text-2xl text-red-600 mx-auto" />
                      <CardDescription className="text-center pt-4 text-sm poppins">
                        {testimonial.des}
                      </CardDescription>
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
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
