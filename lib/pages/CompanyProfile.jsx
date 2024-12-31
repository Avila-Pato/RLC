import Video from '../hooks/Video'

const CompanyProfile = () => {
    return (
        <section
            id="nosotros"
            className="container mx-auto px-4 mt-24 "
        >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Información de la empresa */}
                <div className="space-y-6 p-6 w-full lg:w-1/2 ">
                    <header>
                        <h2 className="text-3xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
                            RLC Engineering especializada en Electricidad
                            Industrial y Automatización
                        </h2>
                    </header>

                    <div className="space-y-4 text-lg leading-relaxed text-gray-800 dark:text-gray-300 ">
                        <p className="text-base md:text-lg lg:text-xl border-l-4 border-blue-600 pl-4">
                            Fundada en ​el año 2023 por estudiantes de Duoc UC
                            Pontificia ​Universidad Católica. Esta compañía se
                            destaca por ​su equipo joven y comprometido, siempre
                            buscando ​la excelencia y el cumplimiento de las
                            normas ​vigentes.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl">
                            Nuestro compromiso con la excelencia y la innovación
                            nos ha permitido establecer relaciones duraderas con
                            empresas líderes en diversos sectores industriales.
                        </p>
                    </div>
                </div>
                <div className="group rounded-xl w-11/12 lg:w-1/2  lg:h-1/2 h-11/12    overflow-hidden shadow-xl transition-all hover:shadow-2xl">
                    <Video />
                </div>
            </div>
        </section>
    )
}

export default CompanyProfile
