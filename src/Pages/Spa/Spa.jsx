import React from 'react';
import { motion } from "framer-motion";
import { FaSpa, FaLeaf, FaWater, FaClock, FaStar, FaRegStar, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { GiStonePath, GiHealing } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Link } from "react-router-dom";
const Spa = () => {
    const treatments = [
        {
            id: 1,
            name: "Royal Hammam Ritual",
            duration: "120 mins",
            price: "$299",
            description: "An authentic Middle Eastern cleansing ritual combining steam, black soap exfoliation, and rhassoul clay treatment followed by a relaxing massage.",
            benefits: [
                "Deep cleansing & detoxification",
                "Improved skin texture",
                "Muscle tension relief",
                "Enhanced circulation"
            ],
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 2,
            name: "Diamond Radiance Facial",
            duration: "90 mins",
            price: "$249",
            description: "Luxurious anti-aging facial using diamond-tipped microdermabrasion combined with 24k gold collagen masks and caviar extracts.",
            benefits: [
                "Reduces fine lines & wrinkles",
                "Instant brightening effect",
                "Boosts collagen production",
                "Improves skin elasticity"
            ],
            image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id: 3,
            name: "Hot Stone Harmony",
            duration: "80 mins",
            price: "$199",
            description: "Basalt stone therapy that melts away tension with heated volcanic stones and aromatic essential oils for deep muscle relaxation.",
            benefits: [
                "Relieves chronic muscle pain",
                "Reduces stress & anxiety",
                "Improves sleep quality",
                "Balances energy flow"
            ],
            image: "https://i.postimg.cc/MTW39Y1P/temp-Imaget-Axmum.avif"
        },
        {
            id: 4,
            name: "Holistic Ayurvedic Journey",
            duration: "150 mins",
            price: "$349",
            description: "Ancient Indian healing tradition combining Abhyanga massage, Shirodhara, and herbal poultice therapy tailored to your dosha.",
            benefits: [
                "Restores mind-body balance",
                "Detoxifies at cellular level",
                "Enhances mental clarity",
                "Boosts immune system"
            ],
            image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        }
    ];

    const features = [
        {
            icon: <GiStonePath className="text-4xl" />,
            title: "Natural Elements",
            description: "We use only the finest natural ingredients from around the world"
        },
        {
            icon: <MdOutlineHealthAndSafety className="text-4xl" />,
            title: "Expert Therapists",
            description: "Our specialists have 10+ years experience in holistic therapies"
        },
        {
            icon: <FaLeaf className="text-4xl" />,
            title: "Organic Products",
            description: "100% organic, cruelty-free products with no synthetic additives"
        },
        {
            icon: <GiHealing className="text-4xl" />,
            title: "Customized Approach",
            description: "Every treatment is personalized to your specific needs"
        }
    ];
    return (



        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-96 flex items-center justify-center bg-blue-600 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                    }}>
                </div>
                <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Signature Spa Treatments
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl"
                    >
                        Ancient healing traditions meet modern luxury
                    </motion.p>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey to Renewal</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        Our award-winning spa combines time-honored techniques with innovative therapies to create transformative experiences.
                        Each treatment begins with a personal consultation to craft your perfect wellness journey.
                    </p>
                </motion.div>

                {/* Signature Treatments */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Signature Treatments</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {treatments.map((treatment, index) => (
                            <motion.div
                                key={treatment.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/3 h-64 md:h-auto">
                                        <img
                                            src={treatment.image}
                                            alt={treatment.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold">{treatment.name}</h3>
                                            <div className="flex items-center bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                                                <FaClock className="mr-2" />
                                                <span>{treatment.duration}</span>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 mb-4">{treatment.description}</p>

                                        <div className="mb-4">
                                            <h4 className="font-semibold mb-2">Key Benefits:</h4>
                                            <ul className="space-y-2">
                                                {treatment.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-blue-600 mr-2 mt-1">✓</span>
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex justify-between items-center mt-6">
                                            <span className="text-2xl font-bold text-blue-700">{treatment.price}</span>
                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-xl shadow-lg p-10 mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Spa</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-6 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                <div className="text-blue-600 mb-4 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Guest Experiences</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                rating: 5,
                                comment: "The Royal Hammam Ritual was transformative. I've never felt so rejuvenated. The therapists were incredibly skilled and attentive to my needs.",
                                date: "March 2023"
                            },
                            {
                                name: "Michael Chen",
                                rating: 5,
                                comment: "As a frequent spa-goer, I can confidently say this is among the best spa experiences I've had worldwide. The Diamond Facial left my skin glowing for weeks.",
                                date: "January 2023"
                            },
                            {
                                name: "Emma Rodriguez",
                                rating: 4,
                                comment: "The Ayurvedic Journey was exactly what I needed to de-stress. The ambiance is so peaceful and the custom oil blend was perfect for my constitution.",
                                date: "February 2023"
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md"
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        i < testimonial.rating ?
                                            <FaStar key={i} className="text-yellow-400" /> :
                                            <FaRegStar key={i} className="text-gray-300" />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic mb-4">"{testimonial.comment}"</p>
                                <div className="font-semibold">{testimonial.name}</div>
                                <div className="text-sm text-gray-500">{testimonial.date}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Spa Facilities */}
                <div className="bg-blue-600 text-white rounded-xl overflow-hidden mb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10">
                            <h2 className="text-3xl font-bold mb-6">Our Spa Sanctuary</h2>
                            <p className="mb-8 opacity-90">
                                Step into our 5,000 sq ft oasis of calm featuring 12 treatment rooms, hydrotherapy pools,
                                a eucalyptus steam room, and serene relaxation lounges with panoramic garden views.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Private couple's suite available",
                                    "Gender-segregated thermal areas",
                                    "Outdoor meditation garden",
                                    "Juice bar with wellness elixirs",
                                    "Silent relaxation zones",
                                    "Complimentary herbal teas"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-4">
                                <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                    Virtual Tour
                                </button>
                                <button className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                                    Spa Menu
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block relative min-h-64">
                            <img
                                src="https://i.postimg.cc/d0yfx17X/temp-Imageg-IYn-Vi.avif"
                                alt="Spa facilities"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Booking CTA */}
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Wellness Journey</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
                        Our spa concierge is available to help you create your perfect treatment itinerary.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Book Your Treatment
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Contact Spa Concierge
                        </motion.button>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
                        <div className="flex items-start">
                            <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 mr-4" />
                            <div>
                                <h4 className="font-bold mb-1">Location</h4>
                                <p className="text-gray-600">5th Floor, West Wing<br />Hotel Hasan</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaPhone className="text-blue-600 text-xl mt-1 mr-4" />
                            <div>
                                <h4 className="font-bold mb-1">Reservations</h4>
                                <p className="text-gray-600">+1 (555) 123-4567<br />spa@hotelhasan.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <FaClock className="text-blue-600 text-xl mt-1 mr-4" />
                            <div>
                                <h4 className="font-bold mb-1">Hours</h4>
                                <p className="text-gray-600">Daily: 8:00 AM - 10:00 PM<br />Last booking at 8:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Spa;








