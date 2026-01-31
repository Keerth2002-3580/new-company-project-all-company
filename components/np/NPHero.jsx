import React from 'react';

const NPHero = () => {
    return (
        <section className="relative h-[550px] w-full mt-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1612534572202-0e4952d765d7?q=80&w=2000&auto=format&fit=crop"
                    alt="Aloe"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-4">
                <h1 className="font-serif text-5xl md:text-6xl text-white drop-shadow-lg mb-8 tracking-wide">
                    Pure Aloe Vera Products
                </h1>
                <button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-8 py-3 rounded-full text-base font-medium shadow-lg transition-transform hover:scale-105 active:scale-95">
                    Shop Aloe Vera
                </button>
            </div>
        </section>
    );
};

export default NPHero;
