
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Clock, ChevronRight, AlertCircle, CheckCircle, XCircle, ArrowUpRight } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { getUserTransactions } from "@/lib/api";
import type { TransactionHistory } from "@/types/database";

const TransactionHistoryComponent = () => {
  const [transactions, setTransactions] = useState<TransactionHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!user) return;
      
      try {
        setLoading(true);
        const userTransactions = await getUserTransactions(user.id);
        setTransactions(userTransactions);
      } catch (error) {
        console.error("Failed to fetch transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [user]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'failed':
        return <XCircle size={16} className="text-red-500" />;
      case 'pending':
      default:
        return <Clock size={16} className="text-yellow-500" />;
    }
  };

  const getTransactionTypeIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowUpRight size={16} className="text-green-500 transform rotate-180" />;
      case 'withdrawal':
        return <ArrowUpRight size={16} className="text-red-500" />;
      default:
        return <ArrowUpRight size={16} className="text-blue-500" />;
    }
  };

  if (loading) {
    return (
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Clock size={20} className="text-gray-400 mr-3" />
            <div>
              <h2 className="text-xl font-bold text-white">Transaction History</h2>
              <p className="text-sm text-gray-400">Loading your transaction history...</p>
            </div>
          </div>
        </div>
        
        <Card className="border-0 bg-[#0A162B] overflow-hidden p-8">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </Card>
      </div>
    );
  }

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
            <Table>
              <TableHeader className="bg-gray-900/50">
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">Type</TableHead>
                  <TableHead className="text-gray-400">Amount</TableHead>
                  <TableHead className="text-gray-400">Status</TableHead>
                  <TableHead className="text-gray-400">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} className="border-gray-800">
                    <TableCell>
                      <div className="flex items-center">
                        <span className="mr-2">
                          {getTransactionTypeIcon(transaction.transaction_type)}
                        </span>
                        <span className="capitalize text-white">
                          {transaction.transaction_type}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className={`font-mono ${
                        transaction.transaction_type === 'deposit' ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {transaction.transaction_type === 'deposit' ? '+' : '-'}
                        ${parseFloat(transaction.amount.toString()).toFixed(2)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <span className="mr-2">
                          {getStatusIcon(transaction.status)}
                        </span>
                        <span className="capitalize text-gray-300">
                          {transaction.status}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-400">
                      {new Date(transaction.created_at).toLocaleDateString()}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="bg-gray-800/50 rounded-full p-4 mb-4">
              <AlertCircle size={24} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No transactions found</h3>
            <p className="text-gray-400 max-w-md">
              Your transaction history will appear here after you make deposits or withdrawals
            </p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default TransactionHistoryComponent;
