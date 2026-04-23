import React from 'react';
import { Shield, Truck, Clock, CreditCard } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Shopping',
    description: '100% secure payment processing'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Free shipping on orders over 1M'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round the clock customer service'
  },
  {
    icon: CreditCard,
    title: 'Easy Returns',
    description: '30-day money-back guarantee'
  }
];

export function FeaturesSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
      <div className="absolute inset-0 opacity-5 bg-noise"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle gradient circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        {/* Light beams */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`feature-beam-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: `${200 + Math.random() * 300}px`,
              background: `linear-gradient(to bottom, rgba(99,102,241,0) 0%, rgba(99,102,241,0.1) 50%, rgba(99,102,241,0) 100%)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 animate-slide-up border border-gray-100/80"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-indigo-100/50 rounded-full blur-md"></div>
                <div className="relative bg-indigo-100 rounded-xl p-3 inline-block">
                  <feature.icon className="h-12 w-12 text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 mt-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}