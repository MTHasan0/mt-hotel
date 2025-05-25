import React from "react";
import { motion } from "framer-motion";
import { FaUmbrellaBeach, FaSwimmingPool, FaCocktail, FaWifi, FaTv, FaSnowflake } from "react-icons/fa";
import { GiWoodenChair, GiSunrise } from "react-icons/gi";
import { Link } from "react-router-dom";

const PrivatePool = () => {
    const cabanas = [
        {
            id: 1,
            title: "Oceanfront Cabana",
            price: "$299/day",
            description: "Exclusive beachfront cabana with direct pool access, luxury loungers, and personalized butler service.",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            amenities: [
                { icon: <FaSwimmingPool />, name: "Private Pool Access" },
                { icon: <FaUmbrellaBeach />, name: "Beachfront View" },
                { icon: <FaCocktail />, name: "Premium Mini-Bar" },
                { icon: <FaWifi />, name: "High-Speed Wi-Fi" },
                { icon: <FaTv />, name: "LED Smart TV" },
                { icon: <GiWoodenChair />, name: "Luxury Sun Loungers" }
            ]
        },
        {
            id: 2,
            title: "VIP Poolside Cabana",
            price: "$399/day",
            description: "Spacious cabana with a private dipping pool, shaded lounge area, and 24/7 concierge service.",
            image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            amenities: [
                { icon: <FaSwimmingPool />, name: "Private Dipping Pool" },
                { icon: <FaCocktail />, name: "Complimentary Drinks" },
                { icon: <GiSunrise />, name: "Sunrise Breakfast Service" },
                { icon: <FaSnowflake />, name: "Air-Conditioned Interior" },
                { icon: <FaWifi />, name: "Unlimited Wi-Fi" },
                { icon: <FaTv />, name: "Bluetooth Sound System" }
            ]
        },
        {
            id: 3,
            title: "Luxury Garden Cabana",
            price: "$249/day",
            description: "Secluded garden cabana surrounded by tropical foliage, featuring a private plunge pool and daybed.",
            image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            amenities: [
                { icon: <FaSwimmingPool />, name: "Plunge Pool" },
                { icon: <FaUmbrellaBeach />, name: "Tropical Garden View" },
                { icon: <FaCocktail />, name: "Fresh Fruit Platter" },
                { icon: <FaWifi />, name: "High-Speed Internet" },
                { icon: <GiWoodenChair />, name: "Premium Daybed" },
                { icon: <FaSnowflake />, name: "Climate Control" }
            ]
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 flex items-center justify-center bg-blue-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{
                        backgroundImage: `url('https://i.postimg.cc/NGx2gqMF/temp-Imagermokh-P.avif')`,
                    }}>
                </div>
                <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Private Pool Cabanas
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl"
                    >
                        Exclusive luxury retreats with poolside elegance
                    </motion.p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Introduction */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Private Oasis Awaits</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Escape to our exclusive poolside cabanas, designed for ultimate relaxation and privacy.
                        Enjoy personalized service, premium amenities, and breathtaking views in your own secluded retreat.
                    </p>
                </motion.div>

                {/* Cabana Listings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {cabanas.map((cabana, index) => (
                        <motion.div
                            key={cabana.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={cabana.image}
                                    alt={cabana.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold">{cabana.title}</h3>
                                    <span className="text-blue-600 font-semibold">{cabana.price}</span>
                                </div>
                                <p className="text-gray-600 mb-6">{cabana.description}</p>

                                <h4 className="font-semibold mb-3">Amenities:</h4>
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {cabana.amenities.map((amenity, i) => (
                                        <div key={i} className="flex items-center">
                                            <span className="text-blue-600 mr-2">{amenity.icon}</span>
                                            <span className="text-gray-700">{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to={`/private-cabanas/${cabana.id}`}
                                    className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Reserve Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Our Cabanas */}
                <div className="bg-white rounded-xl shadow-lg p-10 mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Cabanas</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🏖️",
                                title: "Exclusive Privacy",
                                description: "Secluded spaces away from crowds for a truly private experience."
                            },
                            {
                                icon: "🍹",
                                title: "Premium Service",
                                description: "Dedicated butler service and personalized amenities."
                            },
                            {
                                icon: "🌊",
                                title: "Stunning Views",
                                description: "Oceanfront or tropical garden settings for ultimate relaxation."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-6 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reserve Your Cabana?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                        Contact our concierge for special packages and group reservations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="cursor-pointer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Book Now
                            </motion.button>
                        </Link>
                        <Link to="/contact" className="cursor-pointer">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                            >
                                Contact Concierge
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivatePool;