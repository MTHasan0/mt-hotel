import { motion } from 'framer-motion';
import { useState } from 'react';
import lobby from '../../assets/Image/lobby.jpg'
import teamPhoto from '../../assets/Image/Team.jpeg'



const AboutUs = () => {
    const [hoveredMember, setHoveredMember] = useState(null);

    // Sample data
    const hotelInfo = {
        name: "MT Hotel",
        description: "Where luxury meets comfort in perfect harmony. Established in 2005, MT Hotel has been redefining hospitality with our unique blend of modern elegance and timeless tradition.",
        stats: [
            { value: "18", label: "Years of Excellence" },
            { value: "120+", label: "Rooms & Suites" },
            { value: "4.9", label: "Guest Rating" }
        ],
        team: [
            { id: 1, name: "Sarah Johnson", role: "General Manager" },
            { id: 2, name: "Michael Chen", role: "Head Chef" },
            { id: 3, name: "Elena Rodriguez", role: "Guest Relations" },
            { id: 4, name: "David Wilson", role: "Head Concierge" }
        ],
        location: {
            address: "123 Luxury Avenue, Metropolitan City",
            coords: { lat: 40.7128, lng: -74.0060 }
        }
    };

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const imageHover = {
        scale: 1.03,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <motion.section
                className="relative h-screen max-h-[800px] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="absolute inset-0 bg-black/30 z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                />

                {/* Background image with parallax effect */}
                <motion.div
                    className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                />

                <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-16">
                    <motion.div
                        className="max-w-4xl"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                            variants={item}
                        >
                            Our <span className="text-amber-400">Story</span> of Hospitality
                        </motion.h1>

                        <motion.p
                            className="text-xl text-white max-w-2xl mb-8"
                            variants={item}
                        >
                            Discover the passion and dedication behind MT Hotel's legacy of exceptional service.
                        </motion.p>

                        <motion.div variants={item}>
                            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl">
                                Explore Our Rooms
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scrolling indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
                        <motion.div
                            className="w-1 h-3 bg-white rounded-full mt-2"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                    </div>
                </motion.div>
            </motion.section>

            {/* About Section */}
            <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
                <motion.div
                    className="grid md:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={container}
                >
                    <motion.div variants={item}>
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">
                            The <span className="text-amber-500">MT Hotel</span> Experience
                        </h2>

                        <p className="text-lg text-gray-600 mb-6">
                            {hotelInfo.description}
                        </p>

                        <p className="text-lg text-gray-600 mb-8">
                            Our philosophy centers around creating unforgettable moments for our guests through personalized service, exquisite dining, and thoughtfully designed spaces that blend contemporary luxury with local culture.
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                            {hotelInfo.stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-4 rounded-xl shadow-md text-center"
                                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                                    variants={item}
                                >
                                    <div className="text-amber-500 flex justify-center mb-2">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                                    <p className="text-sm text-gray-600">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-96 rounded-2xl overflow-hidden"
                        variants={item}
                        whileHover={imageHover}
                    >
                        <img
                            src={lobby}
                            alt="MT Hotel Lobby"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                        {/* Decorative element */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-lg rotate-12"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 0.3, x: 0 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                        />
                    </motion.div>
                </motion.div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-900 text-white px-6 lg:px-16">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Meet Our <span className="text-amber-400">Dream Team</span></h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            The passionate individuals who make your stay unforgettable
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {hotelInfo.team.map((member) => (
                            <motion.div
                                key={member.id}
                                className="relative group"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={item}
                                onMouseEnter={() => setHoveredMember(member.id)}
                                onMouseLeave={() => setHoveredMember(null)}
                            >
                                <div className="relative overflow-hidden rounded-xl h-96">
                                    <motion.img
                                        src={teamPhoto}
                                        alt={member.name}
                                        className="w-full h-full object-cover"
                                        whileHover={imageHover}
                                    />

                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: hoveredMember === member.id ? 1 : 0.7,
                                        }}
                                    >
                                        <h3 className="text-2xl font-bold">{member.name}</h3>
                                        <p className="text-amber-300">{member.role}</p>

                                        <motion.div
                                            className="mt-4 pt-4 border-t border-white/20"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{
                                                opacity: hoveredMember === member.id ? 1 : 0,
                                                y: hoveredMember === member.id ? 0 : 10
                                            }}
                                        >
                                            <p className="text-sm">"Making every guest feel special is my greatest joy."</p>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={container}
                >
                    <motion.div variants={item}>
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">
                            Our <span className="text-amber-500">Prime</span> Location
                        </h2>

                        <p className="text-lg text-gray-600 mb-6">
                            Situated in the heart of the city, MT Hotel offers unparalleled access to cultural landmarks, business districts, and entertainment venues.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">

                                <div>
                                    <h4 className="font-medium text-gray-800">Address</h4>
                                    <p className="text-gray-600">{hotelInfo.location.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-medium text-gray-800">Check-in/out</h4>
                                    <p className="text-gray-600">3:00 PM / 11:00 AM</p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-8 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                            Get Directions
                        </button>
                    </motion.div>

                    <motion.div
                        className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                        variants={item}
                        whileHover={imageHover}
                    >
                        {/* Replace with your actual map component or image */}
                        <img
                            src="/hotel-map.jpg"
                            alt="MT Hotel Location"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30" />

                        {/* Map marker animation */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-500 rounded-full shadow-lg flex items-center justify-center"
                            animate={{
                                scale: [1, 1.2, 1],
                                y: [0, -5, 0]
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2
                            }}
                        >

                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-amber-500 text-white">
                <motion.div
                    className="max-w-4xl mx-auto text-center px-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-6">Ready for an Unforgettable Stay?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Experience the MT Hotel difference - where every detail is crafted for your comfort.
                    </p>
                    <motion.button
                        className="px-10 py-4 bg-white text-amber-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Book Your Stay Now
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
};

export default AboutUs;