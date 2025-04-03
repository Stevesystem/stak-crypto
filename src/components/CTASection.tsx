
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-16 md:py-24 btc-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-3 rounded-full bg-white/20 backdrop-blur-sm mb-6">
          <Bitcoin size={32} className="text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Earning Passive Bitcoin?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Join thousands of Bitcoin holders who are already growing their holdings with our secure staking platform.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            size="lg"
            className="bg-white text-bitcoin hover:bg-gray-100 font-medium px-8"
          >
            Start Staking Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20 px-8"
          >
            Explore Features
          </Button>
        </div>
        <div className="mt-12 flex justify-center items-center space-x-4">
          <div className="flex items-center p-2 bg-white/10 backdrop-blur-sm rounded-lg">
            <span className="text-sm font-medium text-white mr-2">Limited Offer:</span>
            <span className="text-sm font-bold text-white">Stake 0.1 BTC, Get $10 Bonus</span>
          </div>
          <div className="h-6 border-l border-white/30"></div>
          <div className="flex items-center p-2 bg-white/10 backdrop-blur-sm rounded-lg">
            <span className="text-sm font-medium text-white mr-2">Refer a Friend:</span>
            <span className="text-sm font-bold text-white">Earn 10% of Their Rewards</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
