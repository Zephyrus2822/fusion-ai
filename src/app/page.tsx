"use client";
import Image from "next/image";

// SVG icon placeholders for features
const FeatureIcon = ({ color }: { color: string }) => (
  <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" stroke={color} strokeWidth="4" fill="white" /><path d="M15 20l4 4 6-8" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const features = [
  {
    icon: <FeatureIcon color="#6366F1" />, // indigo-500
    title: "AI-Powered Video Creation",
    desc: "Turn your ideas into videos instantly with advanced AI algorithms.",
  },
  {
    icon: <FeatureIcon color="#06B6D4" />, // cyan-500
    title: "Customizable Templates",
    desc: "Choose from a variety of modern, professional video templates.",
  },
  {
    icon: <FeatureIcon color="#F59E42" />, // amber-500
    title: "Voiceover & Subtitles",
    desc: "Add AI voiceovers and auto-generated subtitles in seconds.",
  },
];

const steps = [
  { label: "1", text: "Input your script or idea" },
  { label: "2", text: "Select template & style" },
  { label: "3", text: "Let AI generate your video" },
  { label: "4", text: "Download or share instantly" },
];

export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-4 overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500">
        {/* Blurred Shape */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[700px] h-[500px] bg-gradient-to-tr from-indigo-400 via-purple-400 to-cyan-400 opacity-30 blur-3xl rounded-full animate-pulse" />
        </div>
        <div className="mb-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-100 to-white text-transparent bg-clip-text drop-shadow">AI Video Generator</h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">Create stunning, professional videos in minutes. No editing skills required. Just type, select, and let AI do the magic!</p>
          <a href="#contact" className="inline-block px-10 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-xl hover:bg-indigo-50 hover:text-indigo-700 transition">Get Started Free</a>
        </div>
        <div className="mt-8 flex justify-center">
          {/* Video/Image Mockup */}
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 bg-white/80 w-[340px] h-[200px] flex items-center justify-center">
            <svg width="120" height="120" fill="none" viewBox="0 0 120 120"><rect x="10" y="30" width="100" height="60" rx="12" fill="#E0E7FF" /><polygon points="55,50 75,60 55,70" fill="#6366F1" /></svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">Why Choose Us?</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="group bg-gradient-to-br from-white via-indigo-50 to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition duration-200 border border-transparent hover:border-indigo-200 dark:hover:border-cyan-800 flex flex-col items-center text-center">
              {f.icon}
              <h3 className="font-semibold text-2xl mb-2 group-hover:text-indigo-600 transition">{f.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-950">
        <h2 className="text-4xl font-bold text-center mb-14 text-gray-900 dark:text-white">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto relative">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center relative">
              <div className={`w-14 h-14 bg-white text-indigo-600 rounded-full flex items-center justify-center mb-3 font-bold text-2xl shadow-lg border-4 border-indigo-100 dark:border-gray-900 z-10`}>{step.label}</div>
              <p className="text-gray-700 dark:text-gray-300 text-lg font-medium text-center max-w-[140px]">{step.text}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 right-[-60px] w-28 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 opacity-60 rounded-full" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">Get Early Access</h2>
        <form className="max-w-xl mx-auto bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl p-10 shadow-xl flex flex-col gap-5 border border-indigo-100 dark:border-gray-800">
          <input type="text" placeholder="Your Name" className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg" required />
          <input type="email" placeholder="Your Email" className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-lg" required />
          <button type="submit" className="mt-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-cyan-500 hover:to-indigo-600 transition-transform duration-200 text-lg">Request Access</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-base py-8 bg-transparent">&copy; {new Date().getFullYear()} <span className="font-semibold text-indigo-600">AI Video Generator</span>. All rights reserved.</footer>
    </div>
  );
}
