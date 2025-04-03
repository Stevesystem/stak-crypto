
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const supportedCoins = [
  { name: "TERA", logo: "🔷", apy: "5.6%" },
  { name: "SOL", logo: "☀️", apy: "4.3%" },
  { name: "AVAX", logo: "🔺", apy: "6.2%" },
  { name: "BTC", logo: "₿", apy: "3.1%" }
];

const HeroSection = () => {
  return (
    <div className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-4 h-4 bg-blue-500 rounded-full blue-glow"></div>
        <div className="absolute bottom-40 left-10 w-2 h-2 bg-blue-500 rounded-full blue-glow"></div>
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-blue-500 rounded-full blue-glow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-8 relative animated-float">
            <img 
              src="/lovable-uploads/ab53b146-61dd-4d45-a2b9-ef37f9896046.png" 
              alt="Diamond" 
              className="w-40 h-40 md:w-60 md:h-60 blue-glow"
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 glow-text">
            Turn Your Crypto Into <br />
            <span className="text-primary">Passive Income</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Earn rewards effortlessly by staking your digital assets.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {supportedCoins.map((coin, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-card rounded-full border border-gray-800">
                <span className="text-xl">{coin.logo}</span>
                <span className="font-medium text-white">{coin.name}</span>
                <span className="text-sm text-green-400">{coin.apy}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8 blue-glow"
            >
              Start Staking Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
