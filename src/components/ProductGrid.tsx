import React from 'react';
import { ProductCard } from './ProductCard/ProductCard';
import type { Product } from '../types';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onCompare?: (product: Product) => void;
  isComparing?: (productId: string) => boolean;
}

export function ProductGrid({ products, onAddToCart, onCompare, isComparing }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
      {products.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      ) : (
        products.map((product, index) => (
          <div
            key={product.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
              onCompare={onCompare}
              isComparing={isComparing?.(product.id) ?? false}
            />
          </div>
        ))
      )}
    </div>
  );
}
