"use client"
import { Zap } from 'lucide-react'
import { Button } from './ui/button'
import ElectricHeading from './ElectricHeading'

const Hero = () => {
    return (
        <section
            id="home"
            className="relative bg-hero bg-cover bg-center bg-no-repeat pt-24 pb-16 px-4 sm:pt-32 sm:pb-24"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-left space-y-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight fade-in">
                        Excelencia en Ingeniería{' '}
                        <br className="hidden sm:block" />
                        para tu Éxito
                    </h1>
                    <Zap className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                    <p className="max-w-2xl text-lg sm:text-xl text-white slide-up">
                        Ofrecemos soluciones innovadoras de ingeniería que
                        transforman ideas en realidad, entregando resultados
                        excepcionales para nuestros clientes.
                    </p>
                    <p className="max-w-2xl text-lg sm:text-xl text-white slide-up mt-4">
                        Innovadora, joven y comprometida. Somos un equipo que
                        apuesta por el futuro con soluciones de vanguardia y un
                        enfoque fresco en todo lo que hacemos. Estamos aquí para
                        construir el mañana.
                    </p>
                    <div className="flex justify-start gap-4 slide-up mt-6">
                        <Button 
                            id='servicios'
                            size="lg"
                            className="px-8"
                            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth'})}
                        >
                            Leer más..
                        </Button>

                    </div>{' '}
                </div>
            </div>
            {/* <h1
        className=" absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[500px] lg:w-[800px] 
                py-6 text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-400
                rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(59,130,246,0.5)] border-2 border-blue-300/30
                backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]
                hover:from-blue-500 hover:to-blue-300 "
      >
        Nuestros Servicios
      </h1> */}
            <div className="absolute bottom-0 left-0 right-0">
                <ElectricHeading />
            </div>
        </section>
    )
}

export default Hero
