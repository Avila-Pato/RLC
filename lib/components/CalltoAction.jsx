'use client'

import { Button } from './ui/button'
import { Card } from './ui/card'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function CallToAction() {
    const imageUrl = '/assets/Daugther.jpeg'

    return (
        <section
            id="contacto"
            className="container mx-auto  w-full md:w-9/12"
        >
            <div className="container mx-auto px-4 relative">
                <Card className="relative overflow-hidden backdrop-blur-xl border-0 shadow-2xl">
                    {/* Fondo cuadriculado dentro de la tarjeta */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
                    <div className="flex flex-col lg:flex-row items-center gap-12 p-8 lg:p-16 relative z-20">
                        {/* Sección de texto */}
                        <div className="lg:text-left relative">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6">
                                    Trabajemos Juntos
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl ">
                                    Desde el diseño conceptual hasta la
                                    implementación detallada, garantizamos
                                    soluciones personalizadas que superan todas
                                    las expectativas. Convierte tu visión en
                                    realidad con nuestro equipo experto.
                                </p>
                                <a
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSeGI6aDX04bAWMLSRE2KgGYcIdLAISdONWlzX5qQwH3qZeRag/viewform"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block"
                                >
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 shadow-lg hover:shadow-xl transition-all group"
                                    >
                                        Formulario de Contacto
                                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </Button>
                                </a>
                            </motion.div>
                        </div>

                        {/* Sección de imagen */}
                        <div className="flex-1 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-10" />
                                    <img
                                        src={imageUrl}
                                        alt="Ilustración de colaboración"
                                        width={900}
                                        height={900}
                                        className=" max-w-sm mx-auto  lg:mx-0 object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Elementos decorativos */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-2xl" />
                            </motion.div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
