
import { useState } from "react";
import Navbar from "@/components/Navbar";
import WalletOverview from "@/components/WalletOverview";
import TransactionHistory from "@/components/TransactionHistory";
import StakingPanel from "@/components/StakingPanel";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUp } from "lucide-react";
import DepositBtcModal from "@/components/DepositBtcModal";
import WithdrawBtcModal from "@/components/WithdrawBtcModal";

const Dashboard = () => {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#00030B]">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <div className="bg-primary/10 p-2 rounded mr-3">
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
                className="text-primary"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 8h6M9 12h6M9 16h6" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          </div>
          
          <WalletOverview />
          
          <div className="mt-6 flex gap-3">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              onClick={() => setIsDepositModalOpen(true)}
            >
              <ArrowDown className="mr-2 h-4 w-4" />
              Deposit BTC
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-700 hover:bg-gray-800 text-white px-6"
              onClick={() => setIsWithdrawModalOpen(true)}
            >
              <ArrowUp className="mr-2 h-4 w-4" />
              Withdraw BTC
            </Button>
          </div>
          
          <TransactionHistory />
          
          <StakingPanel />
          
          {/* Modals */}
          <DepositBtcModal 
            isOpen={isDepositModalOpen} 
            onClose={() => setIsDepositModalOpen(false)} 
          />
          
          <WithdrawBtcModal 
            isOpen={isWithdrawModalOpen} 
            onClose={() => setIsWithdrawModalOpen(false)} 
          />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
