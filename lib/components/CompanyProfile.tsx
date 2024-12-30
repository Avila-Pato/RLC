import { Card } from "./ui/card";

const CompanyProfile = () => {
  return (
    <section id="nosotros" className="bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-gray-800">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Imagen del perfil de la empresa */}
        <article className="lg:w-1/2 w-full order-2 lg:order-1">
          <Card className="group overflow-hidden shadow-xl transition-all hover:shadow-2xl">
            <img
              src="/assets/Profile.jpeg"
              alt="Imagen de ingeniería industrial"
              className="w-full lg:max-w-7xl h-auto object-cover object-bottom transition-transform duration-300 group-hover:scale-105"
            />
          </Card>
        </article>
  
        {/* Información de la empresa */}
        <article className="space-y-6 p-6 lg:w-1/2 order-1 lg:order-2">
          <header>
            <h2 className="text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
              RLC Engineering especializada en Electricidad Industrial y Automatización
            </h2>
          </header>
  
          <div className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 poppins">
            <p className="border-l-4 border-blue-600 pl-4">
              Fundada en ​el año 2023 por estudiantes de Duoc UC Pontificia
              ​Universidad Católica. Esta compañía se destaca por ​su equipo joven
              y comprometido, siempre buscando ​la excelencia y el cumplimiento de
              las normas ​vigentes.
            </p>
            <p>
              Nuestro compromiso con la excelencia y la innovación nos ha
              permitido establecer relaciones duraderas con empresas líderes en
              diversos sectores industriales.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
  
  );
};

export default CompanyProfile;
