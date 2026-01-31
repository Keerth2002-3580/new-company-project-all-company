import React, { useState } from 'react';
import { Sprout, ArrowRight, TrendingUp, Calculator, Leaf, CheckCircle2, Clock, BarChart3 } from 'lucide-react';

const InvestmentCalculator = () => {
    const [amount, setAmount] = useState(100000);

    // Constants
    const RATES = { y1: 0.03, y2: 0.035, y3: 0.04 };

    // Calculations
    const monthlyIncome = {
        y1: amount * RATES.y1,
        y2: amount * RATES.y2,
        y3: amount * RATES.y3
    };

    const yearlyTotal = {
        y1: monthlyIncome.y1 * 12,
        y2: monthlyIncome.y2 * 12,
        y3: monthlyIncome.y3 * 12
    };

    const totalInterest = yearlyTotal.y1 + yearlyTotal.y2 + yearlyTotal.y3;
    const totalReturn = amount + totalInterest;

    // Helper
    const currency = (val) => new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="w-full bg-[#020617] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row font-sans min-h-[550px] border border-gray-800">

            {/* LEFT PANEL: Branding & Features (40%) */}
            <div className="md:w-5/12 bg-[#0a0f1e] text-white p-8 relative overflow-hidden flex flex-col justify-between border-r border-white/5">
                {/* Background Glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-[80px]"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                        <span className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
                            <Leaf size={14} />
                        </span>
                        <span className="font-bold tracking-[0.2em] text-[10px] text-emerald-500 uppercase">Sustainable Growth</span>
                    </div>

                    <h2 className="text-4xl font-bold leading-tight mb-4 tracking-tight">
                        Calculate your <br />
                        <span className="text-emerald-400">Future Returns</span>
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-xs">
                        See exactly how your investment grows over 3 years with our progressive monthly payout system.
                    </p>

                    {/* Features from Image Style */}
                    <div className="space-y-4">
                        <div className="bg-[#0f1629] p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                            <div className="mb-3 w-10 h-10 rounded-full bg-[#020617] flex items-center justify-center border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                                <BarChart3 size={18} className="text-emerald-500" />
                            </div>
                            <h4 className="text-white font-bold text-sm mb-1">Progressive Returns</h4>
                            <p className="text-xs text-gray-500">Rates increase from 3% to 4% monthly.</p>
                        </div>

                        <div className="bg-[#0f1629] p-4 rounded-xl border border-white/5 hover:border-emerald-500/30 transition-all group">
                            <div className="mb-3 w-10 h-10 rounded-full bg-[#020617] flex items-center justify-center border border-white/5 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 transition-colors">
                                <Clock size={18} className="text-emerald-500" />
                            </div>
                            <h4 className="text-emerald-400 font-bold text-sm mb-1">Fixed Duration</h4>
                            <p className="text-xs text-gray-500">3-year secured investment period.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL: Calculator (60%) */}
            <div className="md:w-7/12 bg-[#020617] p-8 md:p-10 flex flex-col justify-center relative">
                <div className="mb-8">
                    <label className="text-[10px] font-bold text-emerald-500/70 uppercase tracking-[0.2em] mb-6 block">Investment Amount</label>

                    <div className="relative group/input mb-8">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-2xl text-gray-600 font-serif italic group-focus-within/input:text-emerald-500 transition-colors">Rs</span>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="text-5xl md:text-6xl font-black text-white w-full bg-transparent outline-none border-b border-gray-800 focus:border-emerald-500 transition-all pb-4 pl-12 placeholder-gray-800"
                        />
                    </div>

                    <input
                        type="range"
                        min="50000"
                        max="5000000"
                        step="50000"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full h-1 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:accent-emerald-400 transition-all mb-4"
                    />
                    <div className="flex gap-2 justify-end mb-8">
                        {[100000, 500000, 1000000].map((val) => (
                            <button
                                key={val}
                                onClick={() => setAmount(val)}
                                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#0f1629] text-gray-400 rounded border border-white/5 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all"
                            >
                                {(val / 1000)}k
                            </button>
                        ))}
                    </div>

                    {/* Result Summary */}
                    <div className="bg-[#0f1629] rounded-2xl p-8 border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TrendingUp size={64} className="text-emerald-500" />
                        </div>

                        <div className="flex justify-between items-end mb-6 relative z-10">
                            <div>
                                <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Total Estimated Return</div>
                                <div className="text-3xl md:text-4xl font-bold text-white tracking-tight">{currency(totalReturn)}</div>
                            </div>
                            <div className="text-right">
                                <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-1">Net Profit</div>
                                <div className="text-emerald-400 font-bold text-xl">+{currency(totalInterest)}</div>
                            </div>
                        </div>

                        {/* Mini Bars */}
                        <div className="flex gap-2 h-16 items-end border-b border-gray-800 pb-2 relative z-10">
                            {[monthlyIncome.y1, monthlyIncome.y2, monthlyIncome.y3].map((v, i) => {
                                const h = (v / monthlyIncome.y3) * 100;
                                return (
                                    <div key={i} className="flex-1 bg-gray-800 rounded-t-sm relative group/bar hover:bg-gray-700 transition-colors" style={{ height: '100%' }}>
                                        <div className="absolute bottom-0 w-full bg-emerald-600 rounded-t-sm transition-all duration-500 group-hover/bar:bg-emerald-500" style={{ height: `${h}%` }}></div>
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">Year {i + 1}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <button className="w-full py-4 rounded-xl bg-emerald-600 text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 group shadow-lg shadow-emerald-900/20">
                    Start Investment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default InvestmentCalculator;
