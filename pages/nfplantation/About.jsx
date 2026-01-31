import React from 'react';
import { Link } from 'react-router-dom';
import NFHeader from '../../components/nfplantation/NFHeader';
import NFFooter from '../../components/nfplantation/NFFooter';
import TimelineCards from '../../components/nfplantation/TimelineCards';
import { nfData } from '../../data/nfPlantationData';
import { ShieldCheck, Users, Leaf, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="font-sans text-white bg-gray-950 selection:bg-emerald-500 selection:text-white">
            <NFHeader />

            {/* HEADER STRIP */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">NF Plantation</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">Pioneering sustainable aloe vera cultivation in Northern Sri Lanka while providing exceptional returns to our valued investors.</p>
                </div>
            </section>

            {/* OUR STORY */}
            <section className="py-24 bg-gray-950 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        {/* Left Text */}
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                <span className="w-1.5 h-8 bg-emerald-500 rounded-full"></span>
                                Our Story
                            </h2>
                            <p className="text-gray-400 mb-6 text-sm leading-loose">{nfData.about.story.p1}</p>
                            <p className="text-gray-400 mb-10 text-sm leading-loose">{nfData.about.story.p2}</p>

                            {/* Reg Box */}
                            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl -mr-12 -mt-12 transition-transform group-hover:scale-150"></div>
                                <h4 className="font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                                    <ShieldCheck className="text-emerald-500" size={20} />
                                    {nfData.about.story.regTitle}
                                </h4>
                                <p className="text-base font-bold text-emerald-400 mb-1 relative z-10 tracking-wider">{nfData.about.story.regNum}</p>
                                <p className="text-xs text-gray-500 relative z-10">{nfData.about.story.regSub}</p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex-1 w-full h-[400px] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-white/5 relative group">
                            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/images/aloe-farm-harvest.png"
                                alt="Farm"
                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            {/* Tech overlay lines */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-gray-950 to-transparent z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION & VISION */}
            <section className="py-24 bg-gray-900/50 border-y border-white/5">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Our Mission & Vision</h2>
                        <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-gray-900/40 p-10 rounded-2xl shadow-lg border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gray-900/60 group">
                            <h3 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                                <span className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">🎯</span>
                                Our Mission
                            </h3>
                            <p className="text-gray-400 text-sm leading-loose text-justify group-hover:text-gray-300 transition-colors">{nfData.about.missionVision.mission}</p>
                        </div>
                        <div className="bg-gray-900/40 p-10 rounded-2xl shadow-lg border border-white/5 hover:border-emerald-500/30 transition-all duration-300 hover:bg-gray-900/60 group">
                            <h3 className="font-bold text-white mb-6 text-xl flex items-center gap-3">
                                <span className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 group-hover:scale-110 transition-transform">👁️</span>
                                Our Vision
                            </h3>
                            <p className="text-gray-400 text-sm leading-loose text-justify group-hover:text-gray-300 transition-colors">{nfData.about.missionVision.vision}</p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {nfData.about.values.map((val, i) => (
                            <div key={i} className="bg-gray-900/80 p-8 rounded-2xl shadow-lg border border-white/5 text-center hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)] group">
                                <div className="w-14 h-14 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                    <val.icon className="text-emerald-500 group-hover:text-emerald-400 transition-colors" size={28} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-bold text-white mb-3 text-base">{val.title}</h4>
                                <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR JOURNEY */}
            <section className="py-24 bg-gray-950">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-3">Our Journey</h2>
                        <p className="text-gray-400 text-sm">Key milestones in our growth and success</p>
                    </div>
                    <TimelineCards />
                </div>
            </section>

            {/* TEAM & LOCATION */}
            <section className="relative py-24 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-emerald-900/20"></div>
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-white">Our Team & Location</h2>
                            <p className="text-gray-300 text-sm mb-8 leading-loose">
                                Based in the heart of Northern Province, our experienced team of agricultural experts and local farmers work together to ensure the success of every plantation.
                            </p>
                            <div className="flex items-center gap-3 mb-8 text-sm font-bold text-emerald-400 bg-emerald-500/10 py-3 px-5 rounded-lg border border-emerald-500/20 w-fit">
                                <CheckCircle size={18} /> Northern Province, Kilinochchi, Sri Lanka
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Our strategic location provides ideal climate conditions for aloe vera cultivation, with experienced local farmers who understand the land and its potential.
                            </p>
                        </div>
                        <div className="flex-1 w-full h-80 bg-gray-800 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 shadow-2xl shadow-emerald-900/20">
                            <img
                                src="/images/agri-team.png"
                                alt="Team Location"
                                className="w-full h-full object-cover opacity-60 hover:opacity-90 transition-opacity duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="relative py-20 text-center text-white overflow-hidden border-t border-white/5 bg-gray-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-gray-950 to-gray-950"></div>
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <h2 className="text-3xl font-bold mb-4 tracking-tight">Ready to Join Our Success Story?</h2>
                    <p className="text-gray-400 mb-10 text-sm max-w-2xl mx-auto">Become part of our growing community of successful investors and contribute to sustainable agriculture in Sri Lanka.</p>
                    <div className="flex justify-center gap-6">
                        <Link to="/company/nf-plantation/investment-plans" className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-500/50 text-sm flex items-center gap-2">
                            View Investment Plans
                        </Link>
                        <Link to="/company/nf-plantation/contact" className="bg-transparent border border-gray-600 text-white font-bold py-3.5 px-8 rounded-lg hover:bg-white/5 hover:border-white transition-all text-sm">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <NFFooter />
        </div>
    );
};

export default About;
