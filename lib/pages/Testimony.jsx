"use client";
import { TESTIMONIAL } from "@/lib/constant";
import React from "react";
import Slider from "react-slick";
import { RiDoubleQuotesR } from "react-icons/ri";
import Image from "next/image";
import { Card } from "../components/ui/card";
import { User, Shield, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import Video2 from "../hooks/Video2";

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
};

const Clients = () => {
  return (
    <section className="container mx-auto py-16" id="clientes">
      <h3 className="font-bold text-3xl text-center py-6 mt-5">
        Nuestra lista de clientes
      </h3>
      <p className="text-base md:text-lg lg:text-xl text-left lg:text-center sm:text-center tracking-tight text-gray-800 mb-5 scale-95">
        Desde nuestros inicios, hemos brindado un servicio confiable a nuestra
        clientela. A lo largo de los años, hemos trabajado con dedicación para
        entender y satisfacer las necesidades de cada uno de nuestros clientes,
        asegurándonos de ofrecer soluciones de calidad que generen confianza.
      </p>
      <div className="flex justify-center">
        <Slider
          {...sliderSettings}
          lazyLoad="progressive"
          centerMode
          responsive={sliderSettings.responsive}
          className="w-11/12 lg:w-4/5  "
        >
          {TESTIMONIAL.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 m-4 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center text-center h-[350px] lg:h-80">
                <Image
                  src={testimonial.URL}
                  alt={testimonial.title}
                  width={100}
                  height={100}
                  className="rounded-full mb-4 "
                />
                <RiDoubleQuotesR
                  className="text-gray-400 relative mb-3"
                  width={40}
                  height={40}
                  color="red"
                />
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

      {/* segunda seccion */}
      <section className="min-h-screen  to-muted relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute h-full w-full " />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            {/* Left Column - Main Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-block">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                    Disponible 
                  </div>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Transformando Ideas en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                    Soluciones Digitales
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className=" leading-relaxed poppins">
                  Nuestra empresa se especializa en el desarrollo de software a
                  medida, consultoría tecnológica y transformación digital.
                  Trabajamos con las últimas tecnologías para crear soluciones
                  escalables y eficientes.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="group"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Servicio Confiable
                   
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Comunicación Responsable
                    
                  </Button>
                </div>
              </div>

              <div className="relative lg:h-[400px]">
                <div className="absolute rounded-3xl" />
                <div className="relative  w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                  <Video2 />
                  <div className="absolute " />
                </div>
              </div>
            </div>

            {/* Right Column - Sobre Mí */}
            <div className="lg:h-full flex items-center">
              <Card className="w-full p-8 bg-card/50 backdrop-blur-sm border-primary/10 transform hover:scale-[1.02] transition-all">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10 shrink-0">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">Sobre Mí</h2>
                  </div>

                  <div className="w-full max-h-full rounded-2xl overflow-hidden">
                    <img
                      src="/assets/RLC.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                      width={800}
                      height={800}
                    />
                  </div>

                  <p className=" leading-relaxed poppins">
                    Soy un apasionado desarrollador y emprendedor digital con
                    más de 8 años de experiencia creando soluciones tecnológicas
                    innovadoras. Mi misión es ayudar a empresas a alcanzar su
                    máximo potencial en el mundo digital.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Clients;
