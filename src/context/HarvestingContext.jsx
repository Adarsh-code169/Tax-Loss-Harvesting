import React, { createContext, useState, useEffect, useMemo } from 'react';
import { fetchCapitalGains } from '../api/mockCapitalGains';
import { fetchHoldings } from '../api/mockHoldings';

export const HarvestingContext = createContext();

export const HarvestingProvider = ({ children }) => {
  const [capitalGains, setCapitalGains] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const [selectedHoldings, setSelectedHoldings] = useState(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initial data load
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [gainsData, holdingsData] = await Promise.all([
          fetchCapitalGains(),
          fetchHoldings()
        ]);
        setCapitalGains(gainsData.capitalGains);
        setHoldings(holdingsData);
      } catch (err) {
        console.error('Data fetch error:', err);
        setError('Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const toggleSelection = (id) => {
    setSelectedHoldings(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const selectAll = () => {
    if (selectedHoldings.size === holdings.length) {
      setSelectedHoldings(new Set());
    } else {
      setSelectedHoldings(new Set(holdings.map(h => h.id)));
    }
  };

  // Heavy lifting for tax calculations happens here
  const calculatedValues = useMemo(() => {
    if (!capitalGains) return null;

    // Calculate baseline before harvesting
    const preStcg = capitalGains.stcg.profits - capitalGains.stcg.losses;
    const preLtcg = capitalGains.ltcg.profits - capitalGains.ltcg.losses;
    const preRealised = preStcg + preLtcg;

    let afterStcgProfits = capitalGains.stcg.profits;
    let afterStcgLosses = capitalGains.stcg.losses;
    let afterLtcgProfits = capitalGains.ltcg.profits;
    let afterLtcgLosses = capitalGains.ltcg.losses;

    // Factor in the selected assets
    holdings.forEach(holding => {
      if (selectedHoldings.has(holding.id)) {
        if (holding.stcg.gain > 0) afterStcgProfits += holding.stcg.gain;
        else afterStcgLosses += Math.abs(holding.stcg.gain);

        if (holding.ltcg.gain > 0) afterLtcgProfits += holding.ltcg.gain;
        else afterLtcgLosses += Math.abs(holding.ltcg.gain);
      }
    });

    const afterNetStcg = afterStcgProfits - afterStcgLosses;
    const afterNetLtcg = afterLtcgProfits - afterLtcgLosses;
    const afterRealised = afterNetStcg + afterNetLtcg;

    // Total tax-loss harvesting benefit
    const savings = preRealised - afterRealised;

    return {
      pre: {
        stcgProfits: capitalGains.stcg.profits,
        stcgLosses: capitalGains.stcg.losses,
        ltcgProfits: capitalGains.ltcg.profits,
        ltcgLosses: capitalGains.ltcg.losses,
        netStcg: preStcg,
        netLtcg: preLtcg,
        realised: preRealised
      },
      after: {
        stcgProfits: afterStcgProfits,
        stcgLosses: afterStcgLosses,
        ltcgProfits: afterLtcgProfits,
        ltcgLosses: afterLtcgLosses,
        netStcg: afterNetStcg,
        netLtcg: afterNetLtcg,
        realised: afterRealised
      },
      savings
    };
  }, [capitalGains, holdings, selectedHoldings]);

  return (
    <HarvestingContext.Provider value={{
      loading,
      error,
      holdings,
      selectedHoldings,
      toggleSelection,
      selectAll,
      calculatedValues
    }}>
      {children}
    </HarvestingContext.Provider>
  );
};
