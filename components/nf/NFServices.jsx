import React from 'react';
import { services } from '../../data/nfData';

const NFServices = () => {
    return (
        <section className="py-20 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-bold text-gray-800 mb-3">Our Services</h2>
                    <p className="text-gray-500 text-sm max-w-xl mx-auto">
                        Connecting farmers and unlocking innovative nature farming solutions and community-driven agriculture.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100/50">
                            <div className="h-48 overflow-hidden">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                            </div>
                            <div className="p-6">
                                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-700 mb-4">
                                    <service.icon size={20} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-serif font-bold text-gray-800 text-lg mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed mb-4 min-h-[60px]">
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NFServices;
