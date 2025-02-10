import { motion } from 'framer-motion'
import { useState } from 'react'

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const images = [
        {
            "id": 1,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Deluxe Room",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$200/night",
            "amenities": [
                "Free Wi-Fi",
                "Air Conditioning",
                "Breakfast Included"
            ]
        },
        {
            "id": 2,
            "image": "https://i.postimg.cc/yNq2mydk/temp-Image8a-WIay.avif",
            "title": "Executive Suite",
            "description": "Elegant suite with modern amenities and a private balcony.",
            "price": "$300/night",
            "amenities": [
                "Free Wi-Fi",
                "Air Conditioning",
                "Mini Bar"
            ]
        },
        {
            "id": 3,
            "image": "https://i.postimg.cc/4NSDdgRv/temp-Imagezl2i-Dh.avif",
            "title": "Presidential Suite",
            "description": "Ultimate luxury with a jacuzzi and panoramic city views.",
            "price": "$500/night",
            "amenities": [
                "Free Wi-Fi",
                "Air Conditioning",
                "Jacuzzi",
                "Private Pool"
            ]
        },
        {
            "id": 4,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Standard Room",
            "description": "Comfortable room with all essential amenities.",
            "price": "$150/night",
            "amenities": [
                "Free Wi-Fi",
                "Air Conditioning",
                "TV"
            ]
        },
        {
            "id": 5,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Ocean View Suite",
            "description": "Breathtaking ocean views with a private balcony.",
            "price": "$350/night",
            "amenities": [
                "Free Wi-Fi",
                "Ocean View",
                "Private Balcony"
            ]
        },
        {
            "id": 6,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Family Suite",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$250/night",
            "amenities": [
                "Free Wi-Fi",
                "Extra Beds",
                "Kids Play Area"
            ]
        },
        {
            "id": 7,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Penthouse",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$600/night",
            "amenities": [
                "Free Wi-Fi",
                "Private Rooftop",
                "Butler Service"
            ]
        },
        {
            "id": 8,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Garden View Room",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$180/night",
            "amenities": [
                "Free Wi-Fi",
                "Garden View",
                "Air Conditioning"
            ]
        },
        {
            "id": 9,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Twin Room",
            "description": "Perfect for friends or colleagues traveling together.",
            "price": "$160/night",
            "amenities": [
                "Free Wi-Fi",
                "Two Beds",
                "Breakfast Included"
            ]
        },
        {
            "id": 10,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Romantic Suite",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$400/night",
            "amenities": [
                "Free Wi-Fi",
                "Candlelight Dinner",
                "Hot Tub"
            ]
        },
        {
            "id": 11,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Honeymoon Suite",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$450/night",
            "amenities": [
                "Free Wi-Fi",
                "Jacuzzi",
                "Champagne on Arrival"
            ]
        },
        {
            "id": 12,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Loft Suite",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$320/night",
            "amenities": [
                "Free Wi-Fi",
                "Air Conditioning",
                "Mini Kitchen"
            ]
        },
        {
            "id": 13,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Business Suite",
            "description": "Perfect for business travelers with a workspace.",
            "price": "$280/night",
            "amenities": [
                "Free Wi-Fi",
                "Workspace",
                "Coffee Machine"
            ]
        },
        {
            "id": 14,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Lake View Suite",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$360/night",
            "amenities": [
                "Free Wi-Fi",
                "Lake View",
                "Balcony"
            ]
        },
        {
            "id": 15,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Royal Suite",
            "description": "Experience regal luxury with top-notch services.",
            "price": "$700/night",
            "amenities": [
                "Free Wi-Fi",
                "Butler Service",
                "Private Jacuzzi"
            ]
        },
        {
            "id": 16,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Cabana Room",
            "description": "Relaxing beach side cabana with private access.",
            "price": "$220/night",
            "amenities": [
                "Free Wi-Fi",
                "Beach Access",
                "Hammock"
            ]
        },
        {
            "id": 17,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Studio Apartment",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$190/night",
            "amenities": [
                "Free Wi-Fi",
                "Kitchenette",
                "Air Conditioning"
            ]
        },
        {
            "id": 18,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Heritage Suite",
            "description": "Stay in a beautifully restored heritage suite.",
            "price": "$380/night",
            "amenities": [
                "Free Wi-Fi",
                "Vintage Decor",
                "Breakfast Included"
            ]
        },
        {
            "id": 19,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Bungalow",
            "description": "Spacious and luxurious room with a stunning view.",
            "price": "$450/night",
            "amenities": [
                "Free Wi-Fi",
                "Private Garden",
                "Outdoor Shower"
            ]
        },
        {
            "id": 20,
            "image": "https://i.postimg.cc/j5c9rVh7/temp-Image4-TW0-AX.avif",
            "title": "Mountain Lodge",
            "description": "Cozy retreat in the mountains with breathtaking views.",
            "price": "$280/night",
            "amenities": [
                "Free Wi-Fi",
                "Fireplace",
                "Scenic Views"
            ]
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 50,
                delay: i * 0.1
            }


        }),
        hover: (i) => ({
            scale: activeIndex === -1 ? 1.1 : i === activeIndex ? 1.2 : 0.9,
            zIndex: 100,
            filter: 'brightness(1.2)',
            transition: { type: 'spring', stiffness: 300 }
        })
    }

    return (
        <div className="min-h-screen  py-20 px-4">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {images.map((img, i) => (
                    <motion.div
                        key={img.id}
                        custom={i}

                        variants={itemVariants}
                        whileHover="hover"
                        onHoverStart={() => setActiveIndex(i)}
                        onHoverEnd={() => setActiveIndex(-1)}
                        className={`relative cursor-pointer col-span-${i % 5 === 0 ? '2' : '1'}`}
                    >
                        <img
                            src={img.image}
                            alt={img.title}
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <motion.div
                            className="absolute  left-0 right-0 bg-black/80 p-4 text-white rounded-b-lg top-2"
                            initial={{ y: 100 }}
                            animate={{
                                y: activeIndex === i ? 0 : 100,
                                transition: { type: 'spring', stiffness: 100 }
                            }}
                        >
                            <h3 className="font-bold text-xl">{img.title}</h3>


                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Gallery
