import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaWifi, FaParking, FaSwimmingPool, FaCoffee, FaTv, FaChevronDown } from 'react-icons/fa';
import { GiBathtub, GiDesk, GiSofa } from 'react-icons/gi';
import { MdKingBed, MdAcUnit, MdLocalLaundryService } from 'react-icons/md';
import featuredRooms from '../../assets/Data/RoomsData.json';

const Rooms = () => {
    const [selectedRoom, setSelectedRoom] = useState(0);
    const [expandedSection, setExpandedSection] = useState(null);

    // Enhanced room data
    const rooms = featuredRooms.map((room, index) => ({
        ...room,
        id: index + 1,
        size: `${30 + (index * 15)} m²`,
        capacity: index === 0 ? "2 Adults" : index === 1 ? "2 Adults + 1 Child" : "2 Adults + 2 Children",
        bedType: "King Bed",
        view: ["City View", "Partial Ocean View", "Panoramic View"][index],
        amenities: [
            { icon: <MdKingBed />, name: "King Bed" },
            { icon: <GiBathtub />, name: "Luxury Bathroom" },
            { icon: <FaWifi />, name: "High-speed WiFi" },
            { icon: <FaTv />, name: "Smart TV" },
            { icon: <MdAcUnit />, name: "Climate Control" },
            { icon: <FaCoffee />, name: "Coffee Maker" },
            ...(index > 0 ? [{ icon: <GiSofa />, name: "Sitting Area" }] : []),
            ...(index > 1 ? [{ icon: <FaSwimmingPool />, name: "Pool Access" }] : [])
        ],
        highlights: [
            "Premium Egyptian cotton linens",
            "Soundproof windows",
            "Custom lighting system",
            "Ergonomic workspace",
            ...(index > 0 ? ["Separate living area"] : []),
            ...(index > 1 ? ["Personal butler service"] : [])
        ]
    }));

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    return (
        <div className="bg-gray-50">
            {/* Mobile Header */}
            <div className="lg:hidden sticky top-0 z-10 bg-white shadow-sm p-4">
                <h1 className="text-xl font-bold">Our Rooms</h1>
            </div>

            {/* Vertical Room Showcase */}
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Room Selector - Mobile (Horizontal Scroll) */}
                <div className="lg:hidden flex overflow-x-auto py-4 px-4 bg-white shadow-inner">
                    {rooms.map((room, index) => (
                        <button
                            key={room.id}
                            onClick={() => setSelectedRoom(index)}
                            className={`flex-shrink-0 mx-2 px-4 py-2 rounded-full ${selectedRoom === index ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                        >
                            {room.title.split(' ')[0]}
                        </button>
                    ))}
                </div>

                {/* Room Selector - Desktop */}
                <div className="hidden lg:flex lg:w-1/4 bg-gray-100 p-6 flex-col">
                    <h2 className="text-2xl font-bold mb-6">Room Selection</h2>
                    {rooms.map((room, index) => (
                        <motion.button
                            key={room.id}
                            onClick={() => setSelectedRoom(index)}
                            whileHover={{ x: 5 }}
                            className={`text-left p-4 mb-3 rounded-lg ${selectedRoom === index ? 'bg-white shadow-md border-l-4 border-blue-600' : 'hover:bg-gray-200'}`}
                        >
                            <h3 className="font-semibold">{room.title}</h3>
                            <p className="text-sm text-gray-600">{room.price}</p>
                        </motion.button>
                    ))}
                </div>

                {/* Room Content */}
                <div className="lg:w-3/4">
                    {/* Room Hero Image */}
                    <div className="relative h-64 lg:h-96 overflow-hidden">
                        <img
                            src={rooms[selectedRoom].image}
                            alt={rooms[selectedRoom].title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/2" />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h1 className="text-2xl lg:text-4xl font-bold">{rooms[selectedRoom].title}</h1>
                            <div className="flex items-center mt-1">
                                <div className="flex text-yellow-400 mr-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <span>4.9 (128 reviews)</span>
                            </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg shadow-lg">
                            {rooms[selectedRoom].price}
                        </div>
                    </div>

                    {/* Room Details - Mobile Accordion */}
                    <div className="lg:hidden bg-white">
                        {/* Description */}
                        <div className="border-b border-gray-200 px-4">
                            <button
                                onClick={() => toggleSection('description')}
                                className="w-full py-4 flex justify-between items-center"
                            >
                                <h3 className="font-semibold">Description</h3>
                                <motion.div
                                    animate={{ rotate: expandedSection === 'description' ? 180 : 0 }}
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>
                            {expandedSection === 'description' && (
                                <div className="pb-4">
                                    <p className="text-gray-600">{rooms[selectedRoom].description}</p>
                                </div>
                            )}
                        </div>

                        {/* Amenities */}
                        <div className="border-b border-gray-200 px-4">
                            <button
                                onClick={() => toggleSection('amenities')}
                                className="w-full py-4 flex justify-between items-center"
                            >
                                <h3 className="font-semibold">Amenities</h3>
                                <motion.div
                                    animate={{ rotate: expandedSection === 'amenities' ? 180 : 0 }}
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>
                            {expandedSection === 'amenities' && (
                                <div className="pb-4 grid grid-cols-2 gap-3">
                                    {rooms[selectedRoom].amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center">
                                            <span className="text-blue-600 mr-2">{amenity.icon}</span>
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Highlights */}
                        <div className="border-b border-gray-200 px-4">
                            <button
                                onClick={() => toggleSection('highlights')}
                                className="w-full py-4 flex justify-between items-center"
                            >
                                <h3 className="font-semibold">Room Highlights</h3>
                                <motion.div
                                    animate={{ rotate: expandedSection === 'highlights' ? 180 : 0 }}
                                >
                                    <FaChevronDown />
                                </motion.div>
                            </button>
                            {expandedSection === 'highlights' && (
                                <div className="pb-4">
                                    <ul className="space-y-2">
                                        {rooms[selectedRoom].highlights.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="w-1 h-1 mt-2 mr-2 bg-blue-600 rounded-full"></div>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Room Details - Desktop */}
                    <div className="hidden lg:block bg-white p-8">
                        <h2 className="text-2xl font-bold mb-4">Room Details</h2>
                        <p className="text-gray-600 mb-8">{rooms[selectedRoom].description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {rooms[selectedRoom].amenities.map((amenity, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            className="flex items-center"
                                        >
                                            <span className="text-blue-600 mr-3">{amenity.icon}</span>
                                            <span>{amenity.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Room Highlights</h3>
                                <ul className="space-y-3">
                                    {rooms[selectedRoom].highlights.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="w-2 h-2 mt-2 mr-3 bg-blue-600 rounded-full"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Booking Section */}
                    <div className="bg-gray-100 p-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-xl font-bold mb-6">Book Your Stay</h2>

                            <div className="bg-white rounded-xl shadow-sm p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2">Check-In</label>
                                        <input
                                            type="date"
                                            className="w-full p-3 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Check-Out</label>
                                        <input
                                            type="date"
                                            className="w-full p-3 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Adults</label>
                                        <select className="w-full p-3 border border-gray-300 rounded-lg">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2">Children</label>
                                        <select className="w-full p-3 border border-gray-300 rounded-lg">
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                                    <div className="flex justify-between mb-2">
                                        <span>{rooms[selectedRoom].price} x 3 nights</span>
                                        <span className="font-semibold">
                                            {rooms[selectedRoom].price === "$299/night" ? "$897" :
                                                rooms[selectedRoom].price === "$499/night" ? "$1,497" : "$2,697"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Taxes & Fees</span>
                                        <span className="font-semibold">$147</span>
                                    </div>
                                    <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold">
                                        <span>Total</span>
                                        <span className="text-blue-600">
                                            {rooms[selectedRoom].price === "$299/night" ? "$1,044" :
                                                rooms[selectedRoom].price === "$499/night" ? "$1,644" : "$2,844"}
                                        </span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                                >
                                    Book Now
                                </motion.button>

                                <p className="text-center text-sm text-gray-500 mt-4">
                                    Free cancellation up to 48 hours before arrival
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Rooms */}
            <div className="py-12 px-4 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">Explore Other Accommodations</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.filter((_, index) => index !== selectedRoom).map((room) => (
                        <motion.div
                            key={room.id}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1">{room.title}</h3>
                                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{room.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold text-blue-600">{room.price}</span>
                                    <button
                                        onClick={() => setSelectedRoom(rooms.findIndex(r => r.id === room.id))}
                                        className="text-blue-600 text-sm font-medium"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Mobile Booking CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 border-t border-gray-200">
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                >
                    Book Now - {rooms[selectedRoom].price}
                </motion.button>
            </div>
        </div>
    );
};

export default Rooms;