import React, { useContext } from 'react';
import { HarvestingContext } from '../context/HarvestingContext';
import { formatCurrency } from '../utils/formatCurrency';

const AfterHarvestingCard = () => {
    const { calculatedValues, loading } = useContext(HarvestingContext);

    // Don't render until we have the math done
    if (loading || !calculatedValues) return null;

    const { after, savings } = calculatedValues;

    return (
        <div className="bg-[#2563EB] text-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col h-full transition-all">
            <h3 className="font-bold text-lg mb-6">After Harvesting</h3>
            
            <div className="flex-grow">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-blue-100 font-medium border-b border-blue-400/30">
                            <th className="text-left pb-4 font-normal">Label</th>
                            <th className="text-right pb-4 px-2 font-normal">Short-term</th>
                            <th className="text-right pb-4 font-normal">Long-term</th>
                        </tr>
                    </thead>
                    <tbody className="text-white font-semibold">
                        <tr className="">
                            <td className="py-4">Profits</td>
                            <td className="text-right py-4 px-2">+ {formatCurrency(after.stcgProfits)}</td>
                            <td className="text-right py-4">+ {formatCurrency(after.ltcgProfits)}</td>
                        </tr>
                        <tr className="">
                            <td className="py-4">Losses</td>
                            <td className="text-right py-4 px-2">{formatCurrency(after.stcgLosses)}</td>
                            <td className="text-right py-4">{formatCurrency(after.ltcgLosses)}</td>
                        </tr>
                        <tr className="">
                            <td className="py-2">Net Capital Gains</td>
                            <td className="text-right py-2 px-2">{formatCurrency(after.netStcg)}</td>
                            <td className="text-right py-2">{formatCurrency(after.netLtcg)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-400/30">
                <p className="text-xs md:text-sm text-blue-100 mb-1 font-normal">Effective Capital Gains:</p>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <p className="text-2xl md:text-3xl font-bold">{formatCurrency(after.realised)}</p>
                    
                    {savings > 0 && (
                        <div className="flex items-center gap-2 bg-blue-700/30 px-3 py-2 rounded-lg">
                             <span role="img" aria-label="party">🎉</span>
                             <span className="text-xs md:text-sm font-medium">You are going to save upto {formatCurrency(savings)}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AfterHarvestingCard;
