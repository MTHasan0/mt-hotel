import React, { useState } from "react";

import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-lg">
            <motion.nav
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-lg"
            >
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo */}
                        <div className="text-2xl font-bold text-gray-800">
                            Hotel Luxe
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-800 focus:outline-none"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    {isOpen ? (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    ) : (
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16m-7 6h7"
                                        />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            <a href="/" className="text-gray-800 hover:text-blue-500">
                                Home
                            </a>
                            <a href="/rooms" className="text-gray-800 hover:text-blue-500">
                                Rooms
                            </a>
                            <a href="/booking" className="text-gray-800 hover:text-blue-500">
                                Booking
                            </a>
                            <a href="/gallery" className="text-gray-800 hover:text-blue-500">
                                Gallery
                            </a>
                            <a href="/contact" className="text-gray-800 hover:text-blue-500">
                                Contact
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden">
                            <a href="/" className="block py-2 text-gray-800 hover:text-blue-500">
                                Home
                            </a>
                            <a href="/rooms" className="block py-2 text-gray-800 hover:text-blue-500">
                                Rooms
                            </a>
                            <a href="/booking" className="block py-2 text-gray-800 hover:text-blue-500">
                                Booking
                            </a>
                            <a href="/gallery" className="block py-2 text-gray-800 hover:text-blue-500">
                                Gallery
                            </a>
                            <a href="/contact" className="block py-2 text-gray-800 hover:text-blue-500">
                                Contact
                            </a>
                        </div>
                    )}
                </div>
            </motion.nav>

        </nav>
    );
};

export default Navbar;