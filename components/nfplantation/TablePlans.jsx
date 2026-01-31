import React from 'react';
import { nfData } from '../../data/nfPlantationData';

const TablePlans = () => {
    return (
        <div className="bg-gray-900/60 backdrop-blur-md rounded-xl shadow-lg border border-white/10 overflow-hidden w-full">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-800/50 border-b border-white/5">
                            <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Investment Amount</th>
                            <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Year 1 (3% Monthly)</th>
                            <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Year 2 (3.5% Monthly)</th>
                            <th className="p-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Year 3 (4% Monthly)</th>
                            <th className="p-4 text-xs font-bold text-emerald-400 uppercase tracking-wider">Total 3 Year Returns</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {nfData.investment.tableRows.map((row, index) => (
                            <tr key={index} className="hover:bg-white/5 transition-colors group">
                                <td className="p-4 text-sm font-bold text-white border-r border-white/5 last:border-r-0 group-hover:text-emerald-300 transition-colors">{row.amount}</td>
                                <td className="p-4 text-sm text-gray-400 border-r border-white/5 last:border-r-0">{row.y1}</td>
                                <td className="p-4 text-sm text-gray-400 border-r border-white/5 last:border-r-0">{row.y2}</td>
                                <td className="p-4 text-sm text-gray-400 border-r border-white/5 last:border-r-0">{row.y3}</td>
                                <td className="p-4 text-sm font-bold text-emerald-400">{row.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TablePlans;
