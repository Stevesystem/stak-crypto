
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How is BTC staking secure?",
    answer: "We use institutional-grade security measures including 100% cold storage, multi-signature wallets requiring multiple authorizations, and regular security audits by trusted third parties. Your Bitcoin never leaves our secure infrastructure during the staking process."
  },
  {
    question: "What's the minimum stake amount?",
    answer: "The minimum amount to start staking is 0.01 BTC. There is no maximum limit, and our platform is designed to handle both small and large amounts efficiently."
  },
  {
    question: "How are rewards paid?",
    answer: "Rewards are calculated daily and distributed directly to your account in Bitcoin. You can view your accumulated rewards in real-time from your dashboard and withdraw them at any time."
  },
  {
    question: "Are there any fees for staking?",
    answer: "We charge a small performance fee of 10% on the rewards generated. There are no deposit fees, and withdrawal fees are limited to the standard Bitcoin network transaction fees."
  },
  {
    question: "Can I withdraw my Bitcoin at any time?",
    answer: "Yes, one of our key features is that there are no lock-up periods. You can withdraw your Bitcoin at any time without penalties or waiting periods."
  },
  {
    question: "How is the APY calculated?",
    answer: "The APY (Annual Percentage Yield) is calculated based on the returns generated from various Bitcoin yield strategies, including lending to institutional borrowers, providing liquidity to market makers, and other secure yield-generating activities."
  }
];

const FAQSection = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700">
            Get answers to the most common questions about our Bitcoin staking platform.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-navy py-4 hover:text-bitcoin">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-700">Still have questions?</p>
          <a 
            href="#" 
            className="text-bitcoin hover:text-bitcoin-dark font-medium underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
