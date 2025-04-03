
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ChevronRight, AlertCircle } from "lucide-react";

const TransactionHistory = () => {
  const transactions = []; // Empty array to represent no transactions

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Clock size={20} className="text-gray-400 mr-3" />
          <div>
            <h2 className="text-xl font-bold text-white">Transaction History</h2>
            <p className="text-sm text-gray-400">View all your deposit and withdrawal history</p>
          </div>
        </div>
        
        {transactions.length > 0 && (
          <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
            View All
            <ChevronRight size={18} className="ml-1" />
          </Button>
        )}
      </div>
      
      <Card className="border-0 bg-[#0A162B] overflow-hidden">
        {transactions.length > 0 ? (
          <div className="overflow-x-auto">
            {/* Table would go here if we had transactions */}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-800/50 rounded-full p-4 mb-4">
              <AlertCircle size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No transactions found</h3>
            <p className="text-gray-400 max-w-md">
              Your transaction history will appear here
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default TransactionHistory;
