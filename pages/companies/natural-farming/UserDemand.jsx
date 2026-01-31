import React from 'react';
import NFNavbar from '../../../components/nf/NFNavbar';
import NFFooter from '../../../components/nf/NFFooter';

const UserDemand = () => {
    return (
        <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
            <NFNavbar />
            <main className="flex-grow container mx-auto px-6 lg:px-12 py-12">
                <h1 className="text-4xl font-serif text-green-800 mb-6 text-center">User Demand</h1>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                    Tell us what you need. We are here to fulfill your agricultural requirements.
                </p>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="p-12 bg-gray-50 rounded-xl border border-dashed border-gray-300 text-center">
                        <p className="text-gray-500 italic">User demand form coming soon...</p>
                    </div>
                </div>
            </main>
            <NFFooter />
        </div>
    );
};

export default UserDemand;
