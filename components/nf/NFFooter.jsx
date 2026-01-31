import React from 'react';
import { Sprout } from 'lucide-react';

const NFFooter = () => {
    return (
        <footer className="bg-[#052010] text-gray-300 py-16 text-xs">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <div className="w-6 h-6 rounded bg-white flex items-center justify-center p-1">
                                <Sprout className="text-[#052010] w-4 h-4" />
                            </div>
                            <span className="font-bold text-base">NF Farming</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            Our goal is to assist sustainable farming practices and organic cultivation methods that preserve our environment while providing the highest quality agricultural products.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Marketing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h4>
                        <ul className="space-y-3 font-mono text-gray-400">
                            <li>TP: 777-456-1122</li>
                            <li>Email: info@natural.com</li>
                            <li>Colombo, Sri Lanka</li>
                            <li>+94 11 234 5678</li>
                        </ul>
                        <a href="mailto:info@natural.com" className="inline-block mt-4 text-white underline">info@natural.com</a>
                    </div>

                    {/* Empty Col relative space matching screenshot */}
                    <div></div>
                </div>

                <div className="text-center text-gray-500 font-medium">
                    © 2026 NF Farming. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default NFFooter;
