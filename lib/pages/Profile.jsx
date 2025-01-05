import Video2 from '../hooks/Video2'

import { Card } from '../components/ui/card'
import { User, Shield, CheckCircle } from 'lucide-react'



const Profile = () => {
    return (
        <section className="container mx-auto  w-full md:w-9/12 ">
            {/* fondo decoracion*/}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
                    {/* columna izquierda - contenido */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="inline-block">
                                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
                                    Disponible
                                </div>
                            </div>
                            <h1 className="text-4xl sm:text-5xl  lg:text-6xl font-bold tracking-tight leading-tight">
                                Transformando ideas en soluciones{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">
                                    de electricidad industrial y automatización
                                </span>
                            </h1>
                        </div>

                        <div className="space-y-6">
                            <p className=" text-base md:text-lg leading-relaxed ">
                                En RLC Engineering, nos especializamos en
                                ofrecer soluciones integrales en el ámbito de la
                                electricidad industrial y la automatización.
                                Nuestro equipo de expertos combina conocimientos
                                técnicos con experiencia práctica para
                                desarrollar e implementar sistemas eléctricos y
                                de automatización de vanguardia que optimizan la
                                eficiencia y la productividad de nuestros
                                clientes.
                            </p>

                            <div className="flex gap-2 md:gap-4  ">
                                <div className="shadow-xl flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary  w-1/2">
                                    <Shield
                                        className="mr-2 h-5 w-5 "
                                        color="green"
                                    />
                                    <p className="text-black font-semibold text-sm md:text-base">
                                        Servicio Confiable
                                    </p>
                                </div>
                                <div className="flex items-center  shadow-xl justify-center rounded-full bg-primary/10 p-2 text-primary  w-1/2">
                                    <CheckCircle
                                        className="mr-2 h-5 w-5 "
                                        color="green"
                                    />
                                    <p className="text-black font-semibold text-sm md:text-base">
                                        Comunicación Responsable
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:h-[400px]">
                            <div className="absolute rounded-3xl" />
                            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
                                <Video2  />
                                <div className="absolute " />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sobre Mí */}
                    <div className="flex items-center shadow-xl text-base md:text-lg ">
                        <Card className="w-full  bg-card/50 backdrop-blur-sm  border-primary/10 transform ">
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-3 p-5">
                                    <div className="p-2 rounded-full bg-primary/10 shrink-0">
                                        <User
                                            className="h-5 text-primary"
                                            size={32}
                                        />
                                    </div>
                                    <h2 className="text-2xl font-semibold">
                                        Sobre Mí
                                    </h2>
                                </div>

                                <div className=" flex justify-center overflow-hidden">
                                    <img
                                        src="/assets/RLC.jpeg"
                                        alt="perfil de usuario, con la foto actual de la persona jefe de la empresa"
                                        className="object-cover rounded-lg "
                                        width={300}
                                        height={300}
                                    />
                                </div>

                                <p className="p-6 text-base md:text-lg   border-b-4 border-blue-500 rounded-lg shadow-lg">
                                    Soy un apasionado por la electricidad
                                    industrial y la automatización, con más de 8
                                    años de experiencia diseñando e
                                    implementando soluciones eléctricas
                                    innovadoras. Mi misión es ayudar a las
                                    empresas a optimizar su infraestructura
                                    eléctrica y alcanzar su máximo potencial en
                                    eficiencia y sostenibilidad.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
