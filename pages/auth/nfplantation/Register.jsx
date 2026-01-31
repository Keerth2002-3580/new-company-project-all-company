import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, User, Mail, Lock, ArrowRight, ArrowLeft, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

const PlantationRegister = () => {
    const { language, setLanguage, t } = useLanguage();
    const [showLangMenu, setShowLangMenu] = useState(false);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ta', label: 'தமிழ் (Tamil)' },
        { code: 'si', label: 'සිංහල (Sinhala)' }
    ];

    return (
        <div className="min-h-screen relative flex items-center justify-center overflow-hidden font-sans bg-gray-900">
            {/* Background Image - Subtle Scale only */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/auth-background.png"
                    alt="Plantation Background"
                    className="w-full h-full object-cover opacity-60 animate-subtle-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-emerald-950/80 via-black/50 to-emerald-900/40" />
            </div>



            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl mx-4 shadow-2xl rounded-[30px] overflow-hidden flex flex-col md:flex-row-reverse animate-content-enter h-[85vh] md:h-auto">

                {/* Visual Side (Right) - Glass Effect */}
                <div className="hidden md:flex flex-col justify-between p-12 w-5/12 bg-white/5 backdrop-blur-xl border-l border-white/5 text-white relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                    <div className="flex justify-end">
                        <Link to="/company/nf-plantation" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest w-fit">
                            {t('home')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="relative z-10 my-auto">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00c853] to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/40 mb-8">
                            <Leaf size={32} className="text-white" />
                        </div>
                        <h1 className="text-4xl font-bold mb-4 leading-tight tracking-tight">
                            {t('heroRegister.line1')}<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c853] to-emerald-300">{t('heroRegister.line2')}</span>
                        </h1>
                        <p className="text-emerald-100/70 text-sm leading-relaxed mb-8">
                            {t('heroRegister.subtitle')}
                        </p>

                        <div className="flex gap-4">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-emerald-900 bg-gray-200 overflow-hidden">
                                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="font-bold text-white text-sm">4.9/5 Rating</span>
                                <span className="text-[10px] text-emerald-200">{t('heroRegister.rating')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-[10px] text-white/30 font-medium">
                        © 2026 NF GROUP OF COMPANIES
                    </div>
                </div>

                {/* Form Side (Left) - White */}
                <div className="w-full md:w-7/12 bg-white flex flex-col relative overflow-hidden">
                    <div className="flex-1 overflow-y-auto p-10 md:p-16 custom-scrollbar">
                        <div className="max-w-md mx-auto w-full">
                            <div className="mb-8 text-center md:text-left">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('createAccount')}</h2>
                                <p className="text-gray-500">{t('freeAccess')}</p>
                            </div>

                            <form className="space-y-5" onSubmit={(e) => {
                                e.preventDefault();
                                alert(t('createAccount') + " " + "SUCCESS!");
                            }}>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('fullName')}</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#00c853] transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c853]/50 focus:border-[#00c853] transition-all duration-200 ease-in-out"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('email')}</label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#00c853] transition-colors" />
                                        </div>
                                        <input
                                            type="email"
                                            className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c853]/50 focus:border-[#00c853] transition-all duration-200 ease-in-out"
                                            placeholder="you@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('password')}</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#00c853] transition-colors" />
                                            </div>
                                            <input
                                                type="password"
                                                className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c853]/50 focus:border-[#00c853] transition-all duration-200 ease-in-out"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('confirmPassword')}</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#00c853] transition-colors" />
                                            </div>
                                            <input
                                                type="password"
                                                className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c853]/50 focus:border-[#00c853] transition-all duration-200 ease-in-out"
                                                placeholder="••••••••"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3 mt-2">
                                    <div className="relative flex items-center mt-0.5">
                                        <input type="checkbox" className="peer sr-only" required />
                                        <div className="w-5 h-5 border-2 border-gray-300 rounded peer-checked:bg-[#00c853] peer-checked:border-[#00c853] transition-colors"></div>
                                        <svg className="absolute w-3 h-3 text-white left-1 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="text-xs text-gray-500 leading-relaxed">
                                        {t('terms')}
                                    </span>
                                </div>

                                <button type="submit" className="w-full bg-[#00c853] hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(0,200,83,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(0,200,83,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4">
                                    {t('getStarted')} <ArrowRight size={18} />
                                </button>
                            </form>

                            <div className="mt-8 text-center">
                                <p className="text-gray-500 text-sm">
                                    {t('alreadyAccount')} <Link to="/company/nf-plantation/login" className="font-bold text-[#00c853] hover:underline">{t('signIn')}</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes subtle-scale {
                    0% { transform: scale(1); }
                    100% { transform: scale(1.05); }
                }
                 @keyframes content-enter {
                    0% { opacity: 0; transform: translateY(20px) scale(0.98); }
                    100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .animate-subtle-scale {
                     animation: subtle-scale 20s infinite alternate ease-in-out;
                }
                .animate-content-enter {
                     animation: content-enter 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                 @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                 .animate-fade-in-up {
                     animation: fade-in-up 0.2s ease-out forwards;
                }
                /* Custom Scrollbar for form area */
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(0,0,0,0.1);
                    border-radius: 20px;
                }
            `}</style>
        </div>
    );
};

export default PlantationRegister;
