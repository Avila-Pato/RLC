'use client'

import { useState } from 'react'
import { Building2, Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { label: 'Inicio', href: '#' },
        { label: 'Servicios', href: '#servicios' },
        { label: 'Catálogos', href: '#catalogos' },
        { label: 'Nosotros', href: '#nosotros' },
        { label: 'Contacto', href: '#contacto' },
    ]

    return (
        <nav className="fixed w-full z-50 bg-primary/90 backdrop-blur-md py-4  transition-all duration-300">
            <div className="container mx-auto  px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-white origin-left text-2xl scale-75 font-bold inline-flex items-center gap-2 "
                    >
                        <Building2 className="h-6 w-6" />
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
                                className="nav__link"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden transition-all duration-300 ${
                        isMenuOpen
                            ? 'max-h-64 opacity-100 mt-4'
                            : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                >
                    <div className="flex flex-col space-y-4 py-4">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="nav__menu"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
