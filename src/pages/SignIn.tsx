
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

const SignIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/dashboard";
  
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log("Attempting login with:", formData.email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });
      
      if (error) {
        // Check if the error is about unconfirmed email
        if (error.message?.includes("Email not confirmed")) {
          // Try to resend confirmation email
          await supabase.auth.resend({
            type: 'signup',
            email: formData.email,
            options: {
              emailRedirectTo: window.location.origin + '/dashboard'
            }
          });
          
          throw new Error("Your email is not confirmed. We've sent a new confirmation email.");
        }
        throw error;
      }

      console.log("Login successful:", data);
      toast({
        title: "Success!",
        description: "You have successfully signed in"
      });
      navigate(from);
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message || "Failed to sign in. Please check your credentials."
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
          <h1 className="text-2xl font-bold text-white text-center">Welcome back</h1>
          <p className="text-gray-400 text-center mb-6">Sign in to your STAK account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                placeholder="Enter your password"
                className="bg-[#1A2333] border-gray-700 text-white"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="remember" 
                  checked={formData.rememberMe}
                  onCheckedChange={(checked) => setFormData({ ...formData, rememberMe: checked as boolean })}
                />
                <label htmlFor="remember" className="text-sm text-gray-400">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-500">Forgot password?</Link>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-500"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            <p className="text-center text-gray-400">
              Don't have an account? <Link to="/signup" className="text-blue-500">Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
