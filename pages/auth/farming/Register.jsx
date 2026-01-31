import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, User, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

const FarmingRegister = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative bg-gray-900">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1625246333195-09d9b630dc0a?q=80&w=2074&auto=format&fit=crop"
                    alt="Farming Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-emerald-900/60 backdrop-blur-sm"></div>
            </div>

            <div className="relative z-10 w-full max-w-md p-6">
                <Link to="/company/natural-farming" className="inline-flex items-center text-white/80 hover:text-white mb-6 gap-2 text-sm font-semibold transition-colors">
                    <ArrowLeft size={16} /> Back to Farm
                </Link>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/20">
                            <Sprout size={32} className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Join Our Community</h2>
                        <p className="text-emerald-100/80 text-sm">Start your sustainable journey today</p>
                    </div>

                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Full Name</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-11 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                                    placeholder="John Appleseed"
                                />
                                <User className="absolute left-3 top-3.5 text-emerald-200" size={18} />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-11 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                                    placeholder="farmer@nature.com"
                                />
                                <Mail className="absolute left-3 top-3.5 text-emerald-200" size={18} />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-11 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                                    placeholder="Create a password"
                                />
                                <Lock className="absolute left-3 top-3.5 text-emerald-200" size={18} />
                            </div>
                        </div>

                        <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group mt-4">
                            Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-emerald-100/80">
                        Already have an account? <Link to="/company/natural-farming/login" className="text-white font-bold hover:underline">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmingRegister;
