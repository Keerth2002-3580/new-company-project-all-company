import React from 'react';
import NFNavbar from '../../components/nf/NFNavbar';
import NFHero from '../../components/nf/NFHero';
import NFServices from '../../components/nf/NFServices';
import NFCommunityImpact from '../../components/nf/NFCommunityImpact';
import NFContact from '../../components/nf/NFContact';
import NFFooter from '../../components/nf/NFFooter';

const NaturalFarming = () => {
    return (
        <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
            <NFNavbar />
            <main>
                <NFHero />
                <NFServices />
                <NFCommunityImpact />
                <NFContact />
            </main>
            <NFFooter />
        </div>
    );
};

export default NaturalFarming;
