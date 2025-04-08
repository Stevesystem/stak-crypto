
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { InfoIcon } from "lucide-react";

const StakingPanel = () => {
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [isStaking, setIsStaking] = useState<boolean>(false);
  
  // Mock staking data
  const totalStaked = 0.87;
  const stakingAPY = 12.5;
  const stakingRewards = 0.035;
  const unlockPeriod = 30; // days
  const progress = 60; // percentage of unlock period completed

  const handleStake = () => {
    // Handle staking logic here
    console.log("Staking:", stakeAmount);
    setIsStaking(true);
    // Reset input
    setStakeAmount("");
  };

  const handleUnstake = () => {
    // Handle unstaking logic here
    console.log("Unstaking");
    setIsStaking(false);
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Staking</h2>
      <Card className="bg-[#0A1E3B] border-gray-800 text-white p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Staking Info */}
          <div className="flex flex-col space-y-6">
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold">Staking Dashboard</h3>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <InfoIcon className="h-4 w-4 ml-2 text-gray-400 cursor-help" />
                  </HoverCardTrigger>
                  <HoverCardContent className="bg-gray-900 border-gray-700 text-white">
                    <p className="text-sm">
                      Stake your BTC to earn passive rewards. Staking requires a {unlockPeriod}-day lock period.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <p className="text-sm text-gray-400">Earn up to {stakingAPY}% APY by staking your BTC</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Staked</span>
                <span className="font-mono">{totalStaked} BTC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Current APY</span>
                <span className="text-green-400">{stakingAPY}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Earned Rewards</span>
                <span className="font-mono">{stakingRewards} BTC</span>
              </div>
            </div>

            {isStaking && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Unlock Progress</span>
                  <span>{progress}%</span>
                </div>
                <Progress value={progress} className="h-2 bg-gray-700" />
                <p className="text-xs text-gray-400">
                  Your staked BTC will be fully unlocked in {unlockPeriod - Math.floor(unlockPeriod * (progress / 100))} days
                </p>
              </div>
            )}
          </div>

          {/* Staking Actions */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-4">
            <h4 className="font-medium">{isStaking ? "Manage Staking" : "Stake BTC"}</h4>
            
            {!isStaking ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="stake-amount" className="text-gray-300">Amount to Stake (BTC)</Label>
                  <Input
                    id="stake-amount"
                    type="number"
                    placeholder="0.00000000"
                    value={stakeAmount}
                    onChange={(e) => setStakeAmount(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <p className="text-xs text-gray-400">
                    Minimum stake: 0.01 BTC. {unlockPeriod}-day lock period applies.
                  </p>
                </div>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={handleStake}
                  disabled={!stakeAmount || parseFloat(stakeAmount) <= 0}
                >
                  Stake Now
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded bg-blue-900/30 border border-blue-800/50 p-3">
                  <p className="text-sm text-blue-300">
                    Your staked BTC is currently locked until the end of the staking period.
                  </p>
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
                  onClick={handleUnstake}
                  disabled={progress < 100}
                >
                  {progress < 100 ? "Locked" : "Unstake BTC"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StakingPanel;
