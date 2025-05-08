
import React from "react";

interface QrCodeDisplayProps {
  imageUrl: string;
}

const QrCodeDisplay: React.FC<QrCodeDisplayProps> = ({ imageUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-48 h-48 bg-white p-2 mb-3 flex items-center justify-center">
        <img 
          src={imageUrl} 
          alt="BTC Wallet QR Code" 
          className="max-w-full max-h-full"
        />
      </div>
      <p className="text-sm text-gray-400">Scan this QR code with your wallet app</p>
    </div>
  );
};

export default QrCodeDisplay;
