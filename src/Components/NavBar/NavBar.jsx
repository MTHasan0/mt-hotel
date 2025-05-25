import React, { useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
                        <Link to={"/"} className="text-2xl font-bold text-gray-800">
                            <img className=" w-16 cursor-pointer" src={"https://i.postimg.cc/tCxbQg6W/temp-Imagekd-VMgz.avif"} alt="" />
                        </Link>

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
                            <Link to={'/'} className="text-gray-800 p-3 rounded-lg hover:text-blue-500 hover:bg-blue-500/10">
                                Home
                            </Link>
                            <Link to={'/rooms/:id'} className="text-gray-800 p-3 hover:bg-blue-500/10 rounded-lg hover:text-blue-500">
                                Rooms
                            </Link>
                            <Link to={'/amenities'} className="text-gray-800 p-3 hover:bg-blue-500/10 rounded-lg hover:text-blue-500">
                                Amenities
                            </Link>

                            <Link to={'/about'} className="text-gray-800 p-3 hover:bg-blue-500/10 rounded-lg hover:text-blue-500">
                                About Us
                            </Link>
                            <Link to={'/contact'} className="text-gray-800 p-3 hover:bg-blue-500/10 rounded-lg hover:text-blue-500">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden">
                            <Link to={"/"} className="block py-2 text-gray-800 hover:text-blue-500">
                                Home
                            </Link>
                            <Link to={"/rooms"} className="block py-2 text-gray-800 hover:text-blue-500">
                                Rooms
                            </Link>
                            <Link to={'/about'} className="block py-2 text-gray-800 hover:text-blue-500">
                                About Us
                            </Link>

                            <Link to={"/contact"} className="block py-2 text-gray-800 hover:text-blue-500">
                                Contact
                            </Link>
                        </div>
                    )}
                </div>
            </motion.nav>

        </nav>
    );
};

export default Navbar;