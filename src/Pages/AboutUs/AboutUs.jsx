import { motion } from 'framer-motion';
import { useState } from 'react';
import lobby from '../../assets/Image/lobby.jpg'
import teamPhoto from '../../assets/Image/Team.jpeg'
import GoogleMapReact from 'google-map-react';
import mapPhoto from '../../assets/Image/map.png'
import { Link } from 'react-router-dom';



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

    };
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
    const defaultProps = {
        center: {
            lat: 50,
            lng: 50
        },
        zoom: 11
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
                <div>
                    <div className=' relative h-screen flex items-center justify-center bg-blue-900 '>
                        <motion.div className=' absolute inset-0 opacity-60 bg-cover '
                            initial={{ scale: 1.2 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                            style={{
                                backgroundImage: `url('https://i.postimg.cc/QMv9xC4s/temp-Image-BWYff-I.avif')`,
                            }}>

                        </motion.div>

                        <div className=" z-20 h-full flex flex-col justify-center px-6 lg:px-16">
                            <motion.div
                                className="max-w-4xl"
                                variants={container}

                                animate="visible"
                            >
                                <motion.h1
                                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                                    variants={item}
                                >
                                    Our <span className="">Story</span> of Hospitality
                                </motion.h1>

                                <motion.p
                                    className="text-xl text-white max-w-2xl mb-8"
                                    variants={item}
                                >
                                    Discover the passion and dedication behind MT Hotel's legacy of exceptional service.
                                </motion.p>

                                <motion.div variants={item}>
                                    <Link to={'/rooms/:id'} className=" px-8 py-3 bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl">
                                        Explore Our Rooms
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>


                    </div>

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
                            The <span className="text-blue-500">MT Hotel</span> Experience
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
                                    <div className="text-blue-500 flex justify-center mb-2">
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
                            className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-400 rounded-lg rotate-12"
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
                        <h2 className="text-4xl font-bold mb-4">Meet Our <span className="text-blue-400">Dream Team</span></h2>
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
                                        <p className="text-blue-300">{member.role}</p>

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
                        <div style={{ height: '100vh', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text="My Marker"
                                />
                            </GoogleMapReact>

                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                        variants={item}
                        whileHover={imageHover}
                    >
                        {/* Replace with your actual map component or image */}
                        <img
                            src={mapPhoto}
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


        </div>
    );
};

export default AboutUs;