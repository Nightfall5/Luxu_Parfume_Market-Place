import { useCallback } from 'react';
import { useToast } from './useToast';
import { formatToRupiah } from '../utils/currency';
import type { Product } from '../types';

export function useShare() {
  const { showToast } = useToast();

  const shareProduct = useCallback(async (product: Product) => {
    try {
      const shareText = `Check out ${product.name}!\n\n${product.description}\n\nPrice: ${formatToRupiah(product.price)}`;
      
      await navigator.clipboard.writeText(shareText);
      showToast('Product details copied to clipboard!', 'success');
    } catch (error) {
      showToast('Could not share the product at this time', 'error');
      console.error('Sharing error:', error);
    }
  }, [showToast]);

  return { shareProduct };
}