
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Bitcoin size={28} className="text-bitcoin mr-2 animate-spin-slow" />
              <span className="font-bold text-xl text-navy">Bitcoin Yield Forge</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy hover:text-bitcoin font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-navy hover:text-bitcoin font-medium transition-colors">
              About
            </Link>
            <Link to="/dashboard" className="text-navy hover:text-bitcoin font-medium transition-colors">
              Dashboard
            </Link>
            <Button variant="outline" className="border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
              Log In
            </Button>
            <Button className="bg-bitcoin hover:bg-bitcoin-dark text-white">
              Start Staking
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-navy hover:text-bitcoin focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <Link to="/" className="block py-2 text-navy hover:text-bitcoin font-medium">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-navy hover:text-bitcoin font-medium">
              About
            </Link>
            <Link to="/dashboard" className="block py-2 text-navy hover:text-bitcoin font-medium">
              Dashboard
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full border-bitcoin text-bitcoin hover:bg-bitcoin hover:text-white">
                Log In
              </Button>
              <Button className="w-full bg-bitcoin hover:bg-bitcoin-dark text-white">
                Start Staking
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
