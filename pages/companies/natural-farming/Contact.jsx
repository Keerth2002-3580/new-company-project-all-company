import React from 'react';
import NFNavbar from '../../../components/nf/NFNavbar';
import NFContactComponent from '../../../components/nf/NFContact';
import NFFooter from '../../../components/nf/NFFooter';

const Contact = () => {
    return (
        <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
            <NFNavbar />
            <main className="flex-grow">
                <NFContactComponent />
            </main>
            <NFFooter />
        </div>
    );
};

export default Contact;
