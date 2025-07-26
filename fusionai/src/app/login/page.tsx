"use client";

import React, { useState } from "react";
import { FaEye, FaEyeLowVision, FaEnvelope, FaLock } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Email:", email);
      console.log("Password:", password);
      setLoading(false);
      alert("Login Successful!");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f8f6f1] to-[#dceefd] relative overflow-hidden">
      {/* Blurred Gradient Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/30 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full py-2 rounded-md outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md px-3">
              <FaLock className="text-gray-400 mr-2" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full py-2 rounded-md outline-none bg-transparent"
              />
              {showPassword ? (
                <FaEye
                  className="cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEyeLowVision
                  className="cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Social Login */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <button
              type="button"
              className="flex items-center justify-center border rounded-full py-2 px-4 cursor-pointer hover:bg-gray-50 transition"
            >
              <FcGoogle className="w-6 h-6 mr-2" /> Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center border rounded-full py-2 px-4 cursor-pointer hover:bg-gray-50 transition"
            >
              <FaApple className="w-6 h-6 mr-2" /> Apple
            </button>
          </div>
        </form>

        {/* Links */}
        <p className="text-center text-gray-500 text-sm mt-6">
          {"Don't have an account? "}
          <a href="/register" className="text-indigo-600 hover:underline">
            Sign Up
          </a>
        </p>
        <p className="text-center text-gray-500 text-sm mt-2">
          Forgot your password?{" "}
          <a href="/forgot-password" className="text-indigo-600 hover:underline">
            Reset Password
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
