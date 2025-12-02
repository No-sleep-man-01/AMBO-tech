import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { title: 'Fonctionnalités', href: '#' },
        { title: 'Tarifs', href: '#' },
        { title: 'Docs', href: '#' },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo/Nom de l'entreprise */}
                    <div className="flex-shrink-0">
                        <a href="#" className="flex items-center space-x-2 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition duration-300">
                            <Rocket className="w-6 h-6 text-pink-500" />
                            NextApp
                        </a>
                    </div>

                    {/* Liens de navigation pour les grands écrans */}
                    <div className="hidden md:flex md:items-center md:space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-gray-300 hover:text-white text-sm font-medium transition duration-300 relative group"
                            >
                                {link.title}
                                {/* Soulignement animé */}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}
                    </div>

                    {/* Bouton CTA pour les grands écrans */}
                    <div className="hidden md:block">
                        <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-600 transition duration-300 transform hover:scale-105">
                            Démarrer Gratuitement
                        </button>
                    </div>

                    {/* Bouton pour l'ouverture du menu sur mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Ouvrir le menu principal</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile */}
            <div
                className={`md:hidden backdrop-blur-xl bg-gray-900/90 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="block text-gray-300 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md text-base font-medium transition duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.title}
                        </a>
                    ))}
                    {/* Bouton CTA en mobile */}
                    <div className="pt-2">
                        <button className="w-full px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg transition duration-300">
                            Démarrer Gratuitement
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;