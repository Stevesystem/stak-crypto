
import { Shield, CircleDollarSign, Clock, Users } from "lucide-react";

const features = [
  {
    title: "High Bitcoin Staking APY",
    description: "Earn up to 6.5% APY on your Bitcoin holdings, among the highest and most consistent rates available.",
    icon: CircleDollarSign,
    highlight: "Up to 6.5%",
  },
  {
    title: "No Lock-Up Periods",
    description: "Access your Bitcoin whenever you need it with no mandatory staking periods or withdrawal delays.",
    icon: Clock,
    highlight: "Withdraw Anytime",
  },
  {
    title: "Enterprise-Grade Security",
    description: "Your Bitcoin is protected by military-grade encryption, multi-signature wallets and cold storage.",
    icon: Shield,
    highlight: "100% Cold Storage",
  },
  {
    title: "24/7 Customer Support",
    description: "Our expert team is available around the clock to answer questions and provide assistance when needed.",
    icon: Users,
    highlight: "Always Available",
  }
];

const FeatureSection = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Why Choose Bitcoin Yield Forge</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We combine high yield with unmatched security to give you the best Bitcoin staking experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition-transform hover:transform hover:scale-105"
            >
              <div className="p-3 rounded-full bg-bitcoin/10 mb-6">
                <feature.icon size={32} className="text-bitcoin" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="mt-auto">
                <span className="inline-block px-3 py-1 bg-bitcoin/10 rounded-full text-bitcoin font-semibold text-sm">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
