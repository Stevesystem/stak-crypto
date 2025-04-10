
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

type WithdrawBtcModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const WithdrawBtcModal = ({ isOpen, onClose }: WithdrawBtcModalProps) => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [btcAmount, setBtcAmount] = useState<string>("0.00000000");
  const { toast } = useToast();
  const { profile } = useAuth();
  
  // Calculate BTC amount from USD (using a mock exchange rate)
  useEffect(() => {
    const usdAmount = parseFloat(amount) || 0;
    // Mock exchange rate: 1 BTC = $83,000 USD
    const exchangeRate = 83000;
    const btc = usdAmount / exchangeRate;
    setBtcAmount(btc.toFixed(8));
  }, [amount]);

  const handleSubmit = () => {
    // Here would be the logic to submit the withdrawal request
    toast({
      title: "Withdraw request accepted",
      description: "Withdraw request is accepted and in process, kindly check your wallet balance to confirm the deposit.",
    });
    onClose();
  };

  const isFormValid = walletAddress.trim() !== "" && 
                      amount.trim() !== "" && 
                      !isNaN(parseFloat(amount)) && 
                      parseFloat(amount) > 0;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-[#0A1E3B] text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Withdraw BTC</DialogTitle>
          <DialogDescription className="text-gray-400">
            Enter your wallet address and the amount you wish to withdraw.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          {/* Destination Wallet Address */}
          <div className="space-y-2">
            <Label htmlFor="destination-address" className="text-gray-300">Destination BTC Address</Label>
            <Input
              id="destination-address"
              placeholder="Enter your BTC wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="bg-gray-900 border-gray-800 text-white"
            />
          </div>

          {/* Amount Input (USD) */}
          <div className="space-y-2">
            <Label htmlFor="withdraw-amount-usd" className="text-gray-300">Amount (USD)</Label>
            <Input
              id="withdraw-amount-usd"
              placeholder="0.00"
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-900 border-gray-800 text-white"
            />
            <div className="text-sm text-gray-400 flex justify-between">
              <span>BTC Equivalent:</span>
              <span className="font-mono">{btcAmount} BTC</span>
            </div>
          </div>

          {/* Fee Information */}
          <div className="rounded-md bg-gray-900/50 p-3 text-sm">
            <p className="text-gray-300 font-medium mb-1">Transaction Fee</p>
            <p className="text-gray-400">
              A network fee of 0.00001 BTC will be deducted from your withdrawal amount.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
          >
            Cancel
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            Withdraw Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawBtcModal;
