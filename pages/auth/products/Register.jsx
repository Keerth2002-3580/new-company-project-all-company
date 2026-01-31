import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, User, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';

const ProductsRegister = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative bg-[#FDFBF7]">
            {/* Split Layout */}
            <div className="flex w-full h-screen overflow-hidden">
                {/* Right Side - Form (Swapped for variety) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-16 bg-[#FDFBF7] order-2 lg:order-1">
                    <div className="w-full max-w-md">
                        <Link to="/company/natural-products" className="inline-flex items-center text-green-800 hover:text-green-600 mb-10 gap-2 text-sm font-medium transition-colors">
                            <ArrowLeft size={16} /> Back to Shop
                        </Link>

                        <div className="mb-8 text-center lg:text-left">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 lg:mx-0 mx-auto text-green-800">
                                <Leaf size={24} />
                            </div>
                            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-3">Create an Account</h1>
                            <p className="text-gray-500">Join our community of natural living enthusiasts.</p>
                        </div>

                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 pl-11 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all shadow-sm"
                                        placeholder="Jane Doe"
                                    />
                                    <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                                </div>
                            </div>

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

                            <div className="text-xs text-gray-500 leading-relaxed">
                                By creating an account, you agree to our <a href="#" className="underline text-green-700">Terms of Service</a> and <a href="#" className="underline text-green-700">Privacy Policy</a>.
                            </div>

                            <button className="w-full bg-[#3A5A40] hover:bg-[#2C4430] text-white font-bold py-4 rounded-lg shadow-lg shadow-green-900/10 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-2">
                                Create Account <ArrowRight size={18} />
                            </button>

                            <button className="w-full bg-white border border-gray-200 text-gray-700 font-bold py-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                                Sign up with Google
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-500">
                            Already have an account? <Link to="/company/natural-products/login" className="text-green-800 font-bold hover:underline">Log in</Link>
                        </p>
                    </div>
                </div>

                {/* Left Side - Image */}
                <div className="hidden lg:block w-1/2 relative order-1 lg:order-2">
                    <img
                        src="https://images.unsplash.com/photo-1615486511262-c7b5c7f4297e?q=80&w=1974&auto=format&fit=crop"
                        alt="Natural Products"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-green-900/20 mix-blend-multiply"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductsRegister;
