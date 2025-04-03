
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

const WalletOverview = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Wallet Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-bitcoin/90 to-bitcoin-dark text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-white/70">Wallet Balance</p>
              <div className="flex items-center">
                <Bitcoin size={20} className="mr-1 mt-1" />
                <span className="text-2xl font-bold">1.2458</span>
              </div>
              <p className="text-sm">≈ $86,552.76 USD</p>
            </div>
            <div className="rounded-full bg-white/20 p-2">
              <Bitcoin size={24} />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none flex-1">
              Deposit
            </Button>
            <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none flex-1">
              Withdraw
            </Button>
          </div>
        </Card>
        
        <Card className="p-6 bg-gradient-to-br from-green-500 to-green-700 text-white">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-white/70">Total Earnings</p>
              <div className="flex items-center">
                <Bitcoin size={20} className="mr-1 mt-1" />
                <span className="text-2xl font-bold">0.0824</span>
              </div>
              <p className="text-sm">≈ $5,720.21 USD</p>
            </div>
            <div className="rounded-full bg-white/20 p-2">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-xs text-white/70">Today</p>
              <div className="flex items-center">
                <Bitcoin size={16} className="mr-1" />
                <span className="font-medium">0.0008</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-white/70">This Month</p>
              <div className="flex items-center">
                <Bitcoin size={16} className="mr-1" />
                <span className="font-medium">0.0243</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white border">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500">Live BTC Price</p>
              <p className="text-2xl font-bold text-gray-900">$69,486.23</p>
              <p className="text-sm text-green-600">+2.34% (24h)</p>
            </div>
            <Bitcoin size={24} className="text-bitcoin" />
          </div>
          
          <div className="h-12 bg-gray-100 rounded flex items-end">
            <div 
              className="h-8 bg-bitcoin rounded-sm" 
              style={{ width: '70%' }}
            />
            <div 
              className="h-10 bg-bitcoin-light rounded-sm" 
              style={{ width: '30%' }}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WalletOverview;
