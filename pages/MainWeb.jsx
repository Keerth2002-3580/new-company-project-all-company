import React, { useState, useEffect, useRef } from 'react';
import {
    Search, Play, Leaf, Briefcase, Sprout, TrendingUp, Users,
    MapPin, Award, ArrowRight, Phone, Mail, Clock,
    Facebook, Twitter, Linkedin, Instagram, ArrowUp, Globe, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import InteractiveBackground from '../components/InteractiveBackground';

// Utility Hook for Intersection Observer (Scroll Reveal)
const useReveal = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold });

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return [ref, isVisible];
};

// Counter Component
const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [ref, isVisible] = useReveal(0.5);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return <span ref={ref}>{Intl.NumberFormat().format(count)}</span>;
};

// Main Component
const MainWeb = () => {
    // 0. Language Context
    const { language, setLanguage, t } = useLanguage();
    const languages = [
        { code: 'en', label: 'English' },
        { code: 'ta', label: 'தமிழ் (Tamil)' },
        { code: 'si', label: 'සිංහල (Sinhala)' }
    ];

    // 1. Navbar Scroll State
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 2. Load Animations
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    // Scroll To Top
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <div className="font-sans text-gray-800 bg-white overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900 relative">
            <InteractiveBackground />

            {/* 1. NAVBAR */}
            <nav className={`sticky top-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-100 py-3' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 group cursor-pointer" onClick={scrollToTop}>
                        <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-emerald-500/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                            NF
                        </div>
                        <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                            NF Group of Companies
                        </span>
                    </div>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
                        {['home', 'about', 'services', 'news', 'contact'].map((item) => (
                            <a
                                key={item}
                                href={item === 'home' ? '/home' : `#${item}`}
                                className={`nav-link hover:text-emerald-600 transition-colors ${item === 'home' ? 'text-emerald-600' : ''}`}
                            >
                                {t(item)}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        {/* Language Switcher - Native Select for Reliability */}
                        <div className="relative group hidden md:block">
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold uppercase transition-all ${scrolled ? 'bg-gray-100 border-gray-200 text-gray-600' : 'bg-white/20 border-white/30 text-emerald-900'}`}>
                                <Globe size={14} />
                                <span>{languages.find(l => l.code === language)?.label.split(' ')[0]}</span>
                                <ChevronDown size={12} />
                            </div>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer appearance-none z-20"
                            >
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code} className="text-gray-900 bg-white">
                                        {lang.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                placeholder={t('nav.searchPlaceholder')}
                                className="pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm bg-gray-50/50 focus:bg-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-32 md:w-56 transition-all duration-300 placeholder:text-gray-400 shadow-sm"
                            />
                            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 group-hover:text-emerald-600 transition-colors duration-300" />
                        </div>
                    </div>
                </div>
            </nav>

            {/* 2. HERO SECTION */}
            <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden">
                {/* Background Image with Parallax & Zoom Effect */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                        src="/images/main-hero.png"
                        alt="Farm Field"
                        className={`w-full h-full object-cover transform transition-transform duration-[3s] ease-out ${loaded ? 'scale-100' : 'scale-110'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-10">
                    <div className="w-full max-w-3xl">
                        {/* Pill Badge */}
                        <div className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8 transform transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-emerald-100 text-xs font-semibold tracking-wide uppercase">{t('heroMain.pill')}</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8">
                            <div className="overflow-hidden">
                                <span className={`block transform transition-transform duration-1000 delay-100 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                                    {t('heroMain.line1')}
                                </span>
                            </div>
                            <div className="overflow-hidden">
                                <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 transform transition-transform duration-1000 delay-200 ${loaded ? 'translate-y-0' : 'translate-y-full'}`}>
                                    {t('heroMain.line2')}
                                </span>
                            </div>
                        </h1>

                        {/* Paragraph */}
                        <p className={`text-lg text-gray-300 leading-relaxed mb-10 max-w-xl transform transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {t('heroMain.subtitle')}
                        </p>

                        {/* Category Pills */}
                        <div className={`flex flex-wrap gap-3 mb-10 transform transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <Link to="/company/natural-farming" className="flex items-center gap-2 bg-emerald-500/20 text-emerald-100 border border-emerald-500/30 px-5 py-2.5 rounded-full text-xs font-bold uppercase backdrop-blur-sm hover:bg-emerald-500/30 transition-all hover:scale-105 active:scale-95">
                                <Leaf size={14} className="text-emerald-400" /> {t('divisions.farming')}
                            </Link>
                            <Link to="/company/finance" className="flex items-center gap-2 bg-blue-500/20 text-blue-100 border border-blue-500/30 px-5 py-2.5 rounded-full text-xs font-bold uppercase backdrop-blur-sm hover:bg-blue-500/30 transition-all hover:scale-105 active:scale-95">
                                <Briefcase size={14} className="text-blue-400" /> {t('divisions.finance')}
                            </Link>
                            <Link to="/company/natural-products" className="flex items-center gap-2 bg-green-500/20 text-green-100 border border-green-500/30 px-5 py-2.5 rounded-full text-xs font-bold uppercase backdrop-blur-sm hover:bg-green-500/30 transition-all hover:scale-105 active:scale-95">
                                <Sprout size={14} className="text-green-400" /> {t('divisions.natural')}
                            </Link>
                        </div>

                        {/* Buttons */}
                        <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold shadow-xl shadow-emerald-900/20 hover:bg-emerald-50 transition-all flex items-center gap-2 hover:scale-105 hover:shadow-2xl active:scale-95">
                                {t('nav.exploreSolutions')}
                            </button>
                            <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all hover:scale-105 active:scale-95">
                                <div className="w-8 h-8 rounded-full bg-white text-emerald-900 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-300">
                                    <Play size={12} fill="currentColor" />
                                </div>
                                {t('nav.watchDemo')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 transition-opacity duration-1000 delay-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-current rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* 3. BUSINESS DIVISIONS */}
            <section className="py-24 bg-white" id="services">
                <div className="container mx-auto px-6 lg:px-12">
                    <FadeInUp>
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-3 block">
                                {t('divisions.title')}
                            </span>
                            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                                {t('divisions.headline')}
                            </h2>
                            <p className="text-gray-500">
                                {t('divisions.subtitle')}
                            </p>
                        </div>
                    </FadeInUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <FadeInUp delay={0.2}>
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="h-64 relative overflow-hidden">
                                    <img src="/images/div-farming.png" alt="Farming" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-emerald-600 shadow-sm group-hover:rotate-12 transition-transform duration-300">
                                        <Leaf size={18} />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <span className="inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-md mb-4 uppercase tracking-wide">
                                        {t('divisions.farming')}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{t('divisions.sustainable')}</h3>
                                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                        {t('divisions.farmingDesc')}
                                    </p>
                                    <Link to="/company/natural-farming" className="w-full block text-center bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-all hover:scale-[1.02] shadow-emerald-200 hover:shadow-lg">
                                        {t('divisions.learnMore')}
                                    </Link>
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Card 2 */}
                        <FadeInUp delay={0.4}>
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="h-64 relative overflow-hidden">
                                    <img src="/images/div-finance.png" alt="Finance" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-blue-600 shadow-sm group-hover:rotate-12 transition-transform duration-300">
                                        <Briefcase size={18} />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-md mb-4 uppercase tracking-wide">
                                        {t('divisions.finance')}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{t('divisions.financial')}</h3>
                                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                        {t('divisions.financeDesc')}
                                    </p>
                                    <Link to="/company/finance" className="w-full block text-center bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-blue-200 hover:shadow-lg">
                                        {t('divisions.learnMore')}
                                    </Link>
                                </div>
                            </div>
                        </FadeInUp>

                        {/* Card 3 */}
                        <FadeInUp delay={0.6}>
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                                <div className="h-64 relative overflow-hidden">
                                    <img src="/images/div-products.png" alt="Plantation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-green-700 shadow-sm group-hover:rotate-12 transition-transform duration-300">
                                        <Sprout size={18} />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-md mb-4 uppercase tracking-wide">
                                        {t('divisions.natural')}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{t('divisions.organic')}</h3>
                                    <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                                        {t('divisions.naturalDesc')}
                                    </p>
                                    <Link to="/company/natural-products" className="w-full block text-center bg-green-700 text-white font-bold py-3 rounded-xl hover:bg-green-800 transition-all hover:scale-[1.02] shadow-green-200 hover:shadow-lg">
                                        {t('divisions.learnMore')}
                                    </Link>
                                </div>
                            </div>
                        </FadeInUp>
                    </div>
                </div>
            </section>

            {/* 4. IMPACT SECTION */}
            <section className="py-24 bg-emerald-50/50 relative overflow-hidden">
                {/* Decor blobs - animate slowly */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDuration: '6s' }}></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <FadeInUp>
                        <div className="text-center mb-16">
                            <span className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-emerald-600 text-xs font-bold uppercase tracking-wider shadow-sm border border-emerald-100 mb-4 hover:scale-105 transition-transform">
                                <TrendingUp size={14} /> {t('impact.pill')}
                            </span>
                            <h2 className="text-4xl font-extrabold text-gray-900">
                                {t('impact.headline')} <span className="text-emerald-600">{t('impact.highlight')}</span>
                            </h2>
                        </div>
                    </FadeInUp>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { icon: <Users size={24} />, val: 1800, suffix: '+', label: t('impact.employees'), color: "bg-emerald-500" },
                            { icon: <MapPin size={24} />, val: 71, suffix: '+', label: t('impact.branches'), color: "bg-blue-500" },
                            { icon: <Award size={24} />, val: 6, suffix: '+', label: t('impact.years'), color: "bg-green-600" },
                            { icon: <Briefcase size={24} />, val: 20, suffix: 'M+', label: t('impact.revenue'), color: "bg-orange-500" },
                        ].map((stat, i) => (
                            <FadeInUp key={i} delay={i * 0.1}>
                                <div className="text-center group cursor-default">
                                    <div className={`w-16 h-16 mx-auto ${stat.color} rounded-2xl rotate-3 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center text-white mb-6 shadow-lg shadow-gray-200`}>
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-4xl font-black text-gray-900 mb-2 flex justify-center items-baseline gap-0.5">
                                        <CountUp end={stat.val} />{stat.suffix}
                                    </h3>
                                    <p className="text-gray-500 font-medium text-sm uppercase tracking-wide group-hover:text-emerald-600 transition-colors">{stat.label}</p>
                                    <div className="w-12 h-1 bg-gray-200 mx-auto mt-4 rounded-full overflow-hidden">
                                        <div className={`h-full ${stat.color} w-1/2 group-hover:w-full transition-all duration-500`}></div>
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TESTIMONIALS */}
            <section className="py-24 bg-white" id="testimonials">
                <div className="container mx-auto px-6 lg:px-12">
                    <FadeInUp>
                        <div className="text-center mb-16">
                            <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase mb-3 block">
                                {t('testimonials.title')}
                            </span>
                            <h2 className="text-4xl font-extrabold text-gray-900">
                                {t('testimonials.headline')}
                            </h2>
                        </div>
                    </FadeInUp>

                    <FadeInUp delay={0.2}>
                        <div className="max-w-4xl mx-auto bg-emerald-50 rounded-[2.5rem] p-12 relative group hover:shadow-xl transition-shadow duration-300">
                            <div className="absolute -top-6 left-12 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-serif shadow-lg group-hover:scale-110 transition-transform">
                                "
                            </div>

                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                                    <img src="https://ui-avatars.com/api/?name=Priya+Patel&background=0D9488&color=fff" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                                        {[1, 2, 3, 4, 5].map(s => <span key={s} className="drop-shadow-sm">★</span>)}
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                                        "{t('testimonials.quote')}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div>
                                            <h4 className="font-bold text-gray-900">Priya Patel</h4>
                                            <p className="text-emerald-600 text-xs font-bold uppercase">{t('testimonials.role')}</p>
                                        </div>
                                        <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-500 border border-gray-100 shadow-sm">Food & Beverage</span>
                                    </div>
                                </div>
                            </div>

                            {/* Dots */}
                            <div className="absolute bottom-6 right-12 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-emerald-200"></div>
                                <div className="w-2 h-2 rounded-full bg-emerald-200"></div>
                            </div>
                            <div className="absolute top-6 right-12 bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Auto-play ON</div>
                        </div>
                    </FadeInUp>
                </div>
            </section>

            {/* 6. NEWS SECTION */}
            <section className="py-24 bg-gray-50" id="news">
                <div className="container mx-auto px-6 lg:px-12">
                    <FadeInUp>
                        <div className="flex justify-between items-end mb-12">
                            <div>
                                <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-3 block">
                                    {t('newsSection.title')}
                                </span>
                                <h2 className="text-3xl font-extrabold text-gray-900">
                                    {t('newsSection.headline')}
                                </h2>
                            </div>
                            <button className="hidden md:flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all hover:text-emerald-700">
                                {t('newsSection.viewAll')} <ArrowRight size={18} />
                            </button>
                        </div>
                    </FadeInUp>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                cat: t('newsSection.cat1'),
                                date: "Jan 15, 2025",
                                title: t('newsSection.title1'),
                                desc: t('newsSection.desc1'),
                                img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
                            },
                            {
                                cat: t('newsSection.cat2'),
                                date: "Jan 10, 2025",
                                title: t('newsSection.title2'),
                                desc: t('newsSection.desc2'),
                                img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                            },
                            {
                                cat: t('newsSection.cat3'),
                                date: "Dec 28, 2024",
                                title: t('newsSection.title3'),
                                desc: t('newsSection.desc3'),
                                img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                            }
                        ].map((item, i) => (
                            <FadeInUp key={i} delay={i * 0.2}>
                                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                    <div className="h-48 relative overflow-hidden">
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-md text-xs font-bold text-gray-800 shadow-sm">
                                            {item.cat}
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 font-medium">
                                            <Clock size={14} /> {item.date}
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                            {item.desc}
                                        </p>
                                        <a href="#" className="inline-flex items-center gap-1 text-emerald-600 text-sm font-bold hover:gap-2 transition-all">
                                            {t('newsSection.readMore')} <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </FadeInUp>
                        ))}
                    </div>

                    <button className="md:hidden w-full mt-8 bg-emerald-600 text-white font-bold py-3 rounded-xl">
                        {t('newsSection.viewAll')}
                    </button>
                </div>
            </section>

            {/* 7. CONTACT / CTA */}
            <section className="py-24 bg-white" id="contact">
                <div className="container mx-auto px-6 lg:px-12">
                    <FadeInUp>
                        <div className="bg-emerald-50 rounded-[3rem] p-8 md:p-12 shadow-inner overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20">

                            {/* Left Content */}
                            <div className="flex-1 lg:py-8">
                                <span className="bg-emerald-200/50 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-8 inline-block">
                                    {t('contactSection.pill')}
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                                    {t('contactSection.headline')} <span className="text-emerald-600">{t('contactSection.highlight')}</span>
                                </h2>
                                <p className="text-gray-600 mb-10 text-lg">
                                    {t('contactSection.subtitle')}
                                </p>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100/50 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">{t('contactSection.emailLabel')}</p>
                                            <p className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">info@nfgroup.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100/50 hover:shadow-md transition-shadow">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase">{t('contactSection.callLabel')}</p>
                                            <p className="font-bold text-gray-900">+94 11 234 5678</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="bg-white/50 rounded-2xl p-6 text-sm">
                                    <h4 className="font-bold text-gray-900 mb-3">{t('contactSection.hours')}</h4>
                                    <div className="flex justify-between text-gray-600 mb-1">
                                        <span>{t('contactSection.weekdays')}</span>
                                        <span className="font-mono font-bold">08:00 AM - 05:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>{t('contactSection.saturday')}</span>
                                        <span className="font-mono font-bold">10:00 AM - 02:00 PM</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Form */}
                            <div className="flex-1 bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-emerald-100/50 border border-gray-100 transform transition-transform hover:scale-[1.01] duration-500">
                                <form className="space-y-5">
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-500 uppercase">{t('contactSection.firstName')}</label>
                                            <input type="text" placeholder="John" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-semibold" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-500 uppercase">{t('contactSection.lastName')}</label>
                                            <input type="text" placeholder="Doe" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-semibold" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Email Address *</label>
                                        <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-semibold" />
                                    </div>

                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-500 uppercase">{t('contactSection.phone')}</label>
                                            <input type="tel" placeholder="+94 7..." className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-semibold" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-500 uppercase">{t('contactSection.company')}</label>
                                            <input type="text" placeholder="Your Company" className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-semibold" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 uppercase">{t('contactSection.service')}</label>
                                        <select className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-semibold text-gray-600">
                                            <option>General Inquiry</option>
                                            <option>Nature Farming</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-500 uppercase">{t('contactSection.message')}</label>
                                        <textarea rows="3" placeholder="Tell us about your project..." className="w-full bg-gray-50 border border-gray-100 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all font-semibold resize-none"></textarea>
                                    </div>

                                    <button className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-xl transition-all transform hover:-translate-y-1 active:translate-y-0">
                                        {t('contactSection.send')}
                                    </button>
                                    <p className="text-center text-xs text-gray-400">{t('contactSection.response')}</p>
                                </form>
                            </div>
                        </div>
                    </FadeInUp>
                </div>
            </section>

            {/* 8. FOOTER */}
            <footer className="bg-gray-900 text-white py-16 border-t border-gray-800 text-sm">
                <div className="container mx-auto px-6 lg:px-12">
                    <FadeInUp>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                            {/* Brand Col */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">NF</div>
                                    <span className="text-xl font-bold">NF Group of Companies</span>
                                </div>
                                <p className="text-gray-400 mb-8 max-w-sm leading-relaxed">
                                    {t('footer.desc')}
                                </p>
                                <div className="space-y-3 text-gray-400">
                                    <p className="flex items-center gap-3"><Mail size={16} className="text-emerald-500" /> info@nfgroup.com</p>
                                    <p className="flex items-center gap-3"><Phone size={16} className="text-emerald-500" /> +94 11 234 5678</p>
                                    <p className="flex items-center gap-3"><MapPin size={16} className="text-emerald-500" /> Colombo, Sri Lanka</p>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                        <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300">
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Links Cols */}
                            <div>
                                <h4 className="font-bold mb-6 text-emerald-500">{t('footer.company')}</h4>
                                <ul className="space-y-4 text-gray-400">
                                    {['About Us', 'Our Team', 'Careers', 'News & Press'].map((item, i) => (
                                        <li key={i}><a href="#" className="hover:text-white transition-colors">{t(`footer.companyList.${i}`)}</a></li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-6 text-emerald-500">{t('footer.services')}</h4>
                                <ul className="space-y-4 text-gray-400">
                                    {['NF Farming', 'NF Plantation (Finance)', 'Natural Plantation', 'Consulting'].map((item, i) => (
                                        <li key={i}><a href="#" className="hover:text-white transition-colors">{t(`footer.servicesList.${i}`)}</a></li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-bold mb-6 text-emerald-500">{t('footer.support')}</h4>
                                <ul className="space-y-4 text-gray-400">
                                    {['Contact', 'Help Center', 'Privacy Policy', 'Terms of Service'].map((item, i) => (
                                        <li key={i}><a href="#" className="hover:text-white transition-colors">{t(`footer.supportList.${i}`)}</a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
                            <p>{t('footer.rights')}</p>
                            <a href="#" className="flex items-center gap-1 hover:text-white mt-4 md:mt-0 transition-colors">
                                Back to top <ArrowUp size={12} />
                            </a>
                        </div>
                    </FadeInUp>
                </div>
            </footer>
        </div>
    );
};

// Helper Component for fade-in up animation
const FadeInUp = ({ children, delay = 0 }) => {
    const [ref, isVisible] = useReveal(0.1);
    return (
        <div
            ref={ref}
            className={`transform transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
};

export default MainWeb;
