import React from 'react';
import { Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const NFNavbar = () => {
    return (
        <nav className="bg-white py-4 border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link to="/company/natural-farming" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-full border border-red-500 overflow-hidden flex items-center justify-center p-1">
                        <Sprout className="text-red-500 w-5 h-5" />
                    </div>
                    <span className="font-bold text-gray-800 text-lg">NF Farming</span>
                </Link>

                {/* Links */}
                <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
                    <Link to="/company/natural-farming" className="text-gray-900 font-semibold hover:text-green-700">Home</Link>
                    <Link to="/company/natural-farming/partners" className="hover:text-green-700">Partners</Link>
                    <Link to="/company/natural-farming/membership" className="hover:text-green-700">Membership</Link>
                    <Link to="/company/natural-farming/user-demand" className="hover:text-green-700">User Demand</Link>
                    <Link to="/company/natural-farming/contact" className="hover:text-green-700">Contact</Link>
                </div>

                {/* Auth Button */}
                <Link to="/company/natural-farming/login" className="bg-[#2E7D32] hover:bg-green-800 text-white px-6 py-2 rounded-full font-bold text-sm transition-colors shadow-md shadow-green-200">
                    Log In
                </Link>
            </div>
        </nav>
    );
};

export default NFNavbar;
