import React, { useContext, useState } from 'react';
import { HarvestingContext } from '../context/HarvestingContext';
import { formatCurrency } from '../utils/formatCurrency';
import SkeletonLoader from './SkeletonLoader';
import { ChevronDown, ChevronUp } from 'lucide-react';

const HoldingsTable = () => {
    const { holdings, selectedHoldings, toggleSelection, selectAll, loading } = useContext(HarvestingContext);
    const [viewAll, setViewAll] = useState(false);
    const [sortOrder, setSortOrder] = useState('desc'); // High to Low by default

    if (loading) {
        return (
            <div className="bg-white dark:bg-[#1A1F2E] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mt-6">
                <h3 className="font-semibold text-lg mb-6 text-gray-900 dark:text-gray-100">Holdings</h3>
                <SkeletonLoader />
            </div>
        );
    }

    // Sort logic for short-term gains (gain then loss)
    const sortedHoldings = [...holdings].sort((a, b) => {
        if (sortOrder === 'asc') return a.stcg.gain - b.stcg.gain;
        if (sortOrder === 'desc') return b.stcg.gain - a.stcg.gain;
        return 0;
    });

    const displayedHoldings = viewAll ? sortedHoldings : sortedHoldings.slice(0, 5);
    const isAllSelected = selectedHoldings.size === holdings.length && holdings.length > 0;

    const toggleSort = () => {
        setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
    };

    return (
        <div className="bg-white dark:bg-[#1A1F2E] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 mt-6 transition-colors overflow-x-auto">
            <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-gray-100">Holdings</h3>
            
            <div className="min-w-[800px] md:min-w-full">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-gray-400 font-normal border-b border-gray-100 dark:border-gray-800">
                            <th className="pb-4 text-left w-12">
                                <input 
                                    type="checkbox" 
                                    className="w-4 h-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB]"
                                    checked={isAllSelected}
                                    onChange={selectAll}
                                />
                            </th>
                            <th className="pb-4 text-left font-normal uppercase text-xs">Asset</th>
                            <th className="pb-4 text-left font-normal uppercase text-xs">
                                <div>Holdings</div>
                                <div className="text-[10px] lowercase normal-case text-gray-400">Avg Buy Price</div>
                            </th>
                            <th className="pb-4 text-left font-normal uppercase text-xs">Current Price</th>
                            <th 
                                className="pb-4 text-left font-normal uppercase text-xs cursor-pointer hover:text-gray-600 transition-colors"
                                onClick={toggleSort}
                            >
                                <div className="flex items-center gap-1 text-nowrap">
                                    Short-term
                                    {sortOrder === 'desc' && <ChevronDown className="w-3 h-3" />}
                                    {sortOrder === 'asc' && <ChevronUp className="w-3 h-3" />}
                                    {sortOrder === null && <ArrowUpDown className="w-3 h-3 text-gray-300" />}
                                </div>
                            </th>
                            <th className="pb-4 text-left font-normal uppercase text-xs">Long-Term</th>
                            <th className="pb-4 text-left font-normal uppercase text-xs">Amount to Sell</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {displayedHoldings.map((holding) => {
                            const isSelected = selectedHoldings.has(holding.id);
                            return (
                                <tr 
                                    key={holding.id} 
                                    onClick={() => toggleSelection(holding.id)}
                                    className={`transition-colors h-16 cursor-pointer ${isSelected ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-800/50'}`}
                                >
                                    <td className="py-4">
                                        <div className={`flex items-center h-full ${isSelected ? 'border-l-2 border-[#2563EB] border-dashed' : ''}`}>
                                            <input 
                                                type="checkbox" 
                                                className="ml-2 w-4 h-4 rounded border-gray-300 text-[#2563EB] focus:ring-[#2563EB] cursor-pointer"
                                                checked={isSelected}
                                                onChange={() => toggleSelection(holding.id)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <img src={holding.logo} alt={holding.coin} className="w-6 h-6 rounded-full" />
                                            <div>
                                                <p className="font-semibold text-gray-900 dark:text-gray-100 truncate max-w-[100px] md:max-w-none">{holding.coinName}</p>
                                                <p className="text-[10px] text-gray-500 uppercase">{holding.coin}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 text-left pr-4 md:pr-0">
                                        <div>
                                            <p className="font-semibold text-gray-900 dark:text-gray-100">{holding.totalHoldings} {holding.coin}</p>
                                            <p className="text-[10px] text-gray-500">${holding.averageBuyPrice?.toLocaleString()}/{holding.coin}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 font-semibold text-gray-900 dark:text-gray-100">
                                        ${holding.currentPrice.toLocaleString()}
                                    </td>
                                    <td className="py-4">
                                        <div>
                                            <p className={`font-semibold ${holding.stcg.gain >= 0 ? 'text-positive' : 'text-negative'}`}>
                                                {holding.stcg.gain >= 0 ? '+' : ''}{formatCurrency(holding.stcg.gain)}
                                            </p>
                                            <p className="text-[10px] text-gray-500">{holding.stcg.balance} {holding.coin}</p>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <div>
                                            <p className={`font-semibold ${holding.ltcg.gain >= 0 ? 'text-positive' : 'text-negative'}`}>
                                                {holding.ltcg.gain >= 0 ? '+' : ''}{formatCurrency(holding.ltcg.gain)}
                                            </p>
                                            <p className="text-[10px] text-gray-500">{holding.ltcg.balance} {holding.coin}</p>
                                        </div>
                                    </td>
                                    <td className="py-4 text-gray-500 text-right pr-4">
                                        {isSelected ? <span className="text-gray-900 dark:text-gray-100 font-semibold">{holding.totalHoldings} {holding.coin}</span> : '-'}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {!viewAll && holdings.length > 5 && (
                <div className="mt-4">
                    <button 
                        onClick={() => setViewAll(true)}
                        className="text-[#2563EB] font-semibold text-sm hover:underline"
                    >
                        View all
                    </button>
                </div>
            )}
        </div>
    );
};

export default HoldingsTable;
