
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const StakingPanel = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Staking Panel</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Card className="p-6 md:col-span-8 bg-white border">
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
            <div>
              <h3 className="text-lg font-bold text-navy mb-1">Your BTC Staking Position</h3>
              <p className="text-gray-500">Earn daily rewards with flexible withdrawals</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Active
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Staked BTC</p>
              <div className="flex items-center">
                <img src="/lovable-uploads/7066c7d4-f90b-46b4-b31e-d7a96e2a4e55.png" alt="Bitcoin" className="w-5 h-5 mr-2" />
                <span className="text-xl font-bold">0.8500</span>
              </div>
              <p className="text-xs text-gray-500">≈ $59,063.29 USD</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Current APY</p>
              <div className="text-xl font-bold text-green-600">6.5%</div>
              <p className="text-xs text-gray-500">Rates updated daily</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Pending Rewards</p>
              <div className="flex items-center">
                <img src="/lovable-uploads/7066c7d4-f90b-46b4-b31e-d7a96e2a4e55.png" alt="Bitcoin" className="w-5 h-5 mr-2" />
                <span className="text-xl font-bold">0.0015</span>
              </div>
              <p className="text-xs text-gray-500">≈ $104.22 USD</p>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-700">Daily Progress</p>
              <p className="text-sm text-gray-500">75%</p>
            </div>
            <Progress value={75} className="h-2 bg-gray-100" />
            <p className="text-xs text-gray-500 mt-1">Next reward in: 6 hours</p>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-sm text-gray-500">Started staking on April 1, 2023</p>
              <p className="text-sm text-green-600">151 days of continuous rewards</p>
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                className="border-bitcoin text-bitcoin hover:bg-bitcoin/10"
              >
                Adjust Stake
              </Button>
              <Button 
                className="bg-bitcoin hover:bg-bitcoin-dark text-white"
              >
                Claim Rewards
              </Button>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 md:col-span-4 bg-navy text-white">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          
          <div className="space-y-4">
            <Button 
              variant="secondary" 
              className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-none"
            >
              <div className="mr-3 p-2 rounded-full bg-white/20">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 19V6M5 12l7-7 7 7"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium">Deposit BTC</p>
                <p className="text-xs text-white/70">Add more to your stake</p>
              </div>
            </Button>
            
            <Button 
              variant="secondary" 
              className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-none"
            >
              <div className="mr-3 p-2 rounded-full bg-white/20">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M12 5v14M5 12l7 7 7-7"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium">Withdraw BTC</p>
                <p className="text-xs text-white/70">Instant withdrawals</p>
              </div>
            </Button>
            
            <Button 
              variant="secondary" 
              className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-none"
            >
              <div className="mr-3 p-2 rounded-full bg-white/20">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <path d="M10 14H2M2 14L6 10M2 14L6 18M14 10H22M22 10L18 6M22 10L18 14"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium">Transfer BTC</p>
                <p className="text-xs text-white/70">Send to other wallets</p>
              </div>
            </Button>
            
            <Button 
              variant="secondary" 
              className="w-full justify-start bg-white/10 hover:bg-white/20 text-white border-none"
            >
              <div className="mr-3 p-2 rounded-full bg-white/20">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                  <path d="M12 17h.01"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium">Get Support</p>
                <p className="text-xs text-white/70">Chat with our team</p>
              </div>
            </Button>
          </div>
          
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <div className="flex items-center mb-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-bitcoin mr-2"
              >
                <path d="M12 9v2m0 4h.01"/>
                <path d="M12 5c-.5 0-1.2.16-1.2 1.2v5.7c0 1.4-.8 2.1-1.8 2.1s-1.8-.7-1.8-2.1V4.2c0-1.1-.7-1.2-1.2-1.2s-1.2.1-1.2 1.2v7.5C4.8 16.4 7.8 19 12 19s7.2-2.6 7.2-7.3V4.2c0-1.1-.7-1.2-1.2-1.2s-1.2.1-1.2 1.2v7.7c0 1.4-.8 2.1-1.8 2.1s-1.8-.7-1.8-2.1V6.2c0-1.04-.7-1.2-1.2-1.2z"/>
              </svg>
              <span className="font-medium">Need help?</span>
            </div>
            <p className="text-xs text-white/80">Our support team is available 24/7 to assist with any questions.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StakingPanel;
