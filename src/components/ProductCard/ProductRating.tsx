import React from 'react';
import { Star } from 'lucide-react';

interface ProductRatingProps {
  rating: string;
  reviews: number;
}

export function ProductRating({ rating, reviews }: ProductRatingProps) {
  const ratingNumber = parseFloat(rating);
  const fullStars = Math.floor(ratingNumber);
  const hasHalfStar = ratingNumber % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < fullStars
                ? 'text-yellow-400 fill-yellow-400'
                : index === fullStars && hasHalfStar
                ? 'text-yellow-400 fill-yellow-200'
                : 'text-gray-300'
            }`}
          />
        ))}
        <span className="ml-2 text-sm font-medium text-gray-700">{rating}</span>
      </div>
      <span className="text-sm text-gray-500">({reviews})</span>
    </div>
  );
}