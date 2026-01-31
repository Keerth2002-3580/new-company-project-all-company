import React from 'react';
import NPNavbar from '../../components/np/NPNavbar';
import NPHero from '../../components/np/NPHero';
import NPPromotions from '../../components/np/NPPromotions';
import NPFavorites from '../../components/np/NPFavorites';
import NPRootedSection from '../../components/np/NPRootedSection';
import NPTestimonials from '../../components/np/NPTestimonials';
import NPNewsletter from '../../components/np/NPNewsletter';
import NPFooter from '../../components/np/NPFooter';

const NaturalProducts = () => {
    return (
        <div className="font-sans antialiased text-gray-800 bg-white min-h-screen flex flex-col">
            <NPNavbar />
            <main>
                <NPHero />
                <NPPromotions />
                <NPFavorites />
                <NPRootedSection />
                <NPTestimonials />
                <NPNewsletter />
            </main>
            <NPFooter />
        </div>
    );
};

export default NaturalProducts;
