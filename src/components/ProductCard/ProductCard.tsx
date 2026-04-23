import React, { useState } from 'react';
import { ShoppingCart, Eye, Star, Clock, Package, Truck, Heart, Share2 } from 'lucide-react';
import { formatToRupiah } from '../../utils/currency';
import { ProductRating } from './ProductRating';
import { ProductActions } from './ProductActions';
import { ProductDetails } from './ProductDetails';
import { useProductAnalytics } from '../../hooks/useProductAnalytics';
import { motion } from 'framer-motion';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onCompare?: (product: Product) => void;
  isComparing?: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  onCompare,
  isComparing = false
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const analytics = useProductAnalytics(product.id);

  const isNew = new Date().getTime() - new Date(product.created_at).getTime() < 7 * 24 * 60 * 60 * 1000;
  const hasFreeShipping = product.price >= 1000000;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image_url}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110 blur-sm' : 'scale-100'
          }`}
        />
        
        {/* Overlay on hover */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick action buttons */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-6 w-6 text-indigo-600" />
          </button>
          <button
            onClick={() => setIsLiked(!isLiked)}
            className={`p-3 rounded-full shadow-lg transform hover:scale-110 transition-all ${
              isLiked ? 'bg-red-50 text-red-500' : 'bg-white/90 hover:bg-white text-gray-600'
            }`}
            aria-label={isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <Heart className={`h-6 w-6 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button
            onClick={() => onCompare?.(product)}
            className="bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all"
            aria-label="Compare product"
          >
            <Share2 className="h-6 w-6 text-indigo-600" />
          </button>
        </div>

        {/* Status badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.stock < 5 && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Low Stock
            </span>
          )}
          {isNew && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              New Arrival
            </span>
          )}
          {hasFreeShipping && (
            <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Free Shipping
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold group-hover:text-indigo-600 transition-colors line-clamp-1">
            {product.name}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <ProductRating rating={analytics.rating} reviews={analytics.reviews} />
          <span className="text-sm text-gray-500 flex items-center">
            <Package className="h-4 w-4 mr-1" />
            {product.stock} in stock
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-indigo-600">
              {formatToRupiah(product.price)}
            </span>
            {hasFreeShipping && (
              <div className="text-sm text-green-600 flex items-center mt-1">
                <Truck className="h-4 w-4 mr-1" />
                Free Shipping
              </div>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className={`relative overflow-hidden ${
              product.stock === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2`}
          >
            <ShoppingCart className={`h-5 w-5 ${product.stock === 0 ? 'opacity-50' : ''}`} />
            <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 text-sm text-indigo-600 hover:text-indigo-700 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && <ProductDetails product={product} analytics={analytics} />}
      </div>
    </motion.div>
  );
}