import React, { useState } from 'react';
import { ShoppingCart, Share2, Heart, Star, Eye } from 'lucide-react';
import { formatToRupiah } from '../utils/currency';
import { useProductAnalytics } from '../hooks/useProductAnalytics';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const analytics = useProductAnalytics(product.id);

  const handleShare = async () => {
    if (!navigator.share) {
      alert('Share feature is not supported in this environment');
      return;
    }

    try {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 space-y-2">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg block transition-colors"
            aria-label={isLiked ? 'Unlike product' : 'Like product'}
          >
            <Heart
              className={`h-5 w-5 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
          <button
            onClick={handleShare}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg block transition-colors"
            aria-label="Share product"
          >
            <Share2 className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{analytics.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({analytics.reviews} reviews)</span>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">
            {formatToRupiah(product.price)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-2 text-sm text-indigo-600 hover:text-indigo-700"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Stock: {product.stock}</span>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                <span>{analytics.recentViews} views</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}