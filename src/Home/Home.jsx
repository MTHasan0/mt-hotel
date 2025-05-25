import React from "react";
import { motion } from "framer-motion";
import { Link, Links } from "react-router-dom";
import featuredRooms from '../assets/Data/featuredRooms.json';
import offer from '../assets/Data/offer.json';
import guest from '../assets/Featured/image.png';
import { FaStar, FaSwimmingPool, FaSpa, FaUtensils, FaWifi, FaParking } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";


const Home = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const amenities = [
        { icon: <FaSwimmingPool size={30} />, title: "Infinity Pool" },
        { icon: <FaSpa size={30} />, title: "Luxury Spa" },
        { icon: <FaUtensils size={30} />, title: "Gourmet Dining" },
        { icon: <FaWifi size={30} />, title: "High-Speed WiFi" },
        { icon: <FaParking size={30} />, title: "Valet Parking" }
    ];

    const stats = [
        { number: "50+", label: "Luxury Rooms" },
        { number: "5", label: "Restaurants" },
        { number: "100%", label: "Guest Satisfaction" },
        { number: "24/7", label: "Concierge Service" }
    ];



    return (
        <div className="bg-gray-100">
            {/* Hero Section with Parallax Effect */}
            <div className="relative h-screen flex items-center justify-center bg-blue-800 overflow-hidden">
                <motion.div className="absolute inset-0 bg-cover bg-center bg-fixed opacity-50"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.2 }}
                    transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                    }}>
                </motion.div>
                <div className="absolute inset-0 bg-black opacity-30"></div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative text-center text-white px-4"
                >
                    <div className="flex flex-col md:flex-row justify-center items-center mb-4">
                        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Hotel</h1>
                        <motion.span
                            initial={{ opacity: 0, y: -80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-5xl font-bold px-3 py-2 bg-opacity-70 text-blue-500 ml-0 md:ml-2 mt-2 md:mt-0"
                        >
                            Hasan
                        </motion.span>
                    </div>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        Where luxury meets comfort in the heart of the city. Experience unparalleled hospitality.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-colors"
                        >
                            <Link to='/rooms'>Book Now</Link>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            <Link to={'/about'}>Explore More</Link>
                        </motion.button>
                    </div>
                </motion.div>

                {/* Scrolling indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-8 h-8 border-b-2 border-r-2 border-white rotate-45"></div>
                </motion.div>
            </div>

            {/* Luxury Experience Section */}
            <div className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Redefining Luxury Hospitality</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            At Hotel Hasan, we blend contemporary elegance with timeless tradition to create an unforgettable experience.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Luxury Suite"
                                className="rounded-lg shadow-xl w-full h-auto"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-blue-100 p-4 rounded-lg shadow-lg w-3/4">
                                <h3 className="text-xl  font-bold mb-2">Signature Suites</h3>
                                <p className="text-gray-600">Our most exclusive accommodations with panoramic city views.</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-6">Experience Unmatched Comfort</h3>
                            <p className="text-gray-600 mb-8 text-lg">
                                Each space at Hotel Hasan is meticulously designed to provide the perfect balance of luxury and comfort.
                                From our plush bedding to our state-of-the-art amenities, every detail is crafted for your relaxation.
                            </p>

                            <div className="space-y-6">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex items-start">
                                        <div className="bg-blue-100 p-2 rounded-full mr-4">
                                            <IoIosArrowForward className="text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg">Premium Amenities</h4>
                                            <p className="text-gray-600">
                                                Enjoy our curated selection of luxury amenities designed for your comfort.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* <a href="/amenities" className=" border "> */}
                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ scale: 1.03 }}
                                className="mt-8 bg-blue-600 text-white cursor-pointer  py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                <Link to={'/amenities'}> Explore All Amenities</Link>

                            </motion.button>
                            {/* </a> */}


                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Featured Rooms */}
            <div className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Rooms</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Discover our collection of exquisitely designed rooms and suites, each offering a unique ambiance.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredRooms.map((room) => (
                            <Link to={`/room/${room.id}`} key={room.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={room.image}
                                            alt={room.title}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            {room.type}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold">{room.title}</h3>
                                            <div className="flex items-center text-yellow-400">
                                                <FaStar />
                                                <span className="ml-1 text-gray-700">4.9</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-4 line-clamp-2">{room.description}</p>
                                        <div className="flex justify-between items-center">
                                            <p className="text-2xl font-bold text-blue-600">
                                                {room.price}
                                            </p>
                                            <button className="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            <Link to="/rooms">View All Rooms</Link>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Amenities Showcase */}
            <div className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Amenities</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Indulge in our exceptional facilities designed to enhance your stay.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {amenities.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all"
                            >
                                <div className="text-blue-600 mb-4 flex justify-center">
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Special Offers */}
            <div className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Offers</h2>
                        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
                        <p className="max-w-3xl mx-auto text-lg opacity-90">
                            Take advantage of our special packages and create unforgettable memories.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {offer.map((offer) => (
                            <Link to={`/room/${offer.id}`} key={offer.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white border-opacity-20"
                                >
                                    <div className="relative">
                                        <img
                                            src={offer.image}
                                            alt={offer.title}
                                            className="w-full h-64 object-cover"
                                        />
                                        <div className="absolute top-0 left-0 bg-red-600 text-white px-4 py-2 font-bold">
                                            Limited Time
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl text-black font-bold">{offer.title}</h3>
                                            <div className="bg-red-200 text-blue-700 px-2 py-1 rounded text-sm font-bold">
                                                Save {offer.discount}
                                            </div>
                                        </div>
                                        <p className="text-black text-opacity-80 mb-4">{offer.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-2xl text-black font-bold">{offer.price}</p>
                                                <p className="text-sm text-black to-black line-through opacity-70">{offer.originalPrice}</p>
                                            </div>
                                            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                                Book Offer
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors"
                            >
                                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                                <p className="text-gray-700 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Guest Experiences</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                            Don't just take our word for it. Here's what our guests say about their stay.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((testimonial) => (
                            <motion.div
                                key={testimonial}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: testimonial * 0.2 }}
                                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic">
                                    "Amazing experience! The rooms are luxurious and the staff is very
                                    friendly. The attention to detail made our stay unforgettable."
                                </p>
                                <div className="flex items-center">
                                    <img
                                        src={guest}
                                        alt={`Guest ${testimonial}`}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <p className="font-bold">John Doe</p>
                                        <p className="text-sm text-gray-500">Business Traveler</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-4 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl md:text-4xl font-bold mb-6"
                    >
                        Ready for an Unforgettable Stay?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl mb-8 max-w-2xl mx-auto"
                    >
                        Book your stay now and experience luxury redefined at Hotel Hasan.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            <Link to="/rooms">Book Now</Link>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            <Link to="/contact">Contact Us</Link>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;