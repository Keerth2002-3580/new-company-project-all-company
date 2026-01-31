import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const NPFooter = () => {
    return (
        <footer className="bg-[#051c0e] text-gray-400 py-16 text-[11px] leading-5">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center p-1">
                                <Leaf className="text-[#051c0e] w-full h-full" fill="#051c0e" />
                            </div>
                            <span className="font-serif font-bold text-white text-sm">Natural Plantation</span>
                        </div>
                        <p className="mb-6">
                            Experience the finest natural and organic products straight from nature's gardens in Sri Lanka.
                        </p>
                        <div className="flex gap-3">
                            <Facebook size={14} className="hover:text-white cursor-pointer" />
                            <Instagram size={14} className="hover:text-white cursor-pointer" />
                            <Twitter size={14} className="hover:text-white cursor-pointer" />
                            <Linkedin size={14} className="hover:text-white cursor-pointer" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Products</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-4">Categories</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Aloe Vera Products</a></li>
                            <li><a href="#" className="hover:text-white">Herbal Teas</a></li>
                            <li><a href="#" className="hover:text-white">Natural Furniture</a></li>
                            <li><a href="#" className="hover:text-white">Health Supplements</a></li>
                            <li><a href="#" className="hover:text-white">Daily Wellness</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                48, Gregory's Rd, Colombo 07
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                +94 71 123 4567
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                NP Plantation
                            </li>
                            <li className="mt-2 text-gray-500">
                                Open 9:00 AM - 5:00 PM<br />
                                Battaramulla, Sri Lanka
                            </li>
                            <li className="flex items-center gap-2 mt-2">
                                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                                mon-fri: 09:00-17:00
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-[10px] text-gray-500">
                    © 2026 Natural Plantation. All rights reserved. | Privacy Policy | Terms of Service
                </div>
            </div>
        </footer>
    );
};

export default NPFooter;
