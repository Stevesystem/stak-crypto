
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ArrowUp, CreditCard, DollarSign } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { getUserProfile } from "@/lib/api";

const WalletOverview = () => {
  const [balance, setBalance] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [cryptoPrices, setCryptoPrices] = useState({
    bitcoin: {
      price: 0,
      change: 0,
    },
    cardano: {
      price: 0,
      change: 0,
    }
  });
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const profile = await getUserProfile();
          // Safely handle potentially undefined properties
          setBalance(profile.wallet_balance || 0);
          setEarnings(profile.total_earnings || 0);
        } catch (error) {
          console.error("Failed to fetch wallet data:", error);
        }
      }
    };
    
    fetchUserData();
  }, [user]);
  
  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,cardano&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch cryptocurrency prices");
        }
        
        const data = await response.json();
        
        // Extract price data for Bitcoin and Cardano
        const bitcoinData = data.find(coin => coin.id === "bitcoin");
        const cardanoData = data.find(coin => coin.id === "cardano");
        
        setCryptoPrices({
          bitcoin: {
            price: bitcoinData?.current_price || 0,
            change: bitcoinData?.price_change_percentage_24h || 0,
          },
          cardano: {
            price: cardanoData?.current_price || 0,
            change: cardanoData?.price_change_percentage_24h || 0,
          }
        });
      } catch (error) {
        console.error("Error fetching cryptocurrency prices:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCryptoPrices();
    
    // Refresh prices every 5 minutes
    const intervalId = setInterval(fetchCryptoPrices, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  // Format balance to BTC with 8 decimal places
  const formatBtcAmount = (amount: number) => {
    return amount.toFixed(8);
  };
  
  // Format USD amount with 2 decimal places
  const formatUsdAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Wallet Balance Card */}
      <Card className="p-6 bg-[#0A1E3B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600/20 p-2 rounded mr-2">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Wallet Balance</p>
              <p className="text-gray-400 text-xs">{formatUsdAmount(balance)}</p>
            </div>
          </div>
          
          <div className="mt-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-mono">{formatBtcAmount(balance / (cryptoPrices.bitcoin.price || 1))} BTC</h3>
          </div>
        </div>
      </Card>
      
      {/* Total Earnings Card */}
      <Card className="p-6 bg-[#0A2E2B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-green-600/20 p-2 rounded mr-2">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Earnings</p>
            </div>
          </div>
          
          <div className="mt-2 mb-2">
            <h3 className="text-2xl md:text-3xl font-mono">{formatUsdAmount(earnings)}</h3>
          </div>
          
          <div className="mt-2">
            <div className="flex items-center">
              <ArrowUp className="h-3 w-3 text-green-400 mr-1" />
              <span className="text-xs text-green-400">+12.5% this month</span>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Live Prices Card */}
      <Card className="p-6 bg-[#0A1E3B] border-0 text-white">
        <div className="flex flex-col h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600/20 p-2 rounded mr-2">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Live Prices</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="/lovable-uploads/7066c7d4-f90b-46b4-b31e-d7a96e2a4e55.png" alt="Bitcoin" className="h-5 w-5 mr-2" />
                <div>
                  <p className="font-medium">Bitcoin</p>
                  <p className="text-xs text-gray-400">BTC</p>
                </div>
              </div>
              <div className="text-right">
                {isLoading ? (
                  <div className="flex flex-col space-y-1">
                    <div className="h-4 w-20 bg-gray-800 animate-pulse rounded"></div>
                    <div className="h-3 w-12 bg-gray-800 animate-pulse rounded self-end"></div>
                  </div>
                ) : (
                  <>
                    <p className="font-medium">{formatUsdAmount(cryptoPrices.bitcoin.price)}</p>
                    <p className={`text-xs ${cryptoPrices.bitcoin.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {cryptoPrices.bitcoin.change >= 0 ? '+' : ''}{cryptoPrices.bitcoin.change.toFixed(2)}%
                    </p>
                  </>
                )}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-5 w-5 mr-2">
                  <img src="/lovable-uploads/935cdec7-3d7f-4bb5-a2be-48c921527778.png" alt="Cardano" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Cardano</p>
                  <p className="text-xs text-gray-400">ADA</p>
                </div>
              </div>
              <div className="text-right">
                {isLoading ? (
                  <div className="flex flex-col space-y-1">
                    <div className="h-4 w-20 bg-gray-800 animate-pulse rounded"></div>
                    <div className="h-3 w-12 bg-gray-800 animate-pulse rounded self-end"></div>
                  </div>
                ) : (
                  <>
                    <p className="font-medium">{formatUsdAmount(cryptoPrices.cardano.price)}</p>
                    <p className={`text-xs ${cryptoPrices.cardano.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {cryptoPrices.cardano.change >= 0 ? '+' : ''}{cryptoPrices.cardano.change.toFixed(2)}%
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WalletOverview;
