import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import rooms from '../../assets/Data/RoomsData.json'

const BookNow = () => {

    const { id } = useParams();
    const room = rooms.find((room) => room.id === parseInt(id));
    if (!room) {
        return <div>There is no directory</div>
    }
    const { image, title, description, price, amenities } = rooms;
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <div className="relative h-96 flex items-center justify-center">
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
                    <h1 className="text-5xl font-bold mb-4">Book Your Stay</h1>
                    <p className="text-xl">
                        Experience luxury and comfort at Hotel Hasan.
                    </p>
                </motion.div>
            </div>

            {/* Booking Form */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-16"
            >
                <h2 className="text-2xl font-bold mb-8">Reservation Details</h2>
                <form>
                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}

                        className="mb-6"
                    >
                        <div className="mb-6">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mb-6"
                    >
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="johndoe@example.com"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mb-6"
                    >
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="phone"
                            >
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+123 456 7890"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </motion.div>

                    {/* Room Selection */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mb-6"
                    >
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="room"
                            >
                                Select Room
                            </label>
                            <select
                                id="room"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="deluxe">Deluxe Room</option>
                                <option value="executive">Executive Suite</option>
                                <option value="presidential">Presidential Suite</option>
                            </select>
                        </div>
                    </motion.div>

                    {/* Check-in and Check-out Dates */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="mb-6"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="checkin"
                                >
                                    Check-in Date
                                </label>
                                <input
                                    type="date"
                                    id="checkin"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-gray-700 font-bold mb-2"
                                    htmlFor="checkout"
                                >
                                    Check-out Date
                                </label>
                                <input
                                    type="date"
                                    id="checkout"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Number of Guests */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        className="mb-6"
                    >
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="guests"
                            >
                                Number of Guests
                            </label>
                            <input
                                type="number"
                                id="guests"
                                min="1"
                                max="10"
                                placeholder="2"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </motion.div>

                    {/* Special Requests */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mb-6"
                    >
                        <div className="mb-6">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="requests"
                            >
                                Special Requests
                            </label>
                            <textarea
                                id="requests"
                                rows="4"
                                placeholder="Any special requests?"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                    >
                        Confirm Booking
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default BookNow;