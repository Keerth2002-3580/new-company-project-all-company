import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, Globe } from 'lucide-react';

const NFHeader = () => {
    const location = useLocation();
    const { t, language, setLanguage } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);
    const langMenuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const links = [
        { name: t('nfPlantation.header.links.home'), path: '/company/nf-plantation' },
        { name: t('nfPlantation.header.links.about'), path: '/company/nf-plantation/about' },
        { name: t('nfPlantation.header.links.services'), path: '/company/nf-plantation/services' },
        { name: t('nfPlantation.header.links.plans'), path: '/company/nf-plantation/investment-plans' },
        { name: t('nfPlantation.header.links.contact'), path: '/company/nf-plantation/contact' },
    ];

    const getLangLabel = (code) => {
        switch (code || language) {
            case 'ta': return 'தமிழ்';
            case 'si': return 'සිංහල';
            default: return 'English';
        }
    };

    const handleLanguageChange = (langCode) => {
        setLanguage(langCode);
        setIsLangOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5 py-4">
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center h-10 relative z-10">
                {/* Logo */}
                <Link to="/company/nf-plantation" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center p-0.5 overflow-hidden bg-gray-900 group-hover:border-emerald-500/60 transition-colors">
                        <div className="w-full h-full bg-gray-950 relative flex items-center justify-center text-emerald-500 font-bold text-xs">
                            NF
                        </div>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-white font-bold text-lg tracking-tight group-hover:text-emerald-400 transition-colors">{t('nfPlantation.header.brand')}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{t('nfPlantation.header.subtitle')}</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="relative" ref={langMenuRef}>
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="flex items-center gap-1 text-xs font-semibold text-gray-400 cursor-pointer hover:text-emerald-400 transition-colors focus:outline-none"
                        >
                            <Globe size={14} /> {getLangLabel()} <ChevronDown size={12} className={`transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isLangOpen && (
                            <div className="absolute top-full right-0 mt-2 w-32 bg-gray-900 rounded-lg shadow-xl border border-gray-700 py-1 flex flex-col z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                                <button onClick={() => handleLanguageChange('en')} className={`px-4 py-2 text-left text-xs font-medium transition-colors ${language === 'en' ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                                    English
                                </button>
                                <button onClick={() => handleLanguageChange('ta')} className={`px-4 py-2 text-left text-xs font-medium transition-colors ${language === 'ta' ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                                    தமிழ்
                                </button>
                                <button onClick={() => handleLanguageChange('si')} className={`px-4 py-2 text-left text-xs font-medium transition-colors ${language === 'si' ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                                    සිංහල
                                </button>
                            </div>
                        )}
                    </div>

                    <Link to="/company/nf-plantation/login" className="text-xs font-bold text-gray-300 hover:text-emerald-400 transition-colors">
                        {t('nfPlantation.header.login')}
                    </Link>
                    <Link to="/company/nf-plantation/register" className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-500/50">
                        {t('nfPlantation.header.register')}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NFHeader;
