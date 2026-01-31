import React from 'react';
import { Link } from 'react-router-dom';
import NFHeader from '../../components/nfplantation/NFHeader';
import NFFooter from '../../components/nfplantation/NFFooter';
import ContactFormCard from '../../components/nfplantation/ContactFormCard';
import { nfData } from '../../data/nfPlantationData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="font-sans text-white bg-gray-950 selection:bg-emerald-500 selection:text-white">
            <NFHeader />

            {/* HEADER STRIP */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Contact Us</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm mb-4">Get in touch with our team for any inquiries or support.</p>
                    <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest border border-emerald-500/30 py-1.5 px-4 rounded-full inline-block bg-emerald-500/5">We are here to help you</p>
                </div>
            </section>

            <section className="py-24 bg-gray-950 relative">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* LEFT COLUMN */}
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                                Get In Touch
                            </h2>

                            <div className="space-y-8 mb-12">
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                        <MapPin size={22} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-base mb-2 group-hover:text-emerald-400 transition-colors">Visit Us</h5>
                                        <p className="text-sm text-gray-400 leading-relaxed">{nfData.contact.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                        <Phone size={22} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-base mb-2 group-hover:text-emerald-400 transition-colors">Call Us</h5>
                                        <p className="text-sm text-gray-400">{nfData.contact.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-base mb-2 group-hover:text-emerald-400 transition-colors">Email Us</h5>
                                        <p className="text-sm text-gray-400">{nfData.contact.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5 group">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                                        <Clock size={22} />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-white text-base mb-2 group-hover:text-emerald-400 transition-colors">Opening Hours</h5>
                                        <p className="text-sm text-gray-400">Mon - Fri: {nfData.contact.hoursM_F}</p>
                                        <p className="text-sm text-gray-400">Sat: {nfData.contact.hoursSat}</p>
                                    </div>
                                </div>
                            </div>

                            {/* REGISTRATION BOX */}
                            <div className="border-l-4 border-emerald-500 bg-gray-900/80 p-6 rounded-r-lg mb-12 border-y border-r border-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none"></div>
                                <div className="flex items-center gap-3 mb-2 relative z-10">
                                    <ShieldCheck className="text-emerald-500" size={20} />
                                    <span className="font-bold text-white text-sm tracking-wide">Company Registration</span>
                                </div>
                                <p className="text-xs text-gray-400 relative z-10">
                                    NF Plantation is a government registered investment company.<br />
                                    <span className="text-emerald-400 mt-1 block font-mono">Registration No: 00303425</span>
                                </p>
                            </div>

                            {/* MAP PLACEHOLDER */}
                            <div className="w-full h-72 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
                                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-sm z-10 flex-col gap-2">
                                    <MapPin size={32} className="opacity-50 text-emerald-500" />
                                    <span>Interactive Map Location</span>
                                </div>
                                {/* Simple overlay to simulate map look */}
                                <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
                                <div className="absolute inset-0 bg-gray-900/80 hover:bg-gray-900/60 transition-colors duration-500 cursor-pointer"></div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - FORM */}
                        <div className="lg:pl-8">
                            <ContactFormCard />

                            <div className="flex items-center gap-4 mt-10">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-blue-900/20 text-sm border border-blue-500/50">
                                    Call Now
                                </button>
                                <Link to="/company/nf-plantation/investment-plans" className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] border border-emerald-500/50 text-center text-sm flex items-center justify-center gap-2">
                                    View Plans <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <NFFooter />
        </div>
    );
};

export default Contact;
