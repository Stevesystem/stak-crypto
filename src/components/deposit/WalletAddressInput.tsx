
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface WalletAddressInputProps {
  walletAddress: string;
}

const WalletAddressInput: React.FC<WalletAddressInputProps> = ({ walletAddress }) => {
  const { toast } = useToast();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address copied!",
      description: "BTC wallet address copied to clipboard",
    });
  };

  return (
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
  );
};

export default WalletAddressInput;
