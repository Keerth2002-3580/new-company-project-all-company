import React from 'react';
import { testimonials } from '../../data/npData';

const NPTestimonials = () => {
    return (
        <section className="py-20 bg-[#F1F8E9]">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
                    <p className="text-gray-500 text-xs">Real reviews from our valued customers across Sri Lanka.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                            <div className="text-yellow-400 text-xs mb-4">★★★★★</div>
                            <p className="text-gray-500 italic text-sm mb-6 leading-relaxed">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-700 text-xs">
                                    {t.user.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-800 text-sm">{t.user}</h4>
                                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NPTestimonials;
