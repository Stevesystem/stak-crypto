
import { Card } from "@/components/ui/card";
import { Bitcoin, ArrowUp, CreditCard, DollarSign } from "lucide-react";

const WalletOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Wallet Balance Card */}
      <Card className="p-6 bg-[#0A1E3B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600/20 p-2 rounded mr-2">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Wallet Balance</p>
              <p className="text-gray-400 text-xs">$0.00</p>
            </div>
          </div>
          
          <div className="mt-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-mono">0.00000000 BTC</h3>
          </div>
        </div>
      </Card>
      
      {/* Total Earnings Card */}
      <Card className="p-6 bg-[#0A2E2B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-green-600/20 p-2 rounded mr-2">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Earnings</p>
            </div>
          </div>
          
          <div className="mt-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-mono">$0.00</h3>
          </div>
          
          <div className="mt-2">
            <div className="flex items-center">
              <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
              <span className="text-xs text-green-400">+12.5% this month</span>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Live Prices Card */}
      <Card className="p-6 bg-[#0A1E3B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600/20 p-2 rounded mr-2">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Live Prices</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Bitcoin className="h-5 w-5 mr-2 text-bitcoin" />
                <div>
                  <p className="font-medium">Bitcoin</p>
                  <p className="text-xs text-gray-400">BTC</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$81,811.00</p>
                <p className="text-xs text-red-400">-6.15%</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-5 w-5 mr-2 text-blue-500">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                    <path d="M12 2L2 12.5L12 16L22 12.5L12 2Z" fill="currentColor" />
                    <path d="M2 13.5L12 17L22 13.5L12 22L2 13.5Z" fill="currentColor" fillOpacity="0.7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Ethereum</p>
                  <p className="text-xs text-gray-400">ETH</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">$1,773.93</p>
                <p className="text-xs text-green-400">+6.95%</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WalletOverview;
