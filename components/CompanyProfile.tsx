import Video from "./hooks/Video";

const CompanyProfile = () => {
    return (
      <section id="perfil" className="bg-video bg-slate-100 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Video a la izquierda */}
            <div className="flex-1">
              <Video /> {/* Aquí llamamos al componente Video */}
            </div>
  
            {/* Texto a la derecha */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-8 text-black">
                Perfil de la Empresa
              </h2>
              <p className="text-lg text-black mb-6">
                RLC Engineering es una empresa especializada en Electricidad
                Industrial y Automatización...
              </p>
              <p className="text-lg text-black mb-6">
                Fundada en ​el año 2023 por estudiantes de Duoc UC Pontificia
                ​Universidad Católica. Esta compañía se destaca por ​su equipo joven
                y comprometido, siempre buscando ​la excelencia y el cumplimiento de
                las normas ​vigentes.
              </p>
              <p className="text-lg text-black mb-6">
                Nuestro compromiso con la excelencia y la innovación nos ha
                permitido establecer relaciones duraderas con empresas líderes en
                diversos sectores industriales.
              </p>

            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CompanyProfile;