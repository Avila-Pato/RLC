import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function CallToAction() {
  return (
    <div  id="contacto" className="bg-blue-50 py-24 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="relative px-8 py-16">
            <div className="relative z-10">
              <h2 className="mb-6 text-center text-4xl font-bold">
                Trabajemos Juntos
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-blue-100">
                Desde el diseño conceptual hasta la implementación detallada,
                garantizamos soluciones personalizadas que superan todas las
                expectativas.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeGI6aDX04bAWMLSRE2KgGYcIdLAISdONWlzX5qQwH3qZeRag/viewform?pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Formulario de Contacto
                  </Button>
                </a>
              </div>
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
