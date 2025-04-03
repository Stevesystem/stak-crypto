
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is staking?",
    answer: "Staking is the process of holding crypto in a wallet to support the operations of a blockchain network. In return, holders are rewarded with additional tokens."
  },
  {
    question: "Is staking risky?",
    answer: "Staking with STAK is low risk. While crypto assets may fluctuate in price, our staking protocols are designed to minimize risk while providing consistent rewards."
  },
  {
    question: "What are the benefits of crypto staking?",
    answer: "Staking lets you earn passive income on your idle crypto holdings. Benefits include regular rewards, minimal effort required, and contributing to network security."
  },
  {
    question: "How often will I get rewards?",
    answer: "Rewards are calculated daily and you can view your accumulated rewards in real-time from your dashboard. Payouts occur every 24 hours directly to your wallet."
  }
];

const FAQSection = () => {
  return (
    <div className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 glow-text">Staking Questions Answered</h2>
          <p className="text-lg text-gray-300">
            Learn how staking works, its benefits, and how to earn rewards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-gray-800 rounded-xl overflow-hidden p-5">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 blue-glow flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">?</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400 text-sm">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-800/30 p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-700 blue-glow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4M12 8h0"/>
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Can't find your question answered here?</h3>
          <p className="text-gray-300 mb-4">Get in touch with our support team for help.</p>
          <button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
