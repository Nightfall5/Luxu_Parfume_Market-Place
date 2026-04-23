import { useState } from 'react';
import { useToast } from './useToast';
import type { Product } from '../types';

export function useCompare() {
  const [compareItems, setCompareItems] = useState<Product[]>([]);
  const { showToast } = useToast();
  const MAX_COMPARE_ITEMS = 4;

  const toggleCompare = (product: Product) => {
    setCompareItems(prev => {
      const isComparing = prev.some(item => item.id === product.id);
      
      if (isComparing) {
        return prev.filter(item => item.id !== product.id);
      }
      
      if (prev.length >= MAX_COMPARE_ITEMS) {
        showToast(`You can only compare up to ${MAX_COMPARE_ITEMS} items`, 'error');
        return prev;
      }
      
      return [...prev, product];
    });
  };

  const isComparing = (productId: string) => {
    return compareItems.some(item => item.id === productId);
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  return {
    compareItems,
    toggleCompare,
    isComparing,
    clearCompare
  };
}