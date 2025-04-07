import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Bitcoin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const About = () => {
  const team = [{
    name: "Alex Morgan",
    role: "CEO & Founder",
    bio: "Former Bitcoin developer with 8+ years experience in blockchain technologies. Led security initiatives at top crypto exchanges.",
    avatar: "AM"
  }, {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Cryptography expert with background in cybersecurity. Previously built secure infrastructure for financial institutions.",
    avatar: "SC"
  }, {
    name: "Michael Richards",
    role: "Head of Security",
    bio: "Former security lead at major Bitcoin exchanges. Specializes in cold storage solutions and multi-signature implementations.",
    avatar: "MR"
  }, {
    name: "Jessica Kim",
    role: "Operations Director",
    bio: "10+ years in fintech operations. Expert in compliance and scaling financial services safely.",
    avatar: "JK"
  }];
  const securityMeasures = [{
    title: "100% Cold Storage",
    description: "All customer Bitcoin is stored in offline, air-gapped cold storage vaults with no exposure to online threats."
  }, {
    title: "Multi-Signature Technology",
    description: "Every transaction requires multiple independent approvals, eliminating single points of failure."
  }, {
    title: "Regular Audits",
    description: "Our security practices and Bitcoin reserves are regularly audited by trusted third-party firms."
  }, {
    title: "Advanced Encryption",
    description: "Military-grade encryption protects all sensitive data and communications within our platform."
  }];
  const partners = ["Bitcoin Magazine", "Wasabi Wallet", "Blockstream", "Lightning Labs", "Casa", "Ledger"];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <div className="py-20 text-white bg-inherit">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block p-3 rounded-full bg-bitcoin/20 mb-6">
              <Bitcoin size={32} className="text-bitcoin" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bitcoin STAK Crypto</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're on a mission to help Bitcoin holders grow their holdings through secure, transparent staking solutions.
            </p>
          </div>
        </div>
        
        {/* Our Story */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">Our Story</h2>
                <p className="text-lg mb-4 text-slate-50">Launched in 2022 by a team of Bitcoin advocates and security experts, Bitcoin Stak Crypto was born from a simple vision: to create a platform where anyone can earn passive income from their Bitcoin without compromising on security or liquidity.</p>
                <p className="text-lg mb-4 text-slate-50">We noticed that many existing yield platforms were either too complex for average users, had lengthy lock-up periods, or worse – took dangerous risks with customer funds. We built Bitcoin Stak Crypto to solve these problems.</p>
                <p className="text-lg text-slate-50">
                  Today, we're proud to serve thousands of Bitcoin holders worldwide, helping them earn consistent returns while maintaining full control of their assets.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-xl p-8 border-l-4 border-bitcoin bg-blue-900">
                  <h3 className="text-2xl font-bold mb-4 text-slate-50">Our Mission</h3>
                  <p className="text-xl italic text-slate-50">
                    "Empowering Bitcoin holders to grow their holdings with zero effort, maximum security, and complete peace of mind."
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="bg-navy rounded-lg p-6 text-white">
                    <h4 className="font-bold mb-2">$50M+</h4>
                    <p className="text-sm text-white/80">Bitcoin Assets Under Management</p>
                  </div>
                  <div className="bg-bitcoin rounded-lg p-6 text-white">
                    <h4 className="font-bold mb-2">15,000+</h4>
                    <p className="text-sm text-white/80">Active Users Worldwide</p>
                  </div>
                  <div className="bg-bitcoin rounded-lg p-6 text-white">
                    <h4 className="font-bold mb-2">350+ BTC</h4>
                    <p className="text-sm text-white/80">Rewards Distributed</p>
                  </div>
                  <div className="bg-navy rounded-lg p-6 text-white">
                    <h4 className="font-bold mb-2">100%</h4>
                    <p className="text-sm text-white/80">Clean Security Record</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="py-16 md:py-24 bg-inherit">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-50">Meet Our Team</h2>
              <p className="text-lg max-w-3xl mx-auto text-slate-50">
                Our leadership team brings decades of combined experience in Bitcoin, security, and financial technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => <div key={index} className="rounded-xl p-6 shadow-md flex flex-col items-center text-center bg-navy-light">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src="" alt={member.name} />
                    <AvatarFallback className="bg-bitcoin text-white text-xl">{member.avatar}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-slate-50">{member.name}</h3>
                  <p className="text-bitcoin font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-slate-50">{member.bio}</p>
                </div>)}
            </div>
          </div>
        </div>
        
        {/* Security Deep Dive */}
        <div className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block p-3 rounded-full mb-4 bg-[50] bg-zinc-50">
                <Shield size={32} className="text-navy" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Security Deep Dive</h2>
              <p className="text-lg max-w-3xl mx-auto text-slate-50">
                We've implemented institutional-grade security measures to ensure your Bitcoin remains safe at all times.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {securityMeasures.map((measure, index) => <div key={index} className="rounded-xl p-6 shadow-md border-l-4 border-bitcoin bg-navy-light">
                  <h3 className="text-xl font-bold mb-2 text-slate-50">{measure.title}</h3>
                  <p className="text-slate-50">{measure.description}</p>
                </div>)}
            </div>
            
            <div className="bg-navy rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Security Commitment</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p>No exposure to lending or risky DeFi protocols that could jeopardize your Bitcoin</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p>All yield-generating activities follow strict risk management protocols</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p>Comprehensive insurance coverage against theft and fraud</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-bitcoin flex items-center justify-center text-white font-bold mr-3 mt-1">✓</div>
                  <p>Transparent operations with regular proof-of-reserves audits</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Partners Section */}
        <div className="py-16 md:py-24 bg-inherit">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-50">Press & Partnerships</h2>
              <p className="text-lg max-w-3xl mx-auto text-slate-100">
                We're proud to work with the top organizations in the Bitcoin ecosystem.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner, index) => <div key={index} className="rounded-xl px-8 py-6 shadow-sm border border-gray-100 flex items-center justify-center min-w-[200px] bg-blue-950">
                  <span className="font-bold text-slate-50">{partner}</span>
                </div>)}
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="py-16 md:py-24 btc-gradient bg-inherit">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Grow Your Bitcoin?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of Bitcoin holders who are already earning passive income.
            </p>
            <Button size="lg" className="font-medium px-8 text-slate-50 bg-blue-700 hover:bg-blue-600">
              Start Earning Bitcoin →
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default About;