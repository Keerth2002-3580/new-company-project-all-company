import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ theme, brandName, links, ctaText = "Get Started" }) => {
    return (
        <nav className={`padding-y-4 shadow-sm ${theme}`}>
            <div className="container flex justify-between items-center" style={{ height: '80px' }}>
                <div className="logo text-2xl font-bold flex items-center gap-2">
                    {/* Simple Logo Placeholder */}
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">NF</div>
                    <span className="text-primary">{brandName}</span>
                </div>

                <div className="hidden md:flex gap-8 items-center font-medium">
                    {links.map((link, idx) => (
                        <Link key={idx} to={link.path} className="hover:text-primary">{link.label}</Link>
                    ))}
                </div>

                <div className="hidden md:block">
                    <button className="btn bg-primary text-white">{ctaText}</button>
                </div>

                <button className="md:hidden text-2xl">
                    <FaBars />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
