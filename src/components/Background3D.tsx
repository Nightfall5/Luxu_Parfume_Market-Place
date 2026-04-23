import React, { useEffect, useState } from 'react';

export function Background3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 0.1,
        y: (e.clientY / window.innerHeight - 0.5) * 0.1
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient with smooth transition */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-indigo-50 transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      
      {/* Dynamic color overlay that follows mouse */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-pink-300/10 via-purple-300/10 to-indigo-400/10 opacity-70 transition-all duration-1000"
        style={{
          transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
        }}
      />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-purple-300 to-indigo-400 animate-gradient" />
      </div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-noise mix-blend-overlay" />
      
      {/* Glowing orbs with smoother animations */}
      <div className="absolute w-full h-full overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${-Math.random() * 20}s`,
              animationDuration: `${30 + Math.random() * 20}s`,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translate(${mousePosition.x * (i + 1) * 10}px, ${mousePosition.y * (i + 1) * 10}px)`,
            }}
          >
            <div 
              className="rounded-full transition-all duration-1000"
              style={{
                width: `${150 + Math.random() * 200}px`,
                height: `${150 + Math.random() * 200}px`,
                background: `radial-gradient(circle, rgba(${99 + Math.random() * 50}, ${50 + Math.random() * 100}, ${200 + Math.random() * 55}, 0.${Math.floor(Math.random() * 2 + 1)}) 0%, rgba(255,255,255,0) 70%)`,
                filter: 'blur(40px)',
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute w-full h-full">
        {/* Large blurred shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${-Math.random() * 15}s`,
              animationDuration: '30s',
              transform: `scale(${1 + Math.random() * 1.5})`,
              opacity: 0.05 + Math.random() * 0.05,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="w-64 h-64 rounded-full bg-indigo-400 blur-3xl" />
          </div>
        ))}
        
        {/* Medium geometric shapes with glass effect */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${-Math.random() * 20}s`,
              animationDuration: '25s',
              transform: `scale(${0.5 + Math.random()}) rotate(${Math.random() * 360}deg)`,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div 
              className={`
                ${Math.random() > 0.5 ? 'rounded-xl' : Math.random() > 0.5 ? 'rounded-full' : 'rounded-3xl'}
                ${Math.random() > 0.5 ? 'bg-indigo-100/20' : Math.random() > 0.5 ? 'bg-purple-100/15' : 'bg-rose-100/20'} 
                backdrop-blur-sm shadow-lg border border-white/10
                transition-all duration-1000
              `}
              style={{
                width: `${Math.random() * 100 + 100}px`,
                height: `${Math.random() * 100 + 100}px`,
              }}
            />
          </div>
        ))}
        
        {/* Particle dots with smoother animations */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: Math.random() > 0.5 ? 'rgba(99, 102, 241, 0.4)' : 'rgba(168, 85, 247, 0.4)',
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${-Math.random() * 4}s`,
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translate(${mousePosition.x * (i % 5 + 1) * 15}px, ${mousePosition.y * (i % 5 + 1) * 15}px)`,
            }}
          />
        ))}
      </div>
      
      {/* Light beams with smoother transitions */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(4)].map((_, i) => (
          <div
            key={`beam-${i}`}
            className="absolute animate-beam"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '1px',
              height: `${300 + Math.random() * 400}px`,
              background: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animationDelay: `${-Math.random() * 15}s`,
              animationDuration: '15s',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}