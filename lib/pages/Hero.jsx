'use client'
import { Zap } from 'lucide-react'
import { Button } from '../components/ui/button'
import ElectricHeading from '../components/ElectricHeading'

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
                    <p className="max-w-2xl text-base md:text-lg lg:text-xl text-white ">
                        Ofrecemos soluciones innovadoras de ingeniería que
                        transforman ideas en realidad, entregando resultados
                        excepcionales para nuestros clientes.
                    </p>
                    <p className="max-w-2xl text-base md:text-lg lg:text-xl text-white mt-4">
                        Innovadora, joven y comprometida. Somos un equipo que
                        apuesta por el futuro con soluciones de vanguardia y un
                        enfoque fresco en todo lo que hacemos. Estamos aquí para
                        construir el mañana.
                    </p>
                    <Button
                        id="servicios"
                        size="lg"
                        className="px-8"
                        onClick={() =>
                            document
                                .getElementById('servicios')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        Leer más..
                    </Button>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 ">
                <ElectricHeading />
            </div>
        </section>
    )
}

export default Hero
