
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
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

          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-gray-400">Email</label>
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-[#1A2333] border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-400">Password</label>
              <Input 
                type="password" 
                placeholder="Enter your password"
                className="bg-[#1A2333] border-gray-700"
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-gray-400">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-500">Forgot password?</Link>
            </div>

            <Button className="w-full bg-blue-500">Sign In</Button>

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
