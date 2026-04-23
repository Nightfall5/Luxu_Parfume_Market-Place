import React from 'react';
import { Eye, Star, ShoppingBag, Clock } from 'lucide-react';

interface ProductDetailsProps {
  product: {
    stock: number;
    created_at: string;
  };
  analytics: {
    recentViews: number;
    rating: string;
    reviews: number;
  };
}

export function ProductDetails({ product, analytics }: ProductDetailsProps) {
  const createdDate = new Date(product.created_at).toLocaleDateString();

  return (
    <div className="mt-4 pt-4 border-t border-gray-200">
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div className="flex items-center">
          <ShoppingBag className="h-4 w-4 mr-2 text-indigo-600" />
          <span>Stock: {product.stock}</span>
        </div>
        <div className="flex items-center">
          <Eye className="h-4 w-4 mr-2 text-indigo-600" />
          <span>{analytics.recentViews} views</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 mr-2 text-indigo-600" />
          <span>{analytics.rating} rating ({analytics.reviews} reviews)</span>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-indigo-600" />
          <span>Added: {createdDate}</span>
        </div>
      </div>
    </div>
  );
}