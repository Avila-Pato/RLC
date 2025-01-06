import Video from '../hooks/Video'

const CompanyProfile = () => {
    return (
        <section
            id="nosotros"
            className="container mx-auto w-full md:w-10/12"
        >
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                {/* Información de la empresa */}
                <div className="space-y-6 p-6 w-full lg:w-1/2 text-blue-700">
                    <h1 className="text-4xl font-bold tracking-tight ">
                        Quienes somos
                    </h1>
                    <h2 className="text-3xl font-semibold tracking-tight text-blue-600">
                        RLC Engineering especializada en Electricidad Industrial
                        y Automatización
                    </h2>

                    <div className="space-y-4 text-gray-800 dark:text-gray-300 ">
                        <p className="text-base md:text-lg  border-l-4 border-blue-600 pl-4">
                            Fundada en ​el año 2023 por estudiantes de Duoc UC
                            Pontificia ​Universidad Católica. Esta compañía se
                            destaca por ​su equipo joven y comprometido, siempre
                            buscando ​la excelencia y el cumplimiento de las
                            normas ​vigentes.
                        </p>
                        <p className="text-base md:text-lg ">
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
