import { Card } from "./ui/card";

const CompanyProfile = () => {
  return (
    <section id="perfil" className="bg-gradient-to-b from-blue-50 to-white py-24 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Imagen del perfil de la empresa */}
          <article>
            <Card className="group overflow-hidden shadow-xl transition-all hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80"
                alt="Imagen de ingeniería industrial"
                className="h-[600px] w-full transform object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Card>
          </article>

          {/* Información de la empresa */}
          <article className="space-y-6 p-6">
            <header>
              <h2 className="text-4xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                RLC Engineering especializada en Electricidad Industrial y Automatización
              </h2>
            </header>

            <div className="space-y-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
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
