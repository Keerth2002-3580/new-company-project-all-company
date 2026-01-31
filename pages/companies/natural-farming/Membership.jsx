import React from 'react';
import NFNavbar from '../../../components/nf/NFNavbar';
import NFFooter from '../../../components/nf/NFFooter';

const Membership = () => {
    return (
        <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
            <NFNavbar />
            <main className="flex-grow container mx-auto px-6 lg:px-12 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-serif text-green-800 mb-6">Membership Plans</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Join our community and get exclusive benefits for sustainable farming resources.
                    </p>
                    <div className="p-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500 italic">Membership plans coming soon...</p>
                    </div>
                </div>
            </main>
            <NFFooter />
        </div>
    );
};

export default Membership;
