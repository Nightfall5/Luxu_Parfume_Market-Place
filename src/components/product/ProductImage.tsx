import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  lowStock?: boolean;
}

export function ProductImage({ src, alt, lowStock }: ProductImageProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-48 object-cover transition-transform duration-700 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />
      <div className={`
        absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300
        ${isHovered ? 'opacity-100' : 'opacity-0'}
      `} />
      {lowStock && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
          Low Stock
        </div>
      )}
    </div>
  );
}