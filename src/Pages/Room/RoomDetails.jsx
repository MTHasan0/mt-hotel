import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import rooms from '../../assets/Data/RoomsData.json'

const RoomDetails = () => {
    const { id } = useParams();

    const room = rooms.find((room) => room.id === parseInt(id));


    if (!id) {
        return <div className="text-center py-16">Room not found.</div>;
    }

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}

            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow lg:h-screen  xl:mb-0"
        >
            <div className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8">{room.title}</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <img
                            src={room.image}

                            className="w-full h-96 object-cover rounded-lg"
                        />
                        <div>
                            <p className="text-gray-600 mb-4">{room.description}</p>
                            <p className="text-2xl font-bold text-blue-500 mb-4">{room.price}</p>
                            <h2 className="text-xl font-bold mb-2">Amenities</h2>
                            <ul className="list-disc list-inside mb-5">
                                {room.amenities.map((amenity, index) => (
                                    <li key={index} className="text-gray-600">
                                        {amenity}
                                    </li>
                                ))}
                            </ul>
                            <Link to={`/booking/${room.id}`} className="bg-blue-500 text-white px-6 py-2 rounded-lg mb-44">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RoomDetails;