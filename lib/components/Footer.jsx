import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
  import Image from 'next/image'
  
  const Footer = () => {
    return (
      <footer className="bg-primary text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <Accordion type="single" collapsible className="w-full mb-8">
            <AccordionItem value="item-1">
              <AccordionTrigger>Nuestras redes sociales</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300 mb-4">
                  Soluciones en electricidad industrial y automatización para su empresa.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://web.facebook.com/ENGINEERINGRC/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    <Facebook size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/rlcengineering/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    <Instagram size={30} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rlc-engineering-494a2331a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    <Linkedin size={30} />
                  </a>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Contacto</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} />
                    <span>Los Mimbreros 5729, Peñalolén Santiago de Chile</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={20} />
                    <span>+569-6519-4137</span>
                    <span>-</span>
                    <span> +569-8746-9460</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={20} />
                    <span>rlc.engineering.spa@gmail.com</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Horario de Atención</AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-300">Lunes a Viernes</p>
                <p className="text-gray-300">8:30 AM - 18:30 PM</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
  
          <div className="flex justify-end mb-8">
            <div className="flex space-x-2 scale-75 sm:scale-90 md:scale-100">
              <Image
                src="/assets/Logo.png"
                alt="LogoEmpresa"
                className="rounded-full"
                width={100}
                height={100}
              />
              <Image
                src="/assets/Logo2.png"
                alt="LogoEmpresa"
                className="rounded-full"
                width={100}
                height={100}
              />
            </div>
          </div>
  
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} RLC Engineering. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  