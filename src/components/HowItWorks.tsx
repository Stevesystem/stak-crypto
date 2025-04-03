
const steps = [
  {
    number: "1",
    title: "Choose Your Coin",
    description: "Choose the cryptocurrencies you want to stake for rewards.",
    icon: "🔵",
  },
  {
    number: "2",
    title: "Stake Your Crypto",
    description: "Lock in your assets in secure wallets to earn passive income.",
    icon: "🟣",
  },
  {
    number: "3",
    title: "Your Rewards Grow",
    description: "Watch your investments grow with daily compounding rewards.",
    icon: "🔷",
  },
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Getting Started Is Easy</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Select your coin, stake instantly, watch your rewards grow.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-around space-y-12 md:space-y-0 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="md:max-w-xs w-full flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${index === 0 ? 'blue-glow bg-blue-500' : index === 1 ? 'purple-glow bg-purple-500' : 'green-glow bg-teal-500'}`}>
                <span className="text-2xl">{step.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute transform translate-x-32 translate-y-8">
                  <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M99.0607 13.0607C99.6464 12.4749 99.6464 11.5251 99.0607 10.9393L89.5147 1.3934C88.9289 0.80761 87.9792 0.80761 87.3934 1.3934C86.8076 1.97918 86.8076 2.92893 87.3934 3.51472L95.8787 12L87.3934 20.4853C86.8076 21.0711 86.8076 22.0208 87.3934 22.6066C87.9792 23.1924 88.9289 23.1924 89.5147 22.6066L99.0607 13.0607ZM0 13.5H98V10.5H0V13.5Z" fill="url(#paint0_linear_1_123)"/>
                    <defs>
                      <linearGradient id="paint0_linear_1_123" x1="0" y1="12" x2="98" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" stopOpacity="0.8"/>
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-1/2 bottom-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 top-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
    </div>
  );
};

export default HowItWorks;
