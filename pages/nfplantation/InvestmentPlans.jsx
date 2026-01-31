import React from 'react';
import { Link } from 'react-router-dom';
import NFHeader from '../../components/nfplantation/NFHeader';
import NFFooter from '../../components/nfplantation/NFFooter';
import InvestmentCalculator from '../../components/nfplantation/InvestmentCalculator';
import TablePlans from '../../components/nfplantation/TablePlans';
import { nfData } from '../../data/nfPlantationData';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

const InvestmentPlans = () => {
    return (
        <div className="font-sans text-white bg-gray-950 selection:bg-emerald-500 selection:text-white">
            <NFHeader />

            {/* HEADER STRIP */}
            <section className="relative py-20 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85310_1px,transparent_1px),linear-gradient(to_bottom,#00c85310_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Investment Plans</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm text-balance">Choose from our structured investment plans with guaranteed monthly returns. Our progressive return structure ensures growing income over time.</p>
                </div>
            </section>

            {/* FEATURE CARDS - TOP */}
            <section className="py-20 bg-gray-950 relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        <div className="bg-gray-900/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl text-center shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <TrendingUp className="text-emerald-500 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all" size={32} />
                            </div>
                            <h3 className="font-bold text-white mb-3 text-base group-hover:text-emerald-400 transition-colors">Progressive Returns</h3>
                            <p className="text-xs text-gray-400 leading-relaxed px-4">Returns increase from 3% to 4% monthly over 3 years, maximizing your yield.</p>
                        </div>
                        <div className="bg-gray-900/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl text-center shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Clock className="text-emerald-500 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all" size={32} />
                            </div>
                            <h3 className="font-bold text-white mb-3 text-base group-hover:text-emerald-400 transition-colors">Fixed Duration</h3>
                            <p className="text-xs text-gray-400 leading-relaxed px-4">3-year investment period with guaranteed returns and capital repayment.</p>
                        </div>
                        <div className="bg-gray-900/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl text-center shadow-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all duration-300 group">
                            <div className="w-16 h-16 mx-auto bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <DollarSign className="text-emerald-500 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] transition-all" size={32} />
                            </div>
                            <h3 className="font-bold text-white mb-3 text-base group-hover:text-emerald-400 transition-colors">Monthly Payouts</h3>
                            <p className="text-xs text-gray-400 leading-relaxed px-4">Receive regular monthly income directly to your bank account without hassle.</p>
                        </div>
                    </div>

                    {/* CALCULATOR */}
                    <div className="mb-20">
                        <InvestmentCalculator />
                    </div>

                    {/* TABLE */}
                    <div className="mb-20">
                        <div className="mb-8 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                <span className="w-1 lg:h-8 h-6 bg-emerald-500 rounded-full"></span> Available Investment Plans
                            </h2>
                            <p className="text-sm text-gray-500 ml-4">All amounts are in Sri Lankan Rupees (LKR)</p>
                        </div>
                        <TablePlans />
                    </div>

                    {/* TERMS BOX */}
                    <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-8 backdrop-blur-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                        <h4 className="font-bold text-blue-400 mb-6 text-sm flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            Important Terms & Conditions
                        </h4>
                        <ul className="space-y-3 relative z-10">
                            {nfData.investment.terms.map((term, i) => (
                                <li key={i} className="flex items-start gap-3 text-xs text-gray-400 font-medium">
                                    <span className="text-blue-500 mt-0.5">•</span>
                                    {term}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* GREEN CTA BAND */}
            <section className="relative py-20 text-center text-white overflow-hidden bg-gray-900 border-t border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00c85305_1px,transparent_1px),linear-gradient(to_bottom,#00c85305_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <h2 className="text-3xl font-bold mb-4 tracking-tight">Ready to Start Investing?</h2>
                    <p className="text-sm mb-10 text-gray-400 max-w-xl mx-auto leading-relaxed">Join our growing community of investors and start earning monthly returns today with NF Plantation.</p>
                    <div className="flex justify-center gap-6">
                        <Link to="#" className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold py-3.5 px-8 rounded-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] text-sm">
                            Register Now
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

export default InvestmentPlans;
