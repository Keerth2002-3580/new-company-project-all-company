import React from 'react';
import { Search, ShoppingCart, Heart, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const NPNavbar = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-white shadow-sm h-16 flex items-center">
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center p-1.5">
                        <Leaf className="text-white w-full h-full" fill="white" />
                    </div>
                    <span className="font-serif font-bold text-gray-800 text-lg">Natural Plantation</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-gray-500">
                    <a href="#" className="hover:text-green-600 transition-colors">Home</a>
                    <a href="#" className="hover:text-green-600 transition-colors">About</a>
                    <a href="#" className="hover:text-green-600 transition-colors">Shop</a>
                    <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4">
                    <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600" />
                    <Heart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600" />
                    <ShoppingCart className="w-5 h-5 text-gray-600 cursor-pointer hover:text-green-600" />
                    <Link to="/company/natural-products/login" className="bg-[#00BFA5] hover:bg-[#008f7a] text-white px-5 py-1.5 rounded text-sm font-bold shadow transition-colors">
                        Log In
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NPNavbar;
