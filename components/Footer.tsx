import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RLC Engineering</h3>
            <p className="text-gray-300 mb-4">
              Soluciones en electricidad industrial y automatización para su empresa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} />
                <span>Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <span>contacto@rlcengineering.cl</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
            <p className="text-gray-300">Lunes a Viernes</p>
            <p className="text-gray-300">8:30 AM - 18:30 PM</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} RLC Engineering. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;