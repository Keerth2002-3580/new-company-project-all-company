import React from 'react';
import { favorites } from '../../data/npData';

const NPFavorites = () => {
    return (
        <section className="py-16 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl font-bold text-gray-800 mb-2">Our Customer Favorites</h2>
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                        Most loved products by our community - tried, trusted, and highly rated.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {favorites.map((item) => (
                        <div key={item.id} className="bg-white rounded shadow border border-gray-100 p-4">
                            <div className="h-48 rounded overflow-hidden mb-4">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="font-bold text-gray-800 text-sm mb-1">{item.name}</h3>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-sm font-bold text-green-700">{item.price}</span>
                                <div className="text-yellow-400 text-xs">
                                    {'★'.repeat(item.rating)}
                                </div>
                            </div>
                            <button className="w-full bg-[#689F38] hover:bg-[#558b2f] text-white text-xs font-bold py-2.5 rounded shadow-sm transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NPFavorites;
