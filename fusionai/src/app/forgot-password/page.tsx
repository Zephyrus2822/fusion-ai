"use client";

import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa6";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Password reset email sent to:", email);
      setLoading(false);
      alert("Password reset link sent to your email!");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f8f6f1] to-[#dceefd] relative overflow-hidden">
      {/* Blurred Gradient Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"></div>

      {/* Forgot Password Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/30 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 text-black">
        <h2 className="text-3xl font-bold text-center mb-6">Forgot Password</h2>
        <p className="text-center text-gray-600 text-sm mb-4">
          {"Enter your registered email address, and we'll send you a password reset link."}
        </p>
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Back to Login Link */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Remember your password?{" "}
          <a href="/login" className="text-indigo-600 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
