'use client'

import { Download, Eye, BookOpen } from 'lucide-react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card'
import { catalogs } from '@/lib/constant'
import { Button } from '../components/ui/button'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

export default function Packages() {
    return (
        <section
            id="catalogos"
            className="mx-auto md:w-9/12  sm:w-2/3 xs:w-5/6"
        >
            <div className="container mx-auto">
                <div className="space-y-6 text-center mb-12">
                    <div className="inline-block">
                        <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h1 className="text-4xl font-bold tracking-tight">
                            Catálogos Digitales
                        </h1>
                    </div>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explora nuestra exclusiva colección de catálogos
                        digitales. Descubre productos y servicios detallados en
                        formato digital de alta calidad.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
                >
                    {catalogs.map((catalog) => (
                        <motion.div
                            key={catalog.id}
                            variants={item}
                        >
                            <Card
                                className="group h-full flex flex-col overflow-hidden border-2 rounded-xl
               bg-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 transform -my-2"
                            >
                                <CardHeader className="p-0  mx-auto w-full   rounded-t-xl overflow">
                                    <div className="relative aspect-[12/9] -mt-14 overflow-hidden">
                                        <img
                                            src={catalog.thumbnail}
                                            alt={catalog.title}
                                            className="object-cover transition-transform duration-200 group-hover:scale-110"
                                        />
                                        {/* seccion de la opacidad al pasar el cursor en la imagen  */}
                                        <div
                                            className="absolute inset-0 bg-transparent
                     backdrop-blur-sm backdrop-saturate-200 border
                      border-white/45 opacity-0 group-hover:bg-opacity-0
                      transition-opacity duration-200"
                                        />
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow p-6">
                                    <CardTitle className="text-2xl mb-3 -my-4 group-hover:text-primary transition-colors">
                                        {catalog.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground my-4 text-gray-950 leading-relaxed">
                                        {catalog.description}
                                    </p>
                                </CardContent>

                                <CardFooter className="p-6 pt-0 gap-4 flex flex-wrap">
                                    <Button
                                        variant="outline"
                                        className="flex-1 mb-2 md:mb-0 hover:bg-primary hover:text-primary-foreground
                     transition-colors rounded-lg border-2 border-primary"
                                        asChild
                                    >
                                        <a
                                            href={catalog.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            Ver Catálogo
                                        </a>
                                    </Button>

                                    <Button
                                        variant="default"
                                        className="flex-1 mb-2 md:mb-0 bg-primary hover:bg-primary/90 rounded-lg"
                                        asChild
                                    >
                                        <a
                                            href={catalog.pdfUrl}
                                            download
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Descargar
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
