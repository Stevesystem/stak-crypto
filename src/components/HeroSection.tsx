
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bitcoin } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-bitcoin/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-navy/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Turn Your Bitcoin Into <span className="text-bitcoin">Passive Income</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Earn rewards effortlessly by staking your BTC. Daily payouts, instant withdrawals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-bitcoin hover:bg-bitcoin-dark text-white font-medium px-8"
              >
                Start Staking
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-bitcoin text-bitcoin hover:bg-bitcoin/10"
              >
                <Link to="#how-it-works">Learn How It Works</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="p-1 rounded-full bg-green-100 mr-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm font-medium text-gray-600">
                Live APY: <span className="text-green-600 font-bold">6.5%</span> | BTC Price: <span className="font-bold">$69,420</span>
              </span>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-bitcoin to-bitcoin-light rounded-full opacity-20 animate-pulse"></div>
              <Bitcoin size={280} className="absolute inset-0 m-auto text-bitcoin animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
