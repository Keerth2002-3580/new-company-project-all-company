import React from 'react';
import { Link } from 'react-router-dom';
import NFHeader from '../../components/nfplantation/NFHeader';
import NFFooter from '../../components/nfplantation/NFFooter';
import StepsRow from '../../components/nfplantation/StepsRow';
import { nfData } from '../../data/nfPlantationData';
import { CheckCircle, ShieldCheck, FileText, UserCheck, ArrowRight, Users, Briefcase } from 'lucide-react';

const Services = () => {
    return (
        <div className="font-sans text-white bg-gray-950 selection:bg-emerald-500 selection:text-white">
            <NFHeader />

            {/* HEADER STRIP */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Our Services</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm">Comprehensive investment solutions backed by sustainable aloe vera cultivation and government registration.</p>
                </div>
            </section>

            {/* SERVICES GRID */}
            <section className="py-24 bg-gray-950 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {nfData.services.cards.map((card, i) => (
                            <div key={i} className="bg-gray-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all duration-300 group">
                                <div className="flex items-start gap-6">
                                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                        <card.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white mb-3 text-lg group-hover:text-emerald-400 transition-colors">{card.title}</h3>
                                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">{card.desc}</p>
                                        <ul className="space-y-3">
                                            {card.points.map((pt, j) => (
                                                <li key={j} className="flex items-center gap-3 text-xs text-gray-500 font-medium group-hover:text-gray-400 transition-colors">
                                                    <CheckCircle size={14} className="text-emerald-500" /> {pt}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MODEL STEPS */}
            <section className="py-24 bg-gray-900 border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-3">How Our Investment Model Works</h2>
                        <p className="text-gray-400 text-sm">Simple, transparent process from registration to receiving returns</p>
                    </div>
                    <StepsRow />
                </div>
            </section>

            {/* ALOE PROJECT SPLIT */}
            <section className="py-24 bg-gray-950 relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85305_1px,transparent_1px),linear-gradient(to_bottom,#00c85305_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                                Aloe Vera Plantation Project
                            </h2>
                            <p className="text-sm text-gray-400 mb-8 leading-loose">
                                Our aloe vera plantation project is strategically located in Kilinochchi, Northern Province, where the climate and soil conditions are ideal for aloe vera cultivation.
                            </p>
                            <ul className="space-y-6 mb-10">
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
                                        <CheckCircle className="text-emerald-500" size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Sustainable Farming</span>
                                        <span className="text-xs text-gray-500">Eco-friendly practices that preserve soil health and biodiversity</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
                                        <UserCheck className="text-emerald-500" size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Expert Management</span>
                                        <span className="text-xs text-gray-500">Experienced agricultural team with deep local knowledge</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
                                        <FileText className="text-emerald-500" size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Market Demand</span>
                                        <span className="text-xs text-gray-500">Growing demand for aloe vera in pharmaceutical and cosmetic industries</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 group">
                                    <div className="mt-1 p-1 bg-emerald-500/10 rounded-md">
                                        <Users className="text-emerald-500" size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">Community Impact</span>
                                        <span className="text-xs text-gray-500">Supporting local farmers and creating employment opportunities</span>
                                    </div>
                                </li>
                            </ul>
                            <Link to="/company/nf-plantation/investment-plans" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] inline-flex items-center gap-2 text-sm border border-emerald-500/50">
                                View Investment Plans <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className="flex-1 w-full h-[500px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group">
                            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/images/aloe-vera-plantation.png"
                                alt="Services Project"
                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700 hover:scale-105"
                            />
                            {/* Tech lines */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LEGAL BACKING */}
            <section className="py-24 bg-gray-900/50 relative border-t border-white/5">
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-2">Government Support & Legal Backing</h2>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">Our operations are fully compliant with Sri Lankan regulations and backed by government registration.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] group">
                            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <ShieldCheck className="text-blue-500" size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-white mb-2 text-base">Official Registration</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Company registered with Government of Sri Lanka (Reg. No: 00303425)</p>
                        </div>
                        <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] group">
                            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <Briefcase className="text-blue-500" size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-white mb-2 text-base">Regulatory Compliance</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Full compliance with investment and agricultural regulations</p>
                        </div>
                        <div className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] group">
                            <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <UserCheck className="text-blue-500" size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="font-bold text-white mb-2 text-base">Investor Protection</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Legal framework protecting investor rights and interests</p>
                        </div>
                    </div>
                </div>
            </section>

            <NFFooter />
        </div>
    );
};

export default Services;
