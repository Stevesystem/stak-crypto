
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    walletAddress: "",
    terms: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.terms) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please accept the terms and conditions"
      });
      return;
    }
    
    setLoading(true);
    
    try {
      console.log("Attempting signup with:", formData.email);
      
      // Sign up the user with auto-confirm enabled
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            username: formData.username,
            wallet_address: formData.walletAddress
          },
          emailRedirectTo: window.location.origin + '/dashboard'
        }
      });
      
      if (error) throw error;
      
      console.log("Auth successful:", data);

      if (data.session) {
        // If we have a session, user was auto-confirmed
        toast({
          title: "Success!",
          description: "Account created successfully. You're now logged in!"
        });
        navigate("/dashboard");
      } else {
        // If no session, might still need confirmation
        toast({
          title: "Success!",
          description: "Account created. You can now sign in."
        });
        navigate("/signin");
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to create account. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#00030B]">
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-500">STAK</div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About Us</Link>
          <Button className="bg-blue-500">Start Staking</Button>
        </div>
      </nav>

      <div className="flex items-center justify-center mt-20">
        <div className="w-full max-w-md p-8 bg-[#0B1120] rounded-2xl">
          <h1 className="text-2xl font-bold text-white text-center">Create an account</h1>
          <p className="text-gray-400 text-center mb-6">Join STAK and start your staking journey</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-gray-400">Username</label>
              <Input 
                type="text" 
                placeholder="Choose a username"
                className="bg-[#1A2333] border-gray-700 text-white"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400">Email</label>
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-[#1A2333] border-gray-700 text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400">Password</label>
              <Input 
                type="password" 
                placeholder="Create a password"
                className="bg-[#1A2333] border-gray-700 text-white"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400">BTC Wallet Address</label>
              <Input 
                type="text" 
                placeholder="Enter your BTC wallet address"
                className="bg-[#1A2333] border-gray-700 text-white"
                value={formData.walletAddress}
                onChange={(e) => setFormData({ ...formData, walletAddress: e.target.value })}
                required
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox 
                id="terms" 
                checked={formData.terms}
                onCheckedChange={(checked) => setFormData({ ...formData, terms: checked as boolean })}
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the <Link to="/terms" className="text-blue-500">Terms of Service</Link> and{" "}
                <Link to="/privacy" className="text-blue-500">Privacy Policy</Link>
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-500"
              disabled={loading}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>

            <p className="text-center text-gray-400">
              Already have an account? <Link to="/signin" className="text-blue-500">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
