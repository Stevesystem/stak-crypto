
import { Card } from "@/components/ui/card";

const cryptoCoins = [
  {
    name: "Bitcoin (BTC)",
    logo: "₿",
    apy: "3.1%",
    color: "orange",
    locked: "Instant",
    minStake: "0.005 BTC",
    dailyReward: "0.0000856"
  },
  {
    name: "FrogCoin (FROG)",
    logo: "🐸",
    apy: "9.2%",
    color: "green",
    locked: "1 week",
    minStake: "10 FROG",
    dailyReward: "0.251"
  },
  {
    name: "Avalanche (AVAX)",
    logo: "🔺",
    apy: "5.29%",
    color: "red",
    locked: "Instant",
    minStake: "1.5 AVAX",
    dailyReward: "0.0217"
  },
  {
    name: "Cardano (ADA)",
    logo: "₳",
    apy: "5.23%",
    color: "blue",
    locked: "1 week",
    minStake: "50 ADA",
    dailyReward: "0.716"
  },
  {
    name: "Jasmy (JASMY)",
    logo: "🟠",
    apy: "6.20%",
    color: "orange",
    locked: "3 days",
    minStake: "1000 JASMY",
    dailyReward: "1.699"
  },
  {
    name: "Stem Token (STEM)",
    logo: "💲",
    apy: "8.37%",
    color: "green",
    locked: "7 days",
    minStake: "100 STEM",
    dailyReward: "2.294"
  }
];

const FeatureSection = () => {
  return (
    <div className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">What Can You Stake?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Stake the world's best cryptocurrencies and earn daily rewards on your coins.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoCoins.map((coin, index) => (
            <div key={index} className="coin-card">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-full ${coin.color === 'orange' ? 'orange-glow' : coin.color === 'green' ? 'green-glow' : coin.color === 'red' ? 'red-glow' : 'blue-glow'} bg-gradient-to-br ${coin.color === 'orange' ? 'from-yellow-600 to-orange-500' : coin.color === 'green' ? 'from-green-500 to-teal-500' : coin.color === 'red' ? 'from-red-500 to-pink-600' : 'from-blue-600 to-indigo-700'}`}>
                    <span className="text-2xl">{coin.logo}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{coin.name}</h3>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">APY</span>
                    <span className="text-green-400 font-medium">{coin.apy}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Locked</span>
                    <span className="text-white">{coin.locked}</span>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Min. Stake</span>
                    <span className="text-white">{coin.minStake}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 text-center">
                <button className="text-primary hover:text-primary/90 font-medium transition-colors">
                  Stake Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="px-5 py-2 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-primary/60 hover:text-primary transition-colors">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
