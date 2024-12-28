import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-hero bg-cover bg-center bg-no-repeat min-h-screen pt-24 pb-16 px-4 sm:pt-32 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight fade-in">
            Excelencia en Ingeniería <br className="hidden sm:block" />
            para tu Éxito
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-white slide-up">
            Ofrecemos soluciones innovadoras de ingeniería que transforman ideas en realidad, entregando resultados excepcionales para nuestros clientes.
          </p>
          <p className="max-w-2xl text-lg sm:text-xl text-white slide-up mt-4">
            Innovadora, joven y comprometida. Somos un equipo que apuesta por el futuro con soluciones de vanguardia y un enfoque fresco en todo lo que hacemos. Estamos aquí para construir el mañana.
          </p>
          <div className="flex justify-start gap-4 slide-up mt-6">
            <Button size="lg" className="px-8">
              Leer más..
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;