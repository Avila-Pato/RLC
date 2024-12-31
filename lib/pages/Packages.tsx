import { Download, Eye } from 'lucide-react'
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../components/ui/card'

import Image from 'next/image'
import { catalogs } from '@/lib/constant'
import { Button } from '../components/ui/button'

export default function Packages() {
    return (
        <div className="min-h-screen m-11">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-center">
                        Catálogos Digitales
                    </h1>
                    <p className="text-center text-muted-foreground">
                        Explora nuestra colección de catálogos digitales
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catalogs.map((catalog) => (
                        <Card
                            key={catalog.id}
                            className="group hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardHeader className="relative p-0">
                                <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src={catalog.thumbnail}
                                        alt={catalog.title}
                                        width={720}
                                        height={720}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6">
                                <CardTitle className="mb-2">
                                    {catalog.title}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    {catalog.description}
                                </p>
                            </CardContent>
                            <CardFooter className="p-6 pt-0 flex gap-2">
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                >
                                    <a
                                        href={catalog.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                        <Eye className="w-4 h-4 mr-2" />
                                        Ver
                                    </a>
                                </Button>
                                <Button className="flex-1">
                                    <a
                                        href={catalog.pdfUrl}
                                        download
                                        className="flex items-center"
                                    >
                                        <Download className="w-4 h-4 mr-2" />
                                        Descargar
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
