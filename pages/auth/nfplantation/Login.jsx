import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Lock, ArrowRight, ArrowLeft, Eye, EyeOff, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../../context/LanguageContext';

const PlantationLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
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
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/80 via-black/50 to-emerald-900/40" />
            </div>



            {/* Main Card */}
            <div className="relative z-10 w-full max-w-5xl mx-4 shadow-2xl rounded-[30px] overflow-hidden flex flex-col md:flex-row animate-content-enter">

                {/* Visual Side (Left) - Glass Effect */}
                <div className="hidden md:flex flex-col justify-between p-12 w-5/12 bg-white/5 backdrop-blur-xl border-r border-white/5 text-white relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                    <Link to="/company/nf-plantation" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest w-fit">
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> {t('back')}
                    </Link>

                    <div className="relative z-10 my-auto">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00c853] to-emerald-700 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-900/40 mb-8">
                            <Leaf size={32} className="text-white" />
                        </div>
                        <h1 className={`font-bold mb-4 leading-tight tracking-tight ${language === 'ta' || language === 'si' ? 'text-3xl lg:text-4xl' : 'text-4xl lg:text-5xl'}`}>
                            {t('heroLogin.line1')}<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c853] to-emerald-300">{t('heroLogin.line2')}</span><br /> {t('heroLogin.line3')}
                        </h1>
                        <p className="text-emerald-100/70 text-sm leading-relaxed max-w-xs">
                            {t('heroLogin.subtitle')}
                        </p>
                    </div>

                    <div className="text-[10px] text-white/30 font-medium">
                        {t('heroLogin.secure')}
                    </div>
                </div>

                {/* Form Side (Right) - White */}
                <div className="w-full md:w-7/12 bg-white p-10 md:p-16 flex flex-col justify-center relative">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-10 text-center md:text-left">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{t('welcomeBack')}</h2>
                            <p className="text-gray-500">{t('enterDetails')}</p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => {
                            e.preventDefault();
                            alert(t('signIn') + " " + "Successfully!");
                            // In a real app, you would handle authentication here
                        }}>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('email')}</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#00c853] transition-colors" />
                                    </div>
                                    <input
                                        type="email"
                                        className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c853]/50 focus:border-[#00c853] transition-all duration-200 ease-in-out"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('password')}</label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-[#00c853] transition-colors" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="block w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c853]/50 focus:border-[#00c853] transition-all duration-200 ease-in-out"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <div className="w-4 h-4 border-2 border-gray-300 rounded group-hover:border-[#00c853] transition-colors flex items-center justify-center shrink-0">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="w-2.5 h-2.5 bg-[#00c853] rounded-sm opacity-0 peer-checked:opacity-100 transition-opacity" />
                                    </div>
                                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors whitespace-nowrap">{t('rememberMe')}</span>
                                </label>
                                <a href="#" className="text-sm font-semibold text-[#00c853] hover:text-green-700 transition-colors whitespace-nowrap">{t('forgotPassword')}</a>
                            </div>

                            <button type="submit" className="w-full bg-[#00c853] hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(0,200,83,0.4)] hover:shadow-[0_20px_25px_-5px_rgba(0,200,83,0.3)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                                {t('signIn')} <ArrowRight size={18} />
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-gray-500 text-sm">
                                {t('dontHaveAccount')} <Link to="/company/nf-plantation/register" className="font-bold text-[#00c853] hover:underline">{t('registerNow')}</Link>
                            </p>
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
            `}</style>
        </div>
    );
};

export default PlantationLogin;
