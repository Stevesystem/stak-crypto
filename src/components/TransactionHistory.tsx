
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const transactions = [
  {
    id: "TX-8723",
    type: "Deposit",
    amount: "0.2500",
    status: "Completed",
    date: "2023-08-30",
    time: "15:45:22",
  },
  {
    id: "TX-8705",
    type: "Reward",
    amount: "0.0016",
    status: "Completed",
    date: "2023-08-30",
    time: "00:00:00",
  },
  {
    id: "TX-8692",
    type: "Reward",
    amount: "0.0016",
    status: "Completed",
    date: "2023-08-29",
    time: "00:00:00",
  },
  {
    id: "TX-8681",
    type: "Withdrawal",
    amount: "0.1500",
    status: "Completed",
    date: "2023-08-28",
    time: "10:23:57",
  },
  {
    id: "TX-8675",
    type: "Reward",
    amount: "0.0018",
    status: "Completed",
    date: "2023-08-28",
    time: "00:00:00",
  },
];

const TransactionHistory = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Transaction History</h2>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="text-sm">
            Filter
          </Button>
          <Button variant="outline" size="sm" className="text-sm">
            Export CSV
          </Button>
        </div>
      </div>
      
      <Card className="border overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount (BTC)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time (UTC)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((tx) => (
                <TableRow key={tx.id}>
                  <TableCell className="font-medium">{tx.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        tx.type === "Deposit" ? "bg-green-500" : 
                        tx.type === "Withdrawal" ? "bg-red-500" : "bg-bitcoin"
                      }`}></div>
                      {tx.type}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Bitcoin size={16} className="text-bitcoin mr-1" />
                      {tx.amount}
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {tx.status}
                    </span>
                  </TableCell>
                  <TableCell>{tx.date}</TableCell>
                  <TableCell>{tx.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="p-4 border-t bg-gray-50 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing 5 of 128 transactions
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TransactionHistory;
