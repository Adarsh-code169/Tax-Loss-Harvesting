export const fetchHoldings = () => new Promise((resolve) => {
  setTimeout(() => resolve([
    {
      id: 1,
      coin: "WBTC", coinName: "Wrapped Bitcoin",
      logo: "https://static.coinpaprika.com/coin/wbtc-wrapped-bitcoin/logo.png",
      totalHoldings: 2218.81,
      averageBuyPrice: 92980.19,
      currentPrice: 104390,
      stcg: { gain: 25310000, balance: 2218.81 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 2,
      coin: "BTC", coinName: "Bitcoin",
      logo: "https://static.coinpaprika.com/coin/btc-bitcoin/logo.png",
      totalHoldings: 1184.12,
      averageBuyPrice: 93072.64,
      currentPrice: 104250,
      stcg: { gain: 13240000, balance: 1184.12 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 3,
      coin: "ETH", coinName: "Ethereum",
      logo: "https://static.coinpaprika.com/coin/eth-ethereum/logo.png",
      totalHoldings: 20028.05,
      averageBuyPrice: 3367.78,
      currentPrice: 2531.06,
      stcg: { gain: -16760000, balance: 20028.05 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 4,
      coin: "SOL", coinName: "Solana",
      logo: "https://static.coinpaprika.com/coin/sol-solana/logo.png",
      totalHoldings: 20277.78,
      averageBuyPrice: 192.15,
      currentPrice: 174.37,
      stcg: { gain: -360410, balance: 20277.78 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 5,
      coin: "BNB", coinName: "BNB",
      logo: "https://static.coinpaprika.com/coin/bnb-binance-coin/logo.png",
      totalHoldings: 7020.16,
      averageBuyPrice: 708.72,
      currentPrice: 665.55,
      stcg: { gain: -303050, balance: 7020.16 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 6,
      coin: "AAVE", coinName: "Aave",
      logo: "https://static.coinpaprika.com/coin/aave-new/logo.png",
      totalHoldings: 15112.44,
      averageBuyPrice: 231.12,
      currentPrice: 224.33,
      stcg: { gain: -254220, balance: 15112.44 },
      ltcg: { gain: 0, balance: 0 }
    }
  ]), 800);
});
