import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import NFHeader from '../../components/nfplantation/NFHeader';
import NFFooter from '../../components/nfplantation/NFFooter';
import StatBarGreen from '../../components/nfplantation/StatBarGreen';
import FeatureCard from '../../components/nfplantation/FeatureCard';
import SectionTitle from '../../components/nfplantation/SectionTitle';
import { nfData } from '../../data/nfPlantationData';
import { Leaf, ArrowRight } from 'lucide-react';

const Home = () => {
    const { t } = useLanguage();

    return (
        <div className="font-sans text-white bg-gray-950 selection:bg-[#00c853] selection:text-white">
            <NFHeader />

            {/* HERO SECTION */}
            <section className="relative min-h-[700px] flex items-center justify-center text-center px-4 overflow-hidden pt-20">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero-background.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gray-950/70"></div>
                </div>

                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:32px_32px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950"></div>

                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00c853]/20 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[96px]"></div>

                <div className="relative z-10 max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00c853]/10 border border-[#00c853]/20 text-[#00c853] text-xs font-mono mb-6 backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c853] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c853]"></span>
                        </span>
                        Investment Platform v2.0
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                        {t('nfPlantation.home.hero.title')}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c853] to-emerald-300 block mt-2">
                            Digital Future.
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        {t('nfPlantation.home.hero.desc')}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/company/nf-plantation/investment-plans" className="group relative px-8 py-4 bg-[#00c853] text-white font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,200,83,0.3)] hover:shadow-[0_0_40px_rgba(0,200,83,0.5)] transition-all transform hover:-translate-y-1">
                            <span className="relative z-10 flex items-center gap-2">
                                {t('nfPlantation.home.hero.startInvesting')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-[#00c853] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                        <Link to="/company/nf-plantation/about" className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all hover:border-[#00c853]/50">
                            {t('nfPlantation.home.hero.learnMore')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* GREEN STAT BAR (Already Updated) */}
            <StatBarGreen />

            {/* WHY CHOOSE SECTION */}
            <section className="py-24 bg-gray-950 relative">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <SectionTitle title={t('nfPlantation.home.whyChoose')} subtitle={t('nfPlantation.home.whyChooseSub')} center={true} />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* Manually rendering feature cards to customize specific look */}
                        {[
                            { icon: nfData.home.features[0].icon, title: t('nfPlantation.home.features.govt.title'), desc: t('nfPlantation.home.features.govt.desc') },
                            { icon: nfData.home.features[1].icon, title: t('nfPlantation.home.features.returns.title'), desc: t('nfPlantation.home.features.returns.desc') },
                            { icon: nfData.home.features[2].icon, title: t('nfPlantation.home.features.transparent.title'), desc: t('nfPlantation.home.features.transparent.desc') }
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 bg-gray-900 border border-gray-800 hover:border-[#00c853]/50 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,200,83,0.1)] hover:-translate-y-2">
                                <div className="w-14 h-14 bg-[#00c853]/10 rounded-xl flex items-center justify-center text-[#00c853] mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00c853] transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SUSTAINABLE ALOE VERA INVESTMENT */}
            <section className="py-24 bg-gray-900 relative overflow-hidden">
                {/* Background Image for Aloe Section */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/aloe-vera-plantation.png"
                        alt="Aloe Background"
                        className="w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/80"></div>
                </div>

                <div className="absolute right-0 top-0 w-1/3 h-full bg-[#00c853]/5 skew-x-12 blur-3xl z-0"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        {/* Text Left */}
                        <div className="flex-1">
                            <div className="inline-block px-3 py-1 rounded bg-[#00c853]/20 text-[#00c853] text-xs font-bold mb-4">SUSTAINABLE ASSETS</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {t('nfPlantation.home.aloeSection.title')}
                            </h2>
                            <p className="text-gray-400 mb-8 leading-relaxed text-lg font-light">
                                {t('nfPlantation.home.aloeSection.desc')}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {(t('nfPlantation.home.aloeSection.bullets') || []).map((point, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50">
                                        <div className="w-2 h-2 rounded-full bg-[#00c853] shadow-[0_0_8px_#00c853]"></div>
                                        <span className="text-sm text-gray-300 font-medium">{point}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/company/nf-plantation/services" className="inline-flex items-center gap-2 text-[#00c853] font-bold hover:text-emerald-400 transition-colors group">
                                {t('nfPlantation.home.aloeSection.learnHow')} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>

                        {/* Image Right */}
                        <div className="flex-1 relative">
                            <div className="relative rounded-2xl overflow-hidden border border-gray-700 group">
                                <div className="absolute inset-0 bg-[#00c853]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src="/images/aloe-vera-plantation.png"
                                    alt="Aloe Vera"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay UI Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl border border-gray-700 shadow-2xl z-20">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wider">Current Yield</div>
                                            <div className="text-2xl font-mono text-white font-bold">18.5% <span className="text-xs text-[#00c853] align-top">apx</span></div>
                                        </div>
                                        <div className="h-10 w-24 bg-black/50 rounded flex items-center justify-center">
                                            <div className="flex items-end gap-1 h-6 w-16">
                                                <div className="w-1 bg-[#00c853] h-2"></div>
                                                <div className="w-1 bg-[#00c853] h-3"></div>
                                                <div className="w-1 bg-[#00c853] h-5"></div>
                                                <div className="w-1 bg-[#00c853] h-4"></div>
                                                <div className="w-1 bg-[#00c853] h-6 animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="relative py-24 text-center text-white overflow-hidden border-t border-white/5">
                <div className="absolute inset-0 bg-gray-950"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

                {/* Glowing Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00c853]/10 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            {t('nfPlantation.home.cta.title')}
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            {t('nfPlantation.home.cta.desc')}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-5">
                            <Link to="/company/nf-plantation/investment-plans" className="group relative px-8 py-4 bg-[#00c853] text-white font-bold rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,200,83,0.3)] hover:shadow-[0_0_50px_rgba(0,200,83,0.5)] transition-all transform hover:-translate-y-1">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {t('nfPlantation.home.cta.viewPlans')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-[#00c853] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>
                            <Link to="/company/nf-plantation/contact" className="px-8 py-4 bg-gray-900 border border-gray-700 text-white font-bold rounded-xl hover:border-[#00c853]/50 hover:text-[#00c853] hover:shadow-[0_0_20px_rgba(0,200,83,0.1)] transition-all">
                                {t('nfPlantation.home.cta.contactUs')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <NFFooter />
        </div>
    );
};

export default Home;
