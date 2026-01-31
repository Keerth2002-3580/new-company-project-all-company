import React from 'react';
import { promotions } from '../../data/npData';

const NPPromotions = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-gray-800 flex justify-center items-center gap-2">
                        <span role="img" aria-label="shell">🌻</span> Special Promotions
                    </h2>
                    <p className="text-gray-400 text-xs mt-2 uppercase tracking-wide">
                        Check out our latest exciting items for our premium natural products
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {promotions.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-100 p-3 group">
                            <div className="relative h-48 rounded overflow-hidden mb-3">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                {item.tag && (
                                    <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase">
                                        {item.tag}
                                    </span>
                                )}
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h3>
                            <div className="flex gap-2 items-center text-xs mb-3">
                                <span className="font-bold text-green-700">{item.price}</span>
                                {item.oldPrice && <span className="text-gray-400 line-through decoration-red-500">{item.oldPrice}</span>}
                            </div>
                            <button className="w-full bg-[#EF5350] hover:bg-[#D32F2F] text-white text-xs font-bold py-2 rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NPPromotions;
