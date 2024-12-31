import { Card } from './ui/card'
import Image from 'next/image'

const CompanyProfile = () => {
    return (
        <section
            id="nosotros"
            className=" py-16 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Imagen del perfil de la empresa */}
                    <article className="order-2 lg:order-1">
                        <Card className="group overflow-hidden shadow-xl transition-all hover:shadow-2xl">
                            <Image
                                src="/assets/profile.png"
                                alt="Imagen de ingeniería industrial"
                                className="w-lg bg-cover object-bottom transition-transform duration-300 group-hover:scale-105"
                                width={500}
                                height={500}
                            />
                        </Card>
                    </article>

                    {/* Información de la empresa */}
                    <article className="space-y-6 p-6 w-full lg:w-1/2 order-1 lg:order-2">
                        <header>
                            <h2 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                                RLC Engineering especializada en Electricidad
                                Industrial y Automatización
                            </h2>
                        </header>

                        <div className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 ">
                            <p className="text-base md:text-lg lg:text-xl border-l-4 border-blue-600 pl-4">
                                Fundada en ​el año 2023 por estudiantes de Duoc
                                UC Pontificia ​Universidad Católica. Esta
                                compañía se destaca por ​su equipo joven y
                                comprometido, siempre buscando ​la excelencia y
                                el cumplimiento de las normas ​vigentes.
                            </p>
                            <p className="text-base md:text-lg lg:text-xl">
                                Nuestro compromiso con la excelencia y la
                                innovación nos ha permitido establecer
                                relaciones duraderas con empresas líderes en
                                diversos sectores industriales.
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default CompanyProfile
