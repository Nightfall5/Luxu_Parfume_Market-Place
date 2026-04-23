import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800"></div>
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-5 bg-noise"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        
        {/* Light rays */}
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-white/0 via-white/10 to-white/0 transform -translate-x-1/2"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`newsletter-particle-${i}`}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="relative">
          <div className="absolute -inset-4 bg-white/5 rounded-xl blur-md"></div>
          <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Offers
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive deals, new product alerts, and tech tips delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:outline-none bg-white/10 backdrop-blur-sm text-white placeholder-white/60 border border-white/20"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              >
                Subscribe
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}