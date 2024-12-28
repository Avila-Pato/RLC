import { services } from '@/constant'; // Asegúrate de importar correctamente desde la carpeta constant
import { Card, CardContent } from '@/components/ui/card'; // Asegúrate de que Card y CardContent estén correctamente importados

const Services = () => {
  return (
    <main className="flex min-h-screen flex-col bg">
      {/* Services Section */}
      <section id="services" className="h-screen py-20 px-4 bg-slate-900">
        <div className="w-full mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 border-l-4 border-primary"
              >
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-black">{service.title}</h3>
                  <p className="text-muted-foreground text-black font-medium">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;

