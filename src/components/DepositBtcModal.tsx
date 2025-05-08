
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
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { createTransaction } from "@/lib/api";
import QrCodeDisplay from "@/components/deposit/QrCodeDisplay";
import WalletAddressInput from "@/components/deposit/WalletAddressInput";
import AmountInput from "@/components/deposit/AmountInput";

type DepositBtcModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const DepositBtcModal = ({ isOpen, onClose }: DepositBtcModalProps) => {
  const [amount, setAmount] = useState<string>("");
  const [btcAmount, setBtcAmount] = useState<string>("0.00000000");
  const [walletAddress, setWalletAddress] = useState<string>("bc1q60l2gxf4zv03eht3rvw8f36vyfwmh9tfqmsygk");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { user, profile, session } = useAuth();

  // Calculate BTC amount from USD (using a mock exchange rate)
  useEffect(() => {
    const usdAmount = parseFloat(amount) || 0;
    // Mock exchange rate: 1 BTC = $83,000 USD
    const exchangeRate = 83000;
    const btc = usdAmount / exchangeRate;
    setBtcAmount(btc.toFixed(8));
  }, [amount]);

  const handleDeposit = async () => {
    try {
      // Use the auth context to verify authenticated state
      if (!user || !session) {
        toast({
          variant: "destructive",
          title: "Authentication Error",
          description: "You need to be logged in to make a deposit. Please sign in again.",
        });
        return;
      }

      setIsSubmitting(true);
      console.log("Deposit initiated by user:", user.id);
      
      // Use the profile from auth context
      let currentProfile = profile;
      
      if (!currentProfile) {
        toast({
          variant: "destructive",
          title: "Profile Error",
          description: "Unable to access your profile information. Please refresh and try again.",
        });
        return;
      }
      
      // Prepare transaction data
      const transaction = {
        user_id: user.id,
        username: currentProfile?.username || user.email?.split('@')[0] || '',
        email: currentProfile?.email || user.email || '',
        wallet_address: currentProfile?.wallet_address || '',
        transaction_type: 'deposit' as 'deposit' | 'withdrawal' | 'transfer',
        amount: parseFloat(amount),
        status: 'pending' as 'pending' | 'completed' | 'failed'
      };

      console.log("Submitting transaction:", transaction);
      await createTransaction(transaction);

      toast({
        title: "BTC Deposit Initiated",
        description: "Your deposit has been initiated. Wait for confirmation.",
      });
      
      onClose();
      setAmount("");
    } catch (error: any) {
      console.error("Deposit error:", error);
      toast({
        variant: "destructive",
        title: "Deposit Failed",
        description: error.message || "There was an error processing your deposit. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <QrCodeDisplay imageUrl="/lovable-uploads/b13f7e7a-8639-455d-8e4c-f19e63c4405b.png" />

          {/* Wallet Address */}
          <WalletAddressInput walletAddress={walletAddress} />

          {/* Amount Input */}
          <AmountInput 
            amount={amount} 
            btcAmount={btcAmount} 
            onAmountChange={setAmount} 
          />
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            disabled={!amount || parseFloat(amount) <= 0 || isSubmitting}
            onClick={handleDeposit}
          >
            {isSubmitting ? 'Processing...' : 'Deposit'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DepositBtcModal;
