"use client";
import React, { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  Instagram,
  Github,
  Twitter,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

const GlassmorphismLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () => toast.success("Login successful.");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#1a1b26] via-[#2f3549] to-[#1a1b26] flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-[#9ece6a] to-[#7dcfff] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute -bottom-10 left-1/2 w-96 h-96 bg-gradient-to-r from-[#f7768e] to-[#bb9af7] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Login card */}
        {/* Login card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] rounded"></div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome Back
              </h1>
              <p className="text-white/70">Sign in to your account</p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Email field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="w-5 h-5 text-white/50" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="w-5 h-5 text-white/50" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-10 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {!showPassword ? (
                    <EyeOff className="w-5 h-5 text-white/50 hover:text-white transition-colors" />
                  ) : (
                    <Eye className="w-5 h-5 text-white/50 hover:text-white transition-colors" />
                  )}
                </button>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-cyan-500 bg-white/5 border-white/10 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-white/70">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-cyan-300 hover:text-lime-300 transition-colors"
                >
                  Forgot password?
                </a>
              </div>

              {/* Sign in button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  notify();
                }}
                className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 to-lime-400 hover:from-cyan-500 hover:to-lime-500 cursor-pointer text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-white/50">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social login buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                >
                  <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </button>
                <button
                  type="button"
                  className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                >
                  <Github className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </button>
                <button
                  type="button"
                  className="p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center group"
                >
                  <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                </button>
              </div>

              {/* Sign up link */}
              <p className="text-center text-white/70">
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-cyan-300 hover:text-lime-300 font-semibold transition-colors"
                >
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default GlassmorphismLogin;
