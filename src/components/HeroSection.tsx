import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const supportedCoins = [
  { name: "TERA", logo: "🔷", apy: "5.6%" },
  { name: "SOL", logo: "☀️", apy: "4.3%" },
  { name: "AVAX", logo: "🔺", apy: "6.2%" },
  { name: "BTC", logo: "₿", apy: "3.1%" }
];

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartStaking = () => {
    navigate("/signin");
  };

  return (
    <div className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-[#00030B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/5653e020-dfaa-4b7c-9681-9baeaf4de1db.png" 
                alt="Crypto Crystal Prism" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 text-left order-1 lg:order-2">
            <div className="inline-block px-4 py-2 bg-secondary/80 rounded-full mb-6 border border-primary/30">
              <p className="text-sm md:text-base font-medium text-primary">
                <span className="mr-2">⚡</span> Stake Crypto. Earn Daily. No Lock-ups.
              </p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Turn Your Crypto Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 glow-text">Passive Income</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Earn rewards effortlessly by staking your digital assets. Get daily payouts with the freedom to withdraw anytime.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {supportedCoins.map((coin, index) => (
                <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-card/80 backdrop-blur-sm rounded-full border border-gray-800/80 shadow-lg">
                  <span className="text-xl">{coin.logo}</span>
                  <span className="font-medium text-white">{coin.name}</span>
                  <span className="text-sm text-green-400">{coin.apy}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-600 text-white font-medium px-8 transition-all shadow-lg shadow-primary/20 blue-glow"
                onClick={handleStartStaking}
              >
                Start Staking Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-700 hover:bg-gray-800/50 text-white"
              >
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 lg:mt-24 w-full bg-gradient-to-r from-navy-light/50 to-card/50 border-y border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl text-white font-bold mb-1">Total Value Staked</h3>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">$9.99B</div>
              <p className="text-sm text-gray-400">Updated: 1d ago</p>
            </div>
            
            <div className="h-16 w-px bg-gray-800/70 hidden md:block"></div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-card/80 border-4 border-bitcoin mx-auto mb-2 orange-glow">
                <img src="/lovable-uploads/7066c7d4-f90b-46b4-b31e-d7a96e2a4e55.png" alt="Bitcoin" className="w-full h-full rounded-full" />
              </div>
              <p className="text-sm text-gray-400">Bitcoin (BTC)</p>
              <p className="text-lg font-bold text-white">3.1%-7.5%</p>
              <p className="text-xs text-gray-500">Staking APY</p>
            </div>
            
            <div className="h-16 w-px bg-gray-800/70 hidden md:block"></div>
            
            <div>
              <div className="flex items-center">
                <span className="text-sm text-gray-400 mr-2">Audited by</span>
                <div className="px-3 py-1.5 bg-gray-800/80 rounded-full flex items-center">
                  <img src="/lovable-uploads/1b68dc84-8be2-4108-801f-48d3f94afa12.png" alt="FrogCoin" className="w-5 h-5 mr-1.5" />
                  <span className="font-medium text-white">FrogCoin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
