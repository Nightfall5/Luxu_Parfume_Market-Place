import React from 'react';
import { SplitSquareVertical } from 'lucide-react';
import { useToast } from '../hooks/useToast';
import type { Product } from '../types';

interface CompareButtonProps {
  product: Product;
  onCompare: (product: Product) => void;
  isComparing: boolean;
}

export function CompareButton({ product, onCompare, isComparing }: CompareButtonProps) {
  const { showToast } = useToast();

  const handleClick = () => {
    onCompare(product);
    showToast(
      isComparing ? 'Removed from comparison' : 'Added to comparison',
      'success'
    );
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-all duration-300 ${
        isComparing
          ? 'bg-indigo-50 text-indigo-600'
          : 'bg-white/90 hover:bg-white text-gray-600'
      }`}
      aria-label={isComparing ? 'Remove from comparison' : 'Add to comparison'}
    >
      <SplitSquareVertical className="h-5 w-5" />
    </button>
  );
}