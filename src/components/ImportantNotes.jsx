import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';

const ImportantNotes = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Disclaimer and help notes for the user
    const notes = [
        "Tax-loss harvesting is currently not allowed under Indian tax regulations. Please consult your tax advisor before making any decisions.",
        "Tax harvesting does not apply to derivatives or futures. These are handled separately as business income under tax rules.",
        "Price and market value data is fetched from Coingecko, not from individual exchanges. As a result, values may slightly differ from the ones on your exchange.",
        "Some countries do not have a short-term / long-term bifurcation. For now, we are calculating everything as long-term.",
        "Only realized losses are considered for harvesting. Unrealized losses in held assets are not counted."
    ];

    return (
        <div className="w-full mb-6">
            <div 
                className={`border border-[#BFDBFE] rounded-lg overflow-hidden bg-[#EFF6FF] dark:bg-blue-900/10 dark:border-blue-900 transition-all ${isOpen ? 'pb-4' : ''}`}
            >
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-3 text-left focus:outline-none"
                    id="important-notes-trigger"
                >
                    <div className="flex items-center gap-3">
                        <Info className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-sm text-gray-900 dark:text-gray-100 uppercase tracking-tight">Important Notes & Disclaimers</span>
                    </div>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />}
                </button>
                
                {isOpen && (
                    <div className="px-12 pr-4">
                        <ul className="list-disc space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            {notes.map((note, index) => (
                                <li key={index}>{note}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImportantNotes;
