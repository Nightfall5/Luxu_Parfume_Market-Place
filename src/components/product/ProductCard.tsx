import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { ProductImage } from './ProductImage';
import { ProductActions } from './ProductActions';
import { ProductDetails } from './ProductDetails';
import { formatToRupiah } from '../../utils/currency';
import { useProductAnalytics } from '../../hooks/useProductAnalytics';
import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const analytics = useProductAnalytics(product.id);

  return (
    <Card>
      <ProductImage
        src={product.image_url}
        alt={product.name}
        lowStock={product.stock < 5}
      />
      
      <div className="p-4">
        <ProductActions
          product={product}
          isLiked={isLiked}
          onLikeToggle={() => setIsLiked(!isLiked)}
        />

        <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-indigo-600">
            {formatToRupiah(product.price)}
          </span>
          
          <Button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            icon={ShoppingCart}
            variant="primary"
          >
            {product.stock === 0 ? 'Out of Stock' : ''}
          </Button>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-3 text-sm text-indigo-600 hover:text-indigo-700 hover:underline"
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>

        {showDetails && (
          <ProductDetails 
            product={product} 
            analytics={analytics}
          />
        )}
      </div>
    </Card>
  );
}