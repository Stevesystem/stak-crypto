
import { Bitcoin } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Create Account",
    description: "Sign up with email or connect your wallet in seconds with no KYC for small deposits.",
    icon: "👤",
  },
  {
    number: "2",
    title: "Deposit BTC",
    description: "Transfer Bitcoin to your secure wallet using QR code or direct wallet integration.",
    icon: "💰",
  },
  {
    number: "3",
    title: "Earn Daily Rewards",
    description: "Watch your Bitcoin grow with daily rewards. Track earnings and withdraw instantly.",
    icon: "📈",
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center mb-4">
            <Bitcoin size={24} className="text-bitcoin mr-2" />
            <span className="text-xl font-bold text-bitcoin">BTC: 6.5% APY</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">How It Works</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Stake Bitcoin. Earn Bitcoin. It's that simple.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="md:max-w-xs w-full flex flex-col items-center text-center"
            >
              <div className="relative mb-8">
                <div className="w-20 h-20 rounded-full bg-bitcoin flex items-center justify-center text-white text-4xl font-bold z-10 relative animate-float">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-bitcoin/30">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-bitcoin rounded-full"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
