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
    },
    {
      id: 7,
      coin: "MATIC", coinName: "Polygon",
      logo: "https://static.coinpaprika.com/coin/matic-polygon/logo.png",
      totalHoldings: 85240,
      averageBuyPrice: 0.85,
      currentPrice: 0.42,
      stcg: { gain: -36650, balance: 85240 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 8,
      coin: "ADA", coinName: "Cardano",
      logo: "https://static.coinpaprika.com/coin/ada-cardano/logo.png",
      totalHoldings: 125000,
      averageBuyPrice: 0.65,
      currentPrice: 0.38,
      stcg: { gain: -33750, balance: 125000 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 9,
      coin: "DOT", coinName: "Polkadot",
      logo: "https://static.coinpaprika.com/coin/dot-polkadot/logo.png",
      totalHoldings: 4500,
      averageBuyPrice: 12.40,
      currentPrice: 7.15,
      stcg: { gain: -23625, balance: 4500 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 10,
      coin: "LINK", coinName: "Chainlink",
      logo: "https://static.coinpaprika.com/coin/link-chainlink/logo.png",
      totalHoldings: 2800,
      averageBuyPrice: 22.15,
      currentPrice: 18.20,
      stcg: { gain: -11060, balance: 2800 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 11,
      coin: "UNI", coinName: "Uniswap",
      logo: "https://static.coinpaprika.com/coin/uni-uniswap/logo.png",
      totalHoldings: 1500,
      averageBuyPrice: 15.60,
      currentPrice: 9.45,
      stcg: { gain: -9225, balance: 1500 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 12,
      coin: "XRP", coinName: "XRP",
      logo: "https://static.coinpaprika.com/coin/xrp-xrp/logo.png",
      totalHoldings: 50000,
      averageBuyPrice: 1.10,
      currentPrice: 1.45,
      stcg: { gain: 17500, balance: 50000 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 13,
      coin: "AVAX", coinName: "Avalanche",
      logo: "https://static.coinpaprika.com/coin/avax-avalanche/logo.png",
      totalHoldings: 650,
      averageBuyPrice: 55.30,
      currentPrice: 32.10,
      stcg: { gain: -15080, balance: 650 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 14,
      coin: "LTC", coinName: "Litecoin",
      logo: "https://static.coinpaprika.com/coin/ltc-litecoin/logo.png",
      totalHoldings: 420,
      averageBuyPrice: 120.45,
      currentPrice: 88.20,
      stcg: { gain: -13545, balance: 420 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 15,
      coin: "DOGE", coinName: "Dogecoin",
      logo: "https://static.coinpaprika.com/coin/doge-dogecoin/logo.png",
      totalHoldings: 500000,
      averageBuyPrice: 0.22,
      currentPrice: 0.35,
      stcg: { gain: 65000, balance: 500000 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 16,
      coin: "SHIB", coinName: "Shiba Inu",
      logo: "https://static.coinpaprika.com/coin/shib-shiba-inu/logo.png",
      totalHoldings: 1000000000,
      averageBuyPrice: 0.000035,
      currentPrice: 0.000022,
      stcg: { gain: -13000, balance: 1000000000 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 17,
      coin: "NEAR", coinName: "NEAR Protocol",
      logo: "https://static.coinpaprika.com/coin/near-near-protocol/logo.png",
      totalHoldings: 8500,
      averageBuyPrice: 8.40,
      currentPrice: 4.15,
      stcg: { gain: -36125, balance: 8500 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 18,
      coin: "FTM", coinName: "Fantom",
      logo: "https://static.coinpaprika.com/coin/ftm-fantom/logo.png",
      totalHoldings: 45000,
      averageBuyPrice: 1.25,
      currentPrice: 0.68,
      stcg: { gain: -25650, balance: 45000 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 19,
      coin: "ALGO", coinName: "Algorand",
      logo: "https://static.coinpaprika.com/coin/algo-algorand/logo.png",
      totalHoldings: 65000,
      averageBuyPrice: 0.45,
      currentPrice: 0.22,
      stcg: { gain: -14950, balance: 65000 },
      ltcg: { gain: 0, balance: 0 }
    },
    {
      id: 20,
      coin: "ARB", coinName: "Arbitrum",
      logo: "https://static.coinpaprika.com/coin/arb-arbitrum/logo.png",
      totalHoldings: 12000,
      averageBuyPrice: 2.10,
      currentPrice: 0.85,
      stcg: { gain: -15000, balance: 12000 },
      ltcg: { gain: 0, balance: 0 }
    }
  ]), 800);
});
