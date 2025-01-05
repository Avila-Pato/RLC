'use client'
import { Zap } from 'lucide-react'
import ElectricHeading from '../components/ElectricHeading'

const Hero = () => {
    return (
        <section
            id="inicio"
            className="relative bg-hero bg-cover bg-center bg-no-repeat px-4"
        >
            <div className="container mx-auto py-16 md:py-32">
                <div className="text-left space-y-8">
                    <img
                        src="/assets/logoIndustry.png"
                        alt="Logo RLC Engineering actual de la empresa"
                        width={200}
                        height={200}
                        className="right-0 top-12 absolute hidden md:block"
                    />
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight fade-in">
                        Excelencia en Ingeniería{' '}
                        <br className="hidden sm:block" />
                        para tu Éxito
                    </h1>
                    <p className="max-w-2xl text-base md:text-lg text-white ">
                        Ofrecemos soluciones innovadoras de ingeniería que
                        transforman ideas en realidad, entregando resultados
                        excepcionales para nuestros clientes.
                    </p>
                    <p className="max-w-2xl text-base md:text-lg text-white mt-4 ">
                        Innovadora, joven y comprometida. Somos un equipo que
                        apuesta por el futuro con soluciones de vanguardia y un
                        enfoque fresco en todo lo que hacemos. Estamos aquí para
                        construir el mañana.
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0  ">
                <ElectricHeading />
            </div>
        </section>
    )
}

export default Hero
