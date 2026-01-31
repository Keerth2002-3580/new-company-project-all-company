import React from 'react';

const NPNewsletter = () => {
    return (
        <section className="py-24 bg-[#558B2F]">
            <div className="container mx-auto px-6 lg:px-12 text-center text-white">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Stay Connected with Nature</h2>
                <p className="text-green-100 text-sm max-w-xl mx-auto mb-10 leading-relaxed font-light">
                    Subscribe to our newsletter for the latest updates on new organic products, special offers, sustainable living tips, and exclusive deals from NP Plantation.
                </p>

                <div className="flex justify-center max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-3 rounded-l text-sm text-gray-700 focus:outline-none"
                    />
                    <button className="bg-[#FF5252] hover:bg-[#FF1744] text-white text-sm font-bold px-6 rounded-r shadow-lg transition-colors">
                        Subscribe
                    </button>
                </div>
                <p className="text-[10px] text-green-200 mt-6 max-w-lg mx-auto opacity-70">
                    By subscribing, you agree to our Privacy Policy and Terms of Service. We respect your privacy and never share your information.
                </p>
            </div>
        </section>
    );
};

export default NPNewsletter;
