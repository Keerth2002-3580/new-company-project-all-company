import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ theme }) => {
    return (
        <footer className={`${theme} bg-gray-900 text-white section pb-8`}>
            <div className="container grid grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">NF Holdings</h3>
                    <p className="text-gray-400 text-sm">
                        Building tomorrow's enterprise through sustainable agriculture, innovative finance, and natural healthcare.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Services</h4>
                    <ul className="text-gray-400 text-sm space-y-2">
                        <li><a href="#">Natural Farming</a></li>
                        <li><a href="#">Finance Solutions</a></li>
                        <li><a href="#">Natural Plantation</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold mb-4">Connect</h4>
                    <div className="flex gap-4 text-xl">
                        <FaFacebook className="cursor-pointer hover:text-primary" />
                        <FaTwitter className="cursor-pointer hover:text-primary" />
                        <FaLinkedin className="cursor-pointer hover:text-primary" />
                        <FaInstagram className="cursor-pointer hover:text-primary" />
                    </div>
                </div>
            </div>
            <div className="container mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                &copy; 2026 NF Holdings. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
