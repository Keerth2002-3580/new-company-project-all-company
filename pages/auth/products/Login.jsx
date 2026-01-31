import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

const ProductsLogin = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative bg-[#FDFBF7]">
            {/* Split Layout */}
            <div className="flex w-full h-screen overflow-hidden">
                {/* Left Side - Image */}
                <div className="hidden lg:block w-1/2 relative">
                    <img
                        src="https://images.unsplash.com/photo-1544367563-12123d8c3647?q=80&w=2070&auto=format&fit=crop"
                        alt="Natural Products"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-900/30 mix-blend-multiply"></div>
                    <div className="absolute bottom-20 left-12 text-white max-w-md">
                        <h2 className="text-4xl font-serif font-bold mb-4">Pure. Organic. Natural.</h2>
                        <p className="text-lg opacity-90">Experience the healing power of nature with our premium collection of organic products.</p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 bg-[#FDFBF7]">
                    <div className="w-full max-w-md">
                        <Link to="/company/natural-products" className="inline-flex items-center text-green-800 hover:text-green-600 mb-10 gap-2 text-sm font-medium transition-colors">
                            <ArrowLeft size={16} /> Back to Shop
                        </Link>

                        <div className="mb-10 text-center lg:text-left">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 lg:mx-0 mx-auto text-green-800">
                                <Leaf size={24} />
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3">Welcome Back</h1>
                            <p className="text-gray-500">Please enter your details to sign in</p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 pl-11 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-sm"
                                        placeholder="name@example.com"
                                    />
                                    <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Password</label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 pl-11 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-sm"
                                        placeholder="••••••••"
                                    />
                                    <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-gray-900">
                                    <input type="checkbox" className="rounded border-gray-300 text-green-700 focus:ring-green-500" />
                                    <span>Remember for 30 days</span>
                                </label>
                                <a href="#" className="font-semibold text-green-700 hover:text-green-800">Forgot password?</a>
                            </div>

                            <button className="w-full bg-[#3A5A40] hover:bg-[#2C4430] text-white font-bold py-4 rounded-lg shadow-lg shadow-green-900/10 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                Sign In <ArrowRight size={18} />
                            </button>

                            <button className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                Sign in with Google
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-500">
                            Don't have an account? <Link to="/company/natural-products/register" className="text-green-800 font-bold hover:underline">Sign up for free</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsLogin;
