
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletOverview from "@/components/WalletOverview";
import StakingPanel from "@/components/StakingPanel";
import TransactionHistory from "@/components/TransactionHistory";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bitcoin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  const [stakeAmount, setStakeAmount] = useState(0.1);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-navy mb-2">Dashboard</h1>
              <p className="text-gray-600">
                Manage your Bitcoin staking, track rewards, and monitor your earnings.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" className="border-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                </svg>
                Refer a Friend
              </Button>
              <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
                Stake BTC Now
              </Button>
            </div>
          </div>
          
          <div className="mb-10">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="stake">Stake BTC</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview">
                <div>
                  <WalletOverview />
                  <StakingPanel />
                  <TransactionHistory />
                </div>
              </TabsContent>
              
              <TabsContent value="stake">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card className="p-8 border">
                      <h2 className="text-2xl font-bold text-navy mb-6">Stake Your Bitcoin</h2>
                      <p className="text-gray-600 mb-8">
                        Start earning passive income by staking your Bitcoin. Current APY: <span className="font-bold text-green-600">6.5%</span>
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Enter BTC amount to stake
                          </label>
                          <div className="flex">
                            <div className="relative flex-grow">
                              <Input 
                                type="number" 
                                value={stakeAmount}
                                onChange={(e) => setStakeAmount(parseFloat(e.target.value) || 0)}
                                step="0.01"
                                min="0.01"
                                className="pr-16 border-gray-300 focus:border-bitcoin focus:ring-bitcoin"
                              />
                              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                                <Bitcoin size={16} className="text-bitcoin mr-1" />
                                <span className="text-gray-500">BTC</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Minimum stake: 0.01 BTC
                          </p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="text-sm text-gray-600 mb-2">Estimated daily earnings:</div>
                          <div className="flex items-center">
                            <Bitcoin size={16} className="text-bitcoin mr-1" />
                            <span className="font-bold text-lg">{((stakeAmount * 0.065) / 365).toFixed(8)}</span>
                            <span className="text-gray-500 text-sm ml-2">
                              ≈ ${((stakeAmount * 0.065 * 69420) / 365).toFixed(2)} USD/day
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-3">Summary</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Amount to stake:</span>
                              <span className="font-medium">{stakeAmount} BTC</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Annual yield (APY):</span>
                              <span className="font-medium text-green-600">6.5%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Yearly earnings:</span>
                              <span className="font-medium">{(stakeAmount * 0.065).toFixed(8)} BTC</span>
                            </div>
                            <div className="flex justify-between border-t pt-2 mt-2">
                              <span className="text-gray-600">Lock-up period:</span>
                              <span className="font-medium text-green-600">None</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white py-6 text-lg"
                        >
                          Confirm Stake
                        </Button>
                        
                        <p className="text-xs text-gray-500 text-center">
                          By staking your Bitcoin, you agree to our <a href="#" className="text-bitcoin hover:underline">Terms of Service</a>.
                        </p>
                      </div>
                    </Card>
                  </div>
                  
                  <div>
                    <Card className="p-6 border sticky top-24">
                      <h3 className="font-bold text-navy mb-4">Staking FAQ</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-navy mb-1">How does BTC staking work?</h4>
                          <p className="text-sm text-gray-600">
                            Our platform uses your Bitcoin in secure yield-generating strategies to produce returns without risking your principal.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-navy mb-1">When will I receive rewards?</h4>
                          <p className="text-sm text-gray-600">
                            Staking rewards are calculated daily and automatically added to your account.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-navy mb-1">Can I withdraw anytime?</h4>
                          <p className="text-sm text-gray-600">
                            Yes, there are no lock-up periods. You can withdraw your staked Bitcoin at any time.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-navy mb-1">Is staking safe?</h4>
                          <p className="text-sm text-gray-600">
                            Yes, we use enterprise-grade security measures including 100% cold storage for all Bitcoin assets.
                          </p>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-bitcoin/10 rounded-lg">
                        <div className="flex items-center mb-2">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                            className="text-bitcoin mr-2"
                          >
                            <circle cx="12" cy="12" r="10"/>
                            <line x1="12" y1="16" x2="12" y2="12"/>
                            <line x1="12" y1="8" x2="12.01" y2="8"/>
                          </svg>
                          <span className="font-medium">Need help?</span>
                        </div>
                        <p className="text-xs text-gray-600">
                          Our support team is available 24/7 to assist you with any questions about staking.
                        </p>
                        <Button 
                          variant="outline"
                          className="w-full mt-3 border-bitcoin text-bitcoin hover:bg-bitcoin/10"
                        >
                          Contact Support
                        </Button>
                      </div>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="security">
                <Card className="p-8 border">
                  <h2 className="text-2xl font-bold text-navy mb-6">Security Settings</h2>
                  <p className="text-gray-600 mb-8">
                    Manage your account security settings and preferences.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex justify-between items-center pb-6 border-b">
                      <div>
                        <h3 className="font-bold text-navy">Two-Factor Authentication (2FA)</h3>
                        <p className="text-gray-600">Add an extra layer of security to your account.</p>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700">Enabled</Button>
                    </div>
                    
                    <div className="flex justify-between items-center pb-6 border-b">
                      <div>
                        <h3 className="font-bold text-navy">Whitelist Withdrawal Addresses</h3>
                        <p className="text-gray-600">Only allow withdrawals to pre-approved Bitcoin addresses.</p>
                      </div>
                      <Button variant="outline">Manage</Button>
                    </div>
                    
                    <div className="flex justify-between items-center pb-6 border-b">
                      <div>
                        <h3 className="font-bold text-navy">Activity Notifications</h3>
                        <p className="text-gray-600">Get alerted about important account activities.</p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-navy">Session Management</h3>
                        <p className="text-gray-600">View and manage your active sessions.</p>
                      </div>
                      <Button variant="outline">View Sessions</Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="settings">
                <Card className="p-8 border">
                  <h2 className="text-2xl font-bold text-navy mb-6">Account Settings</h2>
                  <p className="text-gray-600 mb-8">
                    Update your profile information and preferences.
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <Input 
                        type="email" 
                        defaultValue="user@example.com"
                        className="border-gray-300 focus:border-bitcoin focus:ring-bitcoin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <Input 
                        type="text" 
                        defaultValue="John Doe"
                        className="border-gray-300 focus:border-bitcoin focus:ring-bitcoin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <Input 
                        type="password" 
                        value="••••••••"
                        className="border-gray-300 focus:border-bitcoin focus:ring-bitcoin"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Last updated 30 days ago
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Time Zone
                      </label>
                      <select 
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-bitcoin focus:ring-bitcoin"
                      >
                        <option>UTC (Coordinated Universal Time)</option>
                        <option>EST (Eastern Standard Time)</option>
                        <option>PST (Pacific Standard Time)</option>
                      </select>
                    </div>
                    
                    <div>
                      <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
