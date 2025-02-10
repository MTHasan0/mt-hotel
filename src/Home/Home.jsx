import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import featuredRooms from '../assets/Data/featuredRooms.json'
import offer from '../assets/Data/offer.json'


const Home = () => {


    return (
        <div className="bg-gray-100">
            {/* Hero Section (unchanged) */}
            <div className="relative h-screen flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                    }}
                ></div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-center text-white"
                >
                    <h1 className="text-5xl font-bold mb-4">Welcome to Hotel Luxe</h1>
                    <p className="text-xl mb-8">
                        Experience luxury and comfort like never before.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold"
                    >
                        Book Now
                    </motion.button>
                </motion.div>
            </div>

            {/* Featured Rooms */}
            <div className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredRooms.map((room) => (
                        <Link to={`/room/${room.id}`} key={room.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: room.id * 0.2 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
                            >
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                                    <p className="text-gray-600 mb-4">{room.description}</p>
                                    <p className="text-2xl font-bold text-blue-500">
                                        {room.price}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Special Offers (unchanged) */}
            <div className="bg-blue-50 py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((offer) => (
                        <motion.div
                            key={offer}
                            initial={{ opacity: 0, x: offer % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: offer * 0.2 }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            <img
                                src={`https://source.unsplash.com/random/600x400?offer=${offer}`}
                                alt={`Offer ${offer}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">Special Offer {offer}</h3>
                                <p className="text-gray-600 mb-4">
                                    Enjoy exclusive discounts and packages.
                                </p>
                                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                                    Learn More
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonials (unchanged) */}
            <div className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Guests Say</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((testimonial) => (
                        <motion.div
                            key={testimonial}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: testimonial * 0.2 }}
                            className="bg-white rounded-lg shadow-lg p-6"
                        >
                            <p className="text-gray-600 mb-4">
                                "Amazing experience! The rooms are luxurious and the staff is very
                                friendly."
                            </p>
                            <div className="flex items-center">
                                <img
                                    src={`https://source.unsplash.com/random/100x100?person=${testimonial}`}
                                    alt={`Guest ${testimonial}`}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <p className="font-bold">John Doe</p>
                                    <p className="text-sm text-gray-500">Guest</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer (unchanged) */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p>&copy; 2023 Hotel Luxe. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;