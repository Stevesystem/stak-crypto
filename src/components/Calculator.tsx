
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Bitcoin } from "lucide-react";

const Calculator = () => {
  const [btcAmount, setBtcAmount] = useState(0.1);
  const [btcPrice, setBtcPrice] = useState(69420); // Mock BTC price
  const [apy, setApy] = useState(6.5);
  
  // Calculate earnings
  const dailyEarnings = (btcAmount * (apy / 100)) / 365;
  const monthlyEarnings = dailyEarnings * 30;
  const yearlyEarnings = btcAmount * (apy / 100);
  
  const handleSliderChange = (value: number[]) => {
    setBtcAmount(value[0]);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setBtcAmount(value);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Bitcoin Rewards Calculator</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See how much passive income you can earn by staking your Bitcoin with us.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-navy mb-6">Calculate Your Earnings</h3>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Bitcoin Amount
                </label>
                <div className="flex items-center space-x-4">
                  <Bitcoin size={20} className="text-bitcoin" />
                  <Input
                    type="number"
                    value={btcAmount}
                    onChange={handleInputChange}
                    step="0.01"
                    min="0.001"
                    className="border-gray-300 focus:ring-bitcoin focus:border-bitcoin"
                  />
                  <span className="text-sm text-gray-500">BTC</span>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Select Amount</span>
                  <span className="text-bitcoin">{btcAmount} BTC</span>
                </label>
                <Slider
                  defaultValue={[0.1]}
                  max={10}
                  step={0.01}
                  value={[btcAmount]}
                  onValueChange={handleSliderChange}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0.001 BTC</span>
                  <span>10 BTC</span>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Current APY:</span>
                  <span className="text-lg font-bold text-green-600">{apy}%</span>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">BTC Price:</span>
                  <span className="text-lg font-bold text-gray-900">${btcPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-navy p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-8">Your Estimated Rewards</h3>
              
              <div className="space-y-6">
                <div className="bg-navy-light rounded-lg p-6">
                  <div className="text-gray-300 mb-2">Daily Rewards</div>
                  <div className="flex items-center">
                    <Bitcoin size={20} className="text-bitcoin mr-2" />
                    <span className="text-2xl font-bold">{dailyEarnings.toFixed(8)}</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    ≈ ${(dailyEarnings * btcPrice).toFixed(2)}
                  </div>
                </div>
                
                <div className="bg-navy-light rounded-lg p-6">
                  <div className="text-gray-300 mb-2">Monthly Rewards</div>
                  <div className="flex items-center">
                    <Bitcoin size={20} className="text-bitcoin mr-2" />
                    <span className="text-2xl font-bold">{monthlyEarnings.toFixed(8)}</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    ≈ ${(monthlyEarnings * btcPrice).toFixed(2)}
                  </div>
                </div>
                
                <div className="bg-navy-light rounded-lg p-6">
                  <div className="text-gray-300 mb-2">Yearly Rewards</div>
                  <div className="flex items-center">
                    <Bitcoin size={20} className="text-bitcoin mr-2" />
                    <span className="text-2xl font-bold">{yearlyEarnings.toFixed(8)}</span>
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    ≈ ${(yearlyEarnings * btcPrice).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>Estimated rewards are calculated based on the current APY rate of {apy}% and are subject to change.</p>
          <p>Past performance is not indicative of future results.</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
