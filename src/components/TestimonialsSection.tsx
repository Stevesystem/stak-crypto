
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Earning passive Bitcoin has never been easier! I've been staking for 6 months and the daily rewards are incredibly consistent.",
    author: "Michael Chen",
    role: "Software Engineer",
    avatar: "MC"
  },
  {
    quote: "As a long-term Bitcoin holder, I was looking for a way to make my BTC work for me. The 6.5% APY and security features really stand out.",
    author: "Sarah Johnson",
    role: "Financial Analyst",
    avatar: "SJ"
  },
  {
    quote: "The instant withdrawals are a game-changer. Most platforms lock your BTC, but here I have complete liquidity while still earning rewards.",
    author: "Alex Rodriguez",
    role: "Crypto Investor",
    avatar: "AR"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Join thousands of Bitcoin holders who are already earning passive income through our platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md flex flex-col"
            >
              <div className="flex-1">
                <div className="text-4xl text-bitcoin opacity-30 mb-4">"</div>
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-4">
                <Avatar className="h-10 w-10 mr-4">
                  <AvatarImage src="" alt={testimonial.author} />
                  <AvatarFallback className="bg-bitcoin text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-navy">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
