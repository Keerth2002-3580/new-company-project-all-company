import React, { useState, useEffect } from 'react';

const NFHero = () => {
    const images = [
        "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop", // Wheat field
        "https://images.unsplash.com/photo-1625246333195-bf79138405b6?q=80&w=2000&auto=format&fit=crop", // Green farm
        "https://images.unsplash.com/photo-1499529112042-955dbf0bead2?q=80&w=2000&auto=format&fit=crop"  // Farmer hands/Produce
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative h-[600px] w-full flex items-center justify-center text-center overflow-hidden">
            {/* Background Slideshow */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        className="w-full h-full object-cover"
                        alt={`Slide ${index + 1}`}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 px-4 max-w-4xl mx-auto text-white mt-10">
                <h1 className="font-serif text-5xl md:text-6xl text-white mb-4 drop-shadow-md">
                    Welcome to NF Farming
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-2 font-light">
                    Cultivating Nature, Nurturing Future
                </p>
                <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
                    The best of nature for sustainable farming and organic cultivation products that preserve our environment while providing high quality agricultural products.
                </p>

                <div className="flex justify-center gap-4">
                    <button className="bg-[#4CA64C] hover:bg-[#3e8e3e] text-white px-8 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-all">
                        Our Products
                    </button>
                    <button className="bg-transparent border border-white hover:bg-white/10 text-white px-8 py-2.5 rounded text-sm font-bold uppercase tracking-wider transition-all">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Carousel Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                            }`}
                    ></div>
                ))}
            </div>
        </section>
    );
};

export default NFHero;
