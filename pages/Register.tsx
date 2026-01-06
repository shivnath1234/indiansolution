import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { CanvasRevealEffect, MiniNavbar } from "@/components/ui/sign-in-flow-1";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
        setErrorMsg("Password must be at least 6 characters");
        return;
    }

    setIsLoading(true);

    // Simulate API registration
    setTimeout(() => {
      // Mock successful registration and login
      localStorage.setItem('morado_user', JSON.stringify({ 
          email: formData.email, 
          name: formData.name,
          id: `user-${Date.now()}` 
      }));
      window.dispatchEvent(new Event('storage'));
      
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className={cn("flex w-[100%] flex-col min-h-screen bg-black relative")}>
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0">
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-black"
              colors={[
                [147, 51, 234], // Purple
                [59, 130, 246], // Blue
              ]}
              dotSize={4}
              reverse={false}
            />
          </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.8)_0%,_transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-black to-transparent" />
      </div>
      
      {/* Content Layer */}
      <div className="relative z-10 flex flex-col flex-1">
        <MiniNavbar />

        <div className="flex flex-1 flex-col justify-center items-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-sm mt-24 px-4"
            >
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
                    <p className="text-white/60">Join the future of infrastructure</p>
                </div>

                <form onSubmit={handleRegister} className="space-y-4 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10">
                    <div>
                        <label className="text-sm text-white/60 mb-1 block">Full Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-white/60 mb-1 block">Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="john@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-white/60 mb-1 block">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div>
                        <label className="text-sm text-white/60 mb-1 block">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Creating Account..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-white/40 mt-6 text-sm">
                    Already have an account? <Link to="/login" className="text-white hover:underline">Log In</Link>
                </p>
            </motion.div>
        </div>
      </div>
    </div>
  );
}