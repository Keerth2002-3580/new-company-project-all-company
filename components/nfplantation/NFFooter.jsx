import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { nfData } from '../../data/nfPlantationData';

const NFFooter = () => {
    return (
        <footer className="relative bg-gray-950 text-white pt-16 pb-8 border-t border-white/5 text-sm overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            {/* Glowing orb effect for atmosphere */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded-full border border-emerald-500/30 bg-gray-900 flex items-center justify-center font-bold text-xs text-emerald-500">NF</div>
                            <span className="font-bold text-lg tracking-tight">NF Plantation</span>
                        </div>
                        <p className="text-gray-400 text-xs leading-relaxed mb-6">
                            Sustainable aloe vera investment opportunities with government backing and guaranteed returns.
                            <br /><br />
                            <span className="text-emerald-500/80">Reg. No: 00303425</span>
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-gray-400 text-xs">
                            <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">About Us</a></li>
                            <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Services</a></li>
                            <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Investment Plans</a></li>
                            <li><a href="#" className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block">Contact</a></li>
                        </ul>
                    </div>

                    {/* Investment Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Investment Info
                        </h4>
                        <ul className="space-y-3 text-gray-400 text-xs">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Minimum Investment: 50,000</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Investment Period: 3 Years</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gray-600 rounded-full"></span>Monthly Returns: 3-4%</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-emerald-500 rounded-full"></span>Government Approved</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Contact Info
                        </h4>
                        <div className="space-y-4 text-gray-400 text-xs mb-6">
                            <p className="flex items-start gap-3 leading-relaxed group">
                                <MapPin size={16} className="text-emerald-500 group-hover:text-emerald-400 transition-colors shrink-0 mt-0.5" />
                                {nfData.contact.address}
                            </p>
                            <p className="flex items-center gap-3 group">
                                <Phone size={16} className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                                Phone: {nfData.contact.phone}
                            </p>
                            <p className="flex items-center gap-3 group">
                                <Mail size={16} className="text-emerald-500 group-hover:text-emerald-400 transition-colors" />
                                Email: {nfData.contact.email}
                            </p>
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-6 py-2.5 rounded transition-all w-max shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-500/50">
                            Start Investing
                        </button>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-xs flex flex-col items-center">
                    <p>&copy; 2024 NF Plantation. All rights reserved.</p>
                    <p className="mt-2 text-[10px] text-gray-700 max-w-md">Licensed and regulated investment company specializing in sustainable agriculture.</p>
                </div>
            </div>
        </footer>
    );
};

export default NFFooter;
