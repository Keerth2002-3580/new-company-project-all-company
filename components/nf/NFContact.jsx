import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const NFContact = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl font-bold text-gray-800 mb-2">Contact Us</h2>
                    <p className="text-gray-500 text-sm">Connect with us for further negotiations, seed planted locations, or partnership opportunities.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Left Info */}
                    <div className="space-y-8 pr-8">
                        <h3 className="font-serif text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2 inline-block">Get in Touch</h3>

                        <div className="space-y-6 text-sm">
                            <div className="flex items-start gap-4">
                                <Mail className="text-green-700 mt-1 shrink-0" size={18} />
                                <div>
                                    <span className="block font-bold text-gray-900 mb-1">Email</span>
                                    <p className="text-gray-500">farmers@naturalplantation.com</p>
                                    <p className="text-gray-500">store@naturalplantation.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="text-green-700 mt-1 shrink-0" size={18} />
                                <div>
                                    <span className="block font-bold text-gray-900 mb-1">Phone</span>
                                    <p className="text-gray-500">+ 94 77 123 4567</p>
                                    <p className="text-gray-500">+ 94 11 234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin className="text-green-700 mt-1 shrink-0" size={18} />
                                <div>
                                    <span className="block font-bold text-gray-900 mb-1">Address</span>
                                    <p className="text-gray-500 leading-relaxed">
                                        Natural Plantation, Head Office<br />
                                        Kuruduwatta Junction,<br />
                                        Battaramulla 10120
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="text-green-700 mt-1 shrink-0" size={18} />
                                <div>
                                    <span className="block font-bold text-gray-900 mb-1">Business Hours</span>
                                    <p className="text-gray-500">Mondays - Saturday : 8.00 AM - 5.00 PM</p>
                                    <p className="text-gray-500">Sunday: 8.00 AM - 12.00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Service Areas</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                                <span>Farmer Support</span>
                                <span>Loan Platform</span>
                                <span>Membership Services</span>
                                <span>Demand Management</span>
                                <span>Market Analytics</span>
                                <span>Community Building</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div>
                        <h3 className="font-serif text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2 inline-block">Send us a Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-1">First Name</label>
                                    <input type="text" className="w-full bg-[#f8f9fa] border-none p-3 rounded text-sm focus:ring-1 focus:ring-green-500" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-400 mb-1">Last Name</label>
                                    <input type="text" className="w-full bg-[#f8f9fa] border-none p-3 rounded text-sm focus:ring-1 focus:ring-green-500" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 mb-1">Email Address</label>
                                <input type="email" className="w-full bg-[#f8f9fa] border-none p-3 rounded text-sm focus:ring-1 focus:ring-green-500" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 mb-1">Phone Number</label>
                                <input type="tel" className="w-full bg-[#f8f9fa] border-none p-3 rounded text-sm focus:ring-1 focus:ring-green-500" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 mb-1">Subject</label>
                                <input type="text" className="w-full bg-[#f8f9fa] border-none p-3 rounded text-sm focus:ring-1 focus:ring-green-500" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-gray-400 mb-1">Your Message</label>
                                <textarea rows="3" className="w-full bg-[#f8f9fa] border-none p-3 rounded text-sm focus:ring-1 focus:ring-green-500"></textarea>
                            </div>

                            <button className="w-full bg-[#5D8949] text-white font-bold text-xs uppercase tracking-wider py-4 rounded hover:bg-[#4a6e3a] transition-colors shadow-lg shadow-green-900/10">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NFContact;
