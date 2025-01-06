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

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
}

export default function Packages() {
    return (
        <section
            id="catalogos"
            className="mx-auto w-full md:w-10/12"
        >
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center space-y-6 mb-12">
                    <div className="inline-block">
                        <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h1 className="text-4xl font-bold tracking-tight">
                            Catálogos Digitales
                        </h1>
                    </div>
                    <p className="text-base md:text-lg max-w-2xl mx-auto">
                        Explora nuestra exclusiva colección de catálogos
                        digitales. Descubre productos y servicios detallados en
                        formato digital de alta calidad.
                    </p>
                </div>

                {/* Catalog Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Lista de catálogos"
                >
                    {catalogs.map((catalog) => (
                        <motion.div
                            key={catalog.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <Card className="overflow-hidden border-2 rounded-xl bg-white shadow-lg hover:shadow-xl transition-transform duration-200 transform hover:scale-105">
                                <CardHeader className="p-0 relative">
                                    <div className="overflow-hidden group">
                                        <img
                                            src={catalog.thumbnail}
                                            alt={`Thumbnail de ${catalog.title}`}
                                            className="transition-transform duration-200 group-hover:scale-110 object-cover w-full h-56"
                                        />
                                    </div>
                                </CardHeader>

                                <CardContent className="p-6 flex-grow">
                                    <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                                        {catalog.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground text-gray-950 leading-relaxed">
                                        {catalog.description}
                                    </p>
                                </CardContent>

                                <CardFooter className="flex gap-4 flex-wrap">
                                    <Button
                                        variant="outline"
                                        className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors rounded-lg border-2 border-primary"
                                        asChild
                                    >
                                        <a
                                            href={catalog.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Eye className="w-4 h-4 mr-2" /> Ver
                                            Catálogo
                                        </a>
                                    </Button>

                                    <Button
                                        variant="default"
                                        className="flex-1 bg-primary hover:bg-primary/90 rounded-lg"
                                        asChild
                                    >
                                        <a
                                            href={catalog.pdfUrl}
                                            download
                                        >
                                            <Download className="w-4 h-4 mr-2" />{' '}
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
