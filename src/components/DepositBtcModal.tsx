
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
import { Copy, Barcode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

type DepositBtcModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DepositBtcModal = ({ isOpen, onClose }: DepositBtcModalProps) => {
  const [amount, setAmount] = useState<string>("");
  const [btcAmount, setBtcAmount] = useState<string>("0.00000000");
  const [walletAddress, setWalletAddress] = useState<string>("bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh");
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

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address copied!",
      description: "BTC wallet address copied to clipboard",
    });
  };

  const handleDeposit = () => {
    // Here you would handle the actual deposit logic
    toast({
      title: "BTC Deposited",
      description: "Wait for Deposit confirmation.",
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-[#0A1E3B] text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-white">Deposit BTC</DialogTitle>
          <DialogDescription className="text-gray-400">
            Scan the QR code or copy the wallet address to deposit BTC.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-6">
          {/* QR Code */}
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 bg-white p-2 mb-3">
              <div className="flex items-center justify-center h-full">
                <Barcode className="w-32 h-32 text-black" />
                <span className="text-xs text-gray-500">QR code placeholder</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">Scan this QR code with your wallet app</p>
          </div>

          {/* Wallet Address */}
          <div className="space-y-2">
            <Label htmlFor="wallet-address" className="text-gray-300">BTC Wallet Address</Label>
            <div className="flex items-center bg-gray-900 rounded-md border border-gray-800">
              <Input
                id="wallet-address"
                value={walletAddress}
                readOnly
                className="border-0 bg-transparent text-white focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="text-blue-400 hover:text-blue-300 hover:bg-transparent"
                onClick={handleCopyAddress}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Amount Input */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-gray-300">Amount (USD)</Label>
            <Input
              id="amount"
              placeholder="Enter amount in USD"
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
            disabled={!amount || parseFloat(amount) <= 0}
            onClick={handleDeposit}
          >
            Deposit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DepositBtcModal;
