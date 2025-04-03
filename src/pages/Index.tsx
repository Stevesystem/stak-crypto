
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import HowItWorks from "@/components/HowItWorks";
import Calculator from "@/components/Calculator";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-16">
        <HeroSection />
        <div className="bg-card border-y border-gray-800 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl text-white font-bold mb-1">Total Value Locked</h3>
                <div className="text-3xl font-bold text-primary">$9.99B</div>
                <p className="text-sm text-gray-400">Updated: 1d ago</p>
              </div>
              <div className="h-16 w-px bg-gray-800 hidden md:block"></div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-card border-4 border-bitcoin orange-glow mx-auto mb-2">
                  <span className="text-2xl">₿</span>
                </div>
                <p className="text-sm text-gray-400">Bitcoin (BTC)</p>
                <p className="text-lg font-bold text-white">3.1%-7.5%</p>
                <p className="text-xs text-gray-500">Staking APY</p>
              </div>
              <div className="h-16 w-px bg-gray-800 hidden md:block"></div>
              <div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-400 mr-2">Audited by</span>
                  <div className="px-3 py-1.5 bg-gray-800 rounded-full flex items-center">
                    <span className="text-yellow-500 mr-1.5">🪙</span>
                    <span className="font-medium text-white">FrogCoin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HowItWorks />
        <FeatureSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
