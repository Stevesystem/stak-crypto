import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  const handleStartStaking = () => {
    navigate("/signin");
  };

  return (
    <div className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-blue-950/20 z-0"></div>
      <div className="absolute inset-0 space-dots opacity-30 z-0"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block p-3 rounded-full bg-blue-500/20 backdrop-blur-sm mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-text">
            Get Started with Your Crypto Investment Today
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of crypto holders who are already growing their assets with our secure staking platform.
          </p>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-medium px-8 blue-glow"
            onClick={handleStartStaking}
          >
            Start Staking Now
          </Button>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full">
            <div className="p-4 rounded-xl bg-card border border-gray-800 text-center">
              <div className="text-2xl font-bold text-white mb-1">$9.99B</div>
              <div className="text-sm text-gray-400">Total Value Locked</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-gray-800 text-center">
              <div className="text-2xl font-bold text-white mb-1">250K+</div>
              <div className="text-sm text-gray-400">Active Users</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-gray-800 text-center">
              <div className="text-2xl font-bold text-white mb-1">12+</div>
              <div className="text-sm text-gray-400">Supported Coins</div>
            </div>
            <div className="p-4 rounded-xl bg-card border border-gray-800 text-center">
              <div className="text-2xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-gray-400">Uptime</div>
            </div>
          </div>
          
          <div className="mt-12 flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Audited by</span>
              <div className="px-3 py-2 bg-card border border-gray-800 rounded-xl flex items-center">
                <span className="text-yellow-500 mr-1.5">🪙</span>
                <span className="font-medium text-white">FrogCoin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
