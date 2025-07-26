"use client";

import React, { useState } from "react";
import { FaEye, FaEyeLowVision } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Password:", password);
      setLoading(false);
      alert("Registration Successful!");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f8f6f1] to-[#dceefd] relative overflow-hidden">
      {/* Blurred Gradient Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/30 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md pr-2">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 rounded-md outline-none"
              />
              {showPassword ? (
                <FaEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" />
              ) : (
                <FaEyeLowVision onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" />
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-md pr-2">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
                className="w-full px-4 py-2 rounded-md outline-none"
              />
              {showConfirmPassword ? (
                <FaEye onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="cursor-pointer" />
              ) : (
                <FaEyeLowVision onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="cursor-pointer" />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {/* Social Login */}
          <div className="flex w-full items-center justify-center gap-4 mt-4">
            <div className="flex items-center justify-center border rounded-full py-2 px-4 cursor-pointer hover:bg-gray-50 transition">
              <FcGoogle className="w-6 h-6 mr-2" /> Google
            </div>
            <div className="flex items-center justify-center border rounded-full py-2 px-4 cursor-pointer hover:bg-gray-50 transition">
              <FaApple className="w-6 h-6 mr-2" /> Apple
            </div>
          </div>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
