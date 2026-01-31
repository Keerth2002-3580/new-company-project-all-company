import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

const FarmingLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative bg-gray-900">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop"
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
                        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                        <p className="text-emerald-100/80 text-sm">Sign in to manage your harvest</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
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

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-emerald-100 uppercase tracking-wider">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pl-11 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                />
                                <Lock className="absolute left-3 top-3.5 text-emerald-200" size={18} />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-emerald-100">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-white/30 bg-white/10 text-emerald-500 focus:ring-emerald-500" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" className="hover:text-white underline decoration-emerald-400 decoration-2 underline-offset-4">Forgot Password?</a>
                        </div>

                        <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                            Sign In <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-emerald-100/80">
                        Don't have an account? <Link to="/company/natural-farming/register" className="text-white font-bold hover:underline">Start Farming</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FarmingLogin;
