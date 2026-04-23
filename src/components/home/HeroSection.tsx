import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-indigo-800/90 z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-0" />
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-noise z-0" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-400/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 right-1/4 w-40 h-40 bg-rose-400/20 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              Discover Amazing Tech Products
            </h1>
            <p className="text-xl text-indigo-100 leading-relaxed max-w-lg">
              Find the latest and greatest in technology. From laptops to accessories, 
              we've got everything you need to stay connected and productive.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-indigo-600 font-semibold hover:bg-indigo-50 transition-colors group"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/categories"
                  className="inline-flex items-center px-8 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-indigo-600 transition-all"
                >
                  Browse Categories
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 rounded-xl blur-lg"></div>
              <div className="absolute -inset-1 bg-white/5 rounded-xl backdrop-blur-sm border border-white/20"></div>
              
              {/* Main image */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&q=80"
                alt="Tech showcase"
                className="relative rounded-lg shadow-2xl z-10"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-rose-500/20 rounded-full blur-lg"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}