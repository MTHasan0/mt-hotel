import React from "react";
import { motion } from "framer-motion";
import { FaSwimmingPool, FaSpa, FaUtensils, FaWifi, FaParking, FaDumbbell, FaConciergeBell, FaTshirt, FaSnowflake, FaChild } from "react-icons/fa";
import { GiPartyPopper, GiCommercialAirplane } from "react-icons/gi";
import { IoIosFitness, IoMdRestaurant } from "react-icons/io";
import { MdMeetingRoom, MdRoomService, MdLocalLaundryService } from "react-icons/md";
import PremiumFeatures from '../../assets/Data/premiumFeatures.json'
import { Link } from "react-router-dom";

const Amenities = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const categories = [
        {
            title: "Wellness & Recreation",
            icon: <FaSpa className="text-3xl text-blue-600" />,
            amenities: [
                { icon: <FaSwimmingPool />, name: "Infinity Pool", description: "Heated outdoor pool with panoramic views" },
                { icon: <FaSpa />, name: "Luxury Spa", description: "Full-service spa with massage therapies" },
                { icon: <IoIosFitness />, name: "Fitness Center", description: "24/7 access with premium equipment" },
                { icon: <FaChild />, name: "Kids Club", description: "Supervised activities for children" }
            ]
        },
        {
            title: "Dining & Entertainment",
            icon: <IoMdRestaurant className="text-3xl text-blue-600" />,
            amenities: [
                { icon: <FaUtensils />, name: "Gourmet Restaurants", description: "4 award-winning dining venues" },
                { icon: <GiPartyPopper />, name: "Rooftop Lounge", description: "Craft cocktails with city views" },
                { icon: <MdRoomService />, name: "24/7 Room Service", description: "Extensive all-day menu" },
                { icon: <GiCommercialAirplane />, name: "Breakfast Buffet", description: "International breakfast selection" }
            ]
        },
        {
            title: "Business & Events",
            icon: <MdMeetingRoom className="text-3xl text-blue-600" />,
            amenities: [
                { icon: <MdMeetingRoom />, name: "Meeting Rooms", description: "Flexible event spaces" },
                { icon: <FaConciergeBell />, name: "Business Center", description: "Full office facilities" },
                { icon: <FaWifi />, name: "High-Speed WiFi", description: "Complimentary throughout property" },
                { icon: <GiPartyPopper />, name: "Event Planning", description: "Dedicated concierge service" }
            ]
        },
        {
            title: "Room Amenities",
            icon: <FaTshirt className="text-3xl text-blue-600" />,
            amenities: [
                { icon: <FaSnowflake />, name: "Climate Control", description: "Individual room thermostats" },
                { icon: <MdLocalLaundryService />, name: "Laundry Service", description: "Same-day dry cleaning" },
                { icon: <FaParking />, name: "Valet Parking", description: "24-hour parking service" },
                { icon: <FaWifi />, name: "Smart TV & Streaming", description: "Premium entertainment options" }
            ]
        }
    ];



    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 flex items-center justify-center bg-blue-900 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                    }}>
                </div>
                <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Hotel Amenities
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl"
                    >
                        Discover our world-class facilities and services
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
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Unmatched Comfort</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        At Hotel Hasan, we've curated every detail to ensure your stay is nothing short of extraordinary.
                        From our state-of-the-art facilities to our personalized services, discover what makes us unique.
                    </p>
                </motion.div>

                {/* Amenities Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                        >
                            <div className="p-6 text-center">
                                <div className="flex justify-center mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                                <ul className="space-y-4">
                                    {category.amenities.map((amenity, aIndex) => (
                                        <li key={aIndex} className="flex items-start">
                                            <span className="text-blue-600 mr-3 mt-1">{amenity.icon}</span>
                                            <div className="text-left">
                                                <h4 className="font-semibold">{amenity.name}</h4>
                                                <p className="text-gray-600 text-sm">{amenity.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Premium Features */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Signature Experiences</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Elevate your stay with our exclusive premium amenities and services.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {PremiumFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative rounded-xl overflow-hidden group"
                        >
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="mb-4">{feature.description}</p>
                                <Link
                                    onClick={scrollToTop}
                                    to={`/${feature.page}`} // or use feature.slug if you have that
                                    className="text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-block"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10">
                            <h2 className="text-3xl font-bold mb-6">Additional Services</h2>
                            <p className="text-gray-600 mb-8">
                                Our dedicated staff is available around the clock to fulfill any request and ensure your stay is perfect in every way.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "24/7 concierge service",
                                    "Airport transfers",
                                    "Valet parking",
                                    "Multilingual staff",
                                    "Currency exchange",
                                    "Medical assistance",
                                    "Babysitting services",
                                    "Pet-friendly accommodations"
                                ].map((service, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                                        {service}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden md:block relative">
                            <img
                                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Concierge service"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Luxury?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                        Book your stay now and enjoy access to all our premium amenities and services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link className=" cursor-pointer" to={'/rooms'}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Book Your Stay
                            </motion.button></Link>
                        <Link>
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

export default Amenities;