
import { Shield } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      title: "100% Cold Storage",
      description: "All Bitcoin assets are stored in offline, multi-signature cold wallets."
    },
    {
      title: "Multi-Signature Wallets",
      description: "Requiring multiple approvals for any transaction provides another layer of security."
    },
    {
      title: "Regular Security Audits",
      description: "Our systems undergo regular penetration testing by trusted third-party security firms."
    },
    {
      title: "Insurance Coverage",
      description: "Assets are protected by comprehensive insurance against theft and fraud."
    }
  ];
  
  const partners = [
    { name: "Ledger", image: "https://cryptologos.cc/logos/ledger-ledg-logo.png?v=025" },
    { name: "Trezor", image: "https://cryptologos.cc/logos/trezor-logo.png?v=025" },
    { name: "Blockstream", image: "https://cryptologos.cc/logos/blockstream-logo.png?v=025" },
    { name: "Chainlink", image: "https://cryptologos.cc/logos/chainlink-link-logo.png?v=025" }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block p-3 rounded-full bg-bitcoin/10 mb-4">
            <Shield size={32} className="text-bitcoin" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Security & Trust</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Your Bitcoin's safety is our highest priority. We employ industry-leading security measures to protect your assets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-navy text-center mb-8">Our Trusted Partners</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center justify-center bg-white rounded-lg p-6 shadow-sm"
              >
                <div className="h-12 w-24 flex items-center justify-center mb-4">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" 
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySection;
