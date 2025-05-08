
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AmountInputProps {
  amount: string;
  btcAmount: string;
  onAmountChange: (value: string) => void;
}

const AmountInput: React.FC<AmountInputProps> = ({ 
  amount, 
  btcAmount, 
  onAmountChange 
}) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="amount" className="text-gray-300">Amount (USD)</Label>
      <Input
        id="amount"
        placeholder="Enter amount in USD"
        type="number"
        min="0"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
        className="bg-gray-900 border-gray-800 text-white"
      />
      <div className="text-sm text-gray-400 flex justify-between">
        <span>BTC Equivalent:</span>
        <span className="font-mono">{btcAmount} BTC</span>
      </div>
    </div>
  );
};

export default AmountInput;
