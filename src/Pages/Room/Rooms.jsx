import React from 'react';
import rooms from '../../assets/Data/RoomsData.json'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Rooms = () => {
    return (
        <div className="py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Choose your room</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {rooms.map((room) => (
                    <Link to={`/room/${room.id}`} key={room.id}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            whileInView={{ opacity: 1, delay: 0.5 }}


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
    );
};

export default Rooms;