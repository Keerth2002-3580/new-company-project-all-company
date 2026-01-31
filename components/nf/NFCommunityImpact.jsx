import React from 'react';
import { impactStats } from '../../data/nfData';

const NFCommunityImpact = () => {
    return (
        <section className="py-16 bg-[#5D8949]" style={{ backgroundColor: '#5D8949' }}>
            <div className="container mx-auto px-6 lg:px-12 text-center text-white">
                <h2 className="font-serif text-3xl font-bold mb-3">Our Community Impact</h2>
                <p className="text-green-100 text-sm mb-12 max-w-2xl mx-auto">
                    Building a stronger agriculture community through sustainable practices and innovative farming solutions.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-green-400/30">
                    {impactStats.map((stat, i) => (
                        <div key={i} className="px-4">
                            <div className="font-serif text-4xl font-bold mb-2">{stat.value}</div>
                            <div className="text-sm font-semibold mb-1 opacity-90">{stat.label}</div>
                            <div className="text-xs text-green-200 mt-2 opacity-80 font-light">{stat.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NFCommunityImpact;
