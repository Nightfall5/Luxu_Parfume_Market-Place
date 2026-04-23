import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div className={`
      bg-white rounded-xl shadow-md overflow-hidden
      ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
}