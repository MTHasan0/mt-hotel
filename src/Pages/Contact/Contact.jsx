import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const floatingVariants = {
        initial: { y: 20, opacity: 0 },
        float: {
            y: [-10, 10, -10],
            opacity: 10,
            transition: {
                y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                opacity: { duration: 0.5 }
            }
        }
    };

    const inputVariants = {
        rest: { scale: 1 },
        focus: { scale: 1.02 }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };
    return (
        <div className="min-h-screen  flex items-center justify-center p-4 ">
            {/* Floating Particles Background */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 2 }}
            >
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-blue-600 rounded-full"
                        style={{
                            width: Math.random() * 10 + 5,
                            height: Math.random() * 10 + 5,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                        animate={{
                            x: [0, 100, 0],
                            y: [0, 50, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>

            {/* Main Contact Card */}
            <motion.div
                className="relative rounded-3xl p-8 shadow-2xl w-full max-w-2xl overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                {/* Holographic Border Effect */}
                <motion.div
                    className="absolute bg-slate-100  rounded-3xl pointer-events-none text-black"


                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                <p className="text-4xl font-bold text-black text-center mb-8  ">
                    Connect With Us
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Name Input */}
                    <motion.div
                        className="relative"
                        variants={floatingVariants}
                        initial="initial"
                        animate="float"
                    >
                        <input
                            type="text"
                            id="name"
                            className="w-full p-4  rounded-xl border-2 border-purple-400/20 focus:border-cyan-400/50 focus:outline-none  placeholder-transparent peer"
                            placeholder="Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <motion.label
                            htmlFor="name"
                            className="absolute left-4 -top-3 px-2 bg-gradient-to-r from-cyan-800 to-purple-800 bg-clip-text  text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm"
                            initial={false}
                            animate={{
                                color: formData.name ? "#06b6d4" : "#9CA3AF"
                            }}
                        >
                            Your Name
                        </motion.label>
                    </motion.div>

                    {/* Email Input */}
                    <motion.div
                        className="relative"
                        variants={floatingVariants}
                        initial="initial"
                        animate="float"
                        transition={{ delay: 0.2 }}
                    >
                        <input
                            type="email"
                            id="email"
                            className="w-full p-4  rounded-xl border-2 border-purple-400/20 focus:border-cyan-400/50 focus:outline-none  placeholder-transparent peer"
                            placeholder="Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <motion.label
                            htmlFor="email"
                            className="absolute left-4 -top-3 px-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm"
                            animate={{
                                color: formData.email ? "#06b6d4" : "#9CA3AF"
                            }}
                        >
                            Email Address
                        </motion.label>
                    </motion.div>

                    {/* Message Input */}
                    <motion.div
                        className="relative"
                        variants={floatingVariants}
                        initial="initial"
                        animate="float"
                        transition={{ delay: 0.4 }}
                    >
                        <textarea
                            id="message"
                            className="w-full p-4 rounded-xl border-2 border-purple-400/20 focus:border-cyan-400/50 focus:outline-none  placeholder-transparent peer resize-none h-32"
                            placeholder="Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                        <motion.label
                            htmlFor="message"
                            className="absolute left-4 -top-3 px-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-sm"
                            animate={{
                                color: formData.message ? "#06b6d4" : "#9CA3AF"
                            }}
                        >
                            Your Message
                        </motion.label>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        className="w-full p-4 bg-blue-500 rounded-xl text-white font-bold uppercase tracking-wider hover:shadow-xl hover:shadow-blue-400/20 relative overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span className="relative z-10">Send Message</span>
                        <motion.div
                            className="absolute inset-0 bg-white/10"
                            initial={{ x: "-100%" }}
                            animate={{ x: isSubmitted ? "100%" : "-100%" }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.button>
                </form>

                {/* Submission Confirmation */}
                <AnimatePresence>
                    {isSubmitted && (
                        <motion.div
                            className="absolute bottom-4 left-4 right-4 bg-green-500/20 p-4 rounded-xl backdrop-blur-xl"
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                        >
                            <p className="text-white font-bold text-xl text-center">
                                Message sent successfully! ✨
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Contact;