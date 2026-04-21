import React, { useContext } from 'react';
import { HarvestingContext } from '../context/HarvestingContext';
import { formatCurrency } from '../utils/formatCurrency';

const PreHarvestingCard = () => {
    const { calculatedValues, loading } = useContext(HarvestingContext);

    // Don't show anything until calculations are ready
    if (loading || !calculatedValues) return null;

    const { pre } = calculatedValues;

    return (
        <div className="bg-white dark:bg-[#1A1F2E] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-4 md:p-6 flex flex-col h-full transition-colors">
            <h3 className="font-bold text-lg mb-6 text-gray-900 dark:text-gray-100">Pre Harvesting</h3>
            
            <div className="flex-grow">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-gray-400 font-medium border-b border-gray-100 dark:border-gray-800">
                            <th className="text-left pb-4 font-normal">Label</th>
                            <th className="text-right pb-4 px-2 font-normal">Short-term</th>
                            <th className="text-right pb-4 font-normal">Long-term</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 dark:text-gray-400 font-semibold">
                        <tr className="">
                            <td className="py-4">Profits</td>
                            <td className="text-right py-4 px-2 truncate">+ {formatCurrency(pre.stcgProfits)}</td>
                            <td className="text-right py-4 truncate">+ {formatCurrency(pre.ltcgProfits)}</td>
                        </tr>
                        <tr className="">
                            <td className="py-4">Losses</td>
                            <td className="text-right py-4 px-2 truncate">{formatCurrency(pre.stcgLosses)}</td>
                            <td className="text-right py-4 truncate">{formatCurrency(pre.ltcgLosses)}</td>
                        </tr>
                        <tr className="text-gray-900 dark:text-gray-100">
                            <td className="py-2">Net Capital Gains</td>
                            <td className="text-right py-2 px-2 truncate">{formatCurrency(pre.netStcg)}</td>
                            <td className="text-right py-2 truncate">{formatCurrency(pre.netLtcg)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs md:text-sm text-gray-500 mb-1">Realised Capital Gains:</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">{formatCurrency(pre.realised)}</p>
            </div>
        </div>
    );
};

export default PreHarvestingCard;
