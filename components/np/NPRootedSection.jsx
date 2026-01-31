import React from 'react';

const NPRootedSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12">
                {/* Left Image */}
                <div className="flex-1 w-full h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?q=80&w=800&auto=format&fit=crop"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                        alt="Nature"
                    />
                </div>

                {/* Right Content */}
                <div className="flex-1">
                    <h2 className="font-serif text-4xl font-bold text-gray-800 mb-6 leading-tight">
                        Rooted in Nature, Trusted by Thousands!
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                        At NP Plantation, we believe in the power of nature to heal, nourish, and sustain. Our commitment to organic farming and sustainable practices has earned the trust of customers across Sri Lanka and beyond.
                    </p>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                        From our farms in Killinochchi to your home, every product carries our promise of purity, quality, and environmental responsibility. Join our growing community of nature enthusiasts today.
                    </p>

                    <div className="flex gap-12 mb-8 text-center md:text-left">
                        <div>
                            <div className="text-2xl font-bold text-[#689F38]">5000+</div>
                            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#689F38]">100%</div>
                            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Natural Products</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-[#689F38]">24/7</div>
                            <div className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">Support</div>
                        </div>
                    </div>

                    <button className="bg-[#689F38] hover:bg-[#558b2f] text-white px-6 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NPRootedSection;
