import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion'

import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMailBulk,
    FaMapPin,
    FaPhoneAlt,
} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-primary text-white p-5 ">
            <div className="container mx-auto px-4 ">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full mb-8"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-2xl">
                            Nuestras redes sociales
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-300 mb-4 text-2xl">
                                Soluciones en electricidad industrial y
                                automatización para su empresa.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="https://web.facebook.com/rlcengineering.2025/?_rdc=1&_rdr#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors"
                                >
                                    <FaFacebook size={30} />
                                </a>
                                <a
                                    href="https://www.instagram.com/rlcchile/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors"
                                >
                                    <FaInstagram size={30} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/rlc-engineering-494a2331a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-accent transition-colors"
                                >
                                    <FaLinkedin size={30} />
                                </a>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-2xl">
                            Contacto
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <FaMapPin size={20} />
                                    <span className="text-2xl">
                                        Los Mimbreros 5729, Peñalolén Santiago
                                        de Chile
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaPhoneAlt size={20} />
                                    <span className="text-2xl">
                                        +569-6519-4137
                                    </span>
                                    <span className="text-2xl">-</span>
                                    <span className="text-2xl">
                                        {' '}
                                        +569-8746-9460
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaMailBulk size={20} />
                                    <span className="text-2xl">
                                        rlc.engineering.spa@gmail.com
                                    </span>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-2xl">
                            Horario de Atención
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="text-gray-300 text-xl">
                                Lunes a Viernes
                            </p>
                            <p className="text-gray-300 text-xl">
                                8:30 AM - 18:30 PM
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="flex justify-end mb-8">
                    <div className="flex space-x-2 scale-75 sm:scale-90 md:scale-100">
                        <img
                            src="/assets/Logo.png"
                            alt="LogoDuoc"
                            className="rounded-full object-cover"
                            width={100}
                            height={100}
                        />
                         <img
                            src="/assets/logoIndustry.png"
                            alt="LogoEmpresa"
                            className="rounded-full object-cover"
                            width={110}
                            height={110}
                        />
                        <img
                            src="/assets/Logo2.png"
                            alt="LogoCertificacion"
                            className="rounded-full object-cover"
                            width={100}
                            height={100}
                        />
                       
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
                    <p>
                        © {new Date().getFullYear()} RLC Engineering. Todos los
                        derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
