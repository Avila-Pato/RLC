"use client";

import { Download, Eye, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Image from "next/image";
import { catalogs } from "@/lib/constant";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Packages() {
  return (
    <section className="mx-auto w-full md:w-9/12">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-6 text-center mb-12">
          <div className="inline-block">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold tracking-tight">
              Catálogos Digitales
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra exclusiva colección de catálogos digitales. Descubre productos
            y servicios detallados en formato digital de alta calidad.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {catalogs.map((catalog) => (
            <motion.div key={catalog.id} variants={item}>
              <Card className="group h-full flex flex-col overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={catalog.thumbnail}
                      alt={catalog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>

                <CardContent className="flex-grow p-6">
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {catalog.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {catalog.description}
                  </p>
                </CardContent>

                <CardFooter className="p-6 pt-0 gap-4 flex flex-wrap">
                  <Button
                    variant="outline"
                    className="flex-1 mb-2 md:mb-0 md:flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
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
                    className="flex-1 mb-2 md:mb-0 md:flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={catalog.pdfUrl} download>
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
  );
}
