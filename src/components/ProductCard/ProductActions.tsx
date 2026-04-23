import React from 'react';
import { Share2 } from 'lucide-react';
import { WishlistButton } from '../WishlistButton';
import { CompareButton } from '../CompareButton';
import { useShare } from '../../hooks/useShare';
import type { Product } from '../../types';

interface ProductActionsProps {
  product: Product;
  isLiked: boolean;
  onLikeToggle: () => void;
  isComparing?: boolean;
  onCompare?: (product: Product) => void;
}

export function ProductActions({
  product,
  isLiked,
  onLikeToggle,
  isComparing = false,
  onCompare = () => {}
}: ProductActionsProps) {
  const { shareProduct } = useShare();

  return (
    <div className="absolute top-4 right-4 space-y-2">
      <WishlistButton
        productId={product.id}
        isLiked={isLiked}
        onToggle={onLikeToggle}
      />
      <CompareButton
        product={product}
        isComparing={isComparing}
        onCompare={onCompare}
      />
      <button
        onClick={() => shareProduct(product)}
        className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg block transition-colors"
        aria-label="Share product"
      >
        <Share2 className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  );
}