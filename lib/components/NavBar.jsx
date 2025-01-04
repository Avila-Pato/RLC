
"use client"

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import useScrollDirection from '../utils/scrolDetect';
import { useNavbarStore } from '../store/navbarStore';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { activeLink, setActiveLink } = useNavbarStore();
    const { isScrollingUp, setManualScroll } = useScrollDirection();

    const menuItems = [
        { label: 'Inicio', href: '#inicio' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Catálogos', href: '#catalogos' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Contacto', href: '#contacto' },
    ];

    const handleLinkClick = (e, href) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
        setManualScroll(true); // Activar el scroll manual
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        // Desactivar el scroll manual después de un pequeño retraso
        setTimeout(() => {
            setManualScroll(false);
        }, 500); // Ajusta el tiempo según lo necesario
    };

    return (
        <nav
            className={`fixed w-full z-50 bg-primary/90 backdrop-blur-md py-4 transition-transform duration-300 ${
                isScrollingUp ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-white origin-left text-2xl scale-75 font-bold inline-flex items-center gap-2 "
                    >
                        <img
                            src="/assets/logoIndustry.png"
                            alt="Logo RLC Engineering actual de la empresa"
                            width={60}
                            height={60}
                            className="h-20 w-20 -my-8"
                        />
                        RLC Engineering
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-8">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => handleLinkClick(e, item.href)}
                                className={`nav__link ${activeLink === item.href.slice(1) ? 'active-link' : ''}`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ${
                        isMenuOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                    <div className="flex flex-col space-y-4 py-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    handleLinkClick(e, item.href);
                                    setIsMenuOpen(false);
                                }}
                                className="nav__menu"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
