
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="mr-2 text-primary text-2xl">⟁</div>
              <span className="font-bold text-xl text-white">STAK</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-primary font-medium transition-colors">
              About
            </Link>
            <Link to="/dashboard" className="text-gray-300 hover:text-primary font-medium transition-colors">
              Dashboard
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-5">
              Start Staking Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-primary focus:outline-none"
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
          <div className="md:hidden py-4 animate-fade-in border-t border-gray-800">
            <Link to="/" className="block py-2 text-gray-300 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-300 hover:text-primary font-medium">
              About
            </Link>
            <Link to="/dashboard" className="block py-2 text-gray-300 hover:text-primary font-medium">
              Dashboard
            </Link>
            <div className="pt-4">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Start Staking Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
